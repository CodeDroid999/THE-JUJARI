(() => {
  var e = {
      3: (e, t, a) => {
        "use strict";
        function s(e) {
          return (
            null !== e &&
            "object" == typeof e &&
            "constructor" in e &&
            e.constructor === Object
          );
        }
        function i(e, t) {
          void 0 === e && (e = {}),
            void 0 === t && (t = {}),
            Object.keys(t).forEach(function (a) {
              void 0 === e[a]
                ? (e[a] = t[a])
                : s(t[a]) &&
                  s(e[a]) &&
                  Object.keys(t[a]).length > 0 &&
                  i(e[a], t[a]);
            });
        }
        a.r(t), a.d(t, { default: () => pe });
        var n = "undefined" != typeof document ? document : {},
          r = {
            body: {},
            addEventListener: function () {},
            removeEventListener: function () {},
            activeElement: { blur: function () {}, nodeName: "" },
            querySelector: function () {
              return null;
            },
            querySelectorAll: function () {
              return [];
            },
            getElementById: function () {
              return null;
            },
            createEvent: function () {
              return { initEvent: function () {} };
            },
            createElement: function () {
              return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function () {},
                getElementsByTagName: function () {
                  return [];
                },
              };
            },
            createElementNS: function () {
              return {};
            },
            importNode: function () {
              return null;
            },
            location: {
              hash: "",
              host: "",
              hostname: "",
              href: "",
              origin: "",
              pathname: "",
              protocol: "",
              search: "",
            },
          };
        i(n, r);
        var o = "undefined" != typeof window ? window : {};
        i(o, {
          document: r,
          navigator: { userAgent: "" },
          location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: "",
          },
          history: {
            replaceState: function () {},
            pushState: function () {},
            go: function () {},
            back: function () {},
          },
          CustomEvent: function () {
            return this;
          },
          addEventListener: function () {},
          removeEventListener: function () {},
          getComputedStyle: function () {
            return {
              getPropertyValue: function () {
                return "";
              },
            };
          },
          Image: function () {},
          Date: function () {},
          screen: {},
          setTimeout: function () {},
          clearTimeout: function () {},
          matchMedia: function () {
            return {};
          },
        });
        class l {
          constructor(e) {
            const t = this;
            for (let a = 0; a < e.length; a += 1) t[a] = e[a];
            return (t.length = e.length), this;
          }
        }
        function d(e, t) {
          const a = [];
          let s = 0;
          if (e && !t && e instanceof l) return e;
          if (e)
            if ("string" == typeof e) {
              let i, r;
              const o = e.trim();
              if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
                let e = "div";
                for (
                  0 === o.indexOf("<li") && (e = "ul"),
                    0 === o.indexOf("<tr") && (e = "tbody"),
                    (0 !== o.indexOf("<td") && 0 !== o.indexOf("<th")) ||
                      (e = "tr"),
                    0 === o.indexOf("<tbody") && (e = "table"),
                    0 === o.indexOf("<option") && (e = "select"),
                    r = n.createElement(e),
                    r.innerHTML = o,
                    s = 0;
                  s < r.childNodes.length;
                  s += 1
                )
                  a.push(r.childNodes[s]);
              } else
                for (
                  i =
                    t || "#" !== e[0] || e.match(/[ .<>:~]/)
                      ? (t || n).querySelectorAll(e.trim())
                      : [n.getElementById(e.trim().split("#")[1])],
                    s = 0;
                  s < i.length;
                  s += 1
                )
                  i[s] && a.push(i[s]);
            } else if (e.nodeType || e === o || e === n) a.push(e);
            else if (e.length > 0 && e[0].nodeType)
              for (s = 0; s < e.length; s += 1) a.push(e[s]);
          return new l(a);
        }
        function c(e) {
          const t = [];
          for (let a = 0; a < e.length; a += 1)
            -1 === t.indexOf(e[a]) && t.push(e[a]);
          return t;
        }
        (d.fn = l.prototype), (d.Class = l), (d.Dom7 = l);
        "resize scroll".split(" ");
        const p = {
          addClass: function (e) {
            if (void 0 === e) return this;
            const t = e.split(" ");
            for (let e = 0; e < t.length; e += 1)
              for (let a = 0; a < this.length; a += 1)
                void 0 !== this[a] &&
                  void 0 !== this[a].classList &&
                  this[a].classList.add(t[e]);
            return this;
          },
          removeClass: function (e) {
            const t = e.split(" ");
            for (let e = 0; e < t.length; e += 1)
              for (let a = 0; a < this.length; a += 1)
                void 0 !== this[a] &&
                  void 0 !== this[a].classList &&
                  this[a].classList.remove(t[e]);
            return this;
          },
          hasClass: function (e) {
            return !!this[0] && this[0].classList.contains(e);
          },
          toggleClass: function (e) {
            const t = e.split(" ");
            for (let e = 0; e < t.length; e += 1)
              for (let a = 0; a < this.length; a += 1)
                void 0 !== this[a] &&
                  void 0 !== this[a].classList &&
                  this[a].classList.toggle(t[e]);
            return this;
          },
          attr: function (e, t) {
            if (1 === arguments.length && "string" == typeof e)
              return this[0] ? this[0].getAttribute(e) : void 0;
            for (let a = 0; a < this.length; a += 1)
              if (2 === arguments.length) this[a].setAttribute(e, t);
              else
                for (const t in e)
                  (this[a][t] = e[t]), this[a].setAttribute(t, e[t]);
            return this;
          },
          removeAttr: function (e) {
            for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this;
          },
          data: function (e, t) {
            let a;
            if (void 0 !== t) {
              for (let s = 0; s < this.length; s += 1)
                (a = this[s]),
                  a.dom7ElementDataStorage || (a.dom7ElementDataStorage = {}),
                  (a.dom7ElementDataStorage[e] = t);
              return this;
            }
            if (((a = this[0]), a)) {
              if (a.dom7ElementDataStorage && e in a.dom7ElementDataStorage)
                return a.dom7ElementDataStorage[e];
              const t = a.getAttribute(`data-${e}`);
              return t || void 0;
            }
          },
          transform: function (e) {
            for (let t = 0; t < this.length; t += 1) {
              const a = this[t].style;
              (a.webkitTransform = e), (a.transform = e);
            }
            return this;
          },
          transition: function (e) {
            "string" != typeof e && (e = `${e}ms`);
            for (let t = 0; t < this.length; t += 1) {
              const a = this[t].style;
              (a.webkitTransitionDuration = e), (a.transitionDuration = e);
            }
            return this;
          },
          on: function (...e) {
            let [t, a, s, i] = e;
            function n(e) {
              const t = e.target;
              if (!t) return;
              const i = e.target.dom7EventData || [];
              if ((i.indexOf(e) < 0 && i.unshift(e), d(t).is(a))) s.apply(t, i);
              else {
                const e = d(t).parents();
                for (let t = 0; t < e.length; t += 1)
                  d(e[t]).is(a) && s.apply(e[t], i);
              }
            }
            function r(e) {
              const t = (e && e.target && e.target.dom7EventData) || [];
              t.indexOf(e) < 0 && t.unshift(e), s.apply(this, t);
            }
            "function" == typeof e[1] && (([t, s, i] = e), (a = void 0)),
              i || (i = !1);
            const o = t.split(" ");
            let l;
            for (let e = 0; e < this.length; e += 1) {
              const t = this[e];
              if (a)
                for (l = 0; l < o.length; l += 1) {
                  const e = o[l];
                  t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                    t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                    t.dom7LiveListeners[e].push({
                      listener: s,
                      proxyListener: n,
                    }),
                    t.addEventListener(e, n, i);
                }
              else
                for (l = 0; l < o.length; l += 1) {
                  const e = o[l];
                  t.dom7Listeners || (t.dom7Listeners = {}),
                    t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                    t.dom7Listeners[e].push({ listener: s, proxyListener: r }),
                    t.addEventListener(e, r, i);
                }
            }
            return this;
          },
          off: function (...e) {
            let [t, a, s, i] = e;
            "function" == typeof e[1] && (([t, s, i] = e), (a = void 0)),
              i || (i = !1);
            const n = t.split(" ");
            for (let e = 0; e < n.length; e += 1) {
              const t = n[e];
              for (let e = 0; e < this.length; e += 1) {
                const n = this[e];
                let r;
                if (
                  (!a && n.dom7Listeners
                    ? (r = n.dom7Listeners[t])
                    : a && n.dom7LiveListeners && (r = n.dom7LiveListeners[t]),
                  r && r.length)
                )
                  for (let e = r.length - 1; e >= 0; e -= 1) {
                    const a = r[e];
                    (s && a.listener === s) ||
                    (s &&
                      a.listener &&
                      a.listener.dom7proxy &&
                      a.listener.dom7proxy === s)
                      ? (n.removeEventListener(t, a.proxyListener, i),
                        r.splice(e, 1))
                      : s ||
                        (n.removeEventListener(t, a.proxyListener, i),
                        r.splice(e, 1));
                  }
              }
            }
            return this;
          },
          trigger: function (...e) {
            const t = e[0].split(" "),
              a = e[1];
            for (let s = 0; s < t.length; s += 1) {
              const i = t[s];
              for (let t = 0; t < this.length; t += 1) {
                const s = this[t];
                let r;
                try {
                  r = new o.CustomEvent(i, {
                    detail: a,
                    bubbles: !0,
                    cancelable: !0,
                  });
                } catch (e) {
                  (r = n.createEvent("Event")),
                    r.initEvent(i, !0, !0),
                    (r.detail = a);
                }
                (s.dom7EventData = e.filter((e, t) => t > 0)),
                  s.dispatchEvent(r),
                  (s.dom7EventData = []),
                  delete s.dom7EventData;
              }
            }
            return this;
          },
          transitionEnd: function (e) {
            const t = ["webkitTransitionEnd", "transitionend"],
              a = this;
            let s;
            function i(n) {
              if (n.target === this)
                for (e.call(this, n), s = 0; s < t.length; s += 1)
                  a.off(t[s], i);
            }
            if (e) for (s = 0; s < t.length; s += 1) a.on(t[s], i);
            return this;
          },
          outerWidth: function (e) {
            if (this.length > 0) {
              if (e) {
                const e = this.styles();
                return (
                  this[0].offsetWidth +
                  parseFloat(e.getPropertyValue("margin-right")) +
                  parseFloat(e.getPropertyValue("margin-left"))
                );
              }
              return this[0].offsetWidth;
            }
            return null;
          },
          outerHeight: function (e) {
            if (this.length > 0) {
              if (e) {
                const e = this.styles();
                return (
                  this[0].offsetHeight +
                  parseFloat(e.getPropertyValue("margin-top")) +
                  parseFloat(e.getPropertyValue("margin-bottom"))
                );
              }
              return this[0].offsetHeight;
            }
            return null;
          },
          offset: function () {
            if (this.length > 0) {
              const e = this[0],
                t = e.getBoundingClientRect(),
                a = n.body,
                s = e.clientTop || a.clientTop || 0,
                i = e.clientLeft || a.clientLeft || 0,
                r = e === o ? o.scrollY : e.scrollTop,
                l = e === o ? o.scrollX : e.scrollLeft;
              return { top: t.top + r - s, left: t.left + l - i };
            }
            return null;
          },
          css: function (e, t) {
            let a;
            if (1 === arguments.length) {
              if ("string" != typeof e) {
                for (a = 0; a < this.length; a += 1)
                  for (let t in e) this[a].style[t] = e[t];
                return this;
              }
              if (this[0])
                return o.getComputedStyle(this[0], null).getPropertyValue(e);
            }
            if (2 === arguments.length && "string" == typeof e) {
              for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
              return this;
            }
            return this;
          },
          each: function (e) {
            if (!e) return this;
            for (let t = 0; t < this.length; t += 1)
              if (!1 === e.call(this[t], t, this[t])) return this;
            return this;
          },
          html: function (e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
            for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this;
          },
          text: function (e) {
            if (void 0 === e)
              return this[0] ? this[0].textContent.trim() : null;
            for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this;
          },
          is: function (e) {
            const t = this[0];
            let a, s;
            if (!t || void 0 === e) return !1;
            if ("string" == typeof e) {
              if (t.matches) return t.matches(e);
              if (t.webkitMatchesSelector) return t.webkitMatchesSelector(e);
              if (t.msMatchesSelector) return t.msMatchesSelector(e);
              for (a = d(e), s = 0; s < a.length; s += 1)
                if (a[s] === t) return !0;
              return !1;
            }
            if (e === n) return t === n;
            if (e === o) return t === o;
            if (e.nodeType || e instanceof l) {
              for (a = e.nodeType ? [e] : e, s = 0; s < a.length; s += 1)
                if (a[s] === t) return !0;
              return !1;
            }
            return !1;
          },
          index: function () {
            let e,
              t = this[0];
            if (t) {
              for (e = 0; null !== (t = t.previousSibling); )
                1 === t.nodeType && (e += 1);
              return e;
            }
          },
          eq: function (e) {
            if (void 0 === e) return this;
            const t = this.length;
            let a;
            return e > t - 1
              ? new l([])
              : e < 0
              ? ((a = t + e), new l(a < 0 ? [] : [this[a]]))
              : new l([this[e]]);
          },
          append: function (...e) {
            let t;
            for (let a = 0; a < e.length; a += 1) {
              t = e[a];
              for (let e = 0; e < this.length; e += 1)
                if ("string" == typeof t) {
                  const a = n.createElement("div");
                  for (a.innerHTML = t; a.firstChild; )
                    this[e].appendChild(a.firstChild);
                } else if (t instanceof l)
                  for (let a = 0; a < t.length; a += 1)
                    this[e].appendChild(t[a]);
                else this[e].appendChild(t);
            }
            return this;
          },
          prepend: function (e) {
            let t, a;
            for (t = 0; t < this.length; t += 1)
              if ("string" == typeof e) {
                const s = n.createElement("div");
                for (
                  s.innerHTML = e, a = s.childNodes.length - 1;
                  a >= 0;
                  a -= 1
                )
                  this[t].insertBefore(s.childNodes[a], this[t].childNodes[0]);
              } else if (e instanceof l)
                for (a = 0; a < e.length; a += 1)
                  this[t].insertBefore(e[a], this[t].childNodes[0]);
              else this[t].insertBefore(e, this[t].childNodes[0]);
            return this;
          },
          next: function (e) {
            return this.length > 0
              ? e
                ? this[0].nextElementSibling &&
                  d(this[0].nextElementSibling).is(e)
                  ? new l([this[0].nextElementSibling])
                  : new l([])
                : this[0].nextElementSibling
                ? new l([this[0].nextElementSibling])
                : new l([])
              : new l([]);
          },
          nextAll: function (e) {
            const t = [];
            let a = this[0];
            if (!a) return new l([]);
            for (; a.nextElementSibling; ) {
              const s = a.nextElementSibling;
              e ? d(s).is(e) && t.push(s) : t.push(s), (a = s);
            }
            return new l(t);
          },
          prev: function (e) {
            if (this.length > 0) {
              const t = this[0];
              return e
                ? t.previousElementSibling && d(t.previousElementSibling).is(e)
                  ? new l([t.previousElementSibling])
                  : new l([])
                : t.previousElementSibling
                ? new l([t.previousElementSibling])
                : new l([]);
            }
            return new l([]);
          },
          prevAll: function (e) {
            const t = [];
            let a = this[0];
            if (!a) return new l([]);
            for (; a.previousElementSibling; ) {
              const s = a.previousElementSibling;
              e ? d(s).is(e) && t.push(s) : t.push(s), (a = s);
            }
            return new l(t);
          },
          parent: function (e) {
            const t = [];
            for (let a = 0; a < this.length; a += 1)
              null !== this[a].parentNode &&
                (e
                  ? d(this[a].parentNode).is(e) && t.push(this[a].parentNode)
                  : t.push(this[a].parentNode));
            return d(c(t));
          },
          parents: function (e) {
            const t = [];
            for (let a = 0; a < this.length; a += 1) {
              let s = this[a].parentNode;
              for (; s; )
                e ? d(s).is(e) && t.push(s) : t.push(s), (s = s.parentNode);
            }
            return d(c(t));
          },
          closest: function (e) {
            let t = this;
            return void 0 === e
              ? new l([])
              : (t.is(e) || (t = t.parents(e).eq(0)), t);
          },
          find: function (e) {
            const t = [];
            for (let a = 0; a < this.length; a += 1) {
              const s = this[a].querySelectorAll(e);
              for (let e = 0; e < s.length; e += 1) t.push(s[e]);
            }
            return new l(t);
          },
          children: function (e) {
            const t = [];
            for (let a = 0; a < this.length; a += 1) {
              const s = this[a].childNodes;
              for (let a = 0; a < s.length; a += 1)
                e
                  ? 1 === s[a].nodeType && d(s[a]).is(e) && t.push(s[a])
                  : 1 === s[a].nodeType && t.push(s[a]);
            }
            return new l(c(t));
          },
          filter: function (e) {
            const t = [],
              a = this;
            for (let s = 0; s < a.length; s += 1)
              e.call(a[s], s, a[s]) && t.push(a[s]);
            return new l(t);
          },
          remove: function () {
            for (let e = 0; e < this.length; e += 1)
              this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this;
          },
          add: function (...e) {
            const t = this;
            let a, s;
            for (a = 0; a < e.length; a += 1) {
              const i = d(e[a]);
              for (s = 0; s < i.length; s += 1)
                (t[t.length] = i[s]), (t.length += 1);
            }
            return t;
          },
          styles: function () {
            return this[0] ? o.getComputedStyle(this[0], null) : {};
          },
        };
        Object.keys(p).forEach((e) => {
          d.fn[e] = d.fn[e] || p[e];
        });
        const u = {
            deleteProps(e) {
              const t = e;
              Object.keys(t).forEach((e) => {
                try {
                  t[e] = null;
                } catch (e) {}
                try {
                  delete t[e];
                } catch (e) {}
              });
            },
            nextTick: (e, t = 0) => setTimeout(e, t),
            now: () => Date.now(),
            getTranslate(e, t = "x") {
              let a, s, i;
              const n = o.getComputedStyle(e, null);
              return (
                o.WebKitCSSMatrix
                  ? ((s = n.transform || n.webkitTransform),
                    s.split(",").length > 6 &&
                      (s = s
                        .split(", ")
                        .map((e) => e.replace(",", "."))
                        .join(", ")),
                    (i = new o.WebKitCSSMatrix("none" === s ? "" : s)))
                  : ((i =
                      n.MozTransform ||
                      n.OTransform ||
                      n.MsTransform ||
                      n.msTransform ||
                      n.transform ||
                      n
                        .getPropertyValue("transform")
                        .replace("translate(", "matrix(1, 0, 0, 1,")),
                    (a = i.toString().split(","))),
                "x" === t &&
                  (s = o.WebKitCSSMatrix
                    ? i.m41
                    : 16 === a.length
                    ? parseFloat(a[12])
                    : parseFloat(a[4])),
                "y" === t &&
                  (s = o.WebKitCSSMatrix
                    ? i.m42
                    : 16 === a.length
                    ? parseFloat(a[13])
                    : parseFloat(a[5])),
                s || 0
              );
            },
            parseUrlQuery(e) {
              const t = {};
              let a,
                s,
                i,
                n,
                r = e || o.location.href;
              if ("string" == typeof r && r.length)
                for (
                  r = r.indexOf("?") > -1 ? r.replace(/\S*\?/, "") : "",
                    s = r.split("&").filter((e) => "" !== e),
                    n = s.length,
                    a = 0;
                  a < n;
                  a += 1
                )
                  (i = s[a].replace(/#\S+/g, "").split("=")),
                    (t[decodeURIComponent(i[0])] =
                      void 0 === i[1]
                        ? void 0
                        : decodeURIComponent(i[1]) || "");
              return t;
            },
            isObject: (e) =>
              "object" == typeof e &&
              null !== e &&
              e.constructor &&
              e.constructor === Object,
            extend(...e) {
              const t = Object(e[0]);
              for (let a = 1; a < e.length; a += 1) {
                const s = e[a];
                if (null != s) {
                  const e = Object.keys(Object(s));
                  for (let a = 0, i = e.length; a < i; a += 1) {
                    const i = e[a],
                      n = Object.getOwnPropertyDescriptor(s, i);
                    void 0 !== n &&
                      n.enumerable &&
                      (u.isObject(t[i]) && u.isObject(s[i])
                        ? u.extend(t[i], s[i])
                        : !u.isObject(t[i]) && u.isObject(s[i])
                        ? ((t[i] = {}), u.extend(t[i], s[i]))
                        : (t[i] = s[i]));
                  }
                }
              }
              return t;
            },
          },
          h = {
            touch: !!(
              "ontouchstart" in o ||
              (o.DocumentTouch && n instanceof o.DocumentTouch)
            ),
            pointerEvents:
              !!o.PointerEvent &&
              "maxTouchPoints" in o.navigator &&
              o.navigator.maxTouchPoints >= 0,
            observer: "MutationObserver" in o || "WebkitMutationObserver" in o,
            passiveListener: (function () {
              let e = !1;
              try {
                const t = Object.defineProperty({}, "passive", {
                  get() {
                    e = !0;
                  },
                });
                o.addEventListener("testPassiveListener", null, t);
              } catch (e) {}
              return e;
            })(),
            gestures: "ongesturestart" in o,
          };
        class m {
          constructor(e = {}) {
            const t = this;
            (t.params = e),
              (t.eventsListeners = {}),
              t.params &&
                t.params.on &&
                Object.keys(t.params.on).forEach((e) => {
                  t.on(e, t.params.on[e]);
                });
          }
          on(e, t, a) {
            const s = this;
            if ("function" != typeof t) return s;
            const i = a ? "unshift" : "push";
            return (
              e.split(" ").forEach((e) => {
                s.eventsListeners[e] || (s.eventsListeners[e] = []),
                  s.eventsListeners[e][i](t);
              }),
              s
            );
          }
          once(e, t, a) {
            const s = this;
            if ("function" != typeof t) return s;
            function i(...a) {
              s.off(e, i), i.f7proxy && delete i.f7proxy, t.apply(s, a);
            }
            return (i.f7proxy = t), s.on(e, i, a);
          }
          off(e, t) {
            const a = this;
            return a.eventsListeners
              ? (e.split(" ").forEach((e) => {
                  void 0 === t
                    ? (a.eventsListeners[e] = [])
                    : a.eventsListeners[e] &&
                      a.eventsListeners[e].length &&
                      a.eventsListeners[e].forEach((s, i) => {
                        (s === t || (s.f7proxy && s.f7proxy === t)) &&
                          a.eventsListeners[e].splice(i, 1);
                      });
                }),
                a)
              : a;
          }
          emit(...e) {
            const t = this;
            if (!t.eventsListeners) return t;
            let a, s, i;
            "string" == typeof e[0] || Array.isArray(e[0])
              ? ((a = e[0]), (s = e.slice(1, e.length)), (i = t))
              : ((a = e[0].events), (s = e[0].data), (i = e[0].context || t));
            return (
              (Array.isArray(a) ? a : a.split(" ")).forEach((e) => {
                if (t.eventsListeners && t.eventsListeners[e]) {
                  const a = [];
                  t.eventsListeners[e].forEach((e) => {
                    a.push(e);
                  }),
                    a.forEach((e) => {
                      e.apply(i, s);
                    });
                }
              }),
              t
            );
          }
          useModulesParams(e) {
            const t = this;
            t.modules &&
              Object.keys(t.modules).forEach((a) => {
                const s = t.modules[a];
                s.params && u.extend(e, s.params);
              });
          }
          useModules(e = {}) {
            const t = this;
            t.modules &&
              Object.keys(t.modules).forEach((a) => {
                const s = t.modules[a],
                  i = e[a] || {};
                s.instance &&
                  Object.keys(s.instance).forEach((e) => {
                    const a = s.instance[e];
                    t[e] = "function" == typeof a ? a.bind(t) : a;
                  }),
                  s.on &&
                    t.on &&
                    Object.keys(s.on).forEach((e) => {
                      t.on(e, s.on[e]);
                    }),
                  s.create && s.create.bind(t)(i);
              });
          }
          static set components(e) {
            this.use && this.use(e);
          }
          static installModule(e, ...t) {
            const a = this;
            a.prototype.modules || (a.prototype.modules = {});
            const s =
              e.name || `${Object.keys(a.prototype.modules).length}_${u.now()}`;
            return (
              (a.prototype.modules[s] = e),
              e.proto &&
                Object.keys(e.proto).forEach((t) => {
                  a.prototype[t] = e.proto[t];
                }),
              e.static &&
                Object.keys(e.static).forEach((t) => {
                  a[t] = e.static[t];
                }),
              e.install && e.install.apply(a, t),
              a
            );
          }
          static use(e, ...t) {
            const a = this;
            return Array.isArray(e)
              ? (e.forEach((e) => a.installModule(e)), a)
              : a.installModule(e, ...t);
          }
        }
        var f = {
          updateSize: function () {
            const e = this;
            let t, a;
            const s = e.$el;
            (t = void 0 !== e.params.width ? e.params.width : s[0].clientWidth),
              (a =
                void 0 !== e.params.height
                  ? e.params.height
                  : s[0].clientHeight),
              (0 === t && e.isHorizontal()) ||
                (0 === a && e.isVertical()) ||
                ((t =
                  t -
                  parseInt(s.css("padding-left"), 10) -
                  parseInt(s.css("padding-right"), 10)),
                (a =
                  a -
                  parseInt(s.css("padding-top"), 10) -
                  parseInt(s.css("padding-bottom"), 10)),
                u.extend(e, {
                  width: t,
                  height: a,
                  size: e.isHorizontal() ? t : a,
                }));
          },
          updateSlides: function () {
            const e = this,
              t = e.params,
              { $wrapperEl: a, size: s, rtlTranslate: i, wrongRTL: n } = e,
              r = e.virtual && t.virtual.enabled,
              l = r ? e.virtual.slides.length : e.slides.length,
              d = a.children(`.${e.params.slideClass}`),
              c = r ? e.virtual.slides.length : d.length;
            let p = [];
            const h = [],
              m = [];
            function f(e) {
              return !t.cssMode || e !== d.length - 1;
            }
            let g = t.slidesOffsetBefore;
            "function" == typeof g && (g = t.slidesOffsetBefore.call(e));
            let v = t.slidesOffsetAfter;
            "function" == typeof v && (v = t.slidesOffsetAfter.call(e));
            const w = e.snapGrid.length,
              b = e.snapGrid.length;
            let y,
              x,
              S = t.spaceBetween,
              E = -g,
              T = 0,
              C = 0;
            if (void 0 === s) return;
            "string" == typeof S &&
              S.indexOf("%") >= 0 &&
              (S = (parseFloat(S.replace("%", "")) / 100) * s),
              (e.virtualSize = -S),
              i
                ? d.css({ marginLeft: "", marginTop: "" })
                : d.css({ marginRight: "", marginBottom: "" }),
              t.slidesPerColumn > 1 &&
                ((y =
                  Math.floor(c / t.slidesPerColumn) ===
                  c / e.params.slidesPerColumn
                    ? c
                    : Math.ceil(c / t.slidesPerColumn) * t.slidesPerColumn),
                "auto" !== t.slidesPerView &&
                  "row" === t.slidesPerColumnFill &&
                  (y = Math.max(y, t.slidesPerView * t.slidesPerColumn)));
            const $ = t.slidesPerColumn,
              M = y / $,
              _ = Math.floor(c / t.slidesPerColumn);
            for (let a = 0; a < c; a += 1) {
              x = 0;
              const i = d.eq(a);
              if (t.slidesPerColumn > 1) {
                let s, n, r;
                if ("row" === t.slidesPerColumnFill && t.slidesPerGroup > 1) {
                  const e = Math.floor(
                      a / (t.slidesPerGroup * t.slidesPerColumn)
                    ),
                    o = a - t.slidesPerColumn * t.slidesPerGroup * e,
                    l =
                      0 === e
                        ? t.slidesPerGroup
                        : Math.min(
                            Math.ceil((c - e * $ * t.slidesPerGroup) / $),
                            t.slidesPerGroup
                          );
                  (r = Math.floor(o / l)),
                    (n = o - r * l + e * t.slidesPerGroup),
                    (s = n + (r * y) / $),
                    i.css({
                      "-webkit-box-ordinal-group": s,
                      "-moz-box-ordinal-group": s,
                      "-ms-flex-order": s,
                      "-webkit-order": s,
                      order: s,
                    });
                } else
                  "column" === t.slidesPerColumnFill
                    ? ((n = Math.floor(a / $)),
                      (r = a - n * $),
                      (n > _ || (n === _ && r === $ - 1)) &&
                        ((r += 1), r >= $ && ((r = 0), (n += 1))))
                    : ((r = Math.floor(a / M)), (n = a - r * M));
                i.css(
                  "margin-" + (e.isHorizontal() ? "top" : "left"),
                  0 !== r && t.spaceBetween && `${t.spaceBetween}px`
                );
              }
              if ("none" !== i.css("display")) {
                if ("auto" === t.slidesPerView) {
                  const a = o.getComputedStyle(i[0], null),
                    s = i[0].style.transform,
                    n = i[0].style.webkitTransform;
                  if (
                    (s && (i[0].style.transform = "none"),
                    n && (i[0].style.webkitTransform = "none"),
                    t.roundLengths)
                  )
                    x = e.isHorizontal() ? i.outerWidth(!0) : i.outerHeight(!0);
                  else if (e.isHorizontal()) {
                    const e = parseFloat(a.getPropertyValue("width")),
                      t = parseFloat(a.getPropertyValue("padding-left")),
                      s = parseFloat(a.getPropertyValue("padding-right")),
                      i = parseFloat(a.getPropertyValue("margin-left")),
                      n = parseFloat(a.getPropertyValue("margin-right")),
                      r = a.getPropertyValue("box-sizing");
                    x = r && "border-box" === r ? e + i + n : e + t + s + i + n;
                  } else {
                    const e = parseFloat(a.getPropertyValue("height")),
                      t = parseFloat(a.getPropertyValue("padding-top")),
                      s = parseFloat(a.getPropertyValue("padding-bottom")),
                      i = parseFloat(a.getPropertyValue("margin-top")),
                      n = parseFloat(a.getPropertyValue("margin-bottom")),
                      r = a.getPropertyValue("box-sizing");
                    x = r && "border-box" === r ? e + i + n : e + t + s + i + n;
                  }
                  s && (i[0].style.transform = s),
                    n && (i[0].style.webkitTransform = n),
                    t.roundLengths && (x = Math.floor(x));
                } else
                  (x = (s - (t.slidesPerView - 1) * S) / t.slidesPerView),
                    t.roundLengths && (x = Math.floor(x)),
                    d[a] &&
                      (e.isHorizontal()
                        ? (d[a].style.width = `${x}px`)
                        : (d[a].style.height = `${x}px`));
                d[a] && (d[a].swiperSlideSize = x),
                  m.push(x),
                  t.centeredSlides
                    ? ((E = E + x / 2 + T / 2 + S),
                      0 === T && 0 !== a && (E = E - s / 2 - S),
                      0 === a && (E = E - s / 2 - S),
                      Math.abs(E) < 0.001 && (E = 0),
                      t.roundLengths && (E = Math.floor(E)),
                      C % t.slidesPerGroup == 0 && p.push(E),
                      h.push(E))
                    : (t.roundLengths && (E = Math.floor(E)),
                      (C - Math.min(e.params.slidesPerGroupSkip, C)) %
                        e.params.slidesPerGroup ==
                        0 && p.push(E),
                      h.push(E),
                      (E = E + x + S)),
                  (e.virtualSize += x + S),
                  (T = x),
                  (C += 1);
              }
            }
            let k;
            if (
              ((e.virtualSize = Math.max(e.virtualSize, s) + v),
              i &&
                n &&
                ("slide" === t.effect || "coverflow" === t.effect) &&
                a.css({ width: `${e.virtualSize + t.spaceBetween}px` }),
              t.setWrapperSize &&
                (e.isHorizontal()
                  ? a.css({ width: `${e.virtualSize + t.spaceBetween}px` })
                  : a.css({ height: `${e.virtualSize + t.spaceBetween}px` })),
              t.slidesPerColumn > 1 &&
                ((e.virtualSize = (x + t.spaceBetween) * y),
                (e.virtualSize =
                  Math.ceil(e.virtualSize / t.slidesPerColumn) -
                  t.spaceBetween),
                e.isHorizontal()
                  ? a.css({ width: `${e.virtualSize + t.spaceBetween}px` })
                  : a.css({ height: `${e.virtualSize + t.spaceBetween}px` }),
                t.centeredSlides))
            ) {
              k = [];
              for (let a = 0; a < p.length; a += 1) {
                let s = p[a];
                t.roundLengths && (s = Math.floor(s)),
                  p[a] < e.virtualSize + p[0] && k.push(s);
              }
              p = k;
            }
            if (!t.centeredSlides) {
              k = [];
              for (let a = 0; a < p.length; a += 1) {
                let i = p[a];
                t.roundLengths && (i = Math.floor(i)),
                  p[a] <= e.virtualSize - s && k.push(i);
              }
              (p = k),
                Math.floor(e.virtualSize - s) - Math.floor(p[p.length - 1]) >
                  1 && p.push(e.virtualSize - s);
            }
            if (
              (0 === p.length && (p = [0]),
              0 !== t.spaceBetween &&
                (e.isHorizontal()
                  ? i
                    ? d.filter(f).css({ marginLeft: `${S}px` })
                    : d.filter(f).css({ marginRight: `${S}px` })
                  : d.filter(f).css({ marginBottom: `${S}px` })),
              t.centeredSlides && t.centeredSlidesBounds)
            ) {
              let e = 0;
              m.forEach((a) => {
                e += a + (t.spaceBetween ? t.spaceBetween : 0);
              }),
                (e -= t.spaceBetween);
              const a = e - s;
              p = p.map((e) => (e < 0 ? -g : e > a ? a + v : e));
            }
            if (t.centerInsufficientSlides) {
              let e = 0;
              if (
                (m.forEach((a) => {
                  e += a + (t.spaceBetween ? t.spaceBetween : 0);
                }),
                (e -= t.spaceBetween),
                e < s)
              ) {
                const t = (s - e) / 2;
                p.forEach((e, a) => {
                  p[a] = e - t;
                }),
                  h.forEach((e, a) => {
                    h[a] = e + t;
                  });
              }
            }
            u.extend(e, {
              slides: d,
              snapGrid: p,
              slidesGrid: h,
              slidesSizesGrid: m,
            }),
              c !== l && e.emit("slidesLengthChange"),
              p.length !== w &&
                (e.params.watchOverflow && e.checkOverflow(),
                e.emit("snapGridLengthChange")),
              h.length !== b && e.emit("slidesGridLengthChange"),
              (t.watchSlidesProgress || t.watchSlidesVisibility) &&
                e.updateSlidesOffset();
          },
          updateAutoHeight: function (e) {
            const t = this,
              a = [];
            let s,
              i = 0;
            if (
              ("number" == typeof e
                ? t.setTransition(e)
                : !0 === e && t.setTransition(t.params.speed),
              "auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
            )
              if (t.params.centeredSlides)
                t.visibleSlides.each((e, t) => {
                  a.push(t);
                });
              else
                for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
                  const e = t.activeIndex + s;
                  if (e > t.slides.length) break;
                  a.push(t.slides.eq(e)[0]);
                }
            else a.push(t.slides.eq(t.activeIndex)[0]);
            for (s = 0; s < a.length; s += 1)
              if (void 0 !== a[s]) {
                const e = a[s].offsetHeight;
                i = e > i ? e : i;
              }
            i && t.$wrapperEl.css("height", `${i}px`);
          },
          updateSlidesOffset: function () {
            const e = this,
              t = e.slides;
            for (let a = 0; a < t.length; a += 1)
              t[a].swiperSlideOffset = e.isHorizontal()
                ? t[a].offsetLeft
                : t[a].offsetTop;
          },
          updateSlidesProgress: function (e = (this && this.translate) || 0) {
            const t = this,
              a = t.params,
              { slides: s, rtlTranslate: i } = t;
            if (0 === s.length) return;
            void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
            let n = -e;
            i && (n = e),
              s.removeClass(a.slideVisibleClass),
              (t.visibleSlidesIndexes = []),
              (t.visibleSlides = []);
            for (let e = 0; e < s.length; e += 1) {
              const r = s[e],
                o =
                  (n +
                    (a.centeredSlides ? t.minTranslate() : 0) -
                    r.swiperSlideOffset) /
                  (r.swiperSlideSize + a.spaceBetween);
              if (
                a.watchSlidesVisibility ||
                (a.centeredSlides && a.autoHeight)
              ) {
                const i = -(n - r.swiperSlideOffset),
                  o = i + t.slidesSizesGrid[e];
                ((i >= 0 && i < t.size - 1) ||
                  (o > 1 && o <= t.size) ||
                  (i <= 0 && o >= t.size)) &&
                  (t.visibleSlides.push(r),
                  t.visibleSlidesIndexes.push(e),
                  s.eq(e).addClass(a.slideVisibleClass));
              }
              r.progress = i ? -o : o;
            }
            t.visibleSlides = d(t.visibleSlides);
          },
          updateProgress: function (e) {
            const t = this;
            if (void 0 === e) {
              const a = t.rtlTranslate ? -1 : 1;
              e = (t && t.translate && t.translate * a) || 0;
            }
            const a = t.params,
              s = t.maxTranslate() - t.minTranslate();
            let { progress: i, isBeginning: n, isEnd: r } = t;
            const o = n,
              l = r;
            0 === s
              ? ((i = 0), (n = !0), (r = !0))
              : ((i = (e - t.minTranslate()) / s), (n = i <= 0), (r = i >= 1)),
              u.extend(t, { progress: i, isBeginning: n, isEnd: r }),
              (a.watchSlidesProgress ||
                a.watchSlidesVisibility ||
                (a.centeredSlides && a.autoHeight)) &&
                t.updateSlidesProgress(e),
              n && !o && t.emit("reachBeginning toEdge"),
              r && !l && t.emit("reachEnd toEdge"),
              ((o && !n) || (l && !r)) && t.emit("fromEdge"),
              t.emit("progress", i);
          },
          updateSlidesClasses: function () {
            const e = this,
              {
                slides: t,
                params: a,
                $wrapperEl: s,
                activeIndex: i,
                realIndex: n,
              } = e,
              r = e.virtual && a.virtual.enabled;
            let o;
            t.removeClass(
              `${a.slideActiveClass} ${a.slideNextClass} ${a.slidePrevClass} ${a.slideDuplicateActiveClass} ${a.slideDuplicateNextClass} ${a.slideDuplicatePrevClass}`
            ),
              (o = r
                ? e.$wrapperEl.find(
                    `.${a.slideClass}[data-swiper-slide-index="${i}"]`
                  )
                : t.eq(i)),
              o.addClass(a.slideActiveClass),
              a.loop &&
                (o.hasClass(a.slideDuplicateClass)
                  ? s
                      .children(
                        `.${a.slideClass}:not(.${a.slideDuplicateClass})[data-swiper-slide-index="${n}"]`
                      )
                      .addClass(a.slideDuplicateActiveClass)
                  : s
                      .children(
                        `.${a.slideClass}.${a.slideDuplicateClass}[data-swiper-slide-index="${n}"]`
                      )
                      .addClass(a.slideDuplicateActiveClass));
            let l = o
              .nextAll(`.${a.slideClass}`)
              .eq(0)
              .addClass(a.slideNextClass);
            a.loop &&
              0 === l.length &&
              ((l = t.eq(0)), l.addClass(a.slideNextClass));
            let d = o
              .prevAll(`.${a.slideClass}`)
              .eq(0)
              .addClass(a.slidePrevClass);
            a.loop &&
              0 === d.length &&
              ((d = t.eq(-1)), d.addClass(a.slidePrevClass)),
              a.loop &&
                (l.hasClass(a.slideDuplicateClass)
                  ? s
                      .children(
                        `.${a.slideClass}:not(.${
                          a.slideDuplicateClass
                        })[data-swiper-slide-index="${l.attr(
                          "data-swiper-slide-index"
                        )}"]`
                      )
                      .addClass(a.slideDuplicateNextClass)
                  : s
                      .children(
                        `.${a.slideClass}.${
                          a.slideDuplicateClass
                        }[data-swiper-slide-index="${l.attr(
                          "data-swiper-slide-index"
                        )}"]`
                      )
                      .addClass(a.slideDuplicateNextClass),
                d.hasClass(a.slideDuplicateClass)
                  ? s
                      .children(
                        `.${a.slideClass}:not(.${
                          a.slideDuplicateClass
                        })[data-swiper-slide-index="${d.attr(
                          "data-swiper-slide-index"
                        )}"]`
                      )
                      .addClass(a.slideDuplicatePrevClass)
                  : s
                      .children(
                        `.${a.slideClass}.${
                          a.slideDuplicateClass
                        }[data-swiper-slide-index="${d.attr(
                          "data-swiper-slide-index"
                        )}"]`
                      )
                      .addClass(a.slideDuplicatePrevClass));
          },
          updateActiveIndex: function (e) {
            const t = this,
              a = t.rtlTranslate ? t.translate : -t.translate,
              {
                slidesGrid: s,
                snapGrid: i,
                params: n,
                activeIndex: r,
                realIndex: o,
                snapIndex: l,
              } = t;
            let d,
              c = e;
            if (void 0 === c) {
              for (let e = 0; e < s.length; e += 1)
                void 0 !== s[e + 1]
                  ? a >= s[e] && a < s[e + 1] - (s[e + 1] - s[e]) / 2
                    ? (c = e)
                    : a >= s[e] && a < s[e + 1] && (c = e + 1)
                  : a >= s[e] && (c = e);
              n.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
            }
            if (i.indexOf(a) >= 0) d = i.indexOf(a);
            else {
              const e = Math.min(n.slidesPerGroupSkip, c);
              d = e + Math.floor((c - e) / n.slidesPerGroup);
            }
            if ((d >= i.length && (d = i.length - 1), c === r))
              return void (
                d !== l && ((t.snapIndex = d), t.emit("snapIndexChange"))
              );
            const p = parseInt(
              t.slides.eq(c).attr("data-swiper-slide-index") || c,
              10
            );
            u.extend(t, {
              snapIndex: d,
              realIndex: p,
              previousIndex: r,
              activeIndex: c,
            }),
              t.emit("activeIndexChange"),
              t.emit("snapIndexChange"),
              o !== p && t.emit("realIndexChange"),
              (t.initialized || t.params.runCallbacksOnInit) &&
                t.emit("slideChange");
          },
          updateClickedSlide: function (e) {
            const t = this,
              a = t.params,
              s = d(e.target).closest(`.${a.slideClass}`)[0];
            let i = !1;
            if (s)
              for (let e = 0; e < t.slides.length; e += 1)
                t.slides[e] === s && (i = !0);
            if (!s || !i)
              return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
            (t.clickedSlide = s),
              t.virtual && t.params.virtual.enabled
                ? (t.clickedIndex = parseInt(
                    d(s).attr("data-swiper-slide-index"),
                    10
                  ))
                : (t.clickedIndex = d(s).index()),
              a.slideToClickedSlide &&
                void 0 !== t.clickedIndex &&
                t.clickedIndex !== t.activeIndex &&
                t.slideToClickedSlide();
          },
        };
        var g = {
          getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
            const {
              params: t,
              rtlTranslate: a,
              translate: s,
              $wrapperEl: i,
            } = this;
            if (t.virtualTranslate) return a ? -s : s;
            if (t.cssMode) return s;
            let n = u.getTranslate(i[0], e);
            return a && (n = -n), n || 0;
          },
          setTranslate: function (e, t) {
            const a = this,
              {
                rtlTranslate: s,
                params: i,
                $wrapperEl: n,
                wrapperEl: r,
                progress: o,
              } = a;
            let l,
              d = 0,
              c = 0;
            a.isHorizontal() ? (d = s ? -e : e) : (c = e),
              i.roundLengths && ((d = Math.floor(d)), (c = Math.floor(c))),
              i.cssMode
                ? (r[a.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                    a.isHorizontal() ? -d : -c)
                : i.virtualTranslate ||
                  n.transform(`translate3d(${d}px, ${c}px, 0px)`),
              (a.previousTranslate = a.translate),
              (a.translate = a.isHorizontal() ? d : c);
            const p = a.maxTranslate() - a.minTranslate();
            (l = 0 === p ? 0 : (e - a.minTranslate()) / p),
              l !== o && a.updateProgress(e),
              a.emit("setTranslate", a.translate, t);
          },
          minTranslate: function () {
            return -this.snapGrid[0];
          },
          maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1];
          },
          translateTo: function (
            e = 0,
            t = this.params.speed,
            a = !0,
            s = !0,
            i
          ) {
            const n = this,
              { params: r, wrapperEl: o } = n;
            if (n.animating && r.preventInteractionOnTransition) return !1;
            const l = n.minTranslate(),
              d = n.maxTranslate();
            let c;
            if (
              ((c = s && e > l ? l : s && e < d ? d : e),
              n.updateProgress(c),
              r.cssMode)
            ) {
              const e = n.isHorizontal();
              return (
                0 === t
                  ? (o[e ? "scrollLeft" : "scrollTop"] = -c)
                  : o.scrollTo
                  ? o.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" })
                  : (o[e ? "scrollLeft" : "scrollTop"] = -c),
                !0
              );
            }
            return (
              0 === t
                ? (n.setTransition(0),
                  n.setTranslate(c),
                  a &&
                    (n.emit("beforeTransitionStart", t, i),
                    n.emit("transitionEnd")))
                : (n.setTransition(t),
                  n.setTranslate(c),
                  a &&
                    (n.emit("beforeTransitionStart", t, i),
                    n.emit("transitionStart")),
                  n.animating ||
                    ((n.animating = !0),
                    n.onTranslateToWrapperTransitionEnd ||
                      (n.onTranslateToWrapperTransitionEnd = function (e) {
                        n &&
                          !n.destroyed &&
                          e.target === this &&
                          (n.$wrapperEl[0].removeEventListener(
                            "transitionend",
                            n.onTranslateToWrapperTransitionEnd
                          ),
                          n.$wrapperEl[0].removeEventListener(
                            "webkitTransitionEnd",
                            n.onTranslateToWrapperTransitionEnd
                          ),
                          (n.onTranslateToWrapperTransitionEnd = null),
                          delete n.onTranslateToWrapperTransitionEnd,
                          a && n.emit("transitionEnd"));
                      }),
                    n.$wrapperEl[0].addEventListener(
                      "transitionend",
                      n.onTranslateToWrapperTransitionEnd
                    ),
                    n.$wrapperEl[0].addEventListener(
                      "webkitTransitionEnd",
                      n.onTranslateToWrapperTransitionEnd
                    ))),
              !0
            );
          },
        };
        var v = {
          setTransition: function (e, t) {
            const a = this;
            a.params.cssMode || a.$wrapperEl.transition(e),
              a.emit("setTransition", e, t);
          },
          transitionStart: function (e = !0, t) {
            const a = this,
              { activeIndex: s, params: i, previousIndex: n } = a;
            if (i.cssMode) return;
            i.autoHeight && a.updateAutoHeight();
            let r = t;
            if (
              (r || (r = s > n ? "next" : s < n ? "prev" : "reset"),
              a.emit("transitionStart"),
              e && s !== n)
            ) {
              if ("reset" === r)
                return void a.emit("slideResetTransitionStart");
              a.emit("slideChangeTransitionStart"),
                "next" === r
                  ? a.emit("slideNextTransitionStart")
                  : a.emit("slidePrevTransitionStart");
            }
          },
          transitionEnd: function (e = !0, t) {
            const a = this,
              { activeIndex: s, previousIndex: i, params: n } = a;
            if (((a.animating = !1), n.cssMode)) return;
            a.setTransition(0);
            let r = t;
            if (
              (r || (r = s > i ? "next" : s < i ? "prev" : "reset"),
              a.emit("transitionEnd"),
              e && s !== i)
            ) {
              if ("reset" === r) return void a.emit("slideResetTransitionEnd");
              a.emit("slideChangeTransitionEnd"),
                "next" === r
                  ? a.emit("slideNextTransitionEnd")
                  : a.emit("slidePrevTransitionEnd");
            }
          },
        };
        var w = {
          slideTo: function (e = 0, t = this.params.speed, a = !0, s) {
            const i = this;
            let n = e;
            n < 0 && (n = 0);
            const {
              params: r,
              snapGrid: o,
              slidesGrid: l,
              previousIndex: d,
              activeIndex: c,
              rtlTranslate: p,
              wrapperEl: u,
            } = i;
            if (i.animating && r.preventInteractionOnTransition) return !1;
            const h = Math.min(i.params.slidesPerGroupSkip, n);
            let m = h + Math.floor((n - h) / i.params.slidesPerGroup);
            m >= o.length && (m = o.length - 1),
              (c || r.initialSlide || 0) === (d || 0) &&
                a &&
                i.emit("beforeSlideChangeStart");
            const f = -o[m];
            if ((i.updateProgress(f), r.normalizeSlideIndex))
              for (let e = 0; e < l.length; e += 1)
                -Math.floor(100 * f) >= Math.floor(100 * l[e]) && (n = e);
            if (i.initialized && n !== c) {
              if (!i.allowSlideNext && f < i.translate && f < i.minTranslate())
                return !1;
              if (
                !i.allowSlidePrev &&
                f > i.translate &&
                f > i.maxTranslate() &&
                (c || 0) !== n
              )
                return !1;
            }
            let g;
            if (
              ((g = n > c ? "next" : n < c ? "prev" : "reset"),
              (p && -f === i.translate) || (!p && f === i.translate))
            )
              return (
                i.updateActiveIndex(n),
                r.autoHeight && i.updateAutoHeight(),
                i.updateSlidesClasses(),
                "slide" !== r.effect && i.setTranslate(f),
                "reset" !== g &&
                  (i.transitionStart(a, g), i.transitionEnd(a, g)),
                !1
              );
            if (r.cssMode) {
              const e = i.isHorizontal();
              let a = -f;
              return (
                p && (a = u.scrollWidth - u.offsetWidth - a),
                0 === t
                  ? (u[e ? "scrollLeft" : "scrollTop"] = a)
                  : u.scrollTo
                  ? u.scrollTo({ [e ? "left" : "top"]: a, behavior: "smooth" })
                  : (u[e ? "scrollLeft" : "scrollTop"] = a),
                !0
              );
            }
            return (
              0 === t
                ? (i.setTransition(0),
                  i.setTranslate(f),
                  i.updateActiveIndex(n),
                  i.updateSlidesClasses(),
                  i.emit("beforeTransitionStart", t, s),
                  i.transitionStart(a, g),
                  i.transitionEnd(a, g))
                : (i.setTransition(t),
                  i.setTranslate(f),
                  i.updateActiveIndex(n),
                  i.updateSlidesClasses(),
                  i.emit("beforeTransitionStart", t, s),
                  i.transitionStart(a, g),
                  i.animating ||
                    ((i.animating = !0),
                    i.onSlideToWrapperTransitionEnd ||
                      (i.onSlideToWrapperTransitionEnd = function (e) {
                        i &&
                          !i.destroyed &&
                          e.target === this &&
                          (i.$wrapperEl[0].removeEventListener(
                            "transitionend",
                            i.onSlideToWrapperTransitionEnd
                          ),
                          i.$wrapperEl[0].removeEventListener(
                            "webkitTransitionEnd",
                            i.onSlideToWrapperTransitionEnd
                          ),
                          (i.onSlideToWrapperTransitionEnd = null),
                          delete i.onSlideToWrapperTransitionEnd,
                          i.transitionEnd(a, g));
                      }),
                    i.$wrapperEl[0].addEventListener(
                      "transitionend",
                      i.onSlideToWrapperTransitionEnd
                    ),
                    i.$wrapperEl[0].addEventListener(
                      "webkitTransitionEnd",
                      i.onSlideToWrapperTransitionEnd
                    ))),
              !0
            );
          },
          slideToLoop: function (e = 0, t = this.params.speed, a = !0, s) {
            const i = this;
            let n = e;
            return (
              i.params.loop && (n += i.loopedSlides), i.slideTo(n, t, a, s)
            );
          },
          slideNext: function (e = this.params.speed, t = !0, a) {
            const s = this,
              { params: i, animating: n } = s,
              r = s.activeIndex < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup;
            if (i.loop) {
              if (n) return !1;
              s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
            }
            return s.slideTo(s.activeIndex + r, e, t, a);
          },
          slidePrev: function (e = this.params.speed, t = !0, a) {
            const s = this,
              {
                params: i,
                animating: n,
                snapGrid: r,
                slidesGrid: o,
                rtlTranslate: l,
              } = s;
            if (i.loop) {
              if (n) return !1;
              s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft);
            }
            function d(e) {
              return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
            }
            const c = d(l ? s.translate : -s.translate),
              p = r.map((e) => d(e));
            o.map((e) => d(e)), r[p.indexOf(c)];
            let u,
              h = r[p.indexOf(c) - 1];
            return (
              void 0 === h &&
                i.cssMode &&
                r.forEach((e) => {
                  !h && c >= e && (h = e);
                }),
              void 0 !== h &&
                ((u = o.indexOf(h)), u < 0 && (u = s.activeIndex - 1)),
              s.slideTo(u, e, t, a)
            );
          },
          slideReset: function (e = this.params.speed, t = !0, a) {
            return this.slideTo(this.activeIndex, e, t, a);
          },
          slideToClosest: function (e = this.params.speed, t = !0, a, s = 0.5) {
            const i = this;
            let n = i.activeIndex;
            const r = Math.min(i.params.slidesPerGroupSkip, n),
              o = r + Math.floor((n - r) / i.params.slidesPerGroup),
              l = i.rtlTranslate ? i.translate : -i.translate;
            if (l >= i.snapGrid[o]) {
              const e = i.snapGrid[o];
              l - e > (i.snapGrid[o + 1] - e) * s &&
                (n += i.params.slidesPerGroup);
            } else {
              const e = i.snapGrid[o - 1];
              l - e <= (i.snapGrid[o] - e) * s &&
                (n -= i.params.slidesPerGroup);
            }
            return (
              (n = Math.max(n, 0)),
              (n = Math.min(n, i.slidesGrid.length - 1)),
              i.slideTo(n, e, t, a)
            );
          },
          slideToClickedSlide: function () {
            const e = this,
              { params: t, $wrapperEl: a } = e,
              s =
                "auto" === t.slidesPerView
                  ? e.slidesPerViewDynamic()
                  : t.slidesPerView;
            let i,
              n = e.clickedIndex;
            if (t.loop) {
              if (e.animating) return;
              (i = parseInt(
                d(e.clickedSlide).attr("data-swiper-slide-index"),
                10
              )),
                t.centeredSlides
                  ? n < e.loopedSlides - s / 2 ||
                    n > e.slides.length - e.loopedSlides + s / 2
                    ? (e.loopFix(),
                      (n = a
                        .children(
                          `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                        )
                        .eq(0)
                        .index()),
                      u.nextTick(() => {
                        e.slideTo(n);
                      }))
                    : e.slideTo(n)
                  : n > e.slides.length - s
                  ? (e.loopFix(),
                    (n = a
                      .children(
                        `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                      )
                      .eq(0)
                      .index()),
                    u.nextTick(() => {
                      e.slideTo(n);
                    }))
                  : e.slideTo(n);
            } else e.slideTo(n);
          },
        };
        var b = {
          loopCreate: function () {
            const e = this,
              { params: t, $wrapperEl: a } = e;
            a.children(`.${t.slideClass}.${t.slideDuplicateClass}`).remove();
            let s = a.children(`.${t.slideClass}`);
            if (t.loopFillGroupWithBlank) {
              const e = t.slidesPerGroup - (s.length % t.slidesPerGroup);
              if (e !== t.slidesPerGroup) {
                for (let s = 0; s < e; s += 1) {
                  const e = d(n.createElement("div")).addClass(
                    `${t.slideClass} ${t.slideBlankClass}`
                  );
                  a.append(e);
                }
                s = a.children(`.${t.slideClass}`);
              }
            }
            "auto" !== t.slidesPerView ||
              t.loopedSlides ||
              (t.loopedSlides = s.length),
              (e.loopedSlides = Math.ceil(
                parseFloat(t.loopedSlides || t.slidesPerView, 10)
              )),
              (e.loopedSlides += t.loopAdditionalSlides),
              e.loopedSlides > s.length && (e.loopedSlides = s.length);
            const i = [],
              r = [];
            s.each((t, a) => {
              const n = d(a);
              t < e.loopedSlides && r.push(a),
                t < s.length && t >= s.length - e.loopedSlides && i.push(a),
                n.attr("data-swiper-slide-index", t);
            });
            for (let e = 0; e < r.length; e += 1)
              a.append(d(r[e].cloneNode(!0)).addClass(t.slideDuplicateClass));
            for (let e = i.length - 1; e >= 0; e -= 1)
              a.prepend(d(i[e].cloneNode(!0)).addClass(t.slideDuplicateClass));
          },
          loopFix: function () {
            const e = this;
            e.emit("beforeLoopFix");
            const {
              activeIndex: t,
              slides: a,
              loopedSlides: s,
              allowSlidePrev: i,
              allowSlideNext: n,
              snapGrid: r,
              rtlTranslate: o,
            } = e;
            let l;
            (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
            const d = -r[t] - e.getTranslate();
            if (t < s) {
              (l = a.length - 3 * s + t), (l += s);
              e.slideTo(l, 0, !1, !0) &&
                0 !== d &&
                e.setTranslate((o ? -e.translate : e.translate) - d);
            } else if (t >= a.length - s) {
              (l = -a.length + t + s), (l += s);
              e.slideTo(l, 0, !1, !0) &&
                0 !== d &&
                e.setTranslate((o ? -e.translate : e.translate) - d);
            }
            (e.allowSlidePrev = i), (e.allowSlideNext = n), e.emit("loopFix");
          },
          loopDestroy: function () {
            const { $wrapperEl: e, params: t, slides: a } = this;
            e
              .children(
                `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
              )
              .remove(),
              a.removeAttr("data-swiper-slide-index");
          },
        };
        var y = {
          setGrabCursor: function (e) {
            const t = this;
            if (
              h.touch ||
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
              return;
            const a = t.el;
            (a.style.cursor = "move"),
              (a.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
              (a.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
              (a.style.cursor = e ? "grabbing" : "grab");
          },
          unsetGrabCursor: function () {
            const e = this;
            h.touch ||
              (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e.el.style.cursor = "");
          },
        };
        var x = {
          appendSlide: function (e) {
            const t = this,
              { $wrapperEl: a, params: s } = t;
            if (
              (s.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
            )
              for (let t = 0; t < e.length; t += 1) e[t] && a.append(e[t]);
            else a.append(e);
            s.loop && t.loopCreate(), (s.observer && h.observer) || t.update();
          },
          prependSlide: function (e) {
            const t = this,
              { params: a, $wrapperEl: s, activeIndex: i } = t;
            a.loop && t.loopDestroy();
            let n = i + 1;
            if ("object" == typeof e && "length" in e) {
              for (let t = 0; t < e.length; t += 1) e[t] && s.prepend(e[t]);
              n = i + e.length;
            } else s.prepend(e);
            a.loop && t.loopCreate(),
              (a.observer && h.observer) || t.update(),
              t.slideTo(n, 0, !1);
          },
          addSlide: function (e, t) {
            const a = this,
              { $wrapperEl: s, params: i, activeIndex: n } = a;
            let r = n;
            i.loop &&
              ((r -= a.loopedSlides),
              a.loopDestroy(),
              (a.slides = s.children(`.${i.slideClass}`)));
            const o = a.slides.length;
            if (e <= 0) return void a.prependSlide(t);
            if (e >= o) return void a.appendSlide(t);
            let l = r > e ? r + 1 : r;
            const d = [];
            for (let t = o - 1; t >= e; t -= 1) {
              const e = a.slides.eq(t);
              e.remove(), d.unshift(e);
            }
            if ("object" == typeof t && "length" in t) {
              for (let e = 0; e < t.length; e += 1) t[e] && s.append(t[e]);
              l = r > e ? r + t.length : r;
            } else s.append(t);
            for (let e = 0; e < d.length; e += 1) s.append(d[e]);
            i.loop && a.loopCreate(),
              (i.observer && h.observer) || a.update(),
              i.loop
                ? a.slideTo(l + a.loopedSlides, 0, !1)
                : a.slideTo(l, 0, !1);
          },
          removeSlide: function (e) {
            const t = this,
              { params: a, $wrapperEl: s, activeIndex: i } = t;
            let n = i;
            a.loop &&
              ((n -= t.loopedSlides),
              t.loopDestroy(),
              (t.slides = s.children(`.${a.slideClass}`)));
            let r,
              o = n;
            if ("object" == typeof e && "length" in e) {
              for (let a = 0; a < e.length; a += 1)
                (r = e[a]),
                  t.slides[r] && t.slides.eq(r).remove(),
                  r < o && (o -= 1);
              o = Math.max(o, 0);
            } else
              (r = e),
                t.slides[r] && t.slides.eq(r).remove(),
                r < o && (o -= 1),
                (o = Math.max(o, 0));
            a.loop && t.loopCreate(),
              (a.observer && h.observer) || t.update(),
              a.loop
                ? t.slideTo(o + t.loopedSlides, 0, !1)
                : t.slideTo(o, 0, !1);
          },
          removeAllSlides: function () {
            const e = this,
              t = [];
            for (let a = 0; a < e.slides.length; a += 1) t.push(a);
            e.removeSlide(t);
          },
        };
        const S = (function () {
          const e = o.navigator.platform,
            t = o.navigator.userAgent,
            a = {
              ios: !1,
              android: !1,
              androidChrome: !1,
              desktop: !1,
              iphone: !1,
              ipod: !1,
              ipad: !1,
              edge: !1,
              ie: !1,
              firefox: !1,
              macos: !1,
              windows: !1,
              cordova: !(!o.cordova && !o.phonegap),
              phonegap: !(!o.cordova && !o.phonegap),
              electron: !1,
            },
            s = o.screen.width,
            i = o.screen.height,
            n = t.match(/(Android);?[\s\/]+([\d.]+)?/);
          let r = t.match(/(iPad).*OS\s([\d_]+)/);
          const l = t.match(/(iPod)(.*OS\s([\d_]+))?/),
            d = !r && t.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            c = t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0,
            p = t.indexOf("Edge/") >= 0,
            u = t.indexOf("Gecko/") >= 0 && t.indexOf("Firefox/") >= 0,
            m = "Win32" === e,
            f = t.toLowerCase().indexOf("electron") >= 0;
          let g = "MacIntel" === e;
          return (
            !r &&
              g &&
              h.touch &&
              ((1024 === s && 1366 === i) ||
                (834 === s && 1194 === i) ||
                (834 === s && 1112 === i) ||
                (768 === s && 1024 === i)) &&
              ((r = t.match(/(Version)\/([\d.]+)/)), (g = !1)),
            (a.ie = c),
            (a.edge = p),
            (a.firefox = u),
            n &&
              !m &&
              ((a.os = "android"),
              (a.osVersion = n[2]),
              (a.android = !0),
              (a.androidChrome = t.toLowerCase().indexOf("chrome") >= 0)),
            (r || d || l) && ((a.os = "ios"), (a.ios = !0)),
            d &&
              !l &&
              ((a.osVersion = d[2].replace(/_/g, ".")), (a.iphone = !0)),
            r && ((a.osVersion = r[2].replace(/_/g, ".")), (a.ipad = !0)),
            l &&
              ((a.osVersion = l[3] ? l[3].replace(/_/g, ".") : null),
              (a.ipod = !0)),
            a.ios &&
              a.osVersion &&
              t.indexOf("Version/") >= 0 &&
              "10" === a.osVersion.split(".")[0] &&
              (a.osVersion = t
                .toLowerCase()
                .split("version/")[1]
                .split(" ")[0]),
            (a.webView =
              !(
                !(d || r || l) ||
                (!t.match(/.*AppleWebKit(?!.*Safari)/i) &&
                  !o.navigator.standalone)
              ) ||
              (o.matchMedia &&
                o.matchMedia("(display-mode: standalone)").matches)),
            (a.webview = a.webView),
            (a.standalone = a.webView),
            (a.desktop = !(a.ios || a.android) || f),
            a.desktop &&
              ((a.electron = f),
              (a.macos = g),
              (a.windows = m),
              a.macos && (a.os = "macos"),
              a.windows && (a.os = "windows")),
            (a.pixelRatio = o.devicePixelRatio || 1),
            a
          );
        })();
        function E(e) {
          const t = this,
            a = t.touchEventsData,
            { params: s, touches: i } = t;
          if (t.animating && s.preventInteractionOnTransition) return;
          let r = e;
          r.originalEvent && (r = r.originalEvent);
          const l = d(r.target);
          if (
            "wrapper" === s.touchEventsTarget &&
            !l.closest(t.wrapperEl).length
          )
            return;
          if (
            ((a.isTouchEvent = "touchstart" === r.type),
            !a.isTouchEvent && "which" in r && 3 === r.which)
          )
            return;
          if (!a.isTouchEvent && "button" in r && r.button > 0) return;
          if (a.isTouched && a.isMoved) return;
          if (
            s.noSwiping &&
            l.closest(
              s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`
            )[0]
          )
            return void (t.allowClick = !0);
          if (s.swipeHandler && !l.closest(s.swipeHandler)[0]) return;
          (i.currentX =
            "touchstart" === r.type ? r.targetTouches[0].pageX : r.pageX),
            (i.currentY =
              "touchstart" === r.type ? r.targetTouches[0].pageY : r.pageY);
          const c = i.currentX,
            p = i.currentY,
            h = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
            m = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
          if (!h || !(c <= m || c >= o.screen.width - m)) {
            if (
              (u.extend(a, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0,
              }),
              (i.startX = c),
              (i.startY = p),
              (a.touchStartTime = u.now()),
              (t.allowClick = !0),
              t.updateSize(),
              (t.swipeDirection = void 0),
              s.threshold > 0 && (a.allowThresholdMove = !1),
              "touchstart" !== r.type)
            ) {
              let e = !0;
              l.is(a.formElements) && (e = !1),
                n.activeElement &&
                  d(n.activeElement).is(a.formElements) &&
                  n.activeElement !== l[0] &&
                  n.activeElement.blur();
              const i = e && t.allowTouchMove && s.touchStartPreventDefault;
              (s.touchStartForcePreventDefault || i) && r.preventDefault();
            }
            t.emit("touchStart", r);
          }
        }
        function T(e) {
          const t = this,
            a = t.touchEventsData,
            { params: s, touches: i, rtlTranslate: r } = t;
          let o = e;
          if ((o.originalEvent && (o = o.originalEvent), !a.isTouched))
            return void (
              a.startMoving &&
              a.isScrolling &&
              t.emit("touchMoveOpposite", o)
            );
          if (a.isTouchEvent && "touchmove" !== o.type) return;
          const l =
              "touchmove" === o.type &&
              o.targetTouches &&
              (o.targetTouches[0] || o.changedTouches[0]),
            c = "touchmove" === o.type ? l.pageX : o.pageX,
            p = "touchmove" === o.type ? l.pageY : o.pageY;
          if (o.preventedByNestedSwiper)
            return (i.startX = c), void (i.startY = p);
          if (!t.allowTouchMove)
            return (
              (t.allowClick = !1),
              void (
                a.isTouched &&
                (u.extend(i, {
                  startX: c,
                  startY: p,
                  currentX: c,
                  currentY: p,
                }),
                (a.touchStartTime = u.now()))
              )
            );
          if (a.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
            if (t.isVertical()) {
              if (
                (p < i.startY && t.translate <= t.maxTranslate()) ||
                (p > i.startY && t.translate >= t.minTranslate())
              )
                return (a.isTouched = !1), void (a.isMoved = !1);
            } else if (
              (c < i.startX && t.translate <= t.maxTranslate()) ||
              (c > i.startX && t.translate >= t.minTranslate())
            )
              return;
          if (
            a.isTouchEvent &&
            n.activeElement &&
            o.target === n.activeElement &&
            d(o.target).is(a.formElements)
          )
            return (a.isMoved = !0), void (t.allowClick = !1);
          if (
            (a.allowTouchCallbacks && t.emit("touchMove", o),
            o.targetTouches && o.targetTouches.length > 1)
          )
            return;
          (i.currentX = c), (i.currentY = p);
          const h = i.currentX - i.startX,
            m = i.currentY - i.startY;
          if (
            t.params.threshold &&
            Math.sqrt(h ** 2 + m ** 2) < t.params.threshold
          )
            return;
          if (void 0 === a.isScrolling) {
            let e;
            (t.isHorizontal() && i.currentY === i.startY) ||
            (t.isVertical() && i.currentX === i.startX)
              ? (a.isScrolling = !1)
              : h * h + m * m >= 25 &&
                ((e = (180 * Math.atan2(Math.abs(m), Math.abs(h))) / Math.PI),
                (a.isScrolling = t.isHorizontal()
                  ? e > s.touchAngle
                  : 90 - e > s.touchAngle));
          }
          if (
            (a.isScrolling && t.emit("touchMoveOpposite", o),
            void 0 === a.startMoving &&
              ((i.currentX === i.startX && i.currentY === i.startY) ||
                (a.startMoving = !0)),
            a.isScrolling)
          )
            return void (a.isTouched = !1);
          if (!a.startMoving) return;
          (t.allowClick = !1),
            !s.cssMode && o.cancelable && o.preventDefault(),
            s.touchMoveStopPropagation && !s.nested && o.stopPropagation(),
            a.isMoved ||
              (s.loop && t.loopFix(),
              (a.startTranslate = t.getTranslate()),
              t.setTransition(0),
              t.animating &&
                t.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
              (a.allowMomentumBounce = !1),
              !s.grabCursor ||
                (!0 !== t.allowSlideNext && !0 !== t.allowSlidePrev) ||
                t.setGrabCursor(!0),
              t.emit("sliderFirstMove", o)),
            t.emit("sliderMove", o),
            (a.isMoved = !0);
          let f = t.isHorizontal() ? h : m;
          (i.diff = f),
            (f *= s.touchRatio),
            r && (f = -f),
            (t.swipeDirection = f > 0 ? "prev" : "next"),
            (a.currentTranslate = f + a.startTranslate);
          let g = !0,
            v = s.resistanceRatio;
          if (
            (s.touchReleaseOnEdges && (v = 0),
            f > 0 && a.currentTranslate > t.minTranslate()
              ? ((g = !1),
                s.resistance &&
                  (a.currentTranslate =
                    t.minTranslate() -
                    1 +
                    (-t.minTranslate() + a.startTranslate + f) ** v))
              : f < 0 &&
                a.currentTranslate < t.maxTranslate() &&
                ((g = !1),
                s.resistance &&
                  (a.currentTranslate =
                    t.maxTranslate() +
                    1 -
                    (t.maxTranslate() - a.startTranslate - f) ** v)),
            g && (o.preventedByNestedSwiper = !0),
            !t.allowSlideNext &&
              "next" === t.swipeDirection &&
              a.currentTranslate < a.startTranslate &&
              (a.currentTranslate = a.startTranslate),
            !t.allowSlidePrev &&
              "prev" === t.swipeDirection &&
              a.currentTranslate > a.startTranslate &&
              (a.currentTranslate = a.startTranslate),
            s.threshold > 0)
          ) {
            if (!(Math.abs(f) > s.threshold || a.allowThresholdMove))
              return void (a.currentTranslate = a.startTranslate);
            if (!a.allowThresholdMove)
              return (
                (a.allowThresholdMove = !0),
                (i.startX = i.currentX),
                (i.startY = i.currentY),
                (a.currentTranslate = a.startTranslate),
                void (i.diff = t.isHorizontal()
                  ? i.currentX - i.startX
                  : i.currentY - i.startY)
              );
          }
          s.followFinger &&
            !s.cssMode &&
            ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) &&
              (t.updateActiveIndex(), t.updateSlidesClasses()),
            s.freeMode &&
              (0 === a.velocities.length &&
                a.velocities.push({
                  position: i[t.isHorizontal() ? "startX" : "startY"],
                  time: a.touchStartTime,
                }),
              a.velocities.push({
                position: i[t.isHorizontal() ? "currentX" : "currentY"],
                time: u.now(),
              })),
            t.updateProgress(a.currentTranslate),
            t.setTranslate(a.currentTranslate));
        }
        function C(e) {
          const t = this,
            a = t.touchEventsData,
            {
              params: s,
              touches: i,
              rtlTranslate: n,
              $wrapperEl: r,
              slidesGrid: o,
              snapGrid: l,
            } = t;
          let d = e;
          if (
            (d.originalEvent && (d = d.originalEvent),
            a.allowTouchCallbacks && t.emit("touchEnd", d),
            (a.allowTouchCallbacks = !1),
            !a.isTouched)
          )
            return (
              a.isMoved && s.grabCursor && t.setGrabCursor(!1),
              (a.isMoved = !1),
              void (a.startMoving = !1)
            );
          s.grabCursor &&
            a.isMoved &&
            a.isTouched &&
            (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
            t.setGrabCursor(!1);
          const c = u.now(),
            p = c - a.touchStartTime;
          if (
            (t.allowClick &&
              (t.updateClickedSlide(d),
              t.emit("tap click", d),
              p < 300 &&
                c - a.lastClickTime < 300 &&
                t.emit("doubleTap doubleClick", d)),
            (a.lastClickTime = u.now()),
            u.nextTick(() => {
              t.destroyed || (t.allowClick = !0);
            }),
            !a.isTouched ||
              !a.isMoved ||
              !t.swipeDirection ||
              0 === i.diff ||
              a.currentTranslate === a.startTranslate)
          )
            return (
              (a.isTouched = !1), (a.isMoved = !1), void (a.startMoving = !1)
            );
          let h;
          if (
            ((a.isTouched = !1),
            (a.isMoved = !1),
            (a.startMoving = !1),
            (h = s.followFinger
              ? n
                ? t.translate
                : -t.translate
              : -a.currentTranslate),
            s.cssMode)
          )
            return;
          if (s.freeMode) {
            if (h < -t.minTranslate()) return void t.slideTo(t.activeIndex);
            if (h > -t.maxTranslate())
              return void (t.slides.length < l.length
                ? t.slideTo(l.length - 1)
                : t.slideTo(t.slides.length - 1));
            if (s.freeModeMomentum) {
              if (a.velocities.length > 1) {
                const e = a.velocities.pop(),
                  i = a.velocities.pop(),
                  n = e.position - i.position,
                  r = e.time - i.time;
                (t.velocity = n / r),
                  (t.velocity /= 2),
                  Math.abs(t.velocity) < s.freeModeMinimumVelocity &&
                    (t.velocity = 0),
                  (r > 150 || u.now() - e.time > 300) && (t.velocity = 0);
              } else t.velocity = 0;
              (t.velocity *= s.freeModeMomentumVelocityRatio),
                (a.velocities.length = 0);
              let e = 1e3 * s.freeModeMomentumRatio;
              const i = t.velocity * e;
              let o = t.translate + i;
              n && (o = -o);
              let d,
                c = !1;
              const p =
                20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
              let h;
              if (o < t.maxTranslate())
                s.freeModeMomentumBounce
                  ? (o + t.maxTranslate() < -p && (o = t.maxTranslate() - p),
                    (d = t.maxTranslate()),
                    (c = !0),
                    (a.allowMomentumBounce = !0))
                  : (o = t.maxTranslate()),
                  s.loop && s.centeredSlides && (h = !0);
              else if (o > t.minTranslate())
                s.freeModeMomentumBounce
                  ? (o - t.minTranslate() > p && (o = t.minTranslate() + p),
                    (d = t.minTranslate()),
                    (c = !0),
                    (a.allowMomentumBounce = !0))
                  : (o = t.minTranslate()),
                  s.loop && s.centeredSlides && (h = !0);
              else if (s.freeModeSticky) {
                let e;
                for (let t = 0; t < l.length; t += 1)
                  if (l[t] > -o) {
                    e = t;
                    break;
                  }
                (o =
                  Math.abs(l[e] - o) < Math.abs(l[e - 1] - o) ||
                  "next" === t.swipeDirection
                    ? l[e]
                    : l[e - 1]),
                  (o = -o);
              }
              if (
                (h &&
                  t.once("transitionEnd", () => {
                    t.loopFix();
                  }),
                0 !== t.velocity)
              ) {
                if (
                  ((e = n
                    ? Math.abs((-o - t.translate) / t.velocity)
                    : Math.abs((o - t.translate) / t.velocity)),
                  s.freeModeSticky)
                ) {
                  const a = Math.abs((n ? -o : o) - t.translate),
                    i = t.slidesSizesGrid[t.activeIndex];
                  e =
                    a < i ? s.speed : a < 2 * i ? 1.5 * s.speed : 2.5 * s.speed;
                }
              } else if (s.freeModeSticky) return void t.slideToClosest();
              s.freeModeMomentumBounce && c
                ? (t.updateProgress(d),
                  t.setTransition(e),
                  t.setTranslate(o),
                  t.transitionStart(!0, t.swipeDirection),
                  (t.animating = !0),
                  r.transitionEnd(() => {
                    t &&
                      !t.destroyed &&
                      a.allowMomentumBounce &&
                      (t.emit("momentumBounce"),
                      t.setTransition(s.speed),
                      setTimeout(() => {
                        t.setTranslate(d),
                          r.transitionEnd(() => {
                            t && !t.destroyed && t.transitionEnd();
                          });
                      }, 0));
                  }))
                : t.velocity
                ? (t.updateProgress(o),
                  t.setTransition(e),
                  t.setTranslate(o),
                  t.transitionStart(!0, t.swipeDirection),
                  t.animating ||
                    ((t.animating = !0),
                    r.transitionEnd(() => {
                      t && !t.destroyed && t.transitionEnd();
                    })))
                : t.updateProgress(o),
                t.updateActiveIndex(),
                t.updateSlidesClasses();
            } else if (s.freeModeSticky) return void t.slideToClosest();
            return void (
              (!s.freeModeMomentum || p >= s.longSwipesMs) &&
              (t.updateProgress(),
              t.updateActiveIndex(),
              t.updateSlidesClasses())
            );
          }
          let m = 0,
            f = t.slidesSizesGrid[0];
          for (
            let e = 0;
            e < o.length;
            e += e < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
          ) {
            const t = e < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
            void 0 !== o[e + t]
              ? h >= o[e] && h < o[e + t] && ((m = e), (f = o[e + t] - o[e]))
              : h >= o[e] && ((m = e), (f = o[o.length - 1] - o[o.length - 2]));
          }
          const g = (h - o[m]) / f,
            v = m < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
          if (p > s.longSwipesMs) {
            if (!s.longSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection &&
              (g >= s.longSwipesRatio ? t.slideTo(m + v) : t.slideTo(m)),
              "prev" === t.swipeDirection &&
                (g > 1 - s.longSwipesRatio ? t.slideTo(m + v) : t.slideTo(m));
          } else {
            if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
            t.navigation &&
            (d.target === t.navigation.nextEl ||
              d.target === t.navigation.prevEl)
              ? d.target === t.navigation.nextEl
                ? t.slideTo(m + v)
                : t.slideTo(m)
              : ("next" === t.swipeDirection && t.slideTo(m + v),
                "prev" === t.swipeDirection && t.slideTo(m));
          }
        }
        function $() {
          const e = this,
            { params: t, el: a } = e;
          if (a && 0 === a.offsetWidth) return;
          t.breakpoints && e.setBreakpoint();
          const { allowSlideNext: s, allowSlidePrev: i, snapGrid: n } = e;
          (e.allowSlideNext = !0),
            (e.allowSlidePrev = !0),
            e.updateSize(),
            e.updateSlides(),
            e.updateSlidesClasses(),
            ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
            e.isEnd &&
            !e.isBeginning &&
            !e.params.centeredSlides
              ? e.slideTo(e.slides.length - 1, 0, !1, !0)
              : e.slideTo(e.activeIndex, 0, !1, !0),
            e.autoplay &&
              e.autoplay.running &&
              e.autoplay.paused &&
              e.autoplay.run(),
            (e.allowSlidePrev = i),
            (e.allowSlideNext = s),
            e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow();
        }
        function M(e) {
          const t = this;
          t.allowClick ||
            (t.params.preventClicks && e.preventDefault(),
            t.params.preventClicksPropagation &&
              t.animating &&
              (e.stopPropagation(), e.stopImmediatePropagation()));
        }
        function _() {
          const e = this,
            { wrapperEl: t, rtlTranslate: a } = e;
          let s;
          (e.previousTranslate = e.translate),
            e.isHorizontal()
              ? (e.translate = a
                  ? t.scrollWidth - t.offsetWidth - t.scrollLeft
                  : -t.scrollLeft)
              : (e.translate = -t.scrollTop),
            -0 === e.translate && (e.translate = 0),
            e.updateActiveIndex(),
            e.updateSlidesClasses();
          const i = e.maxTranslate() - e.minTranslate();
          (s = 0 === i ? 0 : (e.translate - e.minTranslate()) / i),
            s !== e.progress &&
              e.updateProgress(a ? -e.translate : e.translate),
            e.emit("setTranslate", e.translate, !1);
        }
        let k = !1;
        function P() {}
        var z = {
          init: !0,
          direction: "horizontal",
          touchEventsTarget: "container",
          initialSlide: 0,
          speed: 300,
          cssMode: !1,
          updateOnWindowResize: !0,
          preventInteractionOnTransition: !1,
          edgeSwipeDetection: !1,
          edgeSwipeThreshold: 20,
          freeMode: !1,
          freeModeMomentum: !0,
          freeModeMomentumRatio: 1,
          freeModeMomentumBounce: !0,
          freeModeMomentumBounceRatio: 1,
          freeModeMomentumVelocityRatio: 1,
          freeModeSticky: !1,
          freeModeMinimumVelocity: 0.02,
          autoHeight: !1,
          setWrapperSize: !1,
          virtualTranslate: !1,
          effect: "slide",
          breakpoints: void 0,
          spaceBetween: 0,
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerColumnFill: "column",
          slidesPerGroup: 1,
          slidesPerGroupSkip: 0,
          centeredSlides: !1,
          centeredSlidesBounds: !1,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
          normalizeSlideIndex: !0,
          centerInsufficientSlides: !1,
          watchOverflow: !1,
          roundLengths: !1,
          touchRatio: 1,
          touchAngle: 45,
          simulateTouch: !0,
          shortSwipes: !0,
          longSwipes: !0,
          longSwipesRatio: 0.5,
          longSwipesMs: 300,
          followFinger: !0,
          allowTouchMove: !0,
          threshold: 0,
          touchMoveStopPropagation: !1,
          touchStartPreventDefault: !0,
          touchStartForcePreventDefault: !1,
          touchReleaseOnEdges: !1,
          uniqueNavElements: !0,
          resistance: !0,
          resistanceRatio: 0.85,
          watchSlidesProgress: !1,
          watchSlidesVisibility: !1,
          grabCursor: !1,
          preventClicks: !0,
          preventClicksPropagation: !0,
          slideToClickedSlide: !1,
          preloadImages: !0,
          updateOnImagesReady: !0,
          loop: !1,
          loopAdditionalSlides: 0,
          loopedSlides: null,
          loopFillGroupWithBlank: !1,
          allowSlidePrev: !0,
          allowSlideNext: !0,
          swipeHandler: null,
          noSwiping: !0,
          noSwipingClass: "swiper-no-swiping",
          noSwipingSelector: null,
          passiveListeners: !0,
          containerModifierClass: "swiper-container-",
          slideClass: "swiper-slide",
          slideBlankClass: "swiper-slide-invisible-blank",
          slideActiveClass: "swiper-slide-active",
          slideDuplicateActiveClass: "swiper-slide-duplicate-active",
          slideVisibleClass: "swiper-slide-visible",
          slideDuplicateClass: "swiper-slide-duplicate",
          slideNextClass: "swiper-slide-next",
          slideDuplicateNextClass: "swiper-slide-duplicate-next",
          slidePrevClass: "swiper-slide-prev",
          slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
          wrapperClass: "swiper-wrapper",
          runCallbacksOnInit: !0,
        };
        const L = {
            update: f,
            translate: g,
            transition: v,
            slide: w,
            loop: b,
            grabCursor: y,
            manipulation: x,
            events: {
              attachEvents: function () {
                const e = this,
                  { params: t, touchEvents: a, el: s, wrapperEl: i } = e;
                (e.onTouchStart = E.bind(e)),
                  (e.onTouchMove = T.bind(e)),
                  (e.onTouchEnd = C.bind(e)),
                  t.cssMode && (e.onScroll = _.bind(e)),
                  (e.onClick = M.bind(e));
                const r = !!t.nested;
                if (!h.touch && h.pointerEvents)
                  s.addEventListener(a.start, e.onTouchStart, !1),
                    n.addEventListener(a.move, e.onTouchMove, r),
                    n.addEventListener(a.end, e.onTouchEnd, !1);
                else {
                  if (h.touch) {
                    const i = !(
                      "touchstart" !== a.start ||
                      !h.passiveListener ||
                      !t.passiveListeners
                    ) && { passive: !0, capture: !1 };
                    s.addEventListener(a.start, e.onTouchStart, i),
                      s.addEventListener(
                        a.move,
                        e.onTouchMove,
                        h.passiveListener ? { passive: !1, capture: r } : r
                      ),
                      s.addEventListener(a.end, e.onTouchEnd, i),
                      a.cancel && s.addEventListener(a.cancel, e.onTouchEnd, i),
                      k || (n.addEventListener("touchstart", P), (k = !0));
                  }
                  ((t.simulateTouch && !S.ios && !S.android) ||
                    (t.simulateTouch && !h.touch && S.ios)) &&
                    (s.addEventListener("mousedown", e.onTouchStart, !1),
                    n.addEventListener("mousemove", e.onTouchMove, r),
                    n.addEventListener("mouseup", e.onTouchEnd, !1));
                }
                (t.preventClicks || t.preventClicksPropagation) &&
                  s.addEventListener("click", e.onClick, !0),
                  t.cssMode && i.addEventListener("scroll", e.onScroll),
                  t.updateOnWindowResize
                    ? e.on(
                        S.ios || S.android
                          ? "resize orientationchange observerUpdate"
                          : "resize observerUpdate",
                        $,
                        !0
                      )
                    : e.on("observerUpdate", $, !0);
              },
              detachEvents: function () {
                const e = this,
                  { params: t, touchEvents: a, el: s, wrapperEl: i } = e,
                  r = !!t.nested;
                if (!h.touch && h.pointerEvents)
                  s.removeEventListener(a.start, e.onTouchStart, !1),
                    n.removeEventListener(a.move, e.onTouchMove, r),
                    n.removeEventListener(a.end, e.onTouchEnd, !1);
                else {
                  if (h.touch) {
                    const i = !(
                      "onTouchStart" !== a.start ||
                      !h.passiveListener ||
                      !t.passiveListeners
                    ) && { passive: !0, capture: !1 };
                    s.removeEventListener(a.start, e.onTouchStart, i),
                      s.removeEventListener(a.move, e.onTouchMove, r),
                      s.removeEventListener(a.end, e.onTouchEnd, i),
                      a.cancel &&
                        s.removeEventListener(a.cancel, e.onTouchEnd, i);
                  }
                  ((t.simulateTouch && !S.ios && !S.android) ||
                    (t.simulateTouch && !h.touch && S.ios)) &&
                    (s.removeEventListener("mousedown", e.onTouchStart, !1),
                    n.removeEventListener("mousemove", e.onTouchMove, r),
                    n.removeEventListener("mouseup", e.onTouchEnd, !1));
                }
                (t.preventClicks || t.preventClicksPropagation) &&
                  s.removeEventListener("click", e.onClick, !0),
                  t.cssMode && i.removeEventListener("scroll", e.onScroll),
                  e.off(
                    S.ios || S.android
                      ? "resize orientationchange observerUpdate"
                      : "resize observerUpdate",
                    $
                  );
              },
            },
            breakpoints: {
              setBreakpoint: function () {
                const e = this,
                  {
                    activeIndex: t,
                    initialized: a,
                    loopedSlides: s = 0,
                    params: i,
                    $el: n,
                  } = e,
                  r = i.breakpoints;
                if (!r || (r && 0 === Object.keys(r).length)) return;
                const o = e.getBreakpoint(r);
                if (o && e.currentBreakpoint !== o) {
                  const l = o in r ? r[o] : void 0;
                  l &&
                    [
                      "slidesPerView",
                      "spaceBetween",
                      "slidesPerGroup",
                      "slidesPerGroupSkip",
                      "slidesPerColumn",
                    ].forEach((e) => {
                      const t = l[e];
                      void 0 !== t &&
                        (l[e] =
                          "slidesPerView" !== e ||
                          ("AUTO" !== t && "auto" !== t)
                            ? "slidesPerView" === e
                              ? parseFloat(t)
                              : parseInt(t, 10)
                            : "auto");
                    });
                  const d = l || e.originalParams,
                    c = i.slidesPerColumn > 1,
                    p = d.slidesPerColumn > 1;
                  c && !p
                    ? n.removeClass(
                        `${i.containerModifierClass}multirow ${i.containerModifierClass}multirow-column`
                      )
                    : !c &&
                      p &&
                      (n.addClass(`${i.containerModifierClass}multirow`),
                      "column" === d.slidesPerColumnFill &&
                        n.addClass(
                          `${i.containerModifierClass}multirow-column`
                        ));
                  const h = d.direction && d.direction !== i.direction,
                    m = i.loop && (d.slidesPerView !== i.slidesPerView || h);
                  h && a && e.changeDirection(),
                    u.extend(e.params, d),
                    u.extend(e, {
                      allowTouchMove: e.params.allowTouchMove,
                      allowSlideNext: e.params.allowSlideNext,
                      allowSlidePrev: e.params.allowSlidePrev,
                    }),
                    (e.currentBreakpoint = o),
                    m &&
                      a &&
                      (e.loopDestroy(),
                      e.loopCreate(),
                      e.updateSlides(),
                      e.slideTo(t - s + e.loopedSlides, 0, !1)),
                    e.emit("breakpoint", d);
                }
              },
              getBreakpoint: function (e) {
                if (!e) return;
                let t = !1;
                const a = Object.keys(e).map((e) => {
                  if ("string" == typeof e && 0 === e.indexOf("@")) {
                    const t = parseFloat(e.substr(1));
                    return { value: o.innerHeight * t, point: e };
                  }
                  return { value: e, point: e };
                });
                a.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
                for (let e = 0; e < a.length; e += 1) {
                  const { point: s, value: i } = a[e];
                  i <= o.innerWidth && (t = s);
                }
                return t || "max";
              },
            },
            checkOverflow: {
              checkOverflow: function () {
                const e = this,
                  t = e.params,
                  a = e.isLocked,
                  s =
                    e.slides.length > 0 &&
                    t.slidesOffsetBefore +
                      t.spaceBetween * (e.slides.length - 1) +
                      e.slides[0].offsetWidth * e.slides.length;
                t.slidesOffsetBefore && t.slidesOffsetAfter && s
                  ? (e.isLocked = s <= e.size)
                  : (e.isLocked = 1 === e.snapGrid.length),
                  (e.allowSlideNext = !e.isLocked),
                  (e.allowSlidePrev = !e.isLocked),
                  a !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"),
                  a &&
                    a !== e.isLocked &&
                    ((e.isEnd = !1), e.navigation && e.navigation.update());
              },
            },
            classes: {
              addClasses: function () {
                const { classNames: e, params: t, rtl: a, $el: s } = this,
                  i = [];
                i.push("initialized"),
                  i.push(t.direction),
                  t.freeMode && i.push("free-mode"),
                  t.autoHeight && i.push("autoheight"),
                  a && i.push("rtl"),
                  t.slidesPerColumn > 1 &&
                    (i.push("multirow"),
                    "column" === t.slidesPerColumnFill &&
                      i.push("multirow-column")),
                  S.android && i.push("android"),
                  S.ios && i.push("ios"),
                  t.cssMode && i.push("css-mode"),
                  i.forEach((a) => {
                    e.push(t.containerModifierClass + a);
                  }),
                  s.addClass(e.join(" "));
              },
              removeClasses: function () {
                const { $el: e, classNames: t } = this;
                e.removeClass(t.join(" "));
              },
            },
            images: {
              loadImage: function (e, t, a, s, i, n) {
                let r;
                function l() {
                  n && n();
                }
                d(e).parent("picture")[0] || (e.complete && i)
                  ? l()
                  : t
                  ? ((r = new o.Image()),
                    (r.onload = l),
                    (r.onerror = l),
                    s && (r.sizes = s),
                    a && (r.srcset = a),
                    t && (r.src = t))
                  : l();
              },
              preloadImages: function () {
                const e = this;
                function t() {
                  null != e &&
                    e &&
                    !e.destroyed &&
                    (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                    e.imagesLoaded === e.imagesToLoad.length &&
                      (e.params.updateOnImagesReady && e.update(),
                      e.emit("imagesReady")));
                }
                e.imagesToLoad = e.$el.find("img");
                for (let a = 0; a < e.imagesToLoad.length; a += 1) {
                  const s = e.imagesToLoad[a];
                  e.loadImage(
                    s,
                    s.currentSrc || s.getAttribute("src"),
                    s.srcset || s.getAttribute("srcset"),
                    s.sizes || s.getAttribute("sizes"),
                    !0,
                    t
                  );
                }
              },
            },
          },
          I = {};
        class O extends m {
          constructor(...e) {
            let t, a;
            1 === e.length && e[0].constructor && e[0].constructor === Object
              ? (a = e[0])
              : ([t, a] = e),
              a || (a = {}),
              (a = u.extend({}, a)),
              t && !a.el && (a.el = t),
              super(a),
              Object.keys(L).forEach((e) => {
                Object.keys(L[e]).forEach((t) => {
                  O.prototype[t] || (O.prototype[t] = L[e][t]);
                });
              });
            const s = this;
            void 0 === s.modules && (s.modules = {}),
              Object.keys(s.modules).forEach((e) => {
                const t = s.modules[e];
                if (t.params) {
                  const e = Object.keys(t.params)[0],
                    s = t.params[e];
                  if ("object" != typeof s || null === s) return;
                  if (!(e in a) || !("enabled" in s)) return;
                  !0 === a[e] && (a[e] = { enabled: !0 }),
                    "object" != typeof a[e] ||
                      "enabled" in a[e] ||
                      (a[e].enabled = !0),
                    a[e] || (a[e] = { enabled: !1 });
                }
              });
            const i = u.extend({}, z);
            s.useModulesParams(i),
              (s.params = u.extend({}, i, I, a)),
              (s.originalParams = u.extend({}, s.params)),
              (s.passedParams = u.extend({}, a)),
              (s.$ = d);
            const n = d(s.params.el);
            if (((t = n[0]), !t)) return;
            if (n.length > 1) {
              const e = [];
              return (
                n.each((t, s) => {
                  const i = u.extend({}, a, { el: s });
                  e.push(new O(i));
                }),
                e
              );
            }
            let r;
            return (
              (t.swiper = s),
              n.data("swiper", s),
              t && t.shadowRoot && t.shadowRoot.querySelector
                ? ((r = d(
                    t.shadowRoot.querySelector(`.${s.params.wrapperClass}`)
                  )),
                  (r.children = (e) => n.children(e)))
                : (r = n.children(`.${s.params.wrapperClass}`)),
              u.extend(s, {
                $el: n,
                el: t,
                $wrapperEl: r,
                wrapperEl: r[0],
                classNames: [],
                slides: d(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: () => "horizontal" === s.params.direction,
                isVertical: () => "vertical" === s.params.direction,
                rtl:
                  "rtl" === t.dir.toLowerCase() || "rtl" === n.css("direction"),
                rtlTranslate:
                  "horizontal" === s.params.direction &&
                  ("rtl" === t.dir.toLowerCase() ||
                    "rtl" === n.css("direction")),
                wrongRTL: "-webkit-box" === r.css("display"),
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: s.params.allowSlideNext,
                allowSlidePrev: s.params.allowSlidePrev,
                touchEvents: (function () {
                  const e = [
                    "touchstart",
                    "touchmove",
                    "touchend",
                    "touchcancel",
                  ];
                  let t = ["mousedown", "mousemove", "mouseup"];
                  return (
                    h.pointerEvents &&
                      (t = ["pointerdown", "pointermove", "pointerup"]),
                    (s.touchEventsTouch = {
                      start: e[0],
                      move: e[1],
                      end: e[2],
                      cancel: e[3],
                    }),
                    (s.touchEventsDesktop = {
                      start: t[0],
                      move: t[1],
                      end: t[2],
                    }),
                    h.touch || !s.params.simulateTouch
                      ? s.touchEventsTouch
                      : s.touchEventsDesktop
                  );
                })(),
                touchEventsData: {
                  isTouched: void 0,
                  isMoved: void 0,
                  allowTouchCallbacks: void 0,
                  touchStartTime: void 0,
                  isScrolling: void 0,
                  currentTranslate: void 0,
                  startTranslate: void 0,
                  allowThresholdMove: void 0,
                  formElements:
                    "input, select, option, textarea, button, video, label",
                  lastClickTime: u.now(),
                  clickTimeout: void 0,
                  velocities: [],
                  allowMomentumBounce: void 0,
                  isTouchEvent: void 0,
                  startMoving: void 0,
                },
                allowClick: !0,
                allowTouchMove: s.params.allowTouchMove,
                touches: {
                  startX: 0,
                  startY: 0,
                  currentX: 0,
                  currentY: 0,
                  diff: 0,
                },
                imagesToLoad: [],
                imagesLoaded: 0,
              }),
              s.useModules(),
              s.params.init && s.init(),
              s
            );
          }
          slidesPerViewDynamic() {
            const {
              params: e,
              slides: t,
              slidesGrid: a,
              size: s,
              activeIndex: i,
            } = this;
            let n = 1;
            if (e.centeredSlides) {
              let e,
                a = t[i].swiperSlideSize;
              for (let r = i + 1; r < t.length; r += 1)
                t[r] &&
                  !e &&
                  ((a += t[r].swiperSlideSize), (n += 1), a > s && (e = !0));
              for (let r = i - 1; r >= 0; r -= 1)
                t[r] &&
                  !e &&
                  ((a += t[r].swiperSlideSize), (n += 1), a > s && (e = !0));
            } else
              for (let e = i + 1; e < t.length; e += 1)
                a[e] - a[i] < s && (n += 1);
            return n;
          }
          update() {
            const e = this;
            if (!e || e.destroyed) return;
            const { snapGrid: t, params: a } = e;
            function s() {
              const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                a = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
              e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses();
            }
            let i;
            a.breakpoints && e.setBreakpoint(),
              e.updateSize(),
              e.updateSlides(),
              e.updateProgress(),
              e.updateSlidesClasses(),
              e.params.freeMode
                ? (s(), e.params.autoHeight && e.updateAutoHeight())
                : ((i =
                    ("auto" === e.params.slidesPerView ||
                      e.params.slidesPerView > 1) &&
                    e.isEnd &&
                    !e.params.centeredSlides
                      ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                      : e.slideTo(e.activeIndex, 0, !1, !0)),
                  i || s()),
              a.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
              e.emit("update");
          }
          changeDirection(e, t = !0) {
            const a = this,
              s = a.params.direction;
            return (
              e || (e = "horizontal" === s ? "vertical" : "horizontal"),
              e === s ||
                ("horizontal" !== e && "vertical" !== e) ||
                (a.$el
                  .removeClass(`${a.params.containerModifierClass}${s}`)
                  .addClass(`${a.params.containerModifierClass}${e}`),
                (a.params.direction = e),
                a.slides.each((t, a) => {
                  "vertical" === e
                    ? (a.style.width = "")
                    : (a.style.height = "");
                }),
                a.emit("changeDirection"),
                t && a.update()),
              a
            );
          }
          init() {
            const e = this;
            e.initialized ||
              (e.emit("beforeInit"),
              e.params.breakpoints && e.setBreakpoint(),
              e.addClasses(),
              e.params.loop && e.loopCreate(),
              e.updateSize(),
              e.updateSlides(),
              e.params.watchOverflow && e.checkOverflow(),
              e.params.grabCursor && e.setGrabCursor(),
              e.params.preloadImages && e.preloadImages(),
              e.params.loop
                ? e.slideTo(
                    e.params.initialSlide + e.loopedSlides,
                    0,
                    e.params.runCallbacksOnInit
                  )
                : e.slideTo(
                    e.params.initialSlide,
                    0,
                    e.params.runCallbacksOnInit
                  ),
              e.attachEvents(),
              (e.initialized = !0),
              e.emit("init"));
          }
          destroy(e = !0, t = !0) {
            const a = this,
              { params: s, $el: i, $wrapperEl: n, slides: r } = a;
            return (
              void 0 === a.params ||
                a.destroyed ||
                (a.emit("beforeDestroy"),
                (a.initialized = !1),
                a.detachEvents(),
                s.loop && a.loopDestroy(),
                t &&
                  (a.removeClasses(),
                  i.removeAttr("style"),
                  n.removeAttr("style"),
                  r &&
                    r.length &&
                    r
                      .removeClass(
                        [
                          s.slideVisibleClass,
                          s.slideActiveClass,
                          s.slideNextClass,
                          s.slidePrevClass,
                        ].join(" ")
                      )
                      .removeAttr("style")
                      .removeAttr("data-swiper-slide-index")),
                a.emit("destroy"),
                Object.keys(a.eventsListeners).forEach((e) => {
                  a.off(e);
                }),
                !1 !== e &&
                  ((a.$el[0].swiper = null),
                  a.$el.data("swiper", null),
                  u.deleteProps(a)),
                (a.destroyed = !0)),
              null
            );
          }
          static extendDefaults(e) {
            u.extend(I, e);
          }
          static get extendedDefaults() {
            return I;
          }
          static get defaults() {
            return z;
          }
          static get Class() {
            return m;
          }
          static get $() {
            return d;
          }
        }
        var D = { name: "device", proto: { device: S }, static: { device: S } },
          A = {
            name: "support",
            proto: { support: h },
            static: { support: h },
          };
        const N = {
          isEdge: !!o.navigator.userAgent.match(/Edge/g),
          isSafari: (function () {
            const e = o.navigator.userAgent.toLowerCase();
            return (
              e.indexOf("safari") >= 0 &&
              e.indexOf("chrome") < 0 &&
              e.indexOf("android") < 0
            );
          })(),
          isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
            o.navigator.userAgent
          ),
        };
        var G = {
            name: "browser",
            proto: { browser: N },
            static: { browser: N },
          },
          B = {
            name: "resize",
            create() {
              const e = this;
              u.extend(e, {
                resize: {
                  resizeHandler() {
                    e &&
                      !e.destroyed &&
                      e.initialized &&
                      (e.emit("beforeResize"), e.emit("resize"));
                  },
                  orientationChangeHandler() {
                    e &&
                      !e.destroyed &&
                      e.initialized &&
                      e.emit("orientationchange");
                  },
                },
              });
            },
            on: {
              init() {
                o.addEventListener("resize", this.resize.resizeHandler),
                  o.addEventListener(
                    "orientationchange",
                    this.resize.orientationChangeHandler
                  );
              },
              destroy() {
                o.removeEventListener("resize", this.resize.resizeHandler),
                  o.removeEventListener(
                    "orientationchange",
                    this.resize.orientationChangeHandler
                  );
              },
            },
          };
        const H = {
          func: o.MutationObserver || o.WebkitMutationObserver,
          attach(e, t = {}) {
            const a = this,
              s = new (0, H.func)((e) => {
                if (1 === e.length) return void a.emit("observerUpdate", e[0]);
                const t = function () {
                  a.emit("observerUpdate", e[0]);
                };
                o.requestAnimationFrame
                  ? o.requestAnimationFrame(t)
                  : o.setTimeout(t, 0);
              });
            s.observe(e, {
              attributes: void 0 === t.attributes || t.attributes,
              childList: void 0 === t.childList || t.childList,
              characterData: void 0 === t.characterData || t.characterData,
            }),
              a.observer.observers.push(s);
          },
          init() {
            const e = this;
            if (h.observer && e.params.observer) {
              if (e.params.observeParents) {
                const t = e.$el.parents();
                for (let a = 0; a < t.length; a += 1) e.observer.attach(t[a]);
              }
              e.observer.attach(e.$el[0], {
                childList: e.params.observeSlideChildren,
              }),
                e.observer.attach(e.$wrapperEl[0], { attributes: !1 });
            }
          },
          destroy() {
            this.observer.observers.forEach((e) => {
              e.disconnect();
            }),
              (this.observer.observers = []);
          },
        };
        var V = {
          name: "observer",
          params: {
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1,
          },
          create() {
            const e = this;
            u.extend(e, {
              observer: {
                init: H.init.bind(e),
                attach: H.attach.bind(e),
                destroy: H.destroy.bind(e),
                observers: [],
              },
            });
          },
          on: {
            init() {
              this.observer.init();
            },
            destroy() {
              this.observer.destroy();
            },
          },
        };
        const R = {
          update(e) {
            const t = this,
              {
                slidesPerView: a,
                slidesPerGroup: s,
                centeredSlides: i,
              } = t.params,
              { addSlidesBefore: n, addSlidesAfter: r } = t.params.virtual,
              {
                from: o,
                to: l,
                slides: d,
                slidesGrid: c,
                renderSlide: p,
                offset: h,
              } = t.virtual;
            t.updateActiveIndex();
            const m = t.activeIndex || 0;
            let f, g, v;
            (f = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top"),
              i
                ? ((g = Math.floor(a / 2) + s + n),
                  (v = Math.floor(a / 2) + s + r))
                : ((g = a + (s - 1) + n), (v = s + r));
            const w = Math.max((m || 0) - v, 0),
              b = Math.min((m || 0) + g, d.length - 1),
              y = (t.slidesGrid[w] || 0) - (t.slidesGrid[0] || 0);
            function x() {
              t.updateSlides(),
                t.updateProgress(),
                t.updateSlidesClasses(),
                t.lazy && t.params.lazy.enabled && t.lazy.load();
            }
            if (
              (u.extend(t.virtual, {
                from: w,
                to: b,
                offset: y,
                slidesGrid: t.slidesGrid,
              }),
              o === w && l === b && !e)
            )
              return (
                t.slidesGrid !== c && y !== h && t.slides.css(f, `${y}px`),
                void t.updateProgress()
              );
            if (t.params.virtual.renderExternal)
              return (
                t.params.virtual.renderExternal.call(t, {
                  offset: y,
                  from: w,
                  to: b,
                  slides: (function () {
                    const e = [];
                    for (let t = w; t <= b; t += 1) e.push(d[t]);
                    return e;
                  })(),
                }),
                void x()
              );
            const S = [],
              E = [];
            if (e) t.$wrapperEl.find(`.${t.params.slideClass}`).remove();
            else
              for (let e = o; e <= l; e += 1)
                (e < w || e > b) &&
                  t.$wrapperEl
                    .find(
                      `.${t.params.slideClass}[data-swiper-slide-index="${e}"]`
                    )
                    .remove();
            for (let t = 0; t < d.length; t += 1)
              t >= w &&
                t <= b &&
                (void 0 === l || e
                  ? E.push(t)
                  : (t > l && E.push(t), t < o && S.push(t)));
            E.forEach((e) => {
              t.$wrapperEl.append(p(d[e], e));
            }),
              S.sort((e, t) => t - e).forEach((e) => {
                t.$wrapperEl.prepend(p(d[e], e));
              }),
              t.$wrapperEl.children(".swiper-slide").css(f, `${y}px`),
              x();
          },
          renderSlide(e, t) {
            const a = this,
              s = a.params.virtual;
            if (s.cache && a.virtual.cache[t]) return a.virtual.cache[t];
            const i = s.renderSlide
              ? d(s.renderSlide.call(a, e, t))
              : d(
                  `<div class="${a.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`
                );
            return (
              i.attr("data-swiper-slide-index") ||
                i.attr("data-swiper-slide-index", t),
              s.cache && (a.virtual.cache[t] = i),
              i
            );
          },
          appendSlide(e) {
            const t = this;
            if ("object" == typeof e && "length" in e)
              for (let a = 0; a < e.length; a += 1)
                e[a] && t.virtual.slides.push(e[a]);
            else t.virtual.slides.push(e);
            t.virtual.update(!0);
          },
          prependSlide(e) {
            const t = this,
              a = t.activeIndex;
            let s = a + 1,
              i = 1;
            if (Array.isArray(e)) {
              for (let a = 0; a < e.length; a += 1)
                e[a] && t.virtual.slides.unshift(e[a]);
              (s = a + e.length), (i = e.length);
            } else t.virtual.slides.unshift(e);
            if (t.params.virtual.cache) {
              const e = t.virtual.cache,
                a = {};
              Object.keys(e).forEach((t) => {
                const s = e[t],
                  n = s.attr("data-swiper-slide-index");
                n && s.attr("data-swiper-slide-index", parseInt(n, 10) + 1),
                  (a[parseInt(t, 10) + i] = s);
              }),
                (t.virtual.cache = a);
            }
            t.virtual.update(!0), t.slideTo(s, 0);
          },
          removeSlide(e) {
            const t = this;
            if (null == e) return;
            let a = t.activeIndex;
            if (Array.isArray(e))
              for (let s = e.length - 1; s >= 0; s -= 1)
                t.virtual.slides.splice(e[s], 1),
                  t.params.virtual.cache && delete t.virtual.cache[e[s]],
                  e[s] < a && (a -= 1),
                  (a = Math.max(a, 0));
            else
              t.virtual.slides.splice(e, 1),
                t.params.virtual.cache && delete t.virtual.cache[e],
                e < a && (a -= 1),
                (a = Math.max(a, 0));
            t.virtual.update(!0), t.slideTo(a, 0);
          },
          removeAllSlides() {
            const e = this;
            (e.virtual.slides = []),
              e.params.virtual.cache && (e.virtual.cache = {}),
              e.virtual.update(!0),
              e.slideTo(0, 0);
          },
        };
        var F = {
          name: "virtual",
          params: {
            virtual: {
              enabled: !1,
              slides: [],
              cache: !0,
              renderSlide: null,
              renderExternal: null,
              addSlidesBefore: 0,
              addSlidesAfter: 0,
            },
          },
          create() {
            const e = this;
            u.extend(e, {
              virtual: {
                update: R.update.bind(e),
                appendSlide: R.appendSlide.bind(e),
                prependSlide: R.prependSlide.bind(e),
                removeSlide: R.removeSlide.bind(e),
                removeAllSlides: R.removeAllSlides.bind(e),
                renderSlide: R.renderSlide.bind(e),
                slides: e.params.virtual.slides,
                cache: {},
              },
            });
          },
          on: {
            beforeInit() {
              const e = this;
              if (!e.params.virtual.enabled) return;
              e.classNames.push(`${e.params.containerModifierClass}virtual`);
              const t = { watchSlidesProgress: !0 };
              u.extend(e.params, t),
                u.extend(e.originalParams, t),
                e.params.initialSlide || e.virtual.update();
            },
            setTranslate() {
              this.params.virtual.enabled && this.virtual.update();
            },
          },
        };
        const Y = {
          handle(e) {
            const t = this,
              { rtlTranslate: a } = t;
            let s = e;
            s.originalEvent && (s = s.originalEvent);
            const i = s.keyCode || s.charCode,
              r = t.params.keyboard.pageUpDown,
              l = r && 33 === i,
              d = r && 34 === i,
              c = 37 === i,
              p = 39 === i,
              u = 38 === i,
              h = 40 === i;
            if (
              !t.allowSlideNext &&
              ((t.isHorizontal() && p) || (t.isVertical() && h) || d)
            )
              return !1;
            if (
              !t.allowSlidePrev &&
              ((t.isHorizontal() && c) || (t.isVertical() && u) || l)
            )
              return !1;
            if (
              !(
                s.shiftKey ||
                s.altKey ||
                s.ctrlKey ||
                s.metaKey ||
                (n.activeElement &&
                  n.activeElement.nodeName &&
                  ("input" === n.activeElement.nodeName.toLowerCase() ||
                    "textarea" === n.activeElement.nodeName.toLowerCase()))
              )
            ) {
              if (
                t.params.keyboard.onlyInViewport &&
                (l || d || c || p || u || h)
              ) {
                let e = !1;
                if (
                  t.$el.parents(`.${t.params.slideClass}`).length > 0 &&
                  0 === t.$el.parents(`.${t.params.slideActiveClass}`).length
                )
                  return;
                const s = o.innerWidth,
                  i = o.innerHeight,
                  n = t.$el.offset();
                a && (n.left -= t.$el[0].scrollLeft);
                const r = [
                  [n.left, n.top],
                  [n.left + t.width, n.top],
                  [n.left, n.top + t.height],
                  [n.left + t.width, n.top + t.height],
                ];
                for (let t = 0; t < r.length; t += 1) {
                  const a = r[t];
                  a[0] >= 0 && a[0] <= s && a[1] >= 0 && a[1] <= i && (e = !0);
                }
                if (!e) return;
              }
              t.isHorizontal()
                ? ((l || d || c || p) &&
                    (s.preventDefault
                      ? s.preventDefault()
                      : (s.returnValue = !1)),
                  (((d || p) && !a) || ((l || c) && a)) && t.slideNext(),
                  (((l || c) && !a) || ((d || p) && a)) && t.slidePrev())
                : ((l || d || u || h) &&
                    (s.preventDefault
                      ? s.preventDefault()
                      : (s.returnValue = !1)),
                  (d || h) && t.slideNext(),
                  (l || u) && t.slidePrev()),
                t.emit("keyPress", i);
            }
          },
          enable() {
            const e = this;
            e.keyboard.enabled ||
              (d(n).on("keydown", e.keyboard.handle),
              (e.keyboard.enabled = !0));
          },
          disable() {
            const e = this;
            e.keyboard.enabled &&
              (d(n).off("keydown", e.keyboard.handle),
              (e.keyboard.enabled = !1));
          },
        };
        var q = {
          name: "keyboard",
          params: {
            keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 },
          },
          create() {
            const e = this;
            u.extend(e, {
              keyboard: {
                enabled: !1,
                enable: Y.enable.bind(e),
                disable: Y.disable.bind(e),
                handle: Y.handle.bind(e),
              },
            });
          },
          on: {
            init() {
              const e = this;
              e.params.keyboard.enabled && e.keyboard.enable();
            },
            destroy() {
              const e = this;
              e.keyboard.enabled && e.keyboard.disable();
            },
          },
        };
        const X = {
          lastScrollTime: u.now(),
          lastEventBeforeSnap: void 0,
          recentWheelEvents: [],
          event: () =>
            o.navigator.userAgent.indexOf("firefox") > -1
              ? "DOMMouseScroll"
              : (function () {
                  const e = "onwheel";
                  let t = e in n;
                  if (!t) {
                    const a = n.createElement("div");
                    a.setAttribute(e, "return;"),
                      (t = "function" == typeof a[e]);
                  }
                  return (
                    !t &&
                      n.implementation &&
                      n.implementation.hasFeature &&
                      !0 !== n.implementation.hasFeature("", "") &&
                      (t = n.implementation.hasFeature("Events.wheel", "3.0")),
                    t
                  );
                })()
              ? "wheel"
              : "mousewheel",
          normalize(e) {
            let t = 0,
              a = 0,
              s = 0,
              i = 0;
            return (
              "detail" in e && (a = e.detail),
              "wheelDelta" in e && (a = -e.wheelDelta / 120),
              "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120),
              "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
              "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = a), (a = 0)),
              (s = 10 * t),
              (i = 10 * a),
              "deltaY" in e && (i = e.deltaY),
              "deltaX" in e && (s = e.deltaX),
              e.shiftKey && !s && ((s = i), (i = 0)),
              (s || i) &&
                e.deltaMode &&
                (1 === e.deltaMode
                  ? ((s *= 40), (i *= 40))
                  : ((s *= 800), (i *= 800))),
              s && !t && (t = s < 1 ? -1 : 1),
              i && !a && (a = i < 1 ? -1 : 1),
              { spinX: t, spinY: a, pixelX: s, pixelY: i }
            );
          },
          handleMouseEnter() {
            this.mouseEntered = !0;
          },
          handleMouseLeave() {
            this.mouseEntered = !1;
          },
          handle(e) {
            let t = e;
            const a = this,
              s = a.params.mousewheel;
            a.params.cssMode && t.preventDefault();
            let i = a.$el;
            if (
              ("container" !== a.params.mousewheel.eventsTarged &&
                (i = d(a.params.mousewheel.eventsTarged)),
              !a.mouseEntered && !i[0].contains(t.target) && !s.releaseOnEdges)
            )
              return !0;
            t.originalEvent && (t = t.originalEvent);
            let n = 0;
            const r = a.rtlTranslate ? -1 : 1,
              o = X.normalize(t);
            if (s.forceToAxis)
              if (a.isHorizontal()) {
                if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
                n = -o.pixelX * r;
              } else {
                if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
                n = -o.pixelY;
              }
            else
              n =
                Math.abs(o.pixelX) > Math.abs(o.pixelY)
                  ? -o.pixelX * r
                  : -o.pixelY;
            if (0 === n) return !0;
            if ((s.invert && (n = -n), a.params.freeMode)) {
              const e = {
                  time: u.now(),
                  delta: Math.abs(n),
                  direction: Math.sign(n),
                },
                { lastEventBeforeSnap: i } = a.mousewheel,
                r =
                  i &&
                  e.time < i.time + 500 &&
                  e.delta <= i.delta &&
                  e.direction === i.direction;
              if (!r) {
                (a.mousewheel.lastEventBeforeSnap = void 0),
                  a.params.loop && a.loopFix();
                let i = a.getTranslate() + n * s.sensitivity;
                const o = a.isBeginning,
                  l = a.isEnd;
                if (
                  (i >= a.minTranslate() && (i = a.minTranslate()),
                  i <= a.maxTranslate() && (i = a.maxTranslate()),
                  a.setTransition(0),
                  a.setTranslate(i),
                  a.updateProgress(),
                  a.updateActiveIndex(),
                  a.updateSlidesClasses(),
                  ((!o && a.isBeginning) || (!l && a.isEnd)) &&
                    a.updateSlidesClasses(),
                  a.params.freeModeSticky)
                ) {
                  clearTimeout(a.mousewheel.timeout),
                    (a.mousewheel.timeout = void 0);
                  const t = a.mousewheel.recentWheelEvents;
                  t.length >= 15 && t.shift();
                  const s = t.length ? t[t.length - 1] : void 0,
                    i = t[0];
                  if (
                    (t.push(e),
                    s && (e.delta > s.delta || e.direction !== s.direction))
                  )
                    t.splice(0);
                  else if (
                    t.length >= 15 &&
                    e.time - i.time < 500 &&
                    i.delta - e.delta >= 1 &&
                    e.delta <= 6
                  ) {
                    const s = n > 0 ? 0.8 : 0.2;
                    (a.mousewheel.lastEventBeforeSnap = e),
                      t.splice(0),
                      (a.mousewheel.timeout = u.nextTick(() => {
                        a.slideToClosest(a.params.speed, !0, void 0, s);
                      }, 0));
                  }
                  a.mousewheel.timeout ||
                    (a.mousewheel.timeout = u.nextTick(() => {
                      (a.mousewheel.lastEventBeforeSnap = e),
                        t.splice(0),
                        a.slideToClosest(a.params.speed, !0, void 0, 0.5);
                    }, 500));
                }
                if (
                  (r || a.emit("scroll", t),
                  a.params.autoplay &&
                    a.params.autoplayDisableOnInteraction &&
                    a.autoplay.stop(),
                  i === a.minTranslate() || i === a.maxTranslate())
                )
                  return !0;
              }
            } else {
              const t = {
                  time: u.now(),
                  delta: Math.abs(n),
                  direction: Math.sign(n),
                  raw: e,
                },
                s = a.mousewheel.recentWheelEvents;
              s.length >= 2 && s.shift();
              const i = s.length ? s[s.length - 1] : void 0;
              if (
                (s.push(t),
                i
                  ? (t.direction !== i.direction ||
                      t.delta > i.delta ||
                      t.time > i.time + 150) &&
                    a.mousewheel.animateSlider(t)
                  : a.mousewheel.animateSlider(t),
                a.mousewheel.releaseScroll(t))
              )
                return !0;
            }
            return (
              t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1
            );
          },
          animateSlider(e) {
            const t = this;
            return (
              (e.delta >= 6 && u.now() - t.mousewheel.lastScrollTime < 60) ||
              (e.direction < 0
                ? (t.isEnd && !t.params.loop) ||
                  t.animating ||
                  (t.slideNext(), t.emit("scroll", e.raw))
                : (t.isBeginning && !t.params.loop) ||
                  t.animating ||
                  (t.slidePrev(), t.emit("scroll", e.raw)),
              (t.mousewheel.lastScrollTime = new o.Date().getTime()),
              !1)
            );
          },
          releaseScroll(e) {
            const t = this,
              a = t.params.mousewheel;
            if (e.direction < 0) {
              if (t.isEnd && !t.params.loop && a.releaseOnEdges) return !0;
            } else if (t.isBeginning && !t.params.loop && a.releaseOnEdges)
              return !0;
            return !1;
          },
          enable() {
            const e = this,
              t = X.event();
            if (e.params.cssMode)
              return (
                e.wrapperEl.removeEventListener(t, e.mousewheel.handle), !0
              );
            if (!t) return !1;
            if (e.mousewheel.enabled) return !1;
            let a = e.$el;
            return (
              "container" !== e.params.mousewheel.eventsTarged &&
                (a = d(e.params.mousewheel.eventsTarged)),
              a.on("mouseenter", e.mousewheel.handleMouseEnter),
              a.on("mouseleave", e.mousewheel.handleMouseLeave),
              a.on(t, e.mousewheel.handle),
              (e.mousewheel.enabled = !0),
              !0
            );
          },
          disable() {
            const e = this,
              t = X.event();
            if (e.params.cssMode)
              return e.wrapperEl.addEventListener(t, e.mousewheel.handle), !0;
            if (!t) return !1;
            if (!e.mousewheel.enabled) return !1;
            let a = e.$el;
            return (
              "container" !== e.params.mousewheel.eventsTarged &&
                (a = d(e.params.mousewheel.eventsTarged)),
              a.off(t, e.mousewheel.handle),
              (e.mousewheel.enabled = !1),
              !0
            );
          },
        };
        const W = {
          update() {
            const e = this,
              t = e.params.navigation;
            if (e.params.loop) return;
            const { $nextEl: a, $prevEl: s } = e.navigation;
            s &&
              s.length > 0 &&
              (e.isBeginning
                ? s.addClass(t.disabledClass)
                : s.removeClass(t.disabledClass),
              s[
                e.params.watchOverflow && e.isLocked
                  ? "addClass"
                  : "removeClass"
              ](t.lockClass)),
              a &&
                a.length > 0 &&
                (e.isEnd
                  ? a.addClass(t.disabledClass)
                  : a.removeClass(t.disabledClass),
                a[
                  e.params.watchOverflow && e.isLocked
                    ? "addClass"
                    : "removeClass"
                ](t.lockClass));
          },
          onPrevClick(e) {
            const t = this;
            e.preventDefault(),
              (t.isBeginning && !t.params.loop) || t.slidePrev();
          },
          onNextClick(e) {
            const t = this;
            e.preventDefault(), (t.isEnd && !t.params.loop) || t.slideNext();
          },
          init() {
            const e = this,
              t = e.params.navigation;
            if (!t.nextEl && !t.prevEl) return;
            let a, s;
            t.nextEl &&
              ((a = d(t.nextEl)),
              e.params.uniqueNavElements &&
                "string" == typeof t.nextEl &&
                a.length > 1 &&
                1 === e.$el.find(t.nextEl).length &&
                (a = e.$el.find(t.nextEl))),
              t.prevEl &&
                ((s = d(t.prevEl)),
                e.params.uniqueNavElements &&
                  "string" == typeof t.prevEl &&
                  s.length > 1 &&
                  1 === e.$el.find(t.prevEl).length &&
                  (s = e.$el.find(t.prevEl))),
              a && a.length > 0 && a.on("click", e.navigation.onNextClick),
              s && s.length > 0 && s.on("click", e.navigation.onPrevClick),
              u.extend(e.navigation, {
                $nextEl: a,
                nextEl: a && a[0],
                $prevEl: s,
                prevEl: s && s[0],
              });
          },
          destroy() {
            const e = this,
              { $nextEl: t, $prevEl: a } = e.navigation;
            t &&
              t.length &&
              (t.off("click", e.navigation.onNextClick),
              t.removeClass(e.params.navigation.disabledClass)),
              a &&
                a.length &&
                (a.off("click", e.navigation.onPrevClick),
                a.removeClass(e.params.navigation.disabledClass));
          },
        };
        const j = {
          update() {
            const e = this,
              t = e.rtl,
              a = e.params.pagination;
            if (
              !a.el ||
              !e.pagination.el ||
              !e.pagination.$el ||
              0 === e.pagination.$el.length
            )
              return;
            const s =
                e.virtual && e.params.virtual.enabled
                  ? e.virtual.slides.length
                  : e.slides.length,
              i = e.pagination.$el;
            let n;
            const r = e.params.loop
              ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup)
              : e.snapGrid.length;
            if (
              (e.params.loop
                ? ((n = Math.ceil(
                    (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
                  )),
                  n > s - 1 - 2 * e.loopedSlides &&
                    (n -= s - 2 * e.loopedSlides),
                  n > r - 1 && (n -= r),
                  n < 0 && "bullets" !== e.params.paginationType && (n = r + n))
                : (n =
                    void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
              "bullets" === a.type &&
                e.pagination.bullets &&
                e.pagination.bullets.length > 0)
            ) {
              const s = e.pagination.bullets;
              let r, o, l;
              if (
                (a.dynamicBullets &&
                  ((e.pagination.bulletSize = s
                    .eq(0)
                    [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                  i.css(
                    e.isHorizontal() ? "width" : "height",
                    e.pagination.bulletSize * (a.dynamicMainBullets + 4) + "px"
                  ),
                  a.dynamicMainBullets > 1 &&
                    void 0 !== e.previousIndex &&
                    ((e.pagination.dynamicBulletIndex += n - e.previousIndex),
                    e.pagination.dynamicBulletIndex > a.dynamicMainBullets - 1
                      ? (e.pagination.dynamicBulletIndex =
                          a.dynamicMainBullets - 1)
                      : e.pagination.dynamicBulletIndex < 0 &&
                        (e.pagination.dynamicBulletIndex = 0)),
                  (r = n - e.pagination.dynamicBulletIndex),
                  (o = r + (Math.min(s.length, a.dynamicMainBullets) - 1)),
                  (l = (o + r) / 2)),
                s.removeClass(
                  `${a.bulletActiveClass} ${a.bulletActiveClass}-next ${a.bulletActiveClass}-next-next ${a.bulletActiveClass}-prev ${a.bulletActiveClass}-prev-prev ${a.bulletActiveClass}-main`
                ),
                i.length > 1)
              )
                s.each((e, t) => {
                  const s = d(t),
                    i = s.index();
                  i === n && s.addClass(a.bulletActiveClass),
                    a.dynamicBullets &&
                      (i >= r &&
                        i <= o &&
                        s.addClass(`${a.bulletActiveClass}-main`),
                      i === r &&
                        s
                          .prev()
                          .addClass(`${a.bulletActiveClass}-prev`)
                          .prev()
                          .addClass(`${a.bulletActiveClass}-prev-prev`),
                      i === o &&
                        s
                          .next()
                          .addClass(`${a.bulletActiveClass}-next`)
                          .next()
                          .addClass(`${a.bulletActiveClass}-next-next`));
                });
              else {
                const t = s.eq(n),
                  i = t.index();
                if ((t.addClass(a.bulletActiveClass), a.dynamicBullets)) {
                  const t = s.eq(r),
                    n = s.eq(o);
                  for (let e = r; e <= o; e += 1)
                    s.eq(e).addClass(`${a.bulletActiveClass}-main`);
                  if (e.params.loop)
                    if (i >= s.length - a.dynamicMainBullets) {
                      for (let e = a.dynamicMainBullets; e >= 0; e -= 1)
                        s.eq(s.length - e).addClass(
                          `${a.bulletActiveClass}-main`
                        );
                      s.eq(s.length - a.dynamicMainBullets - 1).addClass(
                        `${a.bulletActiveClass}-prev`
                      );
                    } else
                      t
                        .prev()
                        .addClass(`${a.bulletActiveClass}-prev`)
                        .prev()
                        .addClass(`${a.bulletActiveClass}-prev-prev`),
                        n
                          .next()
                          .addClass(`${a.bulletActiveClass}-next`)
                          .next()
                          .addClass(`${a.bulletActiveClass}-next-next`);
                  else
                    t
                      .prev()
                      .addClass(`${a.bulletActiveClass}-prev`)
                      .prev()
                      .addClass(`${a.bulletActiveClass}-prev-prev`),
                      n
                        .next()
                        .addClass(`${a.bulletActiveClass}-next`)
                        .next()
                        .addClass(`${a.bulletActiveClass}-next-next`);
                }
              }
              if (a.dynamicBullets) {
                const i = Math.min(s.length, a.dynamicMainBullets + 4),
                  n =
                    (e.pagination.bulletSize * i - e.pagination.bulletSize) /
                      2 -
                    l * e.pagination.bulletSize,
                  r = t ? "right" : "left";
                s.css(e.isHorizontal() ? r : "top", `${n}px`);
              }
            }
            if (
              ("fraction" === a.type &&
                (i
                  .find(`.${a.currentClass}`)
                  .text(a.formatFractionCurrent(n + 1)),
                i.find(`.${a.totalClass}`).text(a.formatFractionTotal(r))),
              "progressbar" === a.type)
            ) {
              let t;
              t = a.progressbarOpposite
                ? e.isHorizontal()
                  ? "vertical"
                  : "horizontal"
                : e.isHorizontal()
                ? "horizontal"
                : "vertical";
              const s = (n + 1) / r;
              let o = 1,
                l = 1;
              "horizontal" === t ? (o = s) : (l = s),
                i
                  .find(`.${a.progressbarFillClass}`)
                  .transform(`translate3d(0,0,0) scaleX(${o}) scaleY(${l})`)
                  .transition(e.params.speed);
            }
            "custom" === a.type && a.renderCustom
              ? (i.html(a.renderCustom(e, n + 1, r)),
                e.emit("paginationRender", e, i[0]))
              : e.emit("paginationUpdate", e, i[0]),
              i[
                e.params.watchOverflow && e.isLocked
                  ? "addClass"
                  : "removeClass"
              ](a.lockClass);
          },
          render() {
            const e = this,
              t = e.params.pagination;
            if (
              !t.el ||
              !e.pagination.el ||
              !e.pagination.$el ||
              0 === e.pagination.$el.length
            )
              return;
            const a =
                e.virtual && e.params.virtual.enabled
                  ? e.virtual.slides.length
                  : e.slides.length,
              s = e.pagination.$el;
            let i = "";
            if ("bullets" === t.type) {
              const n = e.params.loop
                ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup)
                : e.snapGrid.length;
              for (let a = 0; a < n; a += 1)
                t.renderBullet
                  ? (i += t.renderBullet.call(e, a, t.bulletClass))
                  : (i += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
              s.html(i), (e.pagination.bullets = s.find(`.${t.bulletClass}`));
            }
            "fraction" === t.type &&
              ((i = t.renderFraction
                ? t.renderFraction.call(e, t.currentClass, t.totalClass)
                : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
              s.html(i)),
              "progressbar" === t.type &&
                ((i = t.renderProgressbar
                  ? t.renderProgressbar.call(e, t.progressbarFillClass)
                  : `<span class="${t.progressbarFillClass}"></span>`),
                s.html(i)),
              "custom" !== t.type &&
                e.emit("paginationRender", e.pagination.$el[0]);
          },
          init() {
            const e = this,
              t = e.params.pagination;
            if (!t.el) return;
            let a = d(t.el);
            0 !== a.length &&
              (e.params.uniqueNavElements &&
                "string" == typeof t.el &&
                a.length > 1 &&
                (a = e.$el.find(t.el)),
              "bullets" === t.type &&
                t.clickable &&
                a.addClass(t.clickableClass),
              a.addClass(t.modifierClass + t.type),
              "bullets" === t.type &&
                t.dynamicBullets &&
                (a.addClass(`${t.modifierClass}${t.type}-dynamic`),
                (e.pagination.dynamicBulletIndex = 0),
                t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
              "progressbar" === t.type &&
                t.progressbarOpposite &&
                a.addClass(t.progressbarOppositeClass),
              t.clickable &&
                a.on("click", `.${t.bulletClass}`, function (t) {
                  t.preventDefault();
                  let a = d(this).index() * e.params.slidesPerGroup;
                  e.params.loop && (a += e.loopedSlides), e.slideTo(a);
                }),
              u.extend(e.pagination, { $el: a, el: a[0] }));
          },
          destroy() {
            const e = this,
              t = e.params.pagination;
            if (
              !t.el ||
              !e.pagination.el ||
              !e.pagination.$el ||
              0 === e.pagination.$el.length
            )
              return;
            const a = e.pagination.$el;
            a.removeClass(t.hiddenClass),
              a.removeClass(t.modifierClass + t.type),
              e.pagination.bullets &&
                e.pagination.bullets.removeClass(t.bulletActiveClass),
              t.clickable && a.off("click", `.${t.bulletClass}`);
          },
        };
        const U = {
          setTranslate() {
            const e = this;
            if (!e.params.scrollbar.el || !e.scrollbar.el) return;
            const { scrollbar: t, rtlTranslate: a, progress: s } = e,
              { dragSize: i, trackSize: n, $dragEl: r, $el: o } = t,
              l = e.params.scrollbar;
            let d = i,
              c = (n - i) * s;
            a
              ? ((c = -c),
                c > 0 ? ((d = i - c), (c = 0)) : -c + i > n && (d = n + c))
              : c < 0
              ? ((d = i + c), (c = 0))
              : c + i > n && (d = n - c),
              e.isHorizontal()
                ? (r.transform(`translate3d(${c}px, 0, 0)`),
                  (r[0].style.width = `${d}px`))
                : (r.transform(`translate3d(0px, ${c}px, 0)`),
                  (r[0].style.height = `${d}px`)),
              l.hide &&
                (clearTimeout(e.scrollbar.timeout),
                (o[0].style.opacity = 1),
                (e.scrollbar.timeout = setTimeout(() => {
                  (o[0].style.opacity = 0), o.transition(400);
                }, 1e3)));
          },
          setTransition(e) {
            const t = this;
            t.params.scrollbar.el &&
              t.scrollbar.el &&
              t.scrollbar.$dragEl.transition(e);
          },
          updateSize() {
            const e = this;
            if (!e.params.scrollbar.el || !e.scrollbar.el) return;
            const { scrollbar: t } = e,
              { $dragEl: a, $el: s } = t;
            (a[0].style.width = ""), (a[0].style.height = "");
            const i = e.isHorizontal() ? s[0].offsetWidth : s[0].offsetHeight,
              n = e.size / e.virtualSize,
              r = n * (i / e.size);
            let o;
            (o =
              "auto" === e.params.scrollbar.dragSize
                ? i * n
                : parseInt(e.params.scrollbar.dragSize, 10)),
              e.isHorizontal()
                ? (a[0].style.width = `${o}px`)
                : (a[0].style.height = `${o}px`),
              (s[0].style.display = n >= 1 ? "none" : ""),
              e.params.scrollbar.hide && (s[0].style.opacity = 0),
              u.extend(t, {
                trackSize: i,
                divider: n,
                moveDivider: r,
                dragSize: o,
              }),
              t.$el[
                e.params.watchOverflow && e.isLocked
                  ? "addClass"
                  : "removeClass"
              ](e.params.scrollbar.lockClass);
          },
          getPointerPosition(e) {
            return this.isHorizontal()
              ? "touchstart" === e.type || "touchmove" === e.type
                ? e.targetTouches[0].clientX
                : e.clientX
              : "touchstart" === e.type || "touchmove" === e.type
              ? e.targetTouches[0].clientY
              : e.clientY;
          },
          setDragPosition(e) {
            const t = this,
              { scrollbar: a, rtlTranslate: s } = t,
              { $el: i, dragSize: n, trackSize: r, dragStartPos: o } = a;
            let l;
            (l =
              (a.getPointerPosition(e) -
                i.offset()[t.isHorizontal() ? "left" : "top"] -
                (null !== o ? o : n / 2)) /
              (r - n)),
              (l = Math.max(Math.min(l, 1), 0)),
              s && (l = 1 - l);
            const d =
              t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * l;
            t.updateProgress(d),
              t.setTranslate(d),
              t.updateActiveIndex(),
              t.updateSlidesClasses();
          },
          onDragStart(e) {
            const t = this,
              a = t.params.scrollbar,
              { scrollbar: s, $wrapperEl: i } = t,
              { $el: n, $dragEl: r } = s;
            (t.scrollbar.isTouched = !0),
              (t.scrollbar.dragStartPos =
                e.target === r[0] || e.target === r
                  ? s.getPointerPosition(e) -
                    e.target.getBoundingClientRect()[
                      t.isHorizontal() ? "left" : "top"
                    ]
                  : null),
              e.preventDefault(),
              e.stopPropagation(),
              i.transition(100),
              r.transition(100),
              s.setDragPosition(e),
              clearTimeout(t.scrollbar.dragTimeout),
              n.transition(0),
              a.hide && n.css("opacity", 1),
              t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"),
              t.emit("scrollbarDragStart", e);
          },
          onDragMove(e) {
            const t = this,
              { scrollbar: a, $wrapperEl: s } = t,
              { $el: i, $dragEl: n } = a;
            t.scrollbar.isTouched &&
              (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
              a.setDragPosition(e),
              s.transition(0),
              i.transition(0),
              n.transition(0),
              t.emit("scrollbarDragMove", e));
          },
          onDragEnd(e) {
            const t = this,
              a = t.params.scrollbar,
              { scrollbar: s, $wrapperEl: i } = t,
              { $el: n } = s;
            t.scrollbar.isTouched &&
              ((t.scrollbar.isTouched = !1),
              t.params.cssMode &&
                (t.$wrapperEl.css("scroll-snap-type", ""), i.transition("")),
              a.hide &&
                (clearTimeout(t.scrollbar.dragTimeout),
                (t.scrollbar.dragTimeout = u.nextTick(() => {
                  n.css("opacity", 0), n.transition(400);
                }, 1e3))),
              t.emit("scrollbarDragEnd", e),
              a.snapOnRelease && t.slideToClosest());
          },
          enableDraggable() {
            const e = this;
            if (!e.params.scrollbar.el) return;
            const {
                scrollbar: t,
                touchEventsTouch: a,
                touchEventsDesktop: s,
                params: i,
              } = e,
              r = t.$el[0],
              o = !(!h.passiveListener || !i.passiveListeners) && {
                passive: !1,
                capture: !1,
              },
              l = !(!h.passiveListener || !i.passiveListeners) && {
                passive: !0,
                capture: !1,
              };
            h.touch
              ? (r.addEventListener(a.start, e.scrollbar.onDragStart, o),
                r.addEventListener(a.move, e.scrollbar.onDragMove, o),
                r.addEventListener(a.end, e.scrollbar.onDragEnd, l))
              : (r.addEventListener(s.start, e.scrollbar.onDragStart, o),
                n.addEventListener(s.move, e.scrollbar.onDragMove, o),
                n.addEventListener(s.end, e.scrollbar.onDragEnd, l));
          },
          disableDraggable() {
            const e = this;
            if (!e.params.scrollbar.el) return;
            const {
                scrollbar: t,
                touchEventsTouch: a,
                touchEventsDesktop: s,
                params: i,
              } = e,
              r = t.$el[0],
              o = !(!h.passiveListener || !i.passiveListeners) && {
                passive: !1,
                capture: !1,
              },
              l = !(!h.passiveListener || !i.passiveListeners) && {
                passive: !0,
                capture: !1,
              };
            h.touch
              ? (r.removeEventListener(a.start, e.scrollbar.onDragStart, o),
                r.removeEventListener(a.move, e.scrollbar.onDragMove, o),
                r.removeEventListener(a.end, e.scrollbar.onDragEnd, l))
              : (r.removeEventListener(s.start, e.scrollbar.onDragStart, o),
                n.removeEventListener(s.move, e.scrollbar.onDragMove, o),
                n.removeEventListener(s.end, e.scrollbar.onDragEnd, l));
          },
          init() {
            const e = this;
            if (!e.params.scrollbar.el) return;
            const { scrollbar: t, $el: a } = e,
              s = e.params.scrollbar;
            let i = d(s.el);
            e.params.uniqueNavElements &&
              "string" == typeof s.el &&
              i.length > 1 &&
              1 === a.find(s.el).length &&
              (i = a.find(s.el));
            let n = i.find(`.${e.params.scrollbar.dragClass}`);
            0 === n.length &&
              ((n = d(`<div class="${e.params.scrollbar.dragClass}"></div>`)),
              i.append(n)),
              u.extend(t, { $el: i, el: i[0], $dragEl: n, dragEl: n[0] }),
              s.draggable && t.enableDraggable();
          },
          destroy() {
            this.scrollbar.disableDraggable();
          },
        };
        const K = {
          setTransform(e, t) {
            const { rtl: a } = this,
              s = d(e),
              i = a ? -1 : 1,
              n = s.attr("data-swiper-parallax") || "0";
            let r = s.attr("data-swiper-parallax-x"),
              o = s.attr("data-swiper-parallax-y");
            const l = s.attr("data-swiper-parallax-scale"),
              c = s.attr("data-swiper-parallax-opacity");
            if (
              (r || o
                ? ((r = r || "0"), (o = o || "0"))
                : this.isHorizontal()
                ? ((r = n), (o = "0"))
                : ((o = n), (r = "0")),
              (r =
                r.indexOf("%") >= 0
                  ? parseInt(r, 10) * t * i + "%"
                  : r * t * i + "px"),
              (o =
                o.indexOf("%") >= 0 ? parseInt(o, 10) * t + "%" : o * t + "px"),
              null != c)
            ) {
              const e = c - (c - 1) * (1 - Math.abs(t));
              s[0].style.opacity = e;
            }
            if (null == l) s.transform(`translate3d(${r}, ${o}, 0px)`);
            else {
              const e = l - (l - 1) * (1 - Math.abs(t));
              s.transform(`translate3d(${r}, ${o}, 0px) scale(${e})`);
            }
          },
          setTranslate() {
            const e = this,
              { $el: t, slides: a, progress: s, snapGrid: i } = e;
            t
              .children(
                "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
              )
              .each((t, a) => {
                e.parallax.setTransform(a, s);
              }),
              a.each((t, a) => {
                let n = a.progress;
                e.params.slidesPerGroup > 1 &&
                  "auto" !== e.params.slidesPerView &&
                  (n += Math.ceil(t / 2) - s * (i.length - 1)),
                  (n = Math.min(Math.max(n, -1), 1)),
                  d(a)
                    .find(
                      "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                    )
                    .each((t, a) => {
                      e.parallax.setTransform(a, n);
                    });
              });
          },
          setTransition(e = this.params.speed) {
            const { $el: t } = this;
            t.find(
              "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
            ).each((t, a) => {
              const s = d(a);
              let i =
                parseInt(s.attr("data-swiper-parallax-duration"), 10) || e;
              0 === e && (i = 0), s.transition(i);
            });
          },
        };
        const J = {
          getDistanceBetweenTouches(e) {
            if (e.targetTouches.length < 2) return 1;
            const t = e.targetTouches[0].pageX,
              a = e.targetTouches[0].pageY,
              s = e.targetTouches[1].pageX,
              i = e.targetTouches[1].pageY;
            return Math.sqrt((s - t) ** 2 + (i - a) ** 2);
          },
          onGestureStart(e) {
            const t = this,
              a = t.params.zoom,
              s = t.zoom,
              { gesture: i } = s;
            if (
              ((s.fakeGestureTouched = !1),
              (s.fakeGestureMoved = !1),
              !h.gestures)
            ) {
              if (
                "touchstart" !== e.type ||
                ("touchstart" === e.type && e.targetTouches.length < 2)
              )
                return;
              (s.fakeGestureTouched = !0),
                (i.scaleStart = J.getDistanceBetweenTouches(e));
            }
            (i.$slideEl && i.$slideEl.length) ||
            ((i.$slideEl = d(e.target).closest(`.${t.params.slideClass}`)),
            0 === i.$slideEl.length &&
              (i.$slideEl = t.slides.eq(t.activeIndex)),
            (i.$imageEl = i.$slideEl.find(
              "img, svg, canvas, picture, .swiper-zoom-target"
            )),
            (i.$imageWrapEl = i.$imageEl.parent(`.${a.containerClass}`)),
            (i.maxRatio =
              i.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio),
            0 !== i.$imageWrapEl.length)
              ? (i.$imageEl && i.$imageEl.transition(0),
                (t.zoom.isScaling = !0))
              : (i.$imageEl = void 0);
          },
          onGestureChange(e) {
            const t = this.params.zoom,
              a = this.zoom,
              { gesture: s } = a;
            if (!h.gestures) {
              if (
                "touchmove" !== e.type ||
                ("touchmove" === e.type && e.targetTouches.length < 2)
              )
                return;
              (a.fakeGestureMoved = !0),
                (s.scaleMove = J.getDistanceBetweenTouches(e));
            }
            s.$imageEl &&
              0 !== s.$imageEl.length &&
              (h.gestures
                ? (a.scale = e.scale * a.currentScale)
                : (a.scale = (s.scaleMove / s.scaleStart) * a.currentScale),
              a.scale > s.maxRatio &&
                (a.scale = s.maxRatio - 1 + (a.scale - s.maxRatio + 1) ** 0.5),
              a.scale < t.minRatio &&
                (a.scale = t.minRatio + 1 - (t.minRatio - a.scale + 1) ** 0.5),
              s.$imageEl.transform(`translate3d(0,0,0) scale(${a.scale})`));
          },
          onGestureEnd(e) {
            const t = this,
              a = t.params.zoom,
              s = t.zoom,
              { gesture: i } = s;
            if (!h.gestures) {
              if (!s.fakeGestureTouched || !s.fakeGestureMoved) return;
              if (
                "touchend" !== e.type ||
                ("touchend" === e.type &&
                  e.changedTouches.length < 2 &&
                  !S.android)
              )
                return;
              (s.fakeGestureTouched = !1), (s.fakeGestureMoved = !1);
            }
            i.$imageEl &&
              0 !== i.$imageEl.length &&
              ((s.scale = Math.max(Math.min(s.scale, i.maxRatio), a.minRatio)),
              i.$imageEl
                .transition(t.params.speed)
                .transform(`translate3d(0,0,0) scale(${s.scale})`),
              (s.currentScale = s.scale),
              (s.isScaling = !1),
              1 === s.scale && (i.$slideEl = void 0));
          },
          onTouchStart(e) {
            const t = this.zoom,
              { gesture: a, image: s } = t;
            a.$imageEl &&
              0 !== a.$imageEl.length &&
              (s.isTouched ||
                (S.android && e.cancelable && e.preventDefault(),
                (s.isTouched = !0),
                (s.touchesStart.x =
                  "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX),
                (s.touchesStart.y =
                  "touchstart" === e.type
                    ? e.targetTouches[0].pageY
                    : e.pageY)));
          },
          onTouchMove(e) {
            const t = this,
              a = t.zoom,
              { gesture: s, image: i, velocity: n } = a;
            if (!s.$imageEl || 0 === s.$imageEl.length) return;
            if (((t.allowClick = !1), !i.isTouched || !s.$slideEl)) return;
            i.isMoved ||
              ((i.width = s.$imageEl[0].offsetWidth),
              (i.height = s.$imageEl[0].offsetHeight),
              (i.startX = u.getTranslate(s.$imageWrapEl[0], "x") || 0),
              (i.startY = u.getTranslate(s.$imageWrapEl[0], "y") || 0),
              (s.slideWidth = s.$slideEl[0].offsetWidth),
              (s.slideHeight = s.$slideEl[0].offsetHeight),
              s.$imageWrapEl.transition(0),
              t.rtl && ((i.startX = -i.startX), (i.startY = -i.startY)));
            const r = i.width * a.scale,
              o = i.height * a.scale;
            if (!(r < s.slideWidth && o < s.slideHeight)) {
              if (
                ((i.minX = Math.min(s.slideWidth / 2 - r / 2, 0)),
                (i.maxX = -i.minX),
                (i.minY = Math.min(s.slideHeight / 2 - o / 2, 0)),
                (i.maxY = -i.minY),
                (i.touchesCurrent.x =
                  "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX),
                (i.touchesCurrent.y =
                  "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY),
                !i.isMoved && !a.isScaling)
              ) {
                if (
                  t.isHorizontal() &&
                  ((Math.floor(i.minX) === Math.floor(i.startX) &&
                    i.touchesCurrent.x < i.touchesStart.x) ||
                    (Math.floor(i.maxX) === Math.floor(i.startX) &&
                      i.touchesCurrent.x > i.touchesStart.x))
                )
                  return void (i.isTouched = !1);
                if (
                  !t.isHorizontal() &&
                  ((Math.floor(i.minY) === Math.floor(i.startY) &&
                    i.touchesCurrent.y < i.touchesStart.y) ||
                    (Math.floor(i.maxY) === Math.floor(i.startY) &&
                      i.touchesCurrent.y > i.touchesStart.y))
                )
                  return void (i.isTouched = !1);
              }
              e.cancelable && e.preventDefault(),
                e.stopPropagation(),
                (i.isMoved = !0),
                (i.currentX = i.touchesCurrent.x - i.touchesStart.x + i.startX),
                (i.currentY = i.touchesCurrent.y - i.touchesStart.y + i.startY),
                i.currentX < i.minX &&
                  (i.currentX = i.minX + 1 - (i.minX - i.currentX + 1) ** 0.8),
                i.currentX > i.maxX &&
                  (i.currentX = i.maxX - 1 + (i.currentX - i.maxX + 1) ** 0.8),
                i.currentY < i.minY &&
                  (i.currentY = i.minY + 1 - (i.minY - i.currentY + 1) ** 0.8),
                i.currentY > i.maxY &&
                  (i.currentY = i.maxY - 1 + (i.currentY - i.maxY + 1) ** 0.8),
                n.prevPositionX || (n.prevPositionX = i.touchesCurrent.x),
                n.prevPositionY || (n.prevPositionY = i.touchesCurrent.y),
                n.prevTime || (n.prevTime = Date.now()),
                (n.x =
                  (i.touchesCurrent.x - n.prevPositionX) /
                  (Date.now() - n.prevTime) /
                  2),
                (n.y =
                  (i.touchesCurrent.y - n.prevPositionY) /
                  (Date.now() - n.prevTime) /
                  2),
                Math.abs(i.touchesCurrent.x - n.prevPositionX) < 2 && (n.x = 0),
                Math.abs(i.touchesCurrent.y - n.prevPositionY) < 2 && (n.y = 0),
                (n.prevPositionX = i.touchesCurrent.x),
                (n.prevPositionY = i.touchesCurrent.y),
                (n.prevTime = Date.now()),
                s.$imageWrapEl.transform(
                  `translate3d(${i.currentX}px, ${i.currentY}px,0)`
                );
            }
          },
          onTouchEnd() {
            const e = this.zoom,
              { gesture: t, image: a, velocity: s } = e;
            if (!t.$imageEl || 0 === t.$imageEl.length) return;
            if (!a.isTouched || !a.isMoved)
              return (a.isTouched = !1), void (a.isMoved = !1);
            (a.isTouched = !1), (a.isMoved = !1);
            let i = 300,
              n = 300;
            const r = s.x * i,
              o = a.currentX + r,
              l = s.y * n,
              d = a.currentY + l;
            0 !== s.x && (i = Math.abs((o - a.currentX) / s.x)),
              0 !== s.y && (n = Math.abs((d - a.currentY) / s.y));
            const c = Math.max(i, n);
            (a.currentX = o), (a.currentY = d);
            const p = a.width * e.scale,
              u = a.height * e.scale;
            (a.minX = Math.min(t.slideWidth / 2 - p / 2, 0)),
              (a.maxX = -a.minX),
              (a.minY = Math.min(t.slideHeight / 2 - u / 2, 0)),
              (a.maxY = -a.minY),
              (a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX)),
              (a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY)),
              t.$imageWrapEl
                .transition(c)
                .transform(`translate3d(${a.currentX}px, ${a.currentY}px,0)`);
          },
          onTransitionEnd() {
            const e = this,
              t = e.zoom,
              { gesture: a } = t;
            a.$slideEl &&
              e.previousIndex !== e.activeIndex &&
              (a.$imageEl &&
                a.$imageEl.transform("translate3d(0,0,0) scale(1)"),
              a.$imageWrapEl && a.$imageWrapEl.transform("translate3d(0,0,0)"),
              (t.scale = 1),
              (t.currentScale = 1),
              (a.$slideEl = void 0),
              (a.$imageEl = void 0),
              (a.$imageWrapEl = void 0));
          },
          toggle(e) {
            const t = this.zoom;
            t.scale && 1 !== t.scale ? t.out() : t.in(e);
          },
          in(e) {
            const t = this,
              a = t.zoom,
              s = t.params.zoom,
              { gesture: i, image: n } = a;
            if (
              (i.$slideEl ||
                (t.params.virtual && t.params.virtual.enabled && t.virtual
                  ? (i.$slideEl = t.$wrapperEl.children(
                      `.${t.params.slideActiveClass}`
                    ))
                  : (i.$slideEl = t.slides.eq(t.activeIndex)),
                (i.$imageEl = i.$slideEl.find(
                  "img, svg, canvas, picture, .swiper-zoom-target"
                )),
                (i.$imageWrapEl = i.$imageEl.parent(`.${s.containerClass}`))),
              !i.$imageEl || 0 === i.$imageEl.length)
            )
              return;
            let r, o, l, d, c, p, u, h, m, f, g, v, w, b, y, x, S, E;
            i.$slideEl.addClass(`${s.zoomedSlideClass}`),
              void 0 === n.touchesStart.x && e
                ? ((r =
                    "touchend" === e.type
                      ? e.changedTouches[0].pageX
                      : e.pageX),
                  (o =
                    "touchend" === e.type
                      ? e.changedTouches[0].pageY
                      : e.pageY))
                : ((r = n.touchesStart.x), (o = n.touchesStart.y)),
              (a.scale = i.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio),
              (a.currentScale =
                i.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio),
              e
                ? ((S = i.$slideEl[0].offsetWidth),
                  (E = i.$slideEl[0].offsetHeight),
                  (l = i.$slideEl.offset().left),
                  (d = i.$slideEl.offset().top),
                  (c = l + S / 2 - r),
                  (p = d + E / 2 - o),
                  (m = i.$imageEl[0].offsetWidth),
                  (f = i.$imageEl[0].offsetHeight),
                  (g = m * a.scale),
                  (v = f * a.scale),
                  (w = Math.min(S / 2 - g / 2, 0)),
                  (b = Math.min(E / 2 - v / 2, 0)),
                  (y = -w),
                  (x = -b),
                  (u = c * a.scale),
                  (h = p * a.scale),
                  u < w && (u = w),
                  u > y && (u = y),
                  h < b && (h = b),
                  h > x && (h = x))
                : ((u = 0), (h = 0)),
              i.$imageWrapEl
                .transition(300)
                .transform(`translate3d(${u}px, ${h}px,0)`),
              i.$imageEl
                .transition(300)
                .transform(`translate3d(0,0,0) scale(${a.scale})`);
          },
          out() {
            const e = this,
              t = e.zoom,
              a = e.params.zoom,
              { gesture: s } = t;
            s.$slideEl ||
              (e.params.virtual && e.params.virtual.enabled && e.virtual
                ? (s.$slideEl = e.$wrapperEl.children(
                    `.${e.params.slideActiveClass}`
                  ))
                : (s.$slideEl = e.slides.eq(e.activeIndex)),
              (s.$imageEl = s.$slideEl.find(
                "img, svg, canvas, picture, .swiper-zoom-target"
              )),
              (s.$imageWrapEl = s.$imageEl.parent(`.${a.containerClass}`))),
              s.$imageEl &&
                0 !== s.$imageEl.length &&
                ((t.scale = 1),
                (t.currentScale = 1),
                s.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
                s.$imageEl
                  .transition(300)
                  .transform("translate3d(0,0,0) scale(1)"),
                s.$slideEl.removeClass(`${a.zoomedSlideClass}`),
                (s.$slideEl = void 0));
          },
          enable() {
            const e = this,
              t = e.zoom;
            if (t.enabled) return;
            t.enabled = !0;
            const a = !(
                "touchstart" !== e.touchEvents.start ||
                !h.passiveListener ||
                !e.params.passiveListeners
              ) && { passive: !0, capture: !1 },
              s = !h.passiveListener || { passive: !1, capture: !0 },
              i = `.${e.params.slideClass}`;
            h.gestures
              ? (e.$wrapperEl.on("gesturestart", i, t.onGestureStart, a),
                e.$wrapperEl.on("gesturechange", i, t.onGestureChange, a),
                e.$wrapperEl.on("gestureend", i, t.onGestureEnd, a))
              : "touchstart" === e.touchEvents.start &&
                (e.$wrapperEl.on(e.touchEvents.start, i, t.onGestureStart, a),
                e.$wrapperEl.on(e.touchEvents.move, i, t.onGestureChange, s),
                e.$wrapperEl.on(e.touchEvents.end, i, t.onGestureEnd, a),
                e.touchEvents.cancel &&
                  e.$wrapperEl.on(e.touchEvents.cancel, i, t.onGestureEnd, a)),
              e.$wrapperEl.on(
                e.touchEvents.move,
                `.${e.params.zoom.containerClass}`,
                t.onTouchMove,
                s
              );
          },
          disable() {
            const e = this,
              t = e.zoom;
            if (!t.enabled) return;
            e.zoom.enabled = !1;
            const a = !(
                "touchstart" !== e.touchEvents.start ||
                !h.passiveListener ||
                !e.params.passiveListeners
              ) && { passive: !0, capture: !1 },
              s = !h.passiveListener || { passive: !1, capture: !0 },
              i = `.${e.params.slideClass}`;
            h.gestures
              ? (e.$wrapperEl.off("gesturestart", i, t.onGestureStart, a),
                e.$wrapperEl.off("gesturechange", i, t.onGestureChange, a),
                e.$wrapperEl.off("gestureend", i, t.onGestureEnd, a))
              : "touchstart" === e.touchEvents.start &&
                (e.$wrapperEl.off(e.touchEvents.start, i, t.onGestureStart, a),
                e.$wrapperEl.off(e.touchEvents.move, i, t.onGestureChange, s),
                e.$wrapperEl.off(e.touchEvents.end, i, t.onGestureEnd, a),
                e.touchEvents.cancel &&
                  e.$wrapperEl.off(e.touchEvents.cancel, i, t.onGestureEnd, a)),
              e.$wrapperEl.off(
                e.touchEvents.move,
                `.${e.params.zoom.containerClass}`,
                t.onTouchMove,
                s
              );
          },
        };
        const Z = {
          loadInSlide(e, t = !0) {
            const a = this,
              s = a.params.lazy;
            if (void 0 === e) return;
            if (0 === a.slides.length) return;
            const i =
              a.virtual && a.params.virtual.enabled
                ? a.$wrapperEl.children(
                    `.${a.params.slideClass}[data-swiper-slide-index="${e}"]`
                  )
                : a.slides.eq(e);
            let n = i.find(
              `.${s.elementClass}:not(.${s.loadedClass}):not(.${s.loadingClass})`
            );
            !i.hasClass(s.elementClass) ||
              i.hasClass(s.loadedClass) ||
              i.hasClass(s.loadingClass) ||
              (n = n.add(i[0])),
              0 !== n.length &&
                n.each((e, n) => {
                  const r = d(n);
                  r.addClass(s.loadingClass);
                  const o = r.attr("data-background"),
                    l = r.attr("data-src"),
                    c = r.attr("data-srcset"),
                    p = r.attr("data-sizes"),
                    u = r.parent("picture");
                  a.loadImage(r[0], l || o, c, p, !1, () => {
                    if (null != a && a && (!a || a.params) && !a.destroyed) {
                      if (
                        (o
                          ? (r.css("background-image", `url("${o}")`),
                            r.removeAttr("data-background"))
                          : (c &&
                              (r.attr("srcset", c),
                              r.removeAttr("data-srcset")),
                            p &&
                              (r.attr("sizes", p), r.removeAttr("data-sizes")),
                            u.length &&
                              u.children("source").each((e, t) => {
                                const a = d(t);
                                a.attr("data-srcset") &&
                                  (a.attr("srcset", a.attr("data-srcset")),
                                  a.removeAttr("data-srcset"));
                              }),
                            l && (r.attr("src", l), r.removeAttr("data-src"))),
                        r.addClass(s.loadedClass).removeClass(s.loadingClass),
                        i.find(`.${s.preloaderClass}`).remove(),
                        a.params.loop && t)
                      ) {
                        const e = i.attr("data-swiper-slide-index");
                        if (i.hasClass(a.params.slideDuplicateClass)) {
                          const t = a.$wrapperEl.children(
                            `[data-swiper-slide-index="${e}"]:not(.${a.params.slideDuplicateClass})`
                          );
                          a.lazy.loadInSlide(t.index(), !1);
                        } else {
                          const t = a.$wrapperEl.children(
                            `.${a.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`
                          );
                          a.lazy.loadInSlide(t.index(), !1);
                        }
                      }
                      a.emit("lazyImageReady", i[0], r[0]),
                        a.params.autoHeight && a.updateAutoHeight();
                    }
                  }),
                    a.emit("lazyImageLoad", i[0], r[0]);
                });
          },
          load() {
            const e = this,
              { $wrapperEl: t, params: a, slides: s, activeIndex: i } = e,
              n = e.virtual && a.virtual.enabled,
              r = a.lazy;
            let o = a.slidesPerView;
            function l(e) {
              if (n) {
                if (
                  t.children(`.${a.slideClass}[data-swiper-slide-index="${e}"]`)
                    .length
                )
                  return !0;
              } else if (s[e]) return !0;
              return !1;
            }
            function c(e) {
              return n ? d(e).attr("data-swiper-slide-index") : d(e).index();
            }
            if (
              ("auto" === o && (o = 0),
              e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0),
              e.params.watchSlidesVisibility)
            )
              t.children(`.${a.slideVisibleClass}`).each((t, a) => {
                const s = n
                  ? d(a).attr("data-swiper-slide-index")
                  : d(a).index();
                e.lazy.loadInSlide(s);
              });
            else if (o > 1)
              for (let t = i; t < i + o; t += 1) l(t) && e.lazy.loadInSlide(t);
            else e.lazy.loadInSlide(i);
            if (r.loadPrevNext)
              if (o > 1 || (r.loadPrevNextAmount && r.loadPrevNextAmount > 1)) {
                const t = r.loadPrevNextAmount,
                  a = o,
                  n = Math.min(i + a + Math.max(t, a), s.length),
                  d = Math.max(i - Math.max(a, t), 0);
                for (let t = i + o; t < n; t += 1)
                  l(t) && e.lazy.loadInSlide(t);
                for (let t = d; t < i; t += 1) l(t) && e.lazy.loadInSlide(t);
              } else {
                const s = t.children(`.${a.slideNextClass}`);
                s.length > 0 && e.lazy.loadInSlide(c(s));
                const i = t.children(`.${a.slidePrevClass}`);
                i.length > 0 && e.lazy.loadInSlide(c(i));
              }
          },
        };
        const Q = {
          LinearSpline: function (e, t) {
            const a = (function () {
              let e, t, a;
              return (s, i) => {
                for (t = -1, e = s.length; e - t > 1; )
                  (a = (e + t) >> 1), s[a] <= i ? (t = a) : (e = a);
                return e;
              };
            })();
            let s, i;
            return (
              (this.x = e),
              (this.y = t),
              (this.lastIndex = e.length - 1),
              (this.interpolate = function (e) {
                return e
                  ? ((i = a(this.x, e)),
                    (s = i - 1),
                    ((e - this.x[s]) * (this.y[i] - this.y[s])) /
                      (this.x[i] - this.x[s]) +
                      this.y[s])
                  : 0;
              }),
              this
            );
          },
          getInterpolateFunction(e) {
            const t = this;
            t.controller.spline ||
              (t.controller.spline = t.params.loop
                ? new Q.LinearSpline(t.slidesGrid, e.slidesGrid)
                : new Q.LinearSpline(t.snapGrid, e.snapGrid));
          },
          setTranslate(e, t) {
            const a = this,
              s = a.controller.control;
            let i, n;
            function r(e) {
              const t = a.rtlTranslate ? -a.translate : a.translate;
              "slide" === a.params.controller.by &&
                (a.controller.getInterpolateFunction(e),
                (n = -a.controller.spline.interpolate(-t))),
                (n && "container" !== a.params.controller.by) ||
                  ((i =
                    (e.maxTranslate() - e.minTranslate()) /
                    (a.maxTranslate() - a.minTranslate())),
                  (n = (t - a.minTranslate()) * i + e.minTranslate())),
                a.params.controller.inverse && (n = e.maxTranslate() - n),
                e.updateProgress(n),
                e.setTranslate(n, a),
                e.updateActiveIndex(),
                e.updateSlidesClasses();
            }
            if (Array.isArray(s))
              for (let e = 0; e < s.length; e += 1)
                s[e] !== t && s[e] instanceof O && r(s[e]);
            else s instanceof O && t !== s && r(s);
          },
          setTransition(e, t) {
            const a = this,
              s = a.controller.control;
            let i;
            function n(t) {
              t.setTransition(e, a),
                0 !== e &&
                  (t.transitionStart(),
                  t.params.autoHeight &&
                    u.nextTick(() => {
                      t.updateAutoHeight();
                    }),
                  t.$wrapperEl.transitionEnd(() => {
                    s &&
                      (t.params.loop &&
                        "slide" === a.params.controller.by &&
                        t.loopFix(),
                      t.transitionEnd());
                  }));
            }
            if (Array.isArray(s))
              for (i = 0; i < s.length; i += 1)
                s[i] !== t && s[i] instanceof O && n(s[i]);
            else s instanceof O && t !== s && n(s);
          },
        };
        var ee = {
          name: "controller",
          params: { controller: { control: void 0, inverse: !1, by: "slide" } },
          create() {
            const e = this;
            u.extend(e, {
              controller: {
                control: e.params.controller.control,
                getInterpolateFunction: Q.getInterpolateFunction.bind(e),
                setTranslate: Q.setTranslate.bind(e),
                setTransition: Q.setTransition.bind(e),
              },
            });
          },
          on: {
            update() {
              const e = this;
              e.controller.control &&
                e.controller.spline &&
                ((e.controller.spline = void 0), delete e.controller.spline);
            },
            resize() {
              const e = this;
              e.controller.control &&
                e.controller.spline &&
                ((e.controller.spline = void 0), delete e.controller.spline);
            },
            observerUpdate() {
              const e = this;
              e.controller.control &&
                e.controller.spline &&
                ((e.controller.spline = void 0), delete e.controller.spline);
            },
            setTranslate(e, t) {
              this.controller.control && this.controller.setTranslate(e, t);
            },
            setTransition(e, t) {
              this.controller.control && this.controller.setTransition(e, t);
            },
          },
        };
        const te = {
          makeElFocusable: (e) => (e.attr("tabIndex", "0"), e),
          makeElNotFocusable: (e) => (e.attr("tabIndex", "-1"), e),
          addElRole: (e, t) => (e.attr("role", t), e),
          addElLabel: (e, t) => (e.attr("aria-label", t), e),
          disableEl: (e) => (e.attr("aria-disabled", !0), e),
          enableEl: (e) => (e.attr("aria-disabled", !1), e),
          onEnterKey(e) {
            const t = this,
              a = t.params.a11y;
            if (13 !== e.keyCode) return;
            const s = d(e.target);
            t.navigation &&
              t.navigation.$nextEl &&
              s.is(t.navigation.$nextEl) &&
              ((t.isEnd && !t.params.loop) || t.slideNext(),
              t.isEnd
                ? t.a11y.notify(a.lastSlideMessage)
                : t.a11y.notify(a.nextSlideMessage)),
              t.navigation &&
                t.navigation.$prevEl &&
                s.is(t.navigation.$prevEl) &&
                ((t.isBeginning && !t.params.loop) || t.slidePrev(),
                t.isBeginning
                  ? t.a11y.notify(a.firstSlideMessage)
                  : t.a11y.notify(a.prevSlideMessage)),
              t.pagination &&
                s.is(`.${t.params.pagination.bulletClass}`) &&
                s[0].click();
          },
          notify(e) {
            const t = this.a11y.liveRegion;
            0 !== t.length && (t.html(""), t.html(e));
          },
          updateNavigation() {
            const e = this;
            if (e.params.loop || !e.navigation) return;
            const { $nextEl: t, $prevEl: a } = e.navigation;
            a &&
              a.length > 0 &&
              (e.isBeginning
                ? (e.a11y.disableEl(a), e.a11y.makeElNotFocusable(a))
                : (e.a11y.enableEl(a), e.a11y.makeElFocusable(a))),
              t &&
                t.length > 0 &&
                (e.isEnd
                  ? (e.a11y.disableEl(t), e.a11y.makeElNotFocusable(t))
                  : (e.a11y.enableEl(t), e.a11y.makeElFocusable(t)));
          },
          updatePagination() {
            const e = this,
              t = e.params.a11y;
            e.pagination &&
              e.params.pagination.clickable &&
              e.pagination.bullets &&
              e.pagination.bullets.length &&
              e.pagination.bullets.each((a, s) => {
                const i = d(s);
                e.a11y.makeElFocusable(i),
                  e.a11y.addElRole(i, "button"),
                  e.a11y.addElLabel(
                    i,
                    t.paginationBulletMessage.replace(
                      /\{\{index\}\}/,
                      i.index() + 1
                    )
                  );
              });
          },
          init() {
            const e = this;
            e.$el.append(e.a11y.liveRegion);
            const t = e.params.a11y;
            let a, s;
            e.navigation && e.navigation.$nextEl && (a = e.navigation.$nextEl),
              e.navigation &&
                e.navigation.$prevEl &&
                (s = e.navigation.$prevEl),
              a &&
                (e.a11y.makeElFocusable(a),
                e.a11y.addElRole(a, "button"),
                e.a11y.addElLabel(a, t.nextSlideMessage),
                a.on("keydown", e.a11y.onEnterKey)),
              s &&
                (e.a11y.makeElFocusable(s),
                e.a11y.addElRole(s, "button"),
                e.a11y.addElLabel(s, t.prevSlideMessage),
                s.on("keydown", e.a11y.onEnterKey)),
              e.pagination &&
                e.params.pagination.clickable &&
                e.pagination.bullets &&
                e.pagination.bullets.length &&
                e.pagination.$el.on(
                  "keydown",
                  `.${e.params.pagination.bulletClass}`,
                  e.a11y.onEnterKey
                );
          },
          destroy() {
            const e = this;
            let t, a;
            e.a11y.liveRegion &&
              e.a11y.liveRegion.length > 0 &&
              e.a11y.liveRegion.remove(),
              e.navigation &&
                e.navigation.$nextEl &&
                (t = e.navigation.$nextEl),
              e.navigation &&
                e.navigation.$prevEl &&
                (a = e.navigation.$prevEl),
              t && t.off("keydown", e.a11y.onEnterKey),
              a && a.off("keydown", e.a11y.onEnterKey),
              e.pagination &&
                e.params.pagination.clickable &&
                e.pagination.bullets &&
                e.pagination.bullets.length &&
                e.pagination.$el.off(
                  "keydown",
                  `.${e.params.pagination.bulletClass}`,
                  e.a11y.onEnterKey
                );
          },
        };
        const ae = {
          init() {
            const e = this;
            if (!e.params.history) return;
            if (!o.history || !o.history.pushState)
              return (
                (e.params.history.enabled = !1),
                void (e.params.hashNavigation.enabled = !0)
              );
            const t = e.history;
            (t.initialized = !0),
              (t.paths = ae.getPathValues()),
              (t.paths.key || t.paths.value) &&
                (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit),
                e.params.history.replaceState ||
                  o.addEventListener("popstate", e.history.setHistoryPopState));
          },
          destroy() {
            const e = this;
            e.params.history.replaceState ||
              o.removeEventListener("popstate", e.history.setHistoryPopState);
          },
          setHistoryPopState() {
            const e = this;
            (e.history.paths = ae.getPathValues()),
              e.history.scrollToSlide(
                e.params.speed,
                e.history.paths.value,
                !1
              );
          },
          getPathValues() {
            const e = o.location.pathname
                .slice(1)
                .split("/")
                .filter((e) => "" !== e),
              t = e.length;
            return { key: e[t - 2], value: e[t - 1] };
          },
          setHistory(e, t) {
            const a = this;
            if (!a.history.initialized || !a.params.history.enabled) return;
            const s = a.slides.eq(t);
            let i = ae.slugify(s.attr("data-history"));
            o.location.pathname.includes(e) || (i = `${e}/${i}`);
            const n = o.history.state;
            (n && n.value === i) ||
              (a.params.history.replaceState
                ? o.history.replaceState({ value: i }, null, i)
                : o.history.pushState({ value: i }, null, i));
          },
          slugify: (e) =>
            e
              .toString()
              .replace(/\s+/g, "-")
              .replace(/[^\w-]+/g, "")
              .replace(/--+/g, "-")
              .replace(/^-+/, "")
              .replace(/-+$/, ""),
          scrollToSlide(e, t, a) {
            const s = this;
            if (t)
              for (let i = 0, n = s.slides.length; i < n; i += 1) {
                const n = s.slides.eq(i);
                if (
                  ae.slugify(n.attr("data-history")) === t &&
                  !n.hasClass(s.params.slideDuplicateClass)
                ) {
                  const t = n.index();
                  s.slideTo(t, e, a);
                }
              }
            else s.slideTo(0, e, a);
          },
        };
        const se = {
          onHashCange() {
            const e = this;
            e.emit("hashChange");
            const t = n.location.hash.replace("#", "");
            if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
              const a = e.$wrapperEl
                .children(`.${e.params.slideClass}[data-hash="${t}"]`)
                .index();
              if (void 0 === a) return;
              e.slideTo(a);
            }
          },
          setHash() {
            const e = this;
            if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
              if (
                e.params.hashNavigation.replaceState &&
                o.history &&
                o.history.replaceState
              )
                o.history.replaceState(
                  null,
                  null,
                  `#${e.slides.eq(e.activeIndex).attr("data-hash")}` || ""
                ),
                  e.emit("hashSet");
              else {
                const t = e.slides.eq(e.activeIndex),
                  a = t.attr("data-hash") || t.attr("data-history");
                (n.location.hash = a || ""), e.emit("hashSet");
              }
          },
          init() {
            const e = this;
            if (
              !e.params.hashNavigation.enabled ||
              (e.params.history && e.params.history.enabled)
            )
              return;
            e.hashNavigation.initialized = !0;
            const t = n.location.hash.replace("#", "");
            if (t) {
              const a = 0;
              for (let s = 0, i = e.slides.length; s < i; s += 1) {
                const i = e.slides.eq(s);
                if (
                  (i.attr("data-hash") || i.attr("data-history")) === t &&
                  !i.hasClass(e.params.slideDuplicateClass)
                ) {
                  const t = i.index();
                  e.slideTo(t, a, e.params.runCallbacksOnInit, !0);
                }
              }
            }
            e.params.hashNavigation.watchState &&
              d(o).on("hashchange", e.hashNavigation.onHashCange);
          },
          destroy() {
            const e = this;
            e.params.hashNavigation.watchState &&
              d(o).off("hashchange", e.hashNavigation.onHashCange);
          },
        };
        const ie = {
          run() {
            const e = this,
              t = e.slides.eq(e.activeIndex);
            let a = e.params.autoplay.delay;
            t.attr("data-swiper-autoplay") &&
              (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
              clearTimeout(e.autoplay.timeout),
              (e.autoplay.timeout = u.nextTick(() => {
                e.params.autoplay.reverseDirection
                  ? e.params.loop
                    ? (e.loopFix(),
                      e.slidePrev(e.params.speed, !0, !0),
                      e.emit("autoplay"))
                    : e.isBeginning
                    ? e.params.autoplay.stopOnLastSlide
                      ? e.autoplay.stop()
                      : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0),
                        e.emit("autoplay"))
                    : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay"))
                  : e.params.loop
                  ? (e.loopFix(),
                    e.slideNext(e.params.speed, !0, !0),
                    e.emit("autoplay"))
                  : e.isEnd
                  ? e.params.autoplay.stopOnLastSlide
                    ? e.autoplay.stop()
                    : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay"))
                  : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")),
                  e.params.cssMode && e.autoplay.running && e.autoplay.run();
              }, a));
          },
          start() {
            const e = this;
            return (
              void 0 === e.autoplay.timeout &&
              !e.autoplay.running &&
              ((e.autoplay.running = !0),
              e.emit("autoplayStart"),
              e.autoplay.run(),
              !0)
            );
          },
          stop() {
            const e = this;
            return (
              !!e.autoplay.running &&
              void 0 !== e.autoplay.timeout &&
              (e.autoplay.timeout &&
                (clearTimeout(e.autoplay.timeout),
                (e.autoplay.timeout = void 0)),
              (e.autoplay.running = !1),
              e.emit("autoplayStop"),
              !0)
            );
          },
          pause(e) {
            const t = this;
            t.autoplay.running &&
              (t.autoplay.paused ||
                (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
                (t.autoplay.paused = !0),
                0 !== e && t.params.autoplay.waitForTransition
                  ? (t.$wrapperEl[0].addEventListener(
                      "transitionend",
                      t.autoplay.onTransitionEnd
                    ),
                    t.$wrapperEl[0].addEventListener(
                      "webkitTransitionEnd",
                      t.autoplay.onTransitionEnd
                    ))
                  : ((t.autoplay.paused = !1), t.autoplay.run())));
          },
        };
        const ne = {
          setTranslate() {
            const e = this,
              { slides: t } = e;
            for (let a = 0; a < t.length; a += 1) {
              const t = e.slides.eq(a);
              let s = -t[0].swiperSlideOffset;
              e.params.virtualTranslate || (s -= e.translate);
              let i = 0;
              e.isHorizontal() || ((i = s), (s = 0));
              const n = e.params.fadeEffect.crossFade
                ? Math.max(1 - Math.abs(t[0].progress), 0)
                : 1 + Math.min(Math.max(t[0].progress, -1), 0);
              t.css({ opacity: n }).transform(
                `translate3d(${s}px, ${i}px, 0px)`
              );
            }
          },
          setTransition(e) {
            const t = this,
              { slides: a, $wrapperEl: s } = t;
            if ((a.transition(e), t.params.virtualTranslate && 0 !== e)) {
              let e = !1;
              a.transitionEnd(() => {
                if (e) return;
                if (!t || t.destroyed) return;
                (e = !0), (t.animating = !1);
                const a = ["webkitTransitionEnd", "transitionend"];
                for (let e = 0; e < a.length; e += 1) s.trigger(a[e]);
              });
            }
          },
        };
        const re = {
          setTranslate() {
            const e = this,
              {
                $el: t,
                $wrapperEl: a,
                slides: s,
                width: i,
                height: n,
                rtlTranslate: r,
                size: o,
              } = e,
              l = e.params.cubeEffect,
              c = e.isHorizontal(),
              p = e.virtual && e.params.virtual.enabled;
            let u,
              h = 0;
            l.shadow &&
              (c
                ? ((u = a.find(".swiper-cube-shadow")),
                  0 === u.length &&
                    ((u = d('<div class="swiper-cube-shadow"></div>')),
                    a.append(u)),
                  u.css({ height: `${i}px` }))
                : ((u = t.find(".swiper-cube-shadow")),
                  0 === u.length &&
                    ((u = d('<div class="swiper-cube-shadow"></div>')),
                    t.append(u))));
            for (let e = 0; e < s.length; e += 1) {
              const t = s.eq(e);
              let a = e;
              p && (a = parseInt(t.attr("data-swiper-slide-index"), 10));
              let i = 90 * a,
                n = Math.floor(i / 360);
              r && ((i = -i), (n = Math.floor(-i / 360)));
              const u = Math.max(Math.min(t[0].progress, 1), -1);
              let m = 0,
                f = 0,
                g = 0;
              a % 4 == 0
                ? ((m = 4 * -n * o), (g = 0))
                : (a - 1) % 4 == 0
                ? ((m = 0), (g = 4 * -n * o))
                : (a - 2) % 4 == 0
                ? ((m = o + 4 * n * o), (g = o))
                : (a - 3) % 4 == 0 && ((m = -o), (g = 3 * o + 4 * o * n)),
                r && (m = -m),
                c || ((f = m), (m = 0));
              const v = `rotateX(${c ? 0 : -i}deg) rotateY(${
                c ? i : 0
              }deg) translate3d(${m}px, ${f}px, ${g}px)`;
              if (
                (u <= 1 &&
                  u > -1 &&
                  ((h = 90 * a + 90 * u), r && (h = 90 * -a - 90 * u)),
                t.transform(v),
                l.slideShadows)
              ) {
                let e = c
                    ? t.find(".swiper-slide-shadow-left")
                    : t.find(".swiper-slide-shadow-top"),
                  a = c
                    ? t.find(".swiper-slide-shadow-right")
                    : t.find(".swiper-slide-shadow-bottom");
                0 === e.length &&
                  ((e = d(
                    `<div class="swiper-slide-shadow-${
                      c ? "left" : "top"
                    }"></div>`
                  )),
                  t.append(e)),
                  0 === a.length &&
                    ((a = d(
                      `<div class="swiper-slide-shadow-${
                        c ? "right" : "bottom"
                      }"></div>`
                    )),
                    t.append(a)),
                  e.length && (e[0].style.opacity = Math.max(-u, 0)),
                  a.length && (a[0].style.opacity = Math.max(u, 0));
              }
            }
            if (
              (a.css({
                "-webkit-transform-origin": `50% 50% -${o / 2}px`,
                "-moz-transform-origin": `50% 50% -${o / 2}px`,
                "-ms-transform-origin": `50% 50% -${o / 2}px`,
                "transform-origin": `50% 50% -${o / 2}px`,
              }),
              l.shadow)
            )
              if (c)
                u.transform(
                  `translate3d(0px, ${i / 2 + l.shadowOffset}px, ${
                    -i / 2
                  }px) rotateX(90deg) rotateZ(0deg) scale(${l.shadowScale})`
                );
              else {
                const e = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
                  t =
                    1.5 -
                    (Math.sin((2 * e * Math.PI) / 360) / 2 +
                      Math.cos((2 * e * Math.PI) / 360) / 2),
                  a = l.shadowScale,
                  s = l.shadowScale / t,
                  i = l.shadowOffset;
                u.transform(
                  `scale3d(${a}, 1, ${s}) translate3d(0px, ${n / 2 + i}px, ${
                    -n / 2 / s
                  }px) rotateX(-90deg)`
                );
              }
            const m = N.isSafari || N.isWebView ? -o / 2 : 0;
            a.transform(
              `translate3d(0px,0,${m}px) rotateX(${
                e.isHorizontal() ? 0 : h
              }deg) rotateY(${e.isHorizontal() ? -h : 0}deg)`
            );
          },
          setTransition(e) {
            const t = this,
              { $el: a, slides: s } = t;
            s
              .transition(e)
              .find(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              )
              .transition(e),
              t.params.cubeEffect.shadow &&
                !t.isHorizontal() &&
                a.find(".swiper-cube-shadow").transition(e);
          },
        };
        const oe = {
          setTranslate() {
            const e = this,
              { slides: t, rtlTranslate: a } = e;
            for (let s = 0; s < t.length; s += 1) {
              const i = t.eq(s);
              let n = i[0].progress;
              e.params.flipEffect.limitRotation &&
                (n = Math.max(Math.min(i[0].progress, 1), -1));
              let r = -180 * n,
                o = 0,
                l = -i[0].swiperSlideOffset,
                c = 0;
              if (
                (e.isHorizontal()
                  ? a && (r = -r)
                  : ((c = l), (l = 0), (o = -r), (r = 0)),
                (i[0].style.zIndex = -Math.abs(Math.round(n)) + t.length),
                e.params.flipEffect.slideShadows)
              ) {
                let t = e.isHorizontal()
                    ? i.find(".swiper-slide-shadow-left")
                    : i.find(".swiper-slide-shadow-top"),
                  a = e.isHorizontal()
                    ? i.find(".swiper-slide-shadow-right")
                    : i.find(".swiper-slide-shadow-bottom");
                0 === t.length &&
                  ((t = d(
                    `<div class="swiper-slide-shadow-${
                      e.isHorizontal() ? "left" : "top"
                    }"></div>`
                  )),
                  i.append(t)),
                  0 === a.length &&
                    ((a = d(
                      `<div class="swiper-slide-shadow-${
                        e.isHorizontal() ? "right" : "bottom"
                      }"></div>`
                    )),
                    i.append(a)),
                  t.length && (t[0].style.opacity = Math.max(-n, 0)),
                  a.length && (a[0].style.opacity = Math.max(n, 0));
              }
              i.transform(
                `translate3d(${l}px, ${c}px, 0px) rotateX(${o}deg) rotateY(${r}deg)`
              );
            }
          },
          setTransition(e) {
            const t = this,
              { slides: a, activeIndex: s, $wrapperEl: i } = t;
            if (
              (a
                .transition(e)
                .find(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .transition(e),
              t.params.virtualTranslate && 0 !== e)
            ) {
              let e = !1;
              a.eq(s).transitionEnd(function () {
                if (e) return;
                if (!t || t.destroyed) return;
                (e = !0), (t.animating = !1);
                const a = ["webkitTransitionEnd", "transitionend"];
                for (let e = 0; e < a.length; e += 1) i.trigger(a[e]);
              });
            }
          },
        };
        const le = {
          setTranslate() {
            const e = this,
              {
                width: t,
                height: a,
                slides: s,
                $wrapperEl: i,
                slidesSizesGrid: n,
              } = e,
              r = e.params.coverflowEffect,
              o = e.isHorizontal(),
              l = e.translate,
              c = o ? t / 2 - l : a / 2 - l,
              p = o ? r.rotate : -r.rotate,
              u = r.depth;
            for (let e = 0, t = s.length; e < t; e += 1) {
              const t = s.eq(e),
                a = n[e],
                i = ((c - t[0].swiperSlideOffset - a / 2) / a) * r.modifier;
              let l = o ? p * i : 0,
                h = o ? 0 : p * i,
                m = -u * Math.abs(i),
                f = r.stretch;
              "string" == typeof f &&
                -1 !== f.indexOf("%") &&
                (f = (parseFloat(r.stretch) / 100) * a);
              let g = o ? 0 : f * i,
                v = o ? f * i : 0,
                w = 1 - (1 - r.scale) * Math.abs(i);
              Math.abs(v) < 0.001 && (v = 0),
                Math.abs(g) < 0.001 && (g = 0),
                Math.abs(m) < 0.001 && (m = 0),
                Math.abs(l) < 0.001 && (l = 0),
                Math.abs(h) < 0.001 && (h = 0),
                Math.abs(w) < 0.001 && (w = 0);
              const b = `translate3d(${v}px,${g}px,${m}px)  rotateX(${h}deg) rotateY(${l}deg) scale(${w})`;
              if (
                (t.transform(b),
                (t[0].style.zIndex = 1 - Math.abs(Math.round(i))),
                r.slideShadows)
              ) {
                let e = o
                    ? t.find(".swiper-slide-shadow-left")
                    : t.find(".swiper-slide-shadow-top"),
                  a = o
                    ? t.find(".swiper-slide-shadow-right")
                    : t.find(".swiper-slide-shadow-bottom");
                0 === e.length &&
                  ((e = d(
                    `<div class="swiper-slide-shadow-${
                      o ? "left" : "top"
                    }"></div>`
                  )),
                  t.append(e)),
                  0 === a.length &&
                    ((a = d(
                      `<div class="swiper-slide-shadow-${
                        o ? "right" : "bottom"
                      }"></div>`
                    )),
                    t.append(a)),
                  e.length && (e[0].style.opacity = i > 0 ? i : 0),
                  a.length && (a[0].style.opacity = -i > 0 ? -i : 0);
              }
            }
            if (h.pointerEvents || h.prefixedPointerEvents) {
              i[0].style.perspectiveOrigin = `${c}px 50%`;
            }
          },
          setTransition(e) {
            this.slides
              .transition(e)
              .find(
                ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
              )
              .transition(e);
          },
        };
        const de = {
          init() {
            const e = this,
              { thumbs: t } = e.params,
              a = e.constructor;
            t.swiper instanceof a
              ? ((e.thumbs.swiper = t.swiper),
                u.extend(e.thumbs.swiper.originalParams, {
                  watchSlidesProgress: !0,
                  slideToClickedSlide: !1,
                }),
                u.extend(e.thumbs.swiper.params, {
                  watchSlidesProgress: !0,
                  slideToClickedSlide: !1,
                }))
              : u.isObject(t.swiper) &&
                ((e.thumbs.swiper = new a(
                  u.extend({}, t.swiper, {
                    watchSlidesVisibility: !0,
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1,
                  })
                )),
                (e.thumbs.swiperCreated = !0)),
              e.thumbs.swiper.$el.addClass(
                e.params.thumbs.thumbsContainerClass
              ),
              e.thumbs.swiper.on("tap", e.thumbs.onThumbClick);
          },
          onThumbClick() {
            const e = this,
              t = e.thumbs.swiper;
            if (!t) return;
            const a = t.clickedIndex,
              s = t.clickedSlide;
            if (s && d(s).hasClass(e.params.thumbs.slideThumbActiveClass))
              return;
            if (null == a) return;
            let i;
            if (
              ((i = t.params.loop
                ? parseInt(
                    d(t.clickedSlide).attr("data-swiper-slide-index"),
                    10
                  )
                : a),
              e.params.loop)
            ) {
              let t = e.activeIndex;
              e.slides.eq(t).hasClass(e.params.slideDuplicateClass) &&
                (e.loopFix(),
                (e._clientLeft = e.$wrapperEl[0].clientLeft),
                (t = e.activeIndex));
              const a = e.slides
                  .eq(t)
                  .prevAll(`[data-swiper-slide-index="${i}"]`)
                  .eq(0)
                  .index(),
                s = e.slides
                  .eq(t)
                  .nextAll(`[data-swiper-slide-index="${i}"]`)
                  .eq(0)
                  .index();
              i = void 0 === a ? s : void 0 === s ? a : s - t < t - a ? s : a;
            }
            e.slideTo(i);
          },
          update(e) {
            const t = this,
              a = t.thumbs.swiper;
            if (!a) return;
            const s =
                "auto" === a.params.slidesPerView
                  ? a.slidesPerViewDynamic()
                  : a.params.slidesPerView,
              i = t.params.thumbs.autoScrollOffset,
              n = i && !a.params.loop;
            if (t.realIndex !== a.realIndex || n) {
              let r,
                o,
                l = a.activeIndex;
              if (a.params.loop) {
                a.slides.eq(l).hasClass(a.params.slideDuplicateClass) &&
                  (a.loopFix(),
                  (a._clientLeft = a.$wrapperEl[0].clientLeft),
                  (l = a.activeIndex));
                const e = a.slides
                    .eq(l)
                    .prevAll(`[data-swiper-slide-index="${t.realIndex}"]`)
                    .eq(0)
                    .index(),
                  s = a.slides
                    .eq(l)
                    .nextAll(`[data-swiper-slide-index="${t.realIndex}"]`)
                    .eq(0)
                    .index();
                (r =
                  void 0 === e
                    ? s
                    : void 0 === s
                    ? e
                    : s - l == l - e
                    ? l
                    : s - l < l - e
                    ? s
                    : e),
                  (o = t.activeIndex > t.previousIndex ? "next" : "prev");
              } else
                (r = t.realIndex), (o = r > t.previousIndex ? "next" : "prev");
              n && (r += "next" === o ? i : -1 * i),
                a.visibleSlidesIndexes &&
                  a.visibleSlidesIndexes.indexOf(r) < 0 &&
                  (a.params.centeredSlides
                    ? (r =
                        r > l
                          ? r - Math.floor(s / 2) + 1
                          : r + Math.floor(s / 2) - 1)
                    : r > l && (r = r - s + 1),
                  a.slideTo(r, e ? 0 : void 0));
            }
            let r = 1;
            const o = t.params.thumbs.slideThumbActiveClass;
            if (
              (t.params.slidesPerView > 1 &&
                !t.params.centeredSlides &&
                (r = t.params.slidesPerView),
              t.params.thumbs.multipleActiveThumbs || (r = 1),
              (r = Math.floor(r)),
              a.slides.removeClass(o),
              a.params.loop || (a.params.virtual && a.params.virtual.enabled))
            )
              for (let e = 0; e < r; e += 1)
                a.$wrapperEl
                  .children(`[data-swiper-slide-index="${t.realIndex + e}"]`)
                  .addClass(o);
            else
              for (let e = 0; e < r; e += 1)
                a.slides.eq(t.realIndex + e).addClass(o);
          },
        };
        const ce = [
          D,
          A,
          G,
          B,
          V,
          F,
          q,
          {
            name: "mousewheel",
            params: {
              mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarged: "container",
              },
            },
            create() {
              const e = this;
              u.extend(e, {
                mousewheel: {
                  enabled: !1,
                  enable: X.enable.bind(e),
                  disable: X.disable.bind(e),
                  handle: X.handle.bind(e),
                  handleMouseEnter: X.handleMouseEnter.bind(e),
                  handleMouseLeave: X.handleMouseLeave.bind(e),
                  animateSlider: X.animateSlider.bind(e),
                  releaseScroll: X.releaseScroll.bind(e),
                  lastScrollTime: u.now(),
                  lastEventBeforeSnap: void 0,
                  recentWheelEvents: [],
                },
              });
            },
            on: {
              init() {
                const e = this;
                !e.params.mousewheel.enabled &&
                  e.params.cssMode &&
                  e.mousewheel.disable(),
                  e.params.mousewheel.enabled && e.mousewheel.enable();
              },
              destroy() {
                const e = this;
                e.params.cssMode && e.mousewheel.enable(),
                  e.mousewheel.enabled && e.mousewheel.disable();
              },
            },
          },
          {
            name: "navigation",
            params: {
              navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock",
              },
            },
            create() {
              const e = this;
              u.extend(e, {
                navigation: {
                  init: W.init.bind(e),
                  update: W.update.bind(e),
                  destroy: W.destroy.bind(e),
                  onNextClick: W.onNextClick.bind(e),
                  onPrevClick: W.onPrevClick.bind(e),
                },
              });
            },
            on: {
              init() {
                this.navigation.init(), this.navigation.update();
              },
              toEdge() {
                this.navigation.update();
              },
              fromEdge() {
                this.navigation.update();
              },
              destroy() {
                this.navigation.destroy();
              },
              click(e) {
                const t = this,
                  { $nextEl: a, $prevEl: s } = t.navigation;
                if (
                  t.params.navigation.hideOnClick &&
                  !d(e.target).is(s) &&
                  !d(e.target).is(a)
                ) {
                  let e;
                  a
                    ? (e = a.hasClass(t.params.navigation.hiddenClass))
                    : s && (e = s.hasClass(t.params.navigation.hiddenClass)),
                    !0 === e
                      ? t.emit("navigationShow", t)
                      : t.emit("navigationHide", t),
                    a && a.toggleClass(t.params.navigation.hiddenClass),
                    s && s.toggleClass(t.params.navigation.hiddenClass);
                }
              },
            },
          },
          {
            name: "pagination",
            params: {
              pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: (e) => e,
                formatFractionTotal: (e) => e,
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                modifierClass: "swiper-pagination-",
                currentClass: "swiper-pagination-current",
                totalClass: "swiper-pagination-total",
                hiddenClass: "swiper-pagination-hidden",
                progressbarFillClass: "swiper-pagination-progressbar-fill",
                progressbarOppositeClass:
                  "swiper-pagination-progressbar-opposite",
                clickableClass: "swiper-pagination-clickable",
                lockClass: "swiper-pagination-lock",
              },
            },
            create() {
              const e = this;
              u.extend(e, {
                pagination: {
                  init: j.init.bind(e),
                  render: j.render.bind(e),
                  update: j.update.bind(e),
                  destroy: j.destroy.bind(e),
                  dynamicBulletIndex: 0,
                },
              });
            },
            on: {
              init() {
                const e = this;
                e.pagination.init(),
                  e.pagination.render(),
                  e.pagination.update();
              },
              activeIndexChange() {
                const e = this;
                (e.params.loop || void 0 === e.snapIndex) &&
                  e.pagination.update();
              },
              snapIndexChange() {
                const e = this;
                e.params.loop || e.pagination.update();
              },
              slidesLengthChange() {
                const e = this;
                e.params.loop && (e.pagination.render(), e.pagination.update());
              },
              snapGridLengthChange() {
                const e = this;
                e.params.loop || (e.pagination.render(), e.pagination.update());
              },
              destroy() {
                this.pagination.destroy();
              },
              click(e) {
                const t = this;
                if (
                  t.params.pagination.el &&
                  t.params.pagination.hideOnClick &&
                  t.pagination.$el.length > 0 &&
                  !d(e.target).hasClass(t.params.pagination.bulletClass)
                ) {
                  !0 ===
                  t.pagination.$el.hasClass(t.params.pagination.hiddenClass)
                    ? t.emit("paginationShow", t)
                    : t.emit("paginationHide", t),
                    t.pagination.$el.toggleClass(
                      t.params.pagination.hiddenClass
                    );
                }
              },
            },
          },
          {
            name: "scrollbar",
            params: {
              scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag",
              },
            },
            create() {
              const e = this;
              u.extend(e, {
                scrollbar: {
                  init: U.init.bind(e),
                  destroy: U.destroy.bind(e),
                  updateSize: U.updateSize.bind(e),
                  setTranslate: U.setTranslate.bind(e),
                  setTransition: U.setTransition.bind(e),
                  enableDraggable: U.enableDraggable.bind(e),
                  disableDraggable: U.disableDraggable.bind(e),
                  setDragPosition: U.setDragPosition.bind(e),
                  getPointerPosition: U.getPointerPosition.bind(e),
                  onDragStart: U.onDragStart.bind(e),
                  onDragMove: U.onDragMove.bind(e),
                  onDragEnd: U.onDragEnd.bind(e),
                  isTouched: !1,
                  timeout: null,
                  dragTimeout: null,
                },
              });
            },
            on: {
              init() {
                const e = this;
                e.scrollbar.init(),
                  e.scrollbar.updateSize(),
                  e.scrollbar.setTranslate();
              },
              update() {
                this.scrollbar.updateSize();
              },
              resize() {
                this.scrollbar.updateSize();
              },
              observerUpdate() {
                this.scrollbar.updateSize();
              },
              setTranslate() {
                this.scrollbar.setTranslate();
              },
              setTransition(e) {
                this.scrollbar.setTransition(e);
              },
              destroy() {
                this.scrollbar.destroy();
              },
            },
          },
          {
            name: "parallax",
            params: { parallax: { enabled: !1 } },
            create() {
              const e = this;
              u.extend(e, {
                parallax: {
                  setTransform: K.setTransform.bind(e),
                  setTranslate: K.setTranslate.bind(e),
                  setTransition: K.setTransition.bind(e),
                },
              });
            },
            on: {
              beforeInit() {
                const e = this;
                e.params.parallax.enabled &&
                  ((e.params.watchSlidesProgress = !0),
                  (e.originalParams.watchSlidesProgress = !0));
              },
              init() {
                this.params.parallax.enabled && this.parallax.setTranslate();
              },
              setTranslate() {
                this.params.parallax.enabled && this.parallax.setTranslate();
              },
              setTransition(e) {
                this.params.parallax.enabled && this.parallax.setTransition(e);
              },
            },
          },
          {
            name: "zoom",
            params: {
              zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed",
              },
            },
            create() {
              const e = this,
                t = {
                  enabled: !1,
                  scale: 1,
                  currentScale: 1,
                  isScaling: !1,
                  gesture: {
                    $slideEl: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    $imageEl: void 0,
                    $imageWrapEl: void 0,
                    maxRatio: 3,
                  },
                  image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {},
                  },
                  velocity: {
                    x: void 0,
                    y: void 0,
                    prevPositionX: void 0,
                    prevPositionY: void 0,
                    prevTime: void 0,
                  },
                };
              "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out"
                .split(" ")
                .forEach((a) => {
                  t[a] = J[a].bind(e);
                }),
                u.extend(e, { zoom: t });
              let a = 1;
              Object.defineProperty(e.zoom, "scale", {
                get: () => a,
                set(t) {
                  if (a !== t) {
                    const a = e.zoom.gesture.$imageEl
                        ? e.zoom.gesture.$imageEl[0]
                        : void 0,
                      s = e.zoom.gesture.$slideEl
                        ? e.zoom.gesture.$slideEl[0]
                        : void 0;
                    e.emit("zoomChange", t, a, s);
                  }
                  a = t;
                },
              });
            },
            on: {
              init() {
                const e = this;
                e.params.zoom.enabled && e.zoom.enable();
              },
              destroy() {
                this.zoom.disable();
              },
              touchStart(e) {
                this.zoom.enabled && this.zoom.onTouchStart(e);
              },
              touchEnd(e) {
                this.zoom.enabled && this.zoom.onTouchEnd(e);
              },
              doubleTap(e) {
                const t = this;
                t.params.zoom.enabled &&
                  t.zoom.enabled &&
                  t.params.zoom.toggle &&
                  t.zoom.toggle(e);
              },
              transitionEnd() {
                const e = this;
                e.zoom.enabled &&
                  e.params.zoom.enabled &&
                  e.zoom.onTransitionEnd();
              },
              slideChange() {
                const e = this;
                e.zoom.enabled &&
                  e.params.zoom.enabled &&
                  e.params.cssMode &&
                  e.zoom.onTransitionEnd();
              },
            },
          },
          {
            name: "lazy",
            params: {
              lazy: {
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader",
              },
            },
            create() {
              const e = this;
              u.extend(e, {
                lazy: {
                  initialImageLoaded: !1,
                  load: Z.load.bind(e),
                  loadInSlide: Z.loadInSlide.bind(e),
                },
              });
            },
            on: {
              beforeInit() {
                const e = this;
                e.params.lazy.enabled &&
                  e.params.preloadImages &&
                  (e.params.preloadImages = !1);
              },
              init() {
                const e = this;
                e.params.lazy.enabled &&
                  !e.params.loop &&
                  0 === e.params.initialSlide &&
                  e.lazy.load();
              },
              scroll() {
                const e = this;
                e.params.freeMode && !e.params.freeModeSticky && e.lazy.load();
              },
              resize() {
                const e = this;
                e.params.lazy.enabled && e.lazy.load();
              },
              scrollbarDragMove() {
                const e = this;
                e.params.lazy.enabled && e.lazy.load();
              },
              transitionStart() {
                const e = this;
                e.params.lazy.enabled &&
                  (e.params.lazy.loadOnTransitionStart ||
                    (!e.params.lazy.loadOnTransitionStart &&
                      !e.lazy.initialImageLoaded)) &&
                  e.lazy.load();
              },
              transitionEnd() {
                const e = this;
                e.params.lazy.enabled &&
                  !e.params.lazy.loadOnTransitionStart &&
                  e.lazy.load();
              },
              slideChange() {
                const e = this;
                e.params.lazy.enabled && e.params.cssMode && e.lazy.load();
              },
            },
          },
          ee,
          {
            name: "a11y",
            params: {
              a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
              },
            },
            create() {
              const e = this;
              u.extend(e, {
                a11y: {
                  liveRegion: d(
                    `<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`
                  ),
                },
              }),
                Object.keys(te).forEach((t) => {
                  e.a11y[t] = te[t].bind(e);
                });
            },
            on: {
              init() {
                const e = this;
                e.params.a11y.enabled &&
                  (e.a11y.init(), e.a11y.updateNavigation());
              },
              toEdge() {
                this.params.a11y.enabled && this.a11y.updateNavigation();
              },
              fromEdge() {
                this.params.a11y.enabled && this.a11y.updateNavigation();
              },
              paginationUpdate() {
                this.params.a11y.enabled && this.a11y.updatePagination();
              },
              destroy() {
                this.params.a11y.enabled && this.a11y.destroy();
              },
            },
          },
          {
            name: "history",
            params: {
              history: { enabled: !1, replaceState: !1, key: "slides" },
            },
            create() {
              const e = this;
              u.extend(e, {
                history: {
                  init: ae.init.bind(e),
                  setHistory: ae.setHistory.bind(e),
                  setHistoryPopState: ae.setHistoryPopState.bind(e),
                  scrollToSlide: ae.scrollToSlide.bind(e),
                  destroy: ae.destroy.bind(e),
                },
              });
            },
            on: {
              init() {
                const e = this;
                e.params.history.enabled && e.history.init();
              },
              destroy() {
                const e = this;
                e.params.history.enabled && e.history.destroy();
              },
              transitionEnd() {
                const e = this;
                e.history.initialized &&
                  e.history.setHistory(e.params.history.key, e.activeIndex);
              },
              slideChange() {
                const e = this;
                e.history.initialized &&
                  e.params.cssMode &&
                  e.history.setHistory(e.params.history.key, e.activeIndex);
              },
            },
          },
          {
            name: "hash-navigation",
            params: {
              hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 },
            },
            create() {
              const e = this;
              u.extend(e, {
                hashNavigation: {
                  initialized: !1,
                  init: se.init.bind(e),
                  destroy: se.destroy.bind(e),
                  setHash: se.setHash.bind(e),
                  onHashCange: se.onHashCange.bind(e),
                },
              });
            },
            on: {
              init() {
                const e = this;
                e.params.hashNavigation.enabled && e.hashNavigation.init();
              },
              destroy() {
                const e = this;
                e.params.hashNavigation.enabled && e.hashNavigation.destroy();
              },
              transitionEnd() {
                const e = this;
                e.hashNavigation.initialized && e.hashNavigation.setHash();
              },
              slideChange() {
                const e = this;
                e.hashNavigation.initialized &&
                  e.params.cssMode &&
                  e.hashNavigation.setHash();
              },
            },
          },
          {
            name: "autoplay",
            params: {
              autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1,
              },
            },
            create() {
              const e = this;
              u.extend(e, {
                autoplay: {
                  running: !1,
                  paused: !1,
                  run: ie.run.bind(e),
                  start: ie.start.bind(e),
                  stop: ie.stop.bind(e),
                  pause: ie.pause.bind(e),
                  onVisibilityChange() {
                    "hidden" === document.visibilityState &&
                      e.autoplay.running &&
                      e.autoplay.pause(),
                      "visible" === document.visibilityState &&
                        e.autoplay.paused &&
                        (e.autoplay.run(), (e.autoplay.paused = !1));
                  },
                  onTransitionEnd(t) {
                    e &&
                      !e.destroyed &&
                      e.$wrapperEl &&
                      t.target === this &&
                      (e.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        e.autoplay.onTransitionEnd
                      ),
                      e.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        e.autoplay.onTransitionEnd
                      ),
                      (e.autoplay.paused = !1),
                      e.autoplay.running
                        ? e.autoplay.run()
                        : e.autoplay.stop());
                  },
                },
              });
            },
            on: {
              init() {
                const e = this;
                e.params.autoplay.enabled &&
                  (e.autoplay.start(),
                  document.addEventListener(
                    "visibilitychange",
                    e.autoplay.onVisibilityChange
                  ));
              },
              beforeTransitionStart(e, t) {
                const a = this;
                a.autoplay.running &&
                  (t || !a.params.autoplay.disableOnInteraction
                    ? a.autoplay.pause(e)
                    : a.autoplay.stop());
              },
              sliderFirstMove() {
                const e = this;
                e.autoplay.running &&
                  (e.params.autoplay.disableOnInteraction
                    ? e.autoplay.stop()
                    : e.autoplay.pause());
              },
              touchEnd() {
                const e = this;
                e.params.cssMode &&
                  e.autoplay.paused &&
                  !e.params.autoplay.disableOnInteraction &&
                  e.autoplay.run();
              },
              destroy() {
                const e = this;
                e.autoplay.running && e.autoplay.stop(),
                  document.removeEventListener(
                    "visibilitychange",
                    e.autoplay.onVisibilityChange
                  );
              },
            },
          },
          {
            name: "effect-fade",
            params: { fadeEffect: { crossFade: !1 } },
            create() {
              const e = this;
              u.extend(e, {
                fadeEffect: {
                  setTranslate: ne.setTranslate.bind(e),
                  setTransition: ne.setTransition.bind(e),
                },
              });
            },
            on: {
              beforeInit() {
                const e = this;
                if ("fade" !== e.params.effect) return;
                e.classNames.push(`${e.params.containerModifierClass}fade`);
                const t = {
                  slidesPerView: 1,
                  slidesPerColumn: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: !0,
                  spaceBetween: 0,
                  virtualTranslate: !0,
                };
                u.extend(e.params, t), u.extend(e.originalParams, t);
              },
              setTranslate() {
                "fade" === this.params.effect && this.fadeEffect.setTranslate();
              },
              setTransition(e) {
                "fade" === this.params.effect &&
                  this.fadeEffect.setTransition(e);
              },
            },
          },
          {
            name: "effect-cube",
            params: {
              cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: 0.94,
              },
            },
            create() {
              const e = this;
              u.extend(e, {
                cubeEffect: {
                  setTranslate: re.setTranslate.bind(e),
                  setTransition: re.setTransition.bind(e),
                },
              });
            },
            on: {
              beforeInit() {
                const e = this;
                if ("cube" !== e.params.effect) return;
                e.classNames.push(`${e.params.containerModifierClass}cube`),
                  e.classNames.push(`${e.params.containerModifierClass}3d`);
                const t = {
                  slidesPerView: 1,
                  slidesPerColumn: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: !0,
                  resistanceRatio: 0,
                  spaceBetween: 0,
                  centeredSlides: !1,
                  virtualTranslate: !0,
                };
                u.extend(e.params, t), u.extend(e.originalParams, t);
              },
              setTranslate() {
                "cube" === this.params.effect && this.cubeEffect.setTranslate();
              },
              setTransition(e) {
                "cube" === this.params.effect &&
                  this.cubeEffect.setTransition(e);
              },
            },
          },
          {
            name: "effect-flip",
            params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
            create() {
              const e = this;
              u.extend(e, {
                flipEffect: {
                  setTranslate: oe.setTranslate.bind(e),
                  setTransition: oe.setTransition.bind(e),
                },
              });
            },
            on: {
              beforeInit() {
                const e = this;
                if ("flip" !== e.params.effect) return;
                e.classNames.push(`${e.params.containerModifierClass}flip`),
                  e.classNames.push(`${e.params.containerModifierClass}3d`);
                const t = {
                  slidesPerView: 1,
                  slidesPerColumn: 1,
                  slidesPerGroup: 1,
                  watchSlidesProgress: !0,
                  spaceBetween: 0,
                  virtualTranslate: !0,
                };
                u.extend(e.params, t), u.extend(e.originalParams, t);
              },
              setTranslate() {
                "flip" === this.params.effect && this.flipEffect.setTranslate();
              },
              setTransition(e) {
                "flip" === this.params.effect &&
                  this.flipEffect.setTransition(e);
              },
            },
          },
          {
            name: "effect-coverflow",
            params: {
              coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                scale: 1,
                modifier: 1,
                slideShadows: !0,
              },
            },
            create() {
              const e = this;
              u.extend(e, {
                coverflowEffect: {
                  setTranslate: le.setTranslate.bind(e),
                  setTransition: le.setTransition.bind(e),
                },
              });
            },
            on: {
              beforeInit() {
                const e = this;
                "coverflow" === e.params.effect &&
                  (e.classNames.push(
                    `${e.params.containerModifierClass}coverflow`
                  ),
                  e.classNames.push(`${e.params.containerModifierClass}3d`),
                  (e.params.watchSlidesProgress = !0),
                  (e.originalParams.watchSlidesProgress = !0));
              },
              setTranslate() {
                "coverflow" === this.params.effect &&
                  this.coverflowEffect.setTranslate();
              },
              setTransition(e) {
                "coverflow" === this.params.effect &&
                  this.coverflowEffect.setTransition(e);
              },
            },
          },
          {
            name: "thumbs",
            params: {
              thumbs: {
                swiper: null,
                multipleActiveThumbs: !0,
                autoScrollOffset: 0,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-container-thumbs",
              },
            },
            create() {
              const e = this;
              u.extend(e, {
                thumbs: {
                  swiper: null,
                  init: de.init.bind(e),
                  update: de.update.bind(e),
                  onThumbClick: de.onThumbClick.bind(e),
                },
              });
            },
            on: {
              beforeInit() {
                const e = this,
                  { thumbs: t } = e.params;
                t && t.swiper && (e.thumbs.init(), e.thumbs.update(!0));
              },
              slideChange() {
                this.thumbs.swiper && this.thumbs.update();
              },
              update() {
                this.thumbs.swiper && this.thumbs.update();
              },
              resize() {
                this.thumbs.swiper && this.thumbs.update();
              },
              observerUpdate() {
                this.thumbs.swiper && this.thumbs.update();
              },
              setTransition(e) {
                const t = this.thumbs.swiper;
                t && t.setTransition(e);
              },
              beforeDestroy() {
                const e = this.thumbs.swiper;
                e && this.thumbs.swiperCreated && e && e.destroy();
              },
            },
          },
        ];
        void 0 === O.use &&
          ((O.use = O.Class.use), (O.installModule = O.Class.installModule)),
          O.use(ce);
        const pe = O;
      },
      697: function (e, t, a) {
        /*!
         * vue-awesome-swiper v4.1.1
         * Copyright (c) Surmon. All rights reserved.
         * Released under the MIT License.
         * Surmon <https://github.com/surmon-china>
         */
        !(function (e, t, a) {
          "use strict";
          var s;
          (t =
            t && Object.prototype.hasOwnProperty.call(t, "default")
              ? t.default
              : t),
            (a =
              a && Object.prototype.hasOwnProperty.call(a, "default")
                ? a.default
                : a),
            (function (e) {
              (e.SwiperComponent = "Swiper"),
                (e.SwiperSlideComponent = "SwiperSlide"),
                (e.SwiperDirective = "swiper"),
                (e.SwiperInstance = "$swiper");
            })(s || (s = {}));
          var i,
            n,
            r = Object.freeze({
              containerClass: "swiper-container",
              wrapperClass: "swiper-wrapper",
              slideClass: "swiper-slide",
            });
          (function (e) {
            (e.Ready = "ready"), (e.ClickSlide = "clickSlide");
          })(i || (i = {})),
            (function (e) {
              (e.AutoUpdate = "autoUpdate"),
                (e.AutoDestroy = "autoDestroy"),
                (e.DeleteInstanceOnDestroy = "deleteInstanceOnDestroy"),
                (e.CleanupStylesOnDestroy = "cleanupStylesOnDestroy");
            })(n || (n = {}));
          var o = [
            "init",
            "beforeDestroy",
            "slideChange",
            "slideChangeTransitionStart",
            "slideChangeTransitionEnd",
            "slideNextTransitionStart",
            "slideNextTransitionEnd",
            "slidePrevTransitionStart",
            "slidePrevTransitionEnd",
            "transitionStart",
            "transitionEnd",
            "touchStart",
            "touchMove",
            "touchMoveOpposite",
            "sliderMove",
            "touchEnd",
            "click",
            "tap",
            "doubleTap",
            "imagesReady",
            "progress",
            "reachBeginning",
            "reachEnd",
            "fromEdge",
            "setTranslate",
            "setTransition",
            "resize",
            "observerUpdate",
            "beforeLoopFix",
            "loopFix",
          ];
          /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */ function l() {
            for (var e = 0, t = 0, a = arguments.length; t < a; t++)
              e += arguments[t].length;
            var s = Array(e),
              i = 0;
            for (t = 0; t < a; t++)
              for (var n = arguments[t], r = 0, o = n.length; r < o; r++, i++)
                s[i] = n[r];
            return s;
          }
          var d,
            c = function (e) {
              return e
                .replace(/([a-z])([A-Z])/g, "$1-$2")
                .replace(/\s+/g, "-")
                .toLowerCase();
            },
            p = function (e, t, a) {
              var s, n, r;
              if (e && !e.destroyed) {
                var o =
                  (null === (s = t.composedPath) || void 0 === s
                    ? void 0
                    : s.call(t)) || t.path;
                if ((null == t ? void 0 : t.target) && o) {
                  var l = Array.from(e.slides),
                    d = Array.from(o);
                  if (
                    l.includes(t.target) ||
                    d.some(function (e) {
                      return l.includes(e);
                    })
                  ) {
                    var p = e.clickedIndex,
                      u = Number(
                        null ===
                          (r =
                            null === (n = e.clickedSlide) || void 0 === n
                              ? void 0
                              : n.dataset) || void 0 === r
                          ? void 0
                          : r.swiperSlideIndex
                      ),
                      h = Number.isInteger(u) ? u : null;
                    a(i.ClickSlide, p, h), a(c(i.ClickSlide), p, h);
                  }
                }
              }
            },
            u = function (e, t) {
              o.forEach(function (a) {
                e.on(a, function () {
                  for (
                    var e = arguments, s = [], i = 0;
                    i < arguments.length;
                    i++
                  )
                    s[i] = e[i];
                  t.apply(void 0, l([a], s));
                  var n = c(a);
                  n !== a && t.apply(void 0, l([n], s));
                });
              });
            },
            h = "instanceName";
          function m(e, t) {
            var a = function (e, t) {
                var a,
                  s,
                  i,
                  n,
                  r =
                    null ===
                      (s =
                        null === (a = e.data) || void 0 === a
                          ? void 0
                          : a.attrs) || void 0 === s
                      ? void 0
                      : s[t];
                return void 0 !== r
                  ? r
                  : null ===
                      (n =
                        null === (i = e.data) || void 0 === i
                          ? void 0
                          : i.attrs) || void 0 === n
                  ? void 0
                  : n[c(t)];
              },
              o = function (e, t, i) {
                return t.arg || a(i, h) || e.id || s.SwiperInstance;
              },
              l = function (e, t, a) {
                var s = o(e, t, a);
                return a.context[s] || null;
              },
              d = function (e) {
                return e.value || t;
              },
              m = function (e) {
                return [!0, void 0, null, ""].includes(e);
              },
              f = function (e) {
                var t,
                  a,
                  s =
                    (null === (t = e.data) || void 0 === t ? void 0 : t.on) ||
                    (null === (a = e.componentOptions) || void 0 === a
                      ? void 0
                      : a.listeners);
                return function (e) {
                  for (
                    var t, a = arguments, i = [], n = 1;
                    n < arguments.length;
                    n++
                  )
                    i[n - 1] = a[n];
                  var r = null === (t = s) || void 0 === t ? void 0 : t[e];
                  r && r.fns.apply(r, i);
                };
              };
            return {
              bind: function (e, t, a) {
                -1 === e.className.indexOf(r.containerClass) &&
                  (e.className += (e.className ? " " : "") + r.containerClass),
                  e.addEventListener("click", function (s) {
                    var i = f(a),
                      n = l(e, t, a);
                    p(n, s, i);
                  });
              },
              inserted: function (t, a, s) {
                var n = s.context,
                  r = d(a),
                  l = o(t, a, s),
                  c = f(s),
                  p = n,
                  h = null == p ? void 0 : p[l];
                (h && !h.destroyed) ||
                  ((h = new e(t, r)), (p[l] = h), u(h, c), c(i.Ready, h));
              },
              componentUpdated: function (e, t, s) {
                var i,
                  r,
                  o,
                  c,
                  p,
                  u,
                  h,
                  f,
                  g,
                  v,
                  w,
                  b,
                  y = a(s, n.AutoUpdate);
                if (m(y)) {
                  var x = l(e, t, s);
                  if (x) {
                    var S = d(t).loop;
                    S &&
                      (null ===
                        (r =
                          null === (i = x) || void 0 === i
                            ? void 0
                            : i.loopDestroy) ||
                        void 0 === r ||
                        r.call(i)),
                      null === (o = null == x ? void 0 : x.update) ||
                        void 0 === o ||
                        o.call(x),
                      null ===
                        (p =
                          null === (c = x.navigation) || void 0 === c
                            ? void 0
                            : c.update) ||
                        void 0 === p ||
                        p.call(c),
                      null ===
                        (h =
                          null === (u = x.pagination) || void 0 === u
                            ? void 0
                            : u.render) ||
                        void 0 === h ||
                        h.call(u),
                      null ===
                        (g =
                          null === (f = x.pagination) || void 0 === f
                            ? void 0
                            : f.update) ||
                        void 0 === g ||
                        g.call(f),
                      S &&
                        (null ===
                          (w =
                            null === (v = x) || void 0 === v
                              ? void 0
                              : v.loopCreate) ||
                          void 0 === w ||
                          w.call(v),
                        null === (b = null == x ? void 0 : x.update) ||
                          void 0 === b ||
                          b.call(x));
                  }
                }
              },
              unbind: function (e, t, s) {
                var i,
                  r = a(s, n.AutoDestroy);
                if (m(r)) {
                  var o = l(e, t, s);
                  o &&
                    o.initialized &&
                    (null === (i = null == o ? void 0 : o.destroy) ||
                      void 0 === i ||
                      i.call(
                        o,
                        m(a(s, n.DeleteInstanceOnDestroy)),
                        m(a(s, n.CleanupStylesOnDestroy))
                      ));
                }
              },
            };
          }
          function f(e) {
            var t;
            return a.extend({
              name: s.SwiperComponent,
              props:
                ((t = {
                  defaultOptions: {
                    type: Object,
                    required: !1,
                    default: function () {
                      return {};
                    },
                  },
                  options: { type: Object, required: !1 },
                }),
                (t[n.AutoUpdate] = { type: Boolean, default: !0 }),
                (t[n.AutoDestroy] = { type: Boolean, default: !0 }),
                (t[n.DeleteInstanceOnDestroy] = {
                  type: Boolean,
                  required: !1,
                  default: !0,
                }),
                (t[n.CleanupStylesOnDestroy] = {
                  type: Boolean,
                  required: !1,
                  default: !0,
                }),
                t),
              data: function () {
                var e;
                return ((e = {})[s.SwiperInstance] = null), e;
              },
              computed: {
                swiperInstance: {
                  cache: !1,
                  set: function (e) {
                    this[s.SwiperInstance] = e;
                  },
                  get: function () {
                    return this[s.SwiperInstance];
                  },
                },
                swiperOptions: function () {
                  return this.options || this.defaultOptions;
                },
                wrapperClass: function () {
                  return this.swiperOptions.wrapperClass || r.wrapperClass;
                },
              },
              methods: {
                handleSwiperClick: function (e) {
                  p(this.swiperInstance, e, this.$emit.bind(this));
                },
                autoReLoopSwiper: function () {
                  var e, t;
                  if (this.swiperInstance && this.swiperOptions.loop) {
                    var a = this.swiperInstance;
                    null === (e = null == a ? void 0 : a.loopDestroy) ||
                      void 0 === e ||
                      e.call(a),
                      null === (t = null == a ? void 0 : a.loopCreate) ||
                        void 0 === t ||
                        t.call(a);
                  }
                },
                updateSwiper: function () {
                  var e, t, a, s, i, r, o, l;
                  this[n.AutoUpdate] &&
                    this.swiperInstance &&
                    (this.autoReLoopSwiper(),
                    null ===
                      (t =
                        null === (e = this.swiperInstance) || void 0 === e
                          ? void 0
                          : e.update) ||
                      void 0 === t ||
                      t.call(e),
                    null ===
                      (s =
                        null === (a = this.swiperInstance.navigation) ||
                        void 0 === a
                          ? void 0
                          : a.update) ||
                      void 0 === s ||
                      s.call(a),
                    null ===
                      (r =
                        null === (i = this.swiperInstance.pagination) ||
                        void 0 === i
                          ? void 0
                          : i.render) ||
                      void 0 === r ||
                      r.call(i),
                    null ===
                      (l =
                        null === (o = this.swiperInstance.pagination) ||
                        void 0 === o
                          ? void 0
                          : o.update) ||
                      void 0 === l ||
                      l.call(o));
                },
                destroySwiper: function () {
                  var e, t;
                  this[n.AutoDestroy] &&
                    this.swiperInstance &&
                    this.swiperInstance.initialized &&
                    (null ===
                      (t =
                        null === (e = this.swiperInstance) || void 0 === e
                          ? void 0
                          : e.destroy) ||
                      void 0 === t ||
                      t.call(
                        e,
                        this[n.DeleteInstanceOnDestroy],
                        this[n.CleanupStylesOnDestroy]
                      ));
                },
                initSwiper: function () {
                  (this.swiperInstance = new e(this.$el, this.swiperOptions)),
                    u(this.swiperInstance, this.$emit.bind(this)),
                    this.$emit(i.Ready, this.swiperInstance);
                },
              },
              mounted: function () {
                this.swiperInstance || this.initSwiper();
              },
              activated: function () {
                this.updateSwiper();
              },
              updated: function () {
                this.updateSwiper();
              },
              beforeDestroy: function () {
                this.$nextTick(this.destroySwiper);
              },
              render: function (e) {
                return e(
                  "div",
                  {
                    staticClass: r.containerClass,
                    on: { click: this.handleSwiperClick },
                  },
                  [
                    this.$slots[d.ParallaxBg],
                    e("div", { class: this.wrapperClass }, this.$slots.default),
                    this.$slots[d.Pagination],
                    this.$slots[d.PrevButton],
                    this.$slots[d.NextButton],
                    this.$slots[d.Scrollbar],
                  ]
                );
              },
            });
          }
          !(function (e) {
            (e.ParallaxBg = "parallax-bg"),
              (e.Pagination = "pagination"),
              (e.Scrollbar = "scrollbar"),
              (e.PrevButton = "button-prev"),
              (e.NextButton = "button-next");
          })(d || (d = {}));
          var g = a.extend({
              name: s.SwiperSlideComponent,
              computed: {
                slideClass: function () {
                  var e, t;
                  return (
                    (null ===
                      (t =
                        null === (e = this.$parent) || void 0 === e
                          ? void 0
                          : e.swiperOptions) || void 0 === t
                      ? void 0
                      : t.slideClass) || r.slideClass
                  );
                },
              },
              methods: {
                update: function () {
                  var e,
                    t = this.$parent;
                  t[n.AutoUpdate] &&
                    (null === (e = null == t ? void 0 : t.swiperInstance) ||
                      void 0 === e ||
                      e.update());
                },
              },
              mounted: function () {
                this.update();
              },
              updated: function () {
                this.update();
              },
              render: function (e) {
                return e(
                  "div",
                  { class: this.slideClass },
                  this.$slots.default
                );
              },
            }),
            v = function (e) {
              var t = function (a, i) {
                if (!t.installed) {
                  var n = f(e);
                  i &&
                    (n.options.props.defaultOptions.default = function () {
                      return i;
                    }),
                    a.component(s.SwiperComponent, n),
                    a.component(s.SwiperSlideComponent, g),
                    a.directive(s.SwiperDirective, m(e, i)),
                    (t.installed = !0);
                }
              };
              return t;
            };
          function w(e) {
            var t;
            return (
              ((t = { version: "4.1.1", install: v(e), directive: m(e) })[
                s.SwiperComponent
              ] = f(e)),
              (t[s.SwiperSlideComponent] = g),
              t
            );
          }
          var b = w(t),
            y = b.version,
            x = b.install,
            S = b.directive,
            E = b.Swiper,
            T = b.SwiperSlide;
          (e.Swiper = E),
            (e.SwiperSlide = T),
            (e.default = b),
            (e.directive = S),
            (e.install = x),
            (e.version = y),
            Object.defineProperty(e, "__esModule", { value: !0 });
        })(t, a(3), a(311));
      },
      311: (e) => {
        "use strict";
        e.exports = Vue;
      },
    },
    t = {};
  function a(s) {
    var i = t[s];
    if (void 0 !== i) return i.exports;
    var n = (t[s] = { exports: {} });
    return e[s].call(n.exports, n, n.exports, a), n.exports;
  }
  (a.d = (e, t) => {
    for (var s in t)
      a.o(t, s) &&
        !a.o(e, s) &&
        Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
  }),
    (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (a.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      "use strict";
      var e = a(697);
      const t = {
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
        s = {
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
        i = {
          props: {
            loading: Boolean,
            visible: Boolean,
            content: String,
            yes: Function,
            no: Function,
          },
          i18n: new VueI18n({ locale: JS_CURRENT_LANGUAGE, messages: s }),
          template:
            '\n    <div class="v-confirm" :class="{ show: visible }">\n      <div class="v-confirm-body">\n        <a href="javascript:;" class="v-confirm-close" @click="$emit(\'no\')">\n          <span class="icon icon-order-cancel"><span class="path1"></span><span class="path2"></span></span>\n        </a>\n        <p class="v-confirm-content">{{ content }}</p>\n        <div class="v-confirm-btns">\n          <button\n            type="button"\n            :disabled="loading"\n            class="v-confirm-yes"\n            @click="$emit(\'yes\')"\n          >\n            <span v-if="loading">{{ $t(\'submitting\') }}</span>\n            <span v-else>{{ $t(\'yes\') }}</span>\n          </button>\n          <button type="button" class="v-confirm-no" @click="$emit(\'no\')">{{ $t(\'no\') }}</button>\n        </div>\n      </div>\n    </div>\n  ',
        },
        n = {
          props: { loading: Boolean, fullscreen: Boolean },
          template:
            '\n    <div class="v-loading">\n      <div class="v-loading-mask" v-if="loading" :style="{ position: fullscreen ? \'fixed\' : \'absolute\' }">\n        <div class="v-loading-spinner">\n          <div class="v-loading-loader"></div>\n        </div>\n      </div>\n      <slot></slot>\n    </div>\n  ',
        },
        r = {
          props: {
            simple: { type: Boolean, default: !1 },
            data: Object,
            click: Function,
            more: Function,
          },
          i18n: new VueI18n({ locale: JS_CURRENT_LANGUAGE, messages: s }),
          template:
            '\n    <ul\n      v-if="data.data.length > 0"\n      class="site-pagination"\n    >\n      <li v-show="!simple"><span>{{ $t(\'total\') }} {{ data.last_page }} {{ $t(\'pages\') }}</span></li>\n      <li>\n        <a\n          href="javascript:;"\n          class="prev-page"\n          :class="{ disabled: data.current_page === 1 }"\n          :data-href="data.prev_page_url"\n          @click="$emit(\'click\', data.prev_page_url)"\n        ><span class="symbol">&lt;</span></a>\n      </li>\n      <li v-if="data.current_page - 1 > 2 && !simple">\n        <a\n          href="javascript:;"\n          :data-href="data.first_page_url"\n          @click="$emit(\'click\', data.first_page_url)"\n        >1</a>\n      </li>\n      <li v-if="data.current_page > 4 && !simple">...</li>\n      <li\n        v-if="!simple"\n        v-for="(link, index) in data.links"\n        :key="link.label"\n      >\n        <a\n          href="javascript:;"\n          v-if="index >= Math.max(data.current_page - 2, 1) && index <= Math.min(data.current_page + 2, data.last_page)"\n          :class="{ current: data.current_page === index }"\n          :data-href="link.url"\n          @click="$emit(\'click\', link.url)"\n        >{{ index }}</a>\n      </li>\n      <li v-if="simple">\n        <a href="javascript:;">{{ data.current_page }}</a>\n      </li>\n      <li v-if="data.current_page < data.last_page - 3 && !simple">...</li>\n      <li v-if="data.current_page < data.last_page - 2 && !simple">\n        <a\n          href="javascript:;"\n          :data-href="data.last_page_url"\n          @click="$emit(\'click\', data.last_page_url)"\n        >{{ data.last_page }}</a>\n      </li>\n      <li>\n        <a\n          href="javascript:;"\n          class="next-page"\n          :class="{ disabled: data.current_page === data.last_page }"\n          :data-href="data.next_page_url"\n          @click="$emit(\'click\', data.next_page_url)"\n        >\n          <span class="symbol">&gt;</span>\n        </a>\n      </li>\n      <li class="view-more">\n        <button\n          type="button"\n          :disabled="data.current_page === data.last_page"\n          :data-href="data.next_page_url"\n          @click="$emit(\'more\', data.next_page_url)"\n        >\n          <span class="text">{{ $t(\'view_more\') }}</span>\n        </button>\n      </li>\n    </ul>\n  ',
        },
        o = {
          props: { name: String },
          i18n: new VueI18n({ locale: JS_CURRENT_LANGUAGE, messages: s }),
          template:
            '\n    <div class="v-breadcrumb">\n      <ul>\n        <li><a href="/">{{ $t(\'home\') }}</a></li>\n        <li><span>{{ name }}</span></li>\n      </ul>\n    </div>\n  ',
        },
        l = {
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
        d = axios.create();
      d.interceptors.request.use(function (e) {
        const t = localStorage.getItem("token");
        return t && (e.headers.Authorization = `Bearer ${t}`), e;
      }),
        d.interceptors.response.use(
          function (e) {
            const t = e.config.url;
            return -1e3 !== e.data.code ||
              [
                l.wish,
                l.userLikeReview,
                l.reviewLike,
                l.reviewUnlike,
                l.arrivalReminder,
                l.affiliateUserAuditStatus,
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
      const c = d,
        p = {
          props: { page: String },
          i18n: new VueI18n({ locale: JS_CURRENT_LANGUAGE, messages: s }),
          data: () => ({
            affiliateActiveStatus: 0,
            verifyStatus: {},
            isSignedIn: !0,
          }),
          methods: {
            getAffiliateSetting() {
              c.get(l.affiliateSettingDetail).then((e) => {
                0 === e.code &&
                  ((this.affiliateActiveStatus = e.data.active),
                  this.getStatus());
              });
            },
            getStatus() {
              c.get(l.affiliateUserAuditStatus).then((e) => {
                0 === e.code && (this.verifyStatus = e.data);
              });
            },
          },
          mounted() {
            localStorage.getItem("token") || (this.isSignedIn = !1),
              window.innerWidth >= 1280 && this.getAffiliateSetting();
          },
          template:
            '\n    <div class="v-user-container">\n      <div class="user-sidenav">\n        <div v-show="isSignedIn">\n          <h4>{{ $t(\'transaction_management\') }}</h4>\n          <ul>\n            <li><a href="/user/order" :class="{ current: page === \'order\' }">{{ $t(\'my_order\') }}</a></li>\n          </ul>\n          <h4>{{ $t(\'account\') }}</h4>\n          <ul>\n            <li><a href="/user/person" :class="{ current: page === \'person\' }">{{ $t(\'personal_information\') }}</a></li>\n            <li><a href="/user/wishlist" :class="{ current: page === \'wishlist\' }">{{ $t(\'my_wish\') }}</a></li>\n            <li><a href="/user/point" :class="{ current: page === \'point\' }">{{ $t(\'my_explorer_point\') }}</a></li>\n            <li><a href="/user/address" :class="{ current: page === \'address\' }">{{ $t(\'address_management\') }}</a></li>\n            <li><a href="/user/review" :class="{ current: page === \'review\' }">{{ $t(\'product_reviews\') }}</a></li>\n          </ul>\n          <h4 v-if="affiliateActiveStatus === 1 && verifyStatus.audit_status === 1">{{ $t(\'affiliate\') }}</h4>\n          <ul v-if="affiliateActiveStatus === 1 && verifyStatus.audit_status === 1">\n            <li><a href="/affiliate/user" :class="{ current: page === \'affiliate_user\' }">{{ $t(\'my_account\') }}</a></li>\n            <li><a href="/affiliate/order" :class="{ current: page === \'affiliate_order\' }">{{ $t(\'order\') }}</a></li>\n            <li><a href="/affiliate/cash-flow" :class="{ current: page === \'affiliate_cashflow\' }">{{ $t(\'income_details\') }}</a></li>\n            <li><a href="/affiliate/withdraw" :class="{ current: page === \'affiliate_withdraw\' }">{{ $t(\'withdraw\') }}</a></li>\n            <li><a href="/affiliate/activity-list" :class="{ current: page === \'affiliate_activity\' }">{{ $t(\'user_events\') }}</a></li>\n            <li><a href="/affiliate/subordinate" :class="{ current: page === \'affiliate_subordinate\' }">{{ $t(\'referral_performance\') }}</a></li>\n          </ul>\n        </div>\n      </div>\n      <div class="user-main">\n        <slot></slot>\n      </div>\n    </div>\n  ',
        },
        u = {
          isNegative: (e) => e < 0,
          isZero: (e) => 0 === e,
          isPositive: (e) => e > 0,
          getPrecision(e) {
            const t = String(e).split(".");
            return t[1] ? t[1].length : 0;
          },
          rounding(e, t) {
            const a = this.getPrecision(e),
              s = this.getPrecision(t),
              i = Math.max(a, s),
              n = Math.pow(10, i),
              r = e * n,
              o = t * n;
            return (
              !!this.isZero(this.mod(r, o)) ||
              this.multiple(o, this.mod(r, o)) < 2
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
          ceil(e, t, a) {
            return this.isZero(this.mod(e, t))
              ? e.toFixed(a)
              : this.isNegative(e)
              ? -this.multiply(t, this.multiple(e, t)).toFixed(a)
              : this.isPositive(e)
              ? this.multiply(t, this.multiple(e, t) + 1).toFixed(a)
              : void 0;
          },
          floor(e, t, a) {
            return this.isZero(this.mod(e, t))
              ? e.toFixed(a)
              : this.isNegative(e)
              ? -this.multiply(t, this.multiple(e, t) + 1).toFixed(a)
              : this.isPositive(e)
              ? this.multiply(t, this.multiple(e, t)).toFixed(a)
              : void 0;
          },
          round(e, t, a) {
            return this.isZero(this.mod(e, t))
              ? e.toFixed(a)
              : this.isNegative(e)
              ? this.rounding(e, t)
                ? -this.multiply(t, this.multiple(e, t)).toFixed(a)
                : -this.multiply(t, this.multiple(e, t) + 1).toFixed(a)
              : this.isPositive(e)
              ? this.rounding(e, t)
                ? this.multiply(t, this.multiple(e, t)).toFixed(a)
                : this.multiply(t, this.multiple(e, t) + 1).toFixed(a)
              : void 0;
          },
        },
        h = {
          formatPrice() {
            const e = document.getElementsByClassName("format_price"),
              t = JS_CURRENCY_GROUP[JS_DEFAULT_CURRENCY];
            for (let a = 0; a < e.length; a++) {
              const s = e[a].getAttribute("data-price");
              e[a].innerHTML = `${t.symbol}${this.formatNumber(s)}`;
            }
          },
          formatNumber(e, t = JS_DEFAULT_CURRENCY) {
            const a = JS_CURRENCY_GROUP[t];
            let s = a.precision;
            switch (
              (["/cart", "/checkout"].includes(location.pathname) &&
                (s = a.calc_precision),
              a.round_type_name)
            ) {
              case "round":
                e = u.round(e * a.exchange_rate, a.unit_amount, s);
                break;
              case "ceil":
                e = u.ceil(e * a.exchange_rate, a.unit_amount, s);
                break;
              case "floor":
                e = u.floor(e * a.exchange_rate, a.unit_amount, s);
            }
            return e;
          },
          formatNumberWithoutUnit(e, t = JS_DEFAULT_CURRENCY) {
            const a = JS_CURRENCY_GROUP[t];
            let s = a.precision;
            return (
              ["/cart", "/checkout"].includes(location.pathname) &&
                (s = a.calc_precision),
              (
                Math.round(e * a.exchange_rate * Math.pow(10, s)) /
                Math.pow(10, s)
              ).toFixed(s)
            );
          },
          getLocationSearch() {
            const e = {};
            return (
              location.search
                .substring(1)
                .split("&")
                .forEach(function (t) {
                  const a = t.split("=");
                  e[a[0]] = a[1];
                }),
              e
            );
          },
          getPlatform: () =>
            "ontouchstart" in document.documentElement ? 2 : 1,
          async addToWishlist(e, t, a, s, i) {
            const n = "USD",
              r = { product_id: e },
              o = await c.post(l.wish, r);
            return (
              0 === o.code &&
                (window.dataLayer &&
                  (dataLayer.push({ ecommerce: null }),
                  dataLayer.push({
                    event: "add_to_wishlist",
                    ecommerce: {
                      items: [
                        {
                          item_id: a,
                          item_name: s,
                          price: this.formatNumber(t, n),
                        },
                      ],
                    },
                  })),
                window.fbq &&
                  fbq("track", "AddToWishlist", {
                    currency: n,
                    value: this.formatNumber(t, n),
                    content_ids: [a],
                    contents: [{ id: a, quantity: 1 }],
                    content_name: s,
                    content_category: i,
                  }),
                window.ttq &&
                  ttq.track("AddToWishlist", {
                    contents: [
                      {
                        content_id: a,
                        content_type: "product",
                        content_name: s,
                      },
                    ],
                    value: this.formatNumber(t, n),
                    currency: n,
                  })),
              o
            );
          },
          updateCartCount(e) {
            const t = document.getElementById("site_cart_num");
            e > 0
              ? ((t.innerHTML = e > 9 ? "9+" : e),
                (t.style.display = "inline-block"))
              : (t.style.display = "none");
          },
          async addToCart(e, t, a, s, i, n, r) {
            const o = "USD",
              d = {
                product_id: e,
                platform: this.getPlatform(),
                qty: t,
                "g-recaptcha-response": r,
              };
            n && (d.cart_rule_id = n);
            const p = await c.post(l.cart, d);
            return (
              0 === p.code &&
                p.data.qty > 0 &&
                (this.updateCartCount(p.data.qty),
                window.dataLayer &&
                  (dataLayer.push({ ecommerce: null }),
                  dataLayer.push({
                    event: "add_to_cart",
                    ecommerce: {
                      method: "addtocart",
                      items: [
                        {
                          item_id: s,
                          item_name: i,
                          price: this.formatNumber(a, o),
                          quantity: t,
                        },
                      ],
                    },
                  })),
                window.fbq &&
                  fbq("track", "AddToCart", {
                    currency: o,
                    value: this.formatNumber(u.multiply(a, t), o),
                    content_ids: [s],
                    contents: [{ id: s, quantity: t }],
                    content_type: "product",
                    content_name: i,
                  }),
                window.ttq &&
                  ttq.track("AddToCart", {
                    contents: [
                      {
                        content_id: s,
                        content_type: "product",
                        content_name: i,
                      },
                    ],
                    value: this.formatNumber(u.multiply(a, t), o),
                    currency: o,
                  })),
              p
            );
          },
          async removeFromCart(e, t, a, s, i, n) {
            const r = await c.delete(
              `${l.cart}/${e}?g-recaptcha-response=${n}`
            );
            return (
              0 === r.code &&
                window.dataLayer &&
                (dataLayer.push({ ecommerce: null }),
                dataLayer.push({
                  event: "remove_from_cart",
                  ecommerce: {
                    items: [
                      {
                        item_id: s,
                        item_name: i,
                        price: this.formatNumber(a, "USD"),
                        quantity: t,
                      },
                    ],
                  },
                })),
              r
            );
          },
          selectProduct() {
            const e = document.getElementsByClassName("js_select_item");
            for (let t = 0; t < e.length; t++)
              (e[t].onclick = (a) => {
                a.preventDefault();
                const s = a.target,
                  i = s.getAttribute("data-sku"),
                  n = s.getAttribute("data-name"),
                  r = s.getAttribute("data-price");
                window.dataLayer &&
                  (dataLayer.push({ ecommerce: null }),
                  dataLayer.push({
                    event: "select_item",
                    ecommerce: {
                      items: [
                        {
                          item_id: i,
                          item_name: n,
                          price: this.formatNumber(r, "USD"),
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
                  const a = t.querySelector("span");
                  (a.style.display = "inline-block"),
                    a.animate(
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
              e[t].onclick = async (a) => {
                a.preventDefault();
                const s = e[t].getAttribute("data-default-text"),
                  i = e[t].getAttribute("data-adding-text"),
                  n = e[t].getAttribute("data-id"),
                  r = e[t].getAttribute("data-price"),
                  o = e[t].getAttribute("data-sku"),
                  l = e[t].getAttribute("data-name");
                let d = "";
                const c = document.getElementById("cart_rule_id");
                c && (d = c.value),
                  (e[t].innerHTML = i),
                  grecaptcha.ready(() => {
                    grecaptcha
                      .execute(GOOGLE_RECAPTCHA, { action: "submit" })
                      .then(async (a) => {
                        0 ===
                          (await this.addToCart(n, 1, r, o, l, d, a)).code &&
                          (e[t].innerHTML = s);
                      });
                  });
              };
          },
        };
      new Vue({
        el: "#app",
        components: {
          Swiper: e.Swiper,
          SwiperSlide: e.SwiperSlide,
          "v-alert": t,
          "v-loading": n,
          "v-confirm": i,
          "v-pagination": r,
          "v-user-breadcrumb": o,
          "v-user-container": p,
        },
        data: {
          isMobile: !0,
          options: { slidesPerView: "auto" },
          showStatus: 0,
          loading: !1,
          orders: { data: [] },
          payLoading: !1,
          cancelLoading: !1,
          cancelUrl: null,
          viewConfirm: !1,
          viewAlert: !1,
          alertMessage: "",
        },
        methods: {
          getOrders(e) {
            this.showStatus = e;
            let t = {};
            0 !== e && (t = { show_status: e }),
              (this.loading = !0),
              c.get(l.order, { params: t }).then((e) => {
                0 === e.code && (this.orders = e.data), (this.loading = !1);
              });
          },
          handlePageClick(e, t) {
            let a = "";
            0 !== this.showStatus && (a = `&show_status=${this.showStatus}`),
              (this.loading = !0),
              c.get(`${e}${a}`).then((e) => {
                if (0 === e.code)
                  if ("replace" === t) this.orders = e.data;
                  else if ("push" === t) {
                    const t = e.data,
                      a = [...this.orders.data, ...e.data.data];
                    (t.data = a), (this.orders = t);
                  }
                this.loading = !1;
              });
          },
          handlePay(e) {
            (this.payLoading = !0),
              c.post(e).then((e) => {
                (this.payLoading = !1),
                  0 === e.code
                    ? e.data.payment_gateway_url
                      ? (location.href = e.data.payment_gateway_url)
                      : ((this.viewAlert = !0),
                        (this.alertMessage = e.data.message))
                    : ((this.viewAlert = !0), (this.alertMessage = e.message));
              });
          },
          handleCancel(e) {
            (this.cancelUrl = e), (this.viewConfirm = !0);
          },
          cancelOrder() {
            grecaptcha.ready(() => {
              grecaptcha
                .execute(GOOGLE_RECAPTCHA, { action: "submit" })
                .then((e) => {
                  (this.cancelLoading = !0),
                    c
                      .put(`${this.cancelUrl}&g-recaptcha-response=${e}`)
                      .then((e) => {
                        0 === e.code
                          ? (this.getOrders(), (this.viewConfirm = !1))
                          : ((this.viewAlert = !0),
                            (this.alertMessage = e.message)),
                          (this.cancelLoading = !1);
                      });
                });
            });
          },
          getEmptyContainerHeight() {
            const e = document.querySelector(".order-tab").offsetHeight;
            let t = 0;
            if (window.innerWidth < 1280) {
              const a = document.getElementById("header").clientHeight,
                s = document.getElementById("footer").clientHeight;
              t = window.innerHeight - a - e - s;
            } else {
              t = document.querySelector(".user-sidenav").clientHeight - e;
            }
            return t;
          },
        },
        mounted() {
          this.getOrders(0), window.innerWidth >= 1280 && (this.isMobile = !1);
        },
        updated() {
          h.formatPrice();
        },
      });
    })();
})();
