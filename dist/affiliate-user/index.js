(() => {
  var t = {
      640: (t, e, i) => {
        "use strict";
        var s = i(742),
          n = { "text/plain": "Text", "text/html": "Url", default: "Text" },
          o = "Copy to clipboard: #{key}, Enter";
        t.exports = function (t, e) {
          var i,
            a,
            r,
            h,
            l,
            c,
            d = !1;
          e || (e = {}), (i = e.debug || !1);
          try {
            if (
              ((r = s()),
              (h = document.createRange()),
              (l = document.getSelection()),
              ((c = document.createElement("span")).textContent = t),
              (c.ariaHidden = "true"),
              (c.style.all = "unset"),
              (c.style.position = "fixed"),
              (c.style.top = 0),
              (c.style.clip = "rect(0, 0, 0, 0)"),
              (c.style.whiteSpace = "pre"),
              (c.style.webkitUserSelect = "text"),
              (c.style.MozUserSelect = "text"),
              (c.style.msUserSelect = "text"),
              (c.style.userSelect = "text"),
              c.addEventListener("copy", function (s) {
                if ((s.stopPropagation(), e.format))
                  if ((s.preventDefault(), void 0 === s.clipboardData)) {
                    i && console.warn("unable to use e.clipboardData"),
                      i && console.warn("trying IE specific stuff"),
                      window.clipboardData.clearData();
                    var o = n[e.format] || n.default;
                    window.clipboardData.setData(o, t);
                  } else
                    s.clipboardData.clearData(),
                      s.clipboardData.setData(e.format, t);
                e.onCopy && (s.preventDefault(), e.onCopy(s.clipboardData));
              }),
              document.body.appendChild(c),
              h.selectNodeContents(c),
              l.addRange(h),
              !document.execCommand("copy"))
            )
              throw new Error("copy command was unsuccessful");
            d = !0;
          } catch (s) {
            i && console.error("unable to copy using execCommand: ", s),
              i && console.warn("trying IE specific stuff");
            try {
              window.clipboardData.setData(e.format || "text", t),
                e.onCopy && e.onCopy(window.clipboardData),
                (d = !0);
            } catch (s) {
              i && console.error("unable to copy using clipboardData: ", s),
                i && console.error("falling back to prompt"),
                (a = (function (t) {
                  var e =
                    (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") +
                    "+C";
                  return t.replace(/#{\s*key\s*}/g, e);
                })("message" in e ? e.message : o)),
                window.prompt(a, t);
            }
          } finally {
            l &&
              ("function" == typeof l.removeRange
                ? l.removeRange(h)
                : l.removeAllRanges()),
              c && document.body.removeChild(c),
              r();
          }
          return d;
        };
      },
      742: (t) => {
        t.exports = function () {
          var t = document.getSelection();
          if (!t.rangeCount) return function () {};
          for (
            var e = document.activeElement, i = [], s = 0;
            s < t.rangeCount;
            s++
          )
            i.push(t.getRangeAt(s));
          switch (e.tagName.toUpperCase()) {
            case "INPUT":
            case "TEXTAREA":
              e.blur();
              break;
            default:
              e = null;
          }
          return (
            t.removeAllRanges(),
            function () {
              "Caret" === t.type && t.removeAllRanges(),
                t.rangeCount ||
                  i.forEach(function (e) {
                    t.addRange(e);
                  }),
                e && e.focus();
            }
          );
        };
      },
      159: (t, e, i) => {
        "use strict";
        var s,
          n = i(640),
          o = (s = n) && s.__esModule ? s : { default: s };
        var a = {
          name: "VueCopyToClipboard",
          functional: !0,
          props: {
            text: { type: String, required: !0 },
            options: {
              type: Object,
              default: function () {
                return null;
              },
            },
          },
          render: function (t, e) {
            var i = e.props,
              s = e.listeners.copy,
              n = e.children,
              a = i || {},
              r = a.text,
              h = a.options;
            return t(
              "span",
              {
                on: {
                  click: function (t) {
                    t.preventDefault(), t.stopPropagation();
                    var e = (0, o.default)(r, h);
                    s && s(r, e);
                  },
                },
              },
              n
            );
          },
          install: function (t) {
            t.component(a.name, a);
          },
        };
        e.Z = a;
      },
      59: function (t) {
        "undefined" != typeof self && self,
          (t.exports = (function (t) {
            var e = {};
            function i(s) {
              if (e[s]) return e[s].exports;
              var n = (e[s] = { i: s, l: !1, exports: {} });
              return (
                t[s].call(n.exports, n, n.exports, i), (n.l = !0), n.exports
              );
            }
            return (
              (i.m = t),
              (i.c = e),
              (i.d = function (t, e, s) {
                i.o(t, e) ||
                  Object.defineProperty(t, e, { enumerable: !0, get: s });
              }),
              (i.r = function (t) {
                "undefined" != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module",
                  }),
                  Object.defineProperty(t, "__esModule", { value: !0 });
              }),
              (i.t = function (t, e) {
                if ((1 & e && (t = i(t)), 8 & e)) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule)
                  return t;
                var s = Object.create(null);
                if (
                  (i.r(s),
                  Object.defineProperty(s, "default", {
                    enumerable: !0,
                    value: t,
                  }),
                  2 & e && "string" != typeof t)
                )
                  for (var n in t)
                    i.d(
                      s,
                      n,
                      function (e) {
                        return t[e];
                      }.bind(null, n)
                    );
                return s;
              }),
              (i.n = function (t) {
                var e =
                  t && t.__esModule
                    ? function () {
                        return t.default;
                      }
                    : function () {
                        return t;
                      };
                return i.d(e, "a", e), e;
              }),
              (i.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
              }),
              (i.p = ""),
              i((i.s = 0))
            );
          })([
            function (t, e, i) {
              t.exports = i(1);
            },
            function (t, e, i) {
              "use strict";
              i.r(e),
                i.d(e, "ShareNetwork", function () {
                  return o;
                });
              var s = {
                  baidu: "http://cang.baidu.com/do/add?iu=@u&it=@t",
                  buffer: "https://bufferapp.com/add?text=@t&url=@u",
                  email: "mailto:?subject=@t&body=@u%0D%0A@d",
                  evernote:
                    "https://www.evernote.com/clip.action?url=@u&title=@t",
                  facebook:
                    "https://www.facebook.com/sharer/sharer.php?u=@u&title=@t&description=@d&quote=@q&hashtag=@h",
                  flipboard:
                    "https://share.flipboard.com/bookmarklet/popout?v=2&url=@u&title=@t",
                  hackernews:
                    "https://news.ycombinator.com/submitlink?u=@u&t=@t",
                  instapaper:
                    "http://www.instapaper.com/edit?url=@u&title=@t&description=@d",
                  line: "http://line.me/R/msg/text/?@t%0D%0A@u%0D%0A@d",
                  linkedin:
                    "https://www.linkedin.com/sharing/share-offsite/?url=@u",
                  messenger: "fb-messenger://share/?link=@u",
                  odnoklassniki:
                    "https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=@u&st.comments=@t",
                  pinterest:
                    "https://pinterest.com/pin/create/button/?url=@u&media=@m&description=@t",
                  pocket: "https://getpocket.com/save?url=@u&title=@t",
                  quora: "https://www.quora.com/share?url=@u&title=@t",
                  reddit: "https://www.reddit.com/submit?url=@u&title=@t",
                  skype: "https://web.skype.com/share?url=@t%0D%0A@u%0D%0A@d",
                  sms: "sms:?body=@t%0D%0A@u%0D%0A@d",
                  stumbleupon:
                    "https://www.stumbleupon.com/submit?url=@u&title=@t",
                  telegram: "https://t.me/share/url?url=@u&text=@t%0D%0A@d",
                  tumblr:
                    "https://www.tumblr.com/share/link?url=@u&name=@t&description=@d",
                  twitter:
                    "https://twitter.com/intent/tweet?text=@t&url=@u&hashtags=@h@tu",
                  viber: "viber://forward?text=@t%0D%0A@u%0D%0A@d",
                  vk: "https://vk.com/share.php?url=@u&title=@t&description=@d&image=@m&noparse=true",
                  weibo:
                    "http://service.weibo.com/share/share.php?url=@u&title=@t&pic=@m",
                  whatsapp:
                    "https://api.whatsapp.com/send?text=@t%0D%0A@u%0D%0A@d",
                  wordpress:
                    "https://wordpress.com/press-this.php?u=@u&t=@t&s=@d&i=@m",
                  xing: "https://www.xing.com/social/share/spi?op=share&url=@u&title=@t",
                  yammer:
                    "https://www.yammer.com/messages/new?login=true&status=@t%0D%0A@u%0D%0A@d",
                },
                n = "undefined" != typeof window ? window : null,
                o = {
                  name: "ShareNetwork",
                  props: {
                    network: { type: String, required: !0 },
                    url: { type: String, required: !0 },
                    title: { type: String, required: !0 },
                    description: { type: String, default: "" },
                    quote: { type: String, default: "" },
                    hashtags: { type: String, default: "" },
                    twitterUser: { type: String, default: "" },
                    media: { type: String, default: "" },
                    tag: { type: String, default: "a" },
                    popup: {
                      type: Object,
                      default: function () {
                        return { width: 626, height: 436 };
                      },
                    },
                  },
                  data: function () {
                    return {
                      popupTop: 0,
                      popupLeft: 0,
                      popupWindow: void 0,
                      popupInterval: null,
                    };
                  },
                  computed: {
                    networks: function () {
                      return this.$SocialSharing
                        ? this.$SocialSharing.options.networks
                        : s;
                    },
                    key: function () {
                      return this.network.toLowerCase();
                    },
                    rawLink: function () {
                      var t = navigator.userAgent.toLowerCase();
                      return "sms" === this.key &&
                        (t.indexOf("iphone") > -1 || t.indexOf("ipad") > -1)
                        ? this.networks[this.key].replace(":?", ":&")
                        : this.networks[this.key];
                    },
                    shareLink: function () {
                      var t = this.rawLink;
                      return (
                        "twitter" === this.key &&
                          (this.hashtags.length ||
                            (t = t.replace("&hashtags=@h", "")),
                          this.twitterUser.length ||
                            (t = t.replace("@tu", ""))),
                        t
                          .replace(
                            /@tu/g,
                            "&via=" + encodeURIComponent(this.twitterUser)
                          )
                          .replace(/@u/g, encodeURIComponent(this.url))
                          .replace(/@t/g, encodeURIComponent(this.title))
                          .replace(/@d/g, encodeURIComponent(this.description))
                          .replace(/@q/g, encodeURIComponent(this.quote))
                          .replace(/@h/g, this.encodedHashtags)
                          .replace(/@m/g, encodeURIComponent(this.media))
                      );
                    },
                    encodedHashtags: function () {
                      return "facebook" === this.key && this.hashtags.length
                        ? "%23" + this.hashtags.split(",")[0]
                        : this.hashtags;
                    },
                  },
                  render: function (t) {
                    var e = this;
                    if (!this.networks.hasOwnProperty(this.key))
                      throw new Error(
                        "Network " + this.key + " does not exist"
                      );
                    var i = {
                      class: "share-network-" + this.key,
                      on: {
                        click: function () {
                          return e[
                            "http" === e.rawLink.substring(0, 4)
                              ? "share"
                              : "touch"
                          ]();
                        },
                      },
                    };
                    return (
                      "a" === this.tag &&
                        (i.attrs = { href: "javascript:void(0)" }),
                      t(this.tag, i, this.$slots.default)
                    );
                  },
                  methods: {
                    resizePopup: function () {
                      var t =
                          n.innerWidth ||
                          document.documentElement.clientWidth ||
                          n.screenX,
                        e =
                          n.innerHeight ||
                          document.documentElement.clientHeight ||
                          n.screenY,
                        i = t / n.screen.availWidth;
                      (this.popupLeft =
                        (t - this.popup.width) / 2 / i +
                        (void 0 !== n.screenLeft ? n.screenLeft : n.screenX)),
                        (this.popupTop =
                          (e - this.popup.height) / 2 / i +
                          (void 0 !== n.screenTop ? n.screenTop : n.screenY));
                    },
                    share: function () {
                      var t = this;
                      this.resizePopup(),
                        this.popupWindow &&
                          this.popupInterval &&
                          (clearInterval(this.popupInterval),
                          this.popupWindow.close(),
                          this.emit("change")),
                        (this.popupWindow = n.open(
                          this.shareLink,
                          "sharer-" + this.key,
                          ",height=" +
                            this.popup.height +
                            ",width=" +
                            this.popup.width +
                            ",left=" +
                            this.popupLeft +
                            ",top=" +
                            this.popupTop +
                            ",screenX=" +
                            this.popupLeft +
                            ",screenY=" +
                            this.popupTop
                        )),
                        this.popupWindow &&
                          (this.popupWindow.focus(),
                          (this.popupInterval = setInterval(function () {
                            (t.popupWindow && !t.popupWindow.closed) ||
                              (clearInterval(t.popupInterval),
                              (t.popupWindow = null),
                              t.emit("close"));
                          }, 500)),
                          this.emit("open"));
                    },
                    touch: function () {
                      window.open(this.shareLink, "_blank"), this.emit("open");
                    },
                    emit: function (t) {
                      this.$root.$emit(
                        "share_network_" + t,
                        this.key,
                        this.url
                      ),
                        this.$emit(t, this.key, this.url);
                    },
                  },
                };
              e.default = {
                install: function (t, e) {
                  t.component(o.name, o),
                    (t.prototype.$SocialSharing = {
                      options: {
                        networks:
                          e && e.hasOwnProperty("networks")
                            ? Object.assign(s, e.networks)
                            : s,
                      },
                    });
                },
              };
            },
          ]));
      },
    },
    e = {};
  function i(s) {
    var n = e[s];
    if (void 0 !== n) return n.exports;
    var o = (e[s] = { exports: {} });
    return t[s].call(o.exports, o, o.exports, i), o.exports;
  }
  (i.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return i.d(e, { a: e }), e;
  }),
    (i.d = (t, e) => {
      for (var s in e)
        i.o(e, s) &&
          !i.o(t, s) &&
          Object.defineProperty(t, s, { enumerable: !0, get: e[s] });
    }),
    (i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (() => {
      "use strict";
      var t = i(59),
        e = i.n(t),
        s = i(159);
      const n = Vue;
      /*!
       * @kurkle/color v0.3.2
       * https://github.com/kurkle/color#readme
       * (c) 2023 Jukka Kurkela
       * Released under the MIT License
       */
      function o(t) {
        return (t + 0.5) | 0;
      }
      const a = (t, e, i) => Math.max(Math.min(t, i), e);
      function r(t) {
        return a(o(2.55 * t), 0, 255);
      }
      function h(t) {
        return a(o(255 * t), 0, 255);
      }
      function l(t) {
        return a(o(t / 2.55) / 100, 0, 1);
      }
      function c(t) {
        return a(o(100 * t), 0, 100);
      }
      const d = {
          0: 0,
          1: 1,
          2: 2,
          3: 3,
          4: 4,
          5: 5,
          6: 6,
          7: 7,
          8: 8,
          9: 9,
          A: 10,
          B: 11,
          C: 12,
          D: 13,
          E: 14,
          F: 15,
          a: 10,
          b: 11,
          c: 12,
          d: 13,
          e: 14,
          f: 15,
        },
        u = [..."0123456789ABCDEF"],
        p = (t) => u[15 & t],
        f = (t) => u[(240 & t) >> 4] + u[15 & t],
        g = (t) => (240 & t) >> 4 == (15 & t),
        m = (t) => g(t.r) && g(t.g) && g(t.b) && g(t.a);
      const b = (t, e) => (t < 255 ? e(t) : "");
      const x =
        /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
      function _(t, e, i) {
        const s = e * Math.min(i, 1 - i),
          n = (e, n = (e + t / 30) % 12) =>
            i - s * Math.max(Math.min(n - 3, 9 - n, 1), -1);
        return [n(0), n(8), n(4)];
      }
      function y(t, e, i) {
        const s = (s, n = (s + t / 60) % 6) =>
          i - i * e * Math.max(Math.min(n, 4 - n, 1), 0);
        return [s(5), s(3), s(1)];
      }
      function v(t, e, i) {
        const s = _(t, 1, 0.5);
        let n;
        for (
          e + i > 1 && ((n = 1 / (e + i)), (e *= n), (i *= n)), n = 0;
          n < 3;
          n++
        )
          (s[n] *= 1 - e - i), (s[n] += e);
        return s;
      }
      function w(t) {
        const e = t.r / 255,
          i = t.g / 255,
          s = t.b / 255,
          n = Math.max(e, i, s),
          o = Math.min(e, i, s),
          a = (n + o) / 2;
        let r, h, l;
        return (
          n !== o &&
            ((l = n - o),
            (h = a > 0.5 ? l / (2 - n - o) : l / (n + o)),
            (r = (function (t, e, i, s, n) {
              return t === n
                ? (e - i) / s + (e < i ? 6 : 0)
                : e === n
                ? (i - t) / s + 2
                : (t - e) / s + 4;
            })(e, i, s, l, n)),
            (r = 60 * r + 0.5)),
          [0 | r, h || 0, a]
        );
      }
      function k(t, e, i, s) {
        return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, i, s)).map(h);
      }
      function M(t, e, i) {
        return k(_, t, e, i);
      }
      function S(t) {
        return ((t % 360) + 360) % 360;
      }
      function P(t) {
        const e = x.exec(t);
        let i,
          s = 255;
        if (!e) return;
        e[5] !== i && (s = e[6] ? r(+e[5]) : h(+e[5]));
        const n = S(+e[2]),
          o = +e[3] / 100,
          a = +e[4] / 100;
        return (
          (i =
            "hwb" === e[1]
              ? (function (t, e, i) {
                  return k(v, t, e, i);
                })(n, o, a)
              : "hsv" === e[1]
              ? (function (t, e, i) {
                  return k(y, t, e, i);
                })(n, o, a)
              : M(n, o, a)),
          { r: i[0], g: i[1], b: i[2], a: s }
        );
      }
      const C = {
          x: "dark",
          Z: "light",
          Y: "re",
          X: "blu",
          W: "gr",
          V: "medium",
          U: "slate",
          A: "ee",
          T: "ol",
          S: "or",
          B: "ra",
          C: "lateg",
          D: "ights",
          R: "in",
          Q: "turquois",
          E: "hi",
          P: "ro",
          O: "al",
          N: "le",
          M: "de",
          L: "yello",
          F: "en",
          K: "ch",
          G: "arks",
          H: "ea",
          I: "ightg",
          J: "wh",
        },
        D = {
          OiceXe: "f0f8ff",
          antiquewEte: "faebd7",
          aqua: "ffff",
          aquamarRe: "7fffd4",
          azuY: "f0ffff",
          beige: "f5f5dc",
          bisque: "ffe4c4",
          black: "0",
          blanKedOmond: "ffebcd",
          Xe: "ff",
          XeviTet: "8a2be2",
          bPwn: "a52a2a",
          burlywood: "deb887",
          caMtXe: "5f9ea0",
          KartYuse: "7fff00",
          KocTate: "d2691e",
          cSO: "ff7f50",
          cSnflowerXe: "6495ed",
          cSnsilk: "fff8dc",
          crimson: "dc143c",
          cyan: "ffff",
          xXe: "8b",
          xcyan: "8b8b",
          xgTMnPd: "b8860b",
          xWay: "a9a9a9",
          xgYF: "6400",
          xgYy: "a9a9a9",
          xkhaki: "bdb76b",
          xmagFta: "8b008b",
          xTivegYF: "556b2f",
          xSange: "ff8c00",
          xScEd: "9932cc",
          xYd: "8b0000",
          xsOmon: "e9967a",
          xsHgYF: "8fbc8f",
          xUXe: "483d8b",
          xUWay: "2f4f4f",
          xUgYy: "2f4f4f",
          xQe: "ced1",
          xviTet: "9400d3",
          dAppRk: "ff1493",
          dApskyXe: "bfff",
          dimWay: "696969",
          dimgYy: "696969",
          dodgerXe: "1e90ff",
          fiYbrick: "b22222",
          flSOwEte: "fffaf0",
          foYstWAn: "228b22",
          fuKsia: "ff00ff",
          gaRsbSo: "dcdcdc",
          ghostwEte: "f8f8ff",
          gTd: "ffd700",
          gTMnPd: "daa520",
          Way: "808080",
          gYF: "8000",
          gYFLw: "adff2f",
          gYy: "808080",
          honeyMw: "f0fff0",
          hotpRk: "ff69b4",
          RdianYd: "cd5c5c",
          Rdigo: "4b0082",
          ivSy: "fffff0",
          khaki: "f0e68c",
          lavFMr: "e6e6fa",
          lavFMrXsh: "fff0f5",
          lawngYF: "7cfc00",
          NmoncEffon: "fffacd",
          ZXe: "add8e6",
          ZcSO: "f08080",
          Zcyan: "e0ffff",
          ZgTMnPdLw: "fafad2",
          ZWay: "d3d3d3",
          ZgYF: "90ee90",
          ZgYy: "d3d3d3",
          ZpRk: "ffb6c1",
          ZsOmon: "ffa07a",
          ZsHgYF: "20b2aa",
          ZskyXe: "87cefa",
          ZUWay: "778899",
          ZUgYy: "778899",
          ZstAlXe: "b0c4de",
          ZLw: "ffffe0",
          lime: "ff00",
          limegYF: "32cd32",
          lRF: "faf0e6",
          magFta: "ff00ff",
          maPon: "800000",
          VaquamarRe: "66cdaa",
          VXe: "cd",
          VScEd: "ba55d3",
          VpurpN: "9370db",
          VsHgYF: "3cb371",
          VUXe: "7b68ee",
          VsprRggYF: "fa9a",
          VQe: "48d1cc",
          VviTetYd: "c71585",
          midnightXe: "191970",
          mRtcYam: "f5fffa",
          mistyPse: "ffe4e1",
          moccasR: "ffe4b5",
          navajowEte: "ffdead",
          navy: "80",
          Tdlace: "fdf5e6",
          Tive: "808000",
          TivedBb: "6b8e23",
          Sange: "ffa500",
          SangeYd: "ff4500",
          ScEd: "da70d6",
          pOegTMnPd: "eee8aa",
          pOegYF: "98fb98",
          pOeQe: "afeeee",
          pOeviTetYd: "db7093",
          papayawEp: "ffefd5",
          pHKpuff: "ffdab9",
          peru: "cd853f",
          pRk: "ffc0cb",
          plum: "dda0dd",
          powMrXe: "b0e0e6",
          purpN: "800080",
          YbeccapurpN: "663399",
          Yd: "ff0000",
          Psybrown: "bc8f8f",
          PyOXe: "4169e1",
          saddNbPwn: "8b4513",
          sOmon: "fa8072",
          sandybPwn: "f4a460",
          sHgYF: "2e8b57",
          sHshell: "fff5ee",
          siFna: "a0522d",
          silver: "c0c0c0",
          skyXe: "87ceeb",
          UXe: "6a5acd",
          UWay: "708090",
          UgYy: "708090",
          snow: "fffafa",
          sprRggYF: "ff7f",
          stAlXe: "4682b4",
          tan: "d2b48c",
          teO: "8080",
          tEstN: "d8bfd8",
          tomato: "ff6347",
          Qe: "40e0d0",
          viTet: "ee82ee",
          JHt: "f5deb3",
          wEte: "ffffff",
          wEtesmoke: "f5f5f5",
          Lw: "ffff00",
          LwgYF: "9acd32",
        };
      let A;
      function O(t) {
        A ||
          ((A = (function () {
            const t = {},
              e = Object.keys(D),
              i = Object.keys(C);
            let s, n, o, a, r;
            for (s = 0; s < e.length; s++) {
              for (a = r = e[s], n = 0; n < i.length; n++)
                (o = i[n]), (r = r.replace(o, C[o]));
              (o = parseInt(D[a], 16)),
                (t[r] = [(o >> 16) & 255, (o >> 8) & 255, 255 & o]);
            }
            return t;
          })()),
          (A.transparent = [0, 0, 0, 0]));
        const e = A[t.toLowerCase()];
        return (
          e && { r: e[0], g: e[1], b: e[2], a: 4 === e.length ? e[3] : 255 }
        );
      }
      const L =
        /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
      const T = (t) =>
          t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055,
        I = (t) =>
          t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
      function R(t, e, i) {
        if (t) {
          let s = w(t);
          (s[e] = Math.max(0, Math.min(s[e] + s[e] * i, 0 === e ? 360 : 1))),
            (s = M(s)),
            (t.r = s[0]),
            (t.g = s[1]),
            (t.b = s[2]);
        }
      }
      function E(t, e) {
        return t ? Object.assign(e || {}, t) : t;
      }
      function z(t) {
        var e = { r: 0, g: 0, b: 0, a: 255 };
        return (
          Array.isArray(t)
            ? t.length >= 3 &&
              ((e = { r: t[0], g: t[1], b: t[2], a: 255 }),
              t.length > 3 && (e.a = h(t[3])))
            : ((e = E(t, { r: 0, g: 0, b: 0, a: 1 })).a = h(e.a)),
          e
        );
      }
      function F(t) {
        return "r" === t.charAt(0)
          ? (function (t) {
              const e = L.exec(t);
              let i,
                s,
                n,
                o = 255;
              if (e) {
                if (e[7] !== i) {
                  const t = +e[7];
                  o = e[8] ? r(t) : a(255 * t, 0, 255);
                }
                return (
                  (i = +e[1]),
                  (s = +e[3]),
                  (n = +e[5]),
                  (i = 255 & (e[2] ? r(i) : a(i, 0, 255))),
                  (s = 255 & (e[4] ? r(s) : a(s, 0, 255))),
                  (n = 255 & (e[6] ? r(n) : a(n, 0, 255))),
                  { r: i, g: s, b: n, a: o }
                );
              }
            })(t)
          : P(t);
      }
      class B {
        constructor(t) {
          if (t instanceof B) return t;
          const e = typeof t;
          let i;
          var s, n, o;
          "object" === e
            ? (i = z(t))
            : "string" === e &&
              ((o = (s = t).length),
              "#" === s[0] &&
                (4 === o || 5 === o
                  ? (n = {
                      r: 255 & (17 * d[s[1]]),
                      g: 255 & (17 * d[s[2]]),
                      b: 255 & (17 * d[s[3]]),
                      a: 5 === o ? 17 * d[s[4]] : 255,
                    })
                  : (7 !== o && 9 !== o) ||
                    (n = {
                      r: (d[s[1]] << 4) | d[s[2]],
                      g: (d[s[3]] << 4) | d[s[4]],
                      b: (d[s[5]] << 4) | d[s[6]],
                      a: 9 === o ? (d[s[7]] << 4) | d[s[8]] : 255,
                    })),
              (i = n || O(t) || F(t))),
            (this._rgb = i),
            (this._valid = !!i);
        }
        get valid() {
          return this._valid;
        }
        get rgb() {
          var t = E(this._rgb);
          return t && (t.a = l(t.a)), t;
        }
        set rgb(t) {
          this._rgb = z(t);
        }
        rgbString() {
          return this._valid
            ? (t = this._rgb) &&
                (t.a < 255
                  ? `rgba(${t.r}, ${t.g}, ${t.b}, ${l(t.a)})`
                  : `rgb(${t.r}, ${t.g}, ${t.b})`)
            : void 0;
          var t;
        }
        hexString() {
          return this._valid
            ? ((t = this._rgb),
              (e = m(t) ? p : f),
              t ? "#" + e(t.r) + e(t.g) + e(t.b) + b(t.a, e) : void 0)
            : void 0;
          var t, e;
        }
        hslString() {
          return this._valid
            ? (function (t) {
                if (!t) return;
                const e = w(t),
                  i = e[0],
                  s = c(e[1]),
                  n = c(e[2]);
                return t.a < 255
                  ? `hsla(${i}, ${s}%, ${n}%, ${l(t.a)})`
                  : `hsl(${i}, ${s}%, ${n}%)`;
              })(this._rgb)
            : void 0;
        }
        mix(t, e) {
          if (t) {
            const i = this.rgb,
              s = t.rgb;
            let n;
            const o = e === n ? 0.5 : e,
              a = 2 * o - 1,
              r = i.a - s.a,
              h = ((a * r == -1 ? a : (a + r) / (1 + a * r)) + 1) / 2;
            (n = 1 - h),
              (i.r = 255 & (h * i.r + n * s.r + 0.5)),
              (i.g = 255 & (h * i.g + n * s.g + 0.5)),
              (i.b = 255 & (h * i.b + n * s.b + 0.5)),
              (i.a = o * i.a + (1 - o) * s.a),
              (this.rgb = i);
          }
          return this;
        }
        interpolate(t, e) {
          return (
            t &&
              (this._rgb = (function (t, e, i) {
                const s = I(l(t.r)),
                  n = I(l(t.g)),
                  o = I(l(t.b));
                return {
                  r: h(T(s + i * (I(l(e.r)) - s))),
                  g: h(T(n + i * (I(l(e.g)) - n))),
                  b: h(T(o + i * (I(l(e.b)) - o))),
                  a: t.a + i * (e.a - t.a),
                };
              })(this._rgb, t._rgb, e)),
            this
          );
        }
        clone() {
          return new B(this.rgb);
        }
        alpha(t) {
          return (this._rgb.a = h(t)), this;
        }
        clearer(t) {
          return (this._rgb.a *= 1 - t), this;
        }
        greyscale() {
          const t = this._rgb,
            e = o(0.3 * t.r + 0.59 * t.g + 0.11 * t.b);
          return (t.r = t.g = t.b = e), this;
        }
        opaquer(t) {
          return (this._rgb.a *= 1 + t), this;
        }
        negate() {
          const t = this._rgb;
          return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this;
        }
        lighten(t) {
          return R(this._rgb, 2, t), this;
        }
        darken(t) {
          return R(this._rgb, 2, -t), this;
        }
        saturate(t) {
          return R(this._rgb, 1, t), this;
        }
        desaturate(t) {
          return R(this._rgb, 1, -t), this;
        }
        rotate(t) {
          return (
            (function (t, e) {
              var i = w(t);
              (i[0] = S(i[0] + e)),
                (i = M(i)),
                (t.r = i[0]),
                (t.g = i[1]),
                (t.b = i[2]);
            })(this._rgb, t),
            this
          );
        }
      }
      /*!
       * Chart.js v4.4.0
       * https://www.chartjs.org
       * (c) 2023 Chart.js Contributors
       * Released under the MIT License
       */
      function W() {}
      const V = (() => {
        let t = 0;
        return () => t++;
      })();
      function H(t) {
        return null == t;
      }
      function j(t) {
        if (Array.isArray && Array.isArray(t)) return !0;
        const e = Object.prototype.toString.call(t);
        return "[object" === e.slice(0, 7) && "Array]" === e.slice(-6);
      }
      function N(t) {
        return (
          null !== t && "[object Object]" === Object.prototype.toString.call(t)
        );
      }
      function $(t) {
        return ("number" == typeof t || t instanceof Number) && isFinite(+t);
      }
      function U(t, e) {
        return $(t) ? t : e;
      }
      function Y(t, e) {
        return void 0 === t ? e : t;
      }
      const q = (t, e) =>
        "string" == typeof t && t.endsWith("%")
          ? (parseFloat(t) / 100) * e
          : +t;
      function X(t, e, i) {
        if (t && "function" == typeof t.call) return t.apply(i, e);
      }
      function G(t, e, i, s) {
        let n, o, a;
        if (j(t))
          if (((o = t.length), s))
            for (n = o - 1; n >= 0; n--) e.call(i, t[n], n);
          else for (n = 0; n < o; n++) e.call(i, t[n], n);
        else if (N(t))
          for (a = Object.keys(t), o = a.length, n = 0; n < o; n++)
            e.call(i, t[a[n]], a[n]);
      }
      function K(t, e) {
        let i, s, n, o;
        if (!t || !e || t.length !== e.length) return !1;
        for (i = 0, s = t.length; i < s; ++i)
          if (
            ((n = t[i]),
            (o = e[i]),
            n.datasetIndex !== o.datasetIndex || n.index !== o.index)
          )
            return !1;
        return !0;
      }
      function J(t) {
        if (j(t)) return t.map(J);
        if (N(t)) {
          const e = Object.create(null),
            i = Object.keys(t),
            s = i.length;
          let n = 0;
          for (; n < s; ++n) e[i[n]] = J(t[i[n]]);
          return e;
        }
        return t;
      }
      function Z(t) {
        return -1 === ["__proto__", "prototype", "constructor"].indexOf(t);
      }
      function Q(t, e, i, s) {
        if (!Z(t)) return;
        const n = e[t],
          o = i[t];
        N(n) && N(o) ? tt(n, o, s) : (e[t] = J(o));
      }
      function tt(t, e, i) {
        const s = j(e) ? e : [e],
          n = s.length;
        if (!N(t)) return t;
        const o = (i = i || {}).merger || Q;
        let a;
        for (let e = 0; e < n; ++e) {
          if (((a = s[e]), !N(a))) continue;
          const n = Object.keys(a);
          for (let e = 0, s = n.length; e < s; ++e) o(n[e], t, a, i);
        }
        return t;
      }
      function et(t, e) {
        return tt(t, e, { merger: it });
      }
      function it(t, e, i) {
        if (!Z(t)) return;
        const s = e[t],
          n = i[t];
        N(s) && N(n)
          ? et(s, n)
          : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = J(n));
      }
      const st = { "": (t) => t, x: (t) => t.x, y: (t) => t.y };
      function nt(t, e) {
        const i =
          st[e] ||
          (st[e] = (function (t) {
            const e = (function (t) {
              const e = t.split("."),
                i = [];
              let s = "";
              for (const t of e)
                (s += t),
                  s.endsWith("\\")
                    ? (s = s.slice(0, -1) + ".")
                    : (i.push(s), (s = ""));
              return i;
            })(t);
            return (t) => {
              for (const i of e) {
                if ("" === i) break;
                t = t && t[i];
              }
              return t;
            };
          })(e));
        return i(t);
      }
      function ot(t) {
        return t.charAt(0).toUpperCase() + t.slice(1);
      }
      const at = (t) => void 0 !== t,
        rt = (t) => "function" == typeof t,
        ht = (t, e) => {
          if (t.size !== e.size) return !1;
          for (const i of t) if (!e.has(i)) return !1;
          return !0;
        };
      const lt = Math.PI,
        ct = 2 * lt,
        dt = ct + lt,
        ut = Number.POSITIVE_INFINITY,
        pt = lt / 180,
        ft = lt / 2,
        gt = lt / 4,
        mt = (2 * lt) / 3,
        bt = Math.log10,
        xt = Math.sign;
      function _t(t, e, i) {
        return Math.abs(t - e) < i;
      }
      function yt(t) {
        const e = Math.round(t);
        t = _t(t, e, t / 1e3) ? e : t;
        const i = Math.pow(10, Math.floor(bt(t))),
          s = t / i;
        return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * i;
      }
      function vt(t) {
        return !isNaN(parseFloat(t)) && isFinite(t);
      }
      function wt(t, e, i) {
        let s, n, o;
        for (s = 0, n = t.length; s < n; s++)
          (o = t[s][i]),
            isNaN(o) ||
              ((e.min = Math.min(e.min, o)), (e.max = Math.max(e.max, o)));
      }
      function kt(t) {
        return t * (lt / 180);
      }
      function Mt(t) {
        return t * (180 / lt);
      }
      function St(t) {
        if (!$(t)) return;
        let e = 1,
          i = 0;
        for (; Math.round(t * e) / e !== t; ) (e *= 10), i++;
        return i;
      }
      function Pt(t, e) {
        const i = e.x - t.x,
          s = e.y - t.y,
          n = Math.sqrt(i * i + s * s);
        let o = Math.atan2(s, i);
        return o < -0.5 * lt && (o += ct), { angle: o, distance: n };
      }
      function Ct(t, e) {
        return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
      }
      function Dt(t, e) {
        return ((t - e + dt) % ct) - lt;
      }
      function At(t) {
        return ((t % ct) + ct) % ct;
      }
      function Ot(t, e, i, s) {
        const n = At(t),
          o = At(e),
          a = At(i),
          r = At(o - n),
          h = At(a - n),
          l = At(n - o),
          c = At(n - a);
        return n === o || n === a || (s && o === a) || (r > h && l < c);
      }
      function Lt(t, e, i) {
        return Math.max(e, Math.min(i, t));
      }
      function Tt(t, e, i, s = 1e-6) {
        return t >= Math.min(e, i) - s && t <= Math.max(e, i) + s;
      }
      function It(t, e, i) {
        i = i || ((i) => t[i] < e);
        let s,
          n = t.length - 1,
          o = 0;
        for (; n - o > 1; ) (s = (o + n) >> 1), i(s) ? (o = s) : (n = s);
        return { lo: o, hi: n };
      }
      const Rt = (t, e, i, s) =>
          It(
            t,
            i,
            s
              ? (s) => {
                  const n = t[s][e];
                  return n < i || (n === i && t[s + 1][e] === i);
                }
              : (s) => t[s][e] < i
          ),
        Et = (t, e, i) => It(t, i, (s) => t[s][e] >= i);
      const zt = ["push", "pop", "shift", "splice", "unshift"];
      function Ft(t, e) {
        const i = t._chartjs;
        if (!i) return;
        const s = i.listeners,
          n = s.indexOf(e);
        -1 !== n && s.splice(n, 1),
          s.length > 0 ||
            (zt.forEach((e) => {
              delete t[e];
            }),
            delete t._chartjs);
      }
      function Bt(t) {
        const e = new Set(t);
        return e.size === t.length ? t : Array.from(e);
      }
      const Wt =
        "undefined" == typeof window
          ? function (t) {
              return t();
            }
          : window.requestAnimationFrame;
      function Vt(t, e) {
        let i = [],
          s = !1;
        return function (...n) {
          (i = n),
            s ||
              ((s = !0),
              Wt.call(window, () => {
                (s = !1), t.apply(e, i);
              }));
        };
      }
      const Ht = (t) =>
          "start" === t ? "left" : "end" === t ? "right" : "center",
        jt = (t, e, i) => ("start" === t ? e : "end" === t ? i : (e + i) / 2);
      function Nt(t, e, i) {
        const s = e.length;
        let n = 0,
          o = s;
        if (t._sorted) {
          const { iScale: a, _parsed: r } = t,
            h = a.axis,
            {
              min: l,
              max: c,
              minDefined: d,
              maxDefined: u,
            } = a.getUserBounds();
          d &&
            (n = Lt(
              Math.min(
                Rt(r, h, l).lo,
                i ? s : Rt(e, h, a.getPixelForValue(l)).lo
              ),
              0,
              s - 1
            )),
            (o = u
              ? Lt(
                  Math.max(
                    Rt(r, a.axis, c, !0).hi + 1,
                    i ? 0 : Rt(e, h, a.getPixelForValue(c), !0).hi + 1
                  ),
                  n,
                  s
                ) - n
              : s - n);
        }
        return { start: n, count: o };
      }
      function $t(t) {
        const { xScale: e, yScale: i, _scaleRanges: s } = t,
          n = { xmin: e.min, xmax: e.max, ymin: i.min, ymax: i.max };
        if (!s) return (t._scaleRanges = n), !0;
        const o =
          s.xmin !== e.min ||
          s.xmax !== e.max ||
          s.ymin !== i.min ||
          s.ymax !== i.max;
        return Object.assign(s, n), o;
      }
      const Ut = (t) => 0 === t || 1 === t,
        Yt = (t, e, i) =>
          -Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * ct) / i),
        qt = (t, e, i) =>
          Math.pow(2, -10 * t) * Math.sin(((t - e) * ct) / i) + 1,
        Xt = {
          linear: (t) => t,
          easeInQuad: (t) => t * t,
          easeOutQuad: (t) => -t * (t - 2),
          easeInOutQuad: (t) =>
            (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1),
          easeInCubic: (t) => t * t * t,
          easeOutCubic: (t) => (t -= 1) * t * t + 1,
          easeInOutCubic: (t) =>
            (t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2),
          easeInQuart: (t) => t * t * t * t,
          easeOutQuart: (t) => -((t -= 1) * t * t * t - 1),
          easeInOutQuart: (t) =>
            (t /= 0.5) < 1
              ? 0.5 * t * t * t * t
              : -0.5 * ((t -= 2) * t * t * t - 2),
          easeInQuint: (t) => t * t * t * t * t,
          easeOutQuint: (t) => (t -= 1) * t * t * t * t + 1,
          easeInOutQuint: (t) =>
            (t /= 0.5) < 1
              ? 0.5 * t * t * t * t * t
              : 0.5 * ((t -= 2) * t * t * t * t + 2),
          easeInSine: (t) => 1 - Math.cos(t * ft),
          easeOutSine: (t) => Math.sin(t * ft),
          easeInOutSine: (t) => -0.5 * (Math.cos(lt * t) - 1),
          easeInExpo: (t) => (0 === t ? 0 : Math.pow(2, 10 * (t - 1))),
          easeOutExpo: (t) => (1 === t ? 1 : 1 - Math.pow(2, -10 * t)),
          easeInOutExpo: (t) =>
            Ut(t)
              ? t
              : t < 0.5
              ? 0.5 * Math.pow(2, 10 * (2 * t - 1))
              : 0.5 * (2 - Math.pow(2, -10 * (2 * t - 1))),
          easeInCirc: (t) => (t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)),
          easeOutCirc: (t) => Math.sqrt(1 - (t -= 1) * t),
          easeInOutCirc: (t) =>
            (t /= 0.5) < 1
              ? -0.5 * (Math.sqrt(1 - t * t) - 1)
              : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
          easeInElastic: (t) => (Ut(t) ? t : Yt(t, 0.075, 0.3)),
          easeOutElastic: (t) => (Ut(t) ? t : qt(t, 0.075, 0.3)),
          easeInOutElastic(t) {
            const e = 0.1125;
            return Ut(t)
              ? t
              : t < 0.5
              ? 0.5 * Yt(2 * t, e, 0.45)
              : 0.5 + 0.5 * qt(2 * t - 1, e, 0.45);
          },
          easeInBack(t) {
            const e = 1.70158;
            return t * t * ((e + 1) * t - e);
          },
          easeOutBack(t) {
            const e = 1.70158;
            return (t -= 1) * t * ((e + 1) * t + e) + 1;
          },
          easeInOutBack(t) {
            let e = 1.70158;
            return (t /= 0.5) < 1
              ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
              : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
          },
          easeInBounce: (t) => 1 - Xt.easeOutBounce(1 - t),
          easeOutBounce(t) {
            const e = 7.5625,
              i = 2.75;
            return t < 1 / i
              ? e * t * t
              : t < 2 / i
              ? e * (t -= 1.5 / i) * t + 0.75
              : t < 2.5 / i
              ? e * (t -= 2.25 / i) * t + 0.9375
              : e * (t -= 2.625 / i) * t + 0.984375;
          },
          easeInOutBounce: (t) =>
            t < 0.5
              ? 0.5 * Xt.easeInBounce(2 * t)
              : 0.5 * Xt.easeOutBounce(2 * t - 1) + 0.5,
        };
      function Gt(t) {
        if (t && "object" == typeof t) {
          const e = t.toString();
          return (
            "[object CanvasPattern]" === e || "[object CanvasGradient]" === e
          );
        }
        return !1;
      }
      function Kt(t) {
        return Gt(t) ? t : new B(t);
      }
      function Jt(t) {
        return Gt(t) ? t : new B(t).saturate(0.5).darken(0.1).hexString();
      }
      const Zt = ["x", "y", "borderWidth", "radius", "tension"],
        Qt = ["color", "borderColor", "backgroundColor"];
      const te = new Map();
      function ee(t, e, i) {
        return (function (t, e) {
          e = e || {};
          const i = t + JSON.stringify(e);
          let s = te.get(i);
          return s || ((s = new Intl.NumberFormat(t, e)), te.set(i, s)), s;
        })(e, i).format(t);
      }
      const ie = {
        values: (t) => (j(t) ? t : "" + t),
        numeric(t, e, i) {
          if (0 === t) return "0";
          const s = this.chart.options.locale;
          let n,
            o = t;
          if (i.length > 1) {
            const e = Math.max(
              Math.abs(i[0].value),
              Math.abs(i[i.length - 1].value)
            );
            (e < 1e-4 || e > 1e15) && (n = "scientific"),
              (o = (function (t, e) {
                let i =
                  e.length > 3
                    ? e[2].value - e[1].value
                    : e[1].value - e[0].value;
                Math.abs(i) >= 1 &&
                  t !== Math.floor(t) &&
                  (i = t - Math.floor(t));
                return i;
              })(t, i));
          }
          const a = bt(Math.abs(o)),
            r = isNaN(a) ? 1 : Math.max(Math.min(-1 * Math.floor(a), 20), 0),
            h = {
              notation: n,
              minimumFractionDigits: r,
              maximumFractionDigits: r,
            };
          return Object.assign(h, this.options.ticks.format), ee(t, s, h);
        },
        logarithmic(t, e, i) {
          if (0 === t) return "0";
          const s = i[e].significand || t / Math.pow(10, Math.floor(bt(t)));
          return [1, 2, 3, 5, 10, 15].includes(s) || e > 0.8 * i.length
            ? ie.numeric.call(this, t, e, i)
            : "";
        },
      };
      var se = { formatters: ie };
      const ne = Object.create(null),
        oe = Object.create(null);
      function ae(t, e) {
        if (!e) return t;
        const i = e.split(".");
        for (let e = 0, s = i.length; e < s; ++e) {
          const s = i[e];
          t = t[s] || (t[s] = Object.create(null));
        }
        return t;
      }
      function re(t, e, i) {
        return "string" == typeof e ? tt(ae(t, e), i) : tt(ae(t, ""), e);
      }
      class he {
        constructor(t, e) {
          (this.animation = void 0),
            (this.backgroundColor = "rgba(0,0,0,0.1)"),
            (this.borderColor = "rgba(0,0,0,0.1)"),
            (this.color = "#666"),
            (this.datasets = {}),
            (this.devicePixelRatio = (t) =>
              t.chart.platform.getDevicePixelRatio()),
            (this.elements = {}),
            (this.events = [
              "mousemove",
              "mouseout",
              "click",
              "touchstart",
              "touchmove",
            ]),
            (this.font = {
              family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
              size: 12,
              style: "normal",
              lineHeight: 1.2,
              weight: null,
            }),
            (this.hover = {}),
            (this.hoverBackgroundColor = (t, e) => Jt(e.backgroundColor)),
            (this.hoverBorderColor = (t, e) => Jt(e.borderColor)),
            (this.hoverColor = (t, e) => Jt(e.color)),
            (this.indexAxis = "x"),
            (this.interaction = {
              mode: "nearest",
              intersect: !0,
              includeInvisible: !1,
            }),
            (this.maintainAspectRatio = !0),
            (this.onHover = null),
            (this.onClick = null),
            (this.parsing = !0),
            (this.plugins = {}),
            (this.responsive = !0),
            (this.scale = void 0),
            (this.scales = {}),
            (this.showLine = !0),
            (this.drawActiveElementsOnTop = !0),
            this.describe(t),
            this.apply(e);
        }
        set(t, e) {
          return re(this, t, e);
        }
        get(t) {
          return ae(this, t);
        }
        describe(t, e) {
          return re(oe, t, e);
        }
        override(t, e) {
          return re(ne, t, e);
        }
        route(t, e, i, s) {
          const n = ae(this, t),
            o = ae(this, i),
            a = "_" + e;
          Object.defineProperties(n, {
            [a]: { value: n[e], writable: !0 },
            [e]: {
              enumerable: !0,
              get() {
                const t = this[a],
                  e = o[s];
                return N(t) ? Object.assign({}, e, t) : Y(t, e);
              },
              set(t) {
                this[a] = t;
              },
            },
          });
        }
        apply(t) {
          t.forEach((t) => t(this));
        }
      }
      var le = new he(
        {
          _scriptable: (t) => !t.startsWith("on"),
          _indexable: (t) => "events" !== t,
          hover: { _fallback: "interaction" },
          interaction: { _scriptable: !1, _indexable: !1 },
        },
        [
          function (t) {
            t.set("animation", {
              delay: void 0,
              duration: 1e3,
              easing: "easeOutQuart",
              fn: void 0,
              from: void 0,
              loop: void 0,
              to: void 0,
              type: void 0,
            }),
              t.describe("animation", {
                _fallback: !1,
                _indexable: !1,
                _scriptable: (t) =>
                  "onProgress" !== t && "onComplete" !== t && "fn" !== t,
              }),
              t.set("animations", {
                colors: { type: "color", properties: Qt },
                numbers: { type: "number", properties: Zt },
              }),
              t.describe("animations", { _fallback: "animation" }),
              t.set("transitions", {
                active: { animation: { duration: 400 } },
                resize: { animation: { duration: 0 } },
                show: {
                  animations: {
                    colors: { from: "transparent" },
                    visible: { type: "boolean", duration: 0 },
                  },
                },
                hide: {
                  animations: {
                    colors: { to: "transparent" },
                    visible: {
                      type: "boolean",
                      easing: "linear",
                      fn: (t) => 0 | t,
                    },
                  },
                },
              });
          },
          function (t) {
            t.set("layout", {
              autoPadding: !0,
              padding: { top: 0, right: 0, bottom: 0, left: 0 },
            });
          },
          function (t) {
            t.set("scale", {
              display: !0,
              offset: !1,
              reverse: !1,
              beginAtZero: !1,
              bounds: "ticks",
              clip: !0,
              grace: 0,
              grid: {
                display: !0,
                lineWidth: 1,
                drawOnChartArea: !0,
                drawTicks: !0,
                tickLength: 8,
                tickWidth: (t, e) => e.lineWidth,
                tickColor: (t, e) => e.color,
                offset: !1,
              },
              border: { display: !0, dash: [], dashOffset: 0, width: 1 },
              title: { display: !1, text: "", padding: { top: 4, bottom: 4 } },
              ticks: {
                minRotation: 0,
                maxRotation: 50,
                mirror: !1,
                textStrokeWidth: 0,
                textStrokeColor: "",
                padding: 3,
                display: !0,
                autoSkip: !0,
                autoSkipPadding: 3,
                labelOffset: 0,
                callback: se.formatters.values,
                minor: {},
                major: {},
                align: "center",
                crossAlign: "near",
                showLabelBackdrop: !1,
                backdropColor: "rgba(255, 255, 255, 0.75)",
                backdropPadding: 2,
              },
            }),
              t.route("scale.ticks", "color", "", "color"),
              t.route("scale.grid", "color", "", "borderColor"),
              t.route("scale.border", "color", "", "borderColor"),
              t.route("scale.title", "color", "", "color"),
              t.describe("scale", {
                _fallback: !1,
                _scriptable: (t) =>
                  !t.startsWith("before") &&
                  !t.startsWith("after") &&
                  "callback" !== t &&
                  "parser" !== t,
                _indexable: (t) =>
                  "borderDash" !== t && "tickBorderDash" !== t && "dash" !== t,
              }),
              t.describe("scales", { _fallback: "scale" }),
              t.describe("scale.ticks", {
                _scriptable: (t) => "backdropPadding" !== t && "callback" !== t,
                _indexable: (t) => "backdropPadding" !== t,
              });
          },
        ]
      );
      function ce(t, e, i, s, n) {
        let o = e[n];
        return (
          o || ((o = e[n] = t.measureText(n).width), i.push(n)),
          o > s && (s = o),
          s
        );
      }
      function de(t, e, i) {
        const s = t.currentDevicePixelRatio,
          n = 0 !== i ? Math.max(i / 2, 0.5) : 0;
        return Math.round((e - n) * s) / s + n;
      }
      function ue(t, e) {
        (e = e || t.getContext("2d")).save(),
          e.resetTransform(),
          e.clearRect(0, 0, t.width, t.height),
          e.restore();
      }
      function pe(t, e, i, s) {
        fe(t, e, i, s, null);
      }
      function fe(t, e, i, s, n) {
        let o, a, r, h, l, c, d, u;
        const p = e.pointStyle,
          f = e.rotation,
          g = e.radius;
        let m = (f || 0) * pt;
        if (
          p &&
          "object" == typeof p &&
          ((o = p.toString()),
          "[object HTMLImageElement]" === o ||
            "[object HTMLCanvasElement]" === o)
        )
          return (
            t.save(),
            t.translate(i, s),
            t.rotate(m),
            t.drawImage(p, -p.width / 2, -p.height / 2, p.width, p.height),
            void t.restore()
          );
        if (!(isNaN(g) || g <= 0)) {
          switch ((t.beginPath(), p)) {
            default:
              n ? t.ellipse(i, s, n / 2, g, 0, 0, ct) : t.arc(i, s, g, 0, ct),
                t.closePath();
              break;
            case "triangle":
              (c = n ? n / 2 : g),
                t.moveTo(i + Math.sin(m) * c, s - Math.cos(m) * g),
                (m += mt),
                t.lineTo(i + Math.sin(m) * c, s - Math.cos(m) * g),
                (m += mt),
                t.lineTo(i + Math.sin(m) * c, s - Math.cos(m) * g),
                t.closePath();
              break;
            case "rectRounded":
              (l = 0.516 * g),
                (h = g - l),
                (a = Math.cos(m + gt) * h),
                (d = Math.cos(m + gt) * (n ? n / 2 - l : h)),
                (r = Math.sin(m + gt) * h),
                (u = Math.sin(m + gt) * (n ? n / 2 - l : h)),
                t.arc(i - d, s - r, l, m - lt, m - ft),
                t.arc(i + u, s - a, l, m - ft, m),
                t.arc(i + d, s + r, l, m, m + ft),
                t.arc(i - u, s + a, l, m + ft, m + lt),
                t.closePath();
              break;
            case "rect":
              if (!f) {
                (h = Math.SQRT1_2 * g),
                  (c = n ? n / 2 : h),
                  t.rect(i - c, s - h, 2 * c, 2 * h);
                break;
              }
              m += gt;
            case "rectRot":
              (d = Math.cos(m) * (n ? n / 2 : g)),
                (a = Math.cos(m) * g),
                (r = Math.sin(m) * g),
                (u = Math.sin(m) * (n ? n / 2 : g)),
                t.moveTo(i - d, s - r),
                t.lineTo(i + u, s - a),
                t.lineTo(i + d, s + r),
                t.lineTo(i - u, s + a),
                t.closePath();
              break;
            case "crossRot":
              m += gt;
            case "cross":
              (d = Math.cos(m) * (n ? n / 2 : g)),
                (a = Math.cos(m) * g),
                (r = Math.sin(m) * g),
                (u = Math.sin(m) * (n ? n / 2 : g)),
                t.moveTo(i - d, s - r),
                t.lineTo(i + d, s + r),
                t.moveTo(i + u, s - a),
                t.lineTo(i - u, s + a);
              break;
            case "star":
              (d = Math.cos(m) * (n ? n / 2 : g)),
                (a = Math.cos(m) * g),
                (r = Math.sin(m) * g),
                (u = Math.sin(m) * (n ? n / 2 : g)),
                t.moveTo(i - d, s - r),
                t.lineTo(i + d, s + r),
                t.moveTo(i + u, s - a),
                t.lineTo(i - u, s + a),
                (m += gt),
                (d = Math.cos(m) * (n ? n / 2 : g)),
                (a = Math.cos(m) * g),
                (r = Math.sin(m) * g),
                (u = Math.sin(m) * (n ? n / 2 : g)),
                t.moveTo(i - d, s - r),
                t.lineTo(i + d, s + r),
                t.moveTo(i + u, s - a),
                t.lineTo(i - u, s + a);
              break;
            case "line":
              (a = n ? n / 2 : Math.cos(m) * g),
                (r = Math.sin(m) * g),
                t.moveTo(i - a, s - r),
                t.lineTo(i + a, s + r);
              break;
            case "dash":
              t.moveTo(i, s),
                t.lineTo(
                  i + Math.cos(m) * (n ? n / 2 : g),
                  s + Math.sin(m) * g
                );
              break;
            case !1:
              t.closePath();
          }
          t.fill(), e.borderWidth > 0 && t.stroke();
        }
      }
      function ge(t, e, i) {
        return (
          (i = i || 0.5),
          !e ||
            (t &&
              t.x > e.left - i &&
              t.x < e.right + i &&
              t.y > e.top - i &&
              t.y < e.bottom + i)
        );
      }
      function me(t, e) {
        t.save(),
          t.beginPath(),
          t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
          t.clip();
      }
      function be(t) {
        t.restore();
      }
      function xe(t, e, i, s, n) {
        if (!e) return t.lineTo(i.x, i.y);
        if ("middle" === n) {
          const s = (e.x + i.x) / 2;
          t.lineTo(s, e.y), t.lineTo(s, i.y);
        } else ("after" === n) != !!s ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y);
        t.lineTo(i.x, i.y);
      }
      function _e(t, e, i, s) {
        if (!e) return t.lineTo(i.x, i.y);
        t.bezierCurveTo(
          s ? e.cp1x : e.cp2x,
          s ? e.cp1y : e.cp2y,
          s ? i.cp2x : i.cp1x,
          s ? i.cp2y : i.cp1y,
          i.x,
          i.y
        );
      }
      function ye(t, e, i, s, n) {
        if (n.strikethrough || n.underline) {
          const o = t.measureText(s),
            a = e - o.actualBoundingBoxLeft,
            r = e + o.actualBoundingBoxRight,
            h = i - o.actualBoundingBoxAscent,
            l = i + o.actualBoundingBoxDescent,
            c = n.strikethrough ? (h + l) / 2 : l;
          (t.strokeStyle = t.fillStyle),
            t.beginPath(),
            (t.lineWidth = n.decorationWidth || 2),
            t.moveTo(a, c),
            t.lineTo(r, c),
            t.stroke();
        }
      }
      function ve(t, e) {
        const i = t.fillStyle;
        (t.fillStyle = e.color),
          t.fillRect(e.left, e.top, e.width, e.height),
          (t.fillStyle = i);
      }
      function we(t, e, i, s, n, o = {}) {
        const a = j(e) ? e : [e],
          r = o.strokeWidth > 0 && "" !== o.strokeColor;
        let h, l;
        for (
          t.save(),
            t.font = n.string,
            (function (t, e) {
              e.translation && t.translate(e.translation[0], e.translation[1]),
                H(e.rotation) || t.rotate(e.rotation),
                e.color && (t.fillStyle = e.color),
                e.textAlign && (t.textAlign = e.textAlign),
                e.textBaseline && (t.textBaseline = e.textBaseline);
            })(t, o),
            h = 0;
          h < a.length;
          ++h
        )
          (l = a[h]),
            o.backdrop && ve(t, o.backdrop),
            r &&
              (o.strokeColor && (t.strokeStyle = o.strokeColor),
              H(o.strokeWidth) || (t.lineWidth = o.strokeWidth),
              t.strokeText(l, i, s, o.maxWidth)),
            t.fillText(l, i, s, o.maxWidth),
            ye(t, i, s, l, o),
            (s += Number(n.lineHeight));
        t.restore();
      }
      function ke(t, e) {
        const { x: i, y: s, w: n, h: o, radius: a } = e;
        t.arc(i + a.topLeft, s + a.topLeft, a.topLeft, 1.5 * lt, lt, !0),
          t.lineTo(i, s + o - a.bottomLeft),
          t.arc(
            i + a.bottomLeft,
            s + o - a.bottomLeft,
            a.bottomLeft,
            lt,
            ft,
            !0
          ),
          t.lineTo(i + n - a.bottomRight, s + o),
          t.arc(
            i + n - a.bottomRight,
            s + o - a.bottomRight,
            a.bottomRight,
            ft,
            0,
            !0
          ),
          t.lineTo(i + n, s + a.topRight),
          t.arc(i + n - a.topRight, s + a.topRight, a.topRight, 0, -ft, !0),
          t.lineTo(i + a.topLeft, s);
      }
      const Me = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
        Se =
          /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
      function Pe(t, e) {
        const i = ("" + t).match(Me);
        if (!i || "normal" === i[1]) return 1.2 * e;
        switch (((t = +i[2]), i[3])) {
          case "px":
            return t;
          case "%":
            t /= 100;
        }
        return e * t;
      }
      const Ce = (t) => +t || 0;
      function De(t, e) {
        const i = {},
          s = N(e),
          n = s ? Object.keys(e) : e,
          o = N(t) ? (s ? (i) => Y(t[i], t[e[i]]) : (e) => t[e]) : () => t;
        for (const t of n) i[t] = Ce(o(t));
        return i;
      }
      function Ae(t) {
        return De(t, { top: "y", right: "x", bottom: "y", left: "x" });
      }
      function Oe(t) {
        return De(t, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
      }
      function Le(t) {
        const e = Ae(t);
        return (e.width = e.left + e.right), (e.height = e.top + e.bottom), e;
      }
      function Te(t, e) {
        (t = t || {}), (e = e || le.font);
        let i = Y(t.size, e.size);
        "string" == typeof i && (i = parseInt(i, 10));
        let s = Y(t.style, e.style);
        s &&
          !("" + s).match(Se) &&
          (console.warn('Invalid font style specified: "' + s + '"'),
          (s = void 0));
        const n = {
          family: Y(t.family, e.family),
          lineHeight: Pe(Y(t.lineHeight, e.lineHeight), i),
          size: i,
          style: s,
          weight: Y(t.weight, e.weight),
          string: "",
        };
        return (
          (n.string = (function (t) {
            return !t || H(t.size) || H(t.family)
              ? null
              : (t.style ? t.style + " " : "") +
                  (t.weight ? t.weight + " " : "") +
                  t.size +
                  "px " +
                  t.family;
          })(n)),
          n
        );
      }
      function Ie(t, e, i, s) {
        let n,
          o,
          a,
          r = !0;
        for (n = 0, o = t.length; n < o; ++n)
          if (
            ((a = t[n]),
            void 0 !== a &&
              (void 0 !== e && "function" == typeof a && ((a = a(e)), (r = !1)),
              void 0 !== i && j(a) && ((a = a[i % a.length]), (r = !1)),
              void 0 !== a))
          )
            return s && !r && (s.cacheable = !1), a;
      }
      function Re(t, e) {
        return Object.assign(Object.create(t), e);
      }
      function Ee(t, e = [""], i, s, n = () => t[0]) {
        const o = i || t;
        void 0 === s && (s = Ye("_fallback", t));
        const a = {
          [Symbol.toStringTag]: "Object",
          _cacheable: !0,
          _scopes: t,
          _rootScopes: o,
          _fallback: s,
          _getTarget: n,
          override: (i) => Ee([i, ...t], e, o, s),
        };
        return new Proxy(a, {
          deleteProperty: (e, i) => (
            delete e[i], delete e._keys, delete t[0][i], !0
          ),
          get: (i, s) =>
            Ve(i, s, () =>
              (function (t, e, i, s) {
                let n;
                for (const o of e)
                  if (((n = Ye(Be(o, t), i)), void 0 !== n))
                    return We(t, n) ? $e(i, s, t, n) : n;
              })(s, e, t, i)
            ),
          getOwnPropertyDescriptor: (t, e) =>
            Reflect.getOwnPropertyDescriptor(t._scopes[0], e),
          getPrototypeOf: () => Reflect.getPrototypeOf(t[0]),
          has: (t, e) => qe(t).includes(e),
          ownKeys: (t) => qe(t),
          set(t, e, i) {
            const s = t._storage || (t._storage = n());
            return (t[e] = s[e] = i), delete t._keys, !0;
          },
        });
      }
      function ze(t, e, i, s) {
        const n = {
          _cacheable: !1,
          _proxy: t,
          _context: e,
          _subProxy: i,
          _stack: new Set(),
          _descriptors: Fe(t, s),
          setContext: (e) => ze(t, e, i, s),
          override: (n) => ze(t.override(n), e, i, s),
        };
        return new Proxy(n, {
          deleteProperty: (e, i) => (delete e[i], delete t[i], !0),
          get: (t, e, i) =>
            Ve(t, e, () =>
              (function (t, e, i) {
                const {
                  _proxy: s,
                  _context: n,
                  _subProxy: o,
                  _descriptors: a,
                } = t;
                let r = s[e];
                rt(r) &&
                  a.isScriptable(e) &&
                  (r = (function (t, e, i, s) {
                    const {
                      _proxy: n,
                      _context: o,
                      _subProxy: a,
                      _stack: r,
                    } = i;
                    if (r.has(t))
                      throw new Error(
                        "Recursion detected: " +
                          Array.from(r).join("->") +
                          "->" +
                          t
                      );
                    r.add(t);
                    let h = e(o, a || s);
                    r.delete(t), We(t, h) && (h = $e(n._scopes, n, t, h));
                    return h;
                  })(e, r, t, i));
                j(r) &&
                  r.length &&
                  (r = (function (t, e, i, s) {
                    const {
                      _proxy: n,
                      _context: o,
                      _subProxy: a,
                      _descriptors: r,
                    } = i;
                    if (void 0 !== o.index && s(t))
                      return e[o.index % e.length];
                    if (N(e[0])) {
                      const i = e,
                        s = n._scopes.filter((t) => t !== i);
                      e = [];
                      for (const h of i) {
                        const i = $e(s, n, t, h);
                        e.push(ze(i, o, a && a[t], r));
                      }
                    }
                    return e;
                  })(e, r, t, a.isIndexable));
                We(e, r) && (r = ze(r, n, o && o[e], a));
                return r;
              })(t, e, i)
            ),
          getOwnPropertyDescriptor: (e, i) =>
            e._descriptors.allKeys
              ? Reflect.has(t, i)
                ? { enumerable: !0, configurable: !0 }
                : void 0
              : Reflect.getOwnPropertyDescriptor(t, i),
          getPrototypeOf: () => Reflect.getPrototypeOf(t),
          has: (e, i) => Reflect.has(t, i),
          ownKeys: () => Reflect.ownKeys(t),
          set: (e, i, s) => ((t[i] = s), delete e[i], !0),
        });
      }
      function Fe(t, e = { scriptable: !0, indexable: !0 }) {
        const {
          _scriptable: i = e.scriptable,
          _indexable: s = e.indexable,
          _allKeys: n = e.allKeys,
        } = t;
        return {
          allKeys: n,
          scriptable: i,
          indexable: s,
          isScriptable: rt(i) ? i : () => i,
          isIndexable: rt(s) ? s : () => s,
        };
      }
      const Be = (t, e) => (t ? t + ot(e) : e),
        We = (t, e) =>
          N(e) &&
          "adapters" !== t &&
          (null === Object.getPrototypeOf(e) || e.constructor === Object);
      function Ve(t, e, i) {
        if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
        const s = i();
        return (t[e] = s), s;
      }
      function He(t, e, i) {
        return rt(t) ? t(e, i) : t;
      }
      const je = (t, e) =>
        !0 === t ? e : "string" == typeof t ? nt(e, t) : void 0;
      function Ne(t, e, i, s, n) {
        for (const o of e) {
          const e = je(i, o);
          if (e) {
            t.add(e);
            const o = He(e._fallback, i, n);
            if (void 0 !== o && o !== i && o !== s) return o;
          } else if (!1 === e && void 0 !== s && i !== s) return null;
        }
        return !1;
      }
      function $e(t, e, i, s) {
        const n = e._rootScopes,
          o = He(e._fallback, i, s),
          a = [...t, ...n],
          r = new Set();
        r.add(s);
        let h = Ue(r, a, i, o || i, s);
        return (
          null !== h &&
          (void 0 === o || o === i || ((h = Ue(r, a, o, h, s)), null !== h)) &&
          Ee(Array.from(r), [""], n, o, () =>
            (function (t, e, i) {
              const s = t._getTarget();
              e in s || (s[e] = {});
              const n = s[e];
              if (j(n) && N(i)) return i;
              return n || {};
            })(e, i, s)
          )
        );
      }
      function Ue(t, e, i, s, n) {
        for (; i; ) i = Ne(t, e, i, s, n);
        return i;
      }
      function Ye(t, e) {
        for (const i of e) {
          if (!i) continue;
          const e = i[t];
          if (void 0 !== e) return e;
        }
      }
      function qe(t) {
        let e = t._keys;
        return (
          e ||
            (e = t._keys =
              (function (t) {
                const e = new Set();
                for (const i of t)
                  for (const t of Object.keys(i).filter(
                    (t) => !t.startsWith("_")
                  ))
                    e.add(t);
                return Array.from(e);
              })(t._scopes)),
          e
        );
      }
      const Xe = Number.EPSILON || 1e-14,
        Ge = (t, e) => e < t.length && !t[e].skip && t[e],
        Ke = (t) => ("x" === t ? "y" : "x");
      function Je(t, e, i, s) {
        const n = t.skip ? e : t,
          o = e,
          a = i.skip ? e : i,
          r = Ct(o, n),
          h = Ct(a, o);
        let l = r / (r + h),
          c = h / (r + h);
        (l = isNaN(l) ? 0 : l), (c = isNaN(c) ? 0 : c);
        const d = s * l,
          u = s * c;
        return {
          previous: { x: o.x - d * (a.x - n.x), y: o.y - d * (a.y - n.y) },
          next: { x: o.x + u * (a.x - n.x), y: o.y + u * (a.y - n.y) },
        };
      }
      function Ze(t, e = "x") {
        const i = Ke(e),
          s = t.length,
          n = Array(s).fill(0),
          o = Array(s);
        let a,
          r,
          h,
          l = Ge(t, 0);
        for (a = 0; a < s; ++a)
          if (((r = h), (h = l), (l = Ge(t, a + 1)), h)) {
            if (l) {
              const t = l[e] - h[e];
              n[a] = 0 !== t ? (l[i] - h[i]) / t : 0;
            }
            o[a] = r
              ? l
                ? xt(n[a - 1]) !== xt(n[a])
                  ? 0
                  : (n[a - 1] + n[a]) / 2
                : n[a - 1]
              : n[a];
          }
        !(function (t, e, i) {
          const s = t.length;
          let n,
            o,
            a,
            r,
            h,
            l = Ge(t, 0);
          for (let c = 0; c < s - 1; ++c)
            (h = l),
              (l = Ge(t, c + 1)),
              h &&
                l &&
                (_t(e[c], 0, Xe)
                  ? (i[c] = i[c + 1] = 0)
                  : ((n = i[c] / e[c]),
                    (o = i[c + 1] / e[c]),
                    (r = Math.pow(n, 2) + Math.pow(o, 2)),
                    r <= 9 ||
                      ((a = 3 / Math.sqrt(r)),
                      (i[c] = n * a * e[c]),
                      (i[c + 1] = o * a * e[c]))));
        })(t, n, o),
          (function (t, e, i = "x") {
            const s = Ke(i),
              n = t.length;
            let o,
              a,
              r,
              h = Ge(t, 0);
            for (let l = 0; l < n; ++l) {
              if (((a = r), (r = h), (h = Ge(t, l + 1)), !r)) continue;
              const n = r[i],
                c = r[s];
              a &&
                ((o = (n - a[i]) / 3),
                (r[`cp1${i}`] = n - o),
                (r[`cp1${s}`] = c - o * e[l])),
                h &&
                  ((o = (h[i] - n) / 3),
                  (r[`cp2${i}`] = n + o),
                  (r[`cp2${s}`] = c + o * e[l]));
            }
          })(t, o, e);
      }
      function Qe(t, e, i) {
        return Math.max(Math.min(t, i), e);
      }
      function ti(t, e, i, s, n) {
        let o, a, r, h;
        if (
          (e.spanGaps && (t = t.filter((t) => !t.skip)),
          "monotone" === e.cubicInterpolationMode)
        )
          Ze(t, n);
        else {
          let i = s ? t[t.length - 1] : t[0];
          for (o = 0, a = t.length; o < a; ++o)
            (r = t[o]),
              (h = Je(
                i,
                r,
                t[Math.min(o + 1, a - (s ? 0 : 1)) % a],
                e.tension
              )),
              (r.cp1x = h.previous.x),
              (r.cp1y = h.previous.y),
              (r.cp2x = h.next.x),
              (r.cp2y = h.next.y),
              (i = r);
        }
        e.capBezierPoints &&
          (function (t, e) {
            let i,
              s,
              n,
              o,
              a,
              r = ge(t[0], e);
            for (i = 0, s = t.length; i < s; ++i)
              (a = o),
                (o = r),
                (r = i < s - 1 && ge(t[i + 1], e)),
                o &&
                  ((n = t[i]),
                  a &&
                    ((n.cp1x = Qe(n.cp1x, e.left, e.right)),
                    (n.cp1y = Qe(n.cp1y, e.top, e.bottom))),
                  r &&
                    ((n.cp2x = Qe(n.cp2x, e.left, e.right)),
                    (n.cp2y = Qe(n.cp2y, e.top, e.bottom))));
          })(t, i);
      }
      function ei() {
        return "undefined" != typeof window && "undefined" != typeof document;
      }
      function ii(t) {
        let e = t.parentNode;
        return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e;
      }
      function si(t, e, i) {
        let s;
        return (
          "string" == typeof t
            ? ((s = parseInt(t, 10)),
              -1 !== t.indexOf("%") && (s = (s / 100) * e.parentNode[i]))
            : (s = t),
          s
        );
      }
      const ni = (t) => t.ownerDocument.defaultView.getComputedStyle(t, null);
      const oi = ["top", "right", "bottom", "left"];
      function ai(t, e, i) {
        const s = {};
        i = i ? "-" + i : "";
        for (let n = 0; n < 4; n++) {
          const o = oi[n];
          s[o] = parseFloat(t[e + "-" + o + i]) || 0;
        }
        return (s.width = s.left + s.right), (s.height = s.top + s.bottom), s;
      }
      const ri = (t, e, i) => (t > 0 || e > 0) && (!i || !i.shadowRoot);
      function hi(t, e) {
        if ("native" in t) return t;
        const { canvas: i, currentDevicePixelRatio: s } = e,
          n = ni(i),
          o = "border-box" === n.boxSizing,
          a = ai(n, "padding"),
          r = ai(n, "border", "width"),
          {
            x: h,
            y: l,
            box: c,
          } = (function (t, e) {
            const i = t.touches,
              s = i && i.length ? i[0] : t,
              { offsetX: n, offsetY: o } = s;
            let a,
              r,
              h = !1;
            if (ri(n, o, t.target)) (a = n), (r = o);
            else {
              const t = e.getBoundingClientRect();
              (a = s.clientX - t.left), (r = s.clientY - t.top), (h = !0);
            }
            return { x: a, y: r, box: h };
          })(t, i),
          d = a.left + (c && r.left),
          u = a.top + (c && r.top);
        let { width: p, height: f } = e;
        return (
          o && ((p -= a.width + r.width), (f -= a.height + r.height)),
          {
            x: Math.round((((h - d) / p) * i.width) / s),
            y: Math.round((((l - u) / f) * i.height) / s),
          }
        );
      }
      const li = (t) => Math.round(10 * t) / 10;
      function ci(t, e, i, s) {
        const n = ni(t),
          o = ai(n, "margin"),
          a = si(n.maxWidth, t, "clientWidth") || ut,
          r = si(n.maxHeight, t, "clientHeight") || ut,
          h = (function (t, e, i) {
            let s, n;
            if (void 0 === e || void 0 === i) {
              const o = ii(t);
              if (o) {
                const t = o.getBoundingClientRect(),
                  a = ni(o),
                  r = ai(a, "border", "width"),
                  h = ai(a, "padding");
                (e = t.width - h.width - r.width),
                  (i = t.height - h.height - r.height),
                  (s = si(a.maxWidth, o, "clientWidth")),
                  (n = si(a.maxHeight, o, "clientHeight"));
              } else (e = t.clientWidth), (i = t.clientHeight);
            }
            return {
              width: e,
              height: i,
              maxWidth: s || ut,
              maxHeight: n || ut,
            };
          })(t, e, i);
        let { width: l, height: c } = h;
        if ("content-box" === n.boxSizing) {
          const t = ai(n, "border", "width"),
            e = ai(n, "padding");
          (l -= e.width + t.width), (c -= e.height + t.height);
        }
        (l = Math.max(0, l - o.width)),
          (c = Math.max(0, s ? l / s : c - o.height)),
          (l = li(Math.min(l, a, h.maxWidth))),
          (c = li(Math.min(c, r, h.maxHeight))),
          l && !c && (c = li(l / 2));
        return (
          (void 0 !== e || void 0 !== i) &&
            s &&
            h.height &&
            c > h.height &&
            ((c = h.height), (l = li(Math.floor(c * s)))),
          { width: l, height: c }
        );
      }
      function di(t, e, i) {
        const s = e || 1,
          n = Math.floor(t.height * s),
          o = Math.floor(t.width * s);
        (t.height = Math.floor(t.height)), (t.width = Math.floor(t.width));
        const a = t.canvas;
        return (
          a.style &&
            (i || (!a.style.height && !a.style.width)) &&
            ((a.style.height = `${t.height}px`),
            (a.style.width = `${t.width}px`)),
          (t.currentDevicePixelRatio !== s ||
            a.height !== n ||
            a.width !== o) &&
            ((t.currentDevicePixelRatio = s),
            (a.height = n),
            (a.width = o),
            t.ctx.setTransform(s, 0, 0, s, 0, 0),
            !0)
        );
      }
      const ui = (function () {
        let t = !1;
        try {
          const e = {
            get passive() {
              return (t = !0), !1;
            },
          };
          window.addEventListener("test", null, e),
            window.removeEventListener("test", null, e);
        } catch (t) {}
        return t;
      })();
      function pi(t, e) {
        const i = (function (t, e) {
            return ni(t).getPropertyValue(e);
          })(t, e),
          s = i && i.match(/^(\d+)(\.\d+)?px$/);
        return s ? +s[1] : void 0;
      }
      function fi(t, e, i, s) {
        return { x: t.x + i * (e.x - t.x), y: t.y + i * (e.y - t.y) };
      }
      function gi(t, e, i, s) {
        return {
          x: t.x + i * (e.x - t.x),
          y:
            "middle" === s
              ? i < 0.5
                ? t.y
                : e.y
              : "after" === s
              ? i < 1
                ? t.y
                : e.y
              : i > 0
              ? e.y
              : t.y,
        };
      }
      function mi(t, e, i, s) {
        const n = { x: t.cp2x, y: t.cp2y },
          o = { x: e.cp1x, y: e.cp1y },
          a = fi(t, n, i),
          r = fi(n, o, i),
          h = fi(o, e, i),
          l = fi(a, r, i),
          c = fi(r, h, i);
        return fi(l, c, i);
      }
      const bi = function (t, e) {
          return {
            x: (i) => t + t + e - i,
            setWidth(t) {
              e = t;
            },
            textAlign: (t) =>
              "center" === t ? t : "right" === t ? "left" : "right",
            xPlus: (t, e) => t - e,
            leftForLtr: (t, e) => t - e,
          };
        },
        xi = function () {
          return {
            x: (t) => t,
            setWidth(t) {},
            textAlign: (t) => t,
            xPlus: (t, e) => t + e,
            leftForLtr: (t, e) => t,
          };
        };
      function _i(t, e, i) {
        return t ? bi(e, i) : xi();
      }
      function yi(t, e) {
        let i, s;
        ("ltr" !== e && "rtl" !== e) ||
          ((i = t.canvas.style),
          (s = [
            i.getPropertyValue("direction"),
            i.getPropertyPriority("direction"),
          ]),
          i.setProperty("direction", e, "important"),
          (t.prevTextDirection = s));
      }
      function vi(t, e) {
        void 0 !== e &&
          (delete t.prevTextDirection,
          t.canvas.style.setProperty("direction", e[0], e[1]));
      }
      function wi(t) {
        return "angle" === t
          ? { between: Ot, compare: Dt, normalize: At }
          : { between: Tt, compare: (t, e) => t - e, normalize: (t) => t };
      }
      function ki({ start: t, end: e, count: i, loop: s, style: n }) {
        return {
          start: t % i,
          end: e % i,
          loop: s && (e - t + 1) % i == 0,
          style: n,
        };
      }
      function Mi(t, e, i) {
        if (!i) return [t];
        const { property: s, start: n, end: o } = i,
          a = e.length,
          { compare: r, between: h, normalize: l } = wi(s),
          {
            start: c,
            end: d,
            loop: u,
            style: p,
          } = (function (t, e, i) {
            const { property: s, start: n, end: o } = i,
              { between: a, normalize: r } = wi(s),
              h = e.length;
            let l,
              c,
              { start: d, end: u, loop: p } = t;
            if (p) {
              for (
                d += h, u += h, l = 0, c = h;
                l < c && a(r(e[d % h][s]), n, o);
                ++l
              )
                d--, u--;
              (d %= h), (u %= h);
            }
            return (
              u < d && (u += h), { start: d, end: u, loop: p, style: t.style }
            );
          })(t, e, i),
          f = [];
        let g,
          m,
          b,
          x = !1,
          _ = null;
        const y = () => x || (h(n, b, g) && 0 !== r(n, b)),
          v = () => !x || 0 === r(o, g) || h(o, b, g);
        for (let t = c, i = c; t <= d; ++t)
          (m = e[t % a]),
            m.skip ||
              ((g = l(m[s])),
              g !== b &&
                ((x = h(g, n, o)),
                null === _ && y() && (_ = 0 === r(g, n) ? t : i),
                null !== _ &&
                  v() &&
                  (f.push(
                    ki({ start: _, end: t, loop: u, count: a, style: p })
                  ),
                  (_ = null)),
                (i = t),
                (b = g)));
        return (
          null !== _ &&
            f.push(ki({ start: _, end: d, loop: u, count: a, style: p })),
          f
        );
      }
      function Si(t, e) {
        const i = [],
          s = t.segments;
        for (let n = 0; n < s.length; n++) {
          const o = Mi(s[n], t.points, e);
          o.length && i.push(...o);
        }
        return i;
      }
      function Pi(t, e, i, s) {
        return s && s.setContext && i
          ? (function (t, e, i, s) {
              const n = t._chart.getContext(),
                o = Ci(t.options),
                {
                  _datasetIndex: a,
                  options: { spanGaps: r },
                } = t,
                h = i.length,
                l = [];
              let c = o,
                d = e[0].start,
                u = d;
              function p(t, e, s, n) {
                const o = r ? -1 : 1;
                if (t !== e) {
                  for (t += h; i[t % h].skip; ) t -= o;
                  for (; i[e % h].skip; ) e += o;
                  t % h != e % h &&
                    (l.push({ start: t % h, end: e % h, loop: s, style: n }),
                    (c = n),
                    (d = e % h));
                }
              }
              for (const t of e) {
                d = r ? d : t.start;
                let e,
                  o = i[d % h];
                for (u = d + 1; u <= t.end; u++) {
                  const r = i[u % h];
                  (e = Ci(
                    s.setContext(
                      Re(n, {
                        type: "segment",
                        p0: o,
                        p1: r,
                        p0DataIndex: (u - 1) % h,
                        p1DataIndex: u % h,
                        datasetIndex: a,
                      })
                    )
                  )),
                    Di(e, c) && p(d, u - 1, t.loop, c),
                    (o = r),
                    (c = e);
                }
                d < u - 1 && p(d, u - 1, t.loop, c);
              }
              return l;
            })(t, e, i, s)
          : e;
      }
      function Ci(t) {
        return {
          backgroundColor: t.backgroundColor,
          borderCapStyle: t.borderCapStyle,
          borderDash: t.borderDash,
          borderDashOffset: t.borderDashOffset,
          borderJoinStyle: t.borderJoinStyle,
          borderWidth: t.borderWidth,
          borderColor: t.borderColor,
        };
      }
      function Di(t, e) {
        if (!e) return !1;
        const i = [],
          s = function (t, e) {
            return Gt(e) ? (i.includes(e) || i.push(e), i.indexOf(e)) : e;
          };
        return JSON.stringify(t, s) !== JSON.stringify(e, s);
      }
      /*!
       * Chart.js v4.4.0
       * https://www.chartjs.org
       * (c) 2023 Chart.js Contributors
       * Released under the MIT License
       */
      class Ai {
        constructor() {
          (this._request = null),
            (this._charts = new Map()),
            (this._running = !1),
            (this._lastDate = void 0);
        }
        _notify(t, e, i, s) {
          const n = e.listeners[s],
            o = e.duration;
          n.forEach((s) =>
            s({
              chart: t,
              initial: e.initial,
              numSteps: o,
              currentStep: Math.min(i - e.start, o),
            })
          );
        }
        _refresh() {
          this._request ||
            ((this._running = !0),
            (this._request = Wt.call(window, () => {
              this._update(),
                (this._request = null),
                this._running && this._refresh();
            })));
        }
        _update(t = Date.now()) {
          let e = 0;
          this._charts.forEach((i, s) => {
            if (!i.running || !i.items.length) return;
            const n = i.items;
            let o,
              a = n.length - 1,
              r = !1;
            for (; a >= 0; --a)
              (o = n[a]),
                o._active
                  ? (o._total > i.duration && (i.duration = o._total),
                    o.tick(t),
                    (r = !0))
                  : ((n[a] = n[n.length - 1]), n.pop());
            r && (s.draw(), this._notify(s, i, t, "progress")),
              n.length ||
                ((i.running = !1),
                this._notify(s, i, t, "complete"),
                (i.initial = !1)),
              (e += n.length);
          }),
            (this._lastDate = t),
            0 === e && (this._running = !1);
        }
        _getAnims(t) {
          const e = this._charts;
          let i = e.get(t);
          return (
            i ||
              ((i = {
                running: !1,
                initial: !0,
                items: [],
                listeners: { complete: [], progress: [] },
              }),
              e.set(t, i)),
            i
          );
        }
        listen(t, e, i) {
          this._getAnims(t).listeners[e].push(i);
        }
        add(t, e) {
          e && e.length && this._getAnims(t).items.push(...e);
        }
        has(t) {
          return this._getAnims(t).items.length > 0;
        }
        start(t) {
          const e = this._charts.get(t);
          e &&
            ((e.running = !0),
            (e.start = Date.now()),
            (e.duration = e.items.reduce(
              (t, e) => Math.max(t, e._duration),
              0
            )),
            this._refresh());
        }
        running(t) {
          if (!this._running) return !1;
          const e = this._charts.get(t);
          return !!(e && e.running && e.items.length);
        }
        stop(t) {
          const e = this._charts.get(t);
          if (!e || !e.items.length) return;
          const i = e.items;
          let s = i.length - 1;
          for (; s >= 0; --s) i[s].cancel();
          (e.items = []), this._notify(t, e, Date.now(), "complete");
        }
        remove(t) {
          return this._charts.delete(t);
        }
      }
      var Oi = new Ai();
      const Li = "transparent",
        Ti = {
          boolean: (t, e, i) => (i > 0.5 ? e : t),
          color(t, e, i) {
            const s = Kt(t || Li),
              n = s.valid && Kt(e || Li);
            return n && n.valid ? n.mix(s, i).hexString() : e;
          },
          number: (t, e, i) => t + (e - t) * i,
        };
      class Ii {
        constructor(t, e, i, s) {
          const n = e[i];
          s = Ie([t.to, s, n, t.from]);
          const o = Ie([t.from, n, s]);
          (this._active = !0),
            (this._fn = t.fn || Ti[t.type || typeof o]),
            (this._easing = Xt[t.easing] || Xt.linear),
            (this._start = Math.floor(Date.now() + (t.delay || 0))),
            (this._duration = this._total = Math.floor(t.duration)),
            (this._loop = !!t.loop),
            (this._target = e),
            (this._prop = i),
            (this._from = o),
            (this._to = s),
            (this._promises = void 0);
        }
        active() {
          return this._active;
        }
        update(t, e, i) {
          if (this._active) {
            this._notify(!1);
            const s = this._target[this._prop],
              n = i - this._start,
              o = this._duration - n;
            (this._start = i),
              (this._duration = Math.floor(Math.max(o, t.duration))),
              (this._total += n),
              (this._loop = !!t.loop),
              (this._to = Ie([t.to, e, s, t.from])),
              (this._from = Ie([t.from, s, e]));
          }
        }
        cancel() {
          this._active &&
            (this.tick(Date.now()), (this._active = !1), this._notify(!1));
        }
        tick(t) {
          const e = t - this._start,
            i = this._duration,
            s = this._prop,
            n = this._from,
            o = this._loop,
            a = this._to;
          let r;
          if (((this._active = n !== a && (o || e < i)), !this._active))
            return (this._target[s] = a), void this._notify(!0);
          e < 0
            ? (this._target[s] = n)
            : ((r = (e / i) % 2),
              (r = o && r > 1 ? 2 - r : r),
              (r = this._easing(Math.min(1, Math.max(0, r)))),
              (this._target[s] = this._fn(n, a, r)));
        }
        wait() {
          const t = this._promises || (this._promises = []);
          return new Promise((e, i) => {
            t.push({ res: e, rej: i });
          });
        }
        _notify(t) {
          const e = t ? "res" : "rej",
            i = this._promises || [];
          for (let t = 0; t < i.length; t++) i[t][e]();
        }
      }
      class Ri {
        constructor(t, e) {
          (this._chart = t), (this._properties = new Map()), this.configure(e);
        }
        configure(t) {
          if (!N(t)) return;
          const e = Object.keys(le.animation),
            i = this._properties;
          Object.getOwnPropertyNames(t).forEach((s) => {
            const n = t[s];
            if (!N(n)) return;
            const o = {};
            for (const t of e) o[t] = n[t];
            ((j(n.properties) && n.properties) || [s]).forEach((t) => {
              (t !== s && i.has(t)) || i.set(t, o);
            });
          });
        }
        _animateOptions(t, e) {
          const i = e.options,
            s = (function (t, e) {
              if (!e) return;
              let i = t.options;
              if (!i) return void (t.options = e);
              i.$shared &&
                (t.options = i =
                  Object.assign({}, i, { $shared: !1, $animations: {} }));
              return i;
            })(t, i);
          if (!s) return [];
          const n = this._createAnimations(s, i);
          return (
            i.$shared &&
              (function (t, e) {
                const i = [],
                  s = Object.keys(e);
                for (let e = 0; e < s.length; e++) {
                  const n = t[s[e]];
                  n && n.active() && i.push(n.wait());
                }
                return Promise.all(i);
              })(t.options.$animations, i).then(
                () => {
                  t.options = i;
                },
                () => {}
              ),
            n
          );
        }
        _createAnimations(t, e) {
          const i = this._properties,
            s = [],
            n = t.$animations || (t.$animations = {}),
            o = Object.keys(e),
            a = Date.now();
          let r;
          for (r = o.length - 1; r >= 0; --r) {
            const h = o[r];
            if ("$" === h.charAt(0)) continue;
            if ("options" === h) {
              s.push(...this._animateOptions(t, e));
              continue;
            }
            const l = e[h];
            let c = n[h];
            const d = i.get(h);
            if (c) {
              if (d && c.active()) {
                c.update(d, l, a);
                continue;
              }
              c.cancel();
            }
            d && d.duration
              ? ((n[h] = c = new Ii(d, t, h, l)), s.push(c))
              : (t[h] = l);
          }
          return s;
        }
        update(t, e) {
          if (0 === this._properties.size) return void Object.assign(t, e);
          const i = this._createAnimations(t, e);
          return i.length ? (Oi.add(this._chart, i), !0) : void 0;
        }
      }
      function Ei(t, e) {
        const i = (t && t.options) || {},
          s = i.reverse,
          n = void 0 === i.min ? e : 0,
          o = void 0 === i.max ? e : 0;
        return { start: s ? o : n, end: s ? n : o };
      }
      function zi(t, e) {
        const i = [],
          s = t._getSortedDatasetMetas(e);
        let n, o;
        for (n = 0, o = s.length; n < o; ++n) i.push(s[n].index);
        return i;
      }
      function Fi(t, e, i, s = {}) {
        const n = t.keys,
          o = "single" === s.mode;
        let a, r, h, l;
        if (null !== e) {
          for (a = 0, r = n.length; a < r; ++a) {
            if (((h = +n[a]), h === i)) {
              if (s.all) continue;
              break;
            }
            (l = t.values[h]),
              $(l) && (o || 0 === e || xt(e) === xt(l)) && (e += l);
          }
          return e;
        }
      }
      function Bi(t, e) {
        const i = t && t.options.stacked;
        return i || (void 0 === i && void 0 !== e.stack);
      }
      function Wi(t, e, i) {
        const s = t[e] || (t[e] = {});
        return s[i] || (s[i] = {});
      }
      function Vi(t, e, i, s) {
        for (const n of e.getMatchingVisibleMetas(s).reverse()) {
          const e = t[n.index];
          if ((i && e > 0) || (!i && e < 0)) return n.index;
        }
        return null;
      }
      function Hi(t, e) {
        const { chart: i, _cachedMeta: s } = t,
          n = i._stacks || (i._stacks = {}),
          { iScale: o, vScale: a, index: r } = s,
          h = o.axis,
          l = a.axis,
          c = (function (t, e, i) {
            return `${t.id}.${e.id}.${i.stack || i.type}`;
          })(o, a, s),
          d = e.length;
        let u;
        for (let t = 0; t < d; ++t) {
          const i = e[t],
            { [h]: o, [l]: d } = i;
          (u = (i._stacks || (i._stacks = {}))[l] = Wi(n, c, o)),
            (u[r] = d),
            (u._top = Vi(u, a, !0, s.type)),
            (u._bottom = Vi(u, a, !1, s.type));
          (u._visualValues || (u._visualValues = {}))[r] = d;
        }
      }
      function ji(t, e) {
        const i = t.scales;
        return Object.keys(i)
          .filter((t) => i[t].axis === e)
          .shift();
      }
      function Ni(t, e) {
        const i = t.controller.index,
          s = t.vScale && t.vScale.axis;
        if (s) {
          e = e || t._parsed;
          for (const t of e) {
            const e = t._stacks;
            if (!e || void 0 === e[s] || void 0 === e[s][i]) return;
            delete e[s][i],
              void 0 !== e[s]._visualValues &&
                void 0 !== e[s]._visualValues[i] &&
                delete e[s]._visualValues[i];
          }
        }
      }
      const $i = (t) => "reset" === t || "none" === t,
        Ui = (t, e) => (e ? t : Object.assign({}, t));
      class Yi {
        static defaults = {};
        static datasetElementType = null;
        static dataElementType = null;
        constructor(t, e) {
          (this.chart = t),
            (this._ctx = t.ctx),
            (this.index = e),
            (this._cachedDataOpts = {}),
            (this._cachedMeta = this.getMeta()),
            (this._type = this._cachedMeta.type),
            (this.options = void 0),
            (this._parsing = !1),
            (this._data = void 0),
            (this._objectData = void 0),
            (this._sharedOptions = void 0),
            (this._drawStart = void 0),
            (this._drawCount = void 0),
            (this.enableOptionSharing = !1),
            (this.supportsDecimation = !1),
            (this.$context = void 0),
            (this._syncList = []),
            (this.datasetElementType = new.target.datasetElementType),
            (this.dataElementType = new.target.dataElementType),
            this.initialize();
        }
        initialize() {
          const t = this._cachedMeta;
          this.configure(),
            this.linkScales(),
            (t._stacked = Bi(t.vScale, t)),
            this.addElements(),
            this.options.fill &&
              !this.chart.isPluginEnabled("filler") &&
              console.warn(
                "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options"
              );
        }
        updateIndex(t) {
          this.index !== t && Ni(this._cachedMeta), (this.index = t);
        }
        linkScales() {
          const t = this.chart,
            e = this._cachedMeta,
            i = this.getDataset(),
            s = (t, e, i, s) => ("x" === t ? e : "r" === t ? s : i),
            n = (e.xAxisID = Y(i.xAxisID, ji(t, "x"))),
            o = (e.yAxisID = Y(i.yAxisID, ji(t, "y"))),
            a = (e.rAxisID = Y(i.rAxisID, ji(t, "r"))),
            r = e.indexAxis,
            h = (e.iAxisID = s(r, n, o, a)),
            l = (e.vAxisID = s(r, o, n, a));
          (e.xScale = this.getScaleForId(n)),
            (e.yScale = this.getScaleForId(o)),
            (e.rScale = this.getScaleForId(a)),
            (e.iScale = this.getScaleForId(h)),
            (e.vScale = this.getScaleForId(l));
        }
        getDataset() {
          return this.chart.data.datasets[this.index];
        }
        getMeta() {
          return this.chart.getDatasetMeta(this.index);
        }
        getScaleForId(t) {
          return this.chart.scales[t];
        }
        _getOtherScale(t) {
          const e = this._cachedMeta;
          return t === e.iScale ? e.vScale : e.iScale;
        }
        reset() {
          this._update("reset");
        }
        _destroy() {
          const t = this._cachedMeta;
          this._data && Ft(this._data, this), t._stacked && Ni(t);
        }
        _dataCheck() {
          const t = this.getDataset(),
            e = t.data || (t.data = []),
            i = this._data;
          if (N(e))
            this._data = (function (t) {
              const e = Object.keys(t),
                i = new Array(e.length);
              let s, n, o;
              for (s = 0, n = e.length; s < n; ++s)
                (o = e[s]), (i[s] = { x: o, y: t[o] });
              return i;
            })(e);
          else if (i !== e) {
            if (i) {
              Ft(i, this);
              const t = this._cachedMeta;
              Ni(t), (t._parsed = []);
            }
            e &&
              Object.isExtensible(e) &&
              ((n = this),
              (s = e)._chartjs
                ? s._chartjs.listeners.push(n)
                : (Object.defineProperty(s, "_chartjs", {
                    configurable: !0,
                    enumerable: !1,
                    value: { listeners: [n] },
                  }),
                  zt.forEach((t) => {
                    const e = "_onData" + ot(t),
                      i = s[t];
                    Object.defineProperty(s, t, {
                      configurable: !0,
                      enumerable: !1,
                      value(...t) {
                        const n = i.apply(this, t);
                        return (
                          s._chartjs.listeners.forEach((i) => {
                            "function" == typeof i[e] && i[e](...t);
                          }),
                          n
                        );
                      },
                    });
                  }))),
              (this._syncList = []),
              (this._data = e);
          }
          var s, n;
        }
        addElements() {
          const t = this._cachedMeta;
          this._dataCheck(),
            this.datasetElementType &&
              (t.dataset = new this.datasetElementType());
        }
        buildOrUpdateElements(t) {
          const e = this._cachedMeta,
            i = this.getDataset();
          let s = !1;
          this._dataCheck();
          const n = e._stacked;
          (e._stacked = Bi(e.vScale, e)),
            e.stack !== i.stack && ((s = !0), Ni(e), (e.stack = i.stack)),
            this._resyncElements(t),
            (s || n !== e._stacked) && Hi(this, e._parsed);
        }
        configure() {
          const t = this.chart.config,
            e = t.datasetScopeKeys(this._type),
            i = t.getOptionScopes(this.getDataset(), e, !0);
          (this.options = t.createResolver(i, this.getContext())),
            (this._parsing = this.options.parsing),
            (this._cachedDataOpts = {});
        }
        parse(t, e) {
          const { _cachedMeta: i, _data: s } = this,
            { iScale: n, _stacked: o } = i,
            a = n.axis;
          let r,
            h,
            l,
            c = (0 === t && e === s.length) || i._sorted,
            d = t > 0 && i._parsed[t - 1];
          if (!1 === this._parsing) (i._parsed = s), (i._sorted = !0), (l = s);
          else {
            l = j(s[t])
              ? this.parseArrayData(i, s, t, e)
              : N(s[t])
              ? this.parseObjectData(i, s, t, e)
              : this.parsePrimitiveData(i, s, t, e);
            const n = () => null === h[a] || (d && h[a] < d[a]);
            for (r = 0; r < e; ++r)
              (i._parsed[r + t] = h = l[r]), c && (n() && (c = !1), (d = h));
            i._sorted = c;
          }
          o && Hi(this, l);
        }
        parsePrimitiveData(t, e, i, s) {
          const { iScale: n, vScale: o } = t,
            a = n.axis,
            r = o.axis,
            h = n.getLabels(),
            l = n === o,
            c = new Array(s);
          let d, u, p;
          for (d = 0, u = s; d < u; ++d)
            (p = d + i),
              (c[d] = { [a]: l || n.parse(h[p], p), [r]: o.parse(e[p], p) });
          return c;
        }
        parseArrayData(t, e, i, s) {
          const { xScale: n, yScale: o } = t,
            a = new Array(s);
          let r, h, l, c;
          for (r = 0, h = s; r < h; ++r)
            (l = r + i),
              (c = e[l]),
              (a[r] = { x: n.parse(c[0], l), y: o.parse(c[1], l) });
          return a;
        }
        parseObjectData(t, e, i, s) {
          const { xScale: n, yScale: o } = t,
            { xAxisKey: a = "x", yAxisKey: r = "y" } = this._parsing,
            h = new Array(s);
          let l, c, d, u;
          for (l = 0, c = s; l < c; ++l)
            (d = l + i),
              (u = e[d]),
              (h[l] = { x: n.parse(nt(u, a), d), y: o.parse(nt(u, r), d) });
          return h;
        }
        getParsed(t) {
          return this._cachedMeta._parsed[t];
        }
        getDataElement(t) {
          return this._cachedMeta.data[t];
        }
        applyStack(t, e, i) {
          const s = this.chart,
            n = this._cachedMeta,
            o = e[t.axis];
          return Fi(
            { keys: zi(s, !0), values: e._stacks[t.axis]._visualValues },
            o,
            n.index,
            { mode: i }
          );
        }
        updateRangeFromParsed(t, e, i, s) {
          const n = i[e.axis];
          let o = null === n ? NaN : n;
          const a = s && i._stacks[e.axis];
          s && a && ((s.values = a), (o = Fi(s, n, this._cachedMeta.index))),
            (t.min = Math.min(t.min, o)),
            (t.max = Math.max(t.max, o));
        }
        getMinMax(t, e) {
          const i = this._cachedMeta,
            s = i._parsed,
            n = i._sorted && t === i.iScale,
            o = s.length,
            a = this._getOtherScale(t),
            r = ((t, e, i) =>
              t &&
              !e.hidden &&
              e._stacked && { keys: zi(i, !0), values: null })(
              e,
              i,
              this.chart
            ),
            h = {
              min: Number.POSITIVE_INFINITY,
              max: Number.NEGATIVE_INFINITY,
            },
            { min: l, max: c } = (function (t) {
              const {
                min: e,
                max: i,
                minDefined: s,
                maxDefined: n,
              } = t.getUserBounds();
              return {
                min: s ? e : Number.NEGATIVE_INFINITY,
                max: n ? i : Number.POSITIVE_INFINITY,
              };
            })(a);
          let d, u;
          function p() {
            u = s[d];
            const e = u[a.axis];
            return !$(u[t.axis]) || l > e || c < e;
          }
          for (
            d = 0;
            d < o && (p() || (this.updateRangeFromParsed(h, t, u, r), !n));
            ++d
          );
          if (n)
            for (d = o - 1; d >= 0; --d)
              if (!p()) {
                this.updateRangeFromParsed(h, t, u, r);
                break;
              }
          return h;
        }
        getAllParsedValues(t) {
          const e = this._cachedMeta._parsed,
            i = [];
          let s, n, o;
          for (s = 0, n = e.length; s < n; ++s)
            (o = e[s][t.axis]), $(o) && i.push(o);
          return i;
        }
        getMaxOverflow() {
          return !1;
        }
        getLabelAndValue(t) {
          const e = this._cachedMeta,
            i = e.iScale,
            s = e.vScale,
            n = this.getParsed(t);
          return {
            label: i ? "" + i.getLabelForValue(n[i.axis]) : "",
            value: s ? "" + s.getLabelForValue(n[s.axis]) : "",
          };
        }
        _update(t) {
          const e = this._cachedMeta;
          this.update(t || "default"),
            (e._clip = (function (t) {
              let e, i, s, n;
              return (
                N(t)
                  ? ((e = t.top), (i = t.right), (s = t.bottom), (n = t.left))
                  : (e = i = s = n = t),
                { top: e, right: i, bottom: s, left: n, disabled: !1 === t }
              );
            })(
              Y(
                this.options.clip,
                (function (t, e, i) {
                  if (!1 === i) return !1;
                  const s = Ei(t, i),
                    n = Ei(e, i);
                  return {
                    top: n.end,
                    right: s.end,
                    bottom: n.start,
                    left: s.start,
                  };
                })(e.xScale, e.yScale, this.getMaxOverflow())
              )
            ));
        }
        update(t) {}
        draw() {
          const t = this._ctx,
            e = this.chart,
            i = this._cachedMeta,
            s = i.data || [],
            n = e.chartArea,
            o = [],
            a = this._drawStart || 0,
            r = this._drawCount || s.length - a,
            h = this.options.drawActiveElementsOnTop;
          let l;
          for (i.dataset && i.dataset.draw(t, n, a, r), l = a; l < a + r; ++l) {
            const e = s[l];
            e.hidden || (e.active && h ? o.push(e) : e.draw(t, n));
          }
          for (l = 0; l < o.length; ++l) o[l].draw(t, n);
        }
        getStyle(t, e) {
          const i = e ? "active" : "default";
          return void 0 === t && this._cachedMeta.dataset
            ? this.resolveDatasetElementOptions(i)
            : this.resolveDataElementOptions(t || 0, i);
        }
        getContext(t, e, i) {
          const s = this.getDataset();
          let n;
          if (t >= 0 && t < this._cachedMeta.data.length) {
            const e = this._cachedMeta.data[t];
            (n =
              e.$context ||
              (e.$context = (function (t, e, i) {
                return Re(t, {
                  active: !1,
                  dataIndex: e,
                  parsed: void 0,
                  raw: void 0,
                  element: i,
                  index: e,
                  mode: "default",
                  type: "data",
                });
              })(this.getContext(), t, e))),
              (n.parsed = this.getParsed(t)),
              (n.raw = s.data[t]),
              (n.index = n.dataIndex = t);
          } else
            (n =
              this.$context ||
              (this.$context = (function (t, e) {
                return Re(t, {
                  active: !1,
                  dataset: void 0,
                  datasetIndex: e,
                  index: e,
                  mode: "default",
                  type: "dataset",
                });
              })(this.chart.getContext(), this.index))),
              (n.dataset = s),
              (n.index = n.datasetIndex = this.index);
          return (n.active = !!e), (n.mode = i), n;
        }
        resolveDatasetElementOptions(t) {
          return this._resolveElementOptions(this.datasetElementType.id, t);
        }
        resolveDataElementOptions(t, e) {
          return this._resolveElementOptions(this.dataElementType.id, e, t);
        }
        _resolveElementOptions(t, e = "default", i) {
          const s = "active" === e,
            n = this._cachedDataOpts,
            o = t + "-" + e,
            a = n[o],
            r = this.enableOptionSharing && at(i);
          if (a) return Ui(a, r);
          const h = this.chart.config,
            l = h.datasetElementScopeKeys(this._type, t),
            c = s ? [`${t}Hover`, "hover", t, ""] : [t, ""],
            d = h.getOptionScopes(this.getDataset(), l),
            u = Object.keys(le.elements[t]),
            p = h.resolveNamedOptions(d, u, () => this.getContext(i, s, e), c);
          return (
            p.$shared && ((p.$shared = r), (n[o] = Object.freeze(Ui(p, r)))), p
          );
        }
        _resolveAnimations(t, e, i) {
          const s = this.chart,
            n = this._cachedDataOpts,
            o = `animation-${e}`,
            a = n[o];
          if (a) return a;
          let r;
          if (!1 !== s.options.animation) {
            const s = this.chart.config,
              n = s.datasetAnimationScopeKeys(this._type, e),
              o = s.getOptionScopes(this.getDataset(), n);
            r = s.createResolver(o, this.getContext(t, i, e));
          }
          const h = new Ri(s, r && r.animations);
          return r && r._cacheable && (n[o] = Object.freeze(h)), h;
        }
        getSharedOptions(t) {
          if (t.$shared)
            return (
              this._sharedOptions ||
              (this._sharedOptions = Object.assign({}, t))
            );
        }
        includeOptions(t, e) {
          return !e || $i(t) || this.chart._animationsDisabled;
        }
        _getSharedOptions(t, e) {
          const i = this.resolveDataElementOptions(t, e),
            s = this._sharedOptions,
            n = this.getSharedOptions(i),
            o = this.includeOptions(e, n) || n !== s;
          return (
            this.updateSharedOptions(n, e, i),
            { sharedOptions: n, includeOptions: o }
          );
        }
        updateElement(t, e, i, s) {
          $i(s)
            ? Object.assign(t, i)
            : this._resolveAnimations(e, s).update(t, i);
        }
        updateSharedOptions(t, e, i) {
          t && !$i(e) && this._resolveAnimations(void 0, e).update(t, i);
        }
        _setStyle(t, e, i, s) {
          t.active = s;
          const n = this.getStyle(e, s);
          this._resolveAnimations(e, i, s).update(t, {
            options: (!s && this.getSharedOptions(n)) || n,
          });
        }
        removeHoverStyle(t, e, i) {
          this._setStyle(t, i, "active", !1);
        }
        setHoverStyle(t, e, i) {
          this._setStyle(t, i, "active", !0);
        }
        _removeDatasetHoverStyle() {
          const t = this._cachedMeta.dataset;
          t && this._setStyle(t, void 0, "active", !1);
        }
        _setDatasetHoverStyle() {
          const t = this._cachedMeta.dataset;
          t && this._setStyle(t, void 0, "active", !0);
        }
        _resyncElements(t) {
          const e = this._data,
            i = this._cachedMeta.data;
          for (const [t, e, i] of this._syncList) this[t](e, i);
          this._syncList = [];
          const s = i.length,
            n = e.length,
            o = Math.min(n, s);
          o && this.parse(0, o),
            n > s
              ? this._insertElements(s, n - s, t)
              : n < s && this._removeElements(n, s - n);
        }
        _insertElements(t, e, i = !0) {
          const s = this._cachedMeta,
            n = s.data,
            o = t + e;
          let a;
          const r = (t) => {
            for (t.length += e, a = t.length - 1; a >= o; a--) t[a] = t[a - e];
          };
          for (r(n), a = t; a < o; ++a) n[a] = new this.dataElementType();
          this._parsing && r(s._parsed),
            this.parse(t, e),
            i && this.updateElements(n, t, e, "reset");
        }
        updateElements(t, e, i, s) {}
        _removeElements(t, e) {
          const i = this._cachedMeta;
          if (this._parsing) {
            const s = i._parsed.splice(t, e);
            i._stacked && Ni(i, s);
          }
          i.data.splice(t, e);
        }
        _sync(t) {
          if (this._parsing) this._syncList.push(t);
          else {
            const [e, i, s] = t;
            this[e](i, s);
          }
          this.chart._dataChanges.push([this.index, ...t]);
        }
        _onDataPush() {
          const t = arguments.length;
          this._sync(["_insertElements", this.getDataset().data.length - t, t]);
        }
        _onDataPop() {
          this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]);
        }
        _onDataShift() {
          this._sync(["_removeElements", 0, 1]);
        }
        _onDataSplice(t, e) {
          e && this._sync(["_removeElements", t, e]);
          const i = arguments.length - 2;
          i && this._sync(["_insertElements", t, i]);
        }
        _onDataUnshift() {
          this._sync(["_insertElements", 0, arguments.length]);
        }
      }
      function qi(t) {
        const e = t.iScale,
          i = (function (t, e) {
            if (!t._cache.$bar) {
              const i = t.getMatchingVisibleMetas(e);
              let s = [];
              for (let e = 0, n = i.length; e < n; e++)
                s = s.concat(i[e].controller.getAllParsedValues(t));
              t._cache.$bar = Bt(s.sort((t, e) => t - e));
            }
            return t._cache.$bar;
          })(e, t.type);
        let s,
          n,
          o,
          a,
          r = e._length;
        const h = () => {
          32767 !== o &&
            -32768 !== o &&
            (at(a) && (r = Math.min(r, Math.abs(o - a) || r)), (a = o));
        };
        for (s = 0, n = i.length; s < n; ++s)
          (o = e.getPixelForValue(i[s])), h();
        for (a = void 0, s = 0, n = e.ticks.length; s < n; ++s)
          (o = e.getPixelForTick(s)), h();
        return r;
      }
      function Xi(t, e, i, s) {
        return (
          j(t)
            ? (function (t, e, i, s) {
                const n = i.parse(t[0], s),
                  o = i.parse(t[1], s),
                  a = Math.min(n, o),
                  r = Math.max(n, o);
                let h = a,
                  l = r;
                Math.abs(a) > Math.abs(r) && ((h = r), (l = a)),
                  (e[i.axis] = l),
                  (e._custom = {
                    barStart: h,
                    barEnd: l,
                    start: n,
                    end: o,
                    min: a,
                    max: r,
                  });
              })(t, e, i, s)
            : (e[i.axis] = i.parse(t, s)),
          e
        );
      }
      function Gi(t, e, i, s) {
        const n = t.iScale,
          o = t.vScale,
          a = n.getLabels(),
          r = n === o,
          h = [];
        let l, c, d, u;
        for (l = i, c = i + s; l < c; ++l)
          (u = e[l]),
            (d = {}),
            (d[n.axis] = r || n.parse(a[l], l)),
            h.push(Xi(u, d, o, l));
        return h;
      }
      function Ki(t) {
        return t && void 0 !== t.barStart && void 0 !== t.barEnd;
      }
      function Ji(t, e, i, s) {
        let n = e.borderSkipped;
        const o = {};
        if (!n) return void (t.borderSkipped = o);
        if (!0 === n)
          return void (t.borderSkipped = {
            top: !0,
            right: !0,
            bottom: !0,
            left: !0,
          });
        const {
          start: a,
          end: r,
          reverse: h,
          top: l,
          bottom: c,
        } = (function (t) {
          let e, i, s, n, o;
          return (
            t.horizontal
              ? ((e = t.base > t.x), (i = "left"), (s = "right"))
              : ((e = t.base < t.y), (i = "bottom"), (s = "top")),
            e ? ((n = "end"), (o = "start")) : ((n = "start"), (o = "end")),
            { start: i, end: s, reverse: e, top: n, bottom: o }
          );
        })(t);
        "middle" === n &&
          i &&
          ((t.enableBorderRadius = !0),
          (i._top || 0) === s
            ? (n = l)
            : (i._bottom || 0) === s
            ? (n = c)
            : ((o[Zi(c, a, r, h)] = !0), (n = l))),
          (o[Zi(n, a, r, h)] = !0),
          (t.borderSkipped = o);
      }
      function Zi(t, e, i, s) {
        var n, o, a;
        return (
          s
            ? ((a = i),
              (t = Qi((t = (n = t) === (o = e) ? a : n === a ? o : n), i, e)))
            : (t = Qi(t, e, i)),
          t
        );
      }
      function Qi(t, e, i) {
        return "start" === t ? e : "end" === t ? i : t;
      }
      function ts(t, { inflateAmount: e }, i) {
        t.inflateAmount = "auto" === e ? (1 === i ? 0.33 : 0) : e;
      }
      class es extends Yi {
        static id = "bar";
        static defaults = {
          datasetElementType: !1,
          dataElementType: "bar",
          categoryPercentage: 0.8,
          barPercentage: 0.9,
          grouped: !0,
          animations: {
            numbers: {
              type: "number",
              properties: ["x", "y", "base", "width", "height"],
            },
          },
        };
        static overrides = {
          scales: {
            _index_: { type: "category", offset: !0, grid: { offset: !0 } },
            _value_: { type: "linear", beginAtZero: !0 },
          },
        };
        parsePrimitiveData(t, e, i, s) {
          return Gi(t, e, i, s);
        }
        parseArrayData(t, e, i, s) {
          return Gi(t, e, i, s);
        }
        parseObjectData(t, e, i, s) {
          const { iScale: n, vScale: o } = t,
            { xAxisKey: a = "x", yAxisKey: r = "y" } = this._parsing,
            h = "x" === n.axis ? a : r,
            l = "x" === o.axis ? a : r,
            c = [];
          let d, u, p, f;
          for (d = i, u = i + s; d < u; ++d)
            (f = e[d]),
              (p = {}),
              (p[n.axis] = n.parse(nt(f, h), d)),
              c.push(Xi(nt(f, l), p, o, d));
          return c;
        }
        updateRangeFromParsed(t, e, i, s) {
          super.updateRangeFromParsed(t, e, i, s);
          const n = i._custom;
          n &&
            e === this._cachedMeta.vScale &&
            ((t.min = Math.min(t.min, n.min)),
            (t.max = Math.max(t.max, n.max)));
        }
        getMaxOverflow() {
          return 0;
        }
        getLabelAndValue(t) {
          const e = this._cachedMeta,
            { iScale: i, vScale: s } = e,
            n = this.getParsed(t),
            o = n._custom,
            a = Ki(o)
              ? "[" + o.start + ", " + o.end + "]"
              : "" + s.getLabelForValue(n[s.axis]);
          return { label: "" + i.getLabelForValue(n[i.axis]), value: a };
        }
        initialize() {
          (this.enableOptionSharing = !0), super.initialize();
          this._cachedMeta.stack = this.getDataset().stack;
        }
        update(t) {
          const e = this._cachedMeta;
          this.updateElements(e.data, 0, e.data.length, t);
        }
        updateElements(t, e, i, s) {
          const n = "reset" === s,
            {
              index: o,
              _cachedMeta: { vScale: a },
            } = this,
            r = a.getBasePixel(),
            h = a.isHorizontal(),
            l = this._getRuler(),
            { sharedOptions: c, includeOptions: d } = this._getSharedOptions(
              e,
              s
            );
          for (let u = e; u < e + i; u++) {
            const e = this.getParsed(u),
              i =
                n || H(e[a.axis])
                  ? { base: r, head: r }
                  : this._calculateBarValuePixels(u),
              p = this._calculateBarIndexPixels(u, l),
              f = (e._stacks || {})[a.axis],
              g = {
                horizontal: h,
                base: i.base,
                enableBorderRadius:
                  !f || Ki(e._custom) || o === f._top || o === f._bottom,
                x: h ? i.head : p.center,
                y: h ? p.center : i.head,
                height: h ? p.size : Math.abs(i.size),
                width: h ? Math.abs(i.size) : p.size,
              };
            d &&
              (g.options =
                c ||
                this.resolveDataElementOptions(u, t[u].active ? "active" : s));
            const m = g.options || t[u].options;
            Ji(g, m, f, o),
              ts(g, m, l.ratio),
              this.updateElement(t[u], u, g, s);
          }
        }
        _getStacks(t, e) {
          const { iScale: i } = this._cachedMeta,
            s = i
              .getMatchingVisibleMetas(this._type)
              .filter((t) => t.controller.options.grouped),
            n = i.options.stacked,
            o = [],
            a = (t) => {
              const i = t.controller.getParsed(e),
                s = i && i[t.vScale.axis];
              if (H(s) || isNaN(s)) return !0;
            };
          for (const i of s)
            if (
              (void 0 === e || !a(i)) &&
              ((!1 === n ||
                -1 === o.indexOf(i.stack) ||
                (void 0 === n && void 0 === i.stack)) &&
                o.push(i.stack),
              i.index === t)
            )
              break;
          return o.length || o.push(void 0), o;
        }
        _getStackCount(t) {
          return this._getStacks(void 0, t).length;
        }
        _getStackIndex(t, e, i) {
          const s = this._getStacks(t, i),
            n = void 0 !== e ? s.indexOf(e) : -1;
          return -1 === n ? s.length - 1 : n;
        }
        _getRuler() {
          const t = this.options,
            e = this._cachedMeta,
            i = e.iScale,
            s = [];
          let n, o;
          for (n = 0, o = e.data.length; n < o; ++n)
            s.push(i.getPixelForValue(this.getParsed(n)[i.axis], n));
          const a = t.barThickness;
          return {
            min: a || qi(e),
            pixels: s,
            start: i._startPixel,
            end: i._endPixel,
            stackCount: this._getStackCount(),
            scale: i,
            grouped: t.grouped,
            ratio: a ? 1 : t.categoryPercentage * t.barPercentage,
          };
        }
        _calculateBarValuePixels(t) {
          const {
              _cachedMeta: { vScale: e, _stacked: i, index: s },
              options: { base: n, minBarLength: o },
            } = this,
            a = n || 0,
            r = this.getParsed(t),
            h = r._custom,
            l = Ki(h);
          let c,
            d,
            u = r[e.axis],
            p = 0,
            f = i ? this.applyStack(e, r, i) : u;
          f !== u && ((p = f - u), (f = u)),
            l &&
              ((u = h.barStart),
              (f = h.barEnd - h.barStart),
              0 !== u && xt(u) !== xt(h.barEnd) && (p = 0),
              (p += u));
          const g = H(n) || l ? p : n;
          let m = e.getPixelForValue(g);
          if (
            ((c = this.chart.getDataVisibility(t)
              ? e.getPixelForValue(p + f)
              : m),
            (d = c - m),
            Math.abs(d) < o)
          ) {
            (d =
              (function (t, e, i) {
                return 0 !== t
                  ? xt(t)
                  : (e.isHorizontal() ? 1 : -1) * (e.min >= i ? 1 : -1);
              })(d, e, a) * o),
              u === a && (m -= d / 2);
            const t = e.getPixelForDecimal(0),
              n = e.getPixelForDecimal(1),
              h = Math.min(t, n),
              p = Math.max(t, n);
            (m = Math.max(Math.min(m, p), h)),
              (c = m + d),
              i &&
                !l &&
                (r._stacks[e.axis]._visualValues[s] =
                  e.getValueForPixel(c) - e.getValueForPixel(m));
          }
          if (m === e.getPixelForValue(a)) {
            const t = (xt(d) * e.getLineWidthForValue(a)) / 2;
            (m += t), (d -= t);
          }
          return { size: d, base: m, head: c, center: c + d / 2 };
        }
        _calculateBarIndexPixels(t, e) {
          const i = e.scale,
            s = this.options,
            n = s.skipNull,
            o = Y(s.maxBarThickness, 1 / 0);
          let a, r;
          if (e.grouped) {
            const i = n ? this._getStackCount(t) : e.stackCount,
              h =
                "flex" === s.barThickness
                  ? (function (t, e, i, s) {
                      const n = e.pixels,
                        o = n[t];
                      let a = t > 0 ? n[t - 1] : null,
                        r = t < n.length - 1 ? n[t + 1] : null;
                      const h = i.categoryPercentage;
                      null === a &&
                        (a = o - (null === r ? e.end - e.start : r - o)),
                        null === r && (r = o + o - a);
                      const l = o - ((o - Math.min(a, r)) / 2) * h;
                      return {
                        chunk: ((Math.abs(r - a) / 2) * h) / s,
                        ratio: i.barPercentage,
                        start: l,
                      };
                    })(t, e, s, i)
                  : (function (t, e, i, s) {
                      const n = i.barThickness;
                      let o, a;
                      return (
                        H(n)
                          ? ((o = e.min * i.categoryPercentage),
                            (a = i.barPercentage))
                          : ((o = n * s), (a = 1)),
                        { chunk: o / s, ratio: a, start: e.pixels[t] - o / 2 }
                      );
                    })(t, e, s, i),
              l = this._getStackIndex(
                this.index,
                this._cachedMeta.stack,
                n ? t : void 0
              );
            (a = h.start + h.chunk * l + h.chunk / 2),
              (r = Math.min(o, h.chunk * h.ratio));
          } else
            (a = i.getPixelForValue(this.getParsed(t)[i.axis], t)),
              (r = Math.min(o, e.min * e.ratio));
          return { base: a - r / 2, head: a + r / 2, center: a, size: r };
        }
        draw() {
          const t = this._cachedMeta,
            e = t.vScale,
            i = t.data,
            s = i.length;
          let n = 0;
          for (; n < s; ++n)
            null !== this.getParsed(n)[e.axis] && i[n].draw(this._ctx);
        }
      }
      class is extends Yi {
        static id = "line";
        static defaults = {
          datasetElementType: "line",
          dataElementType: "point",
          showLine: !0,
          spanGaps: !1,
        };
        static overrides = {
          scales: {
            _index_: { type: "category" },
            _value_: { type: "linear" },
          },
        };
        initialize() {
          (this.enableOptionSharing = !0),
            (this.supportsDecimation = !0),
            super.initialize();
        }
        update(t) {
          const e = this._cachedMeta,
            { dataset: i, data: s = [], _dataset: n } = e,
            o = this.chart._animationsDisabled;
          let { start: a, count: r } = Nt(e, s, o);
          (this._drawStart = a),
            (this._drawCount = r),
            $t(e) && ((a = 0), (r = s.length)),
            (i._chart = this.chart),
            (i._datasetIndex = this.index),
            (i._decimated = !!n._decimated),
            (i.points = s);
          const h = this.resolveDatasetElementOptions(t);
          this.options.showLine || (h.borderWidth = 0),
            (h.segment = this.options.segment),
            this.updateElement(i, void 0, { animated: !o, options: h }, t),
            this.updateElements(s, a, r, t);
        }
        updateElements(t, e, i, s) {
          const n = "reset" === s,
            {
              iScale: o,
              vScale: a,
              _stacked: r,
              _dataset: h,
            } = this._cachedMeta,
            { sharedOptions: l, includeOptions: c } = this._getSharedOptions(
              e,
              s
            ),
            d = o.axis,
            u = a.axis,
            { spanGaps: p, segment: f } = this.options,
            g = vt(p) ? p : Number.POSITIVE_INFINITY,
            m = this.chart._animationsDisabled || n || "none" === s,
            b = e + i,
            x = t.length;
          let _ = e > 0 && this.getParsed(e - 1);
          for (let i = 0; i < x; ++i) {
            const p = t[i],
              x = m ? p : {};
            if (i < e || i >= b) {
              x.skip = !0;
              continue;
            }
            const y = this.getParsed(i),
              v = H(y[u]),
              w = (x[d] = o.getPixelForValue(y[d], i)),
              k = (x[u] =
                n || v
                  ? a.getBasePixel()
                  : a.getPixelForValue(r ? this.applyStack(a, y, r) : y[u], i));
            (x.skip = isNaN(w) || isNaN(k) || v),
              (x.stop = i > 0 && Math.abs(y[d] - _[d]) > g),
              f && ((x.parsed = y), (x.raw = h.data[i])),
              c &&
                (x.options =
                  l ||
                  this.resolveDataElementOptions(i, p.active ? "active" : s)),
              m || this.updateElement(p, i, x, s),
              (_ = y);
          }
        }
        getMaxOverflow() {
          const t = this._cachedMeta,
            e = t.dataset,
            i = (e.options && e.options.borderWidth) || 0,
            s = t.data || [];
          if (!s.length) return i;
          const n = s[0].size(this.resolveDataElementOptions(0)),
            o = s[s.length - 1].size(
              this.resolveDataElementOptions(s.length - 1)
            );
          return Math.max(i, n, o) / 2;
        }
        draw() {
          const t = this._cachedMeta;
          t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis),
            super.draw();
        }
      }
      function ss(t, e, i, s) {
        const { controller: n, data: o, _sorted: a } = t,
          r = n._cachedMeta.iScale;
        if (r && e === r.axis && "r" !== e && a && o.length) {
          const t = r._reversePixels ? Et : Rt;
          if (!s) return t(o, e, i);
          if (n._sharedOptions) {
            const s = o[0],
              n = "function" == typeof s.getRange && s.getRange(e);
            if (n) {
              const s = t(o, e, i - n),
                a = t(o, e, i + n);
              return { lo: s.lo, hi: a.hi };
            }
          }
        }
        return { lo: 0, hi: o.length - 1 };
      }
      function ns(t, e, i, s, n) {
        const o = t.getSortedVisibleDatasetMetas(),
          a = i[e];
        for (let t = 0, i = o.length; t < i; ++t) {
          const { index: i, data: r } = o[t],
            { lo: h, hi: l } = ss(o[t], e, a, n);
          for (let t = h; t <= l; ++t) {
            const e = r[t];
            e.skip || s(e, i, t);
          }
        }
      }
      function os(t, e, i, s, n) {
        const o = [];
        if (!n && !t.isPointInArea(e)) return o;
        return (
          ns(
            t,
            i,
            e,
            function (i, a, r) {
              (n || ge(i, t.chartArea, 0)) &&
                i.inRange(e.x, e.y, s) &&
                o.push({ element: i, datasetIndex: a, index: r });
            },
            !0
          ),
          o
        );
      }
      function as(t, e, i, s, n, o) {
        let a = [];
        const r = (function (t) {
          const e = -1 !== t.indexOf("x"),
            i = -1 !== t.indexOf("y");
          return function (t, s) {
            const n = e ? Math.abs(t.x - s.x) : 0,
              o = i ? Math.abs(t.y - s.y) : 0;
            return Math.sqrt(Math.pow(n, 2) + Math.pow(o, 2));
          };
        })(i);
        let h = Number.POSITIVE_INFINITY;
        return (
          ns(t, i, e, function (i, l, c) {
            const d = i.inRange(e.x, e.y, n);
            if (s && !d) return;
            const u = i.getCenterPoint(n);
            if (!(!!o || t.isPointInArea(u)) && !d) return;
            const p = r(e, u);
            p < h
              ? ((a = [{ element: i, datasetIndex: l, index: c }]), (h = p))
              : p === h && a.push({ element: i, datasetIndex: l, index: c });
          }),
          a
        );
      }
      function rs(t, e, i, s, n, o) {
        return o || t.isPointInArea(e)
          ? "r" !== i || s
            ? as(t, e, i, s, n, o)
            : (function (t, e, i, s) {
                let n = [];
                return (
                  ns(t, i, e, function (t, i, o) {
                    const { startAngle: a, endAngle: r } = t.getProps(
                        ["startAngle", "endAngle"],
                        s
                      ),
                      { angle: h } = Pt(t, { x: e.x, y: e.y });
                    Ot(h, a, r) &&
                      n.push({ element: t, datasetIndex: i, index: o });
                  }),
                  n
                );
              })(t, e, i, n)
          : [];
      }
      function hs(t, e, i, s, n) {
        const o = [],
          a = "x" === i ? "inXRange" : "inYRange";
        let r = !1;
        return (
          ns(t, i, e, (t, s, h) => {
            t[a](e[i], n) &&
              (o.push({ element: t, datasetIndex: s, index: h }),
              (r = r || t.inRange(e.x, e.y, n)));
          }),
          s && !r ? [] : o
        );
      }
      var ls = {
        evaluateInteractionItems: ns,
        modes: {
          index(t, e, i, s) {
            const n = hi(e, t),
              o = i.axis || "x",
              a = i.includeInvisible || !1,
              r = i.intersect ? os(t, n, o, s, a) : rs(t, n, o, !1, s, a),
              h = [];
            return r.length
              ? (t.getSortedVisibleDatasetMetas().forEach((t) => {
                  const e = r[0].index,
                    i = t.data[e];
                  i &&
                    !i.skip &&
                    h.push({ element: i, datasetIndex: t.index, index: e });
                }),
                h)
              : [];
          },
          dataset(t, e, i, s) {
            const n = hi(e, t),
              o = i.axis || "xy",
              a = i.includeInvisible || !1;
            let r = i.intersect ? os(t, n, o, s, a) : rs(t, n, o, !1, s, a);
            if (r.length > 0) {
              const e = r[0].datasetIndex,
                i = t.getDatasetMeta(e).data;
              r = [];
              for (let t = 0; t < i.length; ++t)
                r.push({ element: i[t], datasetIndex: e, index: t });
            }
            return r;
          },
          point: (t, e, i, s) =>
            os(t, hi(e, t), i.axis || "xy", s, i.includeInvisible || !1),
          nearest(t, e, i, s) {
            const n = hi(e, t),
              o = i.axis || "xy",
              a = i.includeInvisible || !1;
            return rs(t, n, o, i.intersect, s, a);
          },
          x: (t, e, i, s) => hs(t, hi(e, t), "x", i.intersect, s),
          y: (t, e, i, s) => hs(t, hi(e, t), "y", i.intersect, s),
        },
      };
      const cs = ["left", "top", "right", "bottom"];
      function ds(t, e) {
        return t.filter((t) => t.pos === e);
      }
      function us(t, e) {
        return t.filter((t) => -1 === cs.indexOf(t.pos) && t.box.axis === e);
      }
      function ps(t, e) {
        return t.sort((t, i) => {
          const s = e ? i : t,
            n = e ? t : i;
          return s.weight === n.weight
            ? s.index - n.index
            : s.weight - n.weight;
        });
      }
      function fs(t, e) {
        const i = (function (t) {
            const e = {};
            for (const i of t) {
              const { stack: t, pos: s, stackWeight: n } = i;
              if (!t || !cs.includes(s)) continue;
              const o =
                e[t] || (e[t] = { count: 0, placed: 0, weight: 0, size: 0 });
              o.count++, (o.weight += n);
            }
            return e;
          })(t),
          { vBoxMaxWidth: s, hBoxMaxHeight: n } = e;
        let o, a, r;
        for (o = 0, a = t.length; o < a; ++o) {
          r = t[o];
          const { fullSize: a } = r.box,
            h = i[r.stack],
            l = h && r.stackWeight / h.weight;
          r.horizontal
            ? ((r.width = l ? l * s : a && e.availableWidth), (r.height = n))
            : ((r.width = s), (r.height = l ? l * n : a && e.availableHeight));
        }
        return i;
      }
      function gs(t, e, i, s) {
        return Math.max(t[i], e[i]) + Math.max(t[s], e[s]);
      }
      function ms(t, e) {
        (t.top = Math.max(t.top, e.top)),
          (t.left = Math.max(t.left, e.left)),
          (t.bottom = Math.max(t.bottom, e.bottom)),
          (t.right = Math.max(t.right, e.right));
      }
      function bs(t, e, i, s) {
        const { pos: n, box: o } = i,
          a = t.maxPadding;
        if (!N(n)) {
          i.size && (t[n] -= i.size);
          const e = s[i.stack] || { size: 0, count: 1 };
          (e.size = Math.max(e.size, i.horizontal ? o.height : o.width)),
            (i.size = e.size / e.count),
            (t[n] += i.size);
        }
        o.getPadding && ms(a, o.getPadding());
        const r = Math.max(0, e.outerWidth - gs(a, t, "left", "right")),
          h = Math.max(0, e.outerHeight - gs(a, t, "top", "bottom")),
          l = r !== t.w,
          c = h !== t.h;
        return (
          (t.w = r),
          (t.h = h),
          i.horizontal ? { same: l, other: c } : { same: c, other: l }
        );
      }
      function xs(t, e) {
        const i = e.maxPadding;
        function s(t) {
          const s = { left: 0, top: 0, right: 0, bottom: 0 };
          return (
            t.forEach((t) => {
              s[t] = Math.max(e[t], i[t]);
            }),
            s
          );
        }
        return s(t ? ["left", "right"] : ["top", "bottom"]);
      }
      function _s(t, e, i, s) {
        const n = [];
        let o, a, r, h, l, c;
        for (o = 0, a = t.length, l = 0; o < a; ++o) {
          (r = t[o]),
            (h = r.box),
            h.update(r.width || e.w, r.height || e.h, xs(r.horizontal, e));
          const { same: a, other: d } = bs(e, i, r, s);
          (l |= a && n.length), (c = c || d), h.fullSize || n.push(r);
        }
        return (l && _s(n, e, i, s)) || c;
      }
      function ys(t, e, i, s, n) {
        (t.top = i),
          (t.left = e),
          (t.right = e + s),
          (t.bottom = i + n),
          (t.width = s),
          (t.height = n);
      }
      function vs(t, e, i, s) {
        const n = i.padding;
        let { x: o, y: a } = e;
        for (const r of t) {
          const t = r.box,
            h = s[r.stack] || { count: 1, placed: 0, weight: 1 },
            l = r.stackWeight / h.weight || 1;
          if (r.horizontal) {
            const s = e.w * l,
              o = h.size || t.height;
            at(h.start) && (a = h.start),
              t.fullSize
                ? ys(t, n.left, a, i.outerWidth - n.right - n.left, o)
                : ys(t, e.left + h.placed, a, s, o),
              (h.start = a),
              (h.placed += s),
              (a = t.bottom);
          } else {
            const s = e.h * l,
              a = h.size || t.width;
            at(h.start) && (o = h.start),
              t.fullSize
                ? ys(t, o, n.top, a, i.outerHeight - n.bottom - n.top)
                : ys(t, o, e.top + h.placed, a, s),
              (h.start = o),
              (h.placed += s),
              (o = t.right);
          }
        }
        (e.x = o), (e.y = a);
      }
      var ws = {
        addBox(t, e) {
          t.boxes || (t.boxes = []),
            (e.fullSize = e.fullSize || !1),
            (e.position = e.position || "top"),
            (e.weight = e.weight || 0),
            (e._layers =
              e._layers ||
              function () {
                return [
                  {
                    z: 0,
                    draw(t) {
                      e.draw(t);
                    },
                  },
                ];
              }),
            t.boxes.push(e);
        },
        removeBox(t, e) {
          const i = t.boxes ? t.boxes.indexOf(e) : -1;
          -1 !== i && t.boxes.splice(i, 1);
        },
        configure(t, e, i) {
          (e.fullSize = i.fullSize),
            (e.position = i.position),
            (e.weight = i.weight);
        },
        update(t, e, i, s) {
          if (!t) return;
          const n = Le(t.options.layout.padding),
            o = Math.max(e - n.width, 0),
            a = Math.max(i - n.height, 0),
            r = (function (t) {
              const e = (function (t) {
                  const e = [];
                  let i, s, n, o, a, r;
                  for (i = 0, s = (t || []).length; i < s; ++i)
                    (n = t[i]),
                      ({
                        position: o,
                        options: { stack: a, stackWeight: r = 1 },
                      } = n),
                      e.push({
                        index: i,
                        box: n,
                        pos: o,
                        horizontal: n.isHorizontal(),
                        weight: n.weight,
                        stack: a && o + a,
                        stackWeight: r,
                      });
                  return e;
                })(t),
                i = ps(
                  e.filter((t) => t.box.fullSize),
                  !0
                ),
                s = ps(ds(e, "left"), !0),
                n = ps(ds(e, "right")),
                o = ps(ds(e, "top"), !0),
                a = ps(ds(e, "bottom")),
                r = us(e, "x"),
                h = us(e, "y");
              return {
                fullSize: i,
                leftAndTop: s.concat(o),
                rightAndBottom: n.concat(h).concat(a).concat(r),
                chartArea: ds(e, "chartArea"),
                vertical: s.concat(n).concat(h),
                horizontal: o.concat(a).concat(r),
              };
            })(t.boxes),
            h = r.vertical,
            l = r.horizontal;
          G(t.boxes, (t) => {
            "function" == typeof t.beforeLayout && t.beforeLayout();
          });
          const c =
              h.reduce(
                (t, e) =>
                  e.box.options && !1 === e.box.options.display ? t : t + 1,
                0
              ) || 1,
            d = Object.freeze({
              outerWidth: e,
              outerHeight: i,
              padding: n,
              availableWidth: o,
              availableHeight: a,
              vBoxMaxWidth: o / 2 / c,
              hBoxMaxHeight: a / 2,
            }),
            u = Object.assign({}, n);
          ms(u, Le(s));
          const p = Object.assign(
              { maxPadding: u, w: o, h: a, x: n.left, y: n.top },
              n
            ),
            f = fs(h.concat(l), d);
          _s(r.fullSize, p, d, f),
            _s(h, p, d, f),
            _s(l, p, d, f) && _s(h, p, d, f),
            (function (t) {
              const e = t.maxPadding;
              function i(i) {
                const s = Math.max(e[i] - t[i], 0);
                return (t[i] += s), s;
              }
              (t.y += i("top")), (t.x += i("left")), i("right"), i("bottom");
            })(p),
            vs(r.leftAndTop, p, d, f),
            (p.x += p.w),
            (p.y += p.h),
            vs(r.rightAndBottom, p, d, f),
            (t.chartArea = {
              left: p.left,
              top: p.top,
              right: p.left + p.w,
              bottom: p.top + p.h,
              height: p.h,
              width: p.w,
            }),
            G(r.chartArea, (e) => {
              const i = e.box;
              Object.assign(i, t.chartArea),
                i.update(p.w, p.h, { left: 0, top: 0, right: 0, bottom: 0 });
            });
        },
      };
      class ks {
        acquireContext(t, e) {}
        releaseContext(t) {
          return !1;
        }
        addEventListener(t, e, i) {}
        removeEventListener(t, e, i) {}
        getDevicePixelRatio() {
          return 1;
        }
        getMaximumSize(t, e, i, s) {
          return (
            (e = Math.max(0, e || t.width)),
            (i = i || t.height),
            { width: e, height: Math.max(0, s ? Math.floor(e / s) : i) }
          );
        }
        isAttached(t) {
          return !0;
        }
        updateConfig(t) {}
      }
      class Ms extends ks {
        acquireContext(t) {
          return (t && t.getContext && t.getContext("2d")) || null;
        }
        updateConfig(t) {
          t.options.animation = !1;
        }
      }
      const Ss = "$chartjs",
        Ps = {
          touchstart: "mousedown",
          touchmove: "mousemove",
          touchend: "mouseup",
          pointerenter: "mouseenter",
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointerleave: "mouseout",
          pointerout: "mouseout",
        },
        Cs = (t) => null === t || "" === t;
      const Ds = !!ui && { passive: !0 };
      function As(t, e, i) {
        t.canvas.removeEventListener(e, i, Ds);
      }
      function Os(t, e) {
        for (const i of t) if (i === e || i.contains(e)) return !0;
      }
      function Ls(t, e, i) {
        const s = t.canvas,
          n = new MutationObserver((t) => {
            let e = !1;
            for (const i of t)
              (e = e || Os(i.addedNodes, s)), (e = e && !Os(i.removedNodes, s));
            e && i();
          });
        return n.observe(document, { childList: !0, subtree: !0 }), n;
      }
      function Ts(t, e, i) {
        const s = t.canvas,
          n = new MutationObserver((t) => {
            let e = !1;
            for (const i of t)
              (e = e || Os(i.removedNodes, s)), (e = e && !Os(i.addedNodes, s));
            e && i();
          });
        return n.observe(document, { childList: !0, subtree: !0 }), n;
      }
      const Is = new Map();
      let Rs = 0;
      function Es() {
        const t = window.devicePixelRatio;
        t !== Rs &&
          ((Rs = t),
          Is.forEach((e, i) => {
            i.currentDevicePixelRatio !== t && e();
          }));
      }
      function zs(t, e, i) {
        const s = t.canvas,
          n = s && ii(s);
        if (!n) return;
        const o = Vt((t, e) => {
            const s = n.clientWidth;
            i(t, e), s < n.clientWidth && i();
          }, window),
          a = new ResizeObserver((t) => {
            const e = t[0],
              i = e.contentRect.width,
              s = e.contentRect.height;
            (0 === i && 0 === s) || o(i, s);
          });
        return (
          a.observe(n),
          (function (t, e) {
            Is.size || window.addEventListener("resize", Es), Is.set(t, e);
          })(t, o),
          a
        );
      }
      function Fs(t, e, i) {
        i && i.disconnect(),
          "resize" === e &&
            (function (t) {
              Is.delete(t), Is.size || window.removeEventListener("resize", Es);
            })(t);
      }
      function Bs(t, e, i) {
        const s = t.canvas,
          n = Vt((e) => {
            null !== t.ctx &&
              i(
                (function (t, e) {
                  const i = Ps[t.type] || t.type,
                    { x: s, y: n } = hi(t, e);
                  return {
                    type: i,
                    chart: e,
                    native: t,
                    x: void 0 !== s ? s : null,
                    y: void 0 !== n ? n : null,
                  };
                })(e, t)
              );
          }, t);
        return (
          (function (t, e, i) {
            t.addEventListener(e, i, Ds);
          })(s, e, n),
          n
        );
      }
      class Ws extends ks {
        acquireContext(t, e) {
          const i = t && t.getContext && t.getContext("2d");
          return i && i.canvas === t
            ? ((function (t, e) {
                const i = t.style,
                  s = t.getAttribute("height"),
                  n = t.getAttribute("width");
                if (
                  ((t[Ss] = {
                    initial: {
                      height: s,
                      width: n,
                      style: {
                        display: i.display,
                        height: i.height,
                        width: i.width,
                      },
                    },
                  }),
                  (i.display = i.display || "block"),
                  (i.boxSizing = i.boxSizing || "border-box"),
                  Cs(n))
                ) {
                  const e = pi(t, "width");
                  void 0 !== e && (t.width = e);
                }
                if (Cs(s))
                  if ("" === t.style.height) t.height = t.width / (e || 2);
                  else {
                    const e = pi(t, "height");
                    void 0 !== e && (t.height = e);
                  }
              })(t, e),
              i)
            : null;
        }
        releaseContext(t) {
          const e = t.canvas;
          if (!e[Ss]) return !1;
          const i = e[Ss].initial;
          ["height", "width"].forEach((t) => {
            const s = i[t];
            H(s) ? e.removeAttribute(t) : e.setAttribute(t, s);
          });
          const s = i.style || {};
          return (
            Object.keys(s).forEach((t) => {
              e.style[t] = s[t];
            }),
            (e.width = e.width),
            delete e[Ss],
            !0
          );
        }
        addEventListener(t, e, i) {
          this.removeEventListener(t, e);
          const s = t.$proxies || (t.$proxies = {}),
            n = { attach: Ls, detach: Ts, resize: zs }[e] || Bs;
          s[e] = n(t, e, i);
        }
        removeEventListener(t, e) {
          const i = t.$proxies || (t.$proxies = {}),
            s = i[e];
          if (!s) return;
          (({ attach: Fs, detach: Fs, resize: Fs })[e] || As)(t, e, s),
            (i[e] = void 0);
        }
        getDevicePixelRatio() {
          return window.devicePixelRatio;
        }
        getMaximumSize(t, e, i, s) {
          return ci(t, e, i, s);
        }
        isAttached(t) {
          const e = ii(t);
          return !(!e || !e.isConnected);
        }
      }
      class Vs {
        static defaults = {};
        static defaultRoutes = void 0;
        x;
        y;
        active = !1;
        options;
        $animations;
        tooltipPosition(t) {
          const { x: e, y: i } = this.getProps(["x", "y"], t);
          return { x: e, y: i };
        }
        hasValue() {
          return vt(this.x) && vt(this.y);
        }
        getProps(t, e) {
          const i = this.$animations;
          if (!e || !i) return this;
          const s = {};
          return (
            t.forEach((t) => {
              s[t] = i[t] && i[t].active() ? i[t]._to : this[t];
            }),
            s
          );
        }
      }
      function Hs(t, e) {
        const i = t.options.ticks,
          s = (function (t) {
            const e = t.options.offset,
              i = t._tickSize(),
              s = t._length / i + (e ? 0 : 1),
              n = t._maxLength / i;
            return Math.floor(Math.min(s, n));
          })(t),
          n = Math.min(i.maxTicksLimit || s, s),
          o = i.major.enabled
            ? (function (t) {
                const e = [];
                let i, s;
                for (i = 0, s = t.length; i < s; i++) t[i].major && e.push(i);
                return e;
              })(e)
            : [],
          a = o.length,
          r = o[0],
          h = o[a - 1],
          l = [];
        if (a > n)
          return (
            (function (t, e, i, s) {
              let n,
                o = 0,
                a = i[0];
              for (s = Math.ceil(s), n = 0; n < t.length; n++)
                n === a && (e.push(t[n]), o++, (a = i[o * s]));
            })(e, l, o, a / n),
            l
          );
        const c = (function (t, e, i) {
          const s = (function (t) {
              const e = t.length;
              let i, s;
              if (e < 2) return !1;
              for (s = t[0], i = 1; i < e; ++i)
                if (t[i] - t[i - 1] !== s) return !1;
              return s;
            })(t),
            n = e.length / i;
          if (!s) return Math.max(n, 1);
          const o = (function (t) {
            const e = [],
              i = Math.sqrt(t);
            let s;
            for (s = 1; s < i; s++) t % s == 0 && (e.push(s), e.push(t / s));
            return i === (0 | i) && e.push(i), e.sort((t, e) => t - e).pop(), e;
          })(s);
          for (let t = 0, e = o.length - 1; t < e; t++) {
            const e = o[t];
            if (e > n) return e;
          }
          return Math.max(n, 1);
        })(o, e, n);
        if (a > 0) {
          let t, i;
          const s = a > 1 ? Math.round((h - r) / (a - 1)) : null;
          for (js(e, l, c, H(s) ? 0 : r - s, r), t = 0, i = a - 1; t < i; t++)
            js(e, l, c, o[t], o[t + 1]);
          return js(e, l, c, h, H(s) ? e.length : h + s), l;
        }
        return js(e, l, c), l;
      }
      function js(t, e, i, s, n) {
        const o = Y(s, 0),
          a = Math.min(Y(n, t.length), t.length);
        let r,
          h,
          l,
          c = 0;
        for (
          i = Math.ceil(i),
            n && ((r = n - s), (i = r / Math.floor(r / i))),
            l = o;
          l < 0;

        )
          c++, (l = Math.round(o + c * i));
        for (h = Math.max(o, 0); h < a; h++)
          h === l && (e.push(t[h]), c++, (l = Math.round(o + c * i)));
      }
      const Ns = (t) => ("left" === t ? "right" : "right" === t ? "left" : t),
        $s = (t, e, i) => ("top" === e || "left" === e ? t[e] + i : t[e] - i),
        Us = (t, e) => Math.min(e || t, t);
      function Ys(t, e) {
        const i = [],
          s = t.length / e,
          n = t.length;
        let o = 0;
        for (; o < n; o += s) i.push(t[Math.floor(o)]);
        return i;
      }
      function qs(t, e, i) {
        const s = t.ticks.length,
          n = Math.min(e, s - 1),
          o = t._startPixel,
          a = t._endPixel,
          r = 1e-6;
        let h,
          l = t.getPixelForTick(n);
        if (
          !(
            i &&
            ((h =
              1 === s
                ? Math.max(l - o, a - l)
                : 0 === e
                ? (t.getPixelForTick(1) - l) / 2
                : (l - t.getPixelForTick(n - 1)) / 2),
            (l += n < e ? h : -h),
            l < o - r || l > a + r)
          )
        )
          return l;
      }
      function Xs(t) {
        return t.drawTicks ? t.tickLength : 0;
      }
      function Gs(t, e) {
        if (!t.display) return 0;
        const i = Te(t.font, e),
          s = Le(t.padding);
        return (j(t.text) ? t.text.length : 1) * i.lineHeight + s.height;
      }
      function Ks(t, e, i) {
        let s = Ht(t);
        return (
          ((i && "right" !== e) || (!i && "right" === e)) && (s = Ns(s)), s
        );
      }
      class Js extends Vs {
        constructor(t) {
          super(),
            (this.id = t.id),
            (this.type = t.type),
            (this.options = void 0),
            (this.ctx = t.ctx),
            (this.chart = t.chart),
            (this.top = void 0),
            (this.bottom = void 0),
            (this.left = void 0),
            (this.right = void 0),
            (this.width = void 0),
            (this.height = void 0),
            (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
            (this.maxWidth = void 0),
            (this.maxHeight = void 0),
            (this.paddingTop = void 0),
            (this.paddingBottom = void 0),
            (this.paddingLeft = void 0),
            (this.paddingRight = void 0),
            (this.axis = void 0),
            (this.labelRotation = void 0),
            (this.min = void 0),
            (this.max = void 0),
            (this._range = void 0),
            (this.ticks = []),
            (this._gridLineItems = null),
            (this._labelItems = null),
            (this._labelSizes = null),
            (this._length = 0),
            (this._maxLength = 0),
            (this._longestTextCache = {}),
            (this._startPixel = void 0),
            (this._endPixel = void 0),
            (this._reversePixels = !1),
            (this._userMax = void 0),
            (this._userMin = void 0),
            (this._suggestedMax = void 0),
            (this._suggestedMin = void 0),
            (this._ticksLength = 0),
            (this._borderValue = 0),
            (this._cache = {}),
            (this._dataLimitsCached = !1),
            (this.$context = void 0);
        }
        init(t) {
          (this.options = t.setContext(this.getContext())),
            (this.axis = t.axis),
            (this._userMin = this.parse(t.min)),
            (this._userMax = this.parse(t.max)),
            (this._suggestedMin = this.parse(t.suggestedMin)),
            (this._suggestedMax = this.parse(t.suggestedMax));
        }
        parse(t, e) {
          return t;
        }
        getUserBounds() {
          let {
            _userMin: t,
            _userMax: e,
            _suggestedMin: i,
            _suggestedMax: s,
          } = this;
          return (
            (t = U(t, Number.POSITIVE_INFINITY)),
            (e = U(e, Number.NEGATIVE_INFINITY)),
            (i = U(i, Number.POSITIVE_INFINITY)),
            (s = U(s, Number.NEGATIVE_INFINITY)),
            { min: U(t, i), max: U(e, s), minDefined: $(t), maxDefined: $(e) }
          );
        }
        getMinMax(t) {
          let e,
            {
              min: i,
              max: s,
              minDefined: n,
              maxDefined: o,
            } = this.getUserBounds();
          if (n && o) return { min: i, max: s };
          const a = this.getMatchingVisibleMetas();
          for (let r = 0, h = a.length; r < h; ++r)
            (e = a[r].controller.getMinMax(this, t)),
              n || (i = Math.min(i, e.min)),
              o || (s = Math.max(s, e.max));
          return (
            (i = o && i > s ? s : i),
            (s = n && i > s ? i : s),
            { min: U(i, U(s, i)), max: U(s, U(i, s)) }
          );
        }
        getPadding() {
          return {
            left: this.paddingLeft || 0,
            top: this.paddingTop || 0,
            right: this.paddingRight || 0,
            bottom: this.paddingBottom || 0,
          };
        }
        getTicks() {
          return this.ticks;
        }
        getLabels() {
          const t = this.chart.data;
          return (
            this.options.labels ||
            (this.isHorizontal() ? t.xLabels : t.yLabels) ||
            t.labels ||
            []
          );
        }
        getLabelItems(t = this.chart.chartArea) {
          return (
            this._labelItems || (this._labelItems = this._computeLabelItems(t))
          );
        }
        beforeLayout() {
          (this._cache = {}), (this._dataLimitsCached = !1);
        }
        beforeUpdate() {
          X(this.options.beforeUpdate, [this]);
        }
        update(t, e, i) {
          const { beginAtZero: s, grace: n, ticks: o } = this.options,
            a = o.sampleSize;
          this.beforeUpdate(),
            (this.maxWidth = t),
            (this.maxHeight = e),
            (this._margins = i =
              Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, i)),
            (this.ticks = null),
            (this._labelSizes = null),
            (this._gridLineItems = null),
            (this._labelItems = null),
            this.beforeSetDimensions(),
            this.setDimensions(),
            this.afterSetDimensions(),
            (this._maxLength = this.isHorizontal()
              ? this.width + i.left + i.right
              : this.height + i.top + i.bottom),
            this._dataLimitsCached ||
              (this.beforeDataLimits(),
              this.determineDataLimits(),
              this.afterDataLimits(),
              (this._range = (function (t, e, i) {
                const { min: s, max: n } = t,
                  o = q(e, (n - s) / 2),
                  a = (t, e) => (i && 0 === t ? 0 : t + e);
                return { min: a(s, -Math.abs(o)), max: a(n, o) };
              })(this, n, s)),
              (this._dataLimitsCached = !0)),
            this.beforeBuildTicks(),
            (this.ticks = this.buildTicks() || []),
            this.afterBuildTicks();
          const r = a < this.ticks.length;
          this._convertTicksToLabels(r ? Ys(this.ticks, a) : this.ticks),
            this.configure(),
            this.beforeCalculateLabelRotation(),
            this.calculateLabelRotation(),
            this.afterCalculateLabelRotation(),
            o.display &&
              (o.autoSkip || "auto" === o.source) &&
              ((this.ticks = Hs(this, this.ticks)),
              (this._labelSizes = null),
              this.afterAutoSkip()),
            r && this._convertTicksToLabels(this.ticks),
            this.beforeFit(),
            this.fit(),
            this.afterFit(),
            this.afterUpdate();
        }
        configure() {
          let t,
            e,
            i = this.options.reverse;
          this.isHorizontal()
            ? ((t = this.left), (e = this.right))
            : ((t = this.top), (e = this.bottom), (i = !i)),
            (this._startPixel = t),
            (this._endPixel = e),
            (this._reversePixels = i),
            (this._length = e - t),
            (this._alignToPixels = this.options.alignToPixels);
        }
        afterUpdate() {
          X(this.options.afterUpdate, [this]);
        }
        beforeSetDimensions() {
          X(this.options.beforeSetDimensions, [this]);
        }
        setDimensions() {
          this.isHorizontal()
            ? ((this.width = this.maxWidth),
              (this.left = 0),
              (this.right = this.width))
            : ((this.height = this.maxHeight),
              (this.top = 0),
              (this.bottom = this.height)),
            (this.paddingLeft = 0),
            (this.paddingTop = 0),
            (this.paddingRight = 0),
            (this.paddingBottom = 0);
        }
        afterSetDimensions() {
          X(this.options.afterSetDimensions, [this]);
        }
        _callHooks(t) {
          this.chart.notifyPlugins(t, this.getContext()),
            X(this.options[t], [this]);
        }
        beforeDataLimits() {
          this._callHooks("beforeDataLimits");
        }
        determineDataLimits() {}
        afterDataLimits() {
          this._callHooks("afterDataLimits");
        }
        beforeBuildTicks() {
          this._callHooks("beforeBuildTicks");
        }
        buildTicks() {
          return [];
        }
        afterBuildTicks() {
          this._callHooks("afterBuildTicks");
        }
        beforeTickToLabelConversion() {
          X(this.options.beforeTickToLabelConversion, [this]);
        }
        generateTickLabels(t) {
          const e = this.options.ticks;
          let i, s, n;
          for (i = 0, s = t.length; i < s; i++)
            (n = t[i]), (n.label = X(e.callback, [n.value, i, t], this));
        }
        afterTickToLabelConversion() {
          X(this.options.afterTickToLabelConversion, [this]);
        }
        beforeCalculateLabelRotation() {
          X(this.options.beforeCalculateLabelRotation, [this]);
        }
        calculateLabelRotation() {
          const t = this.options,
            e = t.ticks,
            i = Us(this.ticks.length, t.ticks.maxTicksLimit),
            s = e.minRotation || 0,
            n = e.maxRotation;
          let o,
            a,
            r,
            h = s;
          if (
            !this._isVisible() ||
            !e.display ||
            s >= n ||
            i <= 1 ||
            !this.isHorizontal()
          )
            return void (this.labelRotation = s);
          const l = this._getLabelSizes(),
            c = l.widest.width,
            d = l.highest.height,
            u = Lt(this.chart.width - c, 0, this.maxWidth);
          (o = t.offset ? this.maxWidth / i : u / (i - 1)),
            c + 6 > o &&
              ((o = u / (i - (t.offset ? 0.5 : 1))),
              (a =
                this.maxHeight -
                Xs(t.grid) -
                e.padding -
                Gs(t.title, this.chart.options.font)),
              (r = Math.sqrt(c * c + d * d)),
              (h = Mt(
                Math.min(
                  Math.asin(Lt((l.highest.height + 6) / o, -1, 1)),
                  Math.asin(Lt(a / r, -1, 1)) - Math.asin(Lt(d / r, -1, 1))
                )
              )),
              (h = Math.max(s, Math.min(n, h)))),
            (this.labelRotation = h);
        }
        afterCalculateLabelRotation() {
          X(this.options.afterCalculateLabelRotation, [this]);
        }
        afterAutoSkip() {}
        beforeFit() {
          X(this.options.beforeFit, [this]);
        }
        fit() {
          const t = { width: 0, height: 0 },
            {
              chart: e,
              options: { ticks: i, title: s, grid: n },
            } = this,
            o = this._isVisible(),
            a = this.isHorizontal();
          if (o) {
            const o = Gs(s, e.options.font);
            if (
              (a
                ? ((t.width = this.maxWidth), (t.height = Xs(n) + o))
                : ((t.height = this.maxHeight), (t.width = Xs(n) + o)),
              i.display && this.ticks.length)
            ) {
              const {
                  first: e,
                  last: s,
                  widest: n,
                  highest: o,
                } = this._getLabelSizes(),
                r = 2 * i.padding,
                h = kt(this.labelRotation),
                l = Math.cos(h),
                c = Math.sin(h);
              if (a) {
                const e = i.mirror ? 0 : c * n.width + l * o.height;
                t.height = Math.min(this.maxHeight, t.height + e + r);
              } else {
                const e = i.mirror ? 0 : l * n.width + c * o.height;
                t.width = Math.min(this.maxWidth, t.width + e + r);
              }
              this._calculatePadding(e, s, c, l);
            }
          }
          this._handleMargins(),
            a
              ? ((this.width = this._length =
                  e.width - this._margins.left - this._margins.right),
                (this.height = t.height))
              : ((this.width = t.width),
                (this.height = this._length =
                  e.height - this._margins.top - this._margins.bottom));
        }
        _calculatePadding(t, e, i, s) {
          const {
              ticks: { align: n, padding: o },
              position: a,
            } = this.options,
            r = 0 !== this.labelRotation,
            h = "top" !== a && "x" === this.axis;
          if (this.isHorizontal()) {
            const a = this.getPixelForTick(0) - this.left,
              l = this.right - this.getPixelForTick(this.ticks.length - 1);
            let c = 0,
              d = 0;
            r
              ? h
                ? ((c = s * t.width), (d = i * e.height))
                : ((c = i * t.height), (d = s * e.width))
              : "start" === n
              ? (d = e.width)
              : "end" === n
              ? (c = t.width)
              : "inner" !== n && ((c = t.width / 2), (d = e.width / 2)),
              (this.paddingLeft = Math.max(
                ((c - a + o) * this.width) / (this.width - a),
                0
              )),
              (this.paddingRight = Math.max(
                ((d - l + o) * this.width) / (this.width - l),
                0
              ));
          } else {
            let i = e.height / 2,
              s = t.height / 2;
            "start" === n
              ? ((i = 0), (s = t.height))
              : "end" === n && ((i = e.height), (s = 0)),
              (this.paddingTop = i + o),
              (this.paddingBottom = s + o);
          }
        }
        _handleMargins() {
          this._margins &&
            ((this._margins.left = Math.max(
              this.paddingLeft,
              this._margins.left
            )),
            (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
            (this._margins.right = Math.max(
              this.paddingRight,
              this._margins.right
            )),
            (this._margins.bottom = Math.max(
              this.paddingBottom,
              this._margins.bottom
            )));
        }
        afterFit() {
          X(this.options.afterFit, [this]);
        }
        isHorizontal() {
          const { axis: t, position: e } = this.options;
          return "top" === e || "bottom" === e || "x" === t;
        }
        isFullSize() {
          return this.options.fullSize;
        }
        _convertTicksToLabels(t) {
          let e, i;
          for (
            this.beforeTickToLabelConversion(),
              this.generateTickLabels(t),
              e = 0,
              i = t.length;
            e < i;
            e++
          )
            H(t[e].label) && (t.splice(e, 1), i--, e--);
          this.afterTickToLabelConversion();
        }
        _getLabelSizes() {
          let t = this._labelSizes;
          if (!t) {
            const e = this.options.ticks.sampleSize;
            let i = this.ticks;
            e < i.length && (i = Ys(i, e)),
              (this._labelSizes = t =
                this._computeLabelSizes(
                  i,
                  i.length,
                  this.options.ticks.maxTicksLimit
                ));
          }
          return t;
        }
        _computeLabelSizes(t, e, i) {
          const { ctx: s, _longestTextCache: n } = this,
            o = [],
            a = [],
            r = Math.floor(e / Us(e, i));
          let h,
            l,
            c,
            d,
            u,
            p,
            f,
            g,
            m,
            b,
            x,
            _ = 0,
            y = 0;
          for (h = 0; h < e; h += r) {
            if (
              ((d = t[h].label),
              (u = this._resolveTickFontOptions(h)),
              (s.font = p = u.string),
              (f = n[p] = n[p] || { data: {}, gc: [] }),
              (g = u.lineHeight),
              (m = b = 0),
              H(d) || j(d))
            ) {
              if (j(d))
                for (l = 0, c = d.length; l < c; ++l)
                  (x = d[l]),
                    H(x) || j(x) || ((m = ce(s, f.data, f.gc, m, x)), (b += g));
            } else (m = ce(s, f.data, f.gc, m, d)), (b = g);
            o.push(m), a.push(b), (_ = Math.max(m, _)), (y = Math.max(b, y));
          }
          !(function (t, e) {
            G(t, (t) => {
              const i = t.gc,
                s = i.length / 2;
              let n;
              if (s > e) {
                for (n = 0; n < s; ++n) delete t.data[i[n]];
                i.splice(0, s);
              }
            });
          })(n, e);
          const v = o.indexOf(_),
            w = a.indexOf(y),
            k = (t) => ({ width: o[t] || 0, height: a[t] || 0 });
          return {
            first: k(0),
            last: k(e - 1),
            widest: k(v),
            highest: k(w),
            widths: o,
            heights: a,
          };
        }
        getLabelForValue(t) {
          return t;
        }
        getPixelForValue(t, e) {
          return NaN;
        }
        getValueForPixel(t) {}
        getPixelForTick(t) {
          const e = this.ticks;
          return t < 0 || t > e.length - 1
            ? null
            : this.getPixelForValue(e[t].value);
        }
        getPixelForDecimal(t) {
          this._reversePixels && (t = 1 - t);
          const e = this._startPixel + t * this._length;
          return Lt(
            this._alignToPixels ? de(this.chart, e, 0) : e,
            -32768,
            32767
          );
        }
        getDecimalForPixel(t) {
          const e = (t - this._startPixel) / this._length;
          return this._reversePixels ? 1 - e : e;
        }
        getBasePixel() {
          return this.getPixelForValue(this.getBaseValue());
        }
        getBaseValue() {
          const { min: t, max: e } = this;
          return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
        }
        getContext(t) {
          const e = this.ticks || [];
          if (t >= 0 && t < e.length) {
            const i = e[t];
            return (
              i.$context ||
              (i.$context = (function (t, e, i) {
                return Re(t, { tick: i, index: e, type: "tick" });
              })(this.getContext(), t, i))
            );
          }
          return (
            this.$context ||
            (this.$context = Re(this.chart.getContext(), {
              scale: this,
              type: "scale",
            }))
          );
        }
        _tickSize() {
          const t = this.options.ticks,
            e = kt(this.labelRotation),
            i = Math.abs(Math.cos(e)),
            s = Math.abs(Math.sin(e)),
            n = this._getLabelSizes(),
            o = t.autoSkipPadding || 0,
            a = n ? n.widest.width + o : 0,
            r = n ? n.highest.height + o : 0;
          return this.isHorizontal()
            ? r * i > a * s
              ? a / i
              : r / s
            : r * s < a * i
            ? r / i
            : a / s;
        }
        _isVisible() {
          const t = this.options.display;
          return "auto" !== t ? !!t : this.getMatchingVisibleMetas().length > 0;
        }
        _computeGridLineItems(t) {
          const e = this.axis,
            i = this.chart,
            s = this.options,
            { grid: n, position: o, border: a } = s,
            r = n.offset,
            h = this.isHorizontal(),
            l = this.ticks.length + (r ? 1 : 0),
            c = Xs(n),
            d = [],
            u = a.setContext(this.getContext()),
            p = u.display ? u.width : 0,
            f = p / 2,
            g = function (t) {
              return de(i, t, p);
            };
          let m, b, x, _, y, v, w, k, M, S, P, C;
          if ("top" === o)
            (m = g(this.bottom)),
              (v = this.bottom - c),
              (k = m - f),
              (S = g(t.top) + f),
              (C = t.bottom);
          else if ("bottom" === o)
            (m = g(this.top)),
              (S = t.top),
              (C = g(t.bottom) - f),
              (v = m + f),
              (k = this.top + c);
          else if ("left" === o)
            (m = g(this.right)),
              (y = this.right - c),
              (w = m - f),
              (M = g(t.left) + f),
              (P = t.right);
          else if ("right" === o)
            (m = g(this.left)),
              (M = t.left),
              (P = g(t.right) - f),
              (y = m + f),
              (w = this.left + c);
          else if ("x" === e) {
            if ("center" === o) m = g((t.top + t.bottom) / 2 + 0.5);
            else if (N(o)) {
              const t = Object.keys(o)[0],
                e = o[t];
              m = g(this.chart.scales[t].getPixelForValue(e));
            }
            (S = t.top), (C = t.bottom), (v = m + f), (k = v + c);
          } else if ("y" === e) {
            if ("center" === o) m = g((t.left + t.right) / 2);
            else if (N(o)) {
              const t = Object.keys(o)[0],
                e = o[t];
              m = g(this.chart.scales[t].getPixelForValue(e));
            }
            (y = m - f), (w = y - c), (M = t.left), (P = t.right);
          }
          const D = Y(s.ticks.maxTicksLimit, l),
            A = Math.max(1, Math.ceil(l / D));
          for (b = 0; b < l; b += A) {
            const t = this.getContext(b),
              e = n.setContext(t),
              s = a.setContext(t),
              o = e.lineWidth,
              l = e.color,
              c = s.dash || [],
              u = s.dashOffset,
              p = e.tickWidth,
              f = e.tickColor,
              g = e.tickBorderDash || [],
              m = e.tickBorderDashOffset;
            (x = qs(this, b, r)),
              void 0 !== x &&
                ((_ = de(i, x, o)),
                h ? (y = w = M = P = _) : (v = k = S = C = _),
                d.push({
                  tx1: y,
                  ty1: v,
                  tx2: w,
                  ty2: k,
                  x1: M,
                  y1: S,
                  x2: P,
                  y2: C,
                  width: o,
                  color: l,
                  borderDash: c,
                  borderDashOffset: u,
                  tickWidth: p,
                  tickColor: f,
                  tickBorderDash: g,
                  tickBorderDashOffset: m,
                }));
          }
          return (this._ticksLength = l), (this._borderValue = m), d;
        }
        _computeLabelItems(t) {
          const e = this.axis,
            i = this.options,
            { position: s, ticks: n } = i,
            o = this.isHorizontal(),
            a = this.ticks,
            { align: r, crossAlign: h, padding: l, mirror: c } = n,
            d = Xs(i.grid),
            u = d + l,
            p = c ? -l : u,
            f = -kt(this.labelRotation),
            g = [];
          let m,
            b,
            x,
            _,
            y,
            v,
            w,
            k,
            M,
            S,
            P,
            C,
            D = "middle";
          if ("top" === s)
            (v = this.bottom - p), (w = this._getXAxisLabelAlignment());
          else if ("bottom" === s)
            (v = this.top + p), (w = this._getXAxisLabelAlignment());
          else if ("left" === s) {
            const t = this._getYAxisLabelAlignment(d);
            (w = t.textAlign), (y = t.x);
          } else if ("right" === s) {
            const t = this._getYAxisLabelAlignment(d);
            (w = t.textAlign), (y = t.x);
          } else if ("x" === e) {
            if ("center" === s) v = (t.top + t.bottom) / 2 + u;
            else if (N(s)) {
              const t = Object.keys(s)[0],
                e = s[t];
              v = this.chart.scales[t].getPixelForValue(e) + u;
            }
            w = this._getXAxisLabelAlignment();
          } else if ("y" === e) {
            if ("center" === s) y = (t.left + t.right) / 2 - u;
            else if (N(s)) {
              const t = Object.keys(s)[0],
                e = s[t];
              y = this.chart.scales[t].getPixelForValue(e);
            }
            w = this._getYAxisLabelAlignment(d).textAlign;
          }
          "y" === e &&
            ("start" === r ? (D = "top") : "end" === r && (D = "bottom"));
          const A = this._getLabelSizes();
          for (m = 0, b = a.length; m < b; ++m) {
            (x = a[m]), (_ = x.label);
            const t = n.setContext(this.getContext(m));
            (k = this.getPixelForTick(m) + n.labelOffset),
              (M = this._resolveTickFontOptions(m)),
              (S = M.lineHeight),
              (P = j(_) ? _.length : 1);
            const e = P / 2,
              i = t.color,
              r = t.textStrokeColor,
              l = t.textStrokeWidth;
            let d,
              u = w;
            if (
              (o
                ? ((y = k),
                  "inner" === w &&
                    (u =
                      m === b - 1
                        ? this.options.reverse
                          ? "left"
                          : "right"
                        : 0 === m
                        ? this.options.reverse
                          ? "right"
                          : "left"
                        : "center"),
                  (C =
                    "top" === s
                      ? "near" === h || 0 !== f
                        ? -P * S + S / 2
                        : "center" === h
                        ? -A.highest.height / 2 - e * S + S
                        : -A.highest.height + S / 2
                      : "near" === h || 0 !== f
                      ? S / 2
                      : "center" === h
                      ? A.highest.height / 2 - e * S
                      : A.highest.height - P * S),
                  c && (C *= -1),
                  0 === f ||
                    t.showLabelBackdrop ||
                    (y += (S / 2) * Math.sin(f)))
                : ((v = k), (C = ((1 - P) * S) / 2)),
              t.showLabelBackdrop)
            ) {
              const e = Le(t.backdropPadding),
                i = A.heights[m],
                s = A.widths[m];
              let n = C - e.top,
                o = 0 - e.left;
              switch (D) {
                case "middle":
                  n -= i / 2;
                  break;
                case "bottom":
                  n -= i;
              }
              switch (w) {
                case "center":
                  o -= s / 2;
                  break;
                case "right":
                  o -= s;
              }
              d = {
                left: o,
                top: n,
                width: s + e.width,
                height: i + e.height,
                color: t.backdropColor,
              };
            }
            g.push({
              label: _,
              font: M,
              textOffset: C,
              options: {
                rotation: f,
                color: i,
                strokeColor: r,
                strokeWidth: l,
                textAlign: u,
                textBaseline: D,
                translation: [y, v],
                backdrop: d,
              },
            });
          }
          return g;
        }
        _getXAxisLabelAlignment() {
          const { position: t, ticks: e } = this.options;
          if (-kt(this.labelRotation)) return "top" === t ? "left" : "right";
          let i = "center";
          return (
            "start" === e.align
              ? (i = "left")
              : "end" === e.align
              ? (i = "right")
              : "inner" === e.align && (i = "inner"),
            i
          );
        }
        _getYAxisLabelAlignment(t) {
          const {
              position: e,
              ticks: { crossAlign: i, mirror: s, padding: n },
            } = this.options,
            o = t + n,
            a = this._getLabelSizes().widest.width;
          let r, h;
          return (
            "left" === e
              ? s
                ? ((h = this.right + n),
                  "near" === i
                    ? (r = "left")
                    : "center" === i
                    ? ((r = "center"), (h += a / 2))
                    : ((r = "right"), (h += a)))
                : ((h = this.right - o),
                  "near" === i
                    ? (r = "right")
                    : "center" === i
                    ? ((r = "center"), (h -= a / 2))
                    : ((r = "left"), (h = this.left)))
              : "right" === e
              ? s
                ? ((h = this.left + n),
                  "near" === i
                    ? (r = "right")
                    : "center" === i
                    ? ((r = "center"), (h -= a / 2))
                    : ((r = "left"), (h -= a)))
                : ((h = this.left + o),
                  "near" === i
                    ? (r = "left")
                    : "center" === i
                    ? ((r = "center"), (h += a / 2))
                    : ((r = "right"), (h = this.right)))
              : (r = "right"),
            { textAlign: r, x: h }
          );
        }
        _computeLabelArea() {
          if (this.options.ticks.mirror) return;
          const t = this.chart,
            e = this.options.position;
          return "left" === e || "right" === e
            ? { top: 0, left: this.left, bottom: t.height, right: this.right }
            : "top" === e || "bottom" === e
            ? { top: this.top, left: 0, bottom: this.bottom, right: t.width }
            : void 0;
        }
        drawBackground() {
          const {
            ctx: t,
            options: { backgroundColor: e },
            left: i,
            top: s,
            width: n,
            height: o,
          } = this;
          e &&
            (t.save(), (t.fillStyle = e), t.fillRect(i, s, n, o), t.restore());
        }
        getLineWidthForValue(t) {
          const e = this.options.grid;
          if (!this._isVisible() || !e.display) return 0;
          const i = this.ticks.findIndex((e) => e.value === t);
          if (i >= 0) {
            return e.setContext(this.getContext(i)).lineWidth;
          }
          return 0;
        }
        drawGrid(t) {
          const e = this.options.grid,
            i = this.ctx,
            s =
              this._gridLineItems ||
              (this._gridLineItems = this._computeGridLineItems(t));
          let n, o;
          const a = (t, e, s) => {
            s.width &&
              s.color &&
              (i.save(),
              (i.lineWidth = s.width),
              (i.strokeStyle = s.color),
              i.setLineDash(s.borderDash || []),
              (i.lineDashOffset = s.borderDashOffset),
              i.beginPath(),
              i.moveTo(t.x, t.y),
              i.lineTo(e.x, e.y),
              i.stroke(),
              i.restore());
          };
          if (e.display)
            for (n = 0, o = s.length; n < o; ++n) {
              const t = s[n];
              e.drawOnChartArea &&
                a({ x: t.x1, y: t.y1 }, { x: t.x2, y: t.y2 }, t),
                e.drawTicks &&
                  a(
                    { x: t.tx1, y: t.ty1 },
                    { x: t.tx2, y: t.ty2 },
                    {
                      color: t.tickColor,
                      width: t.tickWidth,
                      borderDash: t.tickBorderDash,
                      borderDashOffset: t.tickBorderDashOffset,
                    }
                  );
            }
        }
        drawBorder() {
          const {
              chart: t,
              ctx: e,
              options: { border: i, grid: s },
            } = this,
            n = i.setContext(this.getContext()),
            o = i.display ? n.width : 0;
          if (!o) return;
          const a = s.setContext(this.getContext(0)).lineWidth,
            r = this._borderValue;
          let h, l, c, d;
          this.isHorizontal()
            ? ((h = de(t, this.left, o) - o / 2),
              (l = de(t, this.right, a) + a / 2),
              (c = d = r))
            : ((c = de(t, this.top, o) - o / 2),
              (d = de(t, this.bottom, a) + a / 2),
              (h = l = r)),
            e.save(),
            (e.lineWidth = n.width),
            (e.strokeStyle = n.color),
            e.beginPath(),
            e.moveTo(h, c),
            e.lineTo(l, d),
            e.stroke(),
            e.restore();
        }
        drawLabels(t) {
          if (!this.options.ticks.display) return;
          const e = this.ctx,
            i = this._computeLabelArea();
          i && me(e, i);
          const s = this.getLabelItems(t);
          for (const t of s) {
            const i = t.options,
              s = t.font;
            we(e, t.label, 0, t.textOffset, s, i);
          }
          i && be(e);
        }
        drawTitle() {
          const {
            ctx: t,
            options: { position: e, title: i, reverse: s },
          } = this;
          if (!i.display) return;
          const n = Te(i.font),
            o = Le(i.padding),
            a = i.align;
          let r = n.lineHeight / 2;
          "bottom" === e || "center" === e || N(e)
            ? ((r += o.bottom),
              j(i.text) && (r += n.lineHeight * (i.text.length - 1)))
            : (r += o.top);
          const {
            titleX: h,
            titleY: l,
            maxWidth: c,
            rotation: d,
          } = (function (t, e, i, s) {
            const { top: n, left: o, bottom: a, right: r, chart: h } = t,
              { chartArea: l, scales: c } = h;
            let d,
              u,
              p,
              f = 0;
            const g = a - n,
              m = r - o;
            if (t.isHorizontal()) {
              if (((u = jt(s, o, r)), N(i))) {
                const t = Object.keys(i)[0],
                  s = i[t];
                p = c[t].getPixelForValue(s) + g - e;
              } else
                p =
                  "center" === i ? (l.bottom + l.top) / 2 + g - e : $s(t, i, e);
              d = r - o;
            } else {
              if (N(i)) {
                const t = Object.keys(i)[0],
                  s = i[t];
                u = c[t].getPixelForValue(s) - m + e;
              } else
                u =
                  "center" === i ? (l.left + l.right) / 2 - m + e : $s(t, i, e);
              (p = jt(s, a, n)), (f = "left" === i ? -ft : ft);
            }
            return { titleX: u, titleY: p, maxWidth: d, rotation: f };
          })(this, r, e, a);
          we(t, i.text, 0, 0, n, {
            color: i.color,
            maxWidth: c,
            rotation: d,
            textAlign: Ks(a, e, s),
            textBaseline: "middle",
            translation: [h, l],
          });
        }
        draw(t) {
          this._isVisible() &&
            (this.drawBackground(),
            this.drawGrid(t),
            this.drawBorder(),
            this.drawTitle(),
            this.drawLabels(t));
        }
        _layers() {
          const t = this.options,
            e = (t.ticks && t.ticks.z) || 0,
            i = Y(t.grid && t.grid.z, -1),
            s = Y(t.border && t.border.z, 0);
          return this._isVisible() && this.draw === Js.prototype.draw
            ? [
                {
                  z: i,
                  draw: (t) => {
                    this.drawBackground(), this.drawGrid(t), this.drawTitle();
                  },
                },
                {
                  z: s,
                  draw: () => {
                    this.drawBorder();
                  },
                },
                {
                  z: e,
                  draw: (t) => {
                    this.drawLabels(t);
                  },
                },
              ]
            : [
                {
                  z: e,
                  draw: (t) => {
                    this.draw(t);
                  },
                },
              ];
        }
        getMatchingVisibleMetas(t) {
          const e = this.chart.getSortedVisibleDatasetMetas(),
            i = this.axis + "AxisID",
            s = [];
          let n, o;
          for (n = 0, o = e.length; n < o; ++n) {
            const o = e[n];
            o[i] !== this.id || (t && o.type !== t) || s.push(o);
          }
          return s;
        }
        _resolveTickFontOptions(t) {
          return Te(this.options.ticks.setContext(this.getContext(t)).font);
        }
        _maxDigits() {
          const t = this._resolveTickFontOptions(0).lineHeight;
          return (this.isHorizontal() ? this.width : this.height) / t;
        }
      }
      class Zs {
        constructor(t, e, i) {
          (this.type = t),
            (this.scope = e),
            (this.override = i),
            (this.items = Object.create(null));
        }
        isForType(t) {
          return Object.prototype.isPrototypeOf.call(
            this.type.prototype,
            t.prototype
          );
        }
        register(t) {
          const e = Object.getPrototypeOf(t);
          let i;
          (function (t) {
            return "id" in t && "defaults" in t;
          })(e) && (i = this.register(e));
          const s = this.items,
            n = t.id,
            o = this.scope + "." + n;
          if (!n) throw new Error("class does not have id: " + t);
          return (
            n in s ||
              ((s[n] = t),
              (function (t, e, i) {
                const s = tt(Object.create(null), [
                  i ? le.get(i) : {},
                  le.get(e),
                  t.defaults,
                ]);
                le.set(e, s),
                  t.defaultRoutes &&
                    (function (t, e) {
                      Object.keys(e).forEach((i) => {
                        const s = i.split("."),
                          n = s.pop(),
                          o = [t].concat(s).join("."),
                          a = e[i].split("."),
                          r = a.pop(),
                          h = a.join(".");
                        le.route(o, n, h, r);
                      });
                    })(e, t.defaultRoutes);
                t.descriptors && le.describe(e, t.descriptors);
              })(t, o, i),
              this.override && le.override(t.id, t.overrides)),
            o
          );
        }
        get(t) {
          return this.items[t];
        }
        unregister(t) {
          const e = this.items,
            i = t.id,
            s = this.scope;
          i in e && delete e[i],
            s && i in le[s] && (delete le[s][i], this.override && delete ne[i]);
        }
      }
      class Qs {
        constructor() {
          (this.controllers = new Zs(Yi, "datasets", !0)),
            (this.elements = new Zs(Vs, "elements")),
            (this.plugins = new Zs(Object, "plugins")),
            (this.scales = new Zs(Js, "scales")),
            (this._typedRegistries = [
              this.controllers,
              this.scales,
              this.elements,
            ]);
        }
        add(...t) {
          this._each("register", t);
        }
        remove(...t) {
          this._each("unregister", t);
        }
        addControllers(...t) {
          this._each("register", t, this.controllers);
        }
        addElements(...t) {
          this._each("register", t, this.elements);
        }
        addPlugins(...t) {
          this._each("register", t, this.plugins);
        }
        addScales(...t) {
          this._each("register", t, this.scales);
        }
        getController(t) {
          return this._get(t, this.controllers, "controller");
        }
        getElement(t) {
          return this._get(t, this.elements, "element");
        }
        getPlugin(t) {
          return this._get(t, this.plugins, "plugin");
        }
        getScale(t) {
          return this._get(t, this.scales, "scale");
        }
        removeControllers(...t) {
          this._each("unregister", t, this.controllers);
        }
        removeElements(...t) {
          this._each("unregister", t, this.elements);
        }
        removePlugins(...t) {
          this._each("unregister", t, this.plugins);
        }
        removeScales(...t) {
          this._each("unregister", t, this.scales);
        }
        _each(t, e, i) {
          [...e].forEach((e) => {
            const s = i || this._getRegistryForType(e);
            i || s.isForType(e) || (s === this.plugins && e.id)
              ? this._exec(t, s, e)
              : G(e, (e) => {
                  const s = i || this._getRegistryForType(e);
                  this._exec(t, s, e);
                });
          });
        }
        _exec(t, e, i) {
          const s = ot(t);
          X(i["before" + s], [], i), e[t](i), X(i["after" + s], [], i);
        }
        _getRegistryForType(t) {
          for (let e = 0; e < this._typedRegistries.length; e++) {
            const i = this._typedRegistries[e];
            if (i.isForType(t)) return i;
          }
          return this.plugins;
        }
        _get(t, e, i) {
          const s = e.get(t);
          if (void 0 === s)
            throw new Error('"' + t + '" is not a registered ' + i + ".");
          return s;
        }
      }
      var tn = new Qs();
      class en {
        constructor() {
          this._init = [];
        }
        notify(t, e, i, s) {
          "beforeInit" === e &&
            ((this._init = this._createDescriptors(t, !0)),
            this._notify(this._init, t, "install"));
          const n = s ? this._descriptors(t).filter(s) : this._descriptors(t),
            o = this._notify(n, t, e, i);
          return (
            "afterDestroy" === e &&
              (this._notify(n, t, "stop"),
              this._notify(this._init, t, "uninstall")),
            o
          );
        }
        _notify(t, e, i, s) {
          s = s || {};
          for (const n of t) {
            const t = n.plugin;
            if (!1 === X(t[i], [e, s, n.options], t) && s.cancelable) return !1;
          }
          return !0;
        }
        invalidate() {
          H(this._cache) ||
            ((this._oldCache = this._cache), (this._cache = void 0));
        }
        _descriptors(t) {
          if (this._cache) return this._cache;
          const e = (this._cache = this._createDescriptors(t));
          return this._notifyStateChanges(t), e;
        }
        _createDescriptors(t, e) {
          const i = t && t.config,
            s = Y(i.options && i.options.plugins, {}),
            n = (function (t) {
              const e = {},
                i = [],
                s = Object.keys(tn.plugins.items);
              for (let t = 0; t < s.length; t++) i.push(tn.getPlugin(s[t]));
              const n = t.plugins || [];
              for (let t = 0; t < n.length; t++) {
                const s = n[t];
                -1 === i.indexOf(s) && (i.push(s), (e[s.id] = !0));
              }
              return { plugins: i, localIds: e };
            })(i);
          return !1 !== s || e
            ? (function (t, { plugins: e, localIds: i }, s, n) {
                const o = [],
                  a = t.getContext();
                for (const r of e) {
                  const e = r.id,
                    h = sn(s[e], n);
                  null !== h &&
                    o.push({
                      plugin: r,
                      options: nn(t.config, { plugin: r, local: i[e] }, h, a),
                    });
                }
                return o;
              })(t, n, s, e)
            : [];
        }
        _notifyStateChanges(t) {
          const e = this._oldCache || [],
            i = this._cache,
            s = (t, e) =>
              t.filter((t) => !e.some((e) => t.plugin.id === e.plugin.id));
          this._notify(s(e, i), t, "stop"), this._notify(s(i, e), t, "start");
        }
      }
      function sn(t, e) {
        return e || !1 !== t ? (!0 === t ? {} : t) : null;
      }
      function nn(t, { plugin: e, local: i }, s, n) {
        const o = t.pluginScopeKeys(e),
          a = t.getOptionScopes(s, o);
        return (
          i && e.defaults && a.push(e.defaults),
          t.createResolver(a, n, [""], {
            scriptable: !1,
            indexable: !1,
            allKeys: !0,
          })
        );
      }
      function on(t, e) {
        const i = le.datasets[t] || {};
        return (
          ((e.datasets || {})[t] || {}).indexAxis ||
          e.indexAxis ||
          i.indexAxis ||
          "x"
        );
      }
      function an(t) {
        if ("x" === t || "y" === t || "r" === t) return t;
      }
      function rn(t, ...e) {
        if (an(t)) return t;
        for (const s of e) {
          const e =
            s.axis ||
            ("top" === (i = s.position) || "bottom" === i
              ? "x"
              : "left" === i || "right" === i
              ? "y"
              : void 0) ||
            (t.length > 1 && an(t[0].toLowerCase()));
          if (e) return e;
        }
        var i;
        throw new Error(
          `Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`
        );
      }
      function hn(t, e, i) {
        if (i[e + "AxisID"] === t) return { axis: e };
      }
      function ln(t, e) {
        const i = ne[t.type] || { scales: {} },
          s = e.scales || {},
          n = on(t.type, e),
          o = Object.create(null);
        return (
          Object.keys(s).forEach((e) => {
            const a = s[e];
            if (!N(a))
              return console.error(
                `Invalid scale configuration for scale: ${e}`
              );
            if (a._proxy)
              return console.warn(
                `Ignoring resolver passed as options for scale: ${e}`
              );
            const r = rn(
                e,
                a,
                (function (t, e) {
                  if (e.data && e.data.datasets) {
                    const i = e.data.datasets.filter(
                      (e) => e.xAxisID === t || e.yAxisID === t
                    );
                    if (i.length) return hn(t, "x", i[0]) || hn(t, "y", i[0]);
                  }
                  return {};
                })(e, t),
                le.scales[a.type]
              ),
              h = (function (t, e) {
                return t === e ? "_index_" : "_value_";
              })(r, n),
              l = i.scales || {};
            o[e] = et(Object.create(null), [{ axis: r }, a, l[r], l[h]]);
          }),
          t.data.datasets.forEach((i) => {
            const n = i.type || t.type,
              a = i.indexAxis || on(n, e),
              r = (ne[n] || {}).scales || {};
            Object.keys(r).forEach((t) => {
              const e = (function (t, e) {
                  let i = t;
                  return (
                    "_index_" === t
                      ? (i = e)
                      : "_value_" === t && (i = "x" === e ? "y" : "x"),
                    i
                  );
                })(t, a),
                n = i[e + "AxisID"] || e;
              (o[n] = o[n] || Object.create(null)),
                et(o[n], [{ axis: e }, s[n], r[t]]);
            });
          }),
          Object.keys(o).forEach((t) => {
            const e = o[t];
            et(e, [le.scales[e.type], le.scale]);
          }),
          o
        );
      }
      function cn(t) {
        const e = t.options || (t.options = {});
        (e.plugins = Y(e.plugins, {})), (e.scales = ln(t, e));
      }
      function dn(t) {
        return (
          ((t = t || {}).datasets = t.datasets || []),
          (t.labels = t.labels || []),
          t
        );
      }
      const un = new Map(),
        pn = new Set();
      function fn(t, e) {
        let i = un.get(t);
        return i || ((i = e()), un.set(t, i), pn.add(i)), i;
      }
      const gn = (t, e, i) => {
        const s = nt(e, i);
        void 0 !== s && t.add(s);
      };
      class mn {
        constructor(t) {
          (this._config = (function (t) {
            return ((t = t || {}).data = dn(t.data)), cn(t), t;
          })(t)),
            (this._scopeCache = new Map()),
            (this._resolverCache = new Map());
        }
        get platform() {
          return this._config.platform;
        }
        get type() {
          return this._config.type;
        }
        set type(t) {
          this._config.type = t;
        }
        get data() {
          return this._config.data;
        }
        set data(t) {
          this._config.data = dn(t);
        }
        get options() {
          return this._config.options;
        }
        set options(t) {
          this._config.options = t;
        }
        get plugins() {
          return this._config.plugins;
        }
        update() {
          const t = this._config;
          this.clearCache(), cn(t);
        }
        clearCache() {
          this._scopeCache.clear(), this._resolverCache.clear();
        }
        datasetScopeKeys(t) {
          return fn(t, () => [[`datasets.${t}`, ""]]);
        }
        datasetAnimationScopeKeys(t, e) {
          return fn(`${t}.transition.${e}`, () => [
            [`datasets.${t}.transitions.${e}`, `transitions.${e}`],
            [`datasets.${t}`, ""],
          ]);
        }
        datasetElementScopeKeys(t, e) {
          return fn(`${t}-${e}`, () => [
            [
              `datasets.${t}.elements.${e}`,
              `datasets.${t}`,
              `elements.${e}`,
              "",
            ],
          ]);
        }
        pluginScopeKeys(t) {
          const e = t.id;
          return fn(`${this.type}-plugin-${e}`, () => [
            [`plugins.${e}`, ...(t.additionalOptionScopes || [])],
          ]);
        }
        _cachedScopes(t, e) {
          const i = this._scopeCache;
          let s = i.get(t);
          return (s && !e) || ((s = new Map()), i.set(t, s)), s;
        }
        getOptionScopes(t, e, i) {
          const { options: s, type: n } = this,
            o = this._cachedScopes(t, i),
            a = o.get(e);
          if (a) return a;
          const r = new Set();
          e.forEach((e) => {
            t && (r.add(t), e.forEach((e) => gn(r, t, e))),
              e.forEach((t) => gn(r, s, t)),
              e.forEach((t) => gn(r, ne[n] || {}, t)),
              e.forEach((t) => gn(r, le, t)),
              e.forEach((t) => gn(r, oe, t));
          });
          const h = Array.from(r);
          return (
            0 === h.length && h.push(Object.create(null)),
            pn.has(e) && o.set(e, h),
            h
          );
        }
        chartOptionScopes() {
          const { options: t, type: e } = this;
          return [t, ne[e] || {}, le.datasets[e] || {}, { type: e }, le, oe];
        }
        resolveNamedOptions(t, e, i, s = [""]) {
          const n = { $shared: !0 },
            { resolver: o, subPrefixes: a } = bn(this._resolverCache, t, s);
          let r = o;
          if (
            (function (t, e) {
              const { isScriptable: i, isIndexable: s } = Fe(t);
              for (const n of e) {
                const e = i(n),
                  o = s(n),
                  a = (o || e) && t[n];
                if ((e && (rt(a) || xn(a))) || (o && j(a))) return !0;
              }
              return !1;
            })(o, e)
          ) {
            n.$shared = !1;
            r = ze(o, (i = rt(i) ? i() : i), this.createResolver(t, i, a));
          }
          for (const t of e) n[t] = r[t];
          return n;
        }
        createResolver(t, e, i = [""], s) {
          const { resolver: n } = bn(this._resolverCache, t, i);
          return N(e) ? ze(n, e, void 0, s) : n;
        }
      }
      function bn(t, e, i) {
        let s = t.get(e);
        s || ((s = new Map()), t.set(e, s));
        const n = i.join();
        let o = s.get(n);
        if (!o) {
          (o = {
            resolver: Ee(e, i),
            subPrefixes: i.filter((t) => !t.toLowerCase().includes("hover")),
          }),
            s.set(n, o);
        }
        return o;
      }
      const xn = (t) =>
        N(t) &&
        Object.getOwnPropertyNames(t).reduce((e, i) => e || rt(t[i]), !1);
      const _n = ["top", "bottom", "left", "right", "chartArea"];
      function yn(t, e) {
        return (
          "top" === t || "bottom" === t || (-1 === _n.indexOf(t) && "x" === e)
        );
      }
      function vn(t, e) {
        return function (i, s) {
          return i[t] === s[t] ? i[e] - s[e] : i[t] - s[t];
        };
      }
      function wn(t) {
        const e = t.chart,
          i = e.options.animation;
        e.notifyPlugins("afterRender"), X(i && i.onComplete, [t], e);
      }
      function kn(t) {
        const e = t.chart,
          i = e.options.animation;
        X(i && i.onProgress, [t], e);
      }
      function Mn(t) {
        return (
          ei() && "string" == typeof t
            ? (t = document.getElementById(t))
            : t && t.length && (t = t[0]),
          t && t.canvas && (t = t.canvas),
          t
        );
      }
      const Sn = {},
        Pn = (t) => {
          const e = Mn(t);
          return Object.values(Sn)
            .filter((t) => t.canvas === e)
            .pop();
        };
      function Cn(t, e, i) {
        const s = Object.keys(t);
        for (const n of s) {
          const s = +n;
          if (s >= e) {
            const o = t[n];
            delete t[n], (i > 0 || s > e) && (t[s + i] = o);
          }
        }
      }
      function Dn(t, e, i) {
        return t.options.clip ? t[i] : e[i];
      }
      class An {
        static defaults = le;
        static instances = Sn;
        static overrides = ne;
        static registry = tn;
        static version = "4.4.0";
        static getChart = Pn;
        static register(...t) {
          tn.add(...t), On();
        }
        static unregister(...t) {
          tn.remove(...t), On();
        }
        constructor(t, e) {
          const i = (this.config = new mn(e)),
            s = Mn(t),
            n = Pn(s);
          if (n)
            throw new Error(
              "Canvas is already in use. Chart with ID '" +
                n.id +
                "' must be destroyed before the canvas with ID '" +
                n.canvas.id +
                "' can be reused."
            );
          const o = i.createResolver(i.chartOptionScopes(), this.getContext());
          (this.platform = new (i.platform ||
            (function (t) {
              return !ei() ||
                ("undefined" != typeof OffscreenCanvas &&
                  t instanceof OffscreenCanvas)
                ? Ms
                : Ws;
            })(s))()),
            this.platform.updateConfig(i);
          const a = this.platform.acquireContext(s, o.aspectRatio),
            r = a && a.canvas,
            h = r && r.height,
            l = r && r.width;
          (this.id = V()),
            (this.ctx = a),
            (this.canvas = r),
            (this.width = l),
            (this.height = h),
            (this._options = o),
            (this._aspectRatio = this.aspectRatio),
            (this._layers = []),
            (this._metasets = []),
            (this._stacks = void 0),
            (this.boxes = []),
            (this.currentDevicePixelRatio = void 0),
            (this.chartArea = void 0),
            (this._active = []),
            (this._lastEvent = void 0),
            (this._listeners = {}),
            (this._responsiveListeners = void 0),
            (this._sortedMetasets = []),
            (this.scales = {}),
            (this._plugins = new en()),
            (this.$proxies = {}),
            (this._hiddenIndices = {}),
            (this.attached = !1),
            (this._animationsDisabled = void 0),
            (this.$context = void 0),
            (this._doResize = (function (t, e) {
              let i;
              return function (...s) {
                return (
                  e
                    ? (clearTimeout(i), (i = setTimeout(t, e, s)))
                    : t.apply(this, s),
                  e
                );
              };
            })((t) => this.update(t), o.resizeDelay || 0)),
            (this._dataChanges = []),
            (Sn[this.id] = this),
            a && r
              ? (Oi.listen(this, "complete", wn),
                Oi.listen(this, "progress", kn),
                this._initialize(),
                this.attached && this.update())
              : console.error(
                  "Failed to create chart: can't acquire context from the given item"
                );
        }
        get aspectRatio() {
          const {
            options: { aspectRatio: t, maintainAspectRatio: e },
            width: i,
            height: s,
            _aspectRatio: n,
          } = this;
          return H(t) ? (e && n ? n : s ? i / s : null) : t;
        }
        get data() {
          return this.config.data;
        }
        set data(t) {
          this.config.data = t;
        }
        get options() {
          return this._options;
        }
        set options(t) {
          this.config.options = t;
        }
        get registry() {
          return tn;
        }
        _initialize() {
          return (
            this.notifyPlugins("beforeInit"),
            this.options.responsive
              ? this.resize()
              : di(this, this.options.devicePixelRatio),
            this.bindEvents(),
            this.notifyPlugins("afterInit"),
            this
          );
        }
        clear() {
          return ue(this.canvas, this.ctx), this;
        }
        stop() {
          return Oi.stop(this), this;
        }
        resize(t, e) {
          Oi.running(this)
            ? (this._resizeBeforeDraw = { width: t, height: e })
            : this._resize(t, e);
        }
        _resize(t, e) {
          const i = this.options,
            s = this.canvas,
            n = i.maintainAspectRatio && this.aspectRatio,
            o = this.platform.getMaximumSize(s, t, e, n),
            a = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
            r = this.width ? "resize" : "attach";
          (this.width = o.width),
            (this.height = o.height),
            (this._aspectRatio = this.aspectRatio),
            di(this, a, !0) &&
              (this.notifyPlugins("resize", { size: o }),
              X(i.onResize, [this, o], this),
              this.attached && this._doResize(r) && this.render());
        }
        ensureScalesHaveIDs() {
          G(this.options.scales || {}, (t, e) => {
            t.id = e;
          });
        }
        buildOrUpdateScales() {
          const t = this.options,
            e = t.scales,
            i = this.scales,
            s = Object.keys(i).reduce((t, e) => ((t[e] = !1), t), {});
          let n = [];
          e &&
            (n = n.concat(
              Object.keys(e).map((t) => {
                const i = e[t],
                  s = rn(t, i),
                  n = "r" === s,
                  o = "x" === s;
                return {
                  options: i,
                  dposition: n ? "chartArea" : o ? "bottom" : "left",
                  dtype: n ? "radialLinear" : o ? "category" : "linear",
                };
              })
            )),
            G(n, (e) => {
              const n = e.options,
                o = n.id,
                a = rn(o, n),
                r = Y(n.type, e.dtype);
              (void 0 !== n.position &&
                yn(n.position, a) === yn(e.dposition)) ||
                (n.position = e.dposition),
                (s[o] = !0);
              let h = null;
              if (o in i && i[o].type === r) h = i[o];
              else {
                (h = new (tn.getScale(r))({
                  id: o,
                  type: r,
                  ctx: this.ctx,
                  chart: this,
                })),
                  (i[h.id] = h);
              }
              h.init(n, t);
            }),
            G(s, (t, e) => {
              t || delete i[e];
            }),
            G(i, (t) => {
              ws.configure(this, t, t.options), ws.addBox(this, t);
            });
        }
        _updateMetasets() {
          const t = this._metasets,
            e = this.data.datasets.length,
            i = t.length;
          if ((t.sort((t, e) => t.index - e.index), i > e)) {
            for (let t = e; t < i; ++t) this._destroyDatasetMeta(t);
            t.splice(e, i - e);
          }
          this._sortedMetasets = t.slice(0).sort(vn("order", "index"));
        }
        _removeUnreferencedMetasets() {
          const {
            _metasets: t,
            data: { datasets: e },
          } = this;
          t.length > e.length && delete this._stacks,
            t.forEach((t, i) => {
              0 === e.filter((e) => e === t._dataset).length &&
                this._destroyDatasetMeta(i);
            });
        }
        buildOrUpdateControllers() {
          const t = [],
            e = this.data.datasets;
          let i, s;
          for (
            this._removeUnreferencedMetasets(), i = 0, s = e.length;
            i < s;
            i++
          ) {
            const s = e[i];
            let n = this.getDatasetMeta(i);
            const o = s.type || this.config.type;
            if (
              (n.type &&
                n.type !== o &&
                (this._destroyDatasetMeta(i), (n = this.getDatasetMeta(i))),
              (n.type = o),
              (n.indexAxis = s.indexAxis || on(o, this.options)),
              (n.order = s.order || 0),
              (n.index = i),
              (n.label = "" + s.label),
              (n.visible = this.isDatasetVisible(i)),
              n.controller)
            )
              n.controller.updateIndex(i), n.controller.linkScales();
            else {
              const e = tn.getController(o),
                { datasetElementType: s, dataElementType: a } = le.datasets[o];
              Object.assign(e, {
                dataElementType: tn.getElement(a),
                datasetElementType: s && tn.getElement(s),
              }),
                (n.controller = new e(this, i)),
                t.push(n.controller);
            }
          }
          return this._updateMetasets(), t;
        }
        _resetElements() {
          G(
            this.data.datasets,
            (t, e) => {
              this.getDatasetMeta(e).controller.reset();
            },
            this
          );
        }
        reset() {
          this._resetElements(), this.notifyPlugins("reset");
        }
        update(t) {
          const e = this.config;
          e.update();
          const i = (this._options = e.createResolver(
              e.chartOptionScopes(),
              this.getContext()
            )),
            s = (this._animationsDisabled = !i.animation);
          if (
            (this._updateScales(),
            this._checkEventBindings(),
            this._updateHiddenIndices(),
            this._plugins.invalidate(),
            !1 ===
              this.notifyPlugins("beforeUpdate", { mode: t, cancelable: !0 }))
          )
            return;
          const n = this.buildOrUpdateControllers();
          this.notifyPlugins("beforeElementsUpdate");
          let o = 0;
          for (let t = 0, e = this.data.datasets.length; t < e; t++) {
            const { controller: e } = this.getDatasetMeta(t),
              i = !s && -1 === n.indexOf(e);
            e.buildOrUpdateElements(i), (o = Math.max(+e.getMaxOverflow(), o));
          }
          (o = this._minPadding = i.layout.autoPadding ? o : 0),
            this._updateLayout(o),
            s ||
              G(n, (t) => {
                t.reset();
              }),
            this._updateDatasets(t),
            this.notifyPlugins("afterUpdate", { mode: t }),
            this._layers.sort(vn("z", "_idx"));
          const { _active: a, _lastEvent: r } = this;
          r
            ? this._eventHandler(r, !0)
            : a.length && this._updateHoverStyles(a, a, !0),
            this.render();
        }
        _updateScales() {
          G(this.scales, (t) => {
            ws.removeBox(this, t);
          }),
            this.ensureScalesHaveIDs(),
            this.buildOrUpdateScales();
        }
        _checkEventBindings() {
          const t = this.options,
            e = new Set(Object.keys(this._listeners)),
            i = new Set(t.events);
          (ht(e, i) && !!this._responsiveListeners === t.responsive) ||
            (this.unbindEvents(), this.bindEvents());
        }
        _updateHiddenIndices() {
          const { _hiddenIndices: t } = this,
            e = this._getUniformDataChanges() || [];
          for (const { method: i, start: s, count: n } of e) {
            Cn(t, s, "_removeElements" === i ? -n : n);
          }
        }
        _getUniformDataChanges() {
          const t = this._dataChanges;
          if (!t || !t.length) return;
          this._dataChanges = [];
          const e = this.data.datasets.length,
            i = (e) =>
              new Set(
                t
                  .filter((t) => t[0] === e)
                  .map((t, e) => e + "," + t.splice(1).join(","))
              ),
            s = i(0);
          for (let t = 1; t < e; t++) if (!ht(s, i(t))) return;
          return Array.from(s)
            .map((t) => t.split(","))
            .map((t) => ({ method: t[1], start: +t[2], count: +t[3] }));
        }
        _updateLayout(t) {
          if (!1 === this.notifyPlugins("beforeLayout", { cancelable: !0 }))
            return;
          ws.update(this, this.width, this.height, t);
          const e = this.chartArea,
            i = e.width <= 0 || e.height <= 0;
          (this._layers = []),
            G(
              this.boxes,
              (t) => {
                (i && "chartArea" === t.position) ||
                  (t.configure && t.configure(),
                  this._layers.push(...t._layers()));
              },
              this
            ),
            this._layers.forEach((t, e) => {
              t._idx = e;
            }),
            this.notifyPlugins("afterLayout");
        }
        _updateDatasets(t) {
          if (
            !1 !==
            this.notifyPlugins("beforeDatasetsUpdate", {
              mode: t,
              cancelable: !0,
            })
          ) {
            for (let t = 0, e = this.data.datasets.length; t < e; ++t)
              this.getDatasetMeta(t).controller.configure();
            for (let e = 0, i = this.data.datasets.length; e < i; ++e)
              this._updateDataset(e, rt(t) ? t({ datasetIndex: e }) : t);
            this.notifyPlugins("afterDatasetsUpdate", { mode: t });
          }
        }
        _updateDataset(t, e) {
          const i = this.getDatasetMeta(t),
            s = { meta: i, index: t, mode: e, cancelable: !0 };
          !1 !== this.notifyPlugins("beforeDatasetUpdate", s) &&
            (i.controller._update(e),
            (s.cancelable = !1),
            this.notifyPlugins("afterDatasetUpdate", s));
        }
        render() {
          !1 !== this.notifyPlugins("beforeRender", { cancelable: !0 }) &&
            (Oi.has(this)
              ? this.attached && !Oi.running(this) && Oi.start(this)
              : (this.draw(), wn({ chart: this })));
        }
        draw() {
          let t;
          if (this._resizeBeforeDraw) {
            const { width: t, height: e } = this._resizeBeforeDraw;
            this._resize(t, e), (this._resizeBeforeDraw = null);
          }
          if ((this.clear(), this.width <= 0 || this.height <= 0)) return;
          if (!1 === this.notifyPlugins("beforeDraw", { cancelable: !0 }))
            return;
          const e = this._layers;
          for (t = 0; t < e.length && e[t].z <= 0; ++t)
            e[t].draw(this.chartArea);
          for (this._drawDatasets(); t < e.length; ++t)
            e[t].draw(this.chartArea);
          this.notifyPlugins("afterDraw");
        }
        _getSortedDatasetMetas(t) {
          const e = this._sortedMetasets,
            i = [];
          let s, n;
          for (s = 0, n = e.length; s < n; ++s) {
            const n = e[s];
            (t && !n.visible) || i.push(n);
          }
          return i;
        }
        getSortedVisibleDatasetMetas() {
          return this._getSortedDatasetMetas(!0);
        }
        _drawDatasets() {
          if (
            !1 === this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 })
          )
            return;
          const t = this.getSortedVisibleDatasetMetas();
          for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e]);
          this.notifyPlugins("afterDatasetsDraw");
        }
        _drawDataset(t) {
          const e = this.ctx,
            i = t._clip,
            s = !i.disabled,
            n = (function (t, e) {
              const { xScale: i, yScale: s } = t;
              return i && s
                ? {
                    left: Dn(i, e, "left"),
                    right: Dn(i, e, "right"),
                    top: Dn(s, e, "top"),
                    bottom: Dn(s, e, "bottom"),
                  }
                : e;
            })(t, this.chartArea),
            o = { meta: t, index: t.index, cancelable: !0 };
          !1 !== this.notifyPlugins("beforeDatasetDraw", o) &&
            (s &&
              me(e, {
                left: !1 === i.left ? 0 : n.left - i.left,
                right: !1 === i.right ? this.width : n.right + i.right,
                top: !1 === i.top ? 0 : n.top - i.top,
                bottom: !1 === i.bottom ? this.height : n.bottom + i.bottom,
              }),
            t.controller.draw(),
            s && be(e),
            (o.cancelable = !1),
            this.notifyPlugins("afterDatasetDraw", o));
        }
        isPointInArea(t) {
          return ge(t, this.chartArea, this._minPadding);
        }
        getElementsAtEventForMode(t, e, i, s) {
          const n = ls.modes[e];
          return "function" == typeof n ? n(this, t, i, s) : [];
        }
        getDatasetMeta(t) {
          const e = this.data.datasets[t],
            i = this._metasets;
          let s = i.filter((t) => t && t._dataset === e).pop();
          return (
            s ||
              ((s = {
                type: null,
                data: [],
                dataset: null,
                controller: null,
                hidden: null,
                xAxisID: null,
                yAxisID: null,
                order: (e && e.order) || 0,
                index: t,
                _dataset: e,
                _parsed: [],
                _sorted: !1,
              }),
              i.push(s)),
            s
          );
        }
        getContext() {
          return (
            this.$context ||
            (this.$context = Re(null, { chart: this, type: "chart" }))
          );
        }
        getVisibleDatasetCount() {
          return this.getSortedVisibleDatasetMetas().length;
        }
        isDatasetVisible(t) {
          const e = this.data.datasets[t];
          if (!e) return !1;
          const i = this.getDatasetMeta(t);
          return "boolean" == typeof i.hidden ? !i.hidden : !e.hidden;
        }
        setDatasetVisibility(t, e) {
          this.getDatasetMeta(t).hidden = !e;
        }
        toggleDataVisibility(t) {
          this._hiddenIndices[t] = !this._hiddenIndices[t];
        }
        getDataVisibility(t) {
          return !this._hiddenIndices[t];
        }
        _updateVisibility(t, e, i) {
          const s = i ? "show" : "hide",
            n = this.getDatasetMeta(t),
            o = n.controller._resolveAnimations(void 0, s);
          at(e)
            ? ((n.data[e].hidden = !i), this.update())
            : (this.setDatasetVisibility(t, i),
              o.update(n, { visible: i }),
              this.update((e) => (e.datasetIndex === t ? s : void 0)));
        }
        hide(t, e) {
          this._updateVisibility(t, e, !1);
        }
        show(t, e) {
          this._updateVisibility(t, e, !0);
        }
        _destroyDatasetMeta(t) {
          const e = this._metasets[t];
          e && e.controller && e.controller._destroy(),
            delete this._metasets[t];
        }
        _stop() {
          let t, e;
          for (
            this.stop(), Oi.remove(this), t = 0, e = this.data.datasets.length;
            t < e;
            ++t
          )
            this._destroyDatasetMeta(t);
        }
        destroy() {
          this.notifyPlugins("beforeDestroy");
          const { canvas: t, ctx: e } = this;
          this._stop(),
            this.config.clearCache(),
            t &&
              (this.unbindEvents(),
              ue(t, e),
              this.platform.releaseContext(e),
              (this.canvas = null),
              (this.ctx = null)),
            delete Sn[this.id],
            this.notifyPlugins("afterDestroy");
        }
        toBase64Image(...t) {
          return this.canvas.toDataURL(...t);
        }
        bindEvents() {
          this.bindUserEvents(),
            this.options.responsive
              ? this.bindResponsiveEvents()
              : (this.attached = !0);
        }
        bindUserEvents() {
          const t = this._listeners,
            e = this.platform,
            i = (i, s) => {
              e.addEventListener(this, i, s), (t[i] = s);
            },
            s = (t, e, i) => {
              (t.offsetX = e), (t.offsetY = i), this._eventHandler(t);
            };
          G(this.options.events, (t) => i(t, s));
        }
        bindResponsiveEvents() {
          this._responsiveListeners || (this._responsiveListeners = {});
          const t = this._responsiveListeners,
            e = this.platform,
            i = (i, s) => {
              e.addEventListener(this, i, s), (t[i] = s);
            },
            s = (i, s) => {
              t[i] && (e.removeEventListener(this, i, s), delete t[i]);
            },
            n = (t, e) => {
              this.canvas && this.resize(t, e);
            };
          let o;
          const a = () => {
            s("attach", a),
              (this.attached = !0),
              this.resize(),
              i("resize", n),
              i("detach", o);
          };
          (o = () => {
            (this.attached = !1),
              s("resize", n),
              this._stop(),
              this._resize(0, 0),
              i("attach", a);
          }),
            e.isAttached(this.canvas) ? a() : o();
        }
        unbindEvents() {
          G(this._listeners, (t, e) => {
            this.platform.removeEventListener(this, e, t);
          }),
            (this._listeners = {}),
            G(this._responsiveListeners, (t, e) => {
              this.platform.removeEventListener(this, e, t);
            }),
            (this._responsiveListeners = void 0);
        }
        updateHoverStyle(t, e, i) {
          const s = i ? "set" : "remove";
          let n, o, a, r;
          for (
            "dataset" === e &&
              ((n = this.getDatasetMeta(t[0].datasetIndex)),
              n.controller["_" + s + "DatasetHoverStyle"]()),
              a = 0,
              r = t.length;
            a < r;
            ++a
          ) {
            o = t[a];
            const e = o && this.getDatasetMeta(o.datasetIndex).controller;
            e && e[s + "HoverStyle"](o.element, o.datasetIndex, o.index);
          }
        }
        getActiveElements() {
          return this._active || [];
        }
        setActiveElements(t) {
          const e = this._active || [],
            i = t.map(({ datasetIndex: t, index: e }) => {
              const i = this.getDatasetMeta(t);
              if (!i) throw new Error("No dataset found at index " + t);
              return { datasetIndex: t, element: i.data[e], index: e };
            });
          !K(i, e) &&
            ((this._active = i),
            (this._lastEvent = null),
            this._updateHoverStyles(i, e));
        }
        notifyPlugins(t, e, i) {
          return this._plugins.notify(this, t, e, i);
        }
        isPluginEnabled(t) {
          return (
            1 === this._plugins._cache.filter((e) => e.plugin.id === t).length
          );
        }
        _updateHoverStyles(t, e, i) {
          const s = this.options.hover,
            n = (t, e) =>
              t.filter(
                (t) =>
                  !e.some(
                    (e) =>
                      t.datasetIndex === e.datasetIndex && t.index === e.index
                  )
              ),
            o = n(e, t),
            a = i ? t : n(t, e);
          o.length && this.updateHoverStyle(o, s.mode, !1),
            a.length && s.mode && this.updateHoverStyle(a, s.mode, !0);
        }
        _eventHandler(t, e) {
          const i = {
              event: t,
              replay: e,
              cancelable: !0,
              inChartArea: this.isPointInArea(t),
            },
            s = (e) =>
              (e.options.events || this.options.events).includes(t.native.type);
          if (!1 === this.notifyPlugins("beforeEvent", i, s)) return;
          const n = this._handleEvent(t, e, i.inChartArea);
          return (
            (i.cancelable = !1),
            this.notifyPlugins("afterEvent", i, s),
            (n || i.changed) && this.render(),
            this
          );
        }
        _handleEvent(t, e, i) {
          const { _active: s = [], options: n } = this,
            o = e,
            a = this._getActiveElements(t, s, i, o),
            r = (function (t) {
              return (
                "mouseup" === t.type ||
                "click" === t.type ||
                "contextmenu" === t.type
              );
            })(t),
            h = (function (t, e, i, s) {
              return i && "mouseout" !== t.type ? (s ? e : t) : null;
            })(t, this._lastEvent, i, r);
          i &&
            ((this._lastEvent = null),
            X(n.onHover, [t, a, this], this),
            r && X(n.onClick, [t, a, this], this));
          const l = !K(a, s);
          return (
            (l || e) && ((this._active = a), this._updateHoverStyles(a, s, e)),
            (this._lastEvent = h),
            l
          );
        }
        _getActiveElements(t, e, i, s) {
          if ("mouseout" === t.type) return [];
          if (!i) return e;
          const n = this.options.hover;
          return this.getElementsAtEventForMode(t, n.mode, n, s);
        }
      }
      function On() {
        return G(An.instances, (t) => t._plugins.invalidate());
      }
      function Ln(t, e, i = e) {
        (t.lineCap = Y(i.borderCapStyle, e.borderCapStyle)),
          t.setLineDash(Y(i.borderDash, e.borderDash)),
          (t.lineDashOffset = Y(i.borderDashOffset, e.borderDashOffset)),
          (t.lineJoin = Y(i.borderJoinStyle, e.borderJoinStyle)),
          (t.lineWidth = Y(i.borderWidth, e.borderWidth)),
          (t.strokeStyle = Y(i.borderColor, e.borderColor));
      }
      function Tn(t, e, i) {
        t.lineTo(i.x, i.y);
      }
      function In(t, e, i = {}) {
        const s = t.length,
          { start: n = 0, end: o = s - 1 } = i,
          { start: a, end: r } = e,
          h = Math.max(n, a),
          l = Math.min(o, r),
          c = (n < a && o < a) || (n > r && o > r);
        return {
          count: s,
          start: h,
          loop: e.loop,
          ilen: l < h && !c ? s + l - h : l - h,
        };
      }
      function Rn(t, e, i, s) {
        const { points: n, options: o } = e,
          { count: a, start: r, loop: h, ilen: l } = In(n, i, s),
          c = (function (t) {
            return t.stepped
              ? xe
              : t.tension || "monotone" === t.cubicInterpolationMode
              ? _e
              : Tn;
          })(o);
        let d,
          u,
          p,
          { move: f = !0, reverse: g } = s || {};
        for (d = 0; d <= l; ++d)
          (u = n[(r + (g ? l - d : d)) % a]),
            u.skip ||
              (f ? (t.moveTo(u.x, u.y), (f = !1)) : c(t, p, u, g, o.stepped),
              (p = u));
        return (
          h && ((u = n[(r + (g ? l : 0)) % a]), c(t, p, u, g, o.stepped)), !!h
        );
      }
      function En(t, e, i, s) {
        const n = e.points,
          { count: o, start: a, ilen: r } = In(n, i, s),
          { move: h = !0, reverse: l } = s || {};
        let c,
          d,
          u,
          p,
          f,
          g,
          m = 0,
          b = 0;
        const x = (t) => (a + (l ? r - t : t)) % o,
          _ = () => {
            p !== f && (t.lineTo(m, f), t.lineTo(m, p), t.lineTo(m, g));
          };
        for (h && ((d = n[x(0)]), t.moveTo(d.x, d.y)), c = 0; c <= r; ++c) {
          if (((d = n[x(c)]), d.skip)) continue;
          const e = d.x,
            i = d.y,
            s = 0 | e;
          s === u
            ? (i < p ? (p = i) : i > f && (f = i), (m = (b * m + e) / ++b))
            : (_(), t.lineTo(e, i), (u = s), (b = 0), (p = f = i)),
            (g = i);
        }
        _();
      }
      function zn(t) {
        const e = t.options,
          i = e.borderDash && e.borderDash.length;
        return !(
          t._decimated ||
          t._loop ||
          e.tension ||
          "monotone" === e.cubicInterpolationMode ||
          e.stepped ||
          i
        )
          ? En
          : Rn;
      }
      const Fn = "function" == typeof Path2D;
      function Bn(t, e, i, s) {
        Fn && !e.options.segment
          ? (function (t, e, i, s) {
              let n = e._path;
              n ||
                ((n = e._path = new Path2D()),
                e.path(n, i, s) && n.closePath()),
                Ln(t, e.options),
                t.stroke(n);
            })(t, e, i, s)
          : (function (t, e, i, s) {
              const { segments: n, options: o } = e,
                a = zn(e);
              for (const r of n)
                Ln(t, o, r.style),
                  t.beginPath(),
                  a(t, e, r, { start: i, end: i + s - 1 }) && t.closePath(),
                  t.stroke();
            })(t, e, i, s);
      }
      class Wn extends Vs {
        static id = "line";
        static defaults = {
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0,
          borderJoinStyle: "miter",
          borderWidth: 3,
          capBezierPoints: !0,
          cubicInterpolationMode: "default",
          fill: !1,
          spanGaps: !1,
          stepped: !1,
          tension: 0,
        };
        static defaultRoutes = {
          backgroundColor: "backgroundColor",
          borderColor: "borderColor",
        };
        static descriptors = {
          _scriptable: !0,
          _indexable: (t) => "borderDash" !== t && "fill" !== t,
        };
        constructor(t) {
          super(),
            (this.animated = !0),
            (this.options = void 0),
            (this._chart = void 0),
            (this._loop = void 0),
            (this._fullLoop = void 0),
            (this._path = void 0),
            (this._points = void 0),
            (this._segments = void 0),
            (this._decimated = !1),
            (this._pointsUpdated = !1),
            (this._datasetIndex = void 0),
            t && Object.assign(this, t);
        }
        updateControlPoints(t, e) {
          const i = this.options;
          if (
            (i.tension || "monotone" === i.cubicInterpolationMode) &&
            !i.stepped &&
            !this._pointsUpdated
          ) {
            const s = i.spanGaps ? this._loop : this._fullLoop;
            ti(this._points, i, t, s, e), (this._pointsUpdated = !0);
          }
        }
        set points(t) {
          (this._points = t),
            delete this._segments,
            delete this._path,
            (this._pointsUpdated = !1);
        }
        get points() {
          return this._points;
        }
        get segments() {
          return (
            this._segments ||
            (this._segments = (function (t, e) {
              const i = t.points,
                s = t.options.spanGaps,
                n = i.length;
              if (!n) return [];
              const o = !!t._loop,
                { start: a, end: r } = (function (t, e, i, s) {
                  let n = 0,
                    o = e - 1;
                  if (i && !s) for (; n < e && !t[n].skip; ) n++;
                  for (; n < e && t[n].skip; ) n++;
                  for (n %= e, i && (o += n); o > n && t[o % e].skip; ) o--;
                  return (o %= e), { start: n, end: o };
                })(i, n, o, s);
              return Pi(
                t,
                !0 === s
                  ? [{ start: a, end: r, loop: o }]
                  : (function (t, e, i, s) {
                      const n = t.length,
                        o = [];
                      let a,
                        r = e,
                        h = t[e];
                      for (a = e + 1; a <= i; ++a) {
                        const i = t[a % n];
                        i.skip || i.stop
                          ? h.skip ||
                            ((s = !1),
                            o.push({ start: e % n, end: (a - 1) % n, loop: s }),
                            (e = r = i.stop ? a : null))
                          : ((r = a), h.skip && (e = a)),
                          (h = i);
                      }
                      return (
                        null !== r &&
                          o.push({ start: e % n, end: r % n, loop: s }),
                        o
                      );
                    })(
                      i,
                      a,
                      r < a ? r + n : r,
                      !!t._fullLoop && 0 === a && r === n - 1
                    ),
                i,
                e
              );
            })(this, this.options.segment))
          );
        }
        first() {
          const t = this.segments,
            e = this.points;
          return t.length && e[t[0].start];
        }
        last() {
          const t = this.segments,
            e = this.points,
            i = t.length;
          return i && e[t[i - 1].end];
        }
        interpolate(t, e) {
          const i = this.options,
            s = t[e],
            n = this.points,
            o = Si(this, { property: e, start: s, end: s });
          if (!o.length) return;
          const a = [],
            r = (function (t) {
              return t.stepped
                ? gi
                : t.tension || "monotone" === t.cubicInterpolationMode
                ? mi
                : fi;
            })(i);
          let h, l;
          for (h = 0, l = o.length; h < l; ++h) {
            const { start: l, end: c } = o[h],
              d = n[l],
              u = n[c];
            if (d === u) {
              a.push(d);
              continue;
            }
            const p = r(d, u, Math.abs((s - d[e]) / (u[e] - d[e])), i.stepped);
            (p[e] = t[e]), a.push(p);
          }
          return 1 === a.length ? a[0] : a;
        }
        pathSegment(t, e, i) {
          return zn(this)(t, this, e, i);
        }
        path(t, e, i) {
          const s = this.segments,
            n = zn(this);
          let o = this._loop;
          (e = e || 0), (i = i || this.points.length - e);
          for (const a of s) o &= n(t, this, a, { start: e, end: e + i - 1 });
          return !!o;
        }
        draw(t, e, i, s) {
          const n = this.options || {};
          (this.points || []).length &&
            n.borderWidth &&
            (t.save(), Bn(t, this, i, s), t.restore()),
            this.animated &&
              ((this._pointsUpdated = !1), (this._path = void 0));
        }
      }
      function Vn(t, e, i, s) {
        const n = t.options,
          { [i]: o } = t.getProps([i], s);
        return Math.abs(e - o) < n.radius + n.hitRadius;
      }
      class Hn extends Vs {
        static id = "point";
        parsed;
        skip;
        stop;
        static defaults = {
          borderWidth: 1,
          hitRadius: 1,
          hoverBorderWidth: 1,
          hoverRadius: 4,
          pointStyle: "circle",
          radius: 3,
          rotation: 0,
        };
        static defaultRoutes = {
          backgroundColor: "backgroundColor",
          borderColor: "borderColor",
        };
        constructor(t) {
          super(),
            (this.options = void 0),
            (this.parsed = void 0),
            (this.skip = void 0),
            (this.stop = void 0),
            t && Object.assign(this, t);
        }
        inRange(t, e, i) {
          const s = this.options,
            { x: n, y: o } = this.getProps(["x", "y"], i);
          return (
            Math.pow(t - n, 2) + Math.pow(e - o, 2) <
            Math.pow(s.hitRadius + s.radius, 2)
          );
        }
        inXRange(t, e) {
          return Vn(this, t, "x", e);
        }
        inYRange(t, e) {
          return Vn(this, t, "y", e);
        }
        getCenterPoint(t) {
          const { x: e, y: i } = this.getProps(["x", "y"], t);
          return { x: e, y: i };
        }
        size(t) {
          let e = (t = t || this.options || {}).radius || 0;
          e = Math.max(e, (e && t.hoverRadius) || 0);
          return 2 * (e + ((e && t.borderWidth) || 0));
        }
        draw(t, e) {
          const i = this.options;
          this.skip ||
            i.radius < 0.1 ||
            !ge(this, e, this.size(i) / 2) ||
            ((t.strokeStyle = i.borderColor),
            (t.lineWidth = i.borderWidth),
            (t.fillStyle = i.backgroundColor),
            pe(t, i, this.x, this.y));
        }
        getRange() {
          const t = this.options || {};
          return t.radius + t.hitRadius;
        }
      }
      function jn(t, e) {
        const {
          x: i,
          y: s,
          base: n,
          width: o,
          height: a,
        } = t.getProps(["x", "y", "base", "width", "height"], e);
        let r, h, l, c, d;
        return (
          t.horizontal
            ? ((d = a / 2),
              (r = Math.min(i, n)),
              (h = Math.max(i, n)),
              (l = s - d),
              (c = s + d))
            : ((d = o / 2),
              (r = i - d),
              (h = i + d),
              (l = Math.min(s, n)),
              (c = Math.max(s, n))),
          { left: r, top: l, right: h, bottom: c }
        );
      }
      function Nn(t, e, i, s) {
        return t ? 0 : Lt(e, i, s);
      }
      function $n(t) {
        const e = jn(t),
          i = e.right - e.left,
          s = e.bottom - e.top,
          n = (function (t, e, i) {
            const s = t.options.borderWidth,
              n = t.borderSkipped,
              o = Ae(s);
            return {
              t: Nn(n.top, o.top, 0, i),
              r: Nn(n.right, o.right, 0, e),
              b: Nn(n.bottom, o.bottom, 0, i),
              l: Nn(n.left, o.left, 0, e),
            };
          })(t, i / 2, s / 2),
          o = (function (t, e, i) {
            const { enableBorderRadius: s } = t.getProps([
                "enableBorderRadius",
              ]),
              n = t.options.borderRadius,
              o = Oe(n),
              a = Math.min(e, i),
              r = t.borderSkipped,
              h = s || N(n);
            return {
              topLeft: Nn(!h || r.top || r.left, o.topLeft, 0, a),
              topRight: Nn(!h || r.top || r.right, o.topRight, 0, a),
              bottomLeft: Nn(!h || r.bottom || r.left, o.bottomLeft, 0, a),
              bottomRight: Nn(!h || r.bottom || r.right, o.bottomRight, 0, a),
            };
          })(t, i / 2, s / 2);
        return {
          outer: { x: e.left, y: e.top, w: i, h: s, radius: o },
          inner: {
            x: e.left + n.l,
            y: e.top + n.t,
            w: i - n.l - n.r,
            h: s - n.t - n.b,
            radius: {
              topLeft: Math.max(0, o.topLeft - Math.max(n.t, n.l)),
              topRight: Math.max(0, o.topRight - Math.max(n.t, n.r)),
              bottomLeft: Math.max(0, o.bottomLeft - Math.max(n.b, n.l)),
              bottomRight: Math.max(0, o.bottomRight - Math.max(n.b, n.r)),
            },
          },
        };
      }
      function Un(t, e, i, s) {
        const n = null === e,
          o = null === i,
          a = t && !(n && o) && jn(t, s);
        return (
          a && (n || Tt(e, a.left, a.right)) && (o || Tt(i, a.top, a.bottom))
        );
      }
      function Yn(t, e) {
        t.rect(e.x, e.y, e.w, e.h);
      }
      function qn(t, e, i = {}) {
        const s = t.x !== i.x ? -e : 0,
          n = t.y !== i.y ? -e : 0,
          o = (t.x + t.w !== i.x + i.w ? e : 0) - s,
          a = (t.y + t.h !== i.y + i.h ? e : 0) - n;
        return {
          x: t.x + s,
          y: t.y + n,
          w: t.w + o,
          h: t.h + a,
          radius: t.radius,
        };
      }
      class Xn extends Vs {
        static id = "bar";
        static defaults = {
          borderSkipped: "start",
          borderWidth: 0,
          borderRadius: 0,
          inflateAmount: "auto",
          pointStyle: void 0,
        };
        static defaultRoutes = {
          backgroundColor: "backgroundColor",
          borderColor: "borderColor",
        };
        constructor(t) {
          super(),
            (this.options = void 0),
            (this.horizontal = void 0),
            (this.base = void 0),
            (this.width = void 0),
            (this.height = void 0),
            (this.inflateAmount = void 0),
            t && Object.assign(this, t);
        }
        draw(t) {
          const {
              inflateAmount: e,
              options: { borderColor: i, backgroundColor: s },
            } = this,
            { inner: n, outer: o } = $n(this),
            a =
              (r = o.radius).topLeft ||
              r.topRight ||
              r.bottomLeft ||
              r.bottomRight
                ? ke
                : Yn;
          var r;
          t.save(),
            (o.w === n.w && o.h === n.h) ||
              (t.beginPath(),
              a(t, qn(o, e, n)),
              t.clip(),
              a(t, qn(n, -e, o)),
              (t.fillStyle = i),
              t.fill("evenodd")),
            t.beginPath(),
            a(t, qn(n, e)),
            (t.fillStyle = s),
            t.fill(),
            t.restore();
        }
        inRange(t, e, i) {
          return Un(this, t, e, i);
        }
        inXRange(t, e) {
          return Un(this, t, null, e);
        }
        inYRange(t, e) {
          return Un(this, null, t, e);
        }
        getCenterPoint(t) {
          const {
            x: e,
            y: i,
            base: s,
            horizontal: n,
          } = this.getProps(["x", "y", "base", "horizontal"], t);
          return { x: n ? (e + s) / 2 : e, y: n ? i : (i + s) / 2 };
        }
        getRange(t) {
          return "x" === t ? this.width / 2 : this.height / 2;
        }
      }
      const Gn = (t, e) => {
        let { boxHeight: i = e, boxWidth: s = e } = t;
        return (
          t.usePointStyle &&
            ((i = Math.min(i, e)), (s = t.pointStyleWidth || Math.min(s, e))),
          { boxWidth: s, boxHeight: i, itemHeight: Math.max(e, i) }
        );
      };
      class Kn extends Vs {
        constructor(t) {
          super(),
            (this._added = !1),
            (this.legendHitBoxes = []),
            (this._hoveredItem = null),
            (this.doughnutMode = !1),
            (this.chart = t.chart),
            (this.options = t.options),
            (this.ctx = t.ctx),
            (this.legendItems = void 0),
            (this.columnSizes = void 0),
            (this.lineWidths = void 0),
            (this.maxHeight = void 0),
            (this.maxWidth = void 0),
            (this.top = void 0),
            (this.bottom = void 0),
            (this.left = void 0),
            (this.right = void 0),
            (this.height = void 0),
            (this.width = void 0),
            (this._margins = void 0),
            (this.position = void 0),
            (this.weight = void 0),
            (this.fullSize = void 0);
        }
        update(t, e, i) {
          (this.maxWidth = t),
            (this.maxHeight = e),
            (this._margins = i),
            this.setDimensions(),
            this.buildLabels(),
            this.fit();
        }
        setDimensions() {
          this.isHorizontal()
            ? ((this.width = this.maxWidth),
              (this.left = this._margins.left),
              (this.right = this.width))
            : ((this.height = this.maxHeight),
              (this.top = this._margins.top),
              (this.bottom = this.height));
        }
        buildLabels() {
          const t = this.options.labels || {};
          let e = X(t.generateLabels, [this.chart], this) || [];
          t.filter && (e = e.filter((e) => t.filter(e, this.chart.data))),
            t.sort && (e = e.sort((e, i) => t.sort(e, i, this.chart.data))),
            this.options.reverse && e.reverse(),
            (this.legendItems = e);
        }
        fit() {
          const { options: t, ctx: e } = this;
          if (!t.display) return void (this.width = this.height = 0);
          const i = t.labels,
            s = Te(i.font),
            n = s.size,
            o = this._computeTitleHeight(),
            { boxWidth: a, itemHeight: r } = Gn(i, n);
          let h, l;
          (e.font = s.string),
            this.isHorizontal()
              ? ((h = this.maxWidth), (l = this._fitRows(o, n, a, r) + 10))
              : ((l = this.maxHeight), (h = this._fitCols(o, s, a, r) + 10)),
            (this.width = Math.min(h, t.maxWidth || this.maxWidth)),
            (this.height = Math.min(l, t.maxHeight || this.maxHeight));
        }
        _fitRows(t, e, i, s) {
          const {
              ctx: n,
              maxWidth: o,
              options: {
                labels: { padding: a },
              },
            } = this,
            r = (this.legendHitBoxes = []),
            h = (this.lineWidths = [0]),
            l = s + a;
          let c = t;
          (n.textAlign = "left"), (n.textBaseline = "middle");
          let d = -1,
            u = -l;
          return (
            this.legendItems.forEach((t, p) => {
              const f = i + e / 2 + n.measureText(t.text).width;
              (0 === p || h[h.length - 1] + f + 2 * a > o) &&
                ((c += l), (h[h.length - (p > 0 ? 0 : 1)] = 0), (u += l), d++),
                (r[p] = { left: 0, top: u, row: d, width: f, height: s }),
                (h[h.length - 1] += f + a);
            }),
            c
          );
        }
        _fitCols(t, e, i, s) {
          const {
              ctx: n,
              maxHeight: o,
              options: {
                labels: { padding: a },
              },
            } = this,
            r = (this.legendHitBoxes = []),
            h = (this.columnSizes = []),
            l = o - t;
          let c = a,
            d = 0,
            u = 0,
            p = 0,
            f = 0;
          return (
            this.legendItems.forEach((t, o) => {
              const { itemWidth: g, itemHeight: m } = (function (
                t,
                e,
                i,
                s,
                n
              ) {
                const o = (function (t, e, i, s) {
                    let n = t.text;
                    n &&
                      "string" != typeof n &&
                      (n = n.reduce((t, e) => (t.length > e.length ? t : e)));
                    return e + i.size / 2 + s.measureText(n).width;
                  })(s, t, e, i),
                  a = (function (t, e, i) {
                    let s = t;
                    "string" != typeof e.text && (s = Jn(e, i));
                    return s;
                  })(n, s, e.lineHeight);
                return { itemWidth: o, itemHeight: a };
              })(i, e, n, t, s);
              o > 0 &&
                u + m + 2 * a > l &&
                ((c += d + a),
                h.push({ width: d, height: u }),
                (p += d + a),
                f++,
                (d = u = 0)),
                (r[o] = { left: p, top: u, col: f, width: g, height: m }),
                (d = Math.max(d, g)),
                (u += m + a);
            }),
            (c += d),
            h.push({ width: d, height: u }),
            c
          );
        }
        adjustHitBoxes() {
          if (!this.options.display) return;
          const t = this._computeTitleHeight(),
            {
              legendHitBoxes: e,
              options: {
                align: i,
                labels: { padding: s },
                rtl: n,
              },
            } = this,
            o = _i(n, this.left, this.width);
          if (this.isHorizontal()) {
            let n = 0,
              a = jt(i, this.left + s, this.right - this.lineWidths[n]);
            for (const r of e)
              n !== r.row &&
                ((n = r.row),
                (a = jt(i, this.left + s, this.right - this.lineWidths[n]))),
                (r.top += this.top + t + s),
                (r.left = o.leftForLtr(o.x(a), r.width)),
                (a += r.width + s);
          } else {
            let n = 0,
              a = jt(
                i,
                this.top + t + s,
                this.bottom - this.columnSizes[n].height
              );
            for (const r of e)
              r.col !== n &&
                ((n = r.col),
                (a = jt(
                  i,
                  this.top + t + s,
                  this.bottom - this.columnSizes[n].height
                ))),
                (r.top = a),
                (r.left += this.left + s),
                (r.left = o.leftForLtr(o.x(r.left), r.width)),
                (a += r.height + s);
          }
        }
        isHorizontal() {
          return (
            "top" === this.options.position ||
            "bottom" === this.options.position
          );
        }
        draw() {
          if (this.options.display) {
            const t = this.ctx;
            me(t, this), this._draw(), be(t);
          }
        }
        _draw() {
          const { options: t, columnSizes: e, lineWidths: i, ctx: s } = this,
            { align: n, labels: o } = t,
            a = le.color,
            r = _i(t.rtl, this.left, this.width),
            h = Te(o.font),
            { padding: l } = o,
            c = h.size,
            d = c / 2;
          let u;
          this.drawTitle(),
            (s.textAlign = r.textAlign("left")),
            (s.textBaseline = "middle"),
            (s.lineWidth = 0.5),
            (s.font = h.string);
          const { boxWidth: p, boxHeight: f, itemHeight: g } = Gn(o, c),
            m = this.isHorizontal(),
            b = this._computeTitleHeight();
          (u = m
            ? {
                x: jt(n, this.left + l, this.right - i[0]),
                y: this.top + l + b,
                line: 0,
              }
            : {
                x: this.left + l,
                y: jt(n, this.top + b + l, this.bottom - e[0].height),
                line: 0,
              }),
            yi(this.ctx, t.textDirection);
          const x = g + l;
          this.legendItems.forEach((_, y) => {
            (s.strokeStyle = _.fontColor), (s.fillStyle = _.fontColor);
            const v = s.measureText(_.text).width,
              w = r.textAlign(_.textAlign || (_.textAlign = o.textAlign)),
              k = p + d + v;
            let M = u.x,
              S = u.y;
            r.setWidth(this.width),
              m
                ? y > 0 &&
                  M + k + l > this.right &&
                  ((S = u.y += x),
                  u.line++,
                  (M = u.x = jt(n, this.left + l, this.right - i[u.line])))
                : y > 0 &&
                  S + x > this.bottom &&
                  ((M = u.x = M + e[u.line].width + l),
                  u.line++,
                  (S = u.y =
                    jt(n, this.top + b + l, this.bottom - e[u.line].height)));
            if (
              ((function (t, e, i) {
                if (isNaN(p) || p <= 0 || isNaN(f) || f < 0) return;
                s.save();
                const n = Y(i.lineWidth, 1);
                if (
                  ((s.fillStyle = Y(i.fillStyle, a)),
                  (s.lineCap = Y(i.lineCap, "butt")),
                  (s.lineDashOffset = Y(i.lineDashOffset, 0)),
                  (s.lineJoin = Y(i.lineJoin, "miter")),
                  (s.lineWidth = n),
                  (s.strokeStyle = Y(i.strokeStyle, a)),
                  s.setLineDash(Y(i.lineDash, [])),
                  o.usePointStyle)
                ) {
                  const a = {
                      radius: (f * Math.SQRT2) / 2,
                      pointStyle: i.pointStyle,
                      rotation: i.rotation,
                      borderWidth: n,
                    },
                    h = r.xPlus(t, p / 2);
                  fe(s, a, h, e + d, o.pointStyleWidth && p);
                } else {
                  const o = e + Math.max((c - f) / 2, 0),
                    a = r.leftForLtr(t, p),
                    h = Oe(i.borderRadius);
                  s.beginPath(),
                    Object.values(h).some((t) => 0 !== t)
                      ? ke(s, { x: a, y: o, w: p, h: f, radius: h })
                      : s.rect(a, o, p, f),
                    s.fill(),
                    0 !== n && s.stroke();
                }
                s.restore();
              })(r.x(M), S, _),
              (M = ((t, e, i, s) =>
                t === (s ? "left" : "right")
                  ? i
                  : "center" === t
                  ? (e + i) / 2
                  : e)(w, M + p + d, m ? M + k : this.right, t.rtl)),
              (function (t, e, i) {
                we(s, i.text, t, e + g / 2, h, {
                  strikethrough: i.hidden,
                  textAlign: r.textAlign(i.textAlign),
                });
              })(r.x(M), S, _),
              m)
            )
              u.x += k + l;
            else if ("string" != typeof _.text) {
              const t = h.lineHeight;
              u.y += Jn(_, t) + l;
            } else u.y += x;
          }),
            vi(this.ctx, t.textDirection);
        }
        drawTitle() {
          const t = this.options,
            e = t.title,
            i = Te(e.font),
            s = Le(e.padding);
          if (!e.display) return;
          const n = _i(t.rtl, this.left, this.width),
            o = this.ctx,
            a = e.position,
            r = i.size / 2,
            h = s.top + r;
          let l,
            c = this.left,
            d = this.width;
          if (this.isHorizontal())
            (d = Math.max(...this.lineWidths)),
              (l = this.top + h),
              (c = jt(t.align, c, this.right - d));
          else {
            const e = this.columnSizes.reduce(
              (t, e) => Math.max(t, e.height),
              0
            );
            l =
              h +
              jt(
                t.align,
                this.top,
                this.bottom - e - t.labels.padding - this._computeTitleHeight()
              );
          }
          const u = jt(a, c, c + d);
          (o.textAlign = n.textAlign(Ht(a))),
            (o.textBaseline = "middle"),
            (o.strokeStyle = e.color),
            (o.fillStyle = e.color),
            (o.font = i.string),
            we(o, e.text, u, l, i);
        }
        _computeTitleHeight() {
          const t = this.options.title,
            e = Te(t.font),
            i = Le(t.padding);
          return t.display ? e.lineHeight + i.height : 0;
        }
        _getLegendItemAt(t, e) {
          let i, s, n;
          if (Tt(t, this.left, this.right) && Tt(e, this.top, this.bottom))
            for (n = this.legendHitBoxes, i = 0; i < n.length; ++i)
              if (
                ((s = n[i]),
                Tt(t, s.left, s.left + s.width) &&
                  Tt(e, s.top, s.top + s.height))
              )
                return this.legendItems[i];
          return null;
        }
        handleEvent(t) {
          const e = this.options;
          if (
            !(function (t, e) {
              if (
                ("mousemove" === t || "mouseout" === t) &&
                (e.onHover || e.onLeave)
              )
                return !0;
              if (e.onClick && ("click" === t || "mouseup" === t)) return !0;
              return !1;
            })(t.type, e)
          )
            return;
          const i = this._getLegendItemAt(t.x, t.y);
          if ("mousemove" === t.type || "mouseout" === t.type) {
            const o = this._hoveredItem,
              a =
                ((n = i),
                null !== (s = o) &&
                  null !== n &&
                  s.datasetIndex === n.datasetIndex &&
                  s.index === n.index);
            o && !a && X(e.onLeave, [t, o, this], this),
              (this._hoveredItem = i),
              i && !a && X(e.onHover, [t, i, this], this);
          } else i && X(e.onClick, [t, i, this], this);
          var s, n;
        }
      }
      function Jn(t, e) {
        return e * (t.text ? t.text.length : 0);
      }
      var Zn = {
        id: "legend",
        _element: Kn,
        start(t, e, i) {
          const s = (t.legend = new Kn({ ctx: t.ctx, options: i, chart: t }));
          ws.configure(t, s, i), ws.addBox(t, s);
        },
        stop(t) {
          ws.removeBox(t, t.legend), delete t.legend;
        },
        beforeUpdate(t, e, i) {
          const s = t.legend;
          ws.configure(t, s, i), (s.options = i);
        },
        afterUpdate(t) {
          const e = t.legend;
          e.buildLabels(), e.adjustHitBoxes();
        },
        afterEvent(t, e) {
          e.replay || t.legend.handleEvent(e.event);
        },
        defaults: {
          display: !0,
          position: "top",
          align: "center",
          fullSize: !0,
          reverse: !1,
          weight: 1e3,
          onClick(t, e, i) {
            const s = e.datasetIndex,
              n = i.chart;
            n.isDatasetVisible(s)
              ? (n.hide(s), (e.hidden = !0))
              : (n.show(s), (e.hidden = !1));
          },
          onHover: null,
          onLeave: null,
          labels: {
            color: (t) => t.chart.options.color,
            boxWidth: 40,
            padding: 10,
            generateLabels(t) {
              const e = t.data.datasets,
                {
                  labels: {
                    usePointStyle: i,
                    pointStyle: s,
                    textAlign: n,
                    color: o,
                    useBorderRadius: a,
                    borderRadius: r,
                  },
                } = t.legend.options;
              return t._getSortedDatasetMetas().map((t) => {
                const h = t.controller.getStyle(i ? 0 : void 0),
                  l = Le(h.borderWidth);
                return {
                  text: e[t.index].label,
                  fillStyle: h.backgroundColor,
                  fontColor: o,
                  hidden: !t.visible,
                  lineCap: h.borderCapStyle,
                  lineDash: h.borderDash,
                  lineDashOffset: h.borderDashOffset,
                  lineJoin: h.borderJoinStyle,
                  lineWidth: (l.width + l.height) / 4,
                  strokeStyle: h.borderColor,
                  pointStyle: s || h.pointStyle,
                  rotation: h.rotation,
                  textAlign: n || h.textAlign,
                  borderRadius: a && (r || h.borderRadius),
                  datasetIndex: t.index,
                };
              }, this);
            },
          },
          title: {
            color: (t) => t.chart.options.color,
            display: !1,
            position: "center",
            text: "",
          },
        },
        descriptors: {
          _scriptable: (t) => !t.startsWith("on"),
          labels: {
            _scriptable: (t) =>
              !["generateLabels", "filter", "sort"].includes(t),
          },
        },
      };
      class Qn extends Vs {
        constructor(t) {
          super(),
            (this.chart = t.chart),
            (this.options = t.options),
            (this.ctx = t.ctx),
            (this._padding = void 0),
            (this.top = void 0),
            (this.bottom = void 0),
            (this.left = void 0),
            (this.right = void 0),
            (this.width = void 0),
            (this.height = void 0),
            (this.position = void 0),
            (this.weight = void 0),
            (this.fullSize = void 0);
        }
        update(t, e) {
          const i = this.options;
          if (((this.left = 0), (this.top = 0), !i.display))
            return void (this.width =
              this.height =
              this.right =
              this.bottom =
                0);
          (this.width = this.right = t), (this.height = this.bottom = e);
          const s = j(i.text) ? i.text.length : 1;
          this._padding = Le(i.padding);
          const n = s * Te(i.font).lineHeight + this._padding.height;
          this.isHorizontal() ? (this.height = n) : (this.width = n);
        }
        isHorizontal() {
          const t = this.options.position;
          return "top" === t || "bottom" === t;
        }
        _drawArgs(t) {
          const { top: e, left: i, bottom: s, right: n, options: o } = this,
            a = o.align;
          let r,
            h,
            l,
            c = 0;
          return (
            this.isHorizontal()
              ? ((h = jt(a, i, n)), (l = e + t), (r = n - i))
              : ("left" === o.position
                  ? ((h = i + t), (l = jt(a, s, e)), (c = -0.5 * lt))
                  : ((h = n - t), (l = jt(a, e, s)), (c = 0.5 * lt)),
                (r = s - e)),
            { titleX: h, titleY: l, maxWidth: r, rotation: c }
          );
        }
        draw() {
          const t = this.ctx,
            e = this.options;
          if (!e.display) return;
          const i = Te(e.font),
            s = i.lineHeight / 2 + this._padding.top,
            {
              titleX: n,
              titleY: o,
              maxWidth: a,
              rotation: r,
            } = this._drawArgs(s);
          we(t, e.text, 0, 0, i, {
            color: e.color,
            maxWidth: a,
            rotation: r,
            textAlign: Ht(e.align),
            textBaseline: "middle",
            translation: [n, o],
          });
        }
      }
      var to = {
        id: "title",
        _element: Qn,
        start(t, e, i) {
          !(function (t, e) {
            const i = new Qn({ ctx: t.ctx, options: e, chart: t });
            ws.configure(t, i, e), ws.addBox(t, i), (t.titleBlock = i);
          })(t, i);
        },
        stop(t) {
          const e = t.titleBlock;
          ws.removeBox(t, e), delete t.titleBlock;
        },
        beforeUpdate(t, e, i) {
          const s = t.titleBlock;
          ws.configure(t, s, i), (s.options = i);
        },
        defaults: {
          align: "center",
          display: !1,
          font: { weight: "bold" },
          fullSize: !0,
          padding: 10,
          position: "top",
          text: "",
          weight: 2e3,
        },
        defaultRoutes: { color: "color" },
        descriptors: { _scriptable: !0, _indexable: !1 },
      };
      new WeakMap();
      const eo = {
        average(t) {
          if (!t.length) return !1;
          let e,
            i,
            s = 0,
            n = 0,
            o = 0;
          for (e = 0, i = t.length; e < i; ++e) {
            const i = t[e].element;
            if (i && i.hasValue()) {
              const t = i.tooltipPosition();
              (s += t.x), (n += t.y), ++o;
            }
          }
          return { x: s / o, y: n / o };
        },
        nearest(t, e) {
          if (!t.length) return !1;
          let i,
            s,
            n,
            o = e.x,
            a = e.y,
            r = Number.POSITIVE_INFINITY;
          for (i = 0, s = t.length; i < s; ++i) {
            const s = t[i].element;
            if (s && s.hasValue()) {
              const t = Ct(e, s.getCenterPoint());
              t < r && ((r = t), (n = s));
            }
          }
          if (n) {
            const t = n.tooltipPosition();
            (o = t.x), (a = t.y);
          }
          return { x: o, y: a };
        },
      };
      function io(t, e) {
        return e && (j(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
      }
      function so(t) {
        return ("string" == typeof t || t instanceof String) &&
          t.indexOf("\n") > -1
          ? t.split("\n")
          : t;
      }
      function no(t, e) {
        const { element: i, datasetIndex: s, index: n } = e,
          o = t.getDatasetMeta(s).controller,
          { label: a, value: r } = o.getLabelAndValue(n);
        return {
          chart: t,
          label: a,
          parsed: o.getParsed(n),
          raw: t.data.datasets[s].data[n],
          formattedValue: r,
          dataset: o.getDataset(),
          dataIndex: n,
          datasetIndex: s,
          element: i,
        };
      }
      function oo(t, e) {
        const i = t.chart.ctx,
          { body: s, footer: n, title: o } = t,
          { boxWidth: a, boxHeight: r } = e,
          h = Te(e.bodyFont),
          l = Te(e.titleFont),
          c = Te(e.footerFont),
          d = o.length,
          u = n.length,
          p = s.length,
          f = Le(e.padding);
        let g = f.height,
          m = 0,
          b = s.reduce(
            (t, e) => t + e.before.length + e.lines.length + e.after.length,
            0
          );
        if (
          ((b += t.beforeBody.length + t.afterBody.length),
          d &&
            (g +=
              d * l.lineHeight +
              (d - 1) * e.titleSpacing +
              e.titleMarginBottom),
          b)
        ) {
          g +=
            p * (e.displayColors ? Math.max(r, h.lineHeight) : h.lineHeight) +
            (b - p) * h.lineHeight +
            (b - 1) * e.bodySpacing;
        }
        u &&
          (g +=
            e.footerMarginTop + u * c.lineHeight + (u - 1) * e.footerSpacing);
        let x = 0;
        const _ = function (t) {
          m = Math.max(m, i.measureText(t).width + x);
        };
        return (
          i.save(),
          (i.font = l.string),
          G(t.title, _),
          (i.font = h.string),
          G(t.beforeBody.concat(t.afterBody), _),
          (x = e.displayColors ? a + 2 + e.boxPadding : 0),
          G(s, (t) => {
            G(t.before, _), G(t.lines, _), G(t.after, _);
          }),
          (x = 0),
          (i.font = c.string),
          G(t.footer, _),
          i.restore(),
          (m += f.width),
          { width: m, height: g }
        );
      }
      function ao(t, e, i, s) {
        const { x: n, width: o } = i,
          {
            width: a,
            chartArea: { left: r, right: h },
          } = t;
        let l = "center";
        return (
          "center" === s
            ? (l = n <= (r + h) / 2 ? "left" : "right")
            : n <= o / 2
            ? (l = "left")
            : n >= a - o / 2 && (l = "right"),
          (function (t, e, i, s) {
            const { x: n, width: o } = s,
              a = i.caretSize + i.caretPadding;
            return (
              ("left" === t && n + o + a > e.width) ||
              ("right" === t && n - o - a < 0) ||
              void 0
            );
          })(l, t, e, i) && (l = "center"),
          l
        );
      }
      function ro(t, e, i) {
        const s =
          i.yAlign ||
          e.yAlign ||
          (function (t, e) {
            const { y: i, height: s } = e;
            return i < s / 2
              ? "top"
              : i > t.height - s / 2
              ? "bottom"
              : "center";
          })(t, i);
        return { xAlign: i.xAlign || e.xAlign || ao(t, e, i, s), yAlign: s };
      }
      function ho(t, e, i, s) {
        const { caretSize: n, caretPadding: o, cornerRadius: a } = t,
          { xAlign: r, yAlign: h } = i,
          l = n + o,
          { topLeft: c, topRight: d, bottomLeft: u, bottomRight: p } = Oe(a);
        let f = (function (t, e) {
          let { x: i, width: s } = t;
          return "right" === e ? (i -= s) : "center" === e && (i -= s / 2), i;
        })(e, r);
        const g = (function (t, e, i) {
          let { y: s, height: n } = t;
          return (
            "top" === e ? (s += i) : (s -= "bottom" === e ? n + i : n / 2), s
          );
        })(e, h, l);
        return (
          "center" === h
            ? "left" === r
              ? (f += l)
              : "right" === r && (f -= l)
            : "left" === r
            ? (f -= Math.max(c, u) + n)
            : "right" === r && (f += Math.max(d, p) + n),
          { x: Lt(f, 0, s.width - e.width), y: Lt(g, 0, s.height - e.height) }
        );
      }
      function lo(t, e, i) {
        const s = Le(i.padding);
        return "center" === e
          ? t.x + t.width / 2
          : "right" === e
          ? t.x + t.width - s.right
          : t.x + s.left;
      }
      function co(t) {
        return io([], so(t));
      }
      function uo(t, e) {
        const i =
          e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
        return i ? t.override(i) : t;
      }
      const po = {
        beforeTitle: W,
        title(t) {
          if (t.length > 0) {
            const e = t[0],
              i = e.chart.data.labels,
              s = i ? i.length : 0;
            if (this && this.options && "dataset" === this.options.mode)
              return e.dataset.label || "";
            if (e.label) return e.label;
            if (s > 0 && e.dataIndex < s) return i[e.dataIndex];
          }
          return "";
        },
        afterTitle: W,
        beforeBody: W,
        beforeLabel: W,
        label(t) {
          if (this && this.options && "dataset" === this.options.mode)
            return t.label + ": " + t.formattedValue || t.formattedValue;
          let e = t.dataset.label || "";
          e && (e += ": ");
          const i = t.formattedValue;
          return H(i) || (e += i), e;
        },
        labelColor(t) {
          const e = t.chart
            .getDatasetMeta(t.datasetIndex)
            .controller.getStyle(t.dataIndex);
          return {
            borderColor: e.borderColor,
            backgroundColor: e.backgroundColor,
            borderWidth: e.borderWidth,
            borderDash: e.borderDash,
            borderDashOffset: e.borderDashOffset,
            borderRadius: 0,
          };
        },
        labelTextColor() {
          return this.options.bodyColor;
        },
        labelPointStyle(t) {
          const e = t.chart
            .getDatasetMeta(t.datasetIndex)
            .controller.getStyle(t.dataIndex);
          return { pointStyle: e.pointStyle, rotation: e.rotation };
        },
        afterLabel: W,
        afterBody: W,
        beforeFooter: W,
        footer: W,
        afterFooter: W,
      };
      function fo(t, e, i, s) {
        const n = t[e].call(i, s);
        return void 0 === n ? po[e].call(i, s) : n;
      }
      class go extends Vs {
        static positioners = eo;
        constructor(t) {
          super(),
            (this.opacity = 0),
            (this._active = []),
            (this._eventPosition = void 0),
            (this._size = void 0),
            (this._cachedAnimations = void 0),
            (this._tooltipItems = []),
            (this.$animations = void 0),
            (this.$context = void 0),
            (this.chart = t.chart),
            (this.options = t.options),
            (this.dataPoints = void 0),
            (this.title = void 0),
            (this.beforeBody = void 0),
            (this.body = void 0),
            (this.afterBody = void 0),
            (this.footer = void 0),
            (this.xAlign = void 0),
            (this.yAlign = void 0),
            (this.x = void 0),
            (this.y = void 0),
            (this.height = void 0),
            (this.width = void 0),
            (this.caretX = void 0),
            (this.caretY = void 0),
            (this.labelColors = void 0),
            (this.labelPointStyles = void 0),
            (this.labelTextColors = void 0);
        }
        initialize(t) {
          (this.options = t),
            (this._cachedAnimations = void 0),
            (this.$context = void 0);
        }
        _resolveAnimations() {
          const t = this._cachedAnimations;
          if (t) return t;
          const e = this.chart,
            i = this.options.setContext(this.getContext()),
            s = i.enabled && e.options.animation && i.animations,
            n = new Ri(this.chart, s);
          return s._cacheable && (this._cachedAnimations = Object.freeze(n)), n;
        }
        getContext() {
          return (
            this.$context ||
            (this.$context =
              ((t = this.chart.getContext()),
              (e = this),
              (i = this._tooltipItems),
              Re(t, { tooltip: e, tooltipItems: i, type: "tooltip" })))
          );
          var t, e, i;
        }
        getTitle(t, e) {
          const { callbacks: i } = e,
            s = fo(i, "beforeTitle", this, t),
            n = fo(i, "title", this, t),
            o = fo(i, "afterTitle", this, t);
          let a = [];
          return (a = io(a, so(s))), (a = io(a, so(n))), (a = io(a, so(o))), a;
        }
        getBeforeBody(t, e) {
          return co(fo(e.callbacks, "beforeBody", this, t));
        }
        getBody(t, e) {
          const { callbacks: i } = e,
            s = [];
          return (
            G(t, (t) => {
              const e = { before: [], lines: [], after: [] },
                n = uo(i, t);
              io(e.before, so(fo(n, "beforeLabel", this, t))),
                io(e.lines, fo(n, "label", this, t)),
                io(e.after, so(fo(n, "afterLabel", this, t))),
                s.push(e);
            }),
            s
          );
        }
        getAfterBody(t, e) {
          return co(fo(e.callbacks, "afterBody", this, t));
        }
        getFooter(t, e) {
          const { callbacks: i } = e,
            s = fo(i, "beforeFooter", this, t),
            n = fo(i, "footer", this, t),
            o = fo(i, "afterFooter", this, t);
          let a = [];
          return (a = io(a, so(s))), (a = io(a, so(n))), (a = io(a, so(o))), a;
        }
        _createItems(t) {
          const e = this._active,
            i = this.chart.data,
            s = [],
            n = [],
            o = [];
          let a,
            r,
            h = [];
          for (a = 0, r = e.length; a < r; ++a) h.push(no(this.chart, e[a]));
          return (
            t.filter && (h = h.filter((e, s, n) => t.filter(e, s, n, i))),
            t.itemSort && (h = h.sort((e, s) => t.itemSort(e, s, i))),
            G(h, (e) => {
              const i = uo(t.callbacks, e);
              s.push(fo(i, "labelColor", this, e)),
                n.push(fo(i, "labelPointStyle", this, e)),
                o.push(fo(i, "labelTextColor", this, e));
            }),
            (this.labelColors = s),
            (this.labelPointStyles = n),
            (this.labelTextColors = o),
            (this.dataPoints = h),
            h
          );
        }
        update(t, e) {
          const i = this.options.setContext(this.getContext()),
            s = this._active;
          let n,
            o = [];
          if (s.length) {
            const t = eo[i.position].call(this, s, this._eventPosition);
            (o = this._createItems(i)),
              (this.title = this.getTitle(o, i)),
              (this.beforeBody = this.getBeforeBody(o, i)),
              (this.body = this.getBody(o, i)),
              (this.afterBody = this.getAfterBody(o, i)),
              (this.footer = this.getFooter(o, i));
            const e = (this._size = oo(this, i)),
              a = Object.assign({}, t, e),
              r = ro(this.chart, i, a),
              h = ho(i, a, r, this.chart);
            (this.xAlign = r.xAlign),
              (this.yAlign = r.yAlign),
              (n = {
                opacity: 1,
                x: h.x,
                y: h.y,
                width: e.width,
                height: e.height,
                caretX: t.x,
                caretY: t.y,
              });
          } else 0 !== this.opacity && (n = { opacity: 0 });
          (this._tooltipItems = o),
            (this.$context = void 0),
            n && this._resolveAnimations().update(this, n),
            t &&
              i.external &&
              i.external.call(this, {
                chart: this.chart,
                tooltip: this,
                replay: e,
              });
        }
        drawCaret(t, e, i, s) {
          const n = this.getCaretPosition(t, i, s);
          e.lineTo(n.x1, n.y1), e.lineTo(n.x2, n.y2), e.lineTo(n.x3, n.y3);
        }
        getCaretPosition(t, e, i) {
          const { xAlign: s, yAlign: n } = this,
            { caretSize: o, cornerRadius: a } = i,
            { topLeft: r, topRight: h, bottomLeft: l, bottomRight: c } = Oe(a),
            { x: d, y: u } = t,
            { width: p, height: f } = e;
          let g, m, b, x, _, y;
          return (
            "center" === n
              ? ((_ = u + f / 2),
                "left" === s
                  ? ((g = d), (m = g - o), (x = _ + o), (y = _ - o))
                  : ((g = d + p), (m = g + o), (x = _ - o), (y = _ + o)),
                (b = g))
              : ((m =
                  "left" === s
                    ? d + Math.max(r, l) + o
                    : "right" === s
                    ? d + p - Math.max(h, c) - o
                    : this.caretX),
                "top" === n
                  ? ((x = u), (_ = x - o), (g = m - o), (b = m + o))
                  : ((x = u + f), (_ = x + o), (g = m + o), (b = m - o)),
                (y = x)),
            { x1: g, x2: m, x3: b, y1: x, y2: _, y3: y }
          );
        }
        drawTitle(t, e, i) {
          const s = this.title,
            n = s.length;
          let o, a, r;
          if (n) {
            const h = _i(i.rtl, this.x, this.width);
            for (
              t.x = lo(this, i.titleAlign, i),
                e.textAlign = h.textAlign(i.titleAlign),
                e.textBaseline = "middle",
                o = Te(i.titleFont),
                a = i.titleSpacing,
                e.fillStyle = i.titleColor,
                e.font = o.string,
                r = 0;
              r < n;
              ++r
            )
              e.fillText(s[r], h.x(t.x), t.y + o.lineHeight / 2),
                (t.y += o.lineHeight + a),
                r + 1 === n && (t.y += i.titleMarginBottom - a);
          }
        }
        _drawColorBox(t, e, i, s, n) {
          const o = this.labelColors[i],
            a = this.labelPointStyles[i],
            { boxHeight: r, boxWidth: h } = n,
            l = Te(n.bodyFont),
            c = lo(this, "left", n),
            d = s.x(c),
            u = r < l.lineHeight ? (l.lineHeight - r) / 2 : 0,
            p = e.y + u;
          if (n.usePointStyle) {
            const e = {
                radius: Math.min(h, r) / 2,
                pointStyle: a.pointStyle,
                rotation: a.rotation,
                borderWidth: 1,
              },
              i = s.leftForLtr(d, h) + h / 2,
              l = p + r / 2;
            (t.strokeStyle = n.multiKeyBackground),
              (t.fillStyle = n.multiKeyBackground),
              pe(t, e, i, l),
              (t.strokeStyle = o.borderColor),
              (t.fillStyle = o.backgroundColor),
              pe(t, e, i, l);
          } else {
            (t.lineWidth = N(o.borderWidth)
              ? Math.max(...Object.values(o.borderWidth))
              : o.borderWidth || 1),
              (t.strokeStyle = o.borderColor),
              t.setLineDash(o.borderDash || []),
              (t.lineDashOffset = o.borderDashOffset || 0);
            const e = s.leftForLtr(d, h),
              i = s.leftForLtr(s.xPlus(d, 1), h - 2),
              a = Oe(o.borderRadius);
            Object.values(a).some((t) => 0 !== t)
              ? (t.beginPath(),
                (t.fillStyle = n.multiKeyBackground),
                ke(t, { x: e, y: p, w: h, h: r, radius: a }),
                t.fill(),
                t.stroke(),
                (t.fillStyle = o.backgroundColor),
                t.beginPath(),
                ke(t, { x: i, y: p + 1, w: h - 2, h: r - 2, radius: a }),
                t.fill())
              : ((t.fillStyle = n.multiKeyBackground),
                t.fillRect(e, p, h, r),
                t.strokeRect(e, p, h, r),
                (t.fillStyle = o.backgroundColor),
                t.fillRect(i, p + 1, h - 2, r - 2));
          }
          t.fillStyle = this.labelTextColors[i];
        }
        drawBody(t, e, i) {
          const { body: s } = this,
            {
              bodySpacing: n,
              bodyAlign: o,
              displayColors: a,
              boxHeight: r,
              boxWidth: h,
              boxPadding: l,
            } = i,
            c = Te(i.bodyFont);
          let d = c.lineHeight,
            u = 0;
          const p = _i(i.rtl, this.x, this.width),
            f = function (i) {
              e.fillText(i, p.x(t.x + u), t.y + d / 2), (t.y += d + n);
            },
            g = p.textAlign(o);
          let m, b, x, _, y, v, w;
          for (
            e.textAlign = o,
              e.textBaseline = "middle",
              e.font = c.string,
              t.x = lo(this, g, i),
              e.fillStyle = i.bodyColor,
              G(this.beforeBody, f),
              u =
                a && "right" !== g
                  ? "center" === o
                    ? h / 2 + l
                    : h + 2 + l
                  : 0,
              _ = 0,
              v = s.length;
            _ < v;
            ++_
          ) {
            for (
              m = s[_],
                b = this.labelTextColors[_],
                e.fillStyle = b,
                G(m.before, f),
                x = m.lines,
                a &&
                  x.length &&
                  (this._drawColorBox(e, t, _, p, i),
                  (d = Math.max(c.lineHeight, r))),
                y = 0,
                w = x.length;
              y < w;
              ++y
            )
              f(x[y]), (d = c.lineHeight);
            G(m.after, f);
          }
          (u = 0), (d = c.lineHeight), G(this.afterBody, f), (t.y -= n);
        }
        drawFooter(t, e, i) {
          const s = this.footer,
            n = s.length;
          let o, a;
          if (n) {
            const r = _i(i.rtl, this.x, this.width);
            for (
              t.x = lo(this, i.footerAlign, i),
                t.y += i.footerMarginTop,
                e.textAlign = r.textAlign(i.footerAlign),
                e.textBaseline = "middle",
                o = Te(i.footerFont),
                e.fillStyle = i.footerColor,
                e.font = o.string,
                a = 0;
              a < n;
              ++a
            )
              e.fillText(s[a], r.x(t.x), t.y + o.lineHeight / 2),
                (t.y += o.lineHeight + i.footerSpacing);
          }
        }
        drawBackground(t, e, i, s) {
          const { xAlign: n, yAlign: o } = this,
            { x: a, y: r } = t,
            { width: h, height: l } = i,
            {
              topLeft: c,
              topRight: d,
              bottomLeft: u,
              bottomRight: p,
            } = Oe(s.cornerRadius);
          (e.fillStyle = s.backgroundColor),
            (e.strokeStyle = s.borderColor),
            (e.lineWidth = s.borderWidth),
            e.beginPath(),
            e.moveTo(a + c, r),
            "top" === o && this.drawCaret(t, e, i, s),
            e.lineTo(a + h - d, r),
            e.quadraticCurveTo(a + h, r, a + h, r + d),
            "center" === o && "right" === n && this.drawCaret(t, e, i, s),
            e.lineTo(a + h, r + l - p),
            e.quadraticCurveTo(a + h, r + l, a + h - p, r + l),
            "bottom" === o && this.drawCaret(t, e, i, s),
            e.lineTo(a + u, r + l),
            e.quadraticCurveTo(a, r + l, a, r + l - u),
            "center" === o && "left" === n && this.drawCaret(t, e, i, s),
            e.lineTo(a, r + c),
            e.quadraticCurveTo(a, r, a + c, r),
            e.closePath(),
            e.fill(),
            s.borderWidth > 0 && e.stroke();
        }
        _updateAnimationTarget(t) {
          const e = this.chart,
            i = this.$animations,
            s = i && i.x,
            n = i && i.y;
          if (s || n) {
            const i = eo[t.position].call(
              this,
              this._active,
              this._eventPosition
            );
            if (!i) return;
            const o = (this._size = oo(this, t)),
              a = Object.assign({}, i, this._size),
              r = ro(e, t, a),
              h = ho(t, a, r, e);
            (s._to === h.x && n._to === h.y) ||
              ((this.xAlign = r.xAlign),
              (this.yAlign = r.yAlign),
              (this.width = o.width),
              (this.height = o.height),
              (this.caretX = i.x),
              (this.caretY = i.y),
              this._resolveAnimations().update(this, h));
          }
        }
        _willRender() {
          return !!this.opacity;
        }
        draw(t) {
          const e = this.options.setContext(this.getContext());
          let i = this.opacity;
          if (!i) return;
          this._updateAnimationTarget(e);
          const s = { width: this.width, height: this.height },
            n = { x: this.x, y: this.y };
          i = Math.abs(i) < 0.001 ? 0 : i;
          const o = Le(e.padding),
            a =
              this.title.length ||
              this.beforeBody.length ||
              this.body.length ||
              this.afterBody.length ||
              this.footer.length;
          e.enabled &&
            a &&
            (t.save(),
            (t.globalAlpha = i),
            this.drawBackground(n, t, s, e),
            yi(t, e.textDirection),
            (n.y += o.top),
            this.drawTitle(n, t, e),
            this.drawBody(n, t, e),
            this.drawFooter(n, t, e),
            vi(t, e.textDirection),
            t.restore());
        }
        getActiveElements() {
          return this._active || [];
        }
        setActiveElements(t, e) {
          const i = this._active,
            s = t.map(({ datasetIndex: t, index: e }) => {
              const i = this.chart.getDatasetMeta(t);
              if (!i) throw new Error("Cannot find a dataset at index " + t);
              return { datasetIndex: t, element: i.data[e], index: e };
            }),
            n = !K(i, s),
            o = this._positionChanged(s, e);
          (n || o) &&
            ((this._active = s),
            (this._eventPosition = e),
            (this._ignoreReplayEvents = !0),
            this.update(!0));
        }
        handleEvent(t, e, i = !0) {
          if (e && this._ignoreReplayEvents) return !1;
          this._ignoreReplayEvents = !1;
          const s = this.options,
            n = this._active || [],
            o = this._getActiveElements(t, n, e, i),
            a = this._positionChanged(o, t),
            r = e || !K(o, n) || a;
          return (
            r &&
              ((this._active = o),
              (s.enabled || s.external) &&
                ((this._eventPosition = { x: t.x, y: t.y }),
                this.update(!0, e))),
            r
          );
        }
        _getActiveElements(t, e, i, s) {
          const n = this.options;
          if ("mouseout" === t.type) return [];
          if (!s) return e;
          const o = this.chart.getElementsAtEventForMode(t, n.mode, n, i);
          return n.reverse && o.reverse(), o;
        }
        _positionChanged(t, e) {
          const { caretX: i, caretY: s, options: n } = this,
            o = eo[n.position].call(this, t, e);
          return !1 !== o && (i !== o.x || s !== o.y);
        }
      }
      var mo = {
        id: "tooltip",
        _element: go,
        positioners: eo,
        afterInit(t, e, i) {
          i && (t.tooltip = new go({ chart: t, options: i }));
        },
        beforeUpdate(t, e, i) {
          t.tooltip && t.tooltip.initialize(i);
        },
        reset(t, e, i) {
          t.tooltip && t.tooltip.initialize(i);
        },
        afterDraw(t) {
          const e = t.tooltip;
          if (e && e._willRender()) {
            const i = { tooltip: e };
            if (
              !1 ===
              t.notifyPlugins("beforeTooltipDraw", { ...i, cancelable: !0 })
            )
              return;
            e.draw(t.ctx), t.notifyPlugins("afterTooltipDraw", i);
          }
        },
        afterEvent(t, e) {
          if (t.tooltip) {
            const i = e.replay;
            t.tooltip.handleEvent(e.event, i, e.inChartArea) &&
              (e.changed = !0);
          }
        },
        defaults: {
          enabled: !0,
          external: null,
          position: "average",
          backgroundColor: "rgba(0,0,0,0.8)",
          titleColor: "#fff",
          titleFont: { weight: "bold" },
          titleSpacing: 2,
          titleMarginBottom: 6,
          titleAlign: "left",
          bodyColor: "#fff",
          bodySpacing: 2,
          bodyFont: {},
          bodyAlign: "left",
          footerColor: "#fff",
          footerSpacing: 2,
          footerMarginTop: 6,
          footerFont: { weight: "bold" },
          footerAlign: "left",
          padding: 6,
          caretPadding: 2,
          caretSize: 5,
          cornerRadius: 6,
          boxHeight: (t, e) => e.bodyFont.size,
          boxWidth: (t, e) => e.bodyFont.size,
          multiKeyBackground: "#fff",
          displayColors: !0,
          boxPadding: 0,
          borderColor: "rgba(0,0,0,0)",
          borderWidth: 0,
          animation: { duration: 400, easing: "easeOutQuart" },
          animations: {
            numbers: {
              type: "number",
              properties: ["x", "y", "width", "height", "caretX", "caretY"],
            },
            opacity: { easing: "linear", duration: 200 },
          },
          callbacks: po,
        },
        defaultRoutes: {
          bodyFont: "font",
          footerFont: "font",
          titleFont: "font",
        },
        descriptors: {
          _scriptable: (t) =>
            "filter" !== t && "itemSort" !== t && "external" !== t,
          _indexable: !1,
          callbacks: { _scriptable: !1, _indexable: !1 },
          animation: { _fallback: !1 },
          animations: { _fallback: "animation" },
        },
        additionalOptionScopes: ["interaction"],
      };
      const bo = (t, e, i, s) => (
        "string" == typeof e
          ? ((i = t.push(e) - 1), s.unshift({ index: i, label: e }))
          : isNaN(e) && (i = null),
        i
      );
      function xo(t) {
        const e = this.getLabels();
        return t >= 0 && t < e.length ? e[t] : t;
      }
      class _o extends Js {
        static id = "category";
        static defaults = { ticks: { callback: xo } };
        constructor(t) {
          super(t),
            (this._startValue = void 0),
            (this._valueRange = 0),
            (this._addedLabels = []);
        }
        init(t) {
          const e = this._addedLabels;
          if (e.length) {
            const t = this.getLabels();
            for (const { index: i, label: s } of e)
              t[i] === s && t.splice(i, 1);
            this._addedLabels = [];
          }
          super.init(t);
        }
        parse(t, e) {
          if (H(t)) return null;
          const i = this.getLabels();
          return (
            (e =
              isFinite(e) && i[e] === t
                ? e
                : (function (t, e, i, s) {
                    const n = t.indexOf(e);
                    return -1 === n
                      ? bo(t, e, i, s)
                      : n !== t.lastIndexOf(e)
                      ? i
                      : n;
                  })(i, t, Y(e, t), this._addedLabels)),
            ((t, e) => (null === t ? null : Lt(Math.round(t), 0, e)))(
              e,
              i.length - 1
            )
          );
        }
        determineDataLimits() {
          const { minDefined: t, maxDefined: e } = this.getUserBounds();
          let { min: i, max: s } = this.getMinMax(!0);
          "ticks" === this.options.bounds &&
            (t || (i = 0), e || (s = this.getLabels().length - 1)),
            (this.min = i),
            (this.max = s);
        }
        buildTicks() {
          const t = this.min,
            e = this.max,
            i = this.options.offset,
            s = [];
          let n = this.getLabels();
          (n = 0 === t && e === n.length - 1 ? n : n.slice(t, e + 1)),
            (this._valueRange = Math.max(n.length - (i ? 0 : 1), 1)),
            (this._startValue = this.min - (i ? 0.5 : 0));
          for (let i = t; i <= e; i++) s.push({ value: i });
          return s;
        }
        getLabelForValue(t) {
          return xo.call(this, t);
        }
        configure() {
          super.configure(),
            this.isHorizontal() || (this._reversePixels = !this._reversePixels);
        }
        getPixelForValue(t) {
          return (
            "number" != typeof t && (t = this.parse(t)),
            null === t
              ? NaN
              : this.getPixelForDecimal(
                  (t - this._startValue) / this._valueRange
                )
          );
        }
        getPixelForTick(t) {
          const e = this.ticks;
          return t < 0 || t > e.length - 1
            ? null
            : this.getPixelForValue(e[t].value);
        }
        getValueForPixel(t) {
          return Math.round(
            this._startValue + this.getDecimalForPixel(t) * this._valueRange
          );
        }
        getBasePixel() {
          return this.bottom;
        }
      }
      function yo(t, e) {
        const i = [],
          {
            bounds: s,
            step: n,
            min: o,
            max: a,
            precision: r,
            count: h,
            maxTicks: l,
            maxDigits: c,
            includeBounds: d,
          } = t,
          u = n || 1,
          p = l - 1,
          { min: f, max: g } = e,
          m = !H(o),
          b = !H(a),
          x = !H(h),
          _ = (g - f) / (c + 1);
        let y,
          v,
          w,
          k,
          M = yt((g - f) / p / u) * u;
        if (M < 1e-14 && !m && !b) return [{ value: f }, { value: g }];
        (k = Math.ceil(g / M) - Math.floor(f / M)),
          k > p && (M = yt((k * M) / p / u) * u),
          H(r) || ((y = Math.pow(10, r)), (M = Math.ceil(M * y) / y)),
          "ticks" === s
            ? ((v = Math.floor(f / M) * M), (w = Math.ceil(g / M) * M))
            : ((v = f), (w = g)),
          m &&
          b &&
          n &&
          (function (t, e) {
            const i = Math.round(t);
            return i - e <= t && i + e >= t;
          })((a - o) / n, M / 1e3)
            ? ((k = Math.round(Math.min((a - o) / M, l))),
              (M = (a - o) / k),
              (v = o),
              (w = a))
            : x
            ? ((v = m ? o : v), (w = b ? a : w), (k = h - 1), (M = (w - v) / k))
            : ((k = (w - v) / M),
              (k = _t(k, Math.round(k), M / 1e3)
                ? Math.round(k)
                : Math.ceil(k)));
        const S = Math.max(St(M), St(v));
        (y = Math.pow(10, H(r) ? S : r)),
          (v = Math.round(v * y) / y),
          (w = Math.round(w * y) / y);
        let P = 0;
        for (
          m &&
          (d && v !== o
            ? (i.push({ value: o }),
              v < o && P++,
              _t(Math.round((v + P * M) * y) / y, o, vo(o, _, t)) && P++)
            : v < o && P++);
          P < k;
          ++P
        ) {
          const t = Math.round((v + P * M) * y) / y;
          if (b && t > a) break;
          i.push({ value: t });
        }
        return (
          b && d && w !== a
            ? i.length && _t(i[i.length - 1].value, a, vo(a, _, t))
              ? (i[i.length - 1].value = a)
              : i.push({ value: a })
            : (b && w !== a) || i.push({ value: w }),
          i
        );
      }
      function vo(t, e, { horizontal: i, minRotation: s }) {
        const n = kt(s),
          o = (i ? Math.sin(n) : Math.cos(n)) || 0.001,
          a = 0.75 * e * ("" + t).length;
        return Math.min(e / o, a);
      }
      class wo extends Js {
        constructor(t) {
          super(t),
            (this.start = void 0),
            (this.end = void 0),
            (this._startValue = void 0),
            (this._endValue = void 0),
            (this._valueRange = 0);
        }
        parse(t, e) {
          return H(t) ||
            (("number" == typeof t || t instanceof Number) && !isFinite(+t))
            ? null
            : +t;
        }
        handleTickRangeOptions() {
          const { beginAtZero: t } = this.options,
            { minDefined: e, maxDefined: i } = this.getUserBounds();
          let { min: s, max: n } = this;
          const o = (t) => (s = e ? s : t),
            a = (t) => (n = i ? n : t);
          if (t) {
            const t = xt(s),
              e = xt(n);
            t < 0 && e < 0 ? a(0) : t > 0 && e > 0 && o(0);
          }
          if (s === n) {
            let e = 0 === n ? 1 : Math.abs(0.05 * n);
            a(n + e), t || o(s - e);
          }
          (this.min = s), (this.max = n);
        }
        getTickLimit() {
          const t = this.options.ticks;
          let e,
            { maxTicksLimit: i, stepSize: s } = t;
          return (
            s
              ? ((e = Math.ceil(this.max / s) - Math.floor(this.min / s) + 1),
                e > 1e3 &&
                  (console.warn(
                    `scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${e} ticks. Limiting to 1000.`
                  ),
                  (e = 1e3)))
              : ((e = this.computeTickLimit()), (i = i || 11)),
            i && (e = Math.min(i, e)),
            e
          );
        }
        computeTickLimit() {
          return Number.POSITIVE_INFINITY;
        }
        buildTicks() {
          const t = this.options,
            e = t.ticks;
          let i = this.getTickLimit();
          i = Math.max(2, i);
          const s = yo(
            {
              maxTicks: i,
              bounds: t.bounds,
              min: t.min,
              max: t.max,
              precision: e.precision,
              step: e.stepSize,
              count: e.count,
              maxDigits: this._maxDigits(),
              horizontal: this.isHorizontal(),
              minRotation: e.minRotation || 0,
              includeBounds: !1 !== e.includeBounds,
            },
            this._range || this
          );
          return (
            "ticks" === t.bounds && wt(s, this, "value"),
            t.reverse
              ? (s.reverse(), (this.start = this.max), (this.end = this.min))
              : ((this.start = this.min), (this.end = this.max)),
            s
          );
        }
        configure() {
          const t = this.ticks;
          let e = this.min,
            i = this.max;
          if ((super.configure(), this.options.offset && t.length)) {
            const s = (i - e) / Math.max(t.length - 1, 1) / 2;
            (e -= s), (i += s);
          }
          (this._startValue = e),
            (this._endValue = i),
            (this._valueRange = i - e);
        }
        getLabelForValue(t) {
          return ee(t, this.chart.options.locale, this.options.ticks.format);
        }
      }
      class ko extends wo {
        static id = "linear";
        static defaults = { ticks: { callback: se.formatters.numeric } };
        determineDataLimits() {
          const { min: t, max: e } = this.getMinMax(!0);
          (this.min = $(t) ? t : 0),
            (this.max = $(e) ? e : 1),
            this.handleTickRangeOptions();
        }
        computeTickLimit() {
          const t = this.isHorizontal(),
            e = t ? this.width : this.height,
            i = kt(this.options.ticks.minRotation),
            s = (t ? Math.sin(i) : Math.cos(i)) || 0.001,
            n = this._resolveTickFontOptions(0);
          return Math.ceil(e / Math.min(40, n.lineHeight / s));
        }
        getPixelForValue(t) {
          return null === t
            ? NaN
            : this.getPixelForDecimal(
                (t - this._startValue) / this._valueRange
              );
        }
        getValueForPixel(t) {
          return (
            this._startValue + this.getDecimalForPixel(t) * this._valueRange
          );
        }
      }
      class Mo extends Js {
        static id = "logarithmic";
        static defaults = {
          ticks: {
            callback: se.formatters.logarithmic,
            major: { enabled: !0 },
          },
        };
        constructor(t) {
          super(t),
            (this.start = void 0),
            (this.end = void 0),
            (this._startValue = void 0),
            (this._valueRange = 0);
        }
        parse(t, e) {
          const i = wo.prototype.parse.apply(this, [t, e]);
          if (0 !== i) return $(i) && i > 0 ? i : null;
          this._zero = !0;
        }
        determineDataLimits() {
          const { min: t, max: e } = this.getMinMax(!0);
          (this.min = $(t) ? Math.max(0, t) : null),
            (this.max = $(e) ? Math.max(0, e) : null),
            this.options.beginAtZero && (this._zero = !0),
            this._zero &&
              this.min !== this._suggestedMin &&
              !$(this._userMin) &&
              (this.min =
                t === changeExponent(this.min, 0)
                  ? changeExponent(this.min, -1)
                  : changeExponent(this.min, 0)),
            this.handleTickRangeOptions();
        }
        handleTickRangeOptions() {
          const { minDefined: t, maxDefined: e } = this.getUserBounds();
          let i = this.min,
            s = this.max;
          const n = (e) => (t ? i : e),
            o = (t) => (e ? s : t);
          i === s &&
            (i <= 0
              ? (n(1), o(10))
              : (n(changeExponent(i, -1)), o(changeExponent(s, 1)))),
            i <= 0 && n(changeExponent(s, -1)),
            s <= 0 && o(changeExponent(i, 1)),
            (this.min = i),
            (this.max = s);
        }
        buildTicks() {
          const t = this.options,
            e = generateTicks({ min: this._userMin, max: this._userMax }, this);
          return (
            "ticks" === t.bounds && wt(e, this, "value"),
            t.reverse
              ? (e.reverse(), (this.start = this.max), (this.end = this.min))
              : ((this.start = this.min), (this.end = this.max)),
            e
          );
        }
        getLabelForValue(t) {
          return void 0 === t
            ? "0"
            : ee(t, this.chart.options.locale, this.options.ticks.format);
        }
        configure() {
          const t = this.min;
          super.configure(),
            (this._startValue = bt(t)),
            (this._valueRange = bt(this.max) - bt(t));
        }
        getPixelForValue(t) {
          return (
            (void 0 !== t && 0 !== t) || this.min,
            null === t || isNaN(t)
              ? NaN
              : this.getPixelForDecimal(
                  t === this.min
                    ? 0
                    : (bt(t) - this._startValue) / this._valueRange
                )
          );
        }
        getValueForPixel(t) {
          const e = this.getDecimalForPixel(t);
          return Math.pow(10, this._startValue + e * this._valueRange);
        }
      }
      class So extends wo {
        static id = "radialLinear";
        static defaults = {
          display: !0,
          animate: !0,
          position: "chartArea",
          angleLines: {
            display: !0,
            lineWidth: 1,
            borderDash: [],
            borderDashOffset: 0,
          },
          grid: { circular: !1 },
          startAngle: 0,
          ticks: { showLabelBackdrop: !0, callback: se.formatters.numeric },
          pointLabels: {
            backdropColor: void 0,
            backdropPadding: 2,
            display: !0,
            font: { size: 10 },
            callback: (t) => t,
            padding: 5,
            centerPointLabels: !1,
          },
        };
        static defaultRoutes = {
          "angleLines.color": "borderColor",
          "pointLabels.color": "color",
          "ticks.color": "color",
        };
        static descriptors = { angleLines: { _fallback: "grid" } };
        constructor(t) {
          super(t),
            (this.xCenter = void 0),
            (this.yCenter = void 0),
            (this.drawingArea = void 0),
            (this._pointLabels = []),
            (this._pointLabelItems = []);
        }
        setDimensions() {
          const t = (this._padding = Le(
              getTickBackdropHeight(this.options) / 2
            )),
            e = (this.width = this.maxWidth - t.width),
            i = (this.height = this.maxHeight - t.height);
          (this.xCenter = Math.floor(this.left + e / 2 + t.left)),
            (this.yCenter = Math.floor(this.top + i / 2 + t.top)),
            (this.drawingArea = Math.floor(Math.min(e, i) / 2));
        }
        determineDataLimits() {
          const { min: t, max: e } = this.getMinMax(!1);
          (this.min = $(t) && !isNaN(t) ? t : 0),
            (this.max = $(e) && !isNaN(e) ? e : 0),
            this.handleTickRangeOptions();
        }
        computeTickLimit() {
          return Math.ceil(
            this.drawingArea / getTickBackdropHeight(this.options)
          );
        }
        generateTickLabels(t) {
          wo.prototype.generateTickLabels.call(this, t),
            (this._pointLabels = this.getLabels()
              .map((t, e) => {
                const i = X(this.options.pointLabels.callback, [t, e], this);
                return i || 0 === i ? i : "";
              })
              .filter((t, e) => this.chart.getDataVisibility(e)));
        }
        fit() {
          const t = this.options;
          t.display && t.pointLabels.display
            ? fitWithPointLabels(this)
            : this.setCenterPoint(0, 0, 0, 0);
        }
        setCenterPoint(t, e, i, s) {
          (this.xCenter += Math.floor((t - e) / 2)),
            (this.yCenter += Math.floor((i - s) / 2)),
            (this.drawingArea -= Math.min(
              this.drawingArea / 2,
              Math.max(t, e, i, s)
            ));
        }
        getIndexAngle(t) {
          return At(
            t * (ct / (this._pointLabels.length || 1)) +
              kt(this.options.startAngle || 0)
          );
        }
        getDistanceFromCenterForValue(t) {
          if (H(t)) return NaN;
          const e = this.drawingArea / (this.max - this.min);
          return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
        }
        getValueForDistanceFromCenter(t) {
          if (H(t)) return NaN;
          const e = t / (this.drawingArea / (this.max - this.min));
          return this.options.reverse ? this.max - e : this.min + e;
        }
        getPointLabelContext(t) {
          const e = this._pointLabels || [];
          if (t >= 0 && t < e.length) {
            const i = e[t];
            return (function (t, e, i) {
              return Re(t, { label: i, index: e, type: "pointLabel" });
            })(this.getContext(), t, i);
          }
        }
        getPointPosition(t, e, i = 0) {
          const s = this.getIndexAngle(t) - ft + i;
          return {
            x: Math.cos(s) * e + this.xCenter,
            y: Math.sin(s) * e + this.yCenter,
            angle: s,
          };
        }
        getPointPositionForValue(t, e) {
          return this.getPointPosition(
            t,
            this.getDistanceFromCenterForValue(e)
          );
        }
        getBasePosition(t) {
          return this.getPointPositionForValue(t || 0, this.getBaseValue());
        }
        getPointLabelPosition(t) {
          const {
            left: e,
            top: i,
            right: s,
            bottom: n,
          } = this._pointLabelItems[t];
          return { left: e, top: i, right: s, bottom: n };
        }
        drawBackground() {
          const {
            backgroundColor: t,
            grid: { circular: e },
          } = this.options;
          if (t) {
            const i = this.ctx;
            i.save(),
              i.beginPath(),
              pathRadiusLine(
                this,
                this.getDistanceFromCenterForValue(this._endValue),
                e,
                this._pointLabels.length
              ),
              i.closePath(),
              (i.fillStyle = t),
              i.fill(),
              i.restore();
          }
        }
        drawGrid() {
          const t = this.ctx,
            e = this.options,
            { angleLines: i, grid: s, border: n } = e,
            o = this._pointLabels.length;
          let a, r, h;
          if (
            (e.pointLabels.display &&
              (function (t, e) {
                const {
                  ctx: i,
                  options: { pointLabels: s },
                } = t;
                for (let n = e - 1; n >= 0; n--) {
                  const e = t._pointLabelItems[n];
                  if (!e.visible) continue;
                  const o = s.setContext(t.getPointLabelContext(n));
                  drawPointLabelBox(i, o, e);
                  const a = Te(o.font),
                    { x: r, y: h, textAlign: l } = e;
                  we(i, t._pointLabels[n], r, h + a.lineHeight / 2, a, {
                    color: o.color,
                    textAlign: l,
                    textBaseline: "middle",
                  });
                }
              })(this, o),
            s.display &&
              this.ticks.forEach((t, e) => {
                if (0 !== e) {
                  this.getDistanceFromCenterForValue(t.value);
                  const i = this.getContext(e),
                    a = s.setContext(i),
                    h = n.setContext(i);
                  !(function (t, e, i, s, n) {
                    const o = t.ctx,
                      a = e.circular,
                      { color: r, lineWidth: h } = e;
                    (!a && !s) ||
                      !r ||
                      !h ||
                      i < 0 ||
                      (o.save(),
                      (o.strokeStyle = r),
                      (o.lineWidth = h),
                      o.setLineDash(n.dash),
                      (o.lineDashOffset = n.dashOffset),
                      o.beginPath(),
                      pathRadiusLine(t, i, a, s),
                      o.closePath(),
                      o.stroke(),
                      o.restore());
                  })(this, a, r, o, h);
                }
              }),
            i.display)
          ) {
            for (t.save(), o - 1; a >= 0; a--) {
              const s = i.setContext(this.getPointLabelContext(a)),
                { color: n, lineWidth: o } = s;
              o &&
                n &&
                ((t.lineWidth = o),
                (t.strokeStyle = n),
                t.setLineDash(s.borderDash),
                (t.lineDashOffset = s.borderDashOffset),
                this.getDistanceFromCenterForValue(
                  e.ticks.reverse ? this.min : this.max
                ),
                this.getPointPosition(a, r),
                t.beginPath(),
                t.moveTo(this.xCenter, this.yCenter),
                t.lineTo(h.x, h.y),
                t.stroke());
            }
            t.restore();
          }
        }
        drawBorder() {}
        drawLabels() {
          const t = this.ctx,
            e = this.options,
            i = e.ticks;
          if (!i.display) return;
          const s = this.getIndexAngle(0);
          let n, o;
          t.save(),
            t.translate(this.xCenter, this.yCenter),
            t.rotate(s),
            (t.textAlign = "center"),
            (t.textBaseline = "middle"),
            this.ticks.forEach((s, a) => {
              if (0 === a && !e.reverse) return;
              const r = i.setContext(this.getContext(a)),
                h = Te(r.font);
              if (
                (this.getDistanceFromCenterForValue(this.ticks[a].value),
                r.showLabelBackdrop)
              ) {
                (t.font = h.string),
                  t.measureText(s.label).width,
                  (t.fillStyle = r.backdropColor);
                const e = Le(r.backdropPadding);
                t.fillRect(
                  -o / 2 - e.left,
                  -n - h.size / 2 - e.top,
                  o + e.width,
                  h.size + e.height
                );
              }
              we(t, s.label, 0, -n, h, {
                color: r.color,
                strokeColor: r.textStrokeColor,
                strokeWidth: r.textStrokeWidth,
              });
            }),
            t.restore();
        }
        drawTitle() {}
      }
      const Po = {
          data: { type: Object, required: !0 },
          options: { type: Object, default: () => ({}) },
          plugins: { type: Array, default: () => [] },
          datasetIdKey: { type: String, default: "label" },
          updateMode: { type: String, default: void 0 },
        },
        Co = { type: { type: String, required: !0 }, ...Po },
        Do =
          "2" === n.version[0]
            ? (t, e) => Object.assign(t, { attrs: e })
            : (t, e) => Object.assign(t, e);
      function Ao(t) {
        return (0, n.isProxy)(t) ? (0, n.toRaw)(t) : t;
      }
      function Oo(t, e) {
        t.labels = e;
      }
      function Lo(t, e, i) {
        const s = [];
        t.datasets = e.map((e) => {
          const n = t.datasets.find((t) => t[i] === e[i]);
          return n && e.data && !s.includes(n)
            ? (s.push(n), Object.assign(n, e), n)
            : { ...e };
        });
      }
      const To = (0, n.defineComponent)({
        props: Co,
        setup(t, e) {
          let { expose: i } = e;
          const s = (0, n.ref)(null),
            o = (0, n.shallowRef)(null);
          i({ chart: o });
          return (
            (0, n.onMounted)(() => {
              if (!s.value) return;
              const {
                  type: e,
                  data: i,
                  options: a,
                  plugins: r,
                  datasetIdKey: h,
                } = t,
                l = (function (t, e) {
                  const i = { labels: [], datasets: [] };
                  return Oo(i, t.labels), Lo(i, t.datasets, e), i;
                })(i, h),
                c = (function (t) {
                  let e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : t;
                  return (0, n.isProxy)(e) ? new Proxy(t, {}) : t;
                })(l, i);
              o.value = new An(s.value, {
                type: e,
                data: c,
                options: { ...a },
                plugins: r,
              });
            }),
            (0, n.onBeforeUnmount)(() => {
              const t = (0, n.toRaw)(o.value);
              t && (t.destroy(), (o.value = null));
            }),
            (0, n.watch)(
              [() => t.options, () => t.data],
              (e, i) => {
                let [s, a] = e,
                  [r, h] = i;
                const l = (0, n.toRaw)(o.value);
                if (!l) return;
                let c = !1;
                if (s) {
                  const t = Ao(s),
                    e = Ao(r);
                  t &&
                    t !== e &&
                    (!(function (t, e) {
                      const i = t.options;
                      i && e && Object.assign(i, e);
                    })(l, t),
                    (c = !0));
                }
                if (a) {
                  const e = Ao(a.labels),
                    i = Ao(h.labels),
                    s = Ao(a.datasets),
                    n = Ao(h.datasets);
                  e !== i && (Oo(l.config.data, e), (c = !0)),
                    s &&
                      s !== n &&
                      (Lo(l.config.data, s, t.datasetIdKey), (c = !0));
                }
                c &&
                  ((e) => {
                    e.update(t.updateMode);
                  })(l);
              },
              { deep: !0 }
            ),
            () => (0, n.h)("canvas", { ref: s })
          );
        },
      });
      function Io(t, e) {
        return (
          An.register(e),
          (0, n.defineComponent)({
            props: Po,
            setup(e, i) {
              let { expose: s } = i;
              const o = (0, n.shallowRef)(null),
                a = (t) => {
                  o.value = t?.chart;
                };
              return (
                s({ chart: o }),
                () => (0, n.h)(To, Do({ ref: a }, { type: t, ...e }))
              );
            },
          })
        );
      }
      const Ro = Io("bar", es),
        Eo = Io("line", is),
        zo = {
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
        Fo = axios.create();
      Fo.interceptors.request.use(function (t) {
        const e = localStorage.getItem("token");
        return e && (t.headers.Authorization = `Bearer ${e}`), t;
      }),
        Fo.interceptors.response.use(
          function (t) {
            const e = t.config.url;
            return -1e3 !== t.data.code ||
              [
                zo.wish,
                zo.userLikeReview,
                zo.reviewLike,
                zo.reviewUnlike,
                zo.arrivalReminder,
                zo.affiliateUserAuditStatus,
              ].includes(e)
              ? t.data
              : (localStorage.removeItem("token"),
                localStorage.removeItem("name"),
                void (location.href = "/auth/sign-in"));
          },
          function (t) {
            return Promise.reject(t);
          }
        );
      const Bo = Fo,
        Wo = {
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
        Vo = {
          props: { name: String },
          i18n: new VueI18n({ locale: JS_CURRENT_LANGUAGE, messages: Wo }),
          template:
            '\n    <div class="v-breadcrumb">\n      <ul>\n        <li><a href="/">{{ $t(\'home\') }}</a></li>\n        <li><span>{{ name }}</span></li>\n      </ul>\n    </div>\n  ',
        },
        Ho = {
          props: { page: String },
          i18n: new VueI18n({ locale: JS_CURRENT_LANGUAGE, messages: Wo }),
          data: () => ({
            affiliateActiveStatus: 0,
            verifyStatus: {},
            isSignedIn: !0,
          }),
          methods: {
            getAffiliateSetting() {
              Bo.get(zo.affiliateSettingDetail).then((t) => {
                0 === t.code &&
                  ((this.affiliateActiveStatus = t.data.active),
                  this.getStatus());
              });
            },
            getStatus() {
              Bo.get(zo.affiliateUserAuditStatus).then((t) => {
                0 === t.code && (this.verifyStatus = t.data);
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
        jo = {
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
            visible: function (t) {
              t &&
                0 !== this.$props.delay &&
                (this.timeoutId = setTimeout(() => {
                  this.$emit("close");
                }, this.$props.delay));
            },
          },
          template:
            '\n    <div class="v-alert" :class="{ show: visible }">\n      <div class="v-alert-body">\n        <a href="javascript:;" class="v-alert-close" @click="$emit(\'close\')">\n          <span class="icon icon-order-cancel"><span class="path1"></span><span class="path2"></span></span>\n        </a>\n        <p class="v-alert-content">{{ content }}</p>\n      </div>\n    </div>\n  ',
        },
        No = {
          props: { loading: Boolean, fullscreen: Boolean },
          template:
            '\n    <div class="v-loading">\n      <div class="v-loading-mask" v-if="loading" :style="{ position: fullscreen ? \'fixed\' : \'absolute\' }">\n        <div class="v-loading-spinner">\n          <div class="v-loading-loader"></div>\n        </div>\n      </div>\n      <slot></slot>\n    </div>\n  ',
        };
      Vue.use(e()),
        An.register(to, mo, Zn, Xn, _o, ko, Wn, Hn),
        new Vue({
          el: "#app",
          i18n: new VueI18n({ locale: JS_CURRENT_LANGUAGE, messages: Wo }),
          components: {
            CopyToClipboard: s.Z,
            Bar: Ro,
            Line: Eo,
            "v-user-breadcrumb": Vo,
            "v-user-container": Ho,
            "v-alert": jo,
            "v-loading": No,
          },
          data: {
            tagTransformScale: 0,
            viewModal: !1,
            viewAlert: !1,
            alertMessage: "",
            loaded: !1,
            loading: !0,
            chartData: {},
            chartOptions: { plugins: { legend: { display: !1 } } },
            user: {
              base_info: { commission_rate_setting: [] },
              activity: {},
              share_info: {},
              statistics: [],
            },
            lastRate: { stage_end: 0 },
          },
          methods: {
            setLastRate(t) {
              t.length > 0 && (this.lastRate = t[t.length - 1]);
            },
            setChartData() {
              const t = [],
                e = [];
              this.user.statistics.forEach((i) => {
                t.push(i.statistic_date),
                  1 === parseInt(i.rule_type)
                    ? e.push(i.date_commission_amount)
                    : e.push(i.date_commission_point);
              }),
                (this.chartData = {
                  labels: t,
                  datasets: [
                    { type: "bar", data: e, backgroundColor: "#82e600" },
                    {
                      type: "line",
                      data: e,
                      backgroundColor: "#82e600",
                      borderColor: "#82e600",
                    },
                  ],
                });
            },
            getUser() {
              Bo.get(zo.affiliateUserDetail).then((t) => {
                0 === t.code &&
                  ((this.user = t.data),
                  this.setLastRate(t.data.base_info.commission_rate_setting),
                  this.setChartData(),
                  (this.loaded = !0)),
                  (this.loading = !1);
              });
            },
            handleCopy() {
              (this.viewAlert = !0), (this.alertMessage = "Copied!");
            },
            closeModal(t) {
              "affiliate-modal" === t.target.className && (this.viewModal = !1);
            },
          },
          mounted: function () {
            (this.tagTransformScale =
              window.innerWidth <= 750 ? window.innerWidth / 1080 : 1),
              this.getUser();
          },
        });
    })();
})();
