!function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {i: r, l: !1, exports: {}};
        return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }

    n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var i in e) n.d(r, i, function (t) {
            return e[t]
        }.bind(null, i));
        return r
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "/", n(n.s = 12)
}([function (e, t, n) {
    "use strict";
    var r = n(4), i = n(20), o = Object.prototype.toString;

    function a(e) {
        return "[object Array]" === o.call(e)
    }

    function u(e) {
        return null !== e && "object" == typeof e
    }

    function s(e) {
        return "[object Function]" === o.call(e)
    }

    function l(e, t) {
        if (null != e) if ("object" != typeof e && (e = [e]), a(e)) for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e); else for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e)
    }

    e.exports = {
        isArray: a, isArrayBuffer: function (e) {
            return "[object ArrayBuffer]" === o.call(e)
        }, isBuffer: i, isFormData: function (e) {
            return "undefined" != typeof FormData && e instanceof FormData
        }, isArrayBufferView: function (e) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
        }, isString: function (e) {
            return "string" == typeof e
        }, isNumber: function (e) {
            return "number" == typeof e
        }, isObject: u, isUndefined: function (e) {
            return void 0 === e
        }, isDate: function (e) {
            return "[object Date]" === o.call(e)
        }, isFile: function (e) {
            return "[object File]" === o.call(e)
        }, isBlob: function (e) {
            return "[object Blob]" === o.call(e)
        }, isFunction: s, isStream: function (e) {
            return u(e) && s(e.pipe)
        }, isURLSearchParams: function (e) {
            return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
        }, isStandardBrowserEnv: function () {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
        }, forEach: l, merge: function e() {
            var t = {};

            function n(n, r) {
                "object" == typeof t[r] && "object" == typeof n ? t[r] = e(t[r], n) : t[r] = n
            }

            for (var r = 0, i = arguments.length; r < i; r++) l(arguments[r], n);
            return t
        }, deepMerge: function e() {
            var t = {};

            function n(n, r) {
                "object" == typeof t[r] && "object" == typeof n ? t[r] = e(t[r], n) : t[r] = "object" == typeof n ? e({}, n) : n
            }

            for (var r = 0, i = arguments.length; r < i; r++) l(arguments[r], n);
            return t
        }, extend: function (e, t, n) {
            return l(t, function (t, i) {
                e[i] = n && "function" == typeof t ? r(t, n) : t
            }), e
        }, trim: function (e) {
            return e.replace(/^\s*/, "").replace(/\s*$/, "")
        }
    }
}, function (e, t) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function (e, t, n) {
    "use strict";
    n.r(t), function (e) {
        for (var n = "undefined" != typeof window && "undefined" != typeof document, r = ["Edge", "Trident", "Firefox"], i = 0, o = 0; o < r.length; o += 1) if (n && navigator.userAgent.indexOf(r[o]) >= 0) {
            i = 1;
            break
        }
        var a = n && window.Promise ? function (e) {
            var t = !1;
            return function () {
                t || (t = !0, window.Promise.resolve().then(function () {
                    t = !1, e()
                }))
            }
        } : function (e) {
            var t = !1;
            return function () {
                t || (t = !0, setTimeout(function () {
                    t = !1, e()
                }, i))
            }
        };

        function u(e) {
            return e && "[object Function]" === {}.toString.call(e)
        }

        function s(e, t) {
            if (1 !== e.nodeType) return [];
            var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
            return t ? n[t] : n
        }

        function l(e) {
            return "HTML" === e.nodeName ? e : e.parentNode || e.host
        }

        function c(e) {
            if (!e) return document.body;
            switch (e.nodeName) {
                case"HTML":
                case"BODY":
                    return e.ownerDocument.body;
                case"#document":
                    return e.body
            }
            var t = s(e), n = t.overflow, r = t.overflowX, i = t.overflowY;
            return /(auto|scroll|overlay)/.test(n + i + r) ? e : c(l(e))
        }

        var f = n && !(!window.MSInputMethodContext || !document.documentMode),
            h = n && /MSIE 10/.test(navigator.userAgent);

        function p(e) {
            return 11 === e ? f : 10 === e ? h : f || h
        }

        function d(e) {
            if (!e) return document.documentElement;
            for (var t = p(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
            var r = n && n.nodeName;
            return r && "BODY" !== r && "HTML" !== r ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === s(n, "position") ? d(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
        }

        function v(e) {
            return null !== e.parentNode ? v(e.parentNode) : e
        }

        function g(e, t) {
            if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
            var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, r = n ? e : t, i = n ? t : e,
                o = document.createRange();
            o.setStart(r, 0), o.setEnd(i, 0);
            var a, u, s = o.commonAncestorContainer;
            if (e !== s && t !== s || r.contains(i)) return "BODY" === (u = (a = s).nodeName) || "HTML" !== u && d(a.firstElementChild) !== a ? d(s) : s;
            var l = v(e);
            return l.host ? g(l.host, t) : g(e, v(t).host)
        }

        function m(e) {
            var t = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
                n = e.nodeName;
            if ("BODY" === n || "HTML" === n) {
                var r = e.ownerDocument.documentElement;
                return (e.ownerDocument.scrollingElement || r)[t]
            }
            return e[t]
        }

        function y(e, t) {
            var n = "x" === t ? "Left" : "Top", r = "Left" === n ? "Right" : "Bottom";
            return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + r + "Width"], 10)
        }

        function _(e, t, n, r) {
            return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], p(10) ? parseInt(n["offset" + e]) + parseInt(r["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(r["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
        }

        function b(e) {
            var t = e.body, n = e.documentElement, r = p(10) && getComputedStyle(n);
            return {height: _("Height", t, n, r), width: _("Width", t, n, r)}
        }

        var E = function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }, w = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(), T = function (e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }, x = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };

        function S(e) {
            return x({}, e, {right: e.left + e.width, bottom: e.top + e.height})
        }

        function A(e) {
            var t = {};
            try {
                if (p(10)) {
                    t = e.getBoundingClientRect();
                    var n = m(e, "top"), r = m(e, "left");
                    t.top += n, t.left += r, t.bottom += n, t.right += r
                } else t = e.getBoundingClientRect()
            } catch (e) {
            }
            var i = {left: t.left, top: t.top, width: t.right - t.left, height: t.bottom - t.top},
                o = "HTML" === e.nodeName ? b(e.ownerDocument) : {}, a = o.width || e.clientWidth || i.right - i.left,
                u = o.height || e.clientHeight || i.bottom - i.top, l = e.offsetWidth - a, c = e.offsetHeight - u;
            if (l || c) {
                var f = s(e);
                l -= y(f, "x"), c -= y(f, "y"), i.width -= l, i.height -= c
            }
            return S(i)
        }

        function D(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r = p(10),
                i = "HTML" === t.nodeName, o = A(e), a = A(t), u = c(e), l = s(t), f = parseFloat(l.borderTopWidth, 10),
                h = parseFloat(l.borderLeftWidth, 10);
            n && i && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));
            var d = S({top: o.top - a.top - f, left: o.left - a.left - h, width: o.width, height: o.height});
            if (d.marginTop = 0, d.marginLeft = 0, !r && i) {
                var v = parseFloat(l.marginTop, 10), g = parseFloat(l.marginLeft, 10);
                d.top -= f - v, d.bottom -= f - v, d.left -= h - g, d.right -= h - g, d.marginTop = v, d.marginLeft = g
            }
            return (r && !n ? t.contains(u) : t === u && "BODY" !== u.nodeName) && (d = function (e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r = m(t, "top"),
                    i = m(t, "left"), o = n ? -1 : 1;
                return e.top += r * o, e.bottom += r * o, e.left += i * o, e.right += i * o, e
            }(d, t)), d
        }

        function C(e) {
            if (!e || !e.parentElement || p()) return document.documentElement;
            for (var t = e.parentElement; t && "none" === s(t, "transform");) t = t.parentElement;
            return t || document.documentElement
        }

        function N(e, t, n, r) {
            var i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], o = {top: 0, left: 0},
                a = i ? C(e) : g(e, t);
            if ("viewport" === r) o = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = e.ownerDocument.documentElement, r = D(e, n),
                    i = Math.max(n.clientWidth, window.innerWidth || 0),
                    o = Math.max(n.clientHeight, window.innerHeight || 0), a = t ? 0 : m(n), u = t ? 0 : m(n, "left");
                return S({top: a - r.top + r.marginTop, left: u - r.left + r.marginLeft, width: i, height: o})
            }(a, i); else {
                var u = void 0;
                "scrollParent" === r ? "BODY" === (u = c(l(t))).nodeName && (u = e.ownerDocument.documentElement) : u = "window" === r ? e.ownerDocument.documentElement : r;
                var f = D(u, a, i);
                if ("HTML" !== u.nodeName || function e(t) {
                    var n = t.nodeName;
                    if ("BODY" === n || "HTML" === n) return !1;
                    if ("fixed" === s(t, "position")) return !0;
                    var r = l(t);
                    return !!r && e(r)
                }(a)) o = f; else {
                    var h = b(e.ownerDocument), p = h.height, d = h.width;
                    o.top += f.top - f.marginTop, o.bottom = p + f.top, o.left += f.left - f.marginLeft, o.right = d + f.left
                }
            }
            var v = "number" == typeof (n = n || 0);
            return o.left += v ? n : n.left || 0, o.top += v ? n : n.top || 0, o.right -= v ? n : n.right || 0, o.bottom -= v ? n : n.bottom || 0, o
        }

        function O(e, t, n, r, i) {
            var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            if (-1 === e.indexOf("auto")) return e;
            var a = N(n, r, o, i), u = {
                top: {width: a.width, height: t.top - a.top},
                right: {width: a.right - t.right, height: a.height},
                bottom: {width: a.width, height: a.bottom - t.bottom},
                left: {width: t.left - a.left, height: a.height}
            }, s = Object.keys(u).map(function (e) {
                return x({key: e}, u[e], {area: (t = u[e], t.width * t.height)});
                var t
            }).sort(function (e, t) {
                return t.area - e.area
            }), l = s.filter(function (e) {
                var t = e.width, r = e.height;
                return t >= n.clientWidth && r >= n.clientHeight
            }), c = l.length > 0 ? l[0].key : s[0].key, f = e.split("-")[1];
            return c + (f ? "-" + f : "")
        }

        function R(e, t, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return D(n, r ? C(t) : g(t, n), r)
        }

        function I(e) {
            var t = e.ownerDocument.defaultView.getComputedStyle(e),
                n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
                r = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
            return {width: e.offsetWidth + r, height: e.offsetHeight + n}
        }

        function L(e) {
            var t = {left: "right", right: "left", bottom: "top", top: "bottom"};
            return e.replace(/left|right|bottom|top/g, function (e) {
                return t[e]
            })
        }

        function k(e, t, n) {
            n = n.split("-")[0];
            var r = I(e), i = {width: r.width, height: r.height}, o = -1 !== ["right", "left"].indexOf(n),
                a = o ? "top" : "left", u = o ? "left" : "top", s = o ? "height" : "width", l = o ? "width" : "height";
            return i[a] = t[a] + t[s] / 2 - r[s] / 2, i[u] = n === u ? t[u] - r[l] : t[L(u)], i
        }

        function j(e, t) {
            return Array.prototype.find ? e.find(t) : e.filter(t)[0]
        }

        function P(e, t, n) {
            return (void 0 === n ? e : e.slice(0, function (e, t, n) {
                if (Array.prototype.findIndex) return e.findIndex(function (e) {
                    return e[t] === n
                });
                var r = j(e, function (e) {
                    return e[t] === n
                });
                return e.indexOf(r)
            }(e, "name", n))).forEach(function (e) {
                e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                var n = e.function || e.fn;
                e.enabled && u(n) && (t.offsets.popper = S(t.offsets.popper), t.offsets.reference = S(t.offsets.reference), t = n(t, e))
            }), t
        }

        function F() {
            if (!this.state.isDestroyed) {
                var e = {instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {}};
                e.offsets.reference = R(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = O(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = k(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = P(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
            }
        }

        function U(e, t) {
            return e.some(function (e) {
                var n = e.name;
                return e.enabled && n === t
            })
        }

        function M(e) {
            for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), r = 0; r < t.length; r++) {
                var i = t[r], o = i ? "" + i + n : e;
                if (void 0 !== document.body.style[o]) return o
            }
            return null
        }

        function B() {
            return this.state.isDestroyed = !0, U(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[M("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
        }

        function H(e) {
            var t = e.ownerDocument;
            return t ? t.defaultView : window
        }

        function q(e, t, n, r) {
            n.updateBound = r, H(e).addEventListener("resize", n.updateBound, {passive: !0});
            var i = c(e);
            return function e(t, n, r, i) {
                var o = "BODY" === t.nodeName, a = o ? t.ownerDocument.defaultView : t;
                a.addEventListener(n, r, {passive: !0}), o || e(c(a.parentNode), n, r, i), i.push(a)
            }(i, "scroll", n.updateBound, n.scrollParents), n.scrollElement = i, n.eventsEnabled = !0, n
        }

        function W() {
            this.state.eventsEnabled || (this.state = q(this.reference, this.options, this.state, this.scheduleUpdate))
        }

        function z() {
            var e, t;
            this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, H(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function (e) {
                e.removeEventListener("scroll", t.updateBound)
            }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
        }

        function X(e) {
            return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
        }

        function Y(e, t) {
            Object.keys(t).forEach(function (n) {
                var r = "";
                -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && X(t[n]) && (r = "px"), e.style[n] = t[n] + r
            })
        }

        var V = n && /Firefox/i.test(navigator.userAgent);

        function G(e, t, n) {
            var r = j(e, function (e) {
                return e.name === t
            }), i = !!r && e.some(function (e) {
                return e.name === n && e.enabled && e.order < r.order
            });
            if (!i) {
                var o = "`" + t + "`", a = "`" + n + "`";
                console.warn(a + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
            }
            return i
        }

        var $ = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
            K = $.slice(3);

        function Q(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = K.indexOf(e),
                r = K.slice(n + 1).concat(K.slice(0, n));
            return t ? r.reverse() : r
        }

        var J = {FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise"};

        function Z(e, t, n, r) {
            var i = [0, 0], o = -1 !== ["right", "left"].indexOf(r), a = e.split(/(\+|\-)/).map(function (e) {
                return e.trim()
            }), u = a.indexOf(j(a, function (e) {
                return -1 !== e.search(/,|\s/)
            }));
            a[u] && -1 === a[u].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
            var s = /\s*,\s*|\s+/,
                l = -1 !== u ? [a.slice(0, u).concat([a[u].split(s)[0]]), [a[u].split(s)[1]].concat(a.slice(u + 1))] : [a];
            return (l = l.map(function (e, r) {
                var i = (1 === r ? !o : o) ? "height" : "width", a = !1;
                return e.reduce(function (e, t) {
                    return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, a = !0, e) : a ? (e[e.length - 1] += t, a = !1, e) : e.concat(t)
                }, []).map(function (e) {
                    return function (e, t, n, r) {
                        var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), o = +i[1], a = i[2];
                        if (!o) return e;
                        if (0 === a.indexOf("%")) {
                            var u = void 0;
                            switch (a) {
                                case"%p":
                                    u = n;
                                    break;
                                case"%":
                                case"%r":
                                default:
                                    u = r
                            }
                            return S(u)[t] / 100 * o
                        }
                        if ("vh" === a || "vw" === a) {
                            return ("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o
                        }
                        return o
                    }(e, i, t, n)
                })
            })).forEach(function (e, t) {
                e.forEach(function (n, r) {
                    X(n) && (i[t] += n * ("-" === e[r - 1] ? -1 : 1))
                })
            }), i
        }

        var ee = {
            placement: "bottom", positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function () {
            }, onUpdate: function () {
            }, modifiers: {
                shift: {
                    order: 100, enabled: !0, fn: function (e) {
                        var t = e.placement, n = t.split("-")[0], r = t.split("-")[1];
                        if (r) {
                            var i = e.offsets, o = i.reference, a = i.popper, u = -1 !== ["bottom", "top"].indexOf(n),
                                s = u ? "left" : "top", l = u ? "width" : "height",
                                c = {start: T({}, s, o[s]), end: T({}, s, o[s] + o[l] - a[l])};
                            e.offsets.popper = x({}, a, c[r])
                        }
                        return e
                    }
                }, offset: {
                    order: 200, enabled: !0, fn: function (e, t) {
                        var n = t.offset, r = e.placement, i = e.offsets, o = i.popper, a = i.reference,
                            u = r.split("-")[0], s = void 0;
                        return s = X(+n) ? [+n, 0] : Z(n, o, a, u), "left" === u ? (o.top += s[0], o.left -= s[1]) : "right" === u ? (o.top += s[0], o.left += s[1]) : "top" === u ? (o.left += s[0], o.top -= s[1]) : "bottom" === u && (o.left += s[0], o.top += s[1]), e.popper = o, e
                    }, offset: 0
                }, preventOverflow: {
                    order: 300, enabled: !0, fn: function (e, t) {
                        var n = t.boundariesElement || d(e.instance.popper);
                        e.instance.reference === n && (n = d(n));
                        var r = M("transform"), i = e.instance.popper.style, o = i.top, a = i.left, u = i[r];
                        i.top = "", i.left = "", i[r] = "";
                        var s = N(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                        i.top = o, i.left = a, i[r] = u, t.boundaries = s;
                        var l = t.priority, c = e.offsets.popper, f = {
                            primary: function (e) {
                                var n = c[e];
                                return c[e] < s[e] && !t.escapeWithReference && (n = Math.max(c[e], s[e])), T({}, e, n)
                            }, secondary: function (e) {
                                var n = "right" === e ? "left" : "top", r = c[n];
                                return c[e] > s[e] && !t.escapeWithReference && (r = Math.min(c[n], s[e] - ("right" === e ? c.width : c.height))), T({}, n, r)
                            }
                        };
                        return l.forEach(function (e) {
                            var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                            c = x({}, c, f[t](e))
                        }), e.offsets.popper = c, e
                    }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent"
                }, keepTogether: {
                    order: 400, enabled: !0, fn: function (e) {
                        var t = e.offsets, n = t.popper, r = t.reference, i = e.placement.split("-")[0], o = Math.floor,
                            a = -1 !== ["top", "bottom"].indexOf(i), u = a ? "right" : "bottom", s = a ? "left" : "top",
                            l = a ? "width" : "height";
                        return n[u] < o(r[s]) && (e.offsets.popper[s] = o(r[s]) - n[l]), n[s] > o(r[u]) && (e.offsets.popper[s] = o(r[u])), e
                    }
                }, arrow: {
                    order: 500, enabled: !0, fn: function (e, t) {
                        var n;
                        if (!G(e.instance.modifiers, "arrow", "keepTogether")) return e;
                        var r = t.element;
                        if ("string" == typeof r) {
                            if (!(r = e.instance.popper.querySelector(r))) return e
                        } else if (!e.instance.popper.contains(r)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                        var i = e.placement.split("-")[0], o = e.offsets, a = o.popper, u = o.reference,
                            l = -1 !== ["left", "right"].indexOf(i), c = l ? "height" : "width", f = l ? "Top" : "Left",
                            h = f.toLowerCase(), p = l ? "left" : "top", d = l ? "bottom" : "right", v = I(r)[c];
                        u[d] - v < a[h] && (e.offsets.popper[h] -= a[h] - (u[d] - v)), u[h] + v > a[d] && (e.offsets.popper[h] += u[h] + v - a[d]), e.offsets.popper = S(e.offsets.popper);
                        var g = u[h] + u[c] / 2 - v / 2, m = s(e.instance.popper), y = parseFloat(m["margin" + f], 10),
                            _ = parseFloat(m["border" + f + "Width"], 10), b = g - e.offsets.popper[h] - y - _;
                        return b = Math.max(Math.min(a[c] - v, b), 0), e.arrowElement = r, e.offsets.arrow = (T(n = {}, h, Math.round(b)), T(n, p, ""), n), e
                    }, element: "[x-arrow]"
                }, flip: {
                    order: 600,
                    enabled: !0,
                    fn: function (e, t) {
                        if (U(e.instance.modifiers, "inner")) return e;
                        if (e.flipped && e.placement === e.originalPlacement) return e;
                        var n = N(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                            r = e.placement.split("-")[0], i = L(r), o = e.placement.split("-")[1] || "", a = [];
                        switch (t.behavior) {
                            case J.FLIP:
                                a = [r, i];
                                break;
                            case J.CLOCKWISE:
                                a = Q(r);
                                break;
                            case J.COUNTERCLOCKWISE:
                                a = Q(r, !0);
                                break;
                            default:
                                a = t.behavior
                        }
                        return a.forEach(function (u, s) {
                            if (r !== u || a.length === s + 1) return e;
                            r = e.placement.split("-")[0], i = L(r);
                            var l = e.offsets.popper, c = e.offsets.reference, f = Math.floor,
                                h = "left" === r && f(l.right) > f(c.left) || "right" === r && f(l.left) < f(c.right) || "top" === r && f(l.bottom) > f(c.top) || "bottom" === r && f(l.top) < f(c.bottom),
                                p = f(l.left) < f(n.left), d = f(l.right) > f(n.right), v = f(l.top) < f(n.top),
                                g = f(l.bottom) > f(n.bottom),
                                m = "left" === r && p || "right" === r && d || "top" === r && v || "bottom" === r && g,
                                y = -1 !== ["top", "bottom"].indexOf(r),
                                _ = !!t.flipVariations && (y && "start" === o && p || y && "end" === o && d || !y && "start" === o && v || !y && "end" === o && g),
                                b = !!t.flipVariationsByContent && (y && "start" === o && d || y && "end" === o && p || !y && "start" === o && g || !y && "end" === o && v),
                                E = _ || b;
                            (h || m || E) && (e.flipped = !0, (h || m) && (r = a[s + 1]), E && (o = function (e) {
                                return "end" === e ? "start" : "start" === e ? "end" : e
                            }(o)), e.placement = r + (o ? "-" + o : ""), e.offsets.popper = x({}, e.offsets.popper, k(e.instance.popper, e.offsets.reference, e.placement)), e = P(e.instance.modifiers, e, "flip"))
                        }), e
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport",
                    flipVariations: !1,
                    flipVariationsByContent: !1
                }, inner: {
                    order: 700, enabled: !1, fn: function (e) {
                        var t = e.placement, n = t.split("-")[0], r = e.offsets, i = r.popper, o = r.reference,
                            a = -1 !== ["left", "right"].indexOf(n), u = -1 === ["top", "left"].indexOf(n);
                        return i[a ? "left" : "top"] = o[n] - (u ? i[a ? "width" : "height"] : 0), e.placement = L(t), e.offsets.popper = S(i), e
                    }
                }, hide: {
                    order: 800, enabled: !0, fn: function (e) {
                        if (!G(e.instance.modifiers, "hide", "preventOverflow")) return e;
                        var t = e.offsets.reference, n = j(e.instance.modifiers, function (e) {
                            return "preventOverflow" === e.name
                        }).boundaries;
                        if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                            if (!0 === e.hide) return e;
                            e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                        } else {
                            if (!1 === e.hide) return e;
                            e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                        }
                        return e
                    }
                }, computeStyle: {
                    order: 850, enabled: !0, fn: function (e, t) {
                        var n = t.x, r = t.y, i = e.offsets.popper, o = j(e.instance.modifiers, function (e) {
                            return "applyStyle" === e.name
                        }).gpuAcceleration;
                        void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var a = void 0 !== o ? o : t.gpuAcceleration, u = d(e.instance.popper), s = A(u),
                            l = {position: i.position}, c = function (e, t) {
                                var n = e.offsets, r = n.popper, i = n.reference, o = Math.round, a = Math.floor,
                                    u = function (e) {
                                        return e
                                    }, s = o(i.width), l = o(r.width), c = -1 !== ["left", "right"].indexOf(e.placement),
                                    f = -1 !== e.placement.indexOf("-"), h = t ? c || f || s % 2 == l % 2 ? o : a : u,
                                    p = t ? o : u;
                                return {
                                    left: h(s % 2 == 1 && l % 2 == 1 && !f && t ? r.left - 1 : r.left),
                                    top: p(r.top),
                                    bottom: p(r.bottom),
                                    right: h(r.right)
                                }
                            }(e, window.devicePixelRatio < 2 || !V), f = "bottom" === n ? "top" : "bottom",
                            h = "right" === r ? "left" : "right", p = M("transform"), v = void 0, g = void 0;
                        if (g = "bottom" === f ? "HTML" === u.nodeName ? -u.clientHeight + c.bottom : -s.height + c.bottom : c.top, v = "right" === h ? "HTML" === u.nodeName ? -u.clientWidth + c.right : -s.width + c.right : c.left, a && p) l[p] = "translate3d(" + v + "px, " + g + "px, 0)", l[f] = 0, l[h] = 0, l.willChange = "transform"; else {
                            var m = "bottom" === f ? -1 : 1, y = "right" === h ? -1 : 1;
                            l[f] = g * m, l[h] = v * y, l.willChange = f + ", " + h
                        }
                        var _ = {"x-placement": e.placement};
                        return e.attributes = x({}, _, e.attributes), e.styles = x({}, l, e.styles), e.arrowStyles = x({}, e.offsets.arrow, e.arrowStyles), e
                    }, gpuAcceleration: !0, x: "bottom", y: "right"
                }, applyStyle: {
                    order: 900, enabled: !0, fn: function (e) {
                        var t, n;
                        return Y(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach(function (e) {
                            !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                        }), e.arrowElement && Object.keys(e.arrowStyles).length && Y(e.arrowElement, e.arrowStyles), e
                    }, onLoad: function (e, t, n, r, i) {
                        var o = R(i, t, e, n.positionFixed),
                            a = O(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                        return t.setAttribute("x-placement", a), Y(t, {position: n.positionFixed ? "fixed" : "absolute"}), n
                    }, gpuAcceleration: void 0
                }
            }
        }, te = function () {
            function e(t, n) {
                var r = this, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                E(this, e), this.scheduleUpdate = function () {
                    return requestAnimationFrame(r.update)
                }, this.update = a(this.update.bind(this)), this.options = x({}, e.Defaults, i), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(x({}, e.Defaults.modifiers, i.modifiers)).forEach(function (t) {
                    r.options.modifiers[t] = x({}, e.Defaults.modifiers[t] || {}, i.modifiers ? i.modifiers[t] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
                    return x({name: e}, r.options.modifiers[e])
                }).sort(function (e, t) {
                    return e.order - t.order
                }), this.modifiers.forEach(function (e) {
                    e.enabled && u(e.onLoad) && e.onLoad(r.reference, r.popper, r.options, e, r.state)
                }), this.update();
                var o = this.options.eventsEnabled;
                o && this.enableEventListeners(), this.state.eventsEnabled = o
            }

            return w(e, [{
                key: "update", value: function () {
                    return F.call(this)
                }
            }, {
                key: "destroy", value: function () {
                    return B.call(this)
                }
            }, {
                key: "enableEventListeners", value: function () {
                    return W.call(this)
                }
            }, {
                key: "disableEventListeners", value: function () {
                    return z.call(this)
                }
            }]), e
        }();
        te.Utils = ("undefined" != typeof window ? window : e).PopperUtils, te.placements = $, te.Defaults = ee, t.default = te
    }.call(this, n(1))
}, function (e, t, n) {
    var r;
    !function (t, n) {
        "use strict";
        "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function (e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return n(e)
        } : n(t)
    }("undefined" != typeof window ? window : this, function (n, i) {
        "use strict";
        var o = [], a = n.document, u = Object.getPrototypeOf, s = o.slice, l = o.concat, c = o.push, f = o.indexOf,
            h = {}, p = h.toString, d = h.hasOwnProperty, v = d.toString, g = v.call(Object), m = {}, y = function (e) {
                return "function" == typeof e && "number" != typeof e.nodeType
            }, _ = function (e) {
                return null != e && e === e.window
            }, b = {type: !0, src: !0, nonce: !0, noModule: !0};

        function E(e, t, n) {
            var r, i, o = (n = n || a).createElement("script");
            if (o.text = e, t) for (r in b) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
            n.head.appendChild(o).parentNode.removeChild(o)
        }

        function w(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? h[p.call(e)] || "object" : typeof e
        }

        var T = function (e, t) {
            return new T.fn.init(e, t)
        }, x = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

        function S(e) {
            var t = !!e && "length" in e && e.length, n = w(e);
            return !y(e) && !_(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }

        T.fn = T.prototype = {
            jquery: "3.4.1", constructor: T, length: 0, toArray: function () {
                return s.call(this)
            }, get: function (e) {
                return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
            }, pushStack: function (e) {
                var t = T.merge(this.constructor(), e);
                return t.prevObject = this, t
            }, each: function (e) {
                return T.each(this, e)
            }, map: function (e) {
                return this.pushStack(T.map(this, function (t, n) {
                    return e.call(t, n, t)
                }))
            }, slice: function () {
                return this.pushStack(s.apply(this, arguments))
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, eq: function (e) {
                var t = this.length, n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            }, end: function () {
                return this.prevObject || this.constructor()
            }, push: c, sort: o.sort, splice: o.splice
        }, T.extend = T.fn.extend = function () {
            var e, t, n, r, i, o, a = arguments[0] || {}, u = 1, s = arguments.length, l = !1;
            for ("boolean" == typeof a && (l = a, a = arguments[u] || {}, u++), "object" == typeof a || y(a) || (a = {}), u === s && (a = this, u--); u < s; u++) if (null != (e = arguments[u])) for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (T.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || T.isPlainObject(n) ? n : {}, i = !1, a[t] = T.extend(l, o, r)) : void 0 !== r && (a[t] = r));
            return a
        }, T.extend({
            expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
                throw new Error(e)
            }, noop: function () {
            }, isPlainObject: function (e) {
                var t, n;
                return !(!e || "[object Object]" !== p.call(e)) && (!(t = u(e)) || "function" == typeof (n = d.call(t, "constructor") && t.constructor) && v.call(n) === g)
            }, isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0
            }, globalEval: function (e, t) {
                E(e, {nonce: t && t.nonce})
            }, each: function (e, t) {
                var n, r = 0;
                if (S(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++) ; else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e
            }, trim: function (e) {
                return null == e ? "" : (e + "").replace(x, "")
            }, makeArray: function (e, t) {
                var n = t || [];
                return null != e && (S(Object(e)) ? T.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)), n
            }, inArray: function (e, t, n) {
                return null == t ? -1 : f.call(t, e, n)
            }, merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                return e.length = i, e
            }, grep: function (e, t, n) {
                for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
                return r
            }, map: function (e, t, n) {
                var r, i, o = 0, a = [];
                if (S(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i); else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
                return l.apply([], a)
            }, guid: 1, support: m
        }), "function" == typeof Symbol && (T.fn[Symbol.iterator] = o[Symbol.iterator]), T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            h["[object " + t + "]"] = t.toLowerCase()
        });
        var A = function (e) {
            var t, n, r, i, o, a, u, s, l, c, f, h, p, d, v, g, m, y, _, b = "sizzle" + 1 * new Date, E = e.document,
                w = 0, T = 0, x = se(), S = se(), A = se(), D = se(), C = function (e, t) {
                    return e === t && (f = !0), 0
                }, N = {}.hasOwnProperty, O = [], R = O.pop, I = O.push, L = O.push, k = O.slice, j = function (e, t) {
                    for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                    return -1
                },
                P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                F = "[\\x20\\t\\r\\n\\f]", U = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                M = "\\[" + F + "*(" + U + ")(?:" + F + "*([*^$|!~]?=)" + F + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + U + "))|)" + F + "*\\]",
                B = ":(" + U + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
                H = new RegExp(F + "+", "g"), q = new RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$", "g"),
                W = new RegExp("^" + F + "*," + F + "*"), z = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"),
                X = new RegExp(F + "|>"), Y = new RegExp(B), V = new RegExp("^" + U + "$"), G = {
                    ID: new RegExp("^#(" + U + ")"),
                    CLASS: new RegExp("^\\.(" + U + ")"),
                    TAG: new RegExp("^(" + U + "|[*])"),
                    ATTR: new RegExp("^" + M),
                    PSEUDO: new RegExp("^" + B),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + F + "*(even|odd|(([+-]|)(\\d*)n|)" + F + "*(?:([+-]|)" + F + "*(\\d+)|))" + F + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + P + ")$", "i"),
                    needsContext: new RegExp("^" + F + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + F + "*((?:-\\d)?\\d*)" + F + "*\\)|)(?=[^-]|$)", "i")
                }, $ = /HTML$/i, K = /^(?:input|select|textarea|button)$/i, Q = /^h\d$/i, J = /^[^{]+\{\s*\[native \w/,
                Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/,
                te = new RegExp("\\\\([\\da-f]{1,6}" + F + "?|(" + F + ")|.)", "ig"), ne = function (e, t, n) {
                    var r = "0x" + t - 65536;
                    return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function (e, t) {
                    return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                }, oe = function () {
                    h()
                }, ae = be(function (e) {
                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                }, {dir: "parentNode", next: "legend"});
            try {
                L.apply(O = k.call(E.childNodes), E.childNodes), O[E.childNodes.length].nodeType
            } catch (e) {
                L = {
                    apply: O.length ? function (e, t) {
                        I.apply(e, k.call(t))
                    } : function (e, t) {
                        for (var n = e.length, r = 0; e[n++] = t[r++];) ;
                        e.length = n - 1
                    }
                }
            }

            function ue(e, t, r, i) {
                var o, u, l, c, f, d, m, y = t && t.ownerDocument, w = t ? t.nodeType : 9;
                if (r = r || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return r;
                if (!i && ((t ? t.ownerDocument || t : E) !== p && h(t), t = t || p, v)) {
                    if (11 !== w && (f = Z.exec(e))) if (o = f[1]) {
                        if (9 === w) {
                            if (!(l = t.getElementById(o))) return r;
                            if (l.id === o) return r.push(l), r
                        } else if (y && (l = y.getElementById(o)) && _(t, l) && l.id === o) return r.push(l), r
                    } else {
                        if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
                        if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r
                    }
                    if (n.qsa && !D[e + " "] && (!g || !g.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                        if (m = e, y = t, 1 === w && X.test(e)) {
                            for ((c = t.getAttribute("id")) ? c = c.replace(re, ie) : t.setAttribute("id", c = b), u = (d = a(e)).length; u--;) d[u] = "#" + c + " " + _e(d[u]);
                            m = d.join(","), y = ee.test(e) && me(t.parentNode) || t
                        }
                        try {
                            return L.apply(r, y.querySelectorAll(m)), r
                        } catch (t) {
                            D(e, !0)
                        } finally {
                            c === b && t.removeAttribute("id")
                        }
                    }
                }
                return s(e.replace(q, "$1"), t, r, i)
            }

            function se() {
                var e = [];
                return function t(n, i) {
                    return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
                }
            }

            function le(e) {
                return e[b] = !0, e
            }

            function ce(e) {
                var t = p.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function fe(e, t) {
                for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t
            }

            function he(e, t) {
                var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (r) return r;
                if (n) for (; n = n.nextSibling;) if (n === t) return -1;
                return e ? 1 : -1
            }

            function pe(e) {
                return function (t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }

            function de(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function ve(e) {
                return function (t) {
                    return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e
                }
            }

            function ge(e) {
                return le(function (t) {
                    return t = +t, le(function (n, r) {
                        for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }

            function me(e) {
                return e && void 0 !== e.getElementsByTagName && e
            }

            for (t in n = ue.support = {}, o = ue.isXML = function (e) {
                var t = e.namespaceURI, n = (e.ownerDocument || e).documentElement;
                return !$.test(t || n && n.nodeName || "HTML")
            }, h = ue.setDocument = function (e) {
                var t, i, a = e ? e.ownerDocument || e : E;
                return a !== p && 9 === a.nodeType && a.documentElement ? (d = (p = a).documentElement, v = !o(p), E !== p && (i = p.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)), n.attributes = ce(function (e) {
                    return e.className = "i", !e.getAttribute("className")
                }), n.getElementsByTagName = ce(function (e) {
                    return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length
                }), n.getElementsByClassName = J.test(p.getElementsByClassName), n.getById = ce(function (e) {
                    return d.appendChild(e).id = b, !p.getElementsByName || !p.getElementsByName(b).length
                }), n.getById ? (r.filter.ID = function (e) {
                    var t = e.replace(te, ne);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }, r.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && v) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (r.filter.ID = function (e) {
                    var t = e.replace(te, ne);
                    return function (e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }, r.find.ID = function (e, t) {
                    if (void 0 !== t.getElementById && v) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            for (i = t.getElementsByName(e), r = 0; o = i[r++];) if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                } : function (e, t) {
                    var n, r = [], i = 0, o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
                    if (void 0 !== t.getElementsByClassName && v) return t.getElementsByClassName(e)
                }, m = [], g = [], (n.qsa = J.test(p.querySelectorAll)) && (ce(function (e) {
                    d.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + F + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + F + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + b + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || g.push(".#.+[+~]")
                }), ce(function (e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = p.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + F + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), d.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                })), (n.matchesSelector = J.test(y = d.matches || d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ce(function (e) {
                    n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), m.push("!=", B)
                }), g = g.length && new RegExp(g.join("|")), m = m.length && new RegExp(m.join("|")), t = J.test(d.compareDocumentPosition), _ = t || J.test(d.contains) ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function (e, t) {
                    if (t) for (; t = t.parentNode;) if (t === e) return !0;
                    return !1
                }, C = t ? function (e, t) {
                    if (e === t) return f = !0, 0;
                    var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === p || e.ownerDocument === E && _(E, e) ? -1 : t === p || t.ownerDocument === E && _(E, t) ? 1 : c ? j(c, e) - j(c, t) : 0 : 4 & r ? -1 : 1)
                } : function (e, t) {
                    if (e === t) return f = !0, 0;
                    var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], u = [t];
                    if (!i || !o) return e === p ? -1 : t === p ? 1 : i ? -1 : o ? 1 : c ? j(c, e) - j(c, t) : 0;
                    if (i === o) return he(e, t);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (n = t; n = n.parentNode;) u.unshift(n);
                    for (; a[r] === u[r];) r++;
                    return r ? he(a[r], u[r]) : a[r] === E ? -1 : u[r] === E ? 1 : 0
                }, p) : p
            }, ue.matches = function (e, t) {
                return ue(e, null, null, t)
            }, ue.matchesSelector = function (e, t) {
                if ((e.ownerDocument || e) !== p && h(e), n.matchesSelector && v && !D[t + " "] && (!m || !m.test(t)) && (!g || !g.test(t))) try {
                    var r = y.call(e, t);
                    if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                } catch (e) {
                    D(t, !0)
                }
                return ue(t, p, null, [e]).length > 0
            }, ue.contains = function (e, t) {
                return (e.ownerDocument || e) !== p && h(e), _(e, t)
            }, ue.attr = function (e, t) {
                (e.ownerDocument || e) !== p && h(e);
                var i = r.attrHandle[t.toLowerCase()],
                    o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !v) : void 0;
                return void 0 !== o ? o : n.attributes || !v ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
            }, ue.escape = function (e) {
                return (e + "").replace(re, ie)
            }, ue.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, ue.uniqueSort = function (e) {
                var t, r = [], i = 0, o = 0;
                if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(C), f) {
                    for (; t = e[o++];) t === e[o] && (i = r.push(o));
                    for (; i--;) e.splice(r[i], 1)
                }
                return c = null, e
            }, i = ue.getText = function (e) {
                var t, n = "", r = 0, o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else for (; t = e[r++];) n += i(t);
                return n
            }, (r = ue.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {dir: "parentNode", first: !0},
                    " ": {dir: "parentNode"},
                    "+": {dir: "previousSibling", first: !0},
                    "~": {dir: "previousSibling"}
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    }, CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ue.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ue.error(e[0]), e
                    }, PSEUDO: function (e) {
                        var t, n = !e[6] && e[2];
                        return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && Y.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    }, CLASS: function (e) {
                        var t = x[e + " "];
                        return t || (t = new RegExp("(^|" + F + ")" + e + "(" + F + "|$)")) && x(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    }, ATTR: function (e, t, n) {
                        return function (r) {
                            var i = ue.attr(r, e);
                            return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(H, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                        }
                    }, CHILD: function (e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), u = "of-type" === t;
                        return 1 === r && 0 === i ? function (e) {
                            return !!e.parentNode
                        } : function (t, n, s) {
                            var l, c, f, h, p, d, v = o !== a ? "nextSibling" : "previousSibling", g = t.parentNode,
                                m = u && t.nodeName.toLowerCase(), y = !s && !u, _ = !1;
                            if (g) {
                                if (o) {
                                    for (; v;) {
                                        for (h = t; h = h[v];) if (u ? h.nodeName.toLowerCase() === m : 1 === h.nodeType) return !1;
                                        d = v = "only" === e && !d && "nextSibling"
                                    }
                                    return !0
                                }
                                if (d = [a ? g.firstChild : g.lastChild], a && y) {
                                    for (_ = (p = (l = (c = (f = (h = g)[b] || (h[b] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[e] || [])[0] === w && l[1]) && l[2], h = p && g.childNodes[p]; h = ++p && h && h[v] || (_ = p = 0) || d.pop();) if (1 === h.nodeType && ++_ && h === t) {
                                        c[e] = [w, p, _];
                                        break
                                    }
                                } else if (y && (_ = p = (l = (c = (f = (h = t)[b] || (h[b] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[e] || [])[0] === w && l[1]), !1 === _) for (; (h = ++p && h && h[v] || (_ = p = 0) || d.pop()) && ((u ? h.nodeName.toLowerCase() !== m : 1 !== h.nodeType) || !++_ || (y && ((c = (f = h[b] || (h[b] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[e] = [w, _]), h !== t));) ;
                                return (_ -= i) === r || _ % r == 0 && _ / r >= 0
                            }
                        }
                    }, PSEUDO: function (e, t) {
                        var n,
                            i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ue.error("unsupported pseudo: " + e);
                        return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, n) {
                            for (var r, o = i(e, t), a = o.length; a--;) e[r = j(e, o[a])] = !(n[r] = o[a])
                        }) : function (e) {
                            return i(e, 0, n)
                        }) : i
                    }
                },
                pseudos: {
                    not: le(function (e) {
                        var t = [], n = [], r = u(e.replace(q, "$1"));
                        return r[b] ? le(function (e, t, n, i) {
                            for (var o, a = r(e, null, i, []), u = e.length; u--;) (o = a[u]) && (e[u] = !(t[u] = o))
                        }) : function (e, i, o) {
                            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                        }
                    }), has: le(function (e) {
                        return function (t) {
                            return ue(e, t).length > 0
                        }
                    }), contains: le(function (e) {
                        return e = e.replace(te, ne), function (t) {
                            return (t.textContent || i(t)).indexOf(e) > -1
                        }
                    }), lang: le(function (e) {
                        return V.test(e || "") || ue.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(), function (t) {
                            var n;
                            do {
                                if (n = v ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                    }), target: function (t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    }, root: function (e) {
                        return e === d
                    }, focus: function (e) {
                        return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    }, enabled: ve(!1), disabled: ve(!0), checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    }, selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    }, empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                        return !0
                    }, parent: function (e) {
                        return !r.pseudos.empty(e)
                    }, header: function (e) {
                        return Q.test(e.nodeName)
                    }, input: function (e) {
                        return K.test(e.nodeName)
                    }, button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    }, text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    }, first: ge(function () {
                        return [0]
                    }), last: ge(function (e, t) {
                        return [t - 1]
                    }), eq: ge(function (e, t, n) {
                        return [n < 0 ? n + t : n]
                    }), even: ge(function (e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }), odd: ge(function (e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }), lt: ge(function (e, t, n) {
                        for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) e.push(r);
                        return e
                    }), gt: ge(function (e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = r.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) r.pseudos[t] = pe(t);
            for (t in {submit: !0, reset: !0}) r.pseudos[t] = de(t);

            function ye() {
            }

            function _e(e) {
                for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                return r
            }

            function be(e, t, n) {
                var r = t.dir, i = t.next, o = i || r, a = n && "parentNode" === o, u = T++;
                return t.first ? function (t, n, i) {
                    for (; t = t[r];) if (1 === t.nodeType || a) return e(t, n, i);
                    return !1
                } : function (t, n, s) {
                    var l, c, f, h = [w, u];
                    if (s) {
                        for (; t = t[r];) if ((1 === t.nodeType || a) && e(t, n, s)) return !0
                    } else for (; t = t[r];) if (1 === t.nodeType || a) if (c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t; else {
                        if ((l = c[o]) && l[0] === w && l[1] === u) return h[2] = l[2];
                        if (c[o] = h, h[2] = e(t, n, s)) return !0
                    }
                    return !1
                }
            }

            function Ee(e) {
                return e.length > 1 ? function (t, n, r) {
                    for (var i = e.length; i--;) if (!e[i](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function we(e, t, n, r, i) {
                for (var o, a = [], u = 0, s = e.length, l = null != t; u < s; u++) (o = e[u]) && (n && !n(o, r, i) || (a.push(o), l && t.push(u)));
                return a
            }

            function Te(e, t, n, r, i, o) {
                return r && !r[b] && (r = Te(r)), i && !i[b] && (i = Te(i, o)), le(function (o, a, u, s) {
                    var l, c, f, h = [], p = [], d = a.length, v = o || function (e, t, n) {
                            for (var r = 0, i = t.length; r < i; r++) ue(e, t[r], n);
                            return n
                        }(t || "*", u.nodeType ? [u] : u, []), g = !e || !o && t ? v : we(v, h, e, u, s),
                        m = n ? i || (o ? e : d || r) ? [] : a : g;
                    if (n && n(g, m, u, s), r) for (l = we(m, p), r(l, [], u, s), c = l.length; c--;) (f = l[c]) && (m[p[c]] = !(g[p[c]] = f));
                    if (o) {
                        if (i || e) {
                            if (i) {
                                for (l = [], c = m.length; c--;) (f = m[c]) && l.push(g[c] = f);
                                i(null, m = [], l, s)
                            }
                            for (c = m.length; c--;) (f = m[c]) && (l = i ? j(o, f) : h[c]) > -1 && (o[l] = !(a[l] = f))
                        }
                    } else m = we(m === a ? m.splice(d, m.length) : m), i ? i(null, a, m, s) : L.apply(a, m)
                })
            }

            function xe(e) {
                for (var t, n, i, o = e.length, a = r.relative[e[0].type], u = a || r.relative[" "], s = a ? 1 : 0, c = be(function (e) {
                    return e === t
                }, u, !0), f = be(function (e) {
                    return j(t, e) > -1
                }, u, !0), h = [function (e, n, r) {
                    var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                    return t = null, i
                }]; s < o; s++) if (n = r.relative[e[s].type]) h = [be(Ee(h), n)]; else {
                    if ((n = r.filter[e[s].type].apply(null, e[s].matches))[b]) {
                        for (i = ++s; i < o && !r.relative[e[i].type]; i++) ;
                        return Te(s > 1 && Ee(h), s > 1 && _e(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(q, "$1"), n, s < i && xe(e.slice(s, i)), i < o && xe(e = e.slice(i)), i < o && _e(e))
                    }
                    h.push(n)
                }
                return Ee(h)
            }

            return ye.prototype = r.filters = r.pseudos, r.setFilters = new ye, a = ue.tokenize = function (e, t) {
                var n, i, o, a, u, s, l, c = S[e + " "];
                if (c) return t ? 0 : c.slice(0);
                for (u = e, s = [], l = r.preFilter; u;) {
                    for (a in n && !(i = W.exec(u)) || (i && (u = u.slice(i[0].length) || u), s.push(o = [])), n = !1, (i = z.exec(u)) && (n = i.shift(), o.push({
                        value: n,
                        type: i[0].replace(q, " ")
                    }), u = u.slice(n.length)), r.filter) !(i = G[a].exec(u)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
                        value: n,
                        type: a,
                        matches: i
                    }), u = u.slice(n.length));
                    if (!n) break
                }
                return t ? u.length : u ? ue.error(e) : S(e, s).slice(0)
            }, u = ue.compile = function (e, t) {
                var n, i = [], o = [], u = A[e + " "];
                if (!u) {
                    for (t || (t = a(e)), n = t.length; n--;) (u = xe(t[n]))[b] ? i.push(u) : o.push(u);
                    (u = A(e, function (e, t) {
                        var n = t.length > 0, i = e.length > 0, o = function (o, a, u, s, c) {
                            var f, d, g, m = 0, y = "0", _ = o && [], b = [], E = l, T = o || i && r.find.TAG("*", c),
                                x = w += null == E ? 1 : Math.random() || .1, S = T.length;
                            for (c && (l = a === p || a || c); y !== S && null != (f = T[y]); y++) {
                                if (i && f) {
                                    for (d = 0, a || f.ownerDocument === p || (h(f), u = !v); g = e[d++];) if (g(f, a || p, u)) {
                                        s.push(f);
                                        break
                                    }
                                    c && (w = x)
                                }
                                n && ((f = !g && f) && m--, o && _.push(f))
                            }
                            if (m += y, n && y !== m) {
                                for (d = 0; g = t[d++];) g(_, b, a, u);
                                if (o) {
                                    if (m > 0) for (; y--;) _[y] || b[y] || (b[y] = R.call(s));
                                    b = we(b)
                                }
                                L.apply(s, b), c && !o && b.length > 0 && m + t.length > 1 && ue.uniqueSort(s)
                            }
                            return c && (w = x, l = E), _
                        };
                        return n ? le(o) : o
                    }(o, i))).selector = e
                }
                return u
            }, s = ue.select = function (e, t, n, i) {
                var o, s, l, c, f, h = "function" == typeof e && e, p = !i && a(e = h.selector || e);
                if (n = n || [], 1 === p.length) {
                    if ((s = p[0] = p[0].slice(0)).length > 2 && "ID" === (l = s[0]).type && 9 === t.nodeType && v && r.relative[s[1].type]) {
                        if (!(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0])) return n;
                        h && (t = t.parentNode), e = e.slice(s.shift().value.length)
                    }
                    for (o = G.needsContext.test(e) ? 0 : s.length; o-- && (l = s[o], !r.relative[c = l.type]);) if ((f = r.find[c]) && (i = f(l.matches[0].replace(te, ne), ee.test(s[0].type) && me(t.parentNode) || t))) {
                        if (s.splice(o, 1), !(e = i.length && _e(s))) return L.apply(n, i), n;
                        break
                    }
                }
                return (h || u(e, p))(i, t, !v, n, !t || ee.test(e) && me(t.parentNode) || t), n
            }, n.sortStable = b.split("").sort(C).join("") === b, n.detectDuplicates = !!f, h(), n.sortDetached = ce(function (e) {
                return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
            }), ce(function (e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || fe("type|href|height|width", function (e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), n.attributes && ce(function (e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || fe("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            }), ce(function (e) {
                return null == e.getAttribute("disabled")
            }) || fe(P, function (e, t, n) {
                var r;
                if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }), ue
        }(n);
        T.find = A, T.expr = A.selectors, T.expr[":"] = T.expr.pseudos, T.uniqueSort = T.unique = A.uniqueSort, T.text = A.getText, T.isXMLDoc = A.isXML, T.contains = A.contains, T.escapeSelector = A.escape;
        var D = function (e, t, n) {
            for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
                if (i && T(e).is(n)) break;
                r.push(e)
            }
            return r
        }, C = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }, N = T.expr.match.needsContext;

        function O(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }

        var R = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function I(e, t, n) {
            return y(t) ? T.grep(e, function (e, r) {
                return !!t.call(e, r, e) !== n
            }) : t.nodeType ? T.grep(e, function (e) {
                return e === t !== n
            }) : "string" != typeof t ? T.grep(e, function (e) {
                return f.call(t, e) > -1 !== n
            }) : T.filter(t, e, n)
        }

        T.filter = function (e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? T.find.matchesSelector(r, e) ? [r] : [] : T.find.matches(e, T.grep(t, function (e) {
                return 1 === e.nodeType
            }))
        }, T.fn.extend({
            find: function (e) {
                var t, n, r = this.length, i = this;
                if ("string" != typeof e) return this.pushStack(T(e).filter(function () {
                    for (t = 0; t < r; t++) if (T.contains(i[t], this)) return !0
                }));
                for (n = this.pushStack([]), t = 0; t < r; t++) T.find(e, i[t], n);
                return r > 1 ? T.uniqueSort(n) : n
            }, filter: function (e) {
                return this.pushStack(I(this, e || [], !1))
            }, not: function (e) {
                return this.pushStack(I(this, e || [], !0))
            }, is: function (e) {
                return !!I(this, "string" == typeof e && N.test(e) ? T(e) : e || [], !1).length
            }
        });
        var L, k = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (T.fn.init = function (e, t, n) {
            var r, i;
            if (!e) return this;
            if (n = n || L, "string" == typeof e) {
                if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : k.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof T ? t[0] : t, T.merge(this, T.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : a, !0)), R.test(r[1]) && T.isPlainObject(t)) for (r in t) y(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                return (i = a.getElementById(r[2])) && (this[0] = i, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(T) : T.makeArray(e, this)
        }).prototype = T.fn, L = T(a);
        var j = /^(?:parents|prev(?:Until|All))/, P = {children: !0, contents: !0, next: !0, prev: !0};

        function F(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType;) ;
            return e
        }

        T.fn.extend({
            has: function (e) {
                var t = T(e, this), n = t.length;
                return this.filter(function () {
                    for (var e = 0; e < n; e++) if (T.contains(this, t[e])) return !0
                })
            }, closest: function (e, t) {
                var n, r = 0, i = this.length, o = [], a = "string" != typeof e && T(e);
                if (!N.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && T.find.matchesSelector(n, e))) {
                    o.push(n);
                    break
                }
                return this.pushStack(o.length > 1 ? T.uniqueSort(o) : o)
            }, index: function (e) {
                return e ? "string" == typeof e ? f.call(T(e), this[0]) : f.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }, add: function (e, t) {
                return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))))
            }, addBack: function (e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), T.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            }, parents: function (e) {
                return D(e, "parentNode")
            }, parentsUntil: function (e, t, n) {
                return D(e, "parentNode", n)
            }, next: function (e) {
                return F(e, "nextSibling")
            }, prev: function (e) {
                return F(e, "previousSibling")
            }, nextAll: function (e) {
                return D(e, "nextSibling")
            }, prevAll: function (e) {
                return D(e, "previousSibling")
            }, nextUntil: function (e, t, n) {
                return D(e, "nextSibling", n)
            }, prevUntil: function (e, t, n) {
                return D(e, "previousSibling", n)
            }, siblings: function (e) {
                return C((e.parentNode || {}).firstChild, e)
            }, children: function (e) {
                return C(e.firstChild)
            }, contents: function (e) {
                return void 0 !== e.contentDocument ? e.contentDocument : (O(e, "template") && (e = e.content || e), T.merge([], e.childNodes))
            }
        }, function (e, t) {
            T.fn[e] = function (n, r) {
                var i = T.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = T.filter(r, i)), this.length > 1 && (P[e] || T.uniqueSort(i), j.test(e) && i.reverse()), this.pushStack(i)
            }
        });
        var U = /[^\x20\t\r\n\f]+/g;

        function M(e) {
            return e
        }

        function B(e) {
            throw e
        }

        function H(e, t, n, r) {
            var i;
            try {
                e && y(i = e.promise) ? i.call(e).done(t).fail(n) : e && y(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
            } catch (e) {
                n.apply(void 0, [e])
            }
        }

        T.Callbacks = function (e) {
            e = "string" == typeof e ? function (e) {
                var t = {};
                return T.each(e.match(U) || [], function (e, n) {
                    t[n] = !0
                }), t
            }(e) : T.extend({}, e);
            var t, n, r, i, o = [], a = [], u = -1, s = function () {
                for (i = i || e.once, r = t = !0; a.length; u = -1) for (n = a.shift(); ++u < o.length;) !1 === o[u].apply(n[0], n[1]) && e.stopOnFalse && (u = o.length, n = !1);
                e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
            }, l = {
                add: function () {
                    return o && (n && !t && (u = o.length - 1, a.push(n)), function t(n) {
                        T.each(n, function (n, r) {
                            y(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== w(r) && t(r)
                        })
                    }(arguments), n && !t && s()), this
                }, remove: function () {
                    return T.each(arguments, function (e, t) {
                        for (var n; (n = T.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= u && u--
                    }), this
                }, has: function (e) {
                    return e ? T.inArray(e, o) > -1 : o.length > 0
                }, empty: function () {
                    return o && (o = []), this
                }, disable: function () {
                    return i = a = [], o = n = "", this
                }, disabled: function () {
                    return !o
                }, lock: function () {
                    return i = a = [], n || t || (o = n = ""), this
                }, locked: function () {
                    return !!i
                }, fireWith: function (e, n) {
                    return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || s()), this
                }, fire: function () {
                    return l.fireWith(this, arguments), this
                }, fired: function () {
                    return !!r
                }
            };
            return l
        }, T.extend({
            Deferred: function (e) {
                var t = [["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2], ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"]],
                    r = "pending", i = {
                        state: function () {
                            return r
                        }, always: function () {
                            return o.done(arguments).fail(arguments), this
                        }, catch: function (e) {
                            return i.then(null, e)
                        }, pipe: function () {
                            var e = arguments;
                            return T.Deferred(function (n) {
                                T.each(t, function (t, r) {
                                    var i = y(e[r[4]]) && e[r[4]];
                                    o[r[1]](function () {
                                        var e = i && i.apply(this, arguments);
                                        e && y(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        }, then: function (e, r, i) {
                            var o = 0;

                            function a(e, t, r, i) {
                                return function () {
                                    var u = this, s = arguments, l = function () {
                                        var n, l;
                                        if (!(e < o)) {
                                            if ((n = r.apply(u, s)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                            l = n && ("object" == typeof n || "function" == typeof n) && n.then, y(l) ? i ? l.call(n, a(o, t, M, i), a(o, t, B, i)) : (o++, l.call(n, a(o, t, M, i), a(o, t, B, i), a(o, t, M, t.notifyWith))) : (r !== M && (u = void 0, s = [n]), (i || t.resolveWith)(u, s))
                                        }
                                    }, c = i ? l : function () {
                                        try {
                                            l()
                                        } catch (n) {
                                            T.Deferred.exceptionHook && T.Deferred.exceptionHook(n, c.stackTrace), e + 1 >= o && (r !== B && (u = void 0, s = [n]), t.rejectWith(u, s))
                                        }
                                    };
                                    e ? c() : (T.Deferred.getStackHook && (c.stackTrace = T.Deferred.getStackHook()), n.setTimeout(c))
                                }
                            }

                            return T.Deferred(function (n) {
                                t[0][3].add(a(0, n, y(i) ? i : M, n.notifyWith)), t[1][3].add(a(0, n, y(e) ? e : M)), t[2][3].add(a(0, n, y(r) ? r : B))
                            }).promise()
                        }, promise: function (e) {
                            return null != e ? T.extend(e, i) : i
                        }
                    }, o = {};
                return T.each(t, function (e, n) {
                    var a = n[2], u = n[5];
                    i[n[1]] = a.add, u && a.add(function () {
                        r = u
                    }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), a.add(n[3].fire), o[n[0]] = function () {
                        return o[n[0] + "With"](this === o ? void 0 : this, arguments), this
                    }, o[n[0] + "With"] = a.fireWith
                }), i.promise(o), e && e.call(o, o), o
            }, when: function (e) {
                var t = arguments.length, n = t, r = Array(n), i = s.call(arguments), o = T.Deferred(),
                    a = function (e) {
                        return function (n) {
                            r[e] = this, i[e] = arguments.length > 1 ? s.call(arguments) : n, --t || o.resolveWith(r, i)
                        }
                    };
                if (t <= 1 && (H(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || y(i[n] && i[n].then))) return o.then();
                for (; n--;) H(i[n], a(n), o.reject);
                return o.promise()
            }
        });
        var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        T.Deferred.exceptionHook = function (e, t) {
            n.console && n.console.warn && e && q.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }, T.readyException = function (e) {
            n.setTimeout(function () {
                throw e
            })
        };
        var W = T.Deferred();

        function z() {
            a.removeEventListener("DOMContentLoaded", z), n.removeEventListener("load", z), T.ready()
        }

        T.fn.ready = function (e) {
            return W.then(e).catch(function (e) {
                T.readyException(e)
            }), this
        }, T.extend({
            isReady: !1, readyWait: 1, ready: function (e) {
                (!0 === e ? --T.readyWait : T.isReady) || (T.isReady = !0, !0 !== e && --T.readyWait > 0 || W.resolveWith(a, [T]))
            }
        }), T.ready.then = W.then, "complete" === a.readyState || "loading" !== a.readyState && !a.documentElement.doScroll ? n.setTimeout(T.ready) : (a.addEventListener("DOMContentLoaded", z), n.addEventListener("load", z));
        var X = function (e, t, n, r, i, o, a) {
            var u = 0, s = e.length, l = null == n;
            if ("object" === w(n)) for (u in i = !0, n) X(e, t, u, n[u], !0, o, a); else if (void 0 !== r && (i = !0, y(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
                return l.call(T(e), n)
            })), t)) for (; u < s; u++) t(e[u], n, a ? r : r.call(e[u], u, t(e[u], n)));
            return i ? e : l ? t.call(e) : s ? t(e[0], n) : o
        }, Y = /^-ms-/, V = /-([a-z])/g;

        function G(e, t) {
            return t.toUpperCase()
        }

        function $(e) {
            return e.replace(Y, "ms-").replace(V, G)
        }

        var K = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };

        function Q() {
            this.expando = T.expando + Q.uid++
        }

        Q.uid = 1, Q.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return t || (t = {}, K(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            }, set: function (e, t, n) {
                var r, i = this.cache(e);
                if ("string" == typeof t) i[$(t)] = n; else for (r in t) i[$(r)] = t[r];
                return i
            }, get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][$(t)]
            }, access: function (e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
            }, remove: function (e, t) {
                var n, r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map($) : (t = $(t)) in r ? [t] : t.match(U) || []).length;
                        for (; n--;) delete r[t[n]]
                    }
                    (void 0 === t || T.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            }, hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !T.isEmptyObject(t)
            }
        };
        var J = new Q, Z = new Q, ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, te = /[A-Z]/g;

        function ne(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(te, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = function (e) {
                        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e)
                    }(n)
                } catch (e) {
                }
                Z.set(e, t, n)
            } else n = void 0;
            return n
        }

        T.extend({
            hasData: function (e) {
                return Z.hasData(e) || J.hasData(e)
            }, data: function (e, t, n) {
                return Z.access(e, t, n)
            }, removeData: function (e, t) {
                Z.remove(e, t)
            }, _data: function (e, t, n) {
                return J.access(e, t, n)
            }, _removeData: function (e, t) {
                J.remove(e, t)
            }
        }), T.fn.extend({
            data: function (e, t) {
                var n, r, i, o = this[0], a = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (i = Z.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                        for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = $(r.slice(5)), ne(o, r, i[r]));
                        J.set(o, "hasDataAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof e ? this.each(function () {
                    Z.set(this, e)
                }) : X(this, function (t) {
                    var n;
                    if (o && void 0 === t) return void 0 !== (n = Z.get(o, e)) ? n : void 0 !== (n = ne(o, e)) ? n : void 0;
                    this.each(function () {
                        Z.set(this, e, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            }, removeData: function (e) {
                return this.each(function () {
                    Z.remove(this, e)
                })
            }
        }), T.extend({
            queue: function (e, t, n) {
                var r;
                if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, T.makeArray(n)) : r.push(n)), r || []
            }, dequeue: function (e, t) {
                t = t || "fx";
                var n = T.queue(e, t), r = n.length, i = n.shift(), o = T._queueHooks(e, t);
                "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
                    T.dequeue(e, t)
                }, o)), !r && o && o.empty.fire()
            }, _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return J.get(e, n) || J.access(e, n, {
                    empty: T.Callbacks("once memory").add(function () {
                        J.remove(e, [t + "queue", n])
                    })
                })
            }
        }), T.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? T.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                    var n = T.queue(this, e, t);
                    T._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && T.dequeue(this, e)
                })
            }, dequeue: function (e) {
                return this.each(function () {
                    T.dequeue(this, e)
                })
            }, clearQueue: function (e) {
                return this.queue(e || "fx", [])
            }, promise: function (e, t) {
                var n, r = 1, i = T.Deferred(), o = this, a = this.length, u = function () {
                    --r || i.resolveWith(o, [o])
                };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) (n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(u));
                return u(), i.promise(t)
            }
        });
        var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"), oe = ["Top", "Right", "Bottom", "Left"],
            ae = a.documentElement, ue = function (e) {
                return T.contains(e.ownerDocument, e)
            }, se = {composed: !0};
        ae.getRootNode && (ue = function (e) {
            return T.contains(e.ownerDocument, e) || e.getRootNode(se) === e.ownerDocument
        });
        var le = function (e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && ue(e) && "none" === T.css(e, "display")
        }, ce = function (e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            for (o in i = n.apply(e, r || []), t) e.style[o] = a[o];
            return i
        };

        function fe(e, t, n, r) {
            var i, o, a = 20, u = r ? function () {
                    return r.cur()
                } : function () {
                    return T.css(e, t, "")
                }, s = u(), l = n && n[3] || (T.cssNumber[t] ? "" : "px"),
                c = e.nodeType && (T.cssNumber[t] || "px" !== l && +s) && ie.exec(T.css(e, t));
            if (c && c[3] !== l) {
                for (s /= 2, l = l || c[3], c = +s || 1; a--;) T.style(e, t, c + l), (1 - o) * (1 - (o = u() / s || .5)) <= 0 && (a = 0), c /= o;
                c *= 2, T.style(e, t, c + l), n = n || []
            }
            return n && (c = +c || +s || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
        }

        var he = {};

        function pe(e) {
            var t, n = e.ownerDocument, r = e.nodeName, i = he[r];
            return i || (t = n.body.appendChild(n.createElement(r)), i = T.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), he[r] = i, i)
        }

        function de(e, t) {
            for (var n, r, i = [], o = 0, a = e.length; o < a; o++) (r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && le(r) && (i[o] = pe(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));
            for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
            return e
        }

        T.fn.extend({
            show: function () {
                return de(this, !0)
            }, hide: function () {
                return de(this)
            }, toggle: function (e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                    le(this) ? T(this).show() : T(this).hide()
                })
            }
        });
        var ve = /^(?:checkbox|radio)$/i, ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            me = /^$|^module$|\/(?:java|ecma)script/i, ye = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };

        function _e(e, t) {
            var n;
            return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && O(e, t) ? T.merge([e], n) : n
        }

        function be(e, t) {
            for (var n = 0, r = e.length; n < r; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"))
        }

        ye.optgroup = ye.option, ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead, ye.th = ye.td;
        var Ee, we, Te = /<|&#?\w+;/;

        function xe(e, t, n, r, i) {
            for (var o, a, u, s, l, c, f = t.createDocumentFragment(), h = [], p = 0, d = e.length; p < d; p++) if ((o = e[p]) || 0 === o) if ("object" === w(o)) T.merge(h, o.nodeType ? [o] : o); else if (Te.test(o)) {
                for (a = a || f.appendChild(t.createElement("div")), u = (ge.exec(o) || ["", ""])[1].toLowerCase(), s = ye[u] || ye._default, a.innerHTML = s[1] + T.htmlPrefilter(o) + s[2], c = s[0]; c--;) a = a.lastChild;
                T.merge(h, a.childNodes), (a = f.firstChild).textContent = ""
            } else h.push(t.createTextNode(o));
            for (f.textContent = "", p = 0; o = h[p++];) if (r && T.inArray(o, r) > -1) i && i.push(o); else if (l = ue(o), a = _e(f.appendChild(o), "script"), l && be(a), n) for (c = 0; o = a[c++];) me.test(o.type || "") && n.push(o);
            return f
        }

        Ee = a.createDocumentFragment().appendChild(a.createElement("div")), (we = a.createElement("input")).setAttribute("type", "radio"), we.setAttribute("checked", "checked"), we.setAttribute("name", "t"), Ee.appendChild(we), m.checkClone = Ee.cloneNode(!0).cloneNode(!0).lastChild.checked, Ee.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!Ee.cloneNode(!0).lastChild.defaultValue;
        var Se = /^key/, Ae = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, De = /^([^.]*)(?:\.(.+)|)/;

        function Ce() {
            return !0
        }

        function Ne() {
            return !1
        }

        function Oe(e, t) {
            return e === function () {
                try {
                    return a.activeElement
                } catch (e) {
                }
            }() == ("focus" === t)
        }

        function Re(e, t, n, r, i, o) {
            var a, u;
            if ("object" == typeof t) {
                for (u in "string" != typeof n && (r = r || n, n = void 0), t) Re(e, u, n, r, t[u], o);
                return e
            }
            if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ne; else if (!i) return e;
            return 1 === o && (a = i, (i = function (e) {
                return T().off(e), a.apply(this, arguments)
            }).guid = a.guid || (a.guid = T.guid++)), e.each(function () {
                T.event.add(this, t, i, r, n)
            })
        }

        function Ie(e, t, n) {
            n ? (J.set(e, t, !1), T.event.add(e, t, {
                namespace: !1, handler: function (e) {
                    var r, i, o = J.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                        if (o.length) (T.event.special[t] || {}).delegateType && e.stopPropagation(); else if (o = s.call(arguments), J.set(this, t, o), r = n(this, t), this[t](), o !== (i = J.get(this, t)) || r ? J.set(this, t, !1) : i = {}, o !== i) return e.stopImmediatePropagation(), e.preventDefault(), i.value
                    } else o.length && (J.set(this, t, {value: T.event.trigger(T.extend(o[0], T.Event.prototype), o.slice(1), this)}), e.stopImmediatePropagation())
                }
            })) : void 0 === J.get(e, t) && T.event.add(e, t, Ce)
        }

        T.event = {
            global: {}, add: function (e, t, n, r, i) {
                var o, a, u, s, l, c, f, h, p, d, v, g = J.get(e);
                if (g) for (n.handler && (n = (o = n).handler, i = o.selector), i && T.find.matchesSelector(ae, i), n.guid || (n.guid = T.guid++), (s = g.events) || (s = g.events = {}), (a = g.handle) || (a = g.handle = function (t) {
                    return void 0 !== T && T.event.triggered !== t.type ? T.event.dispatch.apply(e, arguments) : void 0
                }), l = (t = (t || "").match(U) || [""]).length; l--;) p = v = (u = De.exec(t[l]) || [])[1], d = (u[2] || "").split(".").sort(), p && (f = T.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = T.event.special[p] || {}, c = T.extend({
                    type: p,
                    origType: v,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && T.expr.match.needsContext.test(i),
                    namespace: d.join(".")
                }, o), (h = s[p]) || ((h = s[p] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, d, a) || e.addEventListener && e.addEventListener(p, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? h.splice(h.delegateCount++, 0, c) : h.push(c), T.event.global[p] = !0)
            }, remove: function (e, t, n, r, i) {
                var o, a, u, s, l, c, f, h, p, d, v, g = J.hasData(e) && J.get(e);
                if (g && (s = g.events)) {
                    for (l = (t = (t || "").match(U) || [""]).length; l--;) if (p = v = (u = De.exec(t[l]) || [])[1], d = (u[2] || "").split(".").sort(), p) {
                        for (f = T.event.special[p] || {}, h = s[p = (r ? f.delegateType : f.bindType) || p] || [], u = u[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = h.length; o--;) c = h[o], !i && v !== c.origType || n && n.guid !== c.guid || u && !u.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (h.splice(o, 1), c.selector && h.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !h.length && (f.teardown && !1 !== f.teardown.call(e, d, g.handle) || T.removeEvent(e, p, g.handle), delete s[p])
                    } else for (p in s) T.event.remove(e, p + t[l], n, r, !0);
                    T.isEmptyObject(s) && J.remove(e, "handle events")
                }
            }, dispatch: function (e) {
                var t, n, r, i, o, a, u = T.event.fix(e), s = new Array(arguments.length),
                    l = (J.get(this, "events") || {})[u.type] || [], c = T.event.special[u.type] || {};
                for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
                if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                    for (a = T.event.handlers.call(this, u, l), t = 0; (i = a[t++]) && !u.isPropagationStopped();) for (u.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !u.isImmediatePropagationStopped();) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((T.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, u), u.result
                }
            }, handlers: function (e, t) {
                var n, r, i, o, a, u = [], s = t.delegateCount, l = e.target;
                if (s && l.nodeType && !("click" === e.type && e.button >= 1)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                    for (o = [], a = {}, n = 0; n < s; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? T(i, this).index(l) > -1 : T.find(i, this, null, [l]).length), a[i] && o.push(r);
                    o.length && u.push({elem: l, handlers: o})
                }
                return l = this, s < t.length && u.push({elem: l, handlers: t.slice(s)}), u
            }, addProp: function (e, t) {
                Object.defineProperty(T.Event.prototype, e, {
                    enumerable: !0, configurable: !0, get: y(t) ? function () {
                        if (this.originalEvent) return t(this.originalEvent)
                    } : function () {
                        if (this.originalEvent) return this.originalEvent[e]
                    }, set: function (t) {
                        Object.defineProperty(this, e, {enumerable: !0, configurable: !0, writable: !0, value: t})
                    }
                })
            }, fix: function (e) {
                return e[T.expando] ? e : new T.Event(e)
            }, special: {
                load: {noBubble: !0}, click: {
                    setup: function (e) {
                        var t = this || e;
                        return ve.test(t.type) && t.click && O(t, "input") && Ie(t, "click", Ce), !1
                    }, trigger: function (e) {
                        var t = this || e;
                        return ve.test(t.type) && t.click && O(t, "input") && Ie(t, "click"), !0
                    }, _default: function (e) {
                        var t = e.target;
                        return ve.test(t.type) && t.click && O(t, "input") && J.get(t, "click") || O(t, "a")
                    }
                }, beforeunload: {
                    postDispatch: function (e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        }, T.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }, T.Event = function (e, t) {
            if (!(this instanceof T.Event)) return new T.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Ne, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && T.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[T.expando] = !0
        }, T.Event.prototype = {
            constructor: T.Event,
            isDefaultPrevented: Ne,
            isPropagationStopped: Ne,
            isImmediatePropagationStopped: Ne,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, T.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (e) {
                var t = e.button;
                return null == e.which && Se.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ae.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, T.event.addProp), T.each({focus: "focusin", blur: "focusout"}, function (e, t) {
            T.event.special[e] = {
                setup: function () {
                    return Ie(this, e, Oe), !1
                }, trigger: function () {
                    return Ie(this, e), !0
                }, delegateType: t
            }
        }), T.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (e, t) {
            T.event.special[e] = {
                delegateType: t, bindType: t, handle: function (e) {
                    var n, r = this, i = e.relatedTarget, o = e.handleObj;
                    return i && (i === r || T.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), T.fn.extend({
            on: function (e, t, n, r) {
                return Re(this, e, t, n, r)
            }, one: function (e, t, n, r) {
                return Re(this, e, t, n, r, 1)
            }, off: function (e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj) return r = e.handleObj, T(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof e) {
                    for (i in e) this.off(i, t, e[i]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ne), this.each(function () {
                    T.event.remove(this, e, n, t)
                })
            }
        });
        var Le = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            ke = /<script|<style|<link/i, je = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Pe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function Fe(e, t) {
            return O(e, "table") && O(11 !== t.nodeType ? t : t.firstChild, "tr") && T(e).children("tbody")[0] || e
        }

        function Ue(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
        }

        function Me(e) {
            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
        }

        function Be(e, t) {
            var n, r, i, o, a, u, s, l;
            if (1 === t.nodeType) {
                if (J.hasData(e) && (o = J.access(e), a = J.set(t, o), l = o.events)) for (i in delete a.handle, a.events = {}, l) for (n = 0, r = l[i].length; n < r; n++) T.event.add(t, i, l[i][n]);
                Z.hasData(e) && (u = Z.access(e), s = T.extend({}, u), Z.set(t, s))
            }
        }

        function He(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && ve.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }

        function qe(e, t, n, r) {
            t = l.apply([], t);
            var i, o, a, u, s, c, f = 0, h = e.length, p = h - 1, d = t[0], v = y(d);
            if (v || h > 1 && "string" == typeof d && !m.checkClone && je.test(d)) return e.each(function (i) {
                var o = e.eq(i);
                v && (t[0] = d.call(this, i, o.html())), qe(o, t, n, r)
            });
            if (h && (o = (i = xe(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
                for (u = (a = T.map(_e(i, "script"), Ue)).length; f < h; f++) s = i, f !== p && (s = T.clone(s, !0, !0), u && T.merge(a, _e(s, "script"))), n.call(e[f], s, f);
                if (u) for (c = a[a.length - 1].ownerDocument, T.map(a, Me), f = 0; f < u; f++) s = a[f], me.test(s.type || "") && !J.access(s, "globalEval") && T.contains(c, s) && (s.src && "module" !== (s.type || "").toLowerCase() ? T._evalUrl && !s.noModule && T._evalUrl(s.src, {nonce: s.nonce || s.getAttribute("nonce")}) : E(s.textContent.replace(Pe, ""), s, c))
            }
            return e
        }

        function We(e, t, n) {
            for (var r, i = t ? T.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || T.cleanData(_e(r)), r.parentNode && (n && ue(r) && be(_e(r, "script")), r.parentNode.removeChild(r));
            return e
        }

        T.extend({
            htmlPrefilter: function (e) {
                return e.replace(Le, "<$1></$2>")
            }, clone: function (e, t, n) {
                var r, i, o, a, u = e.cloneNode(!0), s = ue(e);
                if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || T.isXMLDoc(e))) for (a = _e(u), r = 0, i = (o = _e(e)).length; r < i; r++) He(o[r], a[r]);
                if (t) if (n) for (o = o || _e(e), a = a || _e(u), r = 0, i = o.length; r < i; r++) Be(o[r], a[r]); else Be(e, u);
                return (a = _e(u, "script")).length > 0 && be(a, !s && _e(e, "script")), u
            }, cleanData: function (e) {
                for (var t, n, r, i = T.event.special, o = 0; void 0 !== (n = e[o]); o++) if (K(n)) {
                    if (t = n[J.expando]) {
                        if (t.events) for (r in t.events) i[r] ? T.event.remove(n, r) : T.removeEvent(n, r, t.handle);
                        n[J.expando] = void 0
                    }
                    n[Z.expando] && (n[Z.expando] = void 0)
                }
            }
        }), T.fn.extend({
            detach: function (e) {
                return We(this, e, !0)
            }, remove: function (e) {
                return We(this, e)
            }, text: function (e) {
                return X(this, function (e) {
                    return void 0 === e ? T.text(this) : this.empty().each(function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            }, append: function () {
                return qe(this, arguments, function (e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Fe(this, e).appendChild(e)
                })
            }, prepend: function () {
                return qe(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = Fe(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            }, before: function () {
                return qe(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            }, after: function () {
                return qe(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            }, empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (T.cleanData(_e(e, !1)), e.textContent = "");
                return this
            }, clone: function (e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function () {
                    return T.clone(this, e, t)
                })
            }, html: function (e) {
                return X(this, function (e) {
                    var t = this[0] || {}, n = 0, r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if ("string" == typeof e && !ke.test(e) && !ye[(ge.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = T.htmlPrefilter(e);
                        try {
                            for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (T.cleanData(_e(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {
                        }
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            }, replaceWith: function () {
                var e = [];
                return qe(this, arguments, function (t) {
                    var n = this.parentNode;
                    T.inArray(this, e) < 0 && (T.cleanData(_e(this)), n && n.replaceChild(t, this))
                }, e)
            }
        }), T.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (e, t) {
            T.fn[e] = function (e) {
                for (var n, r = [], i = T(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), T(i[a])[t](n), c.apply(r, n.get());
                return this.pushStack(r)
            }
        });
        var ze = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"), Xe = function (e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = n), t.getComputedStyle(e)
        }, Ye = new RegExp(oe.join("|"), "i");

        function Ve(e, t, n) {
            var r, i, o, a, u = e.style;
            return (n = n || Xe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ue(e) || (a = T.style(e, t)), !m.pixelBoxStyles() && ze.test(a) && Ye.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = n.width, u.width = r, u.minWidth = i, u.maxWidth = o)), void 0 !== a ? a + "" : a
        }

        function Ge(e, t) {
            return {
                get: function () {
                    if (!e()) return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }

        !function () {
            function e() {
                if (c) {
                    l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ae.appendChild(l).appendChild(c);
                    var e = n.getComputedStyle(c);
                    r = "1%" !== e.top, s = 12 === t(e.marginLeft), c.style.right = "60%", u = 36 === t(e.right), i = 36 === t(e.width), c.style.position = "absolute", o = 12 === t(c.offsetWidth / 3), ae.removeChild(l), c = null
                }
            }

            function t(e) {
                return Math.round(parseFloat(e))
            }

            var r, i, o, u, s, l = a.createElement("div"), c = a.createElement("div");
            c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === c.style.backgroundClip, T.extend(m, {
                boxSizingReliable: function () {
                    return e(), i
                }, pixelBoxStyles: function () {
                    return e(), u
                }, pixelPosition: function () {
                    return e(), r
                }, reliableMarginLeft: function () {
                    return e(), s
                }, scrollboxSize: function () {
                    return e(), o
                }
            }))
        }();
        var $e = ["Webkit", "Moz", "ms"], Ke = a.createElement("div").style, Qe = {};

        function Je(e) {
            var t = T.cssProps[e] || Qe[e];
            return t || (e in Ke ? e : Qe[e] = function (e) {
                for (var t = e[0].toUpperCase() + e.slice(1), n = $e.length; n--;) if ((e = $e[n] + t) in Ke) return e
            }(e) || e)
        }

        var Ze = /^(none|table(?!-c[ea]).+)/, et = /^--/,
            tt = {position: "absolute", visibility: "hidden", display: "block"},
            nt = {letterSpacing: "0", fontWeight: "400"};

        function rt(e, t, n) {
            var r = ie.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
        }

        function it(e, t, n, r, i, o) {
            var a = "width" === t ? 1 : 0, u = 0, s = 0;
            if (n === (r ? "border" : "content")) return 0;
            for (; a < 4; a += 2) "margin" === n && (s += T.css(e, n + oe[a], !0, i)), r ? ("content" === n && (s -= T.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (s -= T.css(e, "border" + oe[a] + "Width", !0, i))) : (s += T.css(e, "padding" + oe[a], !0, i), "padding" !== n ? s += T.css(e, "border" + oe[a] + "Width", !0, i) : u += T.css(e, "border" + oe[a] + "Width", !0, i));
            return !r && o >= 0 && (s += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - s - u - .5)) || 0), s
        }

        function ot(e, t, n) {
            var r = Xe(e), i = (!m.boxSizingReliable() || n) && "border-box" === T.css(e, "boxSizing", !1, r), o = i,
                a = Ve(e, t, r), u = "offset" + t[0].toUpperCase() + t.slice(1);
            if (ze.test(a)) {
                if (!n) return a;
                a = "auto"
            }
            return (!m.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === T.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === T.css(e, "boxSizing", !1, r), (o = u in e) && (a = e[u])), (a = parseFloat(a) || 0) + it(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
        }

        function at(e, t, n, r, i) {
            return new at.prototype.init(e, t, n, r, i)
        }

        T.extend({
            cssHooks: {
                opacity: {
                    get: function (e, t) {
                        if (t) {
                            var n = Ve(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function (e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var i, o, a, u = $(t), s = et.test(t), l = e.style;
                    if (s || (t = Je(u)), a = T.cssHooks[t] || T.cssHooks[u], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                    "string" === (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = fe(e, t, i), o = "number"), null != n && n == n && ("number" !== o || s || (n += i && i[3] || (T.cssNumber[u] ? "" : "px")), m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (s ? l.setProperty(t, n) : l[t] = n))
                }
            },
            css: function (e, t, n, r) {
                var i, o, a, u = $(t);
                return et.test(t) || (t = Je(u)), (a = T.cssHooks[t] || T.cssHooks[u]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Ve(e, t, r)), "normal" === i && t in nt && (i = nt[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
            }
        }), T.each(["height", "width"], function (e, t) {
            T.cssHooks[t] = {
                get: function (e, n, r) {
                    if (n) return !Ze.test(T.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ot(e, t, r) : ce(e, tt, function () {
                        return ot(e, t, r)
                    })
                }, set: function (e, n, r) {
                    var i, o = Xe(e), a = !m.scrollboxSize() && "absolute" === o.position,
                        u = (a || r) && "border-box" === T.css(e, "boxSizing", !1, o), s = r ? it(e, t, r, u, o) : 0;
                    return u && a && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - it(e, t, "border", !1, o) - .5)), s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = T.css(e, t)), rt(0, n, s)
                }
            }
        }), T.cssHooks.marginLeft = Ge(m.reliableMarginLeft, function (e, t) {
            if (t) return (parseFloat(Ve(e, "marginLeft")) || e.getBoundingClientRect().left - ce(e, {marginLeft: 0}, function () {
                return e.getBoundingClientRect().left
            })) + "px"
        }), T.each({margin: "", padding: "", border: "Width"}, function (e, t) {
            T.cssHooks[e + t] = {
                expand: function (n) {
                    for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                    return i
                }
            }, "margin" !== e && (T.cssHooks[e + t].set = rt)
        }), T.fn.extend({
            css: function (e, t) {
                return X(this, function (e, t, n) {
                    var r, i, o = {}, a = 0;
                    if (Array.isArray(t)) {
                        for (r = Xe(e), i = t.length; a < i; a++) o[t[a]] = T.css(e, t[a], !1, r);
                        return o
                    }
                    return void 0 !== n ? T.style(e, t, n) : T.css(e, t)
                }, e, t, arguments.length > 1)
            }
        }), T.Tween = at, at.prototype = {
            constructor: at, init: function (e, t, n, r, i, o) {
                this.elem = e, this.prop = n, this.easing = i || T.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (T.cssNumber[n] ? "" : "px")
            }, cur: function () {
                var e = at.propHooks[this.prop];
                return e && e.get ? e.get(this) : at.propHooks._default.get(this)
            }, run: function (e) {
                var t, n = at.propHooks[this.prop];
                return this.options.duration ? this.pos = t = T.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : at.propHooks._default.set(this), this
            }
        }, at.prototype.init.prototype = at.prototype, at.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = T.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                }, set: function (e) {
                    T.fx.step[e.prop] ? T.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !T.cssHooks[e.prop] && null == e.elem.style[Je(e.prop)] ? e.elem[e.prop] = e.now : T.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, at.propHooks.scrollTop = at.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, T.easing = {
            linear: function (e) {
                return e
            }, swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }, _default: "swing"
        }, T.fx = at.prototype.init, T.fx.step = {};
        var ut, st, lt = /^(?:toggle|show|hide)$/, ct = /queueHooks$/;

        function ft() {
            st && (!1 === a.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ft) : n.setTimeout(ft, T.fx.interval), T.fx.tick())
        }

        function ht() {
            return n.setTimeout(function () {
                ut = void 0
            }), ut = Date.now()
        }

        function pt(e, t) {
            var n, r = 0, i = {height: e};
            for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = oe[r])] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function dt(e, t, n) {
            for (var r, i = (vt.tweeners[t] || []).concat(vt.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r
        }

        function vt(e, t, n) {
            var r, i, o = 0, a = vt.prefilters.length, u = T.Deferred().always(function () {
                delete s.elem
            }), s = function () {
                if (i) return !1;
                for (var t = ut || ht(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
                return u.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || u.notifyWith(e, [l, 1, 0]), u.resolveWith(e, [l]), !1)
            }, l = u.promise({
                elem: e,
                props: T.extend({}, t),
                opts: T.extend(!0, {specialEasing: {}, easing: T.easing._default}, n),
                originalProperties: t,
                originalOptions: n,
                startTime: ut || ht(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = T.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r
                },
                stop: function (t) {
                    var n = 0, r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) l.tweens[n].run(1);
                    return t ? (u.notifyWith(e, [l, 1, 0]), u.resolveWith(e, [l, t])) : u.rejectWith(e, [l, t]), this
                }
            }), c = l.props;
            for (!function (e, t) {
                var n, r, i, o, a;
                for (n in e) if (i = t[r = $(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = T.cssHooks[r]) && "expand" in a) for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i); else t[r] = i
            }(c, l.opts.specialEasing); o < a; o++) if (r = vt.prefilters[o].call(l, e, c, l.opts)) return y(r.stop) && (T._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
            return T.map(c, dt, l), y(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), T.fx.timer(T.extend(s, {
                elem: e,
                anim: l,
                queue: l.opts.queue
            })), l
        }

        T.Animation = T.extend(vt, {
            tweeners: {
                "*": [function (e, t) {
                    var n = this.createTween(e, t);
                    return fe(n.elem, e, ie.exec(t), n), n
                }]
            }, tweener: function (e, t) {
                y(e) ? (t = e, e = ["*"]) : e = e.match(U);
                for (var n, r = 0, i = e.length; r < i; r++) n = e[r], vt.tweeners[n] = vt.tweeners[n] || [], vt.tweeners[n].unshift(t)
            }, prefilters: [function (e, t, n) {
                var r, i, o, a, u, s, l, c, f = "width" in t || "height" in t, h = this, p = {}, d = e.style,
                    v = e.nodeType && le(e), g = J.get(e, "fxshow");
                for (r in n.queue || (null == (a = T._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function () {
                    a.unqueued || u()
                }), a.unqueued++, h.always(function () {
                    h.always(function () {
                        a.unqueued--, T.queue(e, "fx").length || a.empty.fire()
                    })
                })), t) if (i = t[r], lt.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (v ? "hide" : "show")) {
                        if ("show" !== i || !g || void 0 === g[r]) continue;
                        v = !0
                    }
                    p[r] = g && g[r] || T.style(e, r)
                }
                if ((s = !T.isEmptyObject(t)) || !T.isEmptyObject(p)) for (r in f && 1 === e.nodeType && (n.overflow = [d.overflow, d.overflowX, d.overflowY], null == (l = g && g.display) && (l = J.get(e, "display")), "none" === (c = T.css(e, "display")) && (l ? c = l : (de([e], !0), l = e.style.display || l, c = T.css(e, "display"), de([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === T.css(e, "float") && (s || (h.done(function () {
                    d.display = l
                }), null == l && (c = d.display, l = "none" === c ? "" : c)), d.display = "inline-block")), n.overflow && (d.overflow = "hidden", h.always(function () {
                    d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
                })), s = !1, p) s || (g ? "hidden" in g && (v = g.hidden) : g = J.access(e, "fxshow", {display: l}), o && (g.hidden = !v), v && de([e], !0), h.done(function () {
                    for (r in v || de([e]), J.remove(e, "fxshow"), p) T.style(e, r, p[r])
                })), s = dt(v ? g[r] : 0, r, h), r in g || (g[r] = s.start, v && (s.end = s.start, s.start = 0))
            }], prefilter: function (e, t) {
                t ? vt.prefilters.unshift(e) : vt.prefilters.push(e)
            }
        }), T.speed = function (e, t, n) {
            var r = e && "object" == typeof e ? T.extend({}, e) : {
                complete: n || !n && t || y(e) && e,
                duration: e,
                easing: n && t || t && !y(t) && t
            };
            return T.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in T.fx.speeds ? r.duration = T.fx.speeds[r.duration] : r.duration = T.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                y(r.old) && r.old.call(this), r.queue && T.dequeue(this, r.queue)
            }, r
        }, T.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(le).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
            }, animate: function (e, t, n, r) {
                var i = T.isEmptyObject(e), o = T.speed(t, n, r), a = function () {
                    var t = vt(this, T.extend({}, e), o);
                    (i || J.get(this, "finish")) && t.stop(!0)
                };
                return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            }, stop: function (e, t, n) {
                var r = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
                    var t = !0, i = null != e && e + "queueHooks", o = T.timers, a = J.get(this);
                    if (i) a[i] && a[i].stop && r(a[i]); else for (i in a) a[i] && a[i].stop && ct.test(i) && r(a[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    !t && n || T.dequeue(this, e)
                })
            }, finish: function (e) {
                return !1 !== e && (e = e || "fx"), this.each(function () {
                    var t, n = J.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = T.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, T.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), T.each(["toggle", "show", "hide"], function (e, t) {
            var n = T.fn[t];
            T.fn[t] = function (e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(pt(t, !0), e, r, i)
            }
        }), T.each({
            slideDown: pt("show"),
            slideUp: pt("hide"),
            slideToggle: pt("toggle"),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, function (e, t) {
            T.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), T.timers = [], T.fx.tick = function () {
            var e, t = 0, n = T.timers;
            for (ut = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || T.fx.stop(), ut = void 0
        }, T.fx.timer = function (e) {
            T.timers.push(e), T.fx.start()
        }, T.fx.interval = 13, T.fx.start = function () {
            st || (st = !0, ft())
        }, T.fx.stop = function () {
            st = null
        }, T.fx.speeds = {slow: 600, fast: 200, _default: 400}, T.fn.delay = function (e, t) {
            return e = T.fx && T.fx.speeds[e] || e, t = t || "fx", this.queue(t, function (t, r) {
                var i = n.setTimeout(t, e);
                r.stop = function () {
                    n.clearTimeout(i)
                }
            })
        }, function () {
            var e = a.createElement("input"), t = a.createElement("select").appendChild(a.createElement("option"));
            e.type = "checkbox", m.checkOn = "" !== e.value, m.optSelected = t.selected, (e = a.createElement("input")).value = "t", e.type = "radio", m.radioValue = "t" === e.value
        }();
        var gt, mt = T.expr.attrHandle;
        T.fn.extend({
            attr: function (e, t) {
                return X(this, T.attr, e, t, arguments.length > 1)
            }, removeAttr: function (e) {
                return this.each(function () {
                    T.removeAttr(this, e)
                })
            }
        }), T.extend({
            attr: function (e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? T.prop(e, t, n) : (1 === o && T.isXMLDoc(e) || (i = T.attrHooks[t.toLowerCase()] || (T.expr.match.bool.test(t) ? gt : void 0)), void 0 !== n ? null === n ? void T.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = T.find.attr(e, t)) ? void 0 : r)
            }, attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!m.radioValue && "radio" === t && O(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            }, removeAttr: function (e, t) {
                var n, r = 0, i = t && t.match(U);
                if (i && 1 === e.nodeType) for (; n = i[r++];) e.removeAttribute(n)
            }
        }), gt = {
            set: function (e, t, n) {
                return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, T.each(T.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = mt[t] || T.find.attr;
            mt[t] = function (e, t, r) {
                var i, o, a = t.toLowerCase();
                return r || (o = mt[a], mt[a] = i, i = null != n(e, t, r) ? a : null, mt[a] = o), i
            }
        });
        var yt = /^(?:input|select|textarea|button)$/i, _t = /^(?:a|area)$/i;

        function bt(e) {
            return (e.match(U) || []).join(" ")
        }

        function Et(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }

        function wt(e) {
            return Array.isArray(e) ? e : "string" == typeof e && e.match(U) || []
        }

        T.fn.extend({
            prop: function (e, t) {
                return X(this, T.prop, e, t, arguments.length > 1)
            }, removeProp: function (e) {
                return this.each(function () {
                    delete this[T.propFix[e] || e]
                })
            }
        }), T.extend({
            prop: function (e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && T.isXMLDoc(e) || (t = T.propFix[t] || t, i = T.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
            }, propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = T.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : yt.test(e.nodeName) || _t.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            }, propFix: {for: "htmlFor", class: "className"}
        }), m.optSelected || (T.propHooks.selected = {
            get: function (e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            }, set: function (e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            T.propFix[this.toLowerCase()] = this
        }), T.fn.extend({
            addClass: function (e) {
                var t, n, r, i, o, a, u, s = 0;
                if (y(e)) return this.each(function (t) {
                    T(this).addClass(e.call(this, t, Et(this)))
                });
                if ((t = wt(e)).length) for (; n = this[s++];) if (i = Et(n), r = 1 === n.nodeType && " " + bt(i) + " ") {
                    for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                    i !== (u = bt(r)) && n.setAttribute("class", u)
                }
                return this
            }, removeClass: function (e) {
                var t, n, r, i, o, a, u, s = 0;
                if (y(e)) return this.each(function (t) {
                    T(this).removeClass(e.call(this, t, Et(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ((t = wt(e)).length) for (; n = this[s++];) if (i = Et(n), r = 1 === n.nodeType && " " + bt(i) + " ") {
                    for (a = 0; o = t[a++];) for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                    i !== (u = bt(r)) && n.setAttribute("class", u)
                }
                return this
            }, toggleClass: function (e, t) {
                var n = typeof e, r = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : y(e) ? this.each(function (n) {
                    T(this).toggleClass(e.call(this, n, Et(this), t), t)
                }) : this.each(function () {
                    var t, i, o, a;
                    if (r) for (i = 0, o = T(this), a = wt(e); t = a[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t); else void 0 !== e && "boolean" !== n || ((t = Et(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""))
                })
            }, hasClass: function (e) {
                var t, n, r = 0;
                for (t = " " + e + " "; n = this[r++];) if (1 === n.nodeType && (" " + bt(Et(n)) + " ").indexOf(t) > -1) return !0;
                return !1
            }
        });
        var Tt = /\r/g;
        T.fn.extend({
            val: function (e) {
                var t, n, r, i = this[0];
                return arguments.length ? (r = y(e), this.each(function (n) {
                    var i;
                    1 === this.nodeType && (null == (i = r ? e.call(this, n, T(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = T.map(i, function (e) {
                        return null == e ? "" : e + ""
                    })), (t = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                })) : i ? (t = T.valHooks[i.type] || T.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(Tt, "") : null == n ? "" : n : void 0
            }
        }), T.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = T.find.attr(e, "value");
                        return null != t ? t : bt(T.text(e))
                    }
                }, select: {
                    get: function (e) {
                        var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, u = a ? null : [],
                            s = a ? o + 1 : i.length;
                        for (r = o < 0 ? s : a ? o : 0; r < s; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !O(n.parentNode, "optgroup"))) {
                            if (t = T(n).val(), a) return t;
                            u.push(t)
                        }
                        return u
                    }, set: function (e, t) {
                        for (var n, r, i = e.options, o = T.makeArray(t), a = i.length; a--;) ((r = i[a]).selected = T.inArray(T.valHooks.option.get(r), o) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), o
                    }
                }
            }
        }), T.each(["radio", "checkbox"], function () {
            T.valHooks[this] = {
                set: function (e, t) {
                    if (Array.isArray(t)) return e.checked = T.inArray(T(e).val(), t) > -1
                }
            }, m.checkOn || (T.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        }), m.focusin = "onfocusin" in n;
        var xt = /^(?:focusinfocus|focusoutblur)$/, St = function (e) {
            e.stopPropagation()
        };
        T.extend(T.event, {
            trigger: function (e, t, r, i) {
                var o, u, s, l, c, f, h, p, v = [r || a], g = d.call(e, "type") ? e.type : e,
                    m = d.call(e, "namespace") ? e.namespace.split(".") : [];
                if (u = p = s = r = r || a, 3 !== r.nodeType && 8 !== r.nodeType && !xt.test(g + T.event.triggered) && (g.indexOf(".") > -1 && (m = g.split("."), g = m.shift(), m.sort()), c = g.indexOf(":") < 0 && "on" + g, (e = e[T.expando] ? e : new T.Event(g, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = m.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : T.makeArray(t, [e]), h = T.event.special[g] || {}, i || !h.trigger || !1 !== h.trigger.apply(r, t))) {
                    if (!i && !h.noBubble && !_(r)) {
                        for (l = h.delegateType || g, xt.test(l + g) || (u = u.parentNode); u; u = u.parentNode) v.push(u), s = u;
                        s === (r.ownerDocument || a) && v.push(s.defaultView || s.parentWindow || n)
                    }
                    for (o = 0; (u = v[o++]) && !e.isPropagationStopped();) p = u, e.type = o > 1 ? l : h.bindType || g, (f = (J.get(u, "events") || {})[e.type] && J.get(u, "handle")) && f.apply(u, t), (f = c && u[c]) && f.apply && K(u) && (e.result = f.apply(u, t), !1 === e.result && e.preventDefault());
                    return e.type = g, i || e.isDefaultPrevented() || h._default && !1 !== h._default.apply(v.pop(), t) || !K(r) || c && y(r[g]) && !_(r) && ((s = r[c]) && (r[c] = null), T.event.triggered = g, e.isPropagationStopped() && p.addEventListener(g, St), r[g](), e.isPropagationStopped() && p.removeEventListener(g, St), T.event.triggered = void 0, s && (r[c] = s)), e.result
                }
            }, simulate: function (e, t, n) {
                var r = T.extend(new T.Event, n, {type: e, isSimulated: !0});
                T.event.trigger(r, null, t)
            }
        }), T.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    T.event.trigger(e, t, this)
                })
            }, triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return T.event.trigger(e, t, n, !0)
            }
        }), m.focusin || T.each({focus: "focusin", blur: "focusout"}, function (e, t) {
            var n = function (e) {
                T.event.simulate(t, e.target, T.event.fix(e))
            };
            T.event.special[t] = {
                setup: function () {
                    var r = this.ownerDocument || this, i = J.access(r, t);
                    i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1)
                }, teardown: function () {
                    var r = this.ownerDocument || this, i = J.access(r, t) - 1;
                    i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t))
                }
            }
        });
        var At = n.location, Dt = Date.now(), Ct = /\?/;
        T.parseXML = function (e) {
            var t;
            if (!e || "string" != typeof e) return null;
            try {
                t = (new n.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {
                t = void 0
            }
            return t && !t.getElementsByTagName("parsererror").length || T.error("Invalid XML: " + e), t
        };
        var Nt = /\[\]$/, Ot = /\r?\n/g, Rt = /^(?:submit|button|image|reset|file)$/i,
            It = /^(?:input|select|textarea|keygen)/i;

        function Lt(e, t, n, r) {
            var i;
            if (Array.isArray(t)) T.each(t, function (t, i) {
                n || Nt.test(e) ? r(e, i) : Lt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
            }); else if (n || "object" !== w(t)) r(e, t); else for (i in t) Lt(e + "[" + i + "]", t[i], n, r)
        }

        T.param = function (e, t) {
            var n, r = [], i = function (e, t) {
                var n = y(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
            if (null == e) return "";
            if (Array.isArray(e) || e.jquery && !T.isPlainObject(e)) T.each(e, function () {
                i(this.name, this.value)
            }); else for (n in e) Lt(n, e[n], t, i);
            return r.join("&")
        }, T.fn.extend({
            serialize: function () {
                return T.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map(function () {
                    var e = T.prop(this, "elements");
                    return e ? T.makeArray(e) : this
                }).filter(function () {
                    var e = this.type;
                    return this.name && !T(this).is(":disabled") && It.test(this.nodeName) && !Rt.test(e) && (this.checked || !ve.test(e))
                }).map(function (e, t) {
                    var n = T(this).val();
                    return null == n ? null : Array.isArray(n) ? T.map(n, function (e) {
                        return {name: t.name, value: e.replace(Ot, "\r\n")}
                    }) : {name: t.name, value: n.replace(Ot, "\r\n")}
                }).get()
            }
        });
        var kt = /%20/g, jt = /#.*$/, Pt = /([?&])_=[^&]*/, Ft = /^(.*?):[ \t]*([^\r\n]*)$/gm, Ut = /^(?:GET|HEAD)$/,
            Mt = /^\/\//, Bt = {}, Ht = {}, qt = "*/".concat("*"), Wt = a.createElement("a");

        function zt(e) {
            return function (t, n) {
                "string" != typeof t && (n = t, t = "*");
                var r, i = 0, o = t.toLowerCase().match(U) || [];
                if (y(n)) for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
        }

        function Xt(e, t, n, r) {
            var i = {}, o = e === Ht;

            function a(u) {
                var s;
                return i[u] = !0, T.each(e[u] || [], function (e, u) {
                    var l = u(t, n, r);
                    return "string" != typeof l || o || i[l] ? o ? !(s = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
                }), s
            }

            return a(t.dataTypes[0]) || !i["*"] && a("*")
        }

        function Yt(e, t) {
            var n, r, i = T.ajaxSettings.flatOptions || {};
            for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
            return r && T.extend(!0, e, r), e
        }

        Wt.href = At.href, T.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: At.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(At.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": qt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
                responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": T.parseXML},
                flatOptions: {url: !0, context: !0}
            },
            ajaxSetup: function (e, t) {
                return t ? Yt(Yt(e, T.ajaxSettings), t) : Yt(T.ajaxSettings, e)
            },
            ajaxPrefilter: zt(Bt),
            ajaxTransport: zt(Ht),
            ajax: function (e, t) {
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var r, i, o, u, s, l, c, f, h, p, d = T.ajaxSetup({}, t), v = d.context || d,
                    g = d.context && (v.nodeType || v.jquery) ? T(v) : T.event, m = T.Deferred(),
                    y = T.Callbacks("once memory"), _ = d.statusCode || {}, b = {}, E = {}, w = "canceled", x = {
                        readyState: 0, getResponseHeader: function (e) {
                            var t;
                            if (c) {
                                if (!u) for (u = {}; t = Ft.exec(o);) u[t[1].toLowerCase() + " "] = (u[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                t = u[e.toLowerCase() + " "]
                            }
                            return null == t ? null : t.join(", ")
                        }, getAllResponseHeaders: function () {
                            return c ? o : null
                        }, setRequestHeader: function (e, t) {
                            return null == c && (e = E[e.toLowerCase()] = E[e.toLowerCase()] || e, b[e] = t), this
                        }, overrideMimeType: function (e) {
                            return null == c && (d.mimeType = e), this
                        }, statusCode: function (e) {
                            var t;
                            if (e) if (c) x.always(e[x.status]); else for (t in e) _[t] = [_[t], e[t]];
                            return this
                        }, abort: function (e) {
                            var t = e || w;
                            return r && r.abort(t), S(0, t), this
                        }
                    };
                if (m.promise(x), d.url = ((e || d.url || At.href) + "").replace(Mt, At.protocol + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = (d.dataType || "*").toLowerCase().match(U) || [""], null == d.crossDomain) {
                    l = a.createElement("a");
                    try {
                        l.href = d.url, l.href = l.href, d.crossDomain = Wt.protocol + "//" + Wt.host != l.protocol + "//" + l.host
                    } catch (e) {
                        d.crossDomain = !0
                    }
                }
                if (d.data && d.processData && "string" != typeof d.data && (d.data = T.param(d.data, d.traditional)), Xt(Bt, d, t, x), c) return x;
                for (h in (f = T.event && d.global) && 0 == T.active++ && T.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Ut.test(d.type), i = d.url.replace(jt, ""), d.hasContent ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(kt, "+")) : (p = d.url.slice(i.length), d.data && (d.processData || "string" == typeof d.data) && (i += (Ct.test(i) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (i = i.replace(Pt, "$1"), p = (Ct.test(i) ? "&" : "?") + "_=" + Dt++ + p), d.url = i + p), d.ifModified && (T.lastModified[i] && x.setRequestHeader("If-Modified-Since", T.lastModified[i]), T.etag[i] && x.setRequestHeader("If-None-Match", T.etag[i])), (d.data && d.hasContent && !1 !== d.contentType || t.contentType) && x.setRequestHeader("Content-Type", d.contentType), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + qt + "; q=0.01" : "") : d.accepts["*"]), d.headers) x.setRequestHeader(h, d.headers[h]);
                if (d.beforeSend && (!1 === d.beforeSend.call(v, x, d) || c)) return x.abort();
                if (w = "abort", y.add(d.complete), x.done(d.success), x.fail(d.error), r = Xt(Ht, d, t, x)) {
                    if (x.readyState = 1, f && g.trigger("ajaxSend", [x, d]), c) return x;
                    d.async && d.timeout > 0 && (s = n.setTimeout(function () {
                        x.abort("timeout")
                    }, d.timeout));
                    try {
                        c = !1, r.send(b, S)
                    } catch (e) {
                        if (c) throw e;
                        S(-1, e)
                    }
                } else S(-1, "No Transport");

                function S(e, t, a, u) {
                    var l, h, p, b, E, w = t;
                    c || (c = !0, s && n.clearTimeout(s), r = void 0, o = u || "", x.readyState = e > 0 ? 4 : 0, l = e >= 200 && e < 300 || 304 === e, a && (b = function (e, t, n) {
                        for (var r, i, o, a, u = e.contents, s = e.dataTypes; "*" === s[0];) s.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (r) for (i in u) if (u[i] && u[i].test(r)) {
                            s.unshift(i);
                            break
                        }
                        if (s[0] in n) o = s[0]; else {
                            for (i in n) {
                                if (!s[0] || e.converters[i + " " + s[0]]) {
                                    o = i;
                                    break
                                }
                                a || (a = i)
                            }
                            o = o || a
                        }
                        if (o) return o !== s[0] && s.unshift(o), n[o]
                    }(d, x, a)), b = function (e, t, n, r) {
                        var i, o, a, u, s, l = {}, c = e.dataTypes.slice();
                        if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                        for (o = c.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !s && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), s = o, o = c.shift()) if ("*" === o) o = s; else if ("*" !== s && s !== o) {
                            if (!(a = l[s + " " + o] || l["* " + o])) for (i in l) if ((u = i.split(" "))[1] === o && (a = l[s + " " + u[0]] || l["* " + u[0]])) {
                                !0 === a ? a = l[i] : !0 !== l[i] && (o = u[0], c.unshift(u[1]));
                                break
                            }
                            if (!0 !== a) if (a && e.throws) t = a(t); else try {
                                t = a(t)
                            } catch (e) {
                                return {state: "parsererror", error: a ? e : "No conversion from " + s + " to " + o}
                            }
                        }
                        return {state: "success", data: t}
                    }(d, b, x, l), l ? (d.ifModified && ((E = x.getResponseHeader("Last-Modified")) && (T.lastModified[i] = E), (E = x.getResponseHeader("etag")) && (T.etag[i] = E)), 204 === e || "HEAD" === d.type ? w = "nocontent" : 304 === e ? w = "notmodified" : (w = b.state, h = b.data, l = !(p = b.error))) : (p = w, !e && w || (w = "error", e < 0 && (e = 0))), x.status = e, x.statusText = (t || w) + "", l ? m.resolveWith(v, [h, w, x]) : m.rejectWith(v, [x, w, p]), x.statusCode(_), _ = void 0, f && g.trigger(l ? "ajaxSuccess" : "ajaxError", [x, d, l ? h : p]), y.fireWith(v, [x, w]), f && (g.trigger("ajaxComplete", [x, d]), --T.active || T.event.trigger("ajaxStop")))
                }

                return x
            },
            getJSON: function (e, t, n) {
                return T.get(e, t, n, "json")
            },
            getScript: function (e, t) {
                return T.get(e, void 0, t, "script")
            }
        }), T.each(["get", "post"], function (e, t) {
            T[t] = function (e, n, r, i) {
                return y(n) && (i = i || r, r = n, n = void 0), T.ajax(T.extend({
                    url: e,
                    type: t,
                    dataType: i,
                    data: n,
                    success: r
                }, T.isPlainObject(e) && e))
            }
        }), T._evalUrl = function (e, t) {
            return T.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function () {
                    }
                },
                dataFilter: function (e) {
                    T.globalEval(e, t)
                }
            })
        }, T.fn.extend({
            wrapAll: function (e) {
                var t;
                return this[0] && (y(e) && (e = e.call(this[0])), t = T(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                    return e
                }).append(this)), this
            }, wrapInner: function (e) {
                return y(e) ? this.each(function (t) {
                    T(this).wrapInner(e.call(this, t))
                }) : this.each(function () {
                    var t = T(this), n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            }, wrap: function (e) {
                var t = y(e);
                return this.each(function (n) {
                    T(this).wrapAll(t ? e.call(this, n) : e)
                })
            }, unwrap: function (e) {
                return this.parent(e).not("body").each(function () {
                    T(this).replaceWith(this.childNodes)
                }), this
            }
        }), T.expr.pseudos.hidden = function (e) {
            return !T.expr.pseudos.visible(e)
        }, T.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }, T.ajaxSettings.xhr = function () {
            try {
                return new n.XMLHttpRequest
            } catch (e) {
            }
        };
        var Vt = {0: 200, 1223: 204}, Gt = T.ajaxSettings.xhr();
        m.cors = !!Gt && "withCredentials" in Gt, m.ajax = Gt = !!Gt, T.ajaxTransport(function (e) {
            var t, r;
            if (m.cors || Gt && !e.crossDomain) return {
                send: function (i, o) {
                    var a, u = e.xhr();
                    if (u.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (a in e.xhrFields) u[a] = e.xhrFields[a];
                    for (a in e.mimeType && u.overrideMimeType && u.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) u.setRequestHeader(a, i[a]);
                    t = function (e) {
                        return function () {
                            t && (t = r = u.onload = u.onerror = u.onabort = u.ontimeout = u.onreadystatechange = null, "abort" === e ? u.abort() : "error" === e ? "number" != typeof u.status ? o(0, "error") : o(u.status, u.statusText) : o(Vt[u.status] || u.status, u.statusText, "text" !== (u.responseType || "text") || "string" != typeof u.responseText ? {binary: u.response} : {text: u.responseText}, u.getAllResponseHeaders()))
                        }
                    }, u.onload = t(), r = u.onerror = u.ontimeout = t("error"), void 0 !== u.onabort ? u.onabort = r : u.onreadystatechange = function () {
                        4 === u.readyState && n.setTimeout(function () {
                            t && r()
                        })
                    }, t = t("abort");
                    try {
                        u.send(e.hasContent && e.data || null)
                    } catch (e) {
                        if (t) throw e
                    }
                }, abort: function () {
                    t && t()
                }
            }
        }), T.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1)
        }), T.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /\b(?:java|ecma)script\b/},
            converters: {
                "text script": function (e) {
                    return T.globalEval(e), e
                }
            }
        }), T.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), T.ajaxTransport("script", function (e) {
            var t, n;
            if (e.crossDomain || e.scriptAttrs) return {
                send: function (r, i) {
                    t = T("<script>").attr(e.scriptAttrs || {}).prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function (e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), a.head.appendChild(t[0])
                }, abort: function () {
                    n && n()
                }
            }
        });
        var $t, Kt = [], Qt = /(=)\?(?=&|$)|\?\?/;
        T.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var e = Kt.pop() || T.expando + "_" + Dt++;
                return this[e] = !0, e
            }
        }), T.ajaxPrefilter("json jsonp", function (e, t, r) {
            var i, o, a,
                u = !1 !== e.jsonp && (Qt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(e.data) && "data");
            if (u || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, u ? e[u] = e[u].replace(Qt, "$1" + i) : !1 !== e.jsonp && (e.url += (Ct.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
                return a || T.error(i + " was not called"), a[0]
            }, e.dataTypes[0] = "json", o = n[i], n[i] = function () {
                a = arguments
            }, r.always(function () {
                void 0 === o ? T(n).removeProp(i) : n[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, Kt.push(i)), a && y(o) && o(a[0]), a = o = void 0
            }), "script"
        }), m.createHTMLDocument = (($t = a.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === $t.childNodes.length), T.parseHTML = function (e, t, n) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (m.createHTMLDocument ? ((r = (t = a.implementation.createHTMLDocument("")).createElement("base")).href = a.location.href, t.head.appendChild(r)) : t = a), o = !n && [], (i = R.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && T(o).remove(), T.merge([], i.childNodes)));
            var r, i, o
        }, T.fn.load = function (e, t, n) {
            var r, i, o, a = this, u = e.indexOf(" ");
            return u > -1 && (r = bt(e.slice(u)), e = e.slice(0, u)), y(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && T.ajax({
                url: e,
                type: i || "GET",
                dataType: "html",
                data: t
            }).done(function (e) {
                o = arguments, a.html(r ? T("<div>").append(T.parseHTML(e)).find(r) : e)
            }).always(n && function (e, t) {
                a.each(function () {
                    n.apply(this, o || [e.responseText, t, e])
                })
            }), this
        }, T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            T.fn[t] = function (e) {
                return this.on(t, e)
            }
        }), T.expr.pseudos.animated = function (e) {
            return T.grep(T.timers, function (t) {
                return e === t.elem
            }).length
        }, T.offset = {
            setOffset: function (e, t, n) {
                var r, i, o, a, u, s, l = T.css(e, "position"), c = T(e), f = {};
                "static" === l && (e.style.position = "relative"), u = c.offset(), o = T.css(e, "top"), s = T.css(e, "left"), ("absolute" === l || "fixed" === l) && (o + s).indexOf("auto") > -1 ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(s) || 0), y(t) && (t = t.call(e, n, T.extend({}, u))), null != t.top && (f.top = t.top - u.top + a), null != t.left && (f.left = t.left - u.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
            }
        }, T.fn.extend({
            offset: function (e) {
                if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                    T.offset.setOffset(this, e, t)
                });
                var t, n, r = this[0];
                return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                    top: t.top + n.pageYOffset,
                    left: t.left + n.pageXOffset
                }) : {top: 0, left: 0} : void 0
            }, position: function () {
                if (this[0]) {
                    var e, t, n, r = this[0], i = {top: 0, left: 0};
                    if ("fixed" === T.css(r, "position")) t = r.getBoundingClientRect(); else {
                        for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === T.css(e, "position");) e = e.parentNode;
                        e && e !== r && 1 === e.nodeType && ((i = T(e).offset()).top += T.css(e, "borderTopWidth", !0), i.left += T.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - i.top - T.css(r, "marginTop", !0),
                        left: t.left - i.left - T.css(r, "marginLeft", !0)
                    }
                }
            }, offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent; e && "static" === T.css(e, "position");) e = e.offsetParent;
                    return e || ae
                })
            }
        }), T.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
            var n = "pageYOffset" === t;
            T.fn[e] = function (r) {
                return X(this, function (e, r, i) {
                    var o;
                    if (_(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                    o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
                }, e, r, arguments.length)
            }
        }), T.each(["top", "left"], function (e, t) {
            T.cssHooks[t] = Ge(m.pixelPosition, function (e, n) {
                if (n) return n = Ve(e, t), ze.test(n) ? T(e).position()[t] + "px" : n
            })
        }), T.each({Height: "height", Width: "width"}, function (e, t) {
            T.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, r) {
                T.fn[r] = function (i, o) {
                    var a = arguments.length && (n || "boolean" != typeof i),
                        u = n || (!0 === i || !0 === o ? "margin" : "border");
                    return X(this, function (t, n, i) {
                        var o;
                        return _(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? T.css(t, n, u) : T.style(t, n, i, u)
                    }, t, a ? i : void 0, a)
                }
            })
        }), T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
            T.fn[t] = function (e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), T.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), T.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n)
            }, unbind: function (e, t) {
                return this.off(e, null, t)
            }, delegate: function (e, t, n, r) {
                return this.on(t, e, n, r)
            }, undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }), T.proxy = function (e, t) {
            var n, r, i;
            if ("string" == typeof t && (n = e[t], t = e, e = n), y(e)) return r = s.call(arguments, 2), (i = function () {
                return e.apply(t || this, r.concat(s.call(arguments)))
            }).guid = e.guid = e.guid || T.guid++, i
        }, T.holdReady = function (e) {
            e ? T.readyWait++ : T.ready(!0)
        }, T.isArray = Array.isArray, T.parseJSON = JSON.parse, T.nodeName = O, T.isFunction = y, T.isWindow = _, T.camelCase = $, T.type = w, T.now = Date.now, T.isNumeric = function (e) {
            var t = T.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }, void 0 === (r = function () {
            return T
        }.apply(t, [])) || (e.exports = r);
        var Jt = n.jQuery, Zt = n.$;
        return T.noConflict = function (e) {
            return n.$ === T && (n.$ = Zt), e && n.jQuery === T && (n.jQuery = Jt), T
        }, i || (n.jQuery = n.$ = T), T
    })
}, function (e, t, n) {
    "use strict";
    e.exports = function (e, t) {
        return function () {
            for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
            return e.apply(t, n)
        }
    }
}, function (e, t, n) {
    "use strict";
    var r = n(0);

    function i(e) {
        return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }

    e.exports = function (e, t, n) {
        if (!t) return e;
        var o;
        if (n) o = n(t); else if (r.isURLSearchParams(t)) o = t.toString(); else {
            var a = [];
            r.forEach(t, function (e, t) {
                null != e && (r.isArray(e) ? t += "[]" : e = [e], r.forEach(e, function (e) {
                    r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), a.push(i(t) + "=" + i(e))
                }))
            }), o = a.join("&")
        }
        if (o) {
            var u = e.indexOf("#");
            -1 !== u && (e = e.slice(0, u)), e += (-1 === e.indexOf("?") ? "?" : "&") + o
        }
        return e
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        return !(!e || !e.__CANCEL__)
    }
}, function (e, t, n) {
    "use strict";
    (function (t) {
        var r = n(0), i = n(26), o = {"Content-Type": "application/x-www-form-urlencoded"};

        function a(e, t) {
            !r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
        }

        var u, s = {
            adapter: (void 0 !== t && "[object process]" === Object.prototype.toString.call(t) ? u = n(8) : "undefined" != typeof XMLHttpRequest && (u = n(8)), u),
            transformRequest: [function (e, t) {
                return i(t, "Accept"), i(t, "Content-Type"), r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (a(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : r.isObject(e) ? (a(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
            }],
            transformResponse: [function (e) {
                if ("string" == typeof e) try {
                    e = JSON.parse(e)
                } catch (e) {
                }
                return e
            }],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            validateStatus: function (e) {
                return e >= 200 && e < 300
            }
        };
        s.headers = {common: {Accept: "application/json, text/plain, */*"}}, r.forEach(["delete", "get", "head"], function (e) {
            s.headers[e] = {}
        }), r.forEach(["post", "put", "patch"], function (e) {
            s.headers[e] = r.merge(o)
        }), e.exports = s
    }).call(this, n(25))
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(27), o = n(5), a = n(29), u = n(30), s = n(9);
    e.exports = function (e) {
        return new Promise(function (t, l) {
            var c = e.data, f = e.headers;
            r.isFormData(c) && delete f["Content-Type"];
            var h = new XMLHttpRequest;
            if (e.auth) {
                var p = e.auth.username || "", d = e.auth.password || "";
                f.Authorization = "Basic " + btoa(p + ":" + d)
            }
            if (h.open(e.method.toUpperCase(), o(e.url, e.params, e.paramsSerializer), !0), h.timeout = e.timeout, h.onreadystatechange = function () {
                if (h && 4 === h.readyState && (0 !== h.status || h.responseURL && 0 === h.responseURL.indexOf("file:"))) {
                    var n = "getAllResponseHeaders" in h ? a(h.getAllResponseHeaders()) : null, r = {
                        data: e.responseType && "text" !== e.responseType ? h.response : h.responseText,
                        status: h.status,
                        statusText: h.statusText,
                        headers: n,
                        config: e,
                        request: h
                    };
                    i(t, l, r), h = null
                }
            }, h.onabort = function () {
                h && (l(s("Request aborted", e, "ECONNABORTED", h)), h = null)
            }, h.onerror = function () {
                l(s("Network Error", e, null, h)), h = null
            }, h.ontimeout = function () {
                l(s("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", h)), h = null
            }, r.isStandardBrowserEnv()) {
                var v = n(31),
                    g = (e.withCredentials || u(e.url)) && e.xsrfCookieName ? v.read(e.xsrfCookieName) : void 0;
                g && (f[e.xsrfHeaderName] = g)
            }
            if ("setRequestHeader" in h && r.forEach(f, function (e, t) {
                void 0 === c && "content-type" === t.toLowerCase() ? delete f[t] : h.setRequestHeader(t, e)
            }), e.withCredentials && (h.withCredentials = !0), e.responseType) try {
                h.responseType = e.responseType
            } catch (t) {
                if ("json" !== e.responseType) throw t
            }
            "function" == typeof e.onDownloadProgress && h.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && h.upload && h.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function (e) {
                h && (h.abort(), l(e), h = null)
            }), void 0 === c && (c = null), h.send(c)
        })
    }
}, function (e, t, n) {
    "use strict";
    var r = n(28);
    e.exports = function (e, t, n, i, o) {
        var a = new Error(e);
        return r(a, t, n, i, o)
    }
}, function (e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = function (e, t) {
        t = t || {};
        var n = {};
        return r.forEach(["url", "method", "params", "data"], function (e) {
            void 0 !== t[e] && (n[e] = t[e])
        }), r.forEach(["headers", "auth", "proxy"], function (i) {
            r.isObject(t[i]) ? n[i] = r.deepMerge(e[i], t[i]) : void 0 !== t[i] ? n[i] = t[i] : r.isObject(e[i]) ? n[i] = r.deepMerge(e[i]) : void 0 !== e[i] && (n[i] = e[i])
        }), r.forEach(["baseURL", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"], function (r) {
            void 0 !== t[r] ? n[r] = t[r] : void 0 !== e[r] && (n[r] = e[r])
        }), n
    }
}, function (e, t, n) {
    "use strict";

    function r(e) {
        this.message = e
    }

    r.prototype.toString = function () {
        return "Cancel" + (this.message ? ": " + this.message : "")
    }, r.prototype.__CANCEL__ = !0, e.exports = r
}, function (e, t, n) {
    n(13), e.exports = n(36)
}, function (e, t, n) {
    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function o(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e
    }

    n(14);
    var a = document.getElementsByTagName("canvas")[0];
    be();
    var u = {
        SIM_RESOLUTION: 256,
        DYE_RESOLUTION: 1024,
        CAPTURE_RESOLUTION: 512,
        DENSITY_DISSIPATION: 1,
        VELOCITY_DISSIPATION: .2,
        PRESSURE: .8,
        PRESSURE_ITERATIONS: 20,
        CURL: 30,
        SPLAT_RADIUS: .25,
        SPLAT_FORCE: 6e3,
        SHADING: !0,
        COLORFUL: !0,
        COLOR_UPDATE_SPEED: 10,
        PAUSED: !1,
        BACK_COLOR: {r: 0, g: 0, b: 0},
        TRANSPARENT: !0,
        BLOOM: !0,
        BLOOM_ITERATIONS: 8,
        BLOOM_RESOLUTION: 256,
        BLOOM_INTENSITY: .8,
        BLOOM_THRESHOLD: .6,
        BLOOM_SOFT_KNEE: .7,
        SUNRAYS: !0,
        SUNRAYS_RESOLUTION: 196,
        SUNRAYS_WEIGHT: 1
    };

    function s() {
        this.id = -1, this.texcoordX = 0, this.texcoordY = 0, this.prevTexcoordX = 0, this.prevTexcoordY = 0, this.deltaX = 0, this.deltaY = 0, this.down = !1, this.moved = !1, this.color = [30, 0, 300]
    }

    var l = [], c = [], f = [];
    l.push(new s);
    var h = function (e) {
        var t, n, r = {alpha: !0, depth: !1, stencil: !1, antialias: !1, preserveDrawingBuffer: !1},
            i = e.getContext("webgl2", r), o = !!i;
        o || (i = e.getContext("webgl", r) || e.getContext("experimental-webgl", r));
        o ? (i.getExtension("EXT_color_buffer_float"), n = i.getExtension("OES_texture_float_linear")) : (t = i.getExtension("OES_texture_half_float"), n = i.getExtension("OES_texture_half_float_linear"));
        i.clearColor(0, 0, 0, 1);
        var a, u, s, l = o ? i.HALF_FLOAT : t.HALF_FLOAT_OES;
        o ? (a = v(i, i.RGBA16F, i.RGBA, l), u = v(i, i.RG16F, i.RG, l), s = v(i, i.R16F, i.RED, l)) : (a = v(i, i.RGBA, i.RGBA, l), u = v(i, i.RGBA, i.RGBA, l), s = v(i, i.RGBA, i.RGBA, l));
        return ga("send", "event", o ? "webgl2" : "webgl", null == a ? "not supported" : "supported"), {
            gl: i,
            ext: {formatRGBA: a, formatRG: u, formatR: s, halfFloatTexType: l, supportLinearFiltering: n}
        }
    }(a), p = h.gl, d = h.ext;

    function v(e, t, n, r) {
        if (!function (e, t, n, r) {
            var i = e.createTexture();
            e.bindTexture(e.TEXTURE_2D, i), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texImage2D(e.TEXTURE_2D, 0, t, 4, 4, 0, n, r, null);
            var o = e.createFramebuffer();
            return e.bindFramebuffer(e.FRAMEBUFFER, o), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, i, 0), e.checkFramebufferStatus(e.FRAMEBUFFER) == e.FRAMEBUFFER_COMPLETE
        }(e, t, n, r)) switch (t) {
            case e.R16F:
                return v(e, e.RG16F, e.RG, r);
            case e.RG16F:
                return v(e, e.RGBA16F, e.RGBA, r);
            default:
                return null
        }
        return {internalFormat: t, format: n}
    }

    /Mobi|Android/i.test(navigator.userAgent) && (u.DYE_RESOLUTION = 512), d.supportLinearFiltering || (u.DYE_RESOLUTION = 512, u.SHADING = !1, u.BLOOM = !1, u.SUNRAYS = !1);
    var g = function () {
        function e(t, n) {
            r(this, e), this.vertexShader = t, this.fragmentShaderSource = n, this.programs = [], this.activeProgram = null, this.uniforms = []
        }

        return o(e, [{
            key: "setKeywords", value: function (e) {
                for (var t = 0, n = 0; n < e.length; n++) t += Oe(e[n]);
                var r = this.programs[t];
                if (null == r) {
                    var i = b(p.FRAGMENT_SHADER, this.fragmentShaderSource, e);
                    r = y(this.vertexShader, i), this.programs[t] = r
                }
                r != this.activeProgram && (this.uniforms = _(r), this.activeProgram = r)
            }
        }, {
            key: "bind", value: function () {
                p.useProgram(this.activeProgram)
            }
        }]), e
    }(), m = function () {
        function e(t, n) {
            r(this, e), this.uniforms = {}, this.program = y(t, n), this.uniforms = _(this.program)
        }

        return o(e, [{
            key: "bind", value: function () {
                p.useProgram(this.program)
            }
        }]), e
    }();

    function y(e, t) {
        var n = p.createProgram();
        if (p.attachShader(n, e), p.attachShader(n, t), p.linkProgram(n), !p.getProgramParameter(n, p.LINK_STATUS)) throw p.getProgramInfoLog(n);
        return n
    }

    function _(e) {
        for (var t = [], n = p.getProgramParameter(e, p.ACTIVE_UNIFORMS), r = 0; r < n; r++) {
            var i = p.getActiveUniform(e, r).name;
            t[i] = p.getUniformLocation(e, i)
        }
        return t
    }

    function b(e, t, n) {
        t = function (e, t) {
            if (null == t) return e;
            var n = "";
            return t.forEach(function (e) {
                n += "#define " + e + "\n"
            }), n + e
        }(t, n);
        var r = p.createShader(e);
        if (p.shaderSource(r, t), p.compileShader(r), !p.getShaderParameter(r, p.COMPILE_STATUS)) throw p.getShaderInfoLog(r);
        return r
    }

    var E, w, T, x, S, A, D, C, N,
        O = b(p.VERTEX_SHADER, "\n    precision highp float;\n\n    attribute vec2 aPosition;\n    varying vec2 vUv;\n    varying vec2 vL;\n    varying vec2 vR;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform vec2 texelSize;\n\n    void main () {\n        vUv = aPosition * 0.5 + 0.5;\n        vL = vUv - vec2(texelSize.x, 0.0);\n        vR = vUv + vec2(texelSize.x, 0.0);\n        vT = vUv + vec2(0.0, texelSize.y);\n        vB = vUv - vec2(0.0, texelSize.y);\n        gl_Position = vec4(aPosition, 0.0, 1.0);\n    }\n"),
        R = b(p.VERTEX_SHADER, "\n    precision highp float;\n\n    attribute vec2 aPosition;\n    varying vec2 vUv;\n    varying vec2 vL;\n    varying vec2 vR;\n    uniform vec2 texelSize;\n\n    void main () {\n        vUv = aPosition * 0.5 + 0.5;\n        float offset = 1.33333333;\n        vL = vUv - texelSize * offset;\n        vR = vUv + texelSize * offset;\n        gl_Position = vec4(aPosition, 0.0, 1.0);\n    }\n"),
        I = b(p.FRAGMENT_SHADER, "\n    precision mediump float;\n    precision mediump sampler2D;\n\n    varying vec2 vUv;\n    varying vec2 vL;\n    varying vec2 vR;\n    uniform sampler2D uTexture;\n\n    void main () {\n        vec4 sum = texture2D(uTexture, vUv) * 0.29411764;\n        sum += texture2D(uTexture, vL) * 0.35294117;\n        sum += texture2D(uTexture, vR) * 0.35294117;\n        gl_FragColor = sum;\n    }\n"),
        L = b(p.FRAGMENT_SHADER, "\n    precision mediump float;\n    precision mediump sampler2D;\n\n    varying highp vec2 vUv;\n    uniform sampler2D uTexture;\n\n    void main () {\n        gl_FragColor = texture2D(uTexture, vUv);\n    }\n"),
        k = b(p.FRAGMENT_SHADER, "\n    precision mediump float;\n    precision mediump sampler2D;\n\n    varying highp vec2 vUv;\n    uniform sampler2D uTexture;\n    uniform float value;\n\n    void main () {\n        gl_FragColor = value * texture2D(uTexture, vUv);\n    }\n"),
        j = b(p.FRAGMENT_SHADER, "\n    precision mediump float;\n\n    uniform vec4 color;\n\n    void main () {\n        gl_FragColor = color;\n    }\n"),
        P = b(p.FRAGMENT_SHADER, "\n    precision highp float;\n    precision highp sampler2D;\n\n    varying vec2 vUv;\n    uniform sampler2D uTexture;\n    uniform float aspectRatio;\n\n    #define SCALE 25.0\n\n    void main () {\n        vec2 uv = floor(vUv * SCALE * vec2(aspectRatio, 1.0));\n        float v = mod(uv.x + uv.y, 2.0);\n        v = v * 0.1 + 0.8;\n        gl_FragColor = vec4(vec3(v), 1.0);\n    }\n"),
        F = b(p.FRAGMENT_SHADER, "\n    precision mediump float;\n    precision mediump sampler2D;\n\n    varying vec2 vUv;\n    uniform sampler2D uTexture;\n    uniform vec3 curve;\n    uniform float threshold;\n\n    void main () {\n        vec3 c = texture2D(uTexture, vUv).rgb;\n        float br = max(c.r, max(c.g, c.b));\n        float rq = clamp(br - curve.x, 0.0, curve.y);\n        rq = curve.z * rq * rq;\n        c *= max(rq, br - threshold) / max(br, 0.0001);\n        gl_FragColor = vec4(c, 0.0);\n    }\n"),
        U = b(p.FRAGMENT_SHADER, "\n    precision mediump float;\n    precision mediump sampler2D;\n\n    varying vec2 vL;\n    varying vec2 vR;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform sampler2D uTexture;\n\n    void main () {\n        vec4 sum = vec4(0.0);\n        sum += texture2D(uTexture, vL);\n        sum += texture2D(uTexture, vR);\n        sum += texture2D(uTexture, vT);\n        sum += texture2D(uTexture, vB);\n        sum *= 0.25;\n        gl_FragColor = sum;\n    }\n"),
        M = b(p.FRAGMENT_SHADER, "\n    precision mediump float;\n    precision mediump sampler2D;\n\n    varying vec2 vL;\n    varying vec2 vR;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform sampler2D uTexture;\n    uniform float intensity;\n\n    void main () {\n        vec4 sum = vec4(0.0);\n        sum += texture2D(uTexture, vL);\n        sum += texture2D(uTexture, vR);\n        sum += texture2D(uTexture, vT);\n        sum += texture2D(uTexture, vB);\n        sum *= 0.25;\n        gl_FragColor = sum * intensity;\n    }\n"),
        B = b(p.FRAGMENT_SHADER, "\n    precision highp float;\n    precision highp sampler2D;\n\n    varying vec2 vUv;\n    uniform sampler2D uTexture;\n\n    void main () {\n        vec4 c = texture2D(uTexture, vUv);\n        float br = max(c.r, max(c.g, c.b));\n        c.a = 1.0 - min(max(br * 20.0, 0.0), 0.8);\n        gl_FragColor = c;\n    }\n"),
        H = b(p.FRAGMENT_SHADER, "\n    precision highp float;\n    precision highp sampler2D;\n\n    varying vec2 vUv;\n    uniform sampler2D uTexture;\n    uniform float weight;\n\n    #define ITERATIONS 16\n\n    void main () {\n        float Density = 0.3;\n        float Decay = 0.95;\n        float Exposure = 0.7;\n\n        vec2 coord = vUv;\n        vec2 dir = vUv - 0.5;\n\n        dir *= 1.0 / float(ITERATIONS) * Density;\n        float illuminationDecay = 1.0;\n\n        float color = texture2D(uTexture, vUv).a;\n\n        for (int i = 0; i < ITERATIONS; i++)\n        {\n            coord -= dir;\n            float col = texture2D(uTexture, coord).a;\n            color += col * illuminationDecay * weight;\n            illuminationDecay *= Decay;\n        }\n\n        gl_FragColor = vec4(color * Exposure, 0.0, 0.0, 1.0);\n    }\n"),
        q = b(p.FRAGMENT_SHADER, "\n    precision highp float;\n    precision highp sampler2D;\n\n    varying vec2 vUv;\n    uniform sampler2D uTarget;\n    uniform float aspectRatio;\n    uniform vec3 color;\n    uniform vec2 point;\n    uniform float radius;\n\n    void main () {\n        vec2 p = vUv - point.xy;\n        p.x *= aspectRatio;\n        vec3 splat = exp(-dot(p, p) / radius) * color;\n        vec3 base = texture2D(uTarget, vUv).xyz;\n        gl_FragColor = vec4(base + splat, 1.0);\n    }\n"),
        W = b(p.FRAGMENT_SHADER, "\n    precision highp float;\n    precision highp sampler2D;\n\n    varying vec2 vUv;\n    uniform sampler2D uVelocity;\n    uniform sampler2D uSource;\n    uniform vec2 texelSize;\n    uniform vec2 dyeTexelSize;\n    uniform float dt;\n    uniform float dissipation;\n\n    vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {\n        vec2 st = uv / tsize - 0.5;\n\n        vec2 iuv = floor(st);\n        vec2 fuv = fract(st);\n\n        vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);\n        vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);\n        vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);\n        vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);\n\n        return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);\n    }\n\n    void main () {\n    #ifdef MANUAL_FILTERING\n        vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;\n        vec4 result = bilerp(uSource, coord, dyeTexelSize);\n    #else\n        vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;\n        vec4 result = texture2D(uSource, coord);\n    #endif\n        float decay = 1.0 + dissipation * dt;\n        gl_FragColor = result / decay;\n    }", d.supportLinearFiltering ? null : ["MANUAL_FILTERING"]),
        z = b(p.FRAGMENT_SHADER, "\n    precision mediump float;\n    precision mediump sampler2D;\n\n    varying highp vec2 vUv;\n    varying highp vec2 vL;\n    varying highp vec2 vR;\n    varying highp vec2 vT;\n    varying highp vec2 vB;\n    uniform sampler2D uVelocity;\n\n    void main () {\n        float L = texture2D(uVelocity, vL).x;\n        float R = texture2D(uVelocity, vR).x;\n        float T = texture2D(uVelocity, vT).y;\n        float B = texture2D(uVelocity, vB).y;\n\n        vec2 C = texture2D(uVelocity, vUv).xy;\n        if (vL.x < 0.0) { L = -C.x; }\n        if (vR.x > 1.0) { R = -C.x; }\n        if (vT.y > 1.0) { T = -C.y; }\n        if (vB.y < 0.0) { B = -C.y; }\n\n        float div = 0.5 * (R - L + T - B);\n        gl_FragColor = vec4(div, 0.0, 0.0, 1.0);\n    }\n"),
        X = b(p.FRAGMENT_SHADER, "\n    precision mediump float;\n    precision mediump sampler2D;\n\n    varying highp vec2 vUv;\n    varying highp vec2 vL;\n    varying highp vec2 vR;\n    varying highp vec2 vT;\n    varying highp vec2 vB;\n    uniform sampler2D uVelocity;\n\n    void main () {\n        float L = texture2D(uVelocity, vL).y;\n        float R = texture2D(uVelocity, vR).y;\n        float T = texture2D(uVelocity, vT).x;\n        float B = texture2D(uVelocity, vB).x;\n        float vorticity = R - L - T + B;\n        gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);\n    }\n"),
        Y = b(p.FRAGMENT_SHADER, "\n    precision highp float;\n    precision highp sampler2D;\n\n    varying vec2 vUv;\n    varying vec2 vL;\n    varying vec2 vR;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform sampler2D uVelocity;\n    uniform sampler2D uCurl;\n    uniform float curl;\n    uniform float dt;\n\n    void main () {\n        float L = texture2D(uCurl, vL).x;\n        float R = texture2D(uCurl, vR).x;\n        float T = texture2D(uCurl, vT).x;\n        float B = texture2D(uCurl, vB).x;\n        float C = texture2D(uCurl, vUv).x;\n\n        vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));\n        force /= length(force) + 0.0001;\n        force *= curl * C;\n        force.y *= -1.0;\n\n        vec2 vel = texture2D(uVelocity, vUv).xy;\n        gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);\n    }\n"),
        V = b(p.FRAGMENT_SHADER, "\n    precision mediump float;\n    precision mediump sampler2D;\n\n    varying highp vec2 vUv;\n    varying highp vec2 vL;\n    varying highp vec2 vR;\n    varying highp vec2 vT;\n    varying highp vec2 vB;\n    uniform sampler2D uPressure;\n    uniform sampler2D uDivergence;\n\n    void main () {\n        float L = texture2D(uPressure, vL).x;\n        float R = texture2D(uPressure, vR).x;\n        float T = texture2D(uPressure, vT).x;\n        float B = texture2D(uPressure, vB).x;\n        float C = texture2D(uPressure, vUv).x;\n        float divergence = texture2D(uDivergence, vUv).x;\n        float pressure = (L + R + B + T - divergence) * 0.25;\n        gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);\n    }\n"),
        G = b(p.FRAGMENT_SHADER, "\n    precision mediump float;\n    precision mediump sampler2D;\n\n    varying highp vec2 vUv;\n    varying highp vec2 vL;\n    varying highp vec2 vR;\n    varying highp vec2 vT;\n    varying highp vec2 vB;\n    uniform sampler2D uPressure;\n    uniform sampler2D uVelocity;\n\n    void main () {\n        float L = texture2D(uPressure, vL).x;\n        float R = texture2D(uPressure, vR).x;\n        float T = texture2D(uPressure, vT).x;\n        float B = texture2D(uPressure, vB).x;\n        vec2 velocity = texture2D(uVelocity, vUv).xy;\n        velocity.xy -= vec2(R - L, T - B);\n        gl_FragColor = vec4(velocity, 0.0, 1.0);\n    }\n"),
        $ = (p.bindBuffer(p.ARRAY_BUFFER, p.createBuffer()), p.bufferData(p.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), p.STATIC_DRAW), p.bindBuffer(p.ELEMENT_ARRAY_BUFFER, p.createBuffer()), p.bufferData(p.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), p.STATIC_DRAW), p.vertexAttribPointer(0, 2, p.FLOAT, !1, 0, 0), p.enableVertexAttribArray(0), function (e) {
            p.bindFramebuffer(p.FRAMEBUFFER, e), p.drawElements(p.TRIANGLES, 6, p.UNSIGNED_SHORT, 0)
        }), K = function (e) {
            var t = p.createTexture();
            p.bindTexture(p.TEXTURE_2D, t), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MIN_FILTER, p.LINEAR), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MAG_FILTER, p.LINEAR), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_S, p.REPEAT), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_T, p.REPEAT), p.texImage2D(p.TEXTURE_2D, 0, p.RGB, 1, 1, 0, p.RGB, p.UNSIGNED_BYTE, new Uint8Array([255, 255, 255]));
            var n = {
                texture: t, width: 1, height: 1, attach: function (e) {
                    return p.activeTexture(p.TEXTURE0 + e), p.bindTexture(p.TEXTURE_2D, t), e
                }
            }, r = new Image;
            return r.onload = function () {
                n.width = r.width, n.height = r.height, p.bindTexture(p.TEXTURE_2D, t), p.texImage2D(p.TEXTURE_2D, 0, p.RGB, p.RGB, p.UNSIGNED_BYTE, r)
            }, r.src = e, n
        }("LDR_LLL1_0.png"), Q = new m(R, I), J = new m(O, L), Z = new m(O, k), ee = new m(O, j),
        te = (new m(O, P), new m(O, F)), ne = new m(O, U), re = new m(O, M), ie = new m(O, B), oe = new m(O, H),
        ae = new m(O, q), ue = new m(O, W), se = new m(O, z), le = new m(O, X), ce = new m(O, Y), fe = new m(O, V),
        he = new m(O, G),
        pe = new g(O, "\n    precision highp float;\n    precision highp sampler2D;\n\n    varying vec2 vUv;\n    varying vec2 vL;\n    varying vec2 vR;\n    varying vec2 vT;\n    varying vec2 vB;\n    uniform sampler2D uTexture;\n    uniform sampler2D uBloom;\n    uniform sampler2D uSunrays;\n    uniform sampler2D uDithering;\n    uniform vec2 ditherScale;\n    uniform vec2 texelSize;\n\n    vec3 linearToGamma (vec3 color) {\n        color = max(color, vec3(0));\n        return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));\n    }\n\n    void main () {\n        vec3 c = texture2D(uTexture, vUv).rgb;\n\n    #ifdef SHADING\n        vec3 lc = texture2D(uTexture, vL).rgb;\n        vec3 rc = texture2D(uTexture, vR).rgb;\n        vec3 tc = texture2D(uTexture, vT).rgb;\n        vec3 bc = texture2D(uTexture, vB).rgb;\n\n        float dx = length(rc) - length(lc);\n        float dy = length(tc) - length(bc);\n\n        vec3 n = normalize(vec3(dx, dy, length(texelSize)));\n        vec3 l = vec3(0.0, 0.0, 1.0);\n\n        float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);\n        c *= diffuse;\n    #endif\n\n    #ifdef BLOOM\n        vec3 bloom = texture2D(uBloom, vUv).rgb;\n    #endif\n\n    #ifdef SUNRAYS\n        float sunrays = texture2D(uSunrays, vUv).r;\n        c *= sunrays;\n    #ifdef BLOOM\n        bloom *= sunrays;\n    #endif\n    #endif\n\n    #ifdef BLOOM\n        float noise = texture2D(uDithering, vUv * ditherScale).r;\n        noise = noise * 2.0 - 1.0;\n        bloom += noise / 255.0;\n        bloom = linearToGamma(bloom);\n        c += bloom;\n    #endif\n\n        float a = max(c.r, max(c.g, c.b));\n        gl_FragColor = vec4(c, a);\n    }\n");

    function de() {
        var e = Ce(u.SIM_RESOLUTION), t = Ce(u.DYE_RESOLUTION), n = d.halfFloatTexType, r = d.formatRGBA,
            i = d.formatRG, o = d.formatR, a = d.supportLinearFiltering ? p.LINEAR : p.NEAREST;
        E = null == E ? ge(t.width, t.height, r.internalFormat, r.format, n, a) : me(E, t.width, t.height, r.internalFormat, r.format, n, a), w = null == w ? ge(e.width, e.height, i.internalFormat, i.format, n, a) : me(w, e.width, e.height, i.internalFormat, i.format, n, a), T = ve(e.width, e.height, o.internalFormat, o.format, n, p.NEAREST), x = ve(e.width, e.height, o.internalFormat, o.format, n, p.NEAREST), S = ge(e.width, e.height, o.internalFormat, o.format, n, p.NEAREST), function () {
            var e = Ce(u.BLOOM_RESOLUTION), t = d.halfFloatTexType, n = d.formatRGBA,
                r = d.supportLinearFiltering ? p.LINEAR : p.NEAREST;
            A = ve(e.width, e.height, n.internalFormat, n.format, t, r), f.length = 0;
            for (var i = 0; i < u.BLOOM_ITERATIONS; i++) {
                var o = e.width >> i + 1, a = e.height >> i + 1;
                if (o < 2 || a < 2) break;
                var s = ve(o, a, n.internalFormat, n.format, t, r);
                f.push(s)
            }
        }(), function () {
            var e = Ce(u.SUNRAYS_RESOLUTION), t = d.halfFloatTexType, n = d.formatR,
                r = d.supportLinearFiltering ? p.LINEAR : p.NEAREST;
            D = ve(e.width, e.height, n.internalFormat, n.format, t, r), C = ve(e.width, e.height, n.internalFormat, n.format, t, r)
        }()
    }

    function ve(e, t, n, r, i, o) {
        p.activeTexture(p.TEXTURE0);
        var a = p.createTexture();
        p.bindTexture(p.TEXTURE_2D, a), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MIN_FILTER, o), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MAG_FILTER, o), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_S, p.CLAMP_TO_EDGE), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_T, p.CLAMP_TO_EDGE), p.texImage2D(p.TEXTURE_2D, 0, n, e, t, 0, r, i, null);
        var u = p.createFramebuffer();
        return p.bindFramebuffer(p.FRAMEBUFFER, u), p.framebufferTexture2D(p.FRAMEBUFFER, p.COLOR_ATTACHMENT0, p.TEXTURE_2D, a, 0), p.viewport(0, 0, e, t), p.clear(p.COLOR_BUFFER_BIT), {
            texture: a,
            fbo: u,
            width: e,
            height: t,
            texelSizeX: 1 / e,
            texelSizeY: 1 / t,
            attach: function (e) {
                return p.activeTexture(p.TEXTURE0 + e), p.bindTexture(p.TEXTURE_2D, a), e
            }
        }
    }

    function ge(e, t, n, r, i, o) {
        var a = ve(e, t, n, r, i, o), u = ve(e, t, n, r, i, o);
        return {
            width: e, height: t, texelSizeX: a.texelSizeX, texelSizeY: a.texelSizeY, get read() {
                return a
            }, set read(e) {
                a = e
            }, get write() {
                return u
            }, set write(e) {
                u = e
            }, swap: function () {
                var e = a;
                a = u, u = e
            }
        }
    }

    function me(e, t, n, r, i, o, a) {
        return e.width == t && e.height == n ? e : (e.read = function (e, t, n, r, i, o, a) {
            var u = ve(t, n, r, i, o, a);
            return J.bind(), p.uniform1i(J.uniforms.uTexture, e.attach(0)), $(u.fbo), u
        }(e.read, t, n, r, i, o, a), e.write = ve(t, n, r, i, o, a), e.width = t, e.height = n, e.texelSizeX = 1 / t, e.texelSizeY = 1 / n, e)
    }

    N = [], u.SHADING && N.push("SHADING"), u.BLOOM && N.push("BLOOM"), u.SUNRAYS && N.push("SUNRAYS"), pe.setKeywords(N), de(), we(5);
    var ye = Date.now(), _e = 0;

    function be() {
        var e = Ne(a.clientWidth), t = Ne(a.clientHeight);
        return (a.width != e || a.height != t) && (a.width = e, a.height = t, !0)
    }

    function Ee(e) {
        var t, n, r;
        u.BLOOM && function (e, t) {
            if (f.length < 2) return;
            var n = t;
            p.disable(p.BLEND), te.bind();
            var r = u.BLOOM_THRESHOLD * u.BLOOM_SOFT_KNEE + 1e-4, i = u.BLOOM_THRESHOLD - r, o = 2 * r, a = .25 / r;
            p.uniform3f(te.uniforms.curve, i, o, a), p.uniform1f(te.uniforms.threshold, u.BLOOM_THRESHOLD), p.uniform1i(te.uniforms.uTexture, e.attach(0)), p.viewport(0, 0, n.width, n.height), $(n.fbo), ne.bind();
            for (var s = 0; s < f.length; s++) {
                var l = f[s];
                p.uniform2f(ne.uniforms.texelSize, n.texelSizeX, n.texelSizeY), p.uniform1i(ne.uniforms.uTexture, n.attach(0)), p.viewport(0, 0, l.width, l.height), $(l.fbo), n = l
            }
            p.blendFunc(p.ONE, p.ONE), p.enable(p.BLEND);
            for (var c = f.length - 2; c >= 0; c--) {
                var h = f[c];
                p.uniform2f(ne.uniforms.texelSize, n.texelSizeX, n.texelSizeY), p.uniform1i(ne.uniforms.uTexture, n.attach(0)), p.viewport(0, 0, h.width, h.height), $(h.fbo), n = h
            }
            p.disable(p.BLEND), re.bind(), p.uniform2f(re.uniforms.texelSize, n.texelSizeX, n.texelSizeY), p.uniform1i(re.uniforms.uTexture, n.attach(0)), p.uniform1f(re.uniforms.intensity, u.BLOOM_INTENSITY), p.viewport(0, 0, t.width, t.height), $(t.fbo)
        }(E.read, A), u.SUNRAYS && (t = E.read, n = E.write, r = D, p.disable(p.BLEND), ie.bind(), p.uniform1i(ie.uniforms.uTexture, t.attach(0)), p.viewport(0, 0, n.width, n.height), $(n.fbo), oe.bind(), p.uniform1f(oe.uniforms.weight, u.SUNRAYS_WEIGHT), p.uniform1i(oe.uniforms.uTexture, n.attach(0)), p.viewport(0, 0, r.width, r.height), $(r.fbo), function (e, t, n) {
            Q.bind();
            for (var r = 0; r < n; r++) p.uniform2f(Q.uniforms.texelSize, e.texelSizeX, 0), p.uniform1i(Q.uniforms.uTexture, e.attach(0)), $(t.fbo), p.uniform2f(Q.uniforms.texelSize, 0, e.texelSizeY), p.uniform1i(Q.uniforms.uTexture, t.attach(0)), $(e.fbo)
        }(D, C, 1)), null != e && u.TRANSPARENT ? p.disable(p.BLEND) : (p.blendFunc(p.ONE, p.ONE_MINUS_SRC_ALPHA), p.enable(p.BLEND));
        var i = null == e ? p.drawingBufferWidth : e.width, o = null == e ? p.drawingBufferHeight : e.height;
        p.viewport(0, 0, i, o);
        var a, s = null == e ? null : e.fbo;
        u.TRANSPARENT || function (e, t) {
            ee.bind(), p.uniform4f(ee.uniforms.color, t.r, t.g, t.b, 1), $(e)
        }(s, {
            r: (a = u.BACK_COLOR).r / 255,
            g: a.g / 255,
            b: a.b / 255
        }), null == e && u.TRANSPARENT && function (e, t, n) {
            pe.bind(), u.SHADING && p.uniform2f(pe.uniforms.texelSize, 1 / t, 1 / n);
            if (p.uniform1i(pe.uniforms.uTexture, E.read.attach(0)), u.BLOOM) {
                p.uniform1i(pe.uniforms.uBloom, A.attach(1)), p.uniform1i(pe.uniforms.uDithering, K.attach(2));
                var r = function (e, t, n) {
                    return {x: t / e.width, y: n / e.height}
                }(K, t, n);
                p.uniform2f(pe.uniforms.ditherScale, r.x, r.y)
            }
            u.SUNRAYS && p.uniform1i(pe.uniforms.uSunrays, D.attach(3));
            $(e)
        }(s, i, o)
    }

    function we(e) {
        for (var t = 0; t < e; t++) {
            var n = De();
            n.r *= 10, n.g *= 10, n.b *= 10, Te(Math.random(), Math.random(), 1e3 * (Math.random() - .5), 1e3 * (Math.random() - .5), n)
        }
    }

    function Te(e, t, n, r, i) {
        p.viewport(0, 0, w.width, w.height), ae.bind(), p.uniform1i(ae.uniforms.uTarget, w.read.attach(0)), p.uniform1f(ae.uniforms.aspectRatio, a.width / a.height), p.uniform2f(ae.uniforms.point, e, t), p.uniform3f(ae.uniforms.color, n, r, 0), p.uniform1f(ae.uniforms.radius, function (e) {
            var t = a.width / a.height;
            t > 1 && (e *= t);
            return e
        }(u.SPLAT_RADIUS / 100)), $(w.write.fbo), w.swap(), p.viewport(0, 0, E.width, E.height), p.uniform1i(ae.uniforms.uTarget, E.read.attach(0)), p.uniform3f(ae.uniforms.color, i.r, i.g, i.b), $(E.write.fbo), E.swap()
    }

    function xe(e, t, n, r) {
        e.id = t, e.down = !0, e.moved = !1, e.texcoordX = n / a.width, e.texcoordY = 1 - r / a.height, e.prevTexcoordX = e.texcoordX, e.prevTexcoordY = e.texcoordY, e.deltaX = 0, e.deltaY = 0, e.color = De()
    }

    function Se(e, t, n) {
        e.moved = e.down, e.prevTexcoordX = e.texcoordX, e.prevTexcoordY = e.texcoordY, e.texcoordX = t / a.width, e.texcoordY = 1 - n / a.height, e.deltaX = function (e) {
            var t = a.width / a.height;
            t < 1 && (e *= t);
            return e
        }(e.texcoordX - e.prevTexcoordX), e.deltaY = function (e) {
            var t = a.width / a.height;
            t > 1 && (e /= t);
            return e
        }(e.texcoordY - e.prevTexcoordY)
    }

    function Ae(e) {
        e.down = !1
    }

    function De() {
        var e = function (e, t, n) {
            var r, i, o, a, u, s, l, c;
            switch (a = Math.floor(6 * e), s = n * (1 - t), l = n * (1 - (u = 6 * e - a) * t), c = n * (1 - (1 - u) * t), a % 6) {
                case 0:
                    r = n, i = c, o = s;
                    break;
                case 1:
                    r = l, i = n, o = s;
                    break;
                case 2:
                    r = s, i = n, o = c;
                    break;
                case 3:
                    r = s, i = l, o = n;
                    break;
                case 4:
                    r = c, i = s, o = n;
                    break;
                case 5:
                    r = n, i = s, o = l
            }
            return {r: r, g: i, b: o}
        }(Math.random(), 1, 1);
        return e.r *= .15, e.g *= .15, e.b *= .15, e
    }

    function Ce(e) {
        var t = p.drawingBufferWidth / p.drawingBufferHeight;
        t < 1 && (t = 1 / t);
        var n = Math.round(e), r = Math.round(e * t);
        return p.drawingBufferWidth > p.drawingBufferHeight ? {width: r, height: n} : {width: n, height: r}
    }

    function Ne(e) {
        var t = window.devicePixelRatio || 1;
        return Math.floor(e * t)
    }

    function Oe(e) {
        if (0 == e.length) return 0;
        for (var t = 0, n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n), t |= 0;
        return t
    }

    !function e() {
        var t = function () {
            var e = Date.now(), t = (e - ye) / 1e3;
            return t = Math.min(t, .016666), ye = e, t
        }();
        be() && de();
        !function (e) {
            if (!u.COLORFUL) return;
            (_e += e * u.COLOR_UPDATE_SPEED) >= 1 && (t = _e, _e = 0 == (r = 1 - (n = 0)) ? n : (t - n) % r + n, l.forEach(function (e) {
                e.color = De()
            }));
            var t, n, r
        }(t);
        !function () {
            c.length > 0 && we(c.pop());
            l.forEach(function (e) {
                var t, n, r;
                e.moved && (e.moved = !1, n = (t = e).deltaX * u.SPLAT_FORCE, r = t.deltaY * u.SPLAT_FORCE, Te(t.texcoordX, t.texcoordY, n, r, t.color))
            })
        }();
        u.PAUSED || function (e) {
            p.disable(p.BLEND), p.viewport(0, 0, w.width, w.height), le.bind(), p.uniform2f(le.uniforms.texelSize, w.texelSizeX, w.texelSizeY), p.uniform1i(le.uniforms.uVelocity, w.read.attach(0)), $(x.fbo), ce.bind(), p.uniform2f(ce.uniforms.texelSize, w.texelSizeX, w.texelSizeY), p.uniform1i(ce.uniforms.uVelocity, w.read.attach(0)), p.uniform1i(ce.uniforms.uCurl, x.attach(1)), p.uniform1f(ce.uniforms.curl, u.CURL), p.uniform1f(ce.uniforms.dt, e), $(w.write.fbo), w.swap(), se.bind(), p.uniform2f(se.uniforms.texelSize, w.texelSizeX, w.texelSizeY), p.uniform1i(se.uniforms.uVelocity, w.read.attach(0)), $(T.fbo), Z.bind(), p.uniform1i(Z.uniforms.uTexture, S.read.attach(0)), p.uniform1f(Z.uniforms.value, u.PRESSURE), $(S.write.fbo), S.swap(), fe.bind(), p.uniform2f(fe.uniforms.texelSize, w.texelSizeX, w.texelSizeY), p.uniform1i(fe.uniforms.uDivergence, T.attach(0));
            for (var t = 0; t < u.PRESSURE_ITERATIONS; t++) p.uniform1i(fe.uniforms.uPressure, S.read.attach(1)), $(S.write.fbo), S.swap();
            he.bind(), p.uniform2f(he.uniforms.texelSize, w.texelSizeX, w.texelSizeY), p.uniform1i(he.uniforms.uPressure, S.read.attach(0)), p.uniform1i(he.uniforms.uVelocity, w.read.attach(1)), $(w.write.fbo), w.swap(), ue.bind(), p.uniform2f(ue.uniforms.texelSize, w.texelSizeX, w.texelSizeY), d.supportLinearFiltering || p.uniform2f(ue.uniforms.dyeTexelSize, w.texelSizeX, w.texelSizeY);
            var n = w.read.attach(0);
            p.uniform1i(ue.uniforms.uVelocity, n), p.uniform1i(ue.uniforms.uSource, n), p.uniform1f(ue.uniforms.dt, e), p.uniform1f(ue.uniforms.dissipation, u.VELOCITY_DISSIPATION), $(w.write.fbo), w.swap(), p.viewport(0, 0, E.width, E.height), d.supportLinearFiltering || p.uniform2f(ue.uniforms.dyeTexelSize, E.texelSizeX, E.texelSizeY);
            p.uniform1i(ue.uniforms.uVelocity, w.read.attach(0)), p.uniform1i(ue.uniforms.uSource, E.read.attach(1)), p.uniform1f(ue.uniforms.dissipation, u.DENSITY_DISSIPATION), $(E.write.fbo), E.swap()
        }(t);
        Ee(null);
        requestAnimationFrame(e)
    }(), a.addEventListener("mousedown", function (e) {
        var t = Ne(e.offsetX), n = Ne(e.offsetY), r = l.find(function (e) {
            return -1 == e.id
        });
        null == r && (r = new s), xe(r, -1, t, n)
    }), a.addEventListener("mousemove", function (e) {
        var t = Ne(e.offsetX), n = Ne(e.offsetY);
        Se(l[0], t, n)
    }), window.addEventListener("mouseup", function () {
        Ae(l[0])
    }), a.addEventListener("touchstart", function (e) {
        e.preventDefault();
        for (var t = e.targetTouches; t.length >= l.length;) l.push(new s);
        for (var n = 0; n < t.length; n++) {
            var r = Ne(t[n].pageX), i = Ne(t[n].pageY);
            xe(l[n + 1], t[n].identifier, r, i)
        }
    }), a.addEventListener("touchmove", function (e) {
        e.preventDefault();
        for (var t = e.targetTouches, n = 0; n < t.length; n++) {
            var r = Ne(t[n].pageX), i = Ne(t[n].pageY);
            Se(l[n + 1], r, i)
        }
    }, !1), window.addEventListener("touchend", function (e) {
        for (var t = e.changedTouches, n = function (e) {
            Ae(l.find(function (n) {
                return n.id == t[e].identifier
            }))
        }, r = 0; r < t.length; r++) n(r)
    }), window.addEventListener("keydown", function (e) {
        "KeyP" === e.code && (u.PAUSED = !u.PAUSED), " " === e.key && c.push(parseInt(20 * Math.random()) + 5)
    })
}, function (e, t, n) {
    window._ = n(15);
    try {
        window.Popper = n(2).default, window.$ = window.jQuery = n(3), n(17)
    } catch (e) {
    }
    window.axios = n(18), window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest"
}, function (e, t, n) {
    (function (e, r) {
        var i;
        (function () {
            var o, a = 200, u = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
                s = "Expected a function", l = "__lodash_hash_undefined__", c = 500, f = "__lodash_placeholder__",
                h = 1, p = 2, d = 4, v = 1, g = 2, m = 1, y = 2, _ = 4, b = 8, E = 16, w = 32, T = 64, x = 128, S = 256,
                A = 512, D = 30, C = "...", N = 800, O = 16, R = 1, I = 2, L = 1 / 0, k = 9007199254740991,
                j = 17976931348623157e292, P = NaN, F = 4294967295, U = F - 1, M = F >>> 1,
                B = [["ary", x], ["bind", m], ["bindKey", y], ["curry", b], ["curryRight", E], ["flip", A], ["partial", w], ["partialRight", T], ["rearg", S]],
                H = "[object Arguments]", q = "[object Array]", W = "[object AsyncFunction]", z = "[object Boolean]",
                X = "[object Date]", Y = "[object DOMException]", V = "[object Error]", G = "[object Function]",
                $ = "[object GeneratorFunction]", K = "[object Map]", Q = "[object Number]", J = "[object Null]",
                Z = "[object Object]", ee = "[object Proxy]", te = "[object RegExp]", ne = "[object Set]",
                re = "[object String]", ie = "[object Symbol]", oe = "[object Undefined]", ae = "[object WeakMap]",
                ue = "[object WeakSet]", se = "[object ArrayBuffer]", le = "[object DataView]",
                ce = "[object Float32Array]", fe = "[object Float64Array]", he = "[object Int8Array]",
                pe = "[object Int16Array]", de = "[object Int32Array]", ve = "[object Uint8Array]",
                ge = "[object Uint8ClampedArray]", me = "[object Uint16Array]", ye = "[object Uint32Array]",
                _e = /\b__p \+= '';/g, be = /\b(__p \+=) '' \+/g, Ee = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                we = /&(?:amp|lt|gt|quot|#39);/g, Te = /[&<>"']/g, xe = RegExp(we.source), Se = RegExp(Te.source),
                Ae = /<%-([\s\S]+?)%>/g, De = /<%([\s\S]+?)%>/g, Ce = /<%=([\s\S]+?)%>/g,
                Ne = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Oe = /^\w*$/,
                Re = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                Ie = /[\\^$.*+?()[\]{}|]/g, Le = RegExp(Ie.source), ke = /^\s+|\s+$/g, je = /^\s+/, Pe = /\s+$/,
                Fe = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Ue = /\{\n\/\* \[wrapped with (.+)\] \*/,
                Me = /,? & /, Be = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, He = /\\(\\)?/g,
                qe = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, We = /\w*$/, ze = /^[-+]0x[0-9a-f]+$/i, Xe = /^0b[01]+$/i,
                Ye = /^\[object .+?Constructor\]$/, Ve = /^0o[0-7]+$/i, Ge = /^(?:0|[1-9]\d*)$/,
                $e = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ke = /($^)/, Qe = /['\n\r\u2028\u2029\\]/g,
                Je = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
                Ze = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                et = "[\\ud800-\\udfff]", tt = "[" + Ze + "]", nt = "[" + Je + "]", rt = "\\d+",
                it = "[\\u2700-\\u27bf]", ot = "[a-z\\xdf-\\xf6\\xf8-\\xff]",
                at = "[^\\ud800-\\udfff" + Ze + rt + "\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",
                ut = "\\ud83c[\\udffb-\\udfff]", st = "[^\\ud800-\\udfff]", lt = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                ct = "[\\ud800-\\udbff][\\udc00-\\udfff]", ft = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
                ht = "(?:" + ot + "|" + at + ")", pt = "(?:" + ft + "|" + at + ")",
                dt = "(?:" + nt + "|" + ut + ")" + "?",
                vt = "[\\ufe0e\\ufe0f]?" + dt + ("(?:\\u200d(?:" + [st, lt, ct].join("|") + ")[\\ufe0e\\ufe0f]?" + dt + ")*"),
                gt = "(?:" + [it, lt, ct].join("|") + ")" + vt,
                mt = "(?:" + [st + nt + "?", nt, lt, ct, et].join("|") + ")", yt = RegExp("['’]", "g"),
                _t = RegExp(nt, "g"), bt = RegExp(ut + "(?=" + ut + ")|" + mt + vt, "g"),
                Et = RegExp([ft + "?" + ot + "+(?:['’](?:d|ll|m|re|s|t|ve))?(?=" + [tt, ft, "$"].join("|") + ")", pt + "+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=" + [tt, ft + ht, "$"].join("|") + ")", ft + "?" + ht + "+(?:['’](?:d|ll|m|re|s|t|ve))?", ft + "+(?:['’](?:D|LL|M|RE|S|T|VE))?", "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rt, gt].join("|"), "g"),
                wt = RegExp("[\\u200d\\ud800-\\udfff" + Je + "\\ufe0e\\ufe0f]"),
                Tt = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                xt = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                St = -1, At = {};
            At[ce] = At[fe] = At[he] = At[pe] = At[de] = At[ve] = At[ge] = At[me] = At[ye] = !0, At[H] = At[q] = At[se] = At[z] = At[le] = At[X] = At[V] = At[G] = At[K] = At[Q] = At[Z] = At[te] = At[ne] = At[re] = At[ae] = !1;
            var Dt = {};
            Dt[H] = Dt[q] = Dt[se] = Dt[le] = Dt[z] = Dt[X] = Dt[ce] = Dt[fe] = Dt[he] = Dt[pe] = Dt[de] = Dt[K] = Dt[Q] = Dt[Z] = Dt[te] = Dt[ne] = Dt[re] = Dt[ie] = Dt[ve] = Dt[ge] = Dt[me] = Dt[ye] = !0, Dt[V] = Dt[G] = Dt[ae] = !1;
            var Ct = {"\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029"},
                Nt = parseFloat, Ot = parseInt, Rt = "object" == typeof e && e && e.Object === Object && e,
                It = "object" == typeof self && self && self.Object === Object && self,
                Lt = Rt || It || Function("return this")(), kt = t && !t.nodeType && t,
                jt = kt && "object" == typeof r && r && !r.nodeType && r, Pt = jt && jt.exports === kt,
                Ft = Pt && Rt.process, Ut = function () {
                    try {
                        var e = jt && jt.require && jt.require("util").types;
                        return e || Ft && Ft.binding && Ft.binding("util")
                    } catch (e) {
                    }
                }(), Mt = Ut && Ut.isArrayBuffer, Bt = Ut && Ut.isDate, Ht = Ut && Ut.isMap, qt = Ut && Ut.isRegExp,
                Wt = Ut && Ut.isSet, zt = Ut && Ut.isTypedArray;

            function Xt(e, t, n) {
                switch (n.length) {
                    case 0:
                        return e.call(t);
                    case 1:
                        return e.call(t, n[0]);
                    case 2:
                        return e.call(t, n[0], n[1]);
                    case 3:
                        return e.call(t, n[0], n[1], n[2])
                }
                return e.apply(t, n)
            }

            function Yt(e, t, n, r) {
                for (var i = -1, o = null == e ? 0 : e.length; ++i < o;) {
                    var a = e[i];
                    t(r, a, n(a), e)
                }
                return r
            }

            function Vt(e, t) {
                for (var n = -1, r = null == e ? 0 : e.length; ++n < r && !1 !== t(e[n], n, e);) ;
                return e
            }

            function Gt(e, t) {
                for (var n = null == e ? 0 : e.length; n-- && !1 !== t(e[n], n, e);) ;
                return e
            }

            function $t(e, t) {
                for (var n = -1, r = null == e ? 0 : e.length; ++n < r;) if (!t(e[n], n, e)) return !1;
                return !0
            }

            function Kt(e, t) {
                for (var n = -1, r = null == e ? 0 : e.length, i = 0, o = []; ++n < r;) {
                    var a = e[n];
                    t(a, n, e) && (o[i++] = a)
                }
                return o
            }

            function Qt(e, t) {
                return !!(null == e ? 0 : e.length) && sn(e, t, 0) > -1
            }

            function Jt(e, t, n) {
                for (var r = -1, i = null == e ? 0 : e.length; ++r < i;) if (n(t, e[r])) return !0;
                return !1
            }

            function Zt(e, t) {
                for (var n = -1, r = null == e ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
                return i
            }

            function en(e, t) {
                for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
                return e
            }

            function tn(e, t, n, r) {
                var i = -1, o = null == e ? 0 : e.length;
                for (r && o && (n = e[++i]); ++i < o;) n = t(n, e[i], i, e);
                return n
            }

            function nn(e, t, n, r) {
                var i = null == e ? 0 : e.length;
                for (r && i && (n = e[--i]); i--;) n = t(n, e[i], i, e);
                return n
            }

            function rn(e, t) {
                for (var n = -1, r = null == e ? 0 : e.length; ++n < r;) if (t(e[n], n, e)) return !0;
                return !1
            }

            var on = hn("length");

            function an(e, t, n) {
                var r;
                return n(e, function (e, n, i) {
                    if (t(e, n, i)) return r = n, !1
                }), r
            }

            function un(e, t, n, r) {
                for (var i = e.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;) if (t(e[o], o, e)) return o;
                return -1
            }

            function sn(e, t, n) {
                return t == t ? function (e, t, n) {
                    var r = n - 1, i = e.length;
                    for (; ++r < i;) if (e[r] === t) return r;
                    return -1
                }(e, t, n) : un(e, cn, n)
            }

            function ln(e, t, n, r) {
                for (var i = n - 1, o = e.length; ++i < o;) if (r(e[i], t)) return i;
                return -1
            }

            function cn(e) {
                return e != e
            }

            function fn(e, t) {
                var n = null == e ? 0 : e.length;
                return n ? vn(e, t) / n : P
            }

            function hn(e) {
                return function (t) {
                    return null == t ? o : t[e]
                }
            }

            function pn(e) {
                return function (t) {
                    return null == e ? o : e[t]
                }
            }

            function dn(e, t, n, r, i) {
                return i(e, function (e, i, o) {
                    n = r ? (r = !1, e) : t(n, e, i, o)
                }), n
            }

            function vn(e, t) {
                for (var n, r = -1, i = e.length; ++r < i;) {
                    var a = t(e[r]);
                    a !== o && (n = n === o ? a : n + a)
                }
                return n
            }

            function gn(e, t) {
                for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
                return r
            }

            function mn(e) {
                return function (t) {
                    return e(t)
                }
            }

            function yn(e, t) {
                return Zt(t, function (t) {
                    return e[t]
                })
            }

            function _n(e, t) {
                return e.has(t)
            }

            function bn(e, t) {
                for (var n = -1, r = e.length; ++n < r && sn(t, e[n], 0) > -1;) ;
                return n
            }

            function En(e, t) {
                for (var n = e.length; n-- && sn(t, e[n], 0) > -1;) ;
                return n
            }

            var wn = pn({
                "À": "A",
                "Á": "A",
                "Â": "A",
                "Ã": "A",
                "Ä": "A",
                "Å": "A",
                "à": "a",
                "á": "a",
                "â": "a",
                "ã": "a",
                "ä": "a",
                "å": "a",
                "Ç": "C",
                "ç": "c",
                "Ð": "D",
                "ð": "d",
                "È": "E",
                "É": "E",
                "Ê": "E",
                "Ë": "E",
                "è": "e",
                "é": "e",
                "ê": "e",
                "ë": "e",
                "Ì": "I",
                "Í": "I",
                "Î": "I",
                "Ï": "I",
                "ì": "i",
                "í": "i",
                "î": "i",
                "ï": "i",
                "Ñ": "N",
                "ñ": "n",
                "Ò": "O",
                "Ó": "O",
                "Ô": "O",
                "Õ": "O",
                "Ö": "O",
                "Ø": "O",
                "ò": "o",
                "ó": "o",
                "ô": "o",
                "õ": "o",
                "ö": "o",
                "ø": "o",
                "Ù": "U",
                "Ú": "U",
                "Û": "U",
                "Ü": "U",
                "ù": "u",
                "ú": "u",
                "û": "u",
                "ü": "u",
                "Ý": "Y",
                "ý": "y",
                "ÿ": "y",
                "Æ": "Ae",
                "æ": "ae",
                "Þ": "Th",
                "þ": "th",
                "ß": "ss",
                "Ā": "A",
                "Ă": "A",
                "Ą": "A",
                "ā": "a",
                "ă": "a",
                "ą": "a",
                "Ć": "C",
                "Ĉ": "C",
                "Ċ": "C",
                "Č": "C",
                "ć": "c",
                "ĉ": "c",
                "ċ": "c",
                "č": "c",
                "Ď": "D",
                "Đ": "D",
                "ď": "d",
                "đ": "d",
                "Ē": "E",
                "Ĕ": "E",
                "Ė": "E",
                "Ę": "E",
                "Ě": "E",
                "ē": "e",
                "ĕ": "e",
                "ė": "e",
                "ę": "e",
                "ě": "e",
                "Ĝ": "G",
                "Ğ": "G",
                "Ġ": "G",
                "Ģ": "G",
                "ĝ": "g",
                "ğ": "g",
                "ġ": "g",
                "ģ": "g",
                "Ĥ": "H",
                "Ħ": "H",
                "ĥ": "h",
                "ħ": "h",
                "Ĩ": "I",
                "Ī": "I",
                "Ĭ": "I",
                "Į": "I",
                "İ": "I",
                "ĩ": "i",
                "ī": "i",
                "ĭ": "i",
                "į": "i",
                "ı": "i",
                "Ĵ": "J",
                "ĵ": "j",
                "Ķ": "K",
                "ķ": "k",
                "ĸ": "k",
                "Ĺ": "L",
                "Ļ": "L",
                "Ľ": "L",
                "Ŀ": "L",
                "Ł": "L",
                "ĺ": "l",
                "ļ": "l",
                "ľ": "l",
                "ŀ": "l",
                "ł": "l",
                "Ń": "N",
                "Ņ": "N",
                "Ň": "N",
                "Ŋ": "N",
                "ń": "n",
                "ņ": "n",
                "ň": "n",
                "ŋ": "n",
                "Ō": "O",
                "Ŏ": "O",
                "Ő": "O",
                "ō": "o",
                "ŏ": "o",
                "ő": "o",
                "Ŕ": "R",
                "Ŗ": "R",
                "Ř": "R",
                "ŕ": "r",
                "ŗ": "r",
                "ř": "r",
                "Ś": "S",
                "Ŝ": "S",
                "Ş": "S",
                "Š": "S",
                "ś": "s",
                "ŝ": "s",
                "ş": "s",
                "š": "s",
                "Ţ": "T",
                "Ť": "T",
                "Ŧ": "T",
                "ţ": "t",
                "ť": "t",
                "ŧ": "t",
                "Ũ": "U",
                "Ū": "U",
                "Ŭ": "U",
                "Ů": "U",
                "Ű": "U",
                "Ų": "U",
                "ũ": "u",
                "ū": "u",
                "ŭ": "u",
                "ů": "u",
                "ű": "u",
                "ų": "u",
                "Ŵ": "W",
                "ŵ": "w",
                "Ŷ": "Y",
                "ŷ": "y",
                "Ÿ": "Y",
                "Ź": "Z",
                "Ż": "Z",
                "Ž": "Z",
                "ź": "z",
                "ż": "z",
                "ž": "z",
                "Ĳ": "IJ",
                "ĳ": "ij",
                "Œ": "Oe",
                "œ": "oe",
                "ŉ": "'n",
                "ſ": "s"
            }), Tn = pn({"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"});

            function xn(e) {
                return "\\" + Ct[e]
            }

            function Sn(e) {
                return wt.test(e)
            }

            function An(e) {
                var t = -1, n = Array(e.size);
                return e.forEach(function (e, r) {
                    n[++t] = [r, e]
                }), n
            }

            function Dn(e, t) {
                return function (n) {
                    return e(t(n))
                }
            }

            function Cn(e, t) {
                for (var n = -1, r = e.length, i = 0, o = []; ++n < r;) {
                    var a = e[n];
                    a !== t && a !== f || (e[n] = f, o[i++] = n)
                }
                return o
            }

            function Nn(e) {
                var t = -1, n = Array(e.size);
                return e.forEach(function (e) {
                    n[++t] = e
                }), n
            }

            function On(e) {
                var t = -1, n = Array(e.size);
                return e.forEach(function (e) {
                    n[++t] = [e, e]
                }), n
            }

            function Rn(e) {
                return Sn(e) ? function (e) {
                    var t = bt.lastIndex = 0;
                    for (; bt.test(e);) ++t;
                    return t
                }(e) : on(e)
            }

            function In(e) {
                return Sn(e) ? function (e) {
                    return e.match(bt) || []
                }(e) : function (e) {
                    return e.split("")
                }(e)
            }

            var Ln = pn({"&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'"});
            var kn = function e(t) {
                var n, r = (t = null == t ? Lt : kn.defaults(Lt.Object(), t, kn.pick(Lt, xt))).Array, i = t.Date,
                    Je = t.Error, Ze = t.Function, et = t.Math, tt = t.Object, nt = t.RegExp, rt = t.String,
                    it = t.TypeError, ot = r.prototype, at = Ze.prototype, ut = tt.prototype,
                    st = t["__core-js_shared__"], lt = at.toString, ct = ut.hasOwnProperty, ft = 0,
                    ht = (n = /[^.]+$/.exec(st && st.keys && st.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "",
                    pt = ut.toString, dt = lt.call(tt), vt = Lt._,
                    gt = nt("^" + lt.call(ct).replace(Ie, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                    mt = Pt ? t.Buffer : o, bt = t.Symbol, wt = t.Uint8Array, Ct = mt ? mt.allocUnsafe : o,
                    Rt = Dn(tt.getPrototypeOf, tt), It = tt.create, kt = ut.propertyIsEnumerable, jt = ot.splice,
                    Ft = bt ? bt.isConcatSpreadable : o, Ut = bt ? bt.iterator : o, on = bt ? bt.toStringTag : o,
                    pn = function () {
                        try {
                            var e = Mo(tt, "defineProperty");
                            return e({}, "", {}), e
                        } catch (e) {
                        }
                    }(), jn = t.clearTimeout !== Lt.clearTimeout && t.clearTimeout,
                    Pn = i && i.now !== Lt.Date.now && i.now, Fn = t.setTimeout !== Lt.setTimeout && t.setTimeout,
                    Un = et.ceil, Mn = et.floor, Bn = tt.getOwnPropertySymbols, Hn = mt ? mt.isBuffer : o,
                    qn = t.isFinite, Wn = ot.join, zn = Dn(tt.keys, tt), Xn = et.max, Yn = et.min, Vn = i.now,
                    Gn = t.parseInt, $n = et.random, Kn = ot.reverse, Qn = Mo(t, "DataView"), Jn = Mo(t, "Map"),
                    Zn = Mo(t, "Promise"), er = Mo(t, "Set"), tr = Mo(t, "WeakMap"), nr = Mo(tt, "create"),
                    rr = tr && new tr, ir = {}, or = fa(Qn), ar = fa(Jn), ur = fa(Zn), sr = fa(er), lr = fa(tr),
                    cr = bt ? bt.prototype : o, fr = cr ? cr.valueOf : o, hr = cr ? cr.toString : o;

                function pr(e) {
                    if (Cu(e) && !mu(e) && !(e instanceof mr)) {
                        if (e instanceof gr) return e;
                        if (ct.call(e, "__wrapped__")) return ha(e)
                    }
                    return new gr(e)
                }

                var dr = function () {
                    function e() {
                    }

                    return function (t) {
                        if (!Du(t)) return {};
                        if (It) return It(t);
                        e.prototype = t;
                        var n = new e;
                        return e.prototype = o, n
                    }
                }();

                function vr() {
                }

                function gr(e, t) {
                    this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = o
                }

                function mr(e) {
                    this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = F, this.__views__ = []
                }

                function yr(e) {
                    var t = -1, n = null == e ? 0 : e.length;
                    for (this.clear(); ++t < n;) {
                        var r = e[t];
                        this.set(r[0], r[1])
                    }
                }

                function _r(e) {
                    var t = -1, n = null == e ? 0 : e.length;
                    for (this.clear(); ++t < n;) {
                        var r = e[t];
                        this.set(r[0], r[1])
                    }
                }

                function br(e) {
                    var t = -1, n = null == e ? 0 : e.length;
                    for (this.clear(); ++t < n;) {
                        var r = e[t];
                        this.set(r[0], r[1])
                    }
                }

                function Er(e) {
                    var t = -1, n = null == e ? 0 : e.length;
                    for (this.__data__ = new br; ++t < n;) this.add(e[t])
                }

                function wr(e) {
                    var t = this.__data__ = new _r(e);
                    this.size = t.size
                }

                function Tr(e, t) {
                    var n = mu(e), r = !n && gu(e), i = !n && !r && Eu(e), o = !n && !r && !i && Pu(e),
                        a = n || r || i || o, u = a ? gn(e.length, rt) : [], s = u.length;
                    for (var l in e) !t && !ct.call(e, l) || a && ("length" == l || i && ("offset" == l || "parent" == l) || o && ("buffer" == l || "byteLength" == l || "byteOffset" == l) || Yo(l, s)) || u.push(l);
                    return u
                }

                function xr(e) {
                    var t = e.length;
                    return t ? e[Ei(0, t - 1)] : o
                }

                function Sr(e, t) {
                    return sa(no(e), kr(t, 0, e.length))
                }

                function Ar(e) {
                    return sa(no(e))
                }

                function Dr(e, t, n) {
                    (n === o || pu(e[t], n)) && (n !== o || t in e) || Ir(e, t, n)
                }

                function Cr(e, t, n) {
                    var r = e[t];
                    ct.call(e, t) && pu(r, n) && (n !== o || t in e) || Ir(e, t, n)
                }

                function Nr(e, t) {
                    for (var n = e.length; n--;) if (pu(e[n][0], t)) return n;
                    return -1
                }

                function Or(e, t, n, r) {
                    return Mr(e, function (e, i, o) {
                        t(r, e, n(e), o)
                    }), r
                }

                function Rr(e, t) {
                    return e && ro(t, is(t), e)
                }

                function Ir(e, t, n) {
                    "__proto__" == t && pn ? pn(e, t, {
                        configurable: !0,
                        enumerable: !0,
                        value: n,
                        writable: !0
                    }) : e[t] = n
                }

                function Lr(e, t) {
                    for (var n = -1, i = t.length, a = r(i), u = null == e; ++n < i;) a[n] = u ? o : Zu(e, t[n]);
                    return a
                }

                function kr(e, t, n) {
                    return e == e && (n !== o && (e = e <= n ? e : n), t !== o && (e = e >= t ? e : t)), e
                }

                function jr(e, t, n, r, i, a) {
                    var u, s = t & h, l = t & p, c = t & d;
                    if (n && (u = i ? n(e, r, i, a) : n(e)), u !== o) return u;
                    if (!Du(e)) return e;
                    var f = mu(e);
                    if (f) {
                        if (u = function (e) {
                            var t = e.length, n = new e.constructor(t);
                            t && "string" == typeof e[0] && ct.call(e, "index") && (n.index = e.index, n.input = e.input);
                            return n
                        }(e), !s) return no(e, u)
                    } else {
                        var v = qo(e), g = v == G || v == $;
                        if (Eu(e)) return Ki(e, s);
                        if (v == Z || v == H || g && !i) {
                            if (u = l || g ? {} : zo(e), !s) return l ? function (e, t) {
                                return ro(e, Ho(e), t)
                            }(e, function (e, t) {
                                return e && ro(t, os(t), e)
                            }(u, e)) : function (e, t) {
                                return ro(e, Bo(e), t)
                            }(e, Rr(u, e))
                        } else {
                            if (!Dt[v]) return i ? e : {};
                            u = function (e, t, n) {
                                var r = e.constructor;
                                switch (t) {
                                    case se:
                                        return Qi(e);
                                    case z:
                                    case X:
                                        return new r(+e);
                                    case le:
                                        return function (e, t) {
                                            var n = t ? Qi(e.buffer) : e.buffer;
                                            return new e.constructor(n, e.byteOffset, e.byteLength)
                                        }(e, n);
                                    case ce:
                                    case fe:
                                    case he:
                                    case pe:
                                    case de:
                                    case ve:
                                    case ge:
                                    case me:
                                    case ye:
                                        return Ji(e, n);
                                    case K:
                                        return new r;
                                    case Q:
                                    case re:
                                        return new r(e);
                                    case te:
                                        return function (e) {
                                            var t = new e.constructor(e.source, We.exec(e));
                                            return t.lastIndex = e.lastIndex, t
                                        }(e);
                                    case ne:
                                        return new r;
                                    case ie:
                                        return i = e, fr ? tt(fr.call(i)) : {}
                                }
                                var i
                            }(e, v, s)
                        }
                    }
                    a || (a = new wr);
                    var m = a.get(e);
                    if (m) return m;
                    a.set(e, u), Lu(e) ? e.forEach(function (r) {
                        u.add(jr(r, t, n, r, e, a))
                    }) : Nu(e) && e.forEach(function (r, i) {
                        u.set(i, jr(r, t, n, i, e, a))
                    });
                    var y = f ? o : (c ? l ? Io : Ro : l ? os : is)(e);
                    return Vt(y || e, function (r, i) {
                        y && (r = e[i = r]), Cr(u, i, jr(r, t, n, i, e, a))
                    }), u
                }

                function Pr(e, t, n) {
                    var r = n.length;
                    if (null == e) return !r;
                    for (e = tt(e); r--;) {
                        var i = n[r], a = t[i], u = e[i];
                        if (u === o && !(i in e) || !a(u)) return !1
                    }
                    return !0
                }

                function Fr(e, t, n) {
                    if ("function" != typeof e) throw new it(s);
                    return ia(function () {
                        e.apply(o, n)
                    }, t)
                }

                function Ur(e, t, n, r) {
                    var i = -1, o = Qt, u = !0, s = e.length, l = [], c = t.length;
                    if (!s) return l;
                    n && (t = Zt(t, mn(n))), r ? (o = Jt, u = !1) : t.length >= a && (o = _n, u = !1, t = new Er(t));
                    e:for (; ++i < s;) {
                        var f = e[i], h = null == n ? f : n(f);
                        if (f = r || 0 !== f ? f : 0, u && h == h) {
                            for (var p = c; p--;) if (t[p] === h) continue e;
                            l.push(f)
                        } else o(t, h, r) || l.push(f)
                    }
                    return l
                }

                pr.templateSettings = {
                    escape: Ae,
                    evaluate: De,
                    interpolate: Ce,
                    variable: "",
                    imports: {_: pr}
                }, pr.prototype = vr.prototype, pr.prototype.constructor = pr, gr.prototype = dr(vr.prototype), gr.prototype.constructor = gr, mr.prototype = dr(vr.prototype), mr.prototype.constructor = mr, yr.prototype.clear = function () {
                    this.__data__ = nr ? nr(null) : {}, this.size = 0
                }, yr.prototype.delete = function (e) {
                    var t = this.has(e) && delete this.__data__[e];
                    return this.size -= t ? 1 : 0, t
                }, yr.prototype.get = function (e) {
                    var t = this.__data__;
                    if (nr) {
                        var n = t[e];
                        return n === l ? o : n
                    }
                    return ct.call(t, e) ? t[e] : o
                }, yr.prototype.has = function (e) {
                    var t = this.__data__;
                    return nr ? t[e] !== o : ct.call(t, e)
                }, yr.prototype.set = function (e, t) {
                    var n = this.__data__;
                    return this.size += this.has(e) ? 0 : 1, n[e] = nr && t === o ? l : t, this
                }, _r.prototype.clear = function () {
                    this.__data__ = [], this.size = 0
                }, _r.prototype.delete = function (e) {
                    var t = this.__data__, n = Nr(t, e);
                    return !(n < 0) && (n == t.length - 1 ? t.pop() : jt.call(t, n, 1), --this.size, !0)
                }, _r.prototype.get = function (e) {
                    var t = this.__data__, n = Nr(t, e);
                    return n < 0 ? o : t[n][1]
                }, _r.prototype.has = function (e) {
                    return Nr(this.__data__, e) > -1
                }, _r.prototype.set = function (e, t) {
                    var n = this.__data__, r = Nr(n, e);
                    return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this
                }, br.prototype.clear = function () {
                    this.size = 0, this.__data__ = {hash: new yr, map: new (Jn || _r), string: new yr}
                }, br.prototype.delete = function (e) {
                    var t = Fo(this, e).delete(e);
                    return this.size -= t ? 1 : 0, t
                }, br.prototype.get = function (e) {
                    return Fo(this, e).get(e)
                }, br.prototype.has = function (e) {
                    return Fo(this, e).has(e)
                }, br.prototype.set = function (e, t) {
                    var n = Fo(this, e), r = n.size;
                    return n.set(e, t), this.size += n.size == r ? 0 : 1, this
                }, Er.prototype.add = Er.prototype.push = function (e) {
                    return this.__data__.set(e, l), this
                }, Er.prototype.has = function (e) {
                    return this.__data__.has(e)
                }, wr.prototype.clear = function () {
                    this.__data__ = new _r, this.size = 0
                }, wr.prototype.delete = function (e) {
                    var t = this.__data__, n = t.delete(e);
                    return this.size = t.size, n
                }, wr.prototype.get = function (e) {
                    return this.__data__.get(e)
                }, wr.prototype.has = function (e) {
                    return this.__data__.has(e)
                }, wr.prototype.set = function (e, t) {
                    var n = this.__data__;
                    if (n instanceof _r) {
                        var r = n.__data__;
                        if (!Jn || r.length < a - 1) return r.push([e, t]), this.size = ++n.size, this;
                        n = this.__data__ = new br(r)
                    }
                    return n.set(e, t), this.size = n.size, this
                };
                var Mr = ao(Vr), Br = ao(Gr, !0);

                function Hr(e, t) {
                    var n = !0;
                    return Mr(e, function (e, r, i) {
                        return n = !!t(e, r, i)
                    }), n
                }

                function qr(e, t, n) {
                    for (var r = -1, i = e.length; ++r < i;) {
                        var a = e[r], u = t(a);
                        if (null != u && (s === o ? u == u && !ju(u) : n(u, s))) var s = u, l = a
                    }
                    return l
                }

                function Wr(e, t) {
                    var n = [];
                    return Mr(e, function (e, r, i) {
                        t(e, r, i) && n.push(e)
                    }), n
                }

                function zr(e, t, n, r, i) {
                    var o = -1, a = e.length;
                    for (n || (n = Xo), i || (i = []); ++o < a;) {
                        var u = e[o];
                        t > 0 && n(u) ? t > 1 ? zr(u, t - 1, n, r, i) : en(i, u) : r || (i[i.length] = u)
                    }
                    return i
                }

                var Xr = uo(), Yr = uo(!0);

                function Vr(e, t) {
                    return e && Xr(e, t, is)
                }

                function Gr(e, t) {
                    return e && Yr(e, t, is)
                }

                function $r(e, t) {
                    return Kt(t, function (t) {
                        return xu(e[t])
                    })
                }

                function Kr(e, t) {
                    for (var n = 0, r = (t = Yi(t, e)).length; null != e && n < r;) e = e[ca(t[n++])];
                    return n && n == r ? e : o
                }

                function Qr(e, t, n) {
                    var r = t(e);
                    return mu(e) ? r : en(r, n(e))
                }

                function Jr(e) {
                    return null == e ? e === o ? oe : J : on && on in tt(e) ? function (e) {
                        var t = ct.call(e, on), n = e[on];
                        try {
                            e[on] = o;
                            var r = !0
                        } catch (e) {
                        }
                        var i = pt.call(e);
                        r && (t ? e[on] = n : delete e[on]);
                        return i
                    }(e) : function (e) {
                        return pt.call(e)
                    }(e)
                }

                function Zr(e, t) {
                    return e > t
                }

                function ei(e, t) {
                    return null != e && ct.call(e, t)
                }

                function ti(e, t) {
                    return null != e && t in tt(e)
                }

                function ni(e, t, n) {
                    for (var i = n ? Jt : Qt, a = e[0].length, u = e.length, s = u, l = r(u), c = 1 / 0, f = []; s--;) {
                        var h = e[s];
                        s && t && (h = Zt(h, mn(t))), c = Yn(h.length, c), l[s] = !n && (t || a >= 120 && h.length >= 120) ? new Er(s && h) : o
                    }
                    h = e[0];
                    var p = -1, d = l[0];
                    e:for (; ++p < a && f.length < c;) {
                        var v = h[p], g = t ? t(v) : v;
                        if (v = n || 0 !== v ? v : 0, !(d ? _n(d, g) : i(f, g, n))) {
                            for (s = u; --s;) {
                                var m = l[s];
                                if (!(m ? _n(m, g) : i(e[s], g, n))) continue e
                            }
                            d && d.push(g), f.push(v)
                        }
                    }
                    return f
                }

                function ri(e, t, n) {
                    var r = null == (e = ta(e, t = Yi(t, e))) ? e : e[ca(Ta(t))];
                    return null == r ? o : Xt(r, e, n)
                }

                function ii(e) {
                    return Cu(e) && Jr(e) == H
                }

                function oi(e, t, n, r, i) {
                    return e === t || (null == e || null == t || !Cu(e) && !Cu(t) ? e != e && t != t : function (e, t, n, r, i, a) {
                        var u = mu(e), s = mu(t), l = u ? q : qo(e), c = s ? q : qo(t), f = (l = l == H ? Z : l) == Z,
                            h = (c = c == H ? Z : c) == Z, p = l == c;
                        if (p && Eu(e)) {
                            if (!Eu(t)) return !1;
                            u = !0, f = !1
                        }
                        if (p && !f) return a || (a = new wr), u || Pu(e) ? No(e, t, n, r, i, a) : function (e, t, n, r, i, o, a) {
                            switch (n) {
                                case le:
                                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                                    e = e.buffer, t = t.buffer;
                                case se:
                                    return !(e.byteLength != t.byteLength || !o(new wt(e), new wt(t)));
                                case z:
                                case X:
                                case Q:
                                    return pu(+e, +t);
                                case V:
                                    return e.name == t.name && e.message == t.message;
                                case te:
                                case re:
                                    return e == t + "";
                                case K:
                                    var u = An;
                                case ne:
                                    var s = r & v;
                                    if (u || (u = Nn), e.size != t.size && !s) return !1;
                                    var l = a.get(e);
                                    if (l) return l == t;
                                    r |= g, a.set(e, t);
                                    var c = No(u(e), u(t), r, i, o, a);
                                    return a.delete(e), c;
                                case ie:
                                    if (fr) return fr.call(e) == fr.call(t)
                            }
                            return !1
                        }(e, t, l, n, r, i, a);
                        if (!(n & v)) {
                            var d = f && ct.call(e, "__wrapped__"), m = h && ct.call(t, "__wrapped__");
                            if (d || m) {
                                var y = d ? e.value() : e, _ = m ? t.value() : t;
                                return a || (a = new wr), i(y, _, n, r, a)
                            }
                        }
                        if (!p) return !1;
                        return a || (a = new wr), function (e, t, n, r, i, a) {
                            var u = n & v, s = Ro(e), l = s.length, c = Ro(t).length;
                            if (l != c && !u) return !1;
                            var f = l;
                            for (; f--;) {
                                var h = s[f];
                                if (!(u ? h in t : ct.call(t, h))) return !1
                            }
                            var p = a.get(e);
                            if (p && a.get(t)) return p == t;
                            var d = !0;
                            a.set(e, t), a.set(t, e);
                            var g = u;
                            for (; ++f < l;) {
                                h = s[f];
                                var m = e[h], y = t[h];
                                if (r) var _ = u ? r(y, m, h, t, e, a) : r(m, y, h, e, t, a);
                                if (!(_ === o ? m === y || i(m, y, n, r, a) : _)) {
                                    d = !1;
                                    break
                                }
                                g || (g = "constructor" == h)
                            }
                            if (d && !g) {
                                var b = e.constructor, E = t.constructor;
                                b != E && "constructor" in e && "constructor" in t && !("function" == typeof b && b instanceof b && "function" == typeof E && E instanceof E) && (d = !1)
                            }
                            return a.delete(e), a.delete(t), d
                        }(e, t, n, r, i, a)
                    }(e, t, n, r, oi, i))
                }

                function ai(e, t, n, r) {
                    var i = n.length, a = i, u = !r;
                    if (null == e) return !a;
                    for (e = tt(e); i--;) {
                        var s = n[i];
                        if (u && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1
                    }
                    for (; ++i < a;) {
                        var l = (s = n[i])[0], c = e[l], f = s[1];
                        if (u && s[2]) {
                            if (c === o && !(l in e)) return !1
                        } else {
                            var h = new wr;
                            if (r) var p = r(c, f, l, e, t, h);
                            if (!(p === o ? oi(f, c, v | g, r, h) : p)) return !1
                        }
                    }
                    return !0
                }

                function ui(e) {
                    return !(!Du(e) || (t = e, ht && ht in t)) && (xu(e) ? gt : Ye).test(fa(e));
                    var t
                }

                function si(e) {
                    return "function" == typeof e ? e : null == e ? Os : "object" == typeof e ? mu(e) ? di(e[0], e[1]) : pi(e) : Ms(e)
                }

                function li(e) {
                    if (!Qo(e)) return zn(e);
                    var t = [];
                    for (var n in tt(e)) ct.call(e, n) && "constructor" != n && t.push(n);
                    return t
                }

                function ci(e) {
                    if (!Du(e)) return function (e) {
                        var t = [];
                        if (null != e) for (var n in tt(e)) t.push(n);
                        return t
                    }(e);
                    var t = Qo(e), n = [];
                    for (var r in e) ("constructor" != r || !t && ct.call(e, r)) && n.push(r);
                    return n
                }

                function fi(e, t) {
                    return e < t
                }

                function hi(e, t) {
                    var n = -1, i = _u(e) ? r(e.length) : [];
                    return Mr(e, function (e, r, o) {
                        i[++n] = t(e, r, o)
                    }), i
                }

                function pi(e) {
                    var t = Uo(e);
                    return 1 == t.length && t[0][2] ? Zo(t[0][0], t[0][1]) : function (n) {
                        return n === e || ai(n, e, t)
                    }
                }

                function di(e, t) {
                    return Go(e) && Jo(t) ? Zo(ca(e), t) : function (n) {
                        var r = Zu(n, e);
                        return r === o && r === t ? es(n, e) : oi(t, r, v | g)
                    }
                }

                function vi(e, t, n, r, i) {
                    e !== t && Xr(t, function (a, u) {
                        if (i || (i = new wr), Du(a)) !function (e, t, n, r, i, a, u) {
                            var s = na(e, n), l = na(t, n), c = u.get(l);
                            if (c) return void Dr(e, n, c);
                            var f = a ? a(s, l, n + "", e, t, u) : o, h = f === o;
                            if (h) {
                                var p = mu(l), d = !p && Eu(l), v = !p && !d && Pu(l);
                                f = l, p || d || v ? mu(s) ? f = s : bu(s) ? f = no(s) : d ? (h = !1, f = Ki(l, !0)) : v ? (h = !1, f = Ji(l, !0)) : f = [] : Ru(l) || gu(l) ? (f = s, gu(s) ? f = zu(s) : Du(s) && !xu(s) || (f = zo(l))) : h = !1
                            }
                            h && (u.set(l, f), i(f, l, r, a, u), u.delete(l));
                            Dr(e, n, f)
                        }(e, t, u, n, vi, r, i); else {
                            var s = r ? r(na(e, u), a, u + "", e, t, i) : o;
                            s === o && (s = a), Dr(e, u, s)
                        }
                    }, os)
                }

                function gi(e, t) {
                    var n = e.length;
                    if (n) return Yo(t += t < 0 ? n : 0, n) ? e[t] : o
                }

                function mi(e, t, n) {
                    var r = -1;
                    return t = Zt(t.length ? t : [Os], mn(Po())), function (e, t) {
                        var n = e.length;
                        for (e.sort(t); n--;) e[n] = e[n].value;
                        return e
                    }(hi(e, function (e, n, i) {
                        return {
                            criteria: Zt(t, function (t) {
                                return t(e)
                            }), index: ++r, value: e
                        }
                    }), function (e, t) {
                        return function (e, t, n) {
                            var r = -1, i = e.criteria, o = t.criteria, a = i.length, u = n.length;
                            for (; ++r < a;) {
                                var s = Zi(i[r], o[r]);
                                if (s) {
                                    if (r >= u) return s;
                                    var l = n[r];
                                    return s * ("desc" == l ? -1 : 1)
                                }
                            }
                            return e.index - t.index
                        }(e, t, n)
                    })
                }

                function yi(e, t, n) {
                    for (var r = -1, i = t.length, o = {}; ++r < i;) {
                        var a = t[r], u = Kr(e, a);
                        n(u, a) && Ai(o, Yi(a, e), u)
                    }
                    return o
                }

                function _i(e, t, n, r) {
                    var i = r ? ln : sn, o = -1, a = t.length, u = e;
                    for (e === t && (t = no(t)), n && (u = Zt(e, mn(n))); ++o < a;) for (var s = 0, l = t[o], c = n ? n(l) : l; (s = i(u, c, s, r)) > -1;) u !== e && jt.call(u, s, 1), jt.call(e, s, 1);
                    return e
                }

                function bi(e, t) {
                    for (var n = e ? t.length : 0, r = n - 1; n--;) {
                        var i = t[n];
                        if (n == r || i !== o) {
                            var o = i;
                            Yo(i) ? jt.call(e, i, 1) : Ui(e, i)
                        }
                    }
                    return e
                }

                function Ei(e, t) {
                    return e + Mn($n() * (t - e + 1))
                }

                function wi(e, t) {
                    var n = "";
                    if (!e || t < 1 || t > k) return n;
                    do {
                        t % 2 && (n += e), (t = Mn(t / 2)) && (e += e)
                    } while (t);
                    return n
                }

                function Ti(e, t) {
                    return oa(ea(e, t, Os), e + "")
                }

                function xi(e) {
                    return xr(ps(e))
                }

                function Si(e, t) {
                    var n = ps(e);
                    return sa(n, kr(t, 0, n.length))
                }

                function Ai(e, t, n, r) {
                    if (!Du(e)) return e;
                    for (var i = -1, a = (t = Yi(t, e)).length, u = a - 1, s = e; null != s && ++i < a;) {
                        var l = ca(t[i]), c = n;
                        if (i != u) {
                            var f = s[l];
                            (c = r ? r(f, l, s) : o) === o && (c = Du(f) ? f : Yo(t[i + 1]) ? [] : {})
                        }
                        Cr(s, l, c), s = s[l]
                    }
                    return e
                }

                var Di = rr ? function (e, t) {
                    return rr.set(e, t), e
                } : Os, Ci = pn ? function (e, t) {
                    return pn(e, "toString", {configurable: !0, enumerable: !1, value: Ds(t), writable: !0})
                } : Os;

                function Ni(e) {
                    return sa(ps(e))
                }

                function Oi(e, t, n) {
                    var i = -1, o = e.length;
                    t < 0 && (t = -t > o ? 0 : o + t), (n = n > o ? o : n) < 0 && (n += o), o = t > n ? 0 : n - t >>> 0, t >>>= 0;
                    for (var a = r(o); ++i < o;) a[i] = e[i + t];
                    return a
                }

                function Ri(e, t) {
                    var n;
                    return Mr(e, function (e, r, i) {
                        return !(n = t(e, r, i))
                    }), !!n
                }

                function Ii(e, t, n) {
                    var r = 0, i = null == e ? r : e.length;
                    if ("number" == typeof t && t == t && i <= M) {
                        for (; r < i;) {
                            var o = r + i >>> 1, a = e[o];
                            null !== a && !ju(a) && (n ? a <= t : a < t) ? r = o + 1 : i = o
                        }
                        return i
                    }
                    return Li(e, t, Os, n)
                }

                function Li(e, t, n, r) {
                    t = n(t);
                    for (var i = 0, a = null == e ? 0 : e.length, u = t != t, s = null === t, l = ju(t), c = t === o; i < a;) {
                        var f = Mn((i + a) / 2), h = n(e[f]), p = h !== o, d = null === h, v = h == h, g = ju(h);
                        if (u) var m = r || v; else m = c ? v && (r || p) : s ? v && p && (r || !d) : l ? v && p && !d && (r || !g) : !d && !g && (r ? h <= t : h < t);
                        m ? i = f + 1 : a = f
                    }
                    return Yn(a, U)
                }

                function ki(e, t) {
                    for (var n = -1, r = e.length, i = 0, o = []; ++n < r;) {
                        var a = e[n], u = t ? t(a) : a;
                        if (!n || !pu(u, s)) {
                            var s = u;
                            o[i++] = 0 === a ? 0 : a
                        }
                    }
                    return o
                }

                function ji(e) {
                    return "number" == typeof e ? e : ju(e) ? P : +e
                }

                function Pi(e) {
                    if ("string" == typeof e) return e;
                    if (mu(e)) return Zt(e, Pi) + "";
                    if (ju(e)) return hr ? hr.call(e) : "";
                    var t = e + "";
                    return "0" == t && 1 / e == -L ? "-0" : t
                }

                function Fi(e, t, n) {
                    var r = -1, i = Qt, o = e.length, u = !0, s = [], l = s;
                    if (n) u = !1, i = Jt; else if (o >= a) {
                        var c = t ? null : To(e);
                        if (c) return Nn(c);
                        u = !1, i = _n, l = new Er
                    } else l = t ? [] : s;
                    e:for (; ++r < o;) {
                        var f = e[r], h = t ? t(f) : f;
                        if (f = n || 0 !== f ? f : 0, u && h == h) {
                            for (var p = l.length; p--;) if (l[p] === h) continue e;
                            t && l.push(h), s.push(f)
                        } else i(l, h, n) || (l !== s && l.push(h), s.push(f))
                    }
                    return s
                }

                function Ui(e, t) {
                    return null == (e = ta(e, t = Yi(t, e))) || delete e[ca(Ta(t))]
                }

                function Mi(e, t, n, r) {
                    return Ai(e, t, n(Kr(e, t)), r)
                }

                function Bi(e, t, n, r) {
                    for (var i = e.length, o = r ? i : -1; (r ? o-- : ++o < i) && t(e[o], o, e);) ;
                    return n ? Oi(e, r ? 0 : o, r ? o + 1 : i) : Oi(e, r ? o + 1 : 0, r ? i : o)
                }

                function Hi(e, t) {
                    var n = e;
                    return n instanceof mr && (n = n.value()), tn(t, function (e, t) {
                        return t.func.apply(t.thisArg, en([e], t.args))
                    }, n)
                }

                function qi(e, t, n) {
                    var i = e.length;
                    if (i < 2) return i ? Fi(e[0]) : [];
                    for (var o = -1, a = r(i); ++o < i;) for (var u = e[o], s = -1; ++s < i;) s != o && (a[o] = Ur(a[o] || u, e[s], t, n));
                    return Fi(zr(a, 1), t, n)
                }

                function Wi(e, t, n) {
                    for (var r = -1, i = e.length, a = t.length, u = {}; ++r < i;) {
                        var s = r < a ? t[r] : o;
                        n(u, e[r], s)
                    }
                    return u
                }

                function zi(e) {
                    return bu(e) ? e : []
                }

                function Xi(e) {
                    return "function" == typeof e ? e : Os
                }

                function Yi(e, t) {
                    return mu(e) ? e : Go(e, t) ? [e] : la(Xu(e))
                }

                var Vi = Ti;

                function Gi(e, t, n) {
                    var r = e.length;
                    return n = n === o ? r : n, !t && n >= r ? e : Oi(e, t, n)
                }

                var $i = jn || function (e) {
                    return Lt.clearTimeout(e)
                };

                function Ki(e, t) {
                    if (t) return e.slice();
                    var n = e.length, r = Ct ? Ct(n) : new e.constructor(n);
                    return e.copy(r), r
                }

                function Qi(e) {
                    var t = new e.constructor(e.byteLength);
                    return new wt(t).set(new wt(e)), t
                }

                function Ji(e, t) {
                    var n = t ? Qi(e.buffer) : e.buffer;
                    return new e.constructor(n, e.byteOffset, e.length)
                }

                function Zi(e, t) {
                    if (e !== t) {
                        var n = e !== o, r = null === e, i = e == e, a = ju(e), u = t !== o, s = null === t, l = t == t,
                            c = ju(t);
                        if (!s && !c && !a && e > t || a && u && l && !s && !c || r && u && l || !n && l || !i) return 1;
                        if (!r && !a && !c && e < t || c && n && i && !r && !a || s && n && i || !u && i || !l) return -1
                    }
                    return 0
                }

                function eo(e, t, n, i) {
                    for (var o = -1, a = e.length, u = n.length, s = -1, l = t.length, c = Xn(a - u, 0), f = r(l + c), h = !i; ++s < l;) f[s] = t[s];
                    for (; ++o < u;) (h || o < a) && (f[n[o]] = e[o]);
                    for (; c--;) f[s++] = e[o++];
                    return f
                }

                function to(e, t, n, i) {
                    for (var o = -1, a = e.length, u = -1, s = n.length, l = -1, c = t.length, f = Xn(a - s, 0), h = r(f + c), p = !i; ++o < f;) h[o] = e[o];
                    for (var d = o; ++l < c;) h[d + l] = t[l];
                    for (; ++u < s;) (p || o < a) && (h[d + n[u]] = e[o++]);
                    return h
                }

                function no(e, t) {
                    var n = -1, i = e.length;
                    for (t || (t = r(i)); ++n < i;) t[n] = e[n];
                    return t
                }

                function ro(e, t, n, r) {
                    var i = !n;
                    n || (n = {});
                    for (var a = -1, u = t.length; ++a < u;) {
                        var s = t[a], l = r ? r(n[s], e[s], s, n, e) : o;
                        l === o && (l = e[s]), i ? Ir(n, s, l) : Cr(n, s, l)
                    }
                    return n
                }

                function io(e, t) {
                    return function (n, r) {
                        var i = mu(n) ? Yt : Or, o = t ? t() : {};
                        return i(n, e, Po(r, 2), o)
                    }
                }

                function oo(e) {
                    return Ti(function (t, n) {
                        var r = -1, i = n.length, a = i > 1 ? n[i - 1] : o, u = i > 2 ? n[2] : o;
                        for (a = e.length > 3 && "function" == typeof a ? (i--, a) : o, u && Vo(n[0], n[1], u) && (a = i < 3 ? o : a, i = 1), t = tt(t); ++r < i;) {
                            var s = n[r];
                            s && e(t, s, r, a)
                        }
                        return t
                    })
                }

                function ao(e, t) {
                    return function (n, r) {
                        if (null == n) return n;
                        if (!_u(n)) return e(n, r);
                        for (var i = n.length, o = t ? i : -1, a = tt(n); (t ? o-- : ++o < i) && !1 !== r(a[o], o, a);) ;
                        return n
                    }
                }

                function uo(e) {
                    return function (t, n, r) {
                        for (var i = -1, o = tt(t), a = r(t), u = a.length; u--;) {
                            var s = a[e ? u : ++i];
                            if (!1 === n(o[s], s, o)) break
                        }
                        return t
                    }
                }

                function so(e) {
                    return function (t) {
                        var n = Sn(t = Xu(t)) ? In(t) : o, r = n ? n[0] : t.charAt(0),
                            i = n ? Gi(n, 1).join("") : t.slice(1);
                        return r[e]() + i
                    }
                }

                function lo(e) {
                    return function (t) {
                        return tn(xs(gs(t).replace(yt, "")), e, "")
                    }
                }

                function co(e) {
                    return function () {
                        var t = arguments;
                        switch (t.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t[0]);
                            case 2:
                                return new e(t[0], t[1]);
                            case 3:
                                return new e(t[0], t[1], t[2]);
                            case 4:
                                return new e(t[0], t[1], t[2], t[3]);
                            case 5:
                                return new e(t[0], t[1], t[2], t[3], t[4]);
                            case 6:
                                return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                            case 7:
                                return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
                        }
                        var n = dr(e.prototype), r = e.apply(n, t);
                        return Du(r) ? r : n
                    }
                }

                function fo(e) {
                    return function (t, n, r) {
                        var i = tt(t);
                        if (!_u(t)) {
                            var a = Po(n, 3);
                            t = is(t), n = function (e) {
                                return a(i[e], e, i)
                            }
                        }
                        var u = e(t, n, r);
                        return u > -1 ? i[a ? t[u] : u] : o
                    }
                }

                function ho(e) {
                    return Oo(function (t) {
                        var n = t.length, r = n, i = gr.prototype.thru;
                        for (e && t.reverse(); r--;) {
                            var a = t[r];
                            if ("function" != typeof a) throw new it(s);
                            if (i && !u && "wrapper" == ko(a)) var u = new gr([], !0)
                        }
                        for (r = u ? r : n; ++r < n;) {
                            var l = ko(a = t[r]), c = "wrapper" == l ? Lo(a) : o;
                            u = c && $o(c[0]) && c[1] == (x | b | w | S) && !c[4].length && 1 == c[9] ? u[ko(c[0])].apply(u, c[3]) : 1 == a.length && $o(a) ? u[l]() : u.thru(a)
                        }
                        return function () {
                            var e = arguments, r = e[0];
                            if (u && 1 == e.length && mu(r)) return u.plant(r).value();
                            for (var i = 0, o = n ? t[i].apply(this, e) : r; ++i < n;) o = t[i].call(this, o);
                            return o
                        }
                    })
                }

                function po(e, t, n, i, a, u, s, l, c, f) {
                    var h = t & x, p = t & m, d = t & y, v = t & (b | E), g = t & A, _ = d ? o : co(e);
                    return function m() {
                        for (var y = arguments.length, b = r(y), E = y; E--;) b[E] = arguments[E];
                        if (v) var w = jo(m), T = function (e, t) {
                            for (var n = e.length, r = 0; n--;) e[n] === t && ++r;
                            return r
                        }(b, w);
                        if (i && (b = eo(b, i, a, v)), u && (b = to(b, u, s, v)), y -= T, v && y < f) {
                            var x = Cn(b, w);
                            return Eo(e, t, po, m.placeholder, n, b, x, l, c, f - y)
                        }
                        var S = p ? n : this, A = d ? S[e] : e;
                        return y = b.length, l ? b = function (e, t) {
                            var n = e.length, r = Yn(t.length, n), i = no(e);
                            for (; r--;) {
                                var a = t[r];
                                e[r] = Yo(a, n) ? i[a] : o
                            }
                            return e
                        }(b, l) : g && y > 1 && b.reverse(), h && c < y && (b.length = c), this && this !== Lt && this instanceof m && (A = _ || co(A)), A.apply(S, b)
                    }
                }

                function vo(e, t) {
                    return function (n, r) {
                        return function (e, t, n, r) {
                            return Vr(e, function (e, i, o) {
                                t(r, n(e), i, o)
                            }), r
                        }(n, e, t(r), {})
                    }
                }

                function go(e, t) {
                    return function (n, r) {
                        var i;
                        if (n === o && r === o) return t;
                        if (n !== o && (i = n), r !== o) {
                            if (i === o) return r;
                            "string" == typeof n || "string" == typeof r ? (n = Pi(n), r = Pi(r)) : (n = ji(n), r = ji(r)), i = e(n, r)
                        }
                        return i
                    }
                }

                function mo(e) {
                    return Oo(function (t) {
                        return t = Zt(t, mn(Po())), Ti(function (n) {
                            var r = this;
                            return e(t, function (e) {
                                return Xt(e, r, n)
                            })
                        })
                    })
                }

                function yo(e, t) {
                    var n = (t = t === o ? " " : Pi(t)).length;
                    if (n < 2) return n ? wi(t, e) : t;
                    var r = wi(t, Un(e / Rn(t)));
                    return Sn(t) ? Gi(In(r), 0, e).join("") : r.slice(0, e)
                }

                function _o(e) {
                    return function (t, n, i) {
                        return i && "number" != typeof i && Vo(t, n, i) && (n = i = o), t = Bu(t), n === o ? (n = t, t = 0) : n = Bu(n), function (e, t, n, i) {
                            for (var o = -1, a = Xn(Un((t - e) / (n || 1)), 0), u = r(a); a--;) u[i ? a : ++o] = e, e += n;
                            return u
                        }(t, n, i = i === o ? t < n ? 1 : -1 : Bu(i), e)
                    }
                }

                function bo(e) {
                    return function (t, n) {
                        return "string" == typeof t && "string" == typeof n || (t = Wu(t), n = Wu(n)), e(t, n)
                    }
                }

                function Eo(e, t, n, r, i, a, u, s, l, c) {
                    var f = t & b;
                    t |= f ? w : T, (t &= ~(f ? T : w)) & _ || (t &= ~(m | y));
                    var h = [e, t, i, f ? a : o, f ? u : o, f ? o : a, f ? o : u, s, l, c], p = n.apply(o, h);
                    return $o(e) && ra(p, h), p.placeholder = r, aa(p, e, t)
                }

                function wo(e) {
                    var t = et[e];
                    return function (e, n) {
                        if (e = Wu(e), (n = null == n ? 0 : Yn(Hu(n), 292)) && qn(e)) {
                            var r = (Xu(e) + "e").split("e");
                            return +((r = (Xu(t(r[0] + "e" + (+r[1] + n))) + "e").split("e"))[0] + "e" + (+r[1] - n))
                        }
                        return t(e)
                    }
                }

                var To = er && 1 / Nn(new er([, -0]))[1] == L ? function (e) {
                    return new er(e)
                } : js;

                function xo(e) {
                    return function (t) {
                        var n = qo(t);
                        return n == K ? An(t) : n == ne ? On(t) : function (e, t) {
                            return Zt(t, function (t) {
                                return [t, e[t]]
                            })
                        }(t, e(t))
                    }
                }

                function So(e, t, n, i, a, u, l, c) {
                    var h = t & y;
                    if (!h && "function" != typeof e) throw new it(s);
                    var p = i ? i.length : 0;
                    if (p || (t &= ~(w | T), i = a = o), l = l === o ? l : Xn(Hu(l), 0), c = c === o ? c : Hu(c), p -= a ? a.length : 0, t & T) {
                        var d = i, v = a;
                        i = a = o
                    }
                    var g = h ? o : Lo(e), A = [e, t, n, i, a, d, v, u, l, c];
                    if (g && function (e, t) {
                        var n = e[1], r = t[1], i = n | r, o = i < (m | y | x),
                            a = r == x && n == b || r == x && n == S && e[7].length <= t[8] || r == (x | S) && t[7].length <= t[8] && n == b;
                        if (!o && !a) return e;
                        r & m && (e[2] = t[2], i |= n & m ? 0 : _);
                        var u = t[3];
                        if (u) {
                            var s = e[3];
                            e[3] = s ? eo(s, u, t[4]) : u, e[4] = s ? Cn(e[3], f) : t[4]
                        }
                        (u = t[5]) && (s = e[5], e[5] = s ? to(s, u, t[6]) : u, e[6] = s ? Cn(e[5], f) : t[6]);
                        (u = t[7]) && (e[7] = u);
                        r & x && (e[8] = null == e[8] ? t[8] : Yn(e[8], t[8]));
                        null == e[9] && (e[9] = t[9]);
                        e[0] = t[0], e[1] = i
                    }(A, g), e = A[0], t = A[1], n = A[2], i = A[3], a = A[4], !(c = A[9] = A[9] === o ? h ? 0 : e.length : Xn(A[9] - p, 0)) && t & (b | E) && (t &= ~(b | E)), t && t != m) D = t == b || t == E ? function (e, t, n) {
                        var i = co(e);
                        return function a() {
                            for (var u = arguments.length, s = r(u), l = u, c = jo(a); l--;) s[l] = arguments[l];
                            var f = u < 3 && s[0] !== c && s[u - 1] !== c ? [] : Cn(s, c);
                            return (u -= f.length) < n ? Eo(e, t, po, a.placeholder, o, s, f, o, o, n - u) : Xt(this && this !== Lt && this instanceof a ? i : e, this, s)
                        }
                    }(e, t, c) : t != w && t != (m | w) || a.length ? po.apply(o, A) : function (e, t, n, i) {
                        var o = t & m, a = co(e);
                        return function t() {
                            for (var u = -1, s = arguments.length, l = -1, c = i.length, f = r(c + s), h = this && this !== Lt && this instanceof t ? a : e; ++l < c;) f[l] = i[l];
                            for (; s--;) f[l++] = arguments[++u];
                            return Xt(h, o ? n : this, f)
                        }
                    }(e, t, n, i); else var D = function (e, t, n) {
                        var r = t & m, i = co(e);
                        return function t() {
                            return (this && this !== Lt && this instanceof t ? i : e).apply(r ? n : this, arguments)
                        }
                    }(e, t, n);
                    return aa((g ? Di : ra)(D, A), e, t)
                }

                function Ao(e, t, n, r) {
                    return e === o || pu(e, ut[n]) && !ct.call(r, n) ? t : e
                }

                function Do(e, t, n, r, i, a) {
                    return Du(e) && Du(t) && (a.set(t, e), vi(e, t, o, Do, a), a.delete(t)), e
                }

                function Co(e) {
                    return Ru(e) ? o : e
                }

                function No(e, t, n, r, i, a) {
                    var u = n & v, s = e.length, l = t.length;
                    if (s != l && !(u && l > s)) return !1;
                    var c = a.get(e);
                    if (c && a.get(t)) return c == t;
                    var f = -1, h = !0, p = n & g ? new Er : o;
                    for (a.set(e, t), a.set(t, e); ++f < s;) {
                        var d = e[f], m = t[f];
                        if (r) var y = u ? r(m, d, f, t, e, a) : r(d, m, f, e, t, a);
                        if (y !== o) {
                            if (y) continue;
                            h = !1;
                            break
                        }
                        if (p) {
                            if (!rn(t, function (e, t) {
                                if (!_n(p, t) && (d === e || i(d, e, n, r, a))) return p.push(t)
                            })) {
                                h = !1;
                                break
                            }
                        } else if (d !== m && !i(d, m, n, r, a)) {
                            h = !1;
                            break
                        }
                    }
                    return a.delete(e), a.delete(t), h
                }

                function Oo(e) {
                    return oa(ea(e, o, ya), e + "")
                }

                function Ro(e) {
                    return Qr(e, is, Bo)
                }

                function Io(e) {
                    return Qr(e, os, Ho)
                }

                var Lo = rr ? function (e) {
                    return rr.get(e)
                } : js;

                function ko(e) {
                    for (var t = e.name + "", n = ir[t], r = ct.call(ir, t) ? n.length : 0; r--;) {
                        var i = n[r], o = i.func;
                        if (null == o || o == e) return i.name
                    }
                    return t
                }

                function jo(e) {
                    return (ct.call(pr, "placeholder") ? pr : e).placeholder
                }

                function Po() {
                    var e = pr.iteratee || Rs;
                    return e = e === Rs ? si : e, arguments.length ? e(arguments[0], arguments[1]) : e
                }

                function Fo(e, t) {
                    var n, r, i = e.__data__;
                    return ("string" == (r = typeof (n = t)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== n : null === n) ? i["string" == typeof t ? "string" : "hash"] : i.map
                }

                function Uo(e) {
                    for (var t = is(e), n = t.length; n--;) {
                        var r = t[n], i = e[r];
                        t[n] = [r, i, Jo(i)]
                    }
                    return t
                }

                function Mo(e, t) {
                    var n = function (e, t) {
                        return null == e ? o : e[t]
                    }(e, t);
                    return ui(n) ? n : o
                }

                var Bo = Bn ? function (e) {
                    return null == e ? [] : (e = tt(e), Kt(Bn(e), function (t) {
                        return kt.call(e, t)
                    }))
                } : qs, Ho = Bn ? function (e) {
                    for (var t = []; e;) en(t, Bo(e)), e = Rt(e);
                    return t
                } : qs, qo = Jr;

                function Wo(e, t, n) {
                    for (var r = -1, i = (t = Yi(t, e)).length, o = !1; ++r < i;) {
                        var a = ca(t[r]);
                        if (!(o = null != e && n(e, a))) break;
                        e = e[a]
                    }
                    return o || ++r != i ? o : !!(i = null == e ? 0 : e.length) && Au(i) && Yo(a, i) && (mu(e) || gu(e))
                }

                function zo(e) {
                    return "function" != typeof e.constructor || Qo(e) ? {} : dr(Rt(e))
                }

                function Xo(e) {
                    return mu(e) || gu(e) || !!(Ft && e && e[Ft])
                }

                function Yo(e, t) {
                    var n = typeof e;
                    return !!(t = null == t ? k : t) && ("number" == n || "symbol" != n && Ge.test(e)) && e > -1 && e % 1 == 0 && e < t
                }

                function Vo(e, t, n) {
                    if (!Du(n)) return !1;
                    var r = typeof t;
                    return !!("number" == r ? _u(n) && Yo(t, n.length) : "string" == r && t in n) && pu(n[t], e)
                }

                function Go(e, t) {
                    if (mu(e)) return !1;
                    var n = typeof e;
                    return !("number" != n && "symbol" != n && "boolean" != n && null != e && !ju(e)) || (Oe.test(e) || !Ne.test(e) || null != t && e in tt(t))
                }

                function $o(e) {
                    var t = ko(e), n = pr[t];
                    if ("function" != typeof n || !(t in mr.prototype)) return !1;
                    if (e === n) return !0;
                    var r = Lo(n);
                    return !!r && e === r[0]
                }

                (Qn && qo(new Qn(new ArrayBuffer(1))) != le || Jn && qo(new Jn) != K || Zn && "[object Promise]" != qo(Zn.resolve()) || er && qo(new er) != ne || tr && qo(new tr) != ae) && (qo = function (e) {
                    var t = Jr(e), n = t == Z ? e.constructor : o, r = n ? fa(n) : "";
                    if (r) switch (r) {
                        case or:
                            return le;
                        case ar:
                            return K;
                        case ur:
                            return "[object Promise]";
                        case sr:
                            return ne;
                        case lr:
                            return ae
                    }
                    return t
                });
                var Ko = st ? xu : Ws;

                function Qo(e) {
                    var t = e && e.constructor;
                    return e === ("function" == typeof t && t.prototype || ut)
                }

                function Jo(e) {
                    return e == e && !Du(e)
                }

                function Zo(e, t) {
                    return function (n) {
                        return null != n && (n[e] === t && (t !== o || e in tt(n)))
                    }
                }

                function ea(e, t, n) {
                    return t = Xn(t === o ? e.length - 1 : t, 0), function () {
                        for (var i = arguments, o = -1, a = Xn(i.length - t, 0), u = r(a); ++o < a;) u[o] = i[t + o];
                        o = -1;
                        for (var s = r(t + 1); ++o < t;) s[o] = i[o];
                        return s[t] = n(u), Xt(e, this, s)
                    }
                }

                function ta(e, t) {
                    return t.length < 2 ? e : Kr(e, Oi(t, 0, -1))
                }

                function na(e, t) {
                    if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t]
                }

                var ra = ua(Di), ia = Fn || function (e, t) {
                    return Lt.setTimeout(e, t)
                }, oa = ua(Ci);

                function aa(e, t, n) {
                    var r = t + "";
                    return oa(e, function (e, t) {
                        var n = t.length;
                        if (!n) return e;
                        var r = n - 1;
                        return t[r] = (n > 1 ? "& " : "") + t[r], t = t.join(n > 2 ? ", " : " "), e.replace(Fe, "{\n/* [wrapped with " + t + "] */\n")
                    }(r, function (e, t) {
                        return Vt(B, function (n) {
                            var r = "_." + n[0];
                            t & n[1] && !Qt(e, r) && e.push(r)
                        }), e.sort()
                    }(function (e) {
                        var t = e.match(Ue);
                        return t ? t[1].split(Me) : []
                    }(r), n)))
                }

                function ua(e) {
                    var t = 0, n = 0;
                    return function () {
                        var r = Vn(), i = O - (r - n);
                        if (n = r, i > 0) {
                            if (++t >= N) return arguments[0]
                        } else t = 0;
                        return e.apply(o, arguments)
                    }
                }

                function sa(e, t) {
                    var n = -1, r = e.length, i = r - 1;
                    for (t = t === o ? r : t; ++n < t;) {
                        var a = Ei(n, i), u = e[a];
                        e[a] = e[n], e[n] = u
                    }
                    return e.length = t, e
                }

                var la = function (e) {
                    var t = uu(e, function (e) {
                        return n.size === c && n.clear(), e
                    }), n = t.cache;
                    return t
                }(function (e) {
                    var t = [];
                    return 46 === e.charCodeAt(0) && t.push(""), e.replace(Re, function (e, n, r, i) {
                        t.push(r ? i.replace(He, "$1") : n || e)
                    }), t
                });

                function ca(e) {
                    if ("string" == typeof e || ju(e)) return e;
                    var t = e + "";
                    return "0" == t && 1 / e == -L ? "-0" : t
                }

                function fa(e) {
                    if (null != e) {
                        try {
                            return lt.call(e)
                        } catch (e) {
                        }
                        try {
                            return e + ""
                        } catch (e) {
                        }
                    }
                    return ""
                }

                function ha(e) {
                    if (e instanceof mr) return e.clone();
                    var t = new gr(e.__wrapped__, e.__chain__);
                    return t.__actions__ = no(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
                }

                var pa = Ti(function (e, t) {
                    return bu(e) ? Ur(e, zr(t, 1, bu, !0)) : []
                }), da = Ti(function (e, t) {
                    var n = Ta(t);
                    return bu(n) && (n = o), bu(e) ? Ur(e, zr(t, 1, bu, !0), Po(n, 2)) : []
                }), va = Ti(function (e, t) {
                    var n = Ta(t);
                    return bu(n) && (n = o), bu(e) ? Ur(e, zr(t, 1, bu, !0), o, n) : []
                });

                function ga(e, t, n) {
                    var r = null == e ? 0 : e.length;
                    if (!r) return -1;
                    var i = null == n ? 0 : Hu(n);
                    return i < 0 && (i = Xn(r + i, 0)), un(e, Po(t, 3), i)
                }

                function ma(e, t, n) {
                    var r = null == e ? 0 : e.length;
                    if (!r) return -1;
                    var i = r - 1;
                    return n !== o && (i = Hu(n), i = n < 0 ? Xn(r + i, 0) : Yn(i, r - 1)), un(e, Po(t, 3), i, !0)
                }

                function ya(e) {
                    return (null == e ? 0 : e.length) ? zr(e, 1) : []
                }

                function _a(e) {
                    return e && e.length ? e[0] : o
                }

                var ba = Ti(function (e) {
                    var t = Zt(e, zi);
                    return t.length && t[0] === e[0] ? ni(t) : []
                }), Ea = Ti(function (e) {
                    var t = Ta(e), n = Zt(e, zi);
                    return t === Ta(n) ? t = o : n.pop(), n.length && n[0] === e[0] ? ni(n, Po(t, 2)) : []
                }), wa = Ti(function (e) {
                    var t = Ta(e), n = Zt(e, zi);
                    return (t = "function" == typeof t ? t : o) && n.pop(), n.length && n[0] === e[0] ? ni(n, o, t) : []
                });

                function Ta(e) {
                    var t = null == e ? 0 : e.length;
                    return t ? e[t - 1] : o
                }

                var xa = Ti(Sa);

                function Sa(e, t) {
                    return e && e.length && t && t.length ? _i(e, t) : e
                }

                var Aa = Oo(function (e, t) {
                    var n = null == e ? 0 : e.length, r = Lr(e, t);
                    return bi(e, Zt(t, function (e) {
                        return Yo(e, n) ? +e : e
                    }).sort(Zi)), r
                });

                function Da(e) {
                    return null == e ? e : Kn.call(e)
                }

                var Ca = Ti(function (e) {
                    return Fi(zr(e, 1, bu, !0))
                }), Na = Ti(function (e) {
                    var t = Ta(e);
                    return bu(t) && (t = o), Fi(zr(e, 1, bu, !0), Po(t, 2))
                }), Oa = Ti(function (e) {
                    var t = Ta(e);
                    return t = "function" == typeof t ? t : o, Fi(zr(e, 1, bu, !0), o, t)
                });

                function Ra(e) {
                    if (!e || !e.length) return [];
                    var t = 0;
                    return e = Kt(e, function (e) {
                        if (bu(e)) return t = Xn(e.length, t), !0
                    }), gn(t, function (t) {
                        return Zt(e, hn(t))
                    })
                }

                function Ia(e, t) {
                    if (!e || !e.length) return [];
                    var n = Ra(e);
                    return null == t ? n : Zt(n, function (e) {
                        return Xt(t, o, e)
                    })
                }

                var La = Ti(function (e, t) {
                    return bu(e) ? Ur(e, t) : []
                }), ka = Ti(function (e) {
                    return qi(Kt(e, bu))
                }), ja = Ti(function (e) {
                    var t = Ta(e);
                    return bu(t) && (t = o), qi(Kt(e, bu), Po(t, 2))
                }), Pa = Ti(function (e) {
                    var t = Ta(e);
                    return t = "function" == typeof t ? t : o, qi(Kt(e, bu), o, t)
                }), Fa = Ti(Ra);
                var Ua = Ti(function (e) {
                    var t = e.length, n = t > 1 ? e[t - 1] : o;
                    return n = "function" == typeof n ? (e.pop(), n) : o, Ia(e, n)
                });

                function Ma(e) {
                    var t = pr(e);
                    return t.__chain__ = !0, t
                }

                function Ba(e, t) {
                    return t(e)
                }

                var Ha = Oo(function (e) {
                    var t = e.length, n = t ? e[0] : 0, r = this.__wrapped__, i = function (t) {
                        return Lr(t, e)
                    };
                    return !(t > 1 || this.__actions__.length) && r instanceof mr && Yo(n) ? ((r = r.slice(n, +n + (t ? 1 : 0))).__actions__.push({
                        func: Ba,
                        args: [i],
                        thisArg: o
                    }), new gr(r, this.__chain__).thru(function (e) {
                        return t && !e.length && e.push(o), e
                    })) : this.thru(i)
                });
                var qa = io(function (e, t, n) {
                    ct.call(e, n) ? ++e[n] : Ir(e, n, 1)
                });
                var Wa = fo(ga), za = fo(ma);

                function Xa(e, t) {
                    return (mu(e) ? Vt : Mr)(e, Po(t, 3))
                }

                function Ya(e, t) {
                    return (mu(e) ? Gt : Br)(e, Po(t, 3))
                }

                var Va = io(function (e, t, n) {
                    ct.call(e, n) ? e[n].push(t) : Ir(e, n, [t])
                });
                var Ga = Ti(function (e, t, n) {
                    var i = -1, o = "function" == typeof t, a = _u(e) ? r(e.length) : [];
                    return Mr(e, function (e) {
                        a[++i] = o ? Xt(t, e, n) : ri(e, t, n)
                    }), a
                }), $a = io(function (e, t, n) {
                    Ir(e, n, t)
                });

                function Ka(e, t) {
                    return (mu(e) ? Zt : hi)(e, Po(t, 3))
                }

                var Qa = io(function (e, t, n) {
                    e[n ? 0 : 1].push(t)
                }, function () {
                    return [[], []]
                });
                var Ja = Ti(function (e, t) {
                    if (null == e) return [];
                    var n = t.length;
                    return n > 1 && Vo(e, t[0], t[1]) ? t = [] : n > 2 && Vo(t[0], t[1], t[2]) && (t = [t[0]]), mi(e, zr(t, 1), [])
                }), Za = Pn || function () {
                    return Lt.Date.now()
                };

                function eu(e, t, n) {
                    return t = n ? o : t, t = e && null == t ? e.length : t, So(e, x, o, o, o, o, t)
                }

                function tu(e, t) {
                    var n;
                    if ("function" != typeof t) throw new it(s);
                    return e = Hu(e), function () {
                        return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = o), n
                    }
                }

                var nu = Ti(function (e, t, n) {
                    var r = m;
                    if (n.length) {
                        var i = Cn(n, jo(nu));
                        r |= w
                    }
                    return So(e, r, t, n, i)
                }), ru = Ti(function (e, t, n) {
                    var r = m | y;
                    if (n.length) {
                        var i = Cn(n, jo(ru));
                        r |= w
                    }
                    return So(t, r, e, n, i)
                });

                function iu(e, t, n) {
                    var r, i, a, u, l, c, f = 0, h = !1, p = !1, d = !0;
                    if ("function" != typeof e) throw new it(s);

                    function v(t) {
                        var n = r, a = i;
                        return r = i = o, f = t, u = e.apply(a, n)
                    }

                    function g(e) {
                        var n = e - c;
                        return c === o || n >= t || n < 0 || p && e - f >= a
                    }

                    function m() {
                        var e = Za();
                        if (g(e)) return y(e);
                        l = ia(m, function (e) {
                            var n = t - (e - c);
                            return p ? Yn(n, a - (e - f)) : n
                        }(e))
                    }

                    function y(e) {
                        return l = o, d && r ? v(e) : (r = i = o, u)
                    }

                    function _() {
                        var e = Za(), n = g(e);
                        if (r = arguments, i = this, c = e, n) {
                            if (l === o) return function (e) {
                                return f = e, l = ia(m, t), h ? v(e) : u
                            }(c);
                            if (p) return $i(l), l = ia(m, t), v(c)
                        }
                        return l === o && (l = ia(m, t)), u
                    }

                    return t = Wu(t) || 0, Du(n) && (h = !!n.leading, a = (p = "maxWait" in n) ? Xn(Wu(n.maxWait) || 0, t) : a, d = "trailing" in n ? !!n.trailing : d), _.cancel = function () {
                        l !== o && $i(l), f = 0, r = c = i = l = o
                    }, _.flush = function () {
                        return l === o ? u : y(Za())
                    }, _
                }

                var ou = Ti(function (e, t) {
                    return Fr(e, 1, t)
                }), au = Ti(function (e, t, n) {
                    return Fr(e, Wu(t) || 0, n)
                });

                function uu(e, t) {
                    if ("function" != typeof e || null != t && "function" != typeof t) throw new it(s);
                    var n = function () {
                        var r = arguments, i = t ? t.apply(this, r) : r[0], o = n.cache;
                        if (o.has(i)) return o.get(i);
                        var a = e.apply(this, r);
                        return n.cache = o.set(i, a) || o, a
                    };
                    return n.cache = new (uu.Cache || br), n
                }

                function su(e) {
                    if ("function" != typeof e) throw new it(s);
                    return function () {
                        var t = arguments;
                        switch (t.length) {
                            case 0:
                                return !e.call(this);
                            case 1:
                                return !e.call(this, t[0]);
                            case 2:
                                return !e.call(this, t[0], t[1]);
                            case 3:
                                return !e.call(this, t[0], t[1], t[2])
                        }
                        return !e.apply(this, t)
                    }
                }

                uu.Cache = br;
                var lu = Vi(function (e, t) {
                    var n = (t = 1 == t.length && mu(t[0]) ? Zt(t[0], mn(Po())) : Zt(zr(t, 1), mn(Po()))).length;
                    return Ti(function (r) {
                        for (var i = -1, o = Yn(r.length, n); ++i < o;) r[i] = t[i].call(this, r[i]);
                        return Xt(e, this, r)
                    })
                }), cu = Ti(function (e, t) {
                    var n = Cn(t, jo(cu));
                    return So(e, w, o, t, n)
                }), fu = Ti(function (e, t) {
                    var n = Cn(t, jo(fu));
                    return So(e, T, o, t, n)
                }), hu = Oo(function (e, t) {
                    return So(e, S, o, o, o, t)
                });

                function pu(e, t) {
                    return e === t || e != e && t != t
                }

                var du = bo(Zr), vu = bo(function (e, t) {
                    return e >= t
                }), gu = ii(function () {
                    return arguments
                }()) ? ii : function (e) {
                    return Cu(e) && ct.call(e, "callee") && !kt.call(e, "callee")
                }, mu = r.isArray, yu = Mt ? mn(Mt) : function (e) {
                    return Cu(e) && Jr(e) == se
                };

                function _u(e) {
                    return null != e && Au(e.length) && !xu(e)
                }

                function bu(e) {
                    return Cu(e) && _u(e)
                }

                var Eu = Hn || Ws, wu = Bt ? mn(Bt) : function (e) {
                    return Cu(e) && Jr(e) == X
                };

                function Tu(e) {
                    if (!Cu(e)) return !1;
                    var t = Jr(e);
                    return t == V || t == Y || "string" == typeof e.message && "string" == typeof e.name && !Ru(e)
                }

                function xu(e) {
                    if (!Du(e)) return !1;
                    var t = Jr(e);
                    return t == G || t == $ || t == W || t == ee
                }

                function Su(e) {
                    return "number" == typeof e && e == Hu(e)
                }

                function Au(e) {
                    return "number" == typeof e && e > -1 && e % 1 == 0 && e <= k
                }

                function Du(e) {
                    var t = typeof e;
                    return null != e && ("object" == t || "function" == t)
                }

                function Cu(e) {
                    return null != e && "object" == typeof e
                }

                var Nu = Ht ? mn(Ht) : function (e) {
                    return Cu(e) && qo(e) == K
                };

                function Ou(e) {
                    return "number" == typeof e || Cu(e) && Jr(e) == Q
                }

                function Ru(e) {
                    if (!Cu(e) || Jr(e) != Z) return !1;
                    var t = Rt(e);
                    if (null === t) return !0;
                    var n = ct.call(t, "constructor") && t.constructor;
                    return "function" == typeof n && n instanceof n && lt.call(n) == dt
                }

                var Iu = qt ? mn(qt) : function (e) {
                    return Cu(e) && Jr(e) == te
                };
                var Lu = Wt ? mn(Wt) : function (e) {
                    return Cu(e) && qo(e) == ne
                };

                function ku(e) {
                    return "string" == typeof e || !mu(e) && Cu(e) && Jr(e) == re
                }

                function ju(e) {
                    return "symbol" == typeof e || Cu(e) && Jr(e) == ie
                }

                var Pu = zt ? mn(zt) : function (e) {
                    return Cu(e) && Au(e.length) && !!At[Jr(e)]
                };
                var Fu = bo(fi), Uu = bo(function (e, t) {
                    return e <= t
                });

                function Mu(e) {
                    if (!e) return [];
                    if (_u(e)) return ku(e) ? In(e) : no(e);
                    if (Ut && e[Ut]) return function (e) {
                        for (var t, n = []; !(t = e.next()).done;) n.push(t.value);
                        return n
                    }(e[Ut]());
                    var t = qo(e);
                    return (t == K ? An : t == ne ? Nn : ps)(e)
                }

                function Bu(e) {
                    return e ? (e = Wu(e)) === L || e === -L ? (e < 0 ? -1 : 1) * j : e == e ? e : 0 : 0 === e ? e : 0
                }

                function Hu(e) {
                    var t = Bu(e), n = t % 1;
                    return t == t ? n ? t - n : t : 0
                }

                function qu(e) {
                    return e ? kr(Hu(e), 0, F) : 0
                }

                function Wu(e) {
                    if ("number" == typeof e) return e;
                    if (ju(e)) return P;
                    if (Du(e)) {
                        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = Du(t) ? t + "" : t
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = e.replace(ke, "");
                    var n = Xe.test(e);
                    return n || Ve.test(e) ? Ot(e.slice(2), n ? 2 : 8) : ze.test(e) ? P : +e
                }

                function zu(e) {
                    return ro(e, os(e))
                }

                function Xu(e) {
                    return null == e ? "" : Pi(e)
                }

                var Yu = oo(function (e, t) {
                    if (Qo(t) || _u(t)) ro(t, is(t), e); else for (var n in t) ct.call(t, n) && Cr(e, n, t[n])
                }), Vu = oo(function (e, t) {
                    ro(t, os(t), e)
                }), Gu = oo(function (e, t, n, r) {
                    ro(t, os(t), e, r)
                }), $u = oo(function (e, t, n, r) {
                    ro(t, is(t), e, r)
                }), Ku = Oo(Lr);
                var Qu = Ti(function (e, t) {
                    e = tt(e);
                    var n = -1, r = t.length, i = r > 2 ? t[2] : o;
                    for (i && Vo(t[0], t[1], i) && (r = 1); ++n < r;) for (var a = t[n], u = os(a), s = -1, l = u.length; ++s < l;) {
                        var c = u[s], f = e[c];
                        (f === o || pu(f, ut[c]) && !ct.call(e, c)) && (e[c] = a[c])
                    }
                    return e
                }), Ju = Ti(function (e) {
                    return e.push(o, Do), Xt(us, o, e)
                });

                function Zu(e, t, n) {
                    var r = null == e ? o : Kr(e, t);
                    return r === o ? n : r
                }

                function es(e, t) {
                    return null != e && Wo(e, t, ti)
                }

                var ts = vo(function (e, t, n) {
                    null != t && "function" != typeof t.toString && (t = pt.call(t)), e[t] = n
                }, Ds(Os)), ns = vo(function (e, t, n) {
                    null != t && "function" != typeof t.toString && (t = pt.call(t)), ct.call(e, t) ? e[t].push(n) : e[t] = [n]
                }, Po), rs = Ti(ri);

                function is(e) {
                    return _u(e) ? Tr(e) : li(e)
                }

                function os(e) {
                    return _u(e) ? Tr(e, !0) : ci(e)
                }

                var as = oo(function (e, t, n) {
                    vi(e, t, n)
                }), us = oo(function (e, t, n, r) {
                    vi(e, t, n, r)
                }), ss = Oo(function (e, t) {
                    var n = {};
                    if (null == e) return n;
                    var r = !1;
                    t = Zt(t, function (t) {
                        return t = Yi(t, e), r || (r = t.length > 1), t
                    }), ro(e, Io(e), n), r && (n = jr(n, h | p | d, Co));
                    for (var i = t.length; i--;) Ui(n, t[i]);
                    return n
                });
                var ls = Oo(function (e, t) {
                    return null == e ? {} : function (e, t) {
                        return yi(e, t, function (t, n) {
                            return es(e, n)
                        })
                    }(e, t)
                });

                function cs(e, t) {
                    if (null == e) return {};
                    var n = Zt(Io(e), function (e) {
                        return [e]
                    });
                    return t = Po(t), yi(e, n, function (e, n) {
                        return t(e, n[0])
                    })
                }

                var fs = xo(is), hs = xo(os);

                function ps(e) {
                    return null == e ? [] : yn(e, is(e))
                }

                var ds = lo(function (e, t, n) {
                    return t = t.toLowerCase(), e + (n ? vs(t) : t)
                });

                function vs(e) {
                    return Ts(Xu(e).toLowerCase())
                }

                function gs(e) {
                    return (e = Xu(e)) && e.replace($e, wn).replace(_t, "")
                }

                var ms = lo(function (e, t, n) {
                    return e + (n ? "-" : "") + t.toLowerCase()
                }), ys = lo(function (e, t, n) {
                    return e + (n ? " " : "") + t.toLowerCase()
                }), _s = so("toLowerCase");
                var bs = lo(function (e, t, n) {
                    return e + (n ? "_" : "") + t.toLowerCase()
                });
                var Es = lo(function (e, t, n) {
                    return e + (n ? " " : "") + Ts(t)
                });
                var ws = lo(function (e, t, n) {
                    return e + (n ? " " : "") + t.toUpperCase()
                }), Ts = so("toUpperCase");

                function xs(e, t, n) {
                    return e = Xu(e), (t = n ? o : t) === o ? function (e) {
                        return Tt.test(e)
                    }(e) ? function (e) {
                        return e.match(Et) || []
                    }(e) : function (e) {
                        return e.match(Be) || []
                    }(e) : e.match(t) || []
                }

                var Ss = Ti(function (e, t) {
                    try {
                        return Xt(e, o, t)
                    } catch (e) {
                        return Tu(e) ? e : new Je(e)
                    }
                }), As = Oo(function (e, t) {
                    return Vt(t, function (t) {
                        t = ca(t), Ir(e, t, nu(e[t], e))
                    }), e
                });

                function Ds(e) {
                    return function () {
                        return e
                    }
                }

                var Cs = ho(), Ns = ho(!0);

                function Os(e) {
                    return e
                }

                function Rs(e) {
                    return si("function" == typeof e ? e : jr(e, h))
                }

                var Is = Ti(function (e, t) {
                    return function (n) {
                        return ri(n, e, t)
                    }
                }), Ls = Ti(function (e, t) {
                    return function (n) {
                        return ri(e, n, t)
                    }
                });

                function ks(e, t, n) {
                    var r = is(t), i = $r(t, r);
                    null != n || Du(t) && (i.length || !r.length) || (n = t, t = e, e = this, i = $r(t, is(t)));
                    var o = !(Du(n) && "chain" in n && !n.chain), a = xu(e);
                    return Vt(i, function (n) {
                        var r = t[n];
                        e[n] = r, a && (e.prototype[n] = function () {
                            var t = this.__chain__;
                            if (o || t) {
                                var n = e(this.__wrapped__), i = n.__actions__ = no(this.__actions__);
                                return i.push({func: r, args: arguments, thisArg: e}), n.__chain__ = t, n
                            }
                            return r.apply(e, en([this.value()], arguments))
                        })
                    }), e
                }

                function js() {
                }

                var Ps = mo(Zt), Fs = mo($t), Us = mo(rn);

                function Ms(e) {
                    return Go(e) ? hn(ca(e)) : function (e) {
                        return function (t) {
                            return Kr(t, e)
                        }
                    }(e)
                }

                var Bs = _o(), Hs = _o(!0);

                function qs() {
                    return []
                }

                function Ws() {
                    return !1
                }

                var zs = go(function (e, t) {
                    return e + t
                }, 0), Xs = wo("ceil"), Ys = go(function (e, t) {
                    return e / t
                }, 1), Vs = wo("floor");
                var Gs, $s = go(function (e, t) {
                    return e * t
                }, 1), Ks = wo("round"), Qs = go(function (e, t) {
                    return e - t
                }, 0);
                return pr.after = function (e, t) {
                    if ("function" != typeof t) throw new it(s);
                    return e = Hu(e), function () {
                        if (--e < 1) return t.apply(this, arguments)
                    }
                }, pr.ary = eu, pr.assign = Yu, pr.assignIn = Vu, pr.assignInWith = Gu, pr.assignWith = $u, pr.at = Ku, pr.before = tu, pr.bind = nu, pr.bindAll = As, pr.bindKey = ru, pr.castArray = function () {
                    if (!arguments.length) return [];
                    var e = arguments[0];
                    return mu(e) ? e : [e]
                }, pr.chain = Ma, pr.chunk = function (e, t, n) {
                    t = (n ? Vo(e, t, n) : t === o) ? 1 : Xn(Hu(t), 0);
                    var i = null == e ? 0 : e.length;
                    if (!i || t < 1) return [];
                    for (var a = 0, u = 0, s = r(Un(i / t)); a < i;) s[u++] = Oi(e, a, a += t);
                    return s
                }, pr.compact = function (e) {
                    for (var t = -1, n = null == e ? 0 : e.length, r = 0, i = []; ++t < n;) {
                        var o = e[t];
                        o && (i[r++] = o)
                    }
                    return i
                }, pr.concat = function () {
                    var e = arguments.length;
                    if (!e) return [];
                    for (var t = r(e - 1), n = arguments[0], i = e; i--;) t[i - 1] = arguments[i];
                    return en(mu(n) ? no(n) : [n], zr(t, 1))
                }, pr.cond = function (e) {
                    var t = null == e ? 0 : e.length, n = Po();
                    return e = t ? Zt(e, function (e) {
                        if ("function" != typeof e[1]) throw new it(s);
                        return [n(e[0]), e[1]]
                    }) : [], Ti(function (n) {
                        for (var r = -1; ++r < t;) {
                            var i = e[r];
                            if (Xt(i[0], this, n)) return Xt(i[1], this, n)
                        }
                    })
                }, pr.conforms = function (e) {
                    return function (e) {
                        var t = is(e);
                        return function (n) {
                            return Pr(n, e, t)
                        }
                    }(jr(e, h))
                }, pr.constant = Ds, pr.countBy = qa, pr.create = function (e, t) {
                    var n = dr(e);
                    return null == t ? n : Rr(n, t)
                }, pr.curry = function e(t, n, r) {
                    var i = So(t, b, o, o, o, o, o, n = r ? o : n);
                    return i.placeholder = e.placeholder, i
                }, pr.curryRight = function e(t, n, r) {
                    var i = So(t, E, o, o, o, o, o, n = r ? o : n);
                    return i.placeholder = e.placeholder, i
                }, pr.debounce = iu, pr.defaults = Qu, pr.defaultsDeep = Ju, pr.defer = ou, pr.delay = au, pr.difference = pa, pr.differenceBy = da, pr.differenceWith = va, pr.drop = function (e, t, n) {
                    var r = null == e ? 0 : e.length;
                    return r ? Oi(e, (t = n || t === o ? 1 : Hu(t)) < 0 ? 0 : t, r) : []
                }, pr.dropRight = function (e, t, n) {
                    var r = null == e ? 0 : e.length;
                    return r ? Oi(e, 0, (t = r - (t = n || t === o ? 1 : Hu(t))) < 0 ? 0 : t) : []
                }, pr.dropRightWhile = function (e, t) {
                    return e && e.length ? Bi(e, Po(t, 3), !0, !0) : []
                }, pr.dropWhile = function (e, t) {
                    return e && e.length ? Bi(e, Po(t, 3), !0) : []
                }, pr.fill = function (e, t, n, r) {
                    var i = null == e ? 0 : e.length;
                    return i ? (n && "number" != typeof n && Vo(e, t, n) && (n = 0, r = i), function (e, t, n, r) {
                        var i = e.length;
                        for ((n = Hu(n)) < 0 && (n = -n > i ? 0 : i + n), (r = r === o || r > i ? i : Hu(r)) < 0 && (r += i), r = n > r ? 0 : qu(r); n < r;) e[n++] = t;
                        return e
                    }(e, t, n, r)) : []
                }, pr.filter = function (e, t) {
                    return (mu(e) ? Kt : Wr)(e, Po(t, 3))
                }, pr.flatMap = function (e, t) {
                    return zr(Ka(e, t), 1)
                }, pr.flatMapDeep = function (e, t) {
                    return zr(Ka(e, t), L)
                }, pr.flatMapDepth = function (e, t, n) {
                    return n = n === o ? 1 : Hu(n), zr(Ka(e, t), n)
                }, pr.flatten = ya, pr.flattenDeep = function (e) {
                    return (null == e ? 0 : e.length) ? zr(e, L) : []
                }, pr.flattenDepth = function (e, t) {
                    return (null == e ? 0 : e.length) ? zr(e, t = t === o ? 1 : Hu(t)) : []
                }, pr.flip = function (e) {
                    return So(e, A)
                }, pr.flow = Cs, pr.flowRight = Ns, pr.fromPairs = function (e) {
                    for (var t = -1, n = null == e ? 0 : e.length, r = {}; ++t < n;) {
                        var i = e[t];
                        r[i[0]] = i[1]
                    }
                    return r
                }, pr.functions = function (e) {
                    return null == e ? [] : $r(e, is(e))
                }, pr.functionsIn = function (e) {
                    return null == e ? [] : $r(e, os(e))
                }, pr.groupBy = Va, pr.initial = function (e) {
                    return (null == e ? 0 : e.length) ? Oi(e, 0, -1) : []
                }, pr.intersection = ba, pr.intersectionBy = Ea, pr.intersectionWith = wa, pr.invert = ts, pr.invertBy = ns, pr.invokeMap = Ga, pr.iteratee = Rs, pr.keyBy = $a, pr.keys = is, pr.keysIn = os, pr.map = Ka, pr.mapKeys = function (e, t) {
                    var n = {};
                    return t = Po(t, 3), Vr(e, function (e, r, i) {
                        Ir(n, t(e, r, i), e)
                    }), n
                }, pr.mapValues = function (e, t) {
                    var n = {};
                    return t = Po(t, 3), Vr(e, function (e, r, i) {
                        Ir(n, r, t(e, r, i))
                    }), n
                }, pr.matches = function (e) {
                    return pi(jr(e, h))
                }, pr.matchesProperty = function (e, t) {
                    return di(e, jr(t, h))
                }, pr.memoize = uu, pr.merge = as, pr.mergeWith = us, pr.method = Is, pr.methodOf = Ls, pr.mixin = ks, pr.negate = su, pr.nthArg = function (e) {
                    return e = Hu(e), Ti(function (t) {
                        return gi(t, e)
                    })
                }, pr.omit = ss, pr.omitBy = function (e, t) {
                    return cs(e, su(Po(t)))
                }, pr.once = function (e) {
                    return tu(2, e)
                }, pr.orderBy = function (e, t, n, r) {
                    return null == e ? [] : (mu(t) || (t = null == t ? [] : [t]), mu(n = r ? o : n) || (n = null == n ? [] : [n]), mi(e, t, n))
                }, pr.over = Ps, pr.overArgs = lu, pr.overEvery = Fs, pr.overSome = Us, pr.partial = cu, pr.partialRight = fu, pr.partition = Qa, pr.pick = ls, pr.pickBy = cs, pr.property = Ms, pr.propertyOf = function (e) {
                    return function (t) {
                        return null == e ? o : Kr(e, t)
                    }
                }, pr.pull = xa, pr.pullAll = Sa, pr.pullAllBy = function (e, t, n) {
                    return e && e.length && t && t.length ? _i(e, t, Po(n, 2)) : e
                }, pr.pullAllWith = function (e, t, n) {
                    return e && e.length && t && t.length ? _i(e, t, o, n) : e
                }, pr.pullAt = Aa, pr.range = Bs, pr.rangeRight = Hs, pr.rearg = hu, pr.reject = function (e, t) {
                    return (mu(e) ? Kt : Wr)(e, su(Po(t, 3)))
                }, pr.remove = function (e, t) {
                    var n = [];
                    if (!e || !e.length) return n;
                    var r = -1, i = [], o = e.length;
                    for (t = Po(t, 3); ++r < o;) {
                        var a = e[r];
                        t(a, r, e) && (n.push(a), i.push(r))
                    }
                    return bi(e, i), n
                }, pr.rest = function (e, t) {
                    if ("function" != typeof e) throw new it(s);
                    return Ti(e, t = t === o ? t : Hu(t))
                }, pr.reverse = Da,pr.sampleSize = function (e, t, n) {
                    return t = (n ? Vo(e, t, n) : t === o) ? 1 : Hu(t), (mu(e) ? Sr : Si)(e, t)
                },pr.set = function (e, t, n) {
                    return null == e ? e : Ai(e, t, n)
                },pr.setWith = function (e, t, n, r) {
                    return r = "function" == typeof r ? r : o, null == e ? e : Ai(e, t, n, r)
                },pr.shuffle = function (e) {
                    return (mu(e) ? Ar : Ni)(e)
                },pr.slice = function (e, t, n) {
                    var r = null == e ? 0 : e.length;
                    return r ? (n && "number" != typeof n && Vo(e, t, n) ? (t = 0, n = r) : (t = null == t ? 0 : Hu(t), n = n === o ? r : Hu(n)), Oi(e, t, n)) : []
                },pr.sortBy = Ja,pr.sortedUniq = function (e) {
                    return e && e.length ? ki(e) : []
                },pr.sortedUniqBy = function (e, t) {
                    return e && e.length ? ki(e, Po(t, 2)) : []
                },pr.split = function (e, t, n) {
                    return n && "number" != typeof n && Vo(e, t, n) && (t = n = o), (n = n === o ? F : n >>> 0) ? (e = Xu(e)) && ("string" == typeof t || null != t && !Iu(t)) && !(t = Pi(t)) && Sn(e) ? Gi(In(e), 0, n) : e.split(t, n) : []
                },pr.spread = function (e, t) {
                    if ("function" != typeof e) throw new it(s);
                    return t = null == t ? 0 : Xn(Hu(t), 0), Ti(function (n) {
                        var r = n[t], i = Gi(n, 0, t);
                        return r && en(i, r), Xt(e, this, i)
                    })
                },pr.tail = function (e) {
                    var t = null == e ? 0 : e.length;
                    return t ? Oi(e, 1, t) : []
                },pr.take = function (e, t, n) {
                    return e && e.length ? Oi(e, 0, (t = n || t === o ? 1 : Hu(t)) < 0 ? 0 : t) : []
                },pr.takeRight = function (e, t, n) {
                    var r = null == e ? 0 : e.length;
                    return r ? Oi(e, (t = r - (t = n || t === o ? 1 : Hu(t))) < 0 ? 0 : t, r) : []
                },pr.takeRightWhile = function (e, t) {
                    return e && e.length ? Bi(e, Po(t, 3), !1, !0) : []
                },pr.takeWhile = function (e, t) {
                    return e && e.length ? Bi(e, Po(t, 3)) : []
                },pr.tap = function (e, t) {
                    return t(e), e
                },pr.throttle = function (e, t, n) {
                    var r = !0, i = !0;
                    if ("function" != typeof e) throw new it(s);
                    return Du(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), iu(e, t, {
                        leading: r,
                        maxWait: t,
                        trailing: i
                    })
                },pr.thru = Ba,pr.toArray = Mu,pr.toPairs = fs,pr.toPairsIn = hs,pr.toPath = function (e) {
                    return mu(e) ? Zt(e, ca) : ju(e) ? [e] : no(la(Xu(e)))
                },pr.toPlainObject = zu,pr.transform = function (e, t, n) {
                    var r = mu(e), i = r || Eu(e) || Pu(e);
                    if (t = Po(t, 4), null == n) {
                        var o = e && e.constructor;
                        n = i ? r ? new o : [] : Du(e) && xu(o) ? dr(Rt(e)) : {}
                    }
                    return (i ? Vt : Vr)(e, function (e, r, i) {
                        return t(n, e, r, i)
                    }), n
                },pr.unary = function (e) {
                    return eu(e, 1)
                },pr.union = Ca,pr.unionBy = Na,pr.unionWith = Oa,pr.uniq = function (e) {
                    return e && e.length ? Fi(e) : []
                },pr.uniqBy = function (e, t) {
                    return e && e.length ? Fi(e, Po(t, 2)) : []
                },pr.uniqWith = function (e, t) {
                    return t = "function" == typeof t ? t : o, e && e.length ? Fi(e, o, t) : []
                },pr.unset = function (e, t) {
                    return null == e || Ui(e, t)
                },pr.unzip = Ra,pr.unzipWith = Ia,pr.update = function (e, t, n) {
                    return null == e ? e : Mi(e, t, Xi(n))
                },pr.updateWith = function (e, t, n, r) {
                    return r = "function" == typeof r ? r : o, null == e ? e : Mi(e, t, Xi(n), r)
                },pr.values = ps,pr.valuesIn = function (e) {
                    return null == e ? [] : yn(e, os(e))
                },pr.without = La,pr.words = xs,pr.wrap = function (e, t) {
                    return cu(Xi(t), e)
                },pr.xor = ka,pr.xorBy = ja,pr.xorWith = Pa,pr.zip = Fa,pr.zipObject = function (e, t) {
                    return Wi(e || [], t || [], Cr)
                },pr.zipObjectDeep = function (e, t) {
                    return Wi(e || [], t || [], Ai)
                },pr.zipWith = Ua,pr.entries = fs,pr.entriesIn = hs,pr.extend = Vu,pr.extendWith = Gu,ks(pr, pr),pr.add = zs,pr.attempt = Ss,pr.camelCase = ds,pr.capitalize = vs,pr.ceil = Xs,pr.clamp = function (e, t, n) {
                    return n === o && (n = t, t = o), n !== o && (n = (n = Wu(n)) == n ? n : 0), t !== o && (t = (t = Wu(t)) == t ? t : 0), kr(Wu(e), t, n)
                },pr.clone = function (e) {
                    return jr(e, d)
                },pr.cloneDeep = function (e) {
                    return jr(e, h | d)
                },pr.cloneDeepWith = function (e, t) {
                    return jr(e, h | d, t = "function" == typeof t ? t : o)
                },pr.cloneWith = function (e, t) {
                    return jr(e, d, t = "function" == typeof t ? t : o)
                },pr.conformsTo = function (e, t) {
                    return null == t || Pr(e, t, is(t))
                },pr.deburr = gs,pr.defaultTo = function (e, t) {
                    return null == e || e != e ? t : e
                },pr.divide = Ys,pr.endsWith = function (e, t, n) {
                    e = Xu(e), t = Pi(t);
                    var r = e.length, i = n = n === o ? r : kr(Hu(n), 0, r);
                    return (n -= t.length) >= 0 && e.slice(n, i) == t
                },pr.eq = pu,pr.escape = function (e) {
                    return (e = Xu(e)) && Se.test(e) ? e.replace(Te, Tn) : e
                },pr.escapeRegExp = function (e) {
                    return (e = Xu(e)) && Le.test(e) ? e.replace(Ie, "\\$&") : e
                },pr.every = function (e, t, n) {
                    var r = mu(e) ? $t : Hr;
                    return n && Vo(e, t, n) && (t = o), r(e, Po(t, 3))
                },pr.find = Wa,pr.findIndex = ga,pr.findKey = function (e, t) {
                    return an(e, Po(t, 3), Vr)
                },pr.findLast = za,pr.findLastIndex = ma,pr.findLastKey = function (e, t) {
                    return an(e, Po(t, 3), Gr)
                },pr.floor = Vs,pr.forEach = Xa,pr.forEachRight = Ya,pr.forIn = function (e, t) {
                    return null == e ? e : Xr(e, Po(t, 3), os)
                },pr.forInRight = function (e, t) {
                    return null == e ? e : Yr(e, Po(t, 3), os)
                },pr.forOwn = function (e, t) {
                    return e && Vr(e, Po(t, 3))
                },pr.forOwnRight = function (e, t) {
                    return e && Gr(e, Po(t, 3))
                },pr.get = Zu,pr.gt = du,pr.gte = vu,pr.has = function (e, t) {
                    return null != e && Wo(e, t, ei)
                },pr.hasIn = es,pr.head = _a,pr.identity = Os,pr.includes = function (e, t, n, r) {
                    e = _u(e) ? e : ps(e), n = n && !r ? Hu(n) : 0;
                    var i = e.length;
                    return n < 0 && (n = Xn(i + n, 0)), ku(e) ? n <= i && e.indexOf(t, n) > -1 : !!i && sn(e, t, n) > -1
                },pr.indexOf = function (e, t, n) {
                    var r = null == e ? 0 : e.length;
                    if (!r) return -1;
                    var i = null == n ? 0 : Hu(n);
                    return i < 0 && (i = Xn(r + i, 0)), sn(e, t, i)
                },pr.inRange = function (e, t, n) {
                    return t = Bu(t), n === o ? (n = t, t = 0) : n = Bu(n), function (e, t, n) {
                        return e >= Yn(t, n) && e < Xn(t, n)
                    }(e = Wu(e), t, n)
                },pr.invoke = rs,pr.isArguments = gu,pr.isArray = mu,pr.isArrayBuffer = yu,pr.isArrayLike = _u,pr.isArrayLikeObject = bu,pr.isBoolean = function (e) {
                    return !0 === e || !1 === e || Cu(e) && Jr(e) == z
                },pr.isBuffer = Eu,pr.isDate = wu,pr.isElement = function (e) {
                    return Cu(e) && 1 === e.nodeType && !Ru(e)
                },pr.isEmpty = function (e) {
                    if (null == e) return !0;
                    if (_u(e) && (mu(e) || "string" == typeof e || "function" == typeof e.splice || Eu(e) || Pu(e) || gu(e))) return !e.length;
                    var t = qo(e);
                    if (t == K || t == ne) return !e.size;
                    if (Qo(e)) return !li(e).length;
                    for (var n in e) if (ct.call(e, n)) return !1;
                    return !0
                },pr.isEqual = function (e, t) {
                    return oi(e, t)
                },pr.isEqualWith = function (e, t, n) {
                    var r = (n = "function" == typeof n ? n : o) ? n(e, t) : o;
                    return r === o ? oi(e, t, o, n) : !!r
                },pr.isError = Tu,pr.isFinite = function (e) {
                    return "number" == typeof e && qn(e)
                },pr.isFunction = xu,pr.isInteger = Su,pr.isLength = Au,pr.isMap = Nu,pr.isMatch = function (e, t) {
                    return e === t || ai(e, t, Uo(t))
                },pr.isMatchWith = function (e, t, n) {
                    return n = "function" == typeof n ? n : o, ai(e, t, Uo(t), n)
                },pr.isNaN = function (e) {
                    return Ou(e) && e != +e
                },pr.isNative = function (e) {
                    if (Ko(e)) throw new Je(u);
                    return ui(e)
                },pr.isNil = function (e) {
                    return null == e
                },pr.isNull = function (e) {
                    return null === e
                },pr.isNumber = Ou,pr.isObject = Du,pr.isObjectLike = Cu,pr.isPlainObject = Ru,pr.isRegExp = Iu,pr.isSafeInteger = function (e) {
                    return Su(e) && e >= -k && e <= k
                },pr.isSet = Lu,pr.isString = ku,pr.isSymbol = ju,pr.isTypedArray = Pu,pr.isUndefined = function (e) {
                    return e === o
                },pr.isWeakMap = function (e) {
                    return Cu(e) && qo(e) == ae
                },pr.isWeakSet = function (e) {
                    return Cu(e) && Jr(e) == ue
                },pr.join = function (e, t) {
                    return null == e ? "" : Wn.call(e, t)
                },pr.kebabCase = ms,pr.last = Ta,pr.lastIndexOf = function (e, t, n) {
                    var r = null == e ? 0 : e.length;
                    if (!r) return -1;
                    var i = r;
                    return n !== o && (i = (i = Hu(n)) < 0 ? Xn(r + i, 0) : Yn(i, r - 1)), t == t ? function (e, t, n) {
                        for (var r = n + 1; r--;) if (e[r] === t) return r;
                        return r
                    }(e, t, i) : un(e, cn, i, !0)
                },pr.lowerCase = ys,pr.lowerFirst = _s,pr.lt = Fu,pr.lte = Uu,pr.max = function (e) {
                    return e && e.length ? qr(e, Os, Zr) : o
                },pr.maxBy = function (e, t) {
                    return e && e.length ? qr(e, Po(t, 2), Zr) : o
                },pr.mean = function (e) {
                    return fn(e, Os)
                },pr.meanBy = function (e, t) {
                    return fn(e, Po(t, 2))
                },pr.min = function (e) {
                    return e && e.length ? qr(e, Os, fi) : o
                },pr.minBy = function (e, t) {
                    return e && e.length ? qr(e, Po(t, 2), fi) : o
                },pr.stubArray = qs,pr.stubFalse = Ws,pr.stubObject = function () {
                    return {}
                },pr.stubString = function () {
                    return ""
                },pr.stubTrue = function () {
                    return !0
                },pr.multiply = $s,pr.nth = function (e, t) {
                    return e && e.length ? gi(e, Hu(t)) : o
                },pr.noConflict = function () {
                    return Lt._ === this && (Lt._ = vt), this
                },pr.noop = js,pr.now = Za,pr.pad = function (e, t, n) {
                    e = Xu(e);
                    var r = (t = Hu(t)) ? Rn(e) : 0;
                    if (!t || r >= t) return e;
                    var i = (t - r) / 2;
                    return yo(Mn(i), n) + e + yo(Un(i), n)
                },pr.padEnd = function (e, t, n) {
                    e = Xu(e);
                    var r = (t = Hu(t)) ? Rn(e) : 0;
                    return t && r < t ? e + yo(t - r, n) : e
                },pr.padStart = function (e, t, n) {
                    e = Xu(e);
                    var r = (t = Hu(t)) ? Rn(e) : 0;
                    return t && r < t ? yo(t - r, n) + e : e
                },pr.parseInt = function (e, t, n) {
                    return n || null == t ? t = 0 : t && (t = +t), Gn(Xu(e).replace(je, ""), t || 0)
                },pr.random = function (e, t, n) {
                    if (n && "boolean" != typeof n && Vo(e, t, n) && (t = n = o), n === o && ("boolean" == typeof t ? (n = t, t = o) : "boolean" == typeof e && (n = e, e = o)), e === o && t === o ? (e = 0, t = 1) : (e = Bu(e), t === o ? (t = e, e = 0) : t = Bu(t)), e > t) {
                        var r = e;
                        e = t, t = r
                    }
                    if (n || e % 1 || t % 1) {
                        var i = $n();
                        return Yn(e + i * (t - e + Nt("1e-" + ((i + "").length - 1))), t)
                    }
                    return Ei(e, t)
                },pr.reduce = function (e, t, n) {
                    var r = mu(e) ? tn : dn, i = arguments.length < 3;
                    return r(e, Po(t, 4), n, i, Mr)
                },pr.reduceRight = function (e, t, n) {
                    var r = mu(e) ? nn : dn, i = arguments.length < 3;
                    return r(e, Po(t, 4), n, i, Br)
                },pr.repeat = function (e, t, n) {
                    return t = (n ? Vo(e, t, n) : t === o) ? 1 : Hu(t), wi(Xu(e), t)
                },pr.replace = function () {
                    var e = arguments, t = Xu(e[0]);
                    return e.length < 3 ? t : t.replace(e[1], e[2])
                },pr.result = function (e, t, n) {
                    var r = -1, i = (t = Yi(t, e)).length;
                    for (i || (i = 1, e = o); ++r < i;) {
                        var a = null == e ? o : e[ca(t[r])];
                        a === o && (r = i, a = n), e = xu(a) ? a.call(e) : a
                    }
                    return e
                },pr.round = Ks,pr.runInContext = e,pr.sample = function (e) {
                    return (mu(e) ? xr : xi)(e)
                },pr.size = function (e) {
                    if (null == e) return 0;
                    if (_u(e)) return ku(e) ? Rn(e) : e.length;
                    var t = qo(e);
                    return t == K || t == ne ? e.size : li(e).length
                },pr.snakeCase = bs,pr.some = function (e, t, n) {
                    var r = mu(e) ? rn : Ri;
                    return n && Vo(e, t, n) && (t = o), r(e, Po(t, 3))
                },pr.sortedIndex = function (e, t) {
                    return Ii(e, t)
                },pr.sortedIndexBy = function (e, t, n) {
                    return Li(e, t, Po(n, 2))
                },pr.sortedIndexOf = function (e, t) {
                    var n = null == e ? 0 : e.length;
                    if (n) {
                        var r = Ii(e, t);
                        if (r < n && pu(e[r], t)) return r
                    }
                    return -1
                },pr.sortedLastIndex = function (e, t) {
                    return Ii(e, t, !0)
                },pr.sortedLastIndexBy = function (e, t, n) {
                    return Li(e, t, Po(n, 2), !0)
                },pr.sortedLastIndexOf = function (e, t) {
                    if (null == e ? 0 : e.length) {
                        var n = Ii(e, t, !0) - 1;
                        if (pu(e[n], t)) return n
                    }
                    return -1
                },pr.startCase = Es,pr.startsWith = function (e, t, n) {
                    return e = Xu(e), n = null == n ? 0 : kr(Hu(n), 0, e.length), t = Pi(t), e.slice(n, n + t.length) == t
                },pr.subtract = Qs,pr.sum = function (e) {
                    return e && e.length ? vn(e, Os) : 0
                },pr.sumBy = function (e, t) {
                    return e && e.length ? vn(e, Po(t, 2)) : 0
                },pr.template = function (e, t, n) {
                    var r = pr.templateSettings;
                    n && Vo(e, t, n) && (t = o), e = Xu(e), t = Gu({}, t, r, Ao);
                    var i, a, u = Gu({}, t.imports, r.imports, Ao), s = is(u), l = yn(u, s), c = 0,
                        f = t.interpolate || Ke, h = "__p += '",
                        p = nt((t.escape || Ke).source + "|" + f.source + "|" + (f === Ce ? qe : Ke).source + "|" + (t.evaluate || Ke).source + "|$", "g"),
                        d = "//# sourceURL=" + (ct.call(t, "sourceURL") ? (t.sourceURL + "").replace(/[\r\n]/g, " ") : "lodash.templateSources[" + ++St + "]") + "\n";
                    e.replace(p, function (t, n, r, o, u, s) {
                        return r || (r = o), h += e.slice(c, s).replace(Qe, xn), n && (i = !0, h += "' +\n__e(" + n + ") +\n'"), u && (a = !0, h += "';\n" + u + ";\n__p += '"), r && (h += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"), c = s + t.length, t
                    }), h += "';\n";
                    var v = ct.call(t, "variable") && t.variable;
                    v || (h = "with (obj) {\n" + h + "\n}\n"), h = (a ? h.replace(_e, "") : h).replace(be, "$1").replace(Ee, "$1;"), h = "function(" + (v || "obj") + ") {\n" + (v ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (i ? ", __e = _.escape" : "") + (a ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + h + "return __p\n}";
                    var g = Ss(function () {
                        return Ze(s, d + "return " + h).apply(o, l)
                    });
                    if (g.source = h, Tu(g)) throw g;
                    return g
                },pr.times = function (e, t) {
                    if ((e = Hu(e)) < 1 || e > k) return [];
                    var n = F, r = Yn(e, F);
                    t = Po(t), e -= F;
                    for (var i = gn(r, t); ++n < e;) t(n);
                    return i
                },pr.toFinite = Bu,pr.toInteger = Hu,pr.toLength = qu,pr.toLower = function (e) {
                    return Xu(e).toLowerCase()
                },pr.toNumber = Wu,pr.toSafeInteger = function (e) {
                    return e ? kr(Hu(e), -k, k) : 0 === e ? e : 0
                },pr.toString = Xu,pr.toUpper = function (e) {
                    return Xu(e).toUpperCase()
                },pr.trim = function (e, t, n) {
                    if ((e = Xu(e)) && (n || t === o)) return e.replace(ke, "");
                    if (!e || !(t = Pi(t))) return e;
                    var r = In(e), i = In(t);
                    return Gi(r, bn(r, i), En(r, i) + 1).join("")
                },pr.trimEnd = function (e, t, n) {
                    if ((e = Xu(e)) && (n || t === o)) return e.replace(Pe, "");
                    if (!e || !(t = Pi(t))) return e;
                    var r = In(e);
                    return Gi(r, 0, En(r, In(t)) + 1).join("")
                },pr.trimStart = function (e, t, n) {
                    if ((e = Xu(e)) && (n || t === o)) return e.replace(je, "");
                    if (!e || !(t = Pi(t))) return e;
                    var r = In(e);
                    return Gi(r, bn(r, In(t))).join("")
                },pr.truncate = function (e, t) {
                    var n = D, r = C;
                    if (Du(t)) {
                        var i = "separator" in t ? t.separator : i;
                        n = "length" in t ? Hu(t.length) : n, r = "omission" in t ? Pi(t.omission) : r
                    }
                    var a = (e = Xu(e)).length;
                    if (Sn(e)) {
                        var u = In(e);
                        a = u.length
                    }
                    if (n >= a) return e;
                    var s = n - Rn(r);
                    if (s < 1) return r;
                    var l = u ? Gi(u, 0, s).join("") : e.slice(0, s);
                    if (i === o) return l + r;
                    if (u && (s += l.length - s), Iu(i)) {
                        if (e.slice(s).search(i)) {
                            var c, f = l;
                            for (i.global || (i = nt(i.source, Xu(We.exec(i)) + "g")), i.lastIndex = 0; c = i.exec(f);) var h = c.index;
                            l = l.slice(0, h === o ? s : h)
                        }
                    } else if (e.indexOf(Pi(i), s) != s) {
                        var p = l.lastIndexOf(i);
                        p > -1 && (l = l.slice(0, p))
                    }
                    return l + r
                },pr.unescape = function (e) {
                    return (e = Xu(e)) && xe.test(e) ? e.replace(we, Ln) : e
                },pr.uniqueId = function (e) {
                    var t = ++ft;
                    return Xu(e) + t
                },pr.upperCase = ws,pr.upperFirst = Ts,pr.each = Xa,pr.eachRight = Ya,pr.first = _a,ks(pr, (Gs = {}, Vr(pr, function (e, t) {
                    ct.call(pr.prototype, t) || (Gs[t] = e)
                }), Gs), {chain: !1}),pr.VERSION = "4.17.15",Vt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function (e) {
                    pr[e].placeholder = pr
                }),Vt(["drop", "take"], function (e, t) {
                    mr.prototype[e] = function (n) {
                        n = n === o ? 1 : Xn(Hu(n), 0);
                        var r = this.__filtered__ && !t ? new mr(this) : this.clone();
                        return r.__filtered__ ? r.__takeCount__ = Yn(n, r.__takeCount__) : r.__views__.push({
                            size: Yn(n, F),
                            type: e + (r.__dir__ < 0 ? "Right" : "")
                        }), r
                    }, mr.prototype[e + "Right"] = function (t) {
                        return this.reverse()[e](t).reverse()
                    }
                }),Vt(["filter", "map", "takeWhile"], function (e, t) {
                    var n = t + 1, r = n == R || 3 == n;
                    mr.prototype[e] = function (e) {
                        var t = this.clone();
                        return t.__iteratees__.push({
                            iteratee: Po(e, 3),
                            type: n
                        }), t.__filtered__ = t.__filtered__ || r, t
                    }
                }),Vt(["head", "last"], function (e, t) {
                    var n = "take" + (t ? "Right" : "");
                    mr.prototype[e] = function () {
                        return this[n](1).value()[0]
                    }
                }),Vt(["initial", "tail"], function (e, t) {
                    var n = "drop" + (t ? "" : "Right");
                    mr.prototype[e] = function () {
                        return this.__filtered__ ? new mr(this) : this[n](1)
                    }
                }),mr.prototype.compact = function () {
                    return this.filter(Os)
                },mr.prototype.find = function (e) {
                    return this.filter(e).head()
                },mr.prototype.findLast = function (e) {
                    return this.reverse().find(e)
                },mr.prototype.invokeMap = Ti(function (e, t) {
                    return "function" == typeof e ? new mr(this) : this.map(function (n) {
                        return ri(n, e, t)
                    })
                }),mr.prototype.reject = function (e) {
                    return this.filter(su(Po(e)))
                },mr.prototype.slice = function (e, t) {
                    e = Hu(e);
                    var n = this;
                    return n.__filtered__ && (e > 0 || t < 0) ? new mr(n) : (e < 0 ? n = n.takeRight(-e) : e && (n = n.drop(e)), t !== o && (n = (t = Hu(t)) < 0 ? n.dropRight(-t) : n.take(t - e)), n)
                },mr.prototype.takeRightWhile = function (e) {
                    return this.reverse().takeWhile(e).reverse()
                },mr.prototype.toArray = function () {
                    return this.take(F)
                },Vr(mr.prototype, function (e, t) {
                    var n = /^(?:filter|find|map|reject)|While$/.test(t), r = /^(?:head|last)$/.test(t),
                        i = pr[r ? "take" + ("last" == t ? "Right" : "") : t], a = r || /^find/.test(t);
                    i && (pr.prototype[t] = function () {
                        var t = this.__wrapped__, u = r ? [1] : arguments, s = t instanceof mr, l = u[0],
                            c = s || mu(t), f = function (e) {
                                var t = i.apply(pr, en([e], u));
                                return r && h ? t[0] : t
                            };
                        c && n && "function" == typeof l && 1 != l.length && (s = c = !1);
                        var h = this.__chain__, p = !!this.__actions__.length, d = a && !h, v = s && !p;
                        if (!a && c) {
                            t = v ? t : new mr(this);
                            var g = e.apply(t, u);
                            return g.__actions__.push({func: Ba, args: [f], thisArg: o}), new gr(g, h)
                        }
                        return d && v ? e.apply(this, u) : (g = this.thru(f), d ? r ? g.value()[0] : g.value() : g)
                    })
                }),Vt(["pop", "push", "shift", "sort", "splice", "unshift"], function (e) {
                    var t = ot[e], n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                        r = /^(?:pop|shift)$/.test(e);
                    pr.prototype[e] = function () {
                        var e = arguments;
                        if (r && !this.__chain__) {
                            var i = this.value();
                            return t.apply(mu(i) ? i : [], e)
                        }
                        return this[n](function (n) {
                            return t.apply(mu(n) ? n : [], e)
                        })
                    }
                }),Vr(mr.prototype, function (e, t) {
                    var n = pr[t];
                    if (n) {
                        var r = n.name + "";
                        ct.call(ir, r) || (ir[r] = []), ir[r].push({name: t, func: n})
                    }
                }),ir[po(o, y).name] = [{name: "wrapper", func: o}],mr.prototype.clone = function () {
                    var e = new mr(this.__wrapped__);
                    return e.__actions__ = no(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = no(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = no(this.__views__), e
                },mr.prototype.reverse = function () {
                    if (this.__filtered__) {
                        var e = new mr(this);
                        e.__dir__ = -1, e.__filtered__ = !0
                    } else (e = this.clone()).__dir__ *= -1;
                    return e
                },mr.prototype.value = function () {
                    var e = this.__wrapped__.value(), t = this.__dir__, n = mu(e), r = t < 0, i = n ? e.length : 0,
                        o = function (e, t, n) {
                            var r = -1, i = n.length;
                            for (; ++r < i;) {
                                var o = n[r], a = o.size;
                                switch (o.type) {
                                    case"drop":
                                        e += a;
                                        break;
                                    case"dropRight":
                                        t -= a;
                                        break;
                                    case"take":
                                        t = Yn(t, e + a);
                                        break;
                                    case"takeRight":
                                        e = Xn(e, t - a)
                                }
                            }
                            return {start: e, end: t}
                        }(0, i, this.__views__), a = o.start, u = o.end, s = u - a, l = r ? u : a - 1,
                        c = this.__iteratees__, f = c.length, h = 0, p = Yn(s, this.__takeCount__);
                    if (!n || !r && i == s && p == s) return Hi(e, this.__actions__);
                    var d = [];
                    e:for (; s-- && h < p;) {
                        for (var v = -1, g = e[l += t]; ++v < f;) {
                            var m = c[v], y = m.iteratee, _ = m.type, b = y(g);
                            if (_ == I) g = b; else if (!b) {
                                if (_ == R) continue e;
                                break e
                            }
                        }
                        d[h++] = g
                    }
                    return d
                },pr.prototype.at = Ha,pr.prototype.chain = function () {
                    return Ma(this)
                },pr.prototype.commit = function () {
                    return new gr(this.value(), this.__chain__)
                },pr.prototype.next = function () {
                    this.__values__ === o && (this.__values__ = Mu(this.value()));
                    var e = this.__index__ >= this.__values__.length;
                    return {done: e, value: e ? o : this.__values__[this.__index__++]}
                },pr.prototype.plant = function (e) {
                    for (var t, n = this; n instanceof vr;) {
                        var r = ha(n);
                        r.__index__ = 0, r.__values__ = o, t ? i.__wrapped__ = r : t = r;
                        var i = r;
                        n = n.__wrapped__
                    }
                    return i.__wrapped__ = e, t
                },pr.prototype.reverse = function () {
                    var e = this.__wrapped__;
                    if (e instanceof mr) {
                        var t = e;
                        return this.__actions__.length && (t = new mr(this)), (t = t.reverse()).__actions__.push({
                            func: Ba,
                            args: [Da],
                            thisArg: o
                        }), new gr(t, this.__chain__)
                    }
                    return this.thru(Da)
                },pr.prototype.toJSON = pr.prototype.valueOf = pr.prototype.value = function () {
                    return Hi(this.__wrapped__, this.__actions__)
                },pr.prototype.first = pr.prototype.head,Ut && (pr.prototype[Ut] = function () {
                    return this
                }),pr
            }();
            Lt._ = kn, (i = function () {
                return kn
            }.call(t, n, t, r)) === o || (r.exports = i)
        }).call(this)
    }).call(this, n(1), n(16)(e))
}, function (e, t) {
    e.exports = function (e) {
        return e.webpackPolyfill || (e.deprecate = function () {
        }, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0, get: function () {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}, function (e, t, n) {
    !function (e, t, n) {
        "use strict";

        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function i(e, t, n) {
            return t && r(e.prototype, t), n && r(e, n), e
        }

        function o(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function a(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}, r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function (t) {
                    o(e, t, n[t])
                })
            }
            return e
        }

        t = t && t.hasOwnProperty("default") ? t.default : t, n = n && n.hasOwnProperty("default") ? n.default : n;
        var u = "transitionend";

        function s(e) {
            var n = this, r = !1;
            return t(this).one(l.TRANSITION_END, function () {
                r = !0
            }), setTimeout(function () {
                r || l.triggerTransitionEnd(n)
            }, e), this
        }

        var l = {
            TRANSITION_END: "bsTransitionEnd", getUID: function (e) {
                do {
                    e += ~~(1e6 * Math.random())
                } while (document.getElementById(e));
                return e
            }, getSelectorFromElement: function (e) {
                var t = e.getAttribute("data-target");
                if (!t || "#" === t) {
                    var n = e.getAttribute("href");
                    t = n && "#" !== n ? n.trim() : ""
                }
                try {
                    return document.querySelector(t) ? t : null
                } catch (e) {
                    return null
                }
            }, getTransitionDurationFromElement: function (e) {
                if (!e) return 0;
                var n = t(e).css("transition-duration"), r = t(e).css("transition-delay"), i = parseFloat(n),
                    o = parseFloat(r);
                return i || o ? (n = n.split(",")[0], r = r.split(",")[0], 1e3 * (parseFloat(n) + parseFloat(r))) : 0
            }, reflow: function (e) {
                return e.offsetHeight
            }, triggerTransitionEnd: function (e) {
                t(e).trigger(u)
            }, supportsTransitionEnd: function () {
                return Boolean(u)
            }, isElement: function (e) {
                return (e[0] || e).nodeType
            }, typeCheckConfig: function (e, t, n) {
                for (var r in n) if (Object.prototype.hasOwnProperty.call(n, r)) {
                    var i = n[r], o = t[r],
                        a = o && l.isElement(o) ? "element" : (u = o, {}.toString.call(u).match(/\s([a-z]+)/i)[1].toLowerCase());
                    if (!new RegExp(i).test(a)) throw new Error(e.toUpperCase() + ': Option "' + r + '" provided type "' + a + '" but expected type "' + i + '".')
                }
                var u
            }, findShadowRoot: function (e) {
                if (!document.documentElement.attachShadow) return null;
                if ("function" == typeof e.getRootNode) {
                    var t = e.getRootNode();
                    return t instanceof ShadowRoot ? t : null
                }
                return e instanceof ShadowRoot ? e : e.parentNode ? l.findShadowRoot(e.parentNode) : null
            }
        };
        t.fn.emulateTransitionEnd = s, t.event.special[l.TRANSITION_END] = {
            bindType: u,
            delegateType: u,
            handle: function (e) {
                if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
        };
        var c = t.fn.alert,
            f = {CLOSE: "close.bs.alert", CLOSED: "closed.bs.alert", CLICK_DATA_API: "click.bs.alert.data-api"},
            h = "alert", p = "fade", d = "show", v = function () {
                function e(e) {
                    this._element = e
                }

                var n = e.prototype;
                return n.close = function (e) {
                    var t = this._element;
                    e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
                }, n.dispose = function () {
                    t.removeData(this._element, "bs.alert"), this._element = null
                }, n._getRootElement = function (e) {
                    var n = l.getSelectorFromElement(e), r = !1;
                    return n && (r = document.querySelector(n)), r || (r = t(e).closest("." + h)[0]), r
                }, n._triggerCloseEvent = function (e) {
                    var n = t.Event(f.CLOSE);
                    return t(e).trigger(n), n
                }, n._removeElement = function (e) {
                    var n = this;
                    if (t(e).removeClass(d), t(e).hasClass(p)) {
                        var r = l.getTransitionDurationFromElement(e);
                        t(e).one(l.TRANSITION_END, function (t) {
                            return n._destroyElement(e, t)
                        }).emulateTransitionEnd(r)
                    } else this._destroyElement(e)
                }, n._destroyElement = function (e) {
                    t(e).detach().trigger(f.CLOSED).remove()
                }, e._jQueryInterface = function (n) {
                    return this.each(function () {
                        var r = t(this), i = r.data("bs.alert");
                        i || (i = new e(this), r.data("bs.alert", i)), "close" === n && i[n](this)
                    })
                }, e._handleDismiss = function (e) {
                    return function (t) {
                        t && t.preventDefault(), e.close(this)
                    }
                }, i(e, null, [{
                    key: "VERSION", get: function () {
                        return "4.3.1"
                    }
                }]), e
            }();
        t(document).on(f.CLICK_DATA_API, '[data-dismiss="alert"]', v._handleDismiss(new v)), t.fn.alert = v._jQueryInterface, t.fn.alert.Constructor = v, t.fn.alert.noConflict = function () {
            return t.fn.alert = c, v._jQueryInterface
        };
        var g = t.fn.button, m = "active", y = "btn", _ = "focus", b = '[data-toggle^="button"]',
            E = '[data-toggle="buttons"]', w = 'input:not([type="hidden"])', T = ".active", x = ".btn", S = {
                CLICK_DATA_API: "click.bs.button.data-api",
                FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api"
            }, A = function () {
                function e(e) {
                    this._element = e
                }

                var n = e.prototype;
                return n.toggle = function () {
                    var e = !0, n = !0, r = t(this._element).closest(E)[0];
                    if (r) {
                        var i = this._element.querySelector(w);
                        if (i) {
                            if ("radio" === i.type) if (i.checked && this._element.classList.contains(m)) e = !1; else {
                                var o = r.querySelector(T);
                                o && t(o).removeClass(m)
                            }
                            if (e) {
                                if (i.hasAttribute("disabled") || r.hasAttribute("disabled") || i.classList.contains("disabled") || r.classList.contains("disabled")) return;
                                i.checked = !this._element.classList.contains(m), t(i).trigger("change")
                            }
                            i.focus(), n = !1
                        }
                    }
                    n && this._element.setAttribute("aria-pressed", !this._element.classList.contains(m)), e && t(this._element).toggleClass(m)
                }, n.dispose = function () {
                    t.removeData(this._element, "bs.button"), this._element = null
                }, e._jQueryInterface = function (n) {
                    return this.each(function () {
                        var r = t(this).data("bs.button");
                        r || (r = new e(this), t(this).data("bs.button", r)), "toggle" === n && r[n]()
                    })
                }, i(e, null, [{
                    key: "VERSION", get: function () {
                        return "4.3.1"
                    }
                }]), e
            }();
        t(document).on(S.CLICK_DATA_API, b, function (e) {
            e.preventDefault();
            var n = e.target;
            t(n).hasClass(y) || (n = t(n).closest(x)), A._jQueryInterface.call(t(n), "toggle")
        }).on(S.FOCUS_BLUR_DATA_API, b, function (e) {
            var n = t(e.target).closest(x)[0];
            t(n).toggleClass(_, /^focus(in)?$/.test(e.type))
        }), t.fn.button = A._jQueryInterface, t.fn.button.Constructor = A, t.fn.button.noConflict = function () {
            return t.fn.button = g, A._jQueryInterface
        };
        var D = "carousel", C = ".bs.carousel", N = t.fn[D],
            O = {interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0}, R = {
                interval: "(number|boolean)",
                keyboard: "boolean",
                slide: "(boolean|string)",
                pause: "(string|boolean)",
                wrap: "boolean",
                touch: "boolean"
            }, I = "next", L = "prev", k = "left", j = "right", P = {
                SLIDE: "slide.bs.carousel",
                SLID: "slid.bs.carousel",
                KEYDOWN: "keydown.bs.carousel",
                MOUSEENTER: "mouseenter.bs.carousel",
                MOUSELEAVE: "mouseleave.bs.carousel",
                TOUCHSTART: "touchstart.bs.carousel",
                TOUCHMOVE: "touchmove.bs.carousel",
                TOUCHEND: "touchend.bs.carousel",
                POINTERDOWN: "pointerdown.bs.carousel",
                POINTERUP: "pointerup.bs.carousel",
                DRAG_START: "dragstart.bs.carousel",
                LOAD_DATA_API: "load.bs.carousel.data-api",
                CLICK_DATA_API: "click.bs.carousel.data-api"
            }, F = "carousel", U = "active", M = "slide", B = "carousel-item-right", H = "carousel-item-left",
            q = "carousel-item-next", W = "carousel-item-prev", z = "pointer-event", X = {
                ACTIVE: ".active",
                ACTIVE_ITEM: ".active.carousel-item",
                ITEM: ".carousel-item",
                ITEM_IMG: ".carousel-item img",
                NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
                INDICATORS: ".carousel-indicators",
                DATA_SLIDE: "[data-slide], [data-slide-to]",
                DATA_RIDE: '[data-ride="carousel"]'
            }, Y = {TOUCH: "touch", PEN: "pen"}, V = function () {
                function e(e, t) {
                    this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(X.INDICATORS), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
                }

                var n = e.prototype;
                return n.next = function () {
                    this._isSliding || this._slide(I)
                }, n.nextWhenVisible = function () {
                    !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
                }, n.prev = function () {
                    this._isSliding || this._slide(L)
                }, n.pause = function (e) {
                    e || (this._isPaused = !0), this._element.querySelector(X.NEXT_PREV) && (l.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                }, n.cycle = function (e) {
                    e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                }, n.to = function (e) {
                    var n = this;
                    this._activeElement = this._element.querySelector(X.ACTIVE_ITEM);
                    var r = this._getItemIndex(this._activeElement);
                    if (!(e > this._items.length - 1 || e < 0)) if (this._isSliding) t(this._element).one(P.SLID, function () {
                        return n.to(e)
                    }); else {
                        if (r === e) return this.pause(), void this.cycle();
                        var i = e > r ? I : L;
                        this._slide(i, this._items[e])
                    }
                }, n.dispose = function () {
                    t(this._element).off(C), t.removeData(this._element, "bs.carousel"), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                }, n._getConfig = function (e) {
                    return e = a({}, O, e), l.typeCheckConfig(D, e, R), e
                }, n._handleSwipe = function () {
                    var e = Math.abs(this.touchDeltaX);
                    if (!(e <= 40)) {
                        var t = e / this.touchDeltaX;
                        t > 0 && this.prev(), t < 0 && this.next()
                    }
                }, n._addEventListeners = function () {
                    var e = this;
                    this._config.keyboard && t(this._element).on(P.KEYDOWN, function (t) {
                        return e._keydown(t)
                    }), "hover" === this._config.pause && t(this._element).on(P.MOUSEENTER, function (t) {
                        return e.pause(t)
                    }).on(P.MOUSELEAVE, function (t) {
                        return e.cycle(t)
                    }), this._config.touch && this._addTouchEventListeners()
                }, n._addTouchEventListeners = function () {
                    var e = this;
                    if (this._touchSupported) {
                        var n = function (t) {
                            e._pointerEvent && Y[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX)
                        }, r = function (t) {
                            e._pointerEvent && Y[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
                                return e.cycle(t)
                            }, 500 + e._config.interval))
                        };
                        t(this._element.querySelectorAll(X.ITEM_IMG)).on(P.DRAG_START, function (e) {
                            return e.preventDefault()
                        }), this._pointerEvent ? (t(this._element).on(P.POINTERDOWN, function (e) {
                            return n(e)
                        }), t(this._element).on(P.POINTERUP, function (e) {
                            return r(e)
                        }), this._element.classList.add(z)) : (t(this._element).on(P.TOUCHSTART, function (e) {
                            return n(e)
                        }), t(this._element).on(P.TOUCHMOVE, function (t) {
                            return function (t) {
                                t.originalEvent.touches && t.originalEvent.touches.length > 1 ? e.touchDeltaX = 0 : e.touchDeltaX = t.originalEvent.touches[0].clientX - e.touchStartX
                            }(t)
                        }), t(this._element).on(P.TOUCHEND, function (e) {
                            return r(e)
                        }))
                    }
                }, n._keydown = function (e) {
                    if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                        case 37:
                            e.preventDefault(), this.prev();
                            break;
                        case 39:
                            e.preventDefault(), this.next()
                    }
                }, n._getItemIndex = function (e) {
                    return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(X.ITEM)) : [], this._items.indexOf(e)
                }, n._getItemByDirection = function (e, t) {
                    var n = e === I, r = e === L, i = this._getItemIndex(t), o = this._items.length - 1;
                    if ((r && 0 === i || n && i === o) && !this._config.wrap) return t;
                    var a = (i + (e === L ? -1 : 1)) % this._items.length;
                    return -1 === a ? this._items[this._items.length - 1] : this._items[a]
                }, n._triggerSlideEvent = function (e, n) {
                    var r = this._getItemIndex(e), i = this._getItemIndex(this._element.querySelector(X.ACTIVE_ITEM)),
                        o = t.Event(P.SLIDE, {relatedTarget: e, direction: n, from: i, to: r});
                    return t(this._element).trigger(o), o
                }, n._setActiveIndicatorElement = function (e) {
                    if (this._indicatorsElement) {
                        var n = [].slice.call(this._indicatorsElement.querySelectorAll(X.ACTIVE));
                        t(n).removeClass(U);
                        var r = this._indicatorsElement.children[this._getItemIndex(e)];
                        r && t(r).addClass(U)
                    }
                }, n._slide = function (e, n) {
                    var r, i, o, a = this, u = this._element.querySelector(X.ACTIVE_ITEM), s = this._getItemIndex(u),
                        c = n || u && this._getItemByDirection(e, u), f = this._getItemIndex(c),
                        h = Boolean(this._interval);
                    if (e === I ? (r = H, i = q, o = k) : (r = B, i = W, o = j), c && t(c).hasClass(U)) this._isSliding = !1; else if (!this._triggerSlideEvent(c, o).isDefaultPrevented() && u && c) {
                        this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(c);
                        var p = t.Event(P.SLID, {relatedTarget: c, direction: o, from: s, to: f});
                        if (t(this._element).hasClass(M)) {
                            t(c).addClass(i), l.reflow(c), t(u).addClass(r), t(c).addClass(r);
                            var d = parseInt(c.getAttribute("data-interval"), 10);
                            d ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = d) : this._config.interval = this._config.defaultInterval || this._config.interval;
                            var v = l.getTransitionDurationFromElement(u);
                            t(u).one(l.TRANSITION_END, function () {
                                t(c).removeClass(r + " " + i).addClass(U), t(u).removeClass(U + " " + i + " " + r), a._isSliding = !1, setTimeout(function () {
                                    return t(a._element).trigger(p)
                                }, 0)
                            }).emulateTransitionEnd(v)
                        } else t(u).removeClass(U), t(c).addClass(U), this._isSliding = !1, t(this._element).trigger(p);
                        h && this.cycle()
                    }
                }, e._jQueryInterface = function (n) {
                    return this.each(function () {
                        var r = t(this).data("bs.carousel"), i = a({}, O, t(this).data());
                        "object" == typeof n && (i = a({}, i, n));
                        var o = "string" == typeof n ? n : i.slide;
                        if (r || (r = new e(this, i), t(this).data("bs.carousel", r)), "number" == typeof n) r.to(n); else if ("string" == typeof o) {
                            if (void 0 === r[o]) throw new TypeError('No method named "' + o + '"');
                            r[o]()
                        } else i.interval && i.ride && (r.pause(), r.cycle())
                    })
                }, e._dataApiClickHandler = function (n) {
                    var r = l.getSelectorFromElement(this);
                    if (r) {
                        var i = t(r)[0];
                        if (i && t(i).hasClass(F)) {
                            var o = a({}, t(i).data(), t(this).data()), u = this.getAttribute("data-slide-to");
                            u && (o.interval = !1), e._jQueryInterface.call(t(i), o), u && t(i).data("bs.carousel").to(u), n.preventDefault()
                        }
                    }
                }, i(e, null, [{
                    key: "VERSION", get: function () {
                        return "4.3.1"
                    }
                }, {
                    key: "Default", get: function () {
                        return O
                    }
                }]), e
            }();
        t(document).on(P.CLICK_DATA_API, X.DATA_SLIDE, V._dataApiClickHandler), t(window).on(P.LOAD_DATA_API, function () {
            for (var e = [].slice.call(document.querySelectorAll(X.DATA_RIDE)), n = 0, r = e.length; n < r; n++) {
                var i = t(e[n]);
                V._jQueryInterface.call(i, i.data())
            }
        }), t.fn[D] = V._jQueryInterface, t.fn[D].Constructor = V, t.fn[D].noConflict = function () {
            return t.fn[D] = N, V._jQueryInterface
        };
        var G = "collapse", $ = t.fn[G], K = {toggle: !0, parent: ""},
            Q = {toggle: "boolean", parent: "(string|element)"}, J = {
                SHOW: "show.bs.collapse",
                SHOWN: "shown.bs.collapse",
                HIDE: "hide.bs.collapse",
                HIDDEN: "hidden.bs.collapse",
                CLICK_DATA_API: "click.bs.collapse.data-api"
            }, Z = "show", ee = "collapse", te = "collapsing", ne = "collapsed", re = "width", ie = "height",
            oe = {ACTIVES: ".show, .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]'}, ae = function () {
                function e(e, t) {
                    this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                    for (var n = [].slice.call(document.querySelectorAll(oe.DATA_TOGGLE)), r = 0, i = n.length; r < i; r++) {
                        var o = n[r], a = l.getSelectorFromElement(o),
                            u = [].slice.call(document.querySelectorAll(a)).filter(function (t) {
                                return t === e
                            });
                        null !== a && u.length > 0 && (this._selector = a, this._triggerArray.push(o))
                    }
                    this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                }

                var n = e.prototype;
                return n.toggle = function () {
                    t(this._element).hasClass(Z) ? this.hide() : this.show()
                }, n.show = function () {
                    var n, r, i = this;
                    if (!(this._isTransitioning || t(this._element).hasClass(Z) || (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(oe.ACTIVES)).filter(function (e) {
                        return "string" == typeof i._config.parent ? e.getAttribute("data-parent") === i._config.parent : e.classList.contains(ee)
                    })).length && (n = null), n && (r = t(n).not(this._selector).data("bs.collapse")) && r._isTransitioning))) {
                        var o = t.Event(J.SHOW);
                        if (t(this._element).trigger(o), !o.isDefaultPrevented()) {
                            n && (e._jQueryInterface.call(t(n).not(this._selector), "hide"), r || t(n).data("bs.collapse", null));
                            var a = this._getDimension();
                            t(this._element).removeClass(ee).addClass(te), this._element.style[a] = 0, this._triggerArray.length && t(this._triggerArray).removeClass(ne).attr("aria-expanded", !0), this.setTransitioning(!0);
                            var u = "scroll" + (a[0].toUpperCase() + a.slice(1)),
                                s = l.getTransitionDurationFromElement(this._element);
                            t(this._element).one(l.TRANSITION_END, function () {
                                t(i._element).removeClass(te).addClass(ee).addClass(Z), i._element.style[a] = "", i.setTransitioning(!1), t(i._element).trigger(J.SHOWN)
                            }).emulateTransitionEnd(s), this._element.style[a] = this._element[u] + "px"
                        }
                    }
                }, n.hide = function () {
                    var e = this;
                    if (!this._isTransitioning && t(this._element).hasClass(Z)) {
                        var n = t.Event(J.HIDE);
                        if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                            var r = this._getDimension();
                            this._element.style[r] = this._element.getBoundingClientRect()[r] + "px", l.reflow(this._element), t(this._element).addClass(te).removeClass(ee).removeClass(Z);
                            var i = this._triggerArray.length;
                            if (i > 0) for (var o = 0; o < i; o++) {
                                var a = this._triggerArray[o], u = l.getSelectorFromElement(a);
                                null !== u && (t([].slice.call(document.querySelectorAll(u))).hasClass(Z) || t(a).addClass(ne).attr("aria-expanded", !1))
                            }
                            this.setTransitioning(!0), this._element.style[r] = "";
                            var s = l.getTransitionDurationFromElement(this._element);
                            t(this._element).one(l.TRANSITION_END, function () {
                                e.setTransitioning(!1), t(e._element).removeClass(te).addClass(ee).trigger(J.HIDDEN)
                            }).emulateTransitionEnd(s)
                        }
                    }
                }, n.setTransitioning = function (e) {
                    this._isTransitioning = e
                }, n.dispose = function () {
                    t.removeData(this._element, "bs.collapse"), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                }, n._getConfig = function (e) {
                    return (e = a({}, K, e)).toggle = Boolean(e.toggle), l.typeCheckConfig(G, e, Q), e
                }, n._getDimension = function () {
                    return t(this._element).hasClass(re) ? re : ie
                }, n._getParent = function () {
                    var n, r = this;
                    l.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
                    var i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                        o = [].slice.call(n.querySelectorAll(i));
                    return t(o).each(function (t, n) {
                        r._addAriaAndCollapsedClass(e._getTargetFromElement(n), [n])
                    }), n
                }, n._addAriaAndCollapsedClass = function (e, n) {
                    var r = t(e).hasClass(Z);
                    n.length && t(n).toggleClass(ne, !r).attr("aria-expanded", r)
                }, e._getTargetFromElement = function (e) {
                    var t = l.getSelectorFromElement(e);
                    return t ? document.querySelector(t) : null
                }, e._jQueryInterface = function (n) {
                    return this.each(function () {
                        var r = t(this), i = r.data("bs.collapse"),
                            o = a({}, K, r.data(), "object" == typeof n && n ? n : {});
                        if (!i && o.toggle && /show|hide/.test(n) && (o.toggle = !1), i || (i = new e(this, o), r.data("bs.collapse", i)), "string" == typeof n) {
                            if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                            i[n]()
                        }
                    })
                }, i(e, null, [{
                    key: "VERSION", get: function () {
                        return "4.3.1"
                    }
                }, {
                    key: "Default", get: function () {
                        return K
                    }
                }]), e
            }();
        t(document).on(J.CLICK_DATA_API, oe.DATA_TOGGLE, function (e) {
            "A" === e.currentTarget.tagName && e.preventDefault();
            var n = t(this), r = l.getSelectorFromElement(this), i = [].slice.call(document.querySelectorAll(r));
            t(i).each(function () {
                var e = t(this), r = e.data("bs.collapse") ? "toggle" : n.data();
                ae._jQueryInterface.call(e, r)
            })
        }), t.fn[G] = ae._jQueryInterface, t.fn[G].Constructor = ae, t.fn[G].noConflict = function () {
            return t.fn[G] = $, ae._jQueryInterface
        };
        var ue = "dropdown", se = t.fn[ue], le = new RegExp("38|40|27"), ce = {
                HIDE: "hide.bs.dropdown",
                HIDDEN: "hidden.bs.dropdown",
                SHOW: "show.bs.dropdown",
                SHOWN: "shown.bs.dropdown",
                CLICK: "click.bs.dropdown",
                CLICK_DATA_API: "click.bs.dropdown.data-api",
                KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api",
                KEYUP_DATA_API: "keyup.bs.dropdown.data-api"
            }, fe = "disabled", he = "show", pe = "dropup", de = "dropright", ve = "dropleft", ge = "dropdown-menu-right",
            me = "position-static", ye = '[data-toggle="dropdown"]', _e = ".dropdown form", be = ".dropdown-menu",
            Ee = ".navbar-nav", we = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Te = "top-start",
            xe = "top-end", Se = "bottom-start", Ae = "bottom-end", De = "right-start", Ce = "left-start",
            Ne = {offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic"}, Oe = {
                offset: "(number|string|function)",
                flip: "boolean",
                boundary: "(string|element)",
                reference: "(string|element)",
                display: "string"
            }, Re = function () {
                function e(e, t) {
                    this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
                }

                var r = e.prototype;
                return r.toggle = function () {
                    if (!this._element.disabled && !t(this._element).hasClass(fe)) {
                        var r = e._getParentFromElement(this._element), i = t(this._menu).hasClass(he);
                        if (e._clearMenus(), !i) {
                            var o = {relatedTarget: this._element}, a = t.Event(ce.SHOW, o);
                            if (t(r).trigger(a), !a.isDefaultPrevented()) {
                                if (!this._inNavbar) {
                                    if (void 0 === n) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                                    var u = this._element;
                                    "parent" === this._config.reference ? u = r : l.isElement(this._config.reference) && (u = this._config.reference, void 0 !== this._config.reference.jquery && (u = this._config.reference[0])), "scrollParent" !== this._config.boundary && t(r).addClass(me), this._popper = new n(u, this._menu, this._getPopperConfig())
                                }
                                "ontouchstart" in document.documentElement && 0 === t(r).closest(Ee).length && t(document.body).children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(he), t(r).toggleClass(he).trigger(t.Event(ce.SHOWN, o))
                            }
                        }
                    }
                }, r.show = function () {
                    if (!(this._element.disabled || t(this._element).hasClass(fe) || t(this._menu).hasClass(he))) {
                        var n = {relatedTarget: this._element}, r = t.Event(ce.SHOW, n),
                            i = e._getParentFromElement(this._element);
                        t(i).trigger(r), r.isDefaultPrevented() || (t(this._menu).toggleClass(he), t(i).toggleClass(he).trigger(t.Event(ce.SHOWN, n)))
                    }
                }, r.hide = function () {
                    if (!this._element.disabled && !t(this._element).hasClass(fe) && t(this._menu).hasClass(he)) {
                        var n = {relatedTarget: this._element}, r = t.Event(ce.HIDE, n),
                            i = e._getParentFromElement(this._element);
                        t(i).trigger(r), r.isDefaultPrevented() || (t(this._menu).toggleClass(he), t(i).toggleClass(he).trigger(t.Event(ce.HIDDEN, n)))
                    }
                }, r.dispose = function () {
                    t.removeData(this._element, "bs.dropdown"), t(this._element).off(".bs.dropdown"), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
                }, r.update = function () {
                    this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
                }, r._addEventListeners = function () {
                    var e = this;
                    t(this._element).on(ce.CLICK, function (t) {
                        t.preventDefault(), t.stopPropagation(), e.toggle()
                    })
                }, r._getConfig = function (e) {
                    return e = a({}, this.constructor.Default, t(this._element).data(), e), l.typeCheckConfig(ue, e, this.constructor.DefaultType), e
                }, r._getMenuElement = function () {
                    if (!this._menu) {
                        var t = e._getParentFromElement(this._element);
                        t && (this._menu = t.querySelector(be))
                    }
                    return this._menu
                }, r._getPlacement = function () {
                    var e = t(this._element.parentNode), n = Se;
                    return e.hasClass(pe) ? (n = Te, t(this._menu).hasClass(ge) && (n = xe)) : e.hasClass(de) ? n = De : e.hasClass(ve) ? n = Ce : t(this._menu).hasClass(ge) && (n = Ae), n
                }, r._detectNavbar = function () {
                    return t(this._element).closest(".navbar").length > 0
                }, r._getOffset = function () {
                    var e = this, t = {};
                    return "function" == typeof this._config.offset ? t.fn = function (t) {
                        return t.offsets = a({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t
                    } : t.offset = this._config.offset, t
                }, r._getPopperConfig = function () {
                    var e = {
                        placement: this._getPlacement(),
                        modifiers: {
                            offset: this._getOffset(),
                            flip: {enabled: this._config.flip},
                            preventOverflow: {boundariesElement: this._config.boundary}
                        }
                    };
                    return "static" === this._config.display && (e.modifiers.applyStyle = {enabled: !1}), e
                }, e._jQueryInterface = function (n) {
                    return this.each(function () {
                        var r = t(this).data("bs.dropdown");
                        if (r || (r = new e(this, "object" == typeof n ? n : null), t(this).data("bs.dropdown", r)), "string" == typeof n) {
                            if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                            r[n]()
                        }
                    })
                }, e._clearMenus = function (n) {
                    if (!n || 3 !== n.which && ("keyup" !== n.type || 9 === n.which)) for (var r = [].slice.call(document.querySelectorAll(ye)), i = 0, o = r.length; i < o; i++) {
                        var a = e._getParentFromElement(r[i]), u = t(r[i]).data("bs.dropdown"), s = {relatedTarget: r[i]};
                        if (n && "click" === n.type && (s.clickEvent = n), u) {
                            var l = u._menu;
                            if (t(a).hasClass(he) && !(n && ("click" === n.type && /input|textarea/i.test(n.target.tagName) || "keyup" === n.type && 9 === n.which) && t.contains(a, n.target))) {
                                var c = t.Event(ce.HIDE, s);
                                t(a).trigger(c), c.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), r[i].setAttribute("aria-expanded", "false"), t(l).removeClass(he), t(a).removeClass(he).trigger(t.Event(ce.HIDDEN, s)))
                            }
                        }
                    }
                }, e._getParentFromElement = function (e) {
                    var t, n = l.getSelectorFromElement(e);
                    return n && (t = document.querySelector(n)), t || e.parentNode
                }, e._dataApiKeydownHandler = function (n) {
                    if ((/input|textarea/i.test(n.target.tagName) ? !(32 === n.which || 27 !== n.which && (40 !== n.which && 38 !== n.which || t(n.target).closest(be).length)) : le.test(n.which)) && (n.preventDefault(), n.stopPropagation(), !this.disabled && !t(this).hasClass(fe))) {
                        var r = e._getParentFromElement(this), i = t(r).hasClass(he);
                        if (i && (!i || 27 !== n.which && 32 !== n.which)) {
                            var o = [].slice.call(r.querySelectorAll(we));
                            if (0 !== o.length) {
                                var a = o.indexOf(n.target);
                                38 === n.which && a > 0 && a--, 40 === n.which && a < o.length - 1 && a++, a < 0 && (a = 0), o[a].focus()
                            }
                        } else {
                            if (27 === n.which) {
                                var u = r.querySelector(ye);
                                t(u).trigger("focus")
                            }
                            t(this).trigger("click")
                        }
                    }
                }, i(e, null, [{
                    key: "VERSION", get: function () {
                        return "4.3.1"
                    }
                }, {
                    key: "Default", get: function () {
                        return Ne
                    }
                }, {
                    key: "DefaultType", get: function () {
                        return Oe
                    }
                }]), e
            }();
        t(document).on(ce.KEYDOWN_DATA_API, ye, Re._dataApiKeydownHandler).on(ce.KEYDOWN_DATA_API, be, Re._dataApiKeydownHandler).on(ce.CLICK_DATA_API + " " + ce.KEYUP_DATA_API, Re._clearMenus).on(ce.CLICK_DATA_API, ye, function (e) {
            e.preventDefault(), e.stopPropagation(), Re._jQueryInterface.call(t(this), "toggle")
        }).on(ce.CLICK_DATA_API, _e, function (e) {
            e.stopPropagation()
        }), t.fn[ue] = Re._jQueryInterface, t.fn[ue].Constructor = Re, t.fn[ue].noConflict = function () {
            return t.fn[ue] = se, Re._jQueryInterface
        };
        var Ie = t.fn.modal, Le = {backdrop: !0, keyboard: !0, focus: !0, show: !0},
            ke = {backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean"}, je = {
                HIDE: "hide.bs.modal",
                HIDDEN: "hidden.bs.modal",
                SHOW: "show.bs.modal",
                SHOWN: "shown.bs.modal",
                FOCUSIN: "focusin.bs.modal",
                RESIZE: "resize.bs.modal",
                CLICK_DISMISS: "click.dismiss.bs.modal",
                KEYDOWN_DISMISS: "keydown.dismiss.bs.modal",
                MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal",
                MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal",
                CLICK_DATA_API: "click.bs.modal.data-api"
            }, Pe = "modal-dialog-scrollable", Fe = "modal-scrollbar-measure", Ue = "modal-backdrop", Me = "modal-open",
            Be = "fade", He = "show", qe = {
                DIALOG: ".modal-dialog",
                MODAL_BODY: ".modal-body",
                DATA_TOGGLE: '[data-toggle="modal"]',
                DATA_DISMISS: '[data-dismiss="modal"]',
                FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                STICKY_CONTENT: ".sticky-top"
            }, We = function () {
                function e(e, t) {
                    this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(qe.DIALOG), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
                }

                var n = e.prototype;
                return n.toggle = function (e) {
                    return this._isShown ? this.hide() : this.show(e)
                }, n.show = function (e) {
                    var n = this;
                    if (!this._isShown && !this._isTransitioning) {
                        t(this._element).hasClass(Be) && (this._isTransitioning = !0);
                        var r = t.Event(je.SHOW, {relatedTarget: e});
                        t(this._element).trigger(r), this._isShown || r.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(je.CLICK_DISMISS, qe.DATA_DISMISS, function (e) {
                            return n.hide(e)
                        }), t(this._dialog).on(je.MOUSEDOWN_DISMISS, function () {
                            t(n._element).one(je.MOUSEUP_DISMISS, function (e) {
                                t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
                            })
                        }), this._showBackdrop(function () {
                            return n._showElement(e)
                        }))
                    }
                }, n.hide = function (e) {
                    var n = this;
                    if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
                        var r = t.Event(je.HIDE);
                        if (t(this._element).trigger(r), this._isShown && !r.isDefaultPrevented()) {
                            this._isShown = !1;
                            var i = t(this._element).hasClass(Be);
                            if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(je.FOCUSIN), t(this._element).removeClass(He), t(this._element).off(je.CLICK_DISMISS), t(this._dialog).off(je.MOUSEDOWN_DISMISS), i) {
                                var o = l.getTransitionDurationFromElement(this._element);
                                t(this._element).one(l.TRANSITION_END, function (e) {
                                    return n._hideModal(e)
                                }).emulateTransitionEnd(o)
                            } else this._hideModal()
                        }
                    }
                }, n.dispose = function () {
                    [window, this._element, this._dialog].forEach(function (e) {
                        return t(e).off(".bs.modal")
                    }), t(document).off(je.FOCUSIN), t.removeData(this._element, "bs.modal"), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
                }, n.handleUpdate = function () {
                    this._adjustDialog()
                }, n._getConfig = function (e) {
                    return e = a({}, Le, e), l.typeCheckConfig("modal", e, ke), e
                }, n._showElement = function (e) {
                    var n = this, r = t(this._element).hasClass(Be);
                    this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), t(this._dialog).hasClass(Pe) ? this._dialog.querySelector(qe.MODAL_BODY).scrollTop = 0 : this._element.scrollTop = 0, r && l.reflow(this._element), t(this._element).addClass(He), this._config.focus && this._enforceFocus();
                    var i = t.Event(je.SHOWN, {relatedTarget: e}), o = function () {
                        n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(i)
                    };
                    if (r) {
                        var a = l.getTransitionDurationFromElement(this._dialog);
                        t(this._dialog).one(l.TRANSITION_END, o).emulateTransitionEnd(a)
                    } else o()
                }, n._enforceFocus = function () {
                    var e = this;
                    t(document).off(je.FOCUSIN).on(je.FOCUSIN, function (n) {
                        document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus()
                    })
                }, n._setEscapeEvent = function () {
                    var e = this;
                    this._isShown && this._config.keyboard ? t(this._element).on(je.KEYDOWN_DISMISS, function (t) {
                        27 === t.which && (t.preventDefault(), e.hide())
                    }) : this._isShown || t(this._element).off(je.KEYDOWN_DISMISS)
                }, n._setResizeEvent = function () {
                    var e = this;
                    this._isShown ? t(window).on(je.RESIZE, function (t) {
                        return e.handleUpdate(t)
                    }) : t(window).off(je.RESIZE)
                }, n._hideModal = function () {
                    var e = this;
                    this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function () {
                        t(document.body).removeClass(Me), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(je.HIDDEN)
                    })
                }, n._removeBackdrop = function () {
                    this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
                }, n._showBackdrop = function (e) {
                    var n = this, r = t(this._element).hasClass(Be) ? Be : "";
                    if (this._isShown && this._config.backdrop) {
                        if (this._backdrop = document.createElement("div"), this._backdrop.className = Ue, r && this._backdrop.classList.add(r), t(this._backdrop).appendTo(document.body), t(this._element).on(je.CLICK_DISMISS, function (e) {
                            n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                        }), r && l.reflow(this._backdrop), t(this._backdrop).addClass(He), !e) return;
                        if (!r) return void e();
                        var i = l.getTransitionDurationFromElement(this._backdrop);
                        t(this._backdrop).one(l.TRANSITION_END, e).emulateTransitionEnd(i)
                    } else if (!this._isShown && this._backdrop) {
                        t(this._backdrop).removeClass(He);
                        var o = function () {
                            n._removeBackdrop(), e && e()
                        };
                        if (t(this._element).hasClass(Be)) {
                            var a = l.getTransitionDurationFromElement(this._backdrop);
                            t(this._backdrop).one(l.TRANSITION_END, o).emulateTransitionEnd(a)
                        } else o()
                    } else e && e()
                }, n._adjustDialog = function () {
                    var e = this._element.scrollHeight > document.documentElement.clientHeight;
                    !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                }, n._resetAdjustments = function () {
                    this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                }, n._checkScrollbar = function () {
                    var e = document.body.getBoundingClientRect();
                    this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                }, n._setScrollbar = function () {
                    var e = this;
                    if (this._isBodyOverflowing) {
                        var n = [].slice.call(document.querySelectorAll(qe.FIXED_CONTENT)),
                            r = [].slice.call(document.querySelectorAll(qe.STICKY_CONTENT));
                        t(n).each(function (n, r) {
                            var i = r.style.paddingRight, o = t(r).css("padding-right");
                            t(r).data("padding-right", i).css("padding-right", parseFloat(o) + e._scrollbarWidth + "px")
                        }), t(r).each(function (n, r) {
                            var i = r.style.marginRight, o = t(r).css("margin-right");
                            t(r).data("margin-right", i).css("margin-right", parseFloat(o) - e._scrollbarWidth + "px")
                        });
                        var i = document.body.style.paddingRight, o = t(document.body).css("padding-right");
                        t(document.body).data("padding-right", i).css("padding-right", parseFloat(o) + this._scrollbarWidth + "px")
                    }
                    t(document.body).addClass(Me)
                }, n._resetScrollbar = function () {
                    var e = [].slice.call(document.querySelectorAll(qe.FIXED_CONTENT));
                    t(e).each(function (e, n) {
                        var r = t(n).data("padding-right");
                        t(n).removeData("padding-right"), n.style.paddingRight = r || ""
                    });
                    var n = [].slice.call(document.querySelectorAll("" + qe.STICKY_CONTENT));
                    t(n).each(function (e, n) {
                        var r = t(n).data("margin-right");
                        void 0 !== r && t(n).css("margin-right", r).removeData("margin-right")
                    });
                    var r = t(document.body).data("padding-right");
                    t(document.body).removeData("padding-right"), document.body.style.paddingRight = r || ""
                }, n._getScrollbarWidth = function () {
                    var e = document.createElement("div");
                    e.className = Fe, document.body.appendChild(e);
                    var t = e.getBoundingClientRect().width - e.clientWidth;
                    return document.body.removeChild(e), t
                }, e._jQueryInterface = function (n, r) {
                    return this.each(function () {
                        var i = t(this).data("bs.modal"), o = a({}, Le, t(this).data(), "object" == typeof n && n ? n : {});
                        if (i || (i = new e(this, o), t(this).data("bs.modal", i)), "string" == typeof n) {
                            if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                            i[n](r)
                        } else o.show && i.show(r)
                    })
                }, i(e, null, [{
                    key: "VERSION", get: function () {
                        return "4.3.1"
                    }
                }, {
                    key: "Default", get: function () {
                        return Le
                    }
                }]), e
            }();
        t(document).on(je.CLICK_DATA_API, qe.DATA_TOGGLE, function (e) {
            var n, r = this, i = l.getSelectorFromElement(this);
            i && (n = document.querySelector(i));
            var o = t(n).data("bs.modal") ? "toggle" : a({}, t(n).data(), t(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
            var u = t(n).one(je.SHOW, function (e) {
                e.isDefaultPrevented() || u.one(je.HIDDEN, function () {
                    t(r).is(":visible") && r.focus()
                })
            });
            We._jQueryInterface.call(t(n), o, this)
        }), t.fn.modal = We._jQueryInterface, t.fn.modal.Constructor = We, t.fn.modal.noConflict = function () {
            return t.fn.modal = Ie, We._jQueryInterface
        };
        var ze = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"], Xe = {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            }, Ye = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi,
            Ve = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;

        function Ge(e, t, n) {
            if (0 === e.length) return e;
            if (n && "function" == typeof n) return n(e);
            for (var r = (new window.DOMParser).parseFromString(e, "text/html"), i = Object.keys(t), o = [].slice.call(r.body.querySelectorAll("*")), a = function (e, n) {
                var r = o[e], a = r.nodeName.toLowerCase();
                if (-1 === i.indexOf(r.nodeName.toLowerCase())) return r.parentNode.removeChild(r), "continue";
                var u = [].slice.call(r.attributes), s = [].concat(t["*"] || [], t[a] || []);
                u.forEach(function (e) {
                    (function (e, t) {
                        var n = e.nodeName.toLowerCase();
                        if (-1 !== t.indexOf(n)) return -1 === ze.indexOf(n) || Boolean(e.nodeValue.match(Ye) || e.nodeValue.match(Ve));
                        for (var r = t.filter(function (e) {
                            return e instanceof RegExp
                        }), i = 0, o = r.length; i < o; i++) if (n.match(r[i])) return !0;
                        return !1
                    })(e, s) || r.removeAttribute(e.nodeName)
                })
            }, u = 0, s = o.length; u < s; u++) a(u);
            return r.body.innerHTML
        }

        var $e = "tooltip", Ke = t.fn.tooltip, Qe = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
            Je = ["sanitize", "whiteList", "sanitizeFn"], Ze = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "(number|string|function)",
                container: "(string|element|boolean)",
                fallbackPlacement: "(string|array)",
                boundary: "(string|element)",
                sanitize: "boolean",
                sanitizeFn: "(null|function)",
                whiteList: "object"
            }, et = {AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left"}, tt = {
                animation: !0,
                template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                selector: !1,
                placement: "top",
                offset: 0,
                container: !1,
                fallbackPlacement: "flip",
                boundary: "scrollParent",
                sanitize: !0,
                sanitizeFn: null,
                whiteList: Xe
            }, nt = "show", rt = "out", it = {
                HIDE: "hide.bs.tooltip",
                HIDDEN: "hidden.bs.tooltip",
                SHOW: "show.bs.tooltip",
                SHOWN: "shown.bs.tooltip",
                INSERTED: "inserted.bs.tooltip",
                CLICK: "click.bs.tooltip",
                FOCUSIN: "focusin.bs.tooltip",
                FOCUSOUT: "focusout.bs.tooltip",
                MOUSEENTER: "mouseenter.bs.tooltip",
                MOUSELEAVE: "mouseleave.bs.tooltip"
            }, ot = "fade", at = "show", ut = ".tooltip-inner", st = ".arrow", lt = "hover", ct = "focus", ft = "click",
            ht = "manual", pt = function () {
                function e(e, t) {
                    if (void 0 === n) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                    this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
                }

                var r = e.prototype;
                return r.enable = function () {
                    this._isEnabled = !0
                }, r.disable = function () {
                    this._isEnabled = !1
                }, r.toggleEnabled = function () {
                    this._isEnabled = !this._isEnabled
                }, r.toggle = function (e) {
                    if (this._isEnabled) if (e) {
                        var n = this.constructor.DATA_KEY, r = t(e.currentTarget).data(n);
                        r || (r = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, r)), r._activeTrigger.click = !r._activeTrigger.click, r._isWithActiveTrigger() ? r._enter(null, r) : r._leave(null, r)
                    } else {
                        if (t(this.getTipElement()).hasClass(at)) return void this._leave(null, this);
                        this._enter(null, this)
                    }
                }, r.dispose = function () {
                    clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
                }, r.show = function () {
                    var e = this;
                    if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
                    var r = t.Event(this.constructor.Event.SHOW);
                    if (this.isWithContent() && this._isEnabled) {
                        t(this.element).trigger(r);
                        var i = l.findShadowRoot(this.element),
                            o = t.contains(null !== i ? i : this.element.ownerDocument.documentElement, this.element);
                        if (r.isDefaultPrevented() || !o) return;
                        var a = this.getTipElement(), u = l.getUID(this.constructor.NAME);
                        a.setAttribute("id", u), this.element.setAttribute("aria-describedby", u), this.setContent(), this.config.animation && t(a).addClass(ot);
                        var s = "function" == typeof this.config.placement ? this.config.placement.call(this, a, this.element) : this.config.placement,
                            c = this._getAttachment(s);
                        this.addAttachmentClass(c);
                        var f = this._getContainer();
                        t(a).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(a).appendTo(f), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, a, {
                            placement: c,
                            modifiers: {
                                offset: this._getOffset(),
                                flip: {behavior: this.config.fallbackPlacement},
                                arrow: {element: st},
                                preventOverflow: {boundariesElement: this.config.boundary}
                            },
                            onCreate: function (t) {
                                t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                            },
                            onUpdate: function (t) {
                                return e._handlePopperPlacementChange(t)
                            }
                        }), t(a).addClass(at), "ontouchstart" in document.documentElement && t(document.body).children().on("mouseover", null, t.noop);
                        var h = function () {
                            e.config.animation && e._fixTransition();
                            var n = e._hoverState;
                            e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), n === rt && e._leave(null, e)
                        };
                        if (t(this.tip).hasClass(ot)) {
                            var p = l.getTransitionDurationFromElement(this.tip);
                            t(this.tip).one(l.TRANSITION_END, h).emulateTransitionEnd(p)
                        } else h()
                    }
                }, r.hide = function (e) {
                    var n = this, r = this.getTipElement(), i = t.Event(this.constructor.Event.HIDE), o = function () {
                        n._hoverState !== nt && r.parentNode && r.parentNode.removeChild(r), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), e && e()
                    };
                    if (t(this.element).trigger(i), !i.isDefaultPrevented()) {
                        if (t(r).removeClass(at), "ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), this._activeTrigger[ft] = !1, this._activeTrigger[ct] = !1, this._activeTrigger[lt] = !1, t(this.tip).hasClass(ot)) {
                            var a = l.getTransitionDurationFromElement(r);
                            t(r).one(l.TRANSITION_END, o).emulateTransitionEnd(a)
                        } else o();
                        this._hoverState = ""
                    }
                }, r.update = function () {
                    null !== this._popper && this._popper.scheduleUpdate()
                }, r.isWithContent = function () {
                    return Boolean(this.getTitle())
                }, r.addAttachmentClass = function (e) {
                    t(this.getTipElement()).addClass("bs-tooltip-" + e)
                }, r.getTipElement = function () {
                    return this.tip = this.tip || t(this.config.template)[0], this.tip
                }, r.setContent = function () {
                    var e = this.getTipElement();
                    this.setElementContent(t(e.querySelectorAll(ut)), this.getTitle()), t(e).removeClass(ot + " " + at)
                }, r.setElementContent = function (e, n) {
                    "object" != typeof n || !n.nodeType && !n.jquery ? this.config.html ? (this.config.sanitize && (n = Ge(n, this.config.whiteList, this.config.sanitizeFn)), e.html(n)) : e.text(n) : this.config.html ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text())
                }, r.getTitle = function () {
                    var e = this.element.getAttribute("data-original-title");
                    return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
                }, r._getOffset = function () {
                    var e = this, t = {};
                    return "function" == typeof this.config.offset ? t.fn = function (t) {
                        return t.offsets = a({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t
                    } : t.offset = this.config.offset, t
                }, r._getContainer = function () {
                    return !1 === this.config.container ? document.body : l.isElement(this.config.container) ? t(this.config.container) : t(document).find(this.config.container)
                }, r._getAttachment = function (e) {
                    return et[e.toUpperCase()]
                }, r._setListeners = function () {
                    var e = this;
                    this.config.trigger.split(" ").forEach(function (n) {
                        if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) {
                            return e.toggle(t)
                        }); else if (n !== ht) {
                            var r = n === lt ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                                i = n === lt ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                            t(e.element).on(r, e.config.selector, function (t) {
                                return e._enter(t)
                            }).on(i, e.config.selector, function (t) {
                                return e._leave(t)
                            })
                        }
                    }), t(this.element).closest(".modal").on("hide.bs.modal", function () {
                        e.element && e.hide()
                    }), this.config.selector ? this.config = a({}, this.config, {
                        trigger: "manual",
                        selector: ""
                    }) : this._fixTitle()
                }, r._fixTitle = function () {
                    var e = typeof this.element.getAttribute("data-original-title");
                    (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                }, r._enter = function (e, n) {
                    var r = this.constructor.DATA_KEY;
                    (n = n || t(e.currentTarget).data(r)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(r, n)), e && (n._activeTrigger["focusin" === e.type ? ct : lt] = !0), t(n.getTipElement()).hasClass(at) || n._hoverState === nt ? n._hoverState = nt : (clearTimeout(n._timeout), n._hoverState = nt, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function () {
                        n._hoverState === nt && n.show()
                    }, n.config.delay.show) : n.show())
                }, r._leave = function (e, n) {
                    var r = this.constructor.DATA_KEY;
                    (n = n || t(e.currentTarget).data(r)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(r, n)), e && (n._activeTrigger["focusout" === e.type ? ct : lt] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = rt, n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function () {
                        n._hoverState === rt && n.hide()
                    }, n.config.delay.hide) : n.hide())
                }, r._isWithActiveTrigger = function () {
                    for (var e in this._activeTrigger) if (this._activeTrigger[e]) return !0;
                    return !1
                }, r._getConfig = function (e) {
                    var n = t(this.element).data();
                    return Object.keys(n).forEach(function (e) {
                        -1 !== Je.indexOf(e) && delete n[e]
                    }), "number" == typeof (e = a({}, this.constructor.Default, n, "object" == typeof e && e ? e : {})).delay && (e.delay = {
                        show: e.delay,
                        hide: e.delay
                    }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), l.typeCheckConfig($e, e, this.constructor.DefaultType), e.sanitize && (e.template = Ge(e.template, e.whiteList, e.sanitizeFn)), e
                }, r._getDelegateConfig = function () {
                    var e = {};
                    if (this.config) for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                    return e
                }, r._cleanTipClass = function () {
                    var e = t(this.getTipElement()), n = e.attr("class").match(Qe);
                    null !== n && n.length && e.removeClass(n.join(""))
                }, r._handlePopperPlacementChange = function (e) {
                    var t = e.instance;
                    this.tip = t.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
                }, r._fixTransition = function () {
                    var e = this.getTipElement(), n = this.config.animation;
                    null === e.getAttribute("x-placement") && (t(e).removeClass(ot), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
                }, e._jQueryInterface = function (n) {
                    return this.each(function () {
                        var r = t(this).data("bs.tooltip"), i = "object" == typeof n && n;
                        if ((r || !/dispose|hide/.test(n)) && (r || (r = new e(this, i), t(this).data("bs.tooltip", r)), "string" == typeof n)) {
                            if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                            r[n]()
                        }
                    })
                }, i(e, null, [{
                    key: "VERSION", get: function () {
                        return "4.3.1"
                    }
                }, {
                    key: "Default", get: function () {
                        return tt
                    }
                }, {
                    key: "NAME", get: function () {
                        return $e
                    }
                }, {
                    key: "DATA_KEY", get: function () {
                        return "bs.tooltip"
                    }
                }, {
                    key: "Event", get: function () {
                        return it
                    }
                }, {
                    key: "EVENT_KEY", get: function () {
                        return ".bs.tooltip"
                    }
                }, {
                    key: "DefaultType", get: function () {
                        return Ze
                    }
                }]), e
            }();
        t.fn.tooltip = pt._jQueryInterface, t.fn.tooltip.Constructor = pt, t.fn.tooltip.noConflict = function () {
            return t.fn.tooltip = Ke, pt._jQueryInterface
        };
        var dt = "popover", vt = t.fn.popover, gt = new RegExp("(^|\\s)bs-popover\\S+", "g"), mt = a({}, pt.Default, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
            }), yt = a({}, pt.DefaultType, {content: "(string|element|function)"}), _t = "fade", bt = "show",
            Et = ".popover-header", wt = ".popover-body", Tt = {
                HIDE: "hide.bs.popover",
                HIDDEN: "hidden.bs.popover",
                SHOW: "show.bs.popover",
                SHOWN: "shown.bs.popover",
                INSERTED: "inserted.bs.popover",
                CLICK: "click.bs.popover",
                FOCUSIN: "focusin.bs.popover",
                FOCUSOUT: "focusout.bs.popover",
                MOUSEENTER: "mouseenter.bs.popover",
                MOUSELEAVE: "mouseleave.bs.popover"
            }, xt = function (e) {
                var n, r;

                function o() {
                    return e.apply(this, arguments) || this
                }

                r = e, (n = o).prototype = Object.create(r.prototype), n.prototype.constructor = n, n.__proto__ = r;
                var a = o.prototype;
                return a.isWithContent = function () {
                    return this.getTitle() || this._getContent()
                }, a.addAttachmentClass = function (e) {
                    t(this.getTipElement()).addClass("bs-popover-" + e)
                }, a.getTipElement = function () {
                    return this.tip = this.tip || t(this.config.template)[0], this.tip
                }, a.setContent = function () {
                    var e = t(this.getTipElement());
                    this.setElementContent(e.find(Et), this.getTitle());
                    var n = this._getContent();
                    "function" == typeof n && (n = n.call(this.element)), this.setElementContent(e.find(wt), n), e.removeClass(_t + " " + bt)
                }, a._getContent = function () {
                    return this.element.getAttribute("data-content") || this.config.content
                }, a._cleanTipClass = function () {
                    var e = t(this.getTipElement()), n = e.attr("class").match(gt);
                    null !== n && n.length > 0 && e.removeClass(n.join(""))
                }, o._jQueryInterface = function (e) {
                    return this.each(function () {
                        var n = t(this).data("bs.popover"), r = "object" == typeof e ? e : null;
                        if ((n || !/dispose|hide/.test(e)) && (n || (n = new o(this, r), t(this).data("bs.popover", n)), "string" == typeof e)) {
                            if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                            n[e]()
                        }
                    })
                }, i(o, null, [{
                    key: "VERSION", get: function () {
                        return "4.3.1"
                    }
                }, {
                    key: "Default", get: function () {
                        return mt
                    }
                }, {
                    key: "NAME", get: function () {
                        return dt
                    }
                }, {
                    key: "DATA_KEY", get: function () {
                        return "bs.popover"
                    }
                }, {
                    key: "Event", get: function () {
                        return Tt
                    }
                }, {
                    key: "EVENT_KEY", get: function () {
                        return ".bs.popover"
                    }
                }, {
                    key: "DefaultType", get: function () {
                        return yt
                    }
                }]), o
            }(pt);
        t.fn.popover = xt._jQueryInterface, t.fn.popover.Constructor = xt, t.fn.popover.noConflict = function () {
            return t.fn.popover = vt, xt._jQueryInterface
        };
        var St = "scrollspy", At = t.fn[St], Dt = {offset: 10, method: "auto", target: ""},
            Ct = {offset: "number", method: "string", target: "(string|element)"}, Nt = {
                ACTIVATE: "activate.bs.scrollspy",
                SCROLL: "scroll.bs.scrollspy",
                LOAD_DATA_API: "load.bs.scrollspy.data-api"
            }, Ot = "dropdown-item", Rt = "active", It = {
                DATA_SPY: '[data-spy="scroll"]',
                ACTIVE: ".active",
                NAV_LIST_GROUP: ".nav, .list-group",
                NAV_LINKS: ".nav-link",
                NAV_ITEMS: ".nav-item",
                LIST_ITEMS: ".list-group-item",
                DROPDOWN: ".dropdown",
                DROPDOWN_ITEMS: ".dropdown-item",
                DROPDOWN_TOGGLE: ".dropdown-toggle"
            }, Lt = "offset", kt = "position", jt = function () {
                function e(e, n) {
                    var r = this;
                    this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " " + It.NAV_LINKS + "," + this._config.target + " " + It.LIST_ITEMS + "," + this._config.target + " " + It.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(Nt.SCROLL, function (e) {
                        return r._process(e)
                    }), this.refresh(), this._process()
                }

                var n = e.prototype;
                return n.refresh = function () {
                    var e = this, n = this._scrollElement === this._scrollElement.window ? Lt : kt,
                        r = "auto" === this._config.method ? n : this._config.method,
                        i = r === kt ? this._getScrollTop() : 0;
                    this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (e) {
                        var n, o = l.getSelectorFromElement(e);
                        if (o && (n = document.querySelector(o)), n) {
                            var a = n.getBoundingClientRect();
                            if (a.width || a.height) return [t(n)[r]().top + i, o]
                        }
                        return null
                    }).filter(function (e) {
                        return e
                    }).sort(function (e, t) {
                        return e[0] - t[0]
                    }).forEach(function (t) {
                        e._offsets.push(t[0]), e._targets.push(t[1])
                    })
                }, n.dispose = function () {
                    t.removeData(this._element, "bs.scrollspy"), t(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                }, n._getConfig = function (e) {
                    if ("string" != typeof (e = a({}, Dt, "object" == typeof e && e ? e : {})).target) {
                        var n = t(e.target).attr("id");
                        n || (n = l.getUID(St), t(e.target).attr("id", n)), e.target = "#" + n
                    }
                    return l.typeCheckConfig(St, e, Ct), e
                }, n._getScrollTop = function () {
                    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                }, n._getScrollHeight = function () {
                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                }, n._getOffsetHeight = function () {
                    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                }, n._process = function () {
                    var e = this._getScrollTop() + this._config.offset, t = this._getScrollHeight(),
                        n = this._config.offset + t - this._getOffsetHeight();
                    if (this._scrollHeight !== t && this.refresh(), e >= n) {
                        var r = this._targets[this._targets.length - 1];
                        this._activeTarget !== r && this._activate(r)
                    } else {
                        if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                        for (var i = this._offsets.length; i--;) this._activeTarget !== this._targets[i] && e >= this._offsets[i] && (void 0 === this._offsets[i + 1] || e < this._offsets[i + 1]) && this._activate(this._targets[i])
                    }
                }, n._activate = function (e) {
                    this._activeTarget = e, this._clear();
                    var n = this._selector.split(",").map(function (t) {
                        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                    }), r = t([].slice.call(document.querySelectorAll(n.join(","))));
                    r.hasClass(Ot) ? (r.closest(It.DROPDOWN).find(It.DROPDOWN_TOGGLE).addClass(Rt), r.addClass(Rt)) : (r.addClass(Rt), r.parents(It.NAV_LIST_GROUP).prev(It.NAV_LINKS + ", " + It.LIST_ITEMS).addClass(Rt), r.parents(It.NAV_LIST_GROUP).prev(It.NAV_ITEMS).children(It.NAV_LINKS).addClass(Rt)), t(this._scrollElement).trigger(Nt.ACTIVATE, {relatedTarget: e})
                }, n._clear = function () {
                    [].slice.call(document.querySelectorAll(this._selector)).filter(function (e) {
                        return e.classList.contains(Rt)
                    }).forEach(function (e) {
                        return e.classList.remove(Rt)
                    })
                }, e._jQueryInterface = function (n) {
                    return this.each(function () {
                        var r = t(this).data("bs.scrollspy");
                        if (r || (r = new e(this, "object" == typeof n && n), t(this).data("bs.scrollspy", r)), "string" == typeof n) {
                            if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                            r[n]()
                        }
                    })
                }, i(e, null, [{
                    key: "VERSION", get: function () {
                        return "4.3.1"
                    }
                }, {
                    key: "Default", get: function () {
                        return Dt
                    }
                }]), e
            }();
        t(window).on(Nt.LOAD_DATA_API, function () {
            for (var e = [].slice.call(document.querySelectorAll(It.DATA_SPY)), n = e.length; n--;) {
                var r = t(e[n]);
                jt._jQueryInterface.call(r, r.data())
            }
        }), t.fn[St] = jt._jQueryInterface, t.fn[St].Constructor = jt, t.fn[St].noConflict = function () {
            return t.fn[St] = At, jt._jQueryInterface
        };
        var Pt = t.fn.tab, Ft = {
                HIDE: "hide.bs.tab",
                HIDDEN: "hidden.bs.tab",
                SHOW: "show.bs.tab",
                SHOWN: "shown.bs.tab",
                CLICK_DATA_API: "click.bs.tab.data-api"
            }, Ut = "dropdown-menu", Mt = "active", Bt = "disabled", Ht = "fade", qt = "show", Wt = ".dropdown",
            zt = ".nav, .list-group", Xt = ".active", Yt = "> li > .active",
            Vt = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', Gt = ".dropdown-toggle",
            $t = "> .dropdown-menu .active", Kt = function () {
                function e(e) {
                    this._element = e
                }

                var n = e.prototype;
                return n.show = function () {
                    var e = this;
                    if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(Mt) || t(this._element).hasClass(Bt))) {
                        var n, r, i = t(this._element).closest(zt)[0], o = l.getSelectorFromElement(this._element);
                        if (i) {
                            var a = "UL" === i.nodeName || "OL" === i.nodeName ? Yt : Xt;
                            r = (r = t.makeArray(t(i).find(a)))[r.length - 1]
                        }
                        var u = t.Event(Ft.HIDE, {relatedTarget: this._element}), s = t.Event(Ft.SHOW, {relatedTarget: r});
                        if (r && t(r).trigger(u), t(this._element).trigger(s), !s.isDefaultPrevented() && !u.isDefaultPrevented()) {
                            o && (n = document.querySelector(o)), this._activate(this._element, i);
                            var c = function () {
                                var n = t.Event(Ft.HIDDEN, {relatedTarget: e._element}),
                                    i = t.Event(Ft.SHOWN, {relatedTarget: r});
                                t(r).trigger(n), t(e._element).trigger(i)
                            };
                            n ? this._activate(n, n.parentNode, c) : c()
                        }
                    }
                }, n.dispose = function () {
                    t.removeData(this._element, "bs.tab"), this._element = null
                }, n._activate = function (e, n, r) {
                    var i = this,
                        o = (!n || "UL" !== n.nodeName && "OL" !== n.nodeName ? t(n).children(Xt) : t(n).find(Yt))[0],
                        a = r && o && t(o).hasClass(Ht), u = function () {
                            return i._transitionComplete(e, o, r)
                        };
                    if (o && a) {
                        var s = l.getTransitionDurationFromElement(o);
                        t(o).removeClass(qt).one(l.TRANSITION_END, u).emulateTransitionEnd(s)
                    } else u()
                }, n._transitionComplete = function (e, n, r) {
                    if (n) {
                        t(n).removeClass(Mt);
                        var i = t(n.parentNode).find($t)[0];
                        i && t(i).removeClass(Mt), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                    }
                    if (t(e).addClass(Mt), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), l.reflow(e), e.classList.contains(Ht) && e.classList.add(qt), e.parentNode && t(e.parentNode).hasClass(Ut)) {
                        var o = t(e).closest(Wt)[0];
                        if (o) {
                            var a = [].slice.call(o.querySelectorAll(Gt));
                            t(a).addClass(Mt)
                        }
                        e.setAttribute("aria-expanded", !0)
                    }
                    r && r()
                }, e._jQueryInterface = function (n) {
                    return this.each(function () {
                        var r = t(this), i = r.data("bs.tab");
                        if (i || (i = new e(this), r.data("bs.tab", i)), "string" == typeof n) {
                            if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                            i[n]()
                        }
                    })
                }, i(e, null, [{
                    key: "VERSION", get: function () {
                        return "4.3.1"
                    }
                }]), e
            }();
        t(document).on(Ft.CLICK_DATA_API, Vt, function (e) {
            e.preventDefault(), Kt._jQueryInterface.call(t(this), "show")
        }), t.fn.tab = Kt._jQueryInterface, t.fn.tab.Constructor = Kt, t.fn.tab.noConflict = function () {
            return t.fn.tab = Pt, Kt._jQueryInterface
        };
        var Qt = t.fn.toast, Jt = {
                CLICK_DISMISS: "click.dismiss.bs.toast",
                HIDE: "hide.bs.toast",
                HIDDEN: "hidden.bs.toast",
                SHOW: "show.bs.toast",
                SHOWN: "shown.bs.toast"
            }, Zt = "fade", en = "hide", tn = "show", nn = "showing",
            rn = {animation: "boolean", autohide: "boolean", delay: "number"},
            on = {animation: !0, autohide: !0, delay: 500}, an = '[data-dismiss="toast"]', un = function () {
                function e(e, t) {
                    this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners()
                }

                var n = e.prototype;
                return n.show = function () {
                    var e = this;
                    t(this._element).trigger(Jt.SHOW), this._config.animation && this._element.classList.add(Zt);
                    var n = function () {
                        e._element.classList.remove(nn), e._element.classList.add(tn), t(e._element).trigger(Jt.SHOWN), e._config.autohide && e.hide()
                    };
                    if (this._element.classList.remove(en), this._element.classList.add(nn), this._config.animation) {
                        var r = l.getTransitionDurationFromElement(this._element);
                        t(this._element).one(l.TRANSITION_END, n).emulateTransitionEnd(r)
                    } else n()
                }, n.hide = function (e) {
                    var n = this;
                    this._element.classList.contains(tn) && (t(this._element).trigger(Jt.HIDE), e ? this._close() : this._timeout = setTimeout(function () {
                        n._close()
                    }, this._config.delay))
                }, n.dispose = function () {
                    clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(tn) && this._element.classList.remove(tn), t(this._element).off(Jt.CLICK_DISMISS), t.removeData(this._element, "bs.toast"), this._element = null, this._config = null
                }, n._getConfig = function (e) {
                    return e = a({}, on, t(this._element).data(), "object" == typeof e && e ? e : {}), l.typeCheckConfig("toast", e, this.constructor.DefaultType), e
                }, n._setListeners = function () {
                    var e = this;
                    t(this._element).on(Jt.CLICK_DISMISS, an, function () {
                        return e.hide(!0)
                    })
                }, n._close = function () {
                    var e = this, n = function () {
                        e._element.classList.add(en), t(e._element).trigger(Jt.HIDDEN)
                    };
                    if (this._element.classList.remove(tn), this._config.animation) {
                        var r = l.getTransitionDurationFromElement(this._element);
                        t(this._element).one(l.TRANSITION_END, n).emulateTransitionEnd(r)
                    } else n()
                }, e._jQueryInterface = function (n) {
                    return this.each(function () {
                        var r = t(this), i = r.data("bs.toast");
                        if (i || (i = new e(this, "object" == typeof n && n), r.data("bs.toast", i)), "string" == typeof n) {
                            if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                            i[n](this)
                        }
                    })
                }, i(e, null, [{
                    key: "VERSION", get: function () {
                        return "4.3.1"
                    }
                }, {
                    key: "DefaultType", get: function () {
                        return rn
                    }
                }, {
                    key: "Default", get: function () {
                        return on
                    }
                }]), e
            }();
        t.fn.toast = un._jQueryInterface, t.fn.toast.Constructor = un, t.fn.toast.noConflict = function () {
            return t.fn.toast = Qt, un._jQueryInterface
        }, function () {
            if (void 0 === t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var e = t.fn.jquery.split(" ")[0].split(".");
            if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }(), e.Util = l, e.Alert = v, e.Button = A, e.Carousel = V, e.Collapse = ae, e.Dropdown = Re, e.Modal = We, e.Popover = xt, e.Scrollspy = jt, e.Tab = Kt, e.Toast = un, e.Tooltip = pt, Object.defineProperty(e, "__esModule", {value: !0})
    }(t, n(3), n(2))
}, function (e, t, n) {
    e.exports = n(19)
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(4), o = n(21), a = n(10);

    function u(e) {
        var t = new o(e), n = i(o.prototype.request, t);
        return r.extend(n, o.prototype, t), r.extend(n, t), n
    }

    var s = u(n(7));
    s.Axios = o, s.create = function (e) {
        return u(a(s.defaults, e))
    }, s.Cancel = n(11), s.CancelToken = n(34), s.isCancel = n(6), s.all = function (e) {
        return Promise.all(e)
    }, s.spread = n(35), e.exports = s, e.exports.default = s
}, function (e, t) {
    e.exports = function (e) {
        return null != e && null != e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
    }
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(5), o = n(22), a = n(23), u = n(10);

    function s(e) {
        this.defaults = e, this.interceptors = {request: new o, response: new o}
    }

    s.prototype.request = function (e) {
        "string" == typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {}, (e = u(this.defaults, e)).method = e.method ? e.method.toLowerCase() : "get";
        var t = [a, void 0], n = Promise.resolve(e);
        for (this.interceptors.request.forEach(function (e) {
            t.unshift(e.fulfilled, e.rejected)
        }), this.interceptors.response.forEach(function (e) {
            t.push(e.fulfilled, e.rejected)
        }); t.length;) n = n.then(t.shift(), t.shift());
        return n
    }, s.prototype.getUri = function (e) {
        return e = u(this.defaults, e), i(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
    }, r.forEach(["delete", "get", "head", "options"], function (e) {
        s.prototype[e] = function (t, n) {
            return this.request(r.merge(n || {}, {method: e, url: t}))
        }
    }), r.forEach(["post", "put", "patch"], function (e) {
        s.prototype[e] = function (t, n, i) {
            return this.request(r.merge(i || {}, {method: e, url: t, data: n}))
        }
    }), e.exports = s
}, function (e, t, n) {
    "use strict";
    var r = n(0);

    function i() {
        this.handlers = []
    }

    i.prototype.use = function (e, t) {
        return this.handlers.push({fulfilled: e, rejected: t}), this.handlers.length - 1
    }, i.prototype.eject = function (e) {
        this.handlers[e] && (this.handlers[e] = null)
    }, i.prototype.forEach = function (e) {
        r.forEach(this.handlers, function (t) {
            null !== t && e(t)
        })
    }, e.exports = i
}, function (e, t, n) {
    "use strict";
    var r = n(0), i = n(24), o = n(6), a = n(7), u = n(32), s = n(33);

    function l(e) {
        e.cancelToken && e.cancelToken.throwIfRequested()
    }

    e.exports = function (e) {
        return l(e), e.baseURL && !u(e.url) && (e.url = s(e.baseURL, e.url)), e.headers = e.headers || {}, e.data = i(e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (t) {
            delete e.headers[t]
        }), (e.adapter || a.adapter)(e).then(function (t) {
            return l(e), t.data = i(t.data, t.headers, e.transformResponse), t
        }, function (t) {
            return o(t) || (l(e), t && t.response && (t.response.data = i(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
        })
    }
}, function (e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = function (e, t, n) {
        return r.forEach(n, function (n) {
            e = n(e, t)
        }), e
    }
}, function (e, t) {
    var n, r, i = e.exports = {};

    function o() {
        throw new Error("setTimeout has not been defined")
    }

    function a() {
        throw new Error("clearTimeout has not been defined")
    }

    function u(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }

    !function () {
        try {
            n = "function" == typeof setTimeout ? setTimeout : o
        } catch (e) {
            n = o
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (e) {
            r = a
        }
    }();
    var s, l = [], c = !1, f = -1;

    function h() {
        c && s && (c = !1, s.length ? l = s.concat(l) : f = -1, l.length && p())
    }

    function p() {
        if (!c) {
            var e = u(h);
            c = !0;
            for (var t = l.length; t;) {
                for (s = l, l = []; ++f < t;) s && s[f].run();
                f = -1, t = l.length
            }
            s = null, c = !1, function (e) {
                if (r === clearTimeout) return clearTimeout(e);
                if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                try {
                    r(e)
                } catch (t) {
                    try {
                        return r.call(null, e)
                    } catch (t) {
                        return r.call(this, e)
                    }
                }
            }(e)
        }
    }

    function d(e, t) {
        this.fun = e, this.array = t
    }

    function v() {
    }

    i.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        l.push(new d(e, t)), 1 !== l.length || c || u(p)
    }, d.prototype.run = function () {
        this.fun.apply(null, this.array)
    }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = v, i.addListener = v, i.once = v, i.off = v, i.removeListener = v, i.removeAllListeners = v, i.emit = v, i.prependListener = v, i.prependOnceListener = v, i.listeners = function (e) {
        return []
    }, i.binding = function (e) {
        throw new Error("process.binding is not supported")
    }, i.cwd = function () {
        return "/"
    }, i.chdir = function (e) {
        throw new Error("process.chdir is not supported")
    }, i.umask = function () {
        return 0
    }
}, function (e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = function (e, t) {
        r.forEach(e, function (n, r) {
            r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r])
        })
    }
}, function (e, t, n) {
    "use strict";
    var r = n(9);
    e.exports = function (e, t, n) {
        var i = n.config.validateStatus;
        !i || i(n.status) ? e(n) : t(r("Request failed with status code " + n.status, n.config, null, n.request, n))
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function (e, t, n, r, i) {
        return e.config = t, n && (e.code = n), e.request = r, e.response = i, e.isAxiosError = !0, e.toJSON = function () {
            return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: this.config,
                code: this.code
            }
        }, e
    }
}, function (e, t, n) {
    "use strict";
    var r = n(0),
        i = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
    e.exports = function (e) {
        var t, n, o, a = {};
        return e ? (r.forEach(e.split("\n"), function (e) {
            if (o = e.indexOf(":"), t = r.trim(e.substr(0, o)).toLowerCase(), n = r.trim(e.substr(o + 1)), t) {
                if (a[t] && i.indexOf(t) >= 0) return;
                a[t] = "set-cookie" === t ? (a[t] ? a[t] : []).concat([n]) : a[t] ? a[t] + ", " + n : n
            }
        }), a) : a
    }
}, function (e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = r.isStandardBrowserEnv() ? function () {
        var e, t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");

        function i(e) {
            var r = e;
            return t && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, "") : "",
                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                hostname: n.hostname,
                port: n.port,
                pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
            }
        }

        return e = i(window.location.href), function (t) {
            var n = r.isString(t) ? i(t) : t;
            return n.protocol === e.protocol && n.host === e.host
        }
    }() : function () {
        return !0
    }
}, function (e, t, n) {
    "use strict";
    var r = n(0);
    e.exports = r.isStandardBrowserEnv() ? {
        write: function (e, t, n, i, o, a) {
            var u = [];
            u.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && u.push("expires=" + new Date(n).toGMTString()), r.isString(i) && u.push("path=" + i), r.isString(o) && u.push("domain=" + o), !0 === a && u.push("secure"), document.cookie = u.join("; ")
        }, read: function (e) {
            var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
            return t ? decodeURIComponent(t[3]) : null
        }, remove: function (e) {
            this.write(e, "", Date.now() - 864e5)
        }
    } : {
        write: function () {
        }, read: function () {
            return null
        }, remove: function () {
        }
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
    }
}, function (e, t, n) {
    "use strict";
    e.exports = function (e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
    }
}, function (e, t, n) {
    "use strict";
    var r = n(11);

    function i(e) {
        if ("function" != typeof e) throw new TypeError("executor must be a function.");
        var t;
        this.promise = new Promise(function (e) {
            t = e
        });
        var n = this;
        e(function (e) {
            n.reason || (n.reason = new r(e), t(n.reason))
        })
    }

    i.prototype.throwIfRequested = function () {
        if (this.reason) throw this.reason
    }, i.source = function () {
        var e;
        return {
            token: new i(function (t) {
                e = t
            }), cancel: e
        }
    }, e.exports = i
}, function (e, t, n) {
    "use strict";
    e.exports = function (e) {
        return function (t) {
            return e.apply(null, t)
        }
    }
}, function (e, t) {
}]);