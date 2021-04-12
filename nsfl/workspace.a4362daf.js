parcelRequire = (function (e, r, t, n) {
  var i,
    o = "function" == typeof parcelRequire && parcelRequire,
    u = "function" == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      (p.resolve = function (r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function (e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function (r, t) {
      e[r] = [
        function (e, r) {
          r.exports = t;
        },
        {},
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = l)
      : "function" == typeof define && define.amd
      ? define(function () {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    TCu9: [
      function (require, module, exports) {
        "use strict";
        function e(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function t(e, t) {
          for (var r = 0; r < t.length; r++) {
            var a = t[r];
            (a.enumerable = a.enumerable || !1),
              (a.configurable = !0),
              "value" in a && (a.writable = !0),
              Object.defineProperty(e, a.key, a);
          }
        }
        function r(e, r, a) {
          return r && t(e.prototype, r), a && t(e, a), e;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var a = (function () {
          function t(r, a) {
            e(this, t);
            var n = r.width,
              i = r.height,
              o = document.createElement("canvas");
            (o.width = n), (o.height = i);
            var u = o.getContext("2d");
            u.drawImage(r, 0, 0),
              (this.canvas = o),
              (this.context = u),
              (this.frames = a);
          }
          return (
            r(t, [
              {
                key: "drawFrame",
                value: function (e, t, r, a, n, i) {
                  var o = this.frames[t],
                    u = o.x,
                    s = o.y,
                    c = o.width,
                    h = o.height;
                  (r |= 0),
                    (a |= 0),
                    (n |= c),
                    (i |= h),
                    e.drawImage(this.canvas, u, s, c, h, r, a, n, i);
                },
              },
            ]),
            t
          );
        })();
        a.GeometryHorizontalLinear = function (e, t, r) {
          for (var a = [], n = 0; n < r; n += 1) {
            var i = { x: e * n, y: 0, width: e, height: t };
            a.push(i);
          }
          return a;
        };
        var n = a;
        exports.default = n;
      },
      {},
    ],
    Js4U: [
      function (require, module, exports) {
        "use strict";
        function e(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function t(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        function i(e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var n = (function () {
            function t() {
              e(this, t),
                (this.lastTime = 0),
                (this.elapsedTime = 0),
                (this.element = document.createElement("canvas")),
                (this.context = this.element.getContext("2d")),
                (this.size = { width: 1, height: 1 });
            }
            return (
              i(t, [
                {
                  key: "main",
                  value: function () {
                    var e = Date.now(),
                      t = (e - this.lastTime) / 1e3;
                    this.update(t),
                      this.render(),
                      (this.lastTime = e),
                      requestAnimationFrame(this.main.bind(this));
                  },
                },
                { key: "update", value: function (e) {} },
                { key: "render", value: function () {} },
                { key: "sizeDidChange", value: function (e) {} },
                {
                  key: "size",
                  get: function () {
                    return {
                      width: this._size.width,
                      height: this._size.height,
                    };
                  },
                  set: function (e) {
                    var t = this.element;
                    (t.width = 0.5 * e.width),
                      (t.height = 0.5 * e.height),
                      (t.style.width = e.width + "px"),
                      (t.style.height = e.height + "px"),
                      this.context.scale(0.5, 0.5),
                      (this._size = { width: e.width, height: e.height }),
                      this.sizeDidChange(this._size);
                  },
                },
              ]),
              t
            );
          })(),
          h = n;
        exports.default = h;
      },
      {},
    ],
    LeK6: [
      function (require, module, exports) {
        "use strict";
        function t(t, r) {
          return Math.random() * (r - t) + t;
        }
        function r(t, r) {
          return Math.floor(Math.random() * (r - t + 1)) + t;
        }
        function o() {
          return "#" + Math.floor(16777215 * Math.random()).toString(16);
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.floatValue = t),
          (exports.integerValue = r),
          (exports.color = o);
      },
      {},
    ],
    HiAH: [
      function (require, module, exports) {
        CanvasRenderingContext2D.prototype.roundedRect = function (
          t,
          o,
          i,
          e,
          h
        ) {
          return (
            i < 2 * h && (h = i / 2),
            e < 2 * h && (h = e / 2),
            this.beginPath(),
            this.moveTo(t + h, o),
            this.arcTo(t + i, o, t + i, o + e, h),
            this.arcTo(t + i, o + e, t, o + e, h),
            this.arcTo(t, o + e, t, o, h),
            this.arcTo(t, o, t + i, o, h),
            this.closePath(),
            this
          );
        };
      },
      {},
    ],
    oCom: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var t = o(require("./Sprite.js")),
          e = o(require("./Scene.js")),
          i = n(require("./Random.js"));
        function r() {
          if ("function" != typeof WeakMap) return null;
          var t = new WeakMap();
          return (
            (r = function () {
              return t;
            }),
            t
          );
        }
        function n(t) {
          if (t && t.__esModule) return t;
          if (null === t || ("object" != typeof t && "function" != typeof t))
            return { default: t };
          var e = r();
          if (e && e.has(t)) return e.get(t);
          var i = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in t)
            if (Object.prototype.hasOwnProperty.call(t, o)) {
              var a = n ? Object.getOwnPropertyDescriptor(t, o) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(i, o, a)
                : (i[o] = t[o]);
            }
          return (i.default = t), e && e.set(t, i), i;
        }
        function o(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function a(t) {
          return (a =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        function u(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function l(t, e) {
          for (var i = 0; i < e.length; i++) {
            var r = e[i];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        function h(t, e, i) {
          return e && l(t.prototype, e), i && l(t, i), t;
        }
        function s(t, e) {
          return !e || ("object" !== a(e) && "function" != typeof e) ? c(t) : e;
        }
        function c(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function f(t) {
          return (f = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              })(t);
        }
        function p(t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && y(t, e);
        }
        function y(t, e) {
          return (y =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            })(t, e);
        }
        require("./RoundedRect.js");
        var d = (function (r) {
            function n() {
              var e;
              u(this, n),
                ((e = s(this, f(n).call(this))).backgroundColor = "#000"),
                (e.containerColor = "#000"),
                (e.entities = []);
              var i = new Image();
              return (
                (i.onload = function () {
                  var r = 33,
                    n = 29,
                    o = new t.default(
                      i,
                      t.default.GeometryHorizontalLinear(r, n, 4)
                    );
                  (e.sprites = { ditto: o }), e.main();
                }),
                (i.src =
                  "data:image/png;base64,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"),
                e
              );
            }
            return (
              p(n, e.default),
              h(n, [
                {
                  key: "sizeDidChange",
                  value: function (t) {
                    this.context.imageSmoothingEnabled = !1;
                  },
                },
                {
                  key: "createEntity",
                  value: function () {
                    var t = this.sprites.ditto,
                      e = t.frames[0],
                      r = i.integerValue(0, 1),
                      n = i.integerValue(4, 16),
                      o = i.floatValue(0.1, 1),
                      a = i.integerValue(400, 1e3) * (r ? 1 : -1),
                      u = this.size.width,
                      l = this.size.height,
                      h = { width: e.width, height: e.height },
                      s = { width: h.width * n, height: h.height * n };
                    return {
                      sprite: t,
                      animationFrameDuration: 0.085,
                      animationFrame: 0,
                      time: 0,
                      speed: { x: a, y: 0 },
                      size: s,
                      origin: {
                        x: r ? -s.width : u,
                        y: i.integerValue(0, l - s.height),
                      },
                      opacity: o,
                      intrinsicSize: h,
                    };
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var t = this.context,
                      e = this.size,
                      i = e.width,
                      r = e.height;
                    (t.globalAlpha = 1),
                      (t.fillStyle = this.backgroundColor),
                      t.fillRect(0, 0, i, r);
                    i > 24 &&
                      r > 24 &&
                      (t.roundedRect(32, 32, i - 64, r - 64, 12),
                      (t.fillStyle = this.containerColor),
                      t.fill());
                    var n = !0,
                      o = !1,
                      a = void 0;
                    try {
                      for (
                        var u, l = this.entities[Symbol.iterator]();
                        !(n = (u = l.next()).done);
                        n = !0
                      ) {
                        var h = u.value,
                          s = h.sprite,
                          c = h.animationFrame,
                          f = h.origin,
                          p = h.size,
                          y = h.opacity;
                        (t.globalAlpha = y),
                          s.drawFrame(t, c, f.x, f.y, p.width, p.height);
                      }
                    } catch (d) {
                      (o = !0), (a = d);
                    } finally {
                      try {
                        n || null == l.return || l.return();
                      } finally {
                        if (o) throw a;
                      }
                    }
                  },
                },
                {
                  key: "update",
                  value: function (t) {
                    if (((this.elapsedTime += t), this.elapsedTime >= 0.4)) {
                      (this.elapsedTime = 0),
                        (this.backgroundColor = i.color()),
                        (this.containerColor = i.color());
                      for (var e = 1; e--; )
                        this.entities.push(this.createEntity());
                    }
                    var r = this.size.width,
                      n = this.size.height,
                      o = this.protagonist;
                    if (
                      (o ||
                        (((o = this.createEntity()).speed.x = 0),
                        (o.opacity = 1),
                        this.entities.push(o),
                        (this.protagonist = o)),
                      o)
                    ) {
                      var a = {
                          width: Math.min(0.8 * r, 600),
                          height: Math.min(0.8 * n, 600),
                        },
                        u = o.intrinsicSize,
                        l = a.width / u.width,
                        h = a.height / u.height,
                        s = Math.min(l, h),
                        c = { width: u.width * s, height: u.height * s };
                      (o.size = c),
                        (o.origin.x = Math.round(0.5 * (r - c.width))),
                        (o.origin.y = Math.round(0.5 * (n - c.height)));
                    }
                    var f = [],
                      p = 0,
                      y = !0,
                      d = !1,
                      g = void 0;
                    try {
                      for (
                        var m, v = this.entities[Symbol.iterator]();
                        !(y = (m = v.next()).done);
                        y = !0
                      ) {
                        var b = m.value;
                        if (
                          ((b.time += t), b.time >= b.animationFrameDuration)
                        ) {
                          var w = b.animationFrame + 1;
                          (b.time = 0),
                            (b.animationFrame =
                              w < b.sprite.frames.length ? w : 0);
                        }
                        0 != b.speed.x && (b.origin.x += (b.speed.x * t) | 0),
                          (b.origin.x > r || b.origin.x <= -b.size.width) &&
                            f.push(p),
                          (p += 1);
                      }
                    } catch (S) {
                      (d = !0), (g = S);
                    } finally {
                      try {
                        y || null == v.return || v.return();
                      } finally {
                        if (d) throw g;
                      }
                    }
                    for (var A = 0, x = f; A < x.length; A++) {
                      var O = x[A];
                      this.entities.splice(O, 1);
                    }
                  },
                },
              ]),
              n
            );
          })(),
          g = d;
        exports.default = g;
      },
      {
        "./Sprite.js": "TCu9",
        "./Scene.js": "Js4U",
        "./Random.js": "LeK6",
        "./RoundedRect.js": "HiAH",
      },
    ],
    Focm: [
      function (require, module, exports) {
        "use strict";
        var e = n(require("./js/KongaScene.js"));
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function t(e, n) {
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
        }
        function i(e, n) {
          for (var t = 0; t < n.length; t++) {
            var i = n[t];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        function a(e, n, t) {
          return n && i(e.prototype, n), t && i(e, t), e;
        }
        var o = (function () {
          function n(i) {
            t(this, n), (this.container = i);
            var a = new e.default();
            (a.element.style.display = "none"),
              i.appendChild(a.element),
              window.addEventListener("resize", this.handleResize.bind(this)),
              (this.scene = a),
              this.handleResize();
            var o = document.createElement("span");
            o.textContent = "Preparing…";
            var r = document.getElementsByTagName("audio")[0];
            r.addEventListener("play", function () {
              o.parentNode.removeChild(o),
                a.element.classList.add("cue-in"),
                (a.element.style.display = "block"),
                (document.title = "Conga!");
            });
            var d = document.createElement("button");
            (d.textContent = "Trust me"),
              d.addEventListener("click", function (e) {
                d.parentNode.removeChild(d), i.appendChild(o), r.play();
              }),
              i.appendChild(d);
          }
          return (
            a(n, [
              {
                key: "handleResize",
                value: function () {
                  this.scene.size = {
                    width: Math.floor(window.innerWidth),
                    height: Math.floor(window.innerHeight),
                  };
                },
              },
            ]),
            n
          );
        })();
        function r() {
          window.controller = new o(document.body);
        }
        document.addEventListener("DOMContentLoaded", r);
      },
      { "./js/KongaScene.js": "oCom" },
    ],
  },
  {},
  ["Focm"],
  null
);
//# sourceMappingURL=workspace.a4362daf.js.map
