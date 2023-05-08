/*! For license information please see main.bundle.js.LICENSE.txt */
(() => {
  "use strict";
  var t = {
      d: (e, i) => {
        for (var n in i)
          t.o(i, n) &&
            !t.o(e, n) &&
            Object.defineProperty(e, n, { enumerable: !0, get: i[n] });
      },
      o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
      r: (t) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      },
    },
    e = {};
  t.r(e),
    t.d(e, {
      afterMain: () => w,
      afterRead: () => b,
      afterWrite: () => T,
      applyStyles: () => D,
      arrow: () => G,
      auto: () => r,
      basePlacements: () => a,
      beforeMain: () => v,
      beforeRead: () => g,
      beforeWrite: () => E,
      bottom: () => n,
      clippingParents: () => h,
      computeStyles: () => et,
      createPopper: () => St,
      createPopperBase: () => Lt,
      createPopperLite: () => Dt,
      detectOverflow: () => gt,
      end: () => c,
      eventListeners: () => nt,
      flip: () => _t,
      hide: () => yt,
      left: () => o,
      main: () => y,
      modifierPhases: () => C,
      offset: () => wt,
      placements: () => m,
      popper: () => u,
      popperGenerator: () => kt,
      popperOffsets: () => Et,
      preventOverflow: () => At,
      read: () => _,
      reference: () => f,
      right: () => s,
      start: () => l,
      top: () => i,
      variationPlacements: () => p,
      viewport: () => d,
      write: () => A,
    });
  var i = "top",
    n = "bottom",
    s = "right",
    o = "left",
    r = "auto",
    a = [i, n, s, o],
    l = "start",
    c = "end",
    h = "clippingParents",
    d = "viewport",
    u = "popper",
    f = "reference",
    p = a.reduce(function (t, e) {
      return t.concat([e + "-" + l, e + "-" + c]);
    }, []),
    m = [].concat(a, [r]).reduce(function (t, e) {
      return t.concat([e, e + "-" + l, e + "-" + c]);
    }, []),
    g = "beforeRead",
    _ = "read",
    b = "afterRead",
    v = "beforeMain",
    y = "main",
    w = "afterMain",
    E = "beforeWrite",
    A = "write",
    T = "afterWrite",
    C = [g, _, b, v, y, w, E, A, T];
  function O(t) {
    return t ? (t.nodeName || "").toLowerCase() : null;
  }
  function x(t) {
    if (null == t) return window;
    if ("[object Window]" !== t.toString()) {
      var e = t.ownerDocument;
      return (e && e.defaultView) || window;
    }
    return t;
  }
  function k(t) {
    return t instanceof x(t).Element || t instanceof Element;
  }
  function L(t) {
    return t instanceof x(t).HTMLElement || t instanceof HTMLElement;
  }
  function S(t) {
    return (
      "undefined" != typeof ShadowRoot &&
      (t instanceof x(t).ShadowRoot || t instanceof ShadowRoot)
    );
  }
  const D = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function (t) {
      var e = t.state;
      Object.keys(e.elements).forEach(function (t) {
        var i = e.styles[t] || {},
          n = e.attributes[t] || {},
          s = e.elements[t];
        L(s) &&
          O(s) &&
          (Object.assign(s.style, i),
          Object.keys(n).forEach(function (t) {
            var e = n[t];
            !1 === e
              ? s.removeAttribute(t)
              : s.setAttribute(t, !0 === e ? "" : e);
          }));
      });
    },
    effect: function (t) {
      var e = t.state,
        i = {
          popper: {
            position: e.options.strategy,
            left: "0",
            top: "0",
            margin: "0",
          },
          arrow: { position: "absolute" },
          reference: {},
        };
      return (
        Object.assign(e.elements.popper.style, i.popper),
        (e.styles = i),
        e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
        function () {
          Object.keys(e.elements).forEach(function (t) {
            var n = e.elements[t],
              s = e.attributes[t] || {},
              o = Object.keys(
                e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]
              ).reduce(function (t, e) {
                return (t[e] = ""), t;
              }, {});
            L(n) &&
              O(n) &&
              (Object.assign(n.style, o),
              Object.keys(s).forEach(function (t) {
                n.removeAttribute(t);
              }));
          });
        }
      );
    },
    requires: ["computeStyles"],
  };
  function $(t) {
    return t.split("-")[0];
  }
  var I = Math.max,
    N = Math.min,
    P = Math.round;
  function M() {
    var t = navigator.userAgentData;
    return null != t && t.brands
      ? t.brands
          .map(function (t) {
            return t.brand + "/" + t.version;
          })
          .join(" ")
      : navigator.userAgent;
  }
  function j() {
    return !/^((?!chrome|android).)*safari/i.test(M());
  }
  function F(t, e, i) {
    void 0 === e && (e = !1), void 0 === i && (i = !1);
    var n = t.getBoundingClientRect(),
      s = 1,
      o = 1;
    e &&
      L(t) &&
      ((s = (t.offsetWidth > 0 && P(n.width) / t.offsetWidth) || 1),
      (o = (t.offsetHeight > 0 && P(n.height) / t.offsetHeight) || 1));
    var r = (k(t) ? x(t) : window).visualViewport,
      a = !j() && i,
      l = (n.left + (a && r ? r.offsetLeft : 0)) / s,
      c = (n.top + (a && r ? r.offsetTop : 0)) / o,
      h = n.width / s,
      d = n.height / o;
    return {
      width: h,
      height: d,
      top: c,
      right: l + h,
      bottom: c + d,
      left: l,
      x: l,
      y: c,
    };
  }
  function H(t) {
    var e = F(t),
      i = t.offsetWidth,
      n = t.offsetHeight;
    return (
      Math.abs(e.width - i) <= 1 && (i = e.width),
      Math.abs(e.height - n) <= 1 && (n = e.height),
      { x: t.offsetLeft, y: t.offsetTop, width: i, height: n }
    );
  }
  function B(t, e) {
    var i = e.getRootNode && e.getRootNode();
    if (t.contains(e)) return !0;
    if (i && S(i)) {
      var n = e;
      do {
        if (n && t.isSameNode(n)) return !0;
        n = n.parentNode || n.host;
      } while (n);
    }
    return !1;
  }
  function W(t) {
    return x(t).getComputedStyle(t);
  }
  function z(t) {
    return ["table", "td", "th"].indexOf(O(t)) >= 0;
  }
  function R(t) {
    return ((k(t) ? t.ownerDocument : t.document) || window.document)
      .documentElement;
  }
  function q(t) {
    return "html" === O(t)
      ? t
      : t.assignedSlot || t.parentNode || (S(t) ? t.host : null) || R(t);
  }
  function V(t) {
    return L(t) && "fixed" !== W(t).position ? t.offsetParent : null;
  }
  function K(t) {
    for (var e = x(t), i = V(t); i && z(i) && "static" === W(i).position; )
      i = V(i);
    return i &&
      ("html" === O(i) || ("body" === O(i) && "static" === W(i).position))
      ? e
      : i ||
          (function (t) {
            var e = /firefox/i.test(M());
            if (/Trident/i.test(M()) && L(t) && "fixed" === W(t).position)
              return null;
            var i = q(t);
            for (
              S(i) && (i = i.host);
              L(i) && ["html", "body"].indexOf(O(i)) < 0;

            ) {
              var n = W(i);
              if (
                "none" !== n.transform ||
                "none" !== n.perspective ||
                "paint" === n.contain ||
                -1 !== ["transform", "perspective"].indexOf(n.willChange) ||
                (e && "filter" === n.willChange) ||
                (e && n.filter && "none" !== n.filter)
              )
                return i;
              i = i.parentNode;
            }
            return null;
          })(t) ||
          e;
  }
  function Y(t) {
    return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
  }
  function Q(t, e, i) {
    return I(t, N(e, i));
  }
  function X(t) {
    return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t);
  }
  function U(t, e) {
    return e.reduce(function (e, i) {
      return (e[i] = t), e;
    }, {});
  }
  const G = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function (t) {
      var e,
        r = t.state,
        l = t.name,
        c = t.options,
        h = r.elements.arrow,
        d = r.modifiersData.popperOffsets,
        u = $(r.placement),
        f = Y(u),
        p = [o, s].indexOf(u) >= 0 ? "height" : "width";
      if (h && d) {
        var m = (function (t, e) {
            return X(
              "number" !=
                typeof (t =
                  "function" == typeof t
                    ? t(Object.assign({}, e.rects, { placement: e.placement }))
                    : t)
                ? t
                : U(t, a)
            );
          })(c.padding, r),
          g = H(h),
          _ = "y" === f ? i : o,
          b = "y" === f ? n : s,
          v =
            r.rects.reference[p] +
            r.rects.reference[f] -
            d[f] -
            r.rects.popper[p],
          y = d[f] - r.rects.reference[f],
          w = K(h),
          E = w ? ("y" === f ? w.clientHeight || 0 : w.clientWidth || 0) : 0,
          A = v / 2 - y / 2,
          T = m[_],
          C = E - g[p] - m[b],
          O = E / 2 - g[p] / 2 + A,
          x = Q(T, O, C),
          k = f;
        r.modifiersData[l] = (((e = {})[k] = x), (e.centerOffset = x - O), e);
      }
    },
    effect: function (t) {
      var e = t.state,
        i = t.options.element,
        n = void 0 === i ? "[data-popper-arrow]" : i;
      null != n &&
        ("string" != typeof n || (n = e.elements.popper.querySelector(n))) &&
        B(e.elements.popper, n) &&
        (e.elements.arrow = n);
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"],
  };
  function J(t) {
    return t.split("-")[1];
  }
  var Z = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function tt(t) {
    var e,
      r = t.popper,
      a = t.popperRect,
      l = t.placement,
      h = t.variation,
      d = t.offsets,
      u = t.position,
      f = t.gpuAcceleration,
      p = t.adaptive,
      m = t.roundOffsets,
      g = t.isFixed,
      _ = d.x,
      b = void 0 === _ ? 0 : _,
      v = d.y,
      y = void 0 === v ? 0 : v,
      w = "function" == typeof m ? m({ x: b, y }) : { x: b, y };
    (b = w.x), (y = w.y);
    var E = d.hasOwnProperty("x"),
      A = d.hasOwnProperty("y"),
      T = o,
      C = i,
      O = window;
    if (p) {
      var k = K(r),
        L = "clientHeight",
        S = "clientWidth";
      k === x(r) &&
        "static" !== W((k = R(r))).position &&
        "absolute" === u &&
        ((L = "scrollHeight"), (S = "scrollWidth")),
        (l === i || ((l === o || l === s) && h === c)) &&
          ((C = n),
          (y -=
            (g && k === O && O.visualViewport
              ? O.visualViewport.height
              : k[L]) - a.height),
          (y *= f ? 1 : -1)),
        (l !== o && ((l !== i && l !== n) || h !== c)) ||
          ((T = s),
          (b -=
            (g && k === O && O.visualViewport ? O.visualViewport.width : k[S]) -
            a.width),
          (b *= f ? 1 : -1));
    }
    var D,
      $ = Object.assign({ position: u }, p && Z),
      I =
        !0 === m
          ? (function (t) {
              var e = t.x,
                i = t.y,
                n = window.devicePixelRatio || 1;
              return { x: P(e * n) / n || 0, y: P(i * n) / n || 0 };
            })({ x: b, y })
          : { x: b, y };
    return (
      (b = I.x),
      (y = I.y),
      f
        ? Object.assign(
            {},
            $,
            (((D = {})[C] = A ? "0" : ""),
            (D[T] = E ? "0" : ""),
            (D.transform =
              (O.devicePixelRatio || 1) <= 1
                ? "translate(" + b + "px, " + y + "px)"
                : "translate3d(" + b + "px, " + y + "px, 0)"),
            D)
          )
        : Object.assign(
            {},
            $,
            (((e = {})[C] = A ? y + "px" : ""),
            (e[T] = E ? b + "px" : ""),
            (e.transform = ""),
            e)
          )
    );
  }
  const et = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: function (t) {
      var e = t.state,
        i = t.options,
        n = i.gpuAcceleration,
        s = void 0 === n || n,
        o = i.adaptive,
        r = void 0 === o || o,
        a = i.roundOffsets,
        l = void 0 === a || a,
        c = {
          placement: $(e.placement),
          variation: J(e.placement),
          popper: e.elements.popper,
          popperRect: e.rects.popper,
          gpuAcceleration: s,
          isFixed: "fixed" === e.options.strategy,
        };
      null != e.modifiersData.popperOffsets &&
        (e.styles.popper = Object.assign(
          {},
          e.styles.popper,
          tt(
            Object.assign({}, c, {
              offsets: e.modifiersData.popperOffsets,
              position: e.options.strategy,
              adaptive: r,
              roundOffsets: l,
            })
          )
        )),
        null != e.modifiersData.arrow &&
          (e.styles.arrow = Object.assign(
            {},
            e.styles.arrow,
            tt(
              Object.assign({}, c, {
                offsets: e.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: l,
              })
            )
          )),
        (e.attributes.popper = Object.assign({}, e.attributes.popper, {
          "data-popper-placement": e.placement,
        }));
    },
    data: {},
  };
  var it = { passive: !0 };
  const nt = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function () {},
    effect: function (t) {
      var e = t.state,
        i = t.instance,
        n = t.options,
        s = n.scroll,
        o = void 0 === s || s,
        r = n.resize,
        a = void 0 === r || r,
        l = x(e.elements.popper),
        c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
      return (
        o &&
          c.forEach(function (t) {
            t.addEventListener("scroll", i.update, it);
          }),
        a && l.addEventListener("resize", i.update, it),
        function () {
          o &&
            c.forEach(function (t) {
              t.removeEventListener("scroll", i.update, it);
            }),
            a && l.removeEventListener("resize", i.update, it);
        }
      );
    },
    data: {},
  };
  var st = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function ot(t) {
    return t.replace(/left|right|bottom|top/g, function (t) {
      return st[t];
    });
  }
  var rt = { start: "end", end: "start" };
  function at(t) {
    return t.replace(/start|end/g, function (t) {
      return rt[t];
    });
  }
  function lt(t) {
    var e = x(t);
    return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
  }
  function ct(t) {
    return F(R(t)).left + lt(t).scrollLeft;
  }
  function ht(t) {
    var e = W(t),
      i = e.overflow,
      n = e.overflowX,
      s = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(i + s + n);
  }
  function dt(t) {
    return ["html", "body", "#document"].indexOf(O(t)) >= 0
      ? t.ownerDocument.body
      : L(t) && ht(t)
      ? t
      : dt(q(t));
  }
  function ut(t, e) {
    var i;
    void 0 === e && (e = []);
    var n = dt(t),
      s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
      o = x(n),
      r = s ? [o].concat(o.visualViewport || [], ht(n) ? n : []) : n,
      a = e.concat(r);
    return s ? a : a.concat(ut(q(r)));
  }
  function ft(t) {
    return Object.assign({}, t, {
      left: t.x,
      top: t.y,
      right: t.x + t.width,
      bottom: t.y + t.height,
    });
  }
  function pt(t, e, i) {
    return e === d
      ? ft(
          (function (t, e) {
            var i = x(t),
              n = R(t),
              s = i.visualViewport,
              o = n.clientWidth,
              r = n.clientHeight,
              a = 0,
              l = 0;
            if (s) {
              (o = s.width), (r = s.height);
              var c = j();
              (c || (!c && "fixed" === e)) &&
                ((a = s.offsetLeft), (l = s.offsetTop));
            }
            return { width: o, height: r, x: a + ct(t), y: l };
          })(t, i)
        )
      : k(e)
      ? (function (t, e) {
          var i = F(t, !1, "fixed" === e);
          return (
            (i.top = i.top + t.clientTop),
            (i.left = i.left + t.clientLeft),
            (i.bottom = i.top + t.clientHeight),
            (i.right = i.left + t.clientWidth),
            (i.width = t.clientWidth),
            (i.height = t.clientHeight),
            (i.x = i.left),
            (i.y = i.top),
            i
          );
        })(e, i)
      : ft(
          (function (t) {
            var e,
              i = R(t),
              n = lt(t),
              s = null == (e = t.ownerDocument) ? void 0 : e.body,
              o = I(
                i.scrollWidth,
                i.clientWidth,
                s ? s.scrollWidth : 0,
                s ? s.clientWidth : 0
              ),
              r = I(
                i.scrollHeight,
                i.clientHeight,
                s ? s.scrollHeight : 0,
                s ? s.clientHeight : 0
              ),
              a = -n.scrollLeft + ct(t),
              l = -n.scrollTop;
            return (
              "rtl" === W(s || i).direction &&
                (a += I(i.clientWidth, s ? s.clientWidth : 0) - o),
              { width: o, height: r, x: a, y: l }
            );
          })(R(t))
        );
  }
  function mt(t) {
    var e,
      r = t.reference,
      a = t.element,
      h = t.placement,
      d = h ? $(h) : null,
      u = h ? J(h) : null,
      f = r.x + r.width / 2 - a.width / 2,
      p = r.y + r.height / 2 - a.height / 2;
    switch (d) {
      case i:
        e = { x: f, y: r.y - a.height };
        break;
      case n:
        e = { x: f, y: r.y + r.height };
        break;
      case s:
        e = { x: r.x + r.width, y: p };
        break;
      case o:
        e = { x: r.x - a.width, y: p };
        break;
      default:
        e = { x: r.x, y: r.y };
    }
    var m = d ? Y(d) : null;
    if (null != m) {
      var g = "y" === m ? "height" : "width";
      switch (u) {
        case l:
          e[m] = e[m] - (r[g] / 2 - a[g] / 2);
          break;
        case c:
          e[m] = e[m] + (r[g] / 2 - a[g] / 2);
      }
    }
    return e;
  }
  function gt(t, e) {
    void 0 === e && (e = {});
    var o = e,
      r = o.placement,
      l = void 0 === r ? t.placement : r,
      c = o.strategy,
      p = void 0 === c ? t.strategy : c,
      m = o.boundary,
      g = void 0 === m ? h : m,
      _ = o.rootBoundary,
      b = void 0 === _ ? d : _,
      v = o.elementContext,
      y = void 0 === v ? u : v,
      w = o.altBoundary,
      E = void 0 !== w && w,
      A = o.padding,
      T = void 0 === A ? 0 : A,
      C = X("number" != typeof T ? T : U(T, a)),
      x = y === u ? f : u,
      S = t.rects.popper,
      D = t.elements[E ? x : y],
      $ = (function (t, e, i, n) {
        var s =
            "clippingParents" === e
              ? (function (t) {
                  var e = ut(q(t)),
                    i =
                      ["absolute", "fixed"].indexOf(W(t).position) >= 0 && L(t)
                        ? K(t)
                        : t;
                  return k(i)
                    ? e.filter(function (t) {
                        return k(t) && B(t, i) && "body" !== O(t);
                      })
                    : [];
                })(t)
              : [].concat(e),
          o = [].concat(s, [i]),
          r = o[0],
          a = o.reduce(function (e, i) {
            var s = pt(t, i, n);
            return (
              (e.top = I(s.top, e.top)),
              (e.right = N(s.right, e.right)),
              (e.bottom = N(s.bottom, e.bottom)),
              (e.left = I(s.left, e.left)),
              e
            );
          }, pt(t, r, n));
        return (
          (a.width = a.right - a.left),
          (a.height = a.bottom - a.top),
          (a.x = a.left),
          (a.y = a.top),
          a
        );
      })(k(D) ? D : D.contextElement || R(t.elements.popper), g, b, p),
      P = F(t.elements.reference),
      M = mt({ reference: P, element: S, strategy: "absolute", placement: l }),
      j = ft(Object.assign({}, S, M)),
      H = y === u ? j : P,
      z = {
        top: $.top - H.top + C.top,
        bottom: H.bottom - $.bottom + C.bottom,
        left: $.left - H.left + C.left,
        right: H.right - $.right + C.right,
      },
      V = t.modifiersData.offset;
    if (y === u && V) {
      var Y = V[l];
      Object.keys(z).forEach(function (t) {
        var e = [s, n].indexOf(t) >= 0 ? 1 : -1,
          o = [i, n].indexOf(t) >= 0 ? "y" : "x";
        z[t] += Y[o] * e;
      });
    }
    return z;
  }
  const _t = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function (t) {
      var e = t.state,
        c = t.options,
        h = t.name;
      if (!e.modifiersData[h]._skip) {
        for (
          var d = c.mainAxis,
            u = void 0 === d || d,
            f = c.altAxis,
            g = void 0 === f || f,
            _ = c.fallbackPlacements,
            b = c.padding,
            v = c.boundary,
            y = c.rootBoundary,
            w = c.altBoundary,
            E = c.flipVariations,
            A = void 0 === E || E,
            T = c.allowedAutoPlacements,
            C = e.options.placement,
            O = $(C),
            x =
              _ ||
              (O !== C && A
                ? (function (t) {
                    if ($(t) === r) return [];
                    var e = ot(t);
                    return [at(t), e, at(e)];
                  })(C)
                : [ot(C)]),
            k = [C].concat(x).reduce(function (t, i) {
              return t.concat(
                $(i) === r
                  ? (function (t, e) {
                      void 0 === e && (e = {});
                      var i = e,
                        n = i.placement,
                        s = i.boundary,
                        o = i.rootBoundary,
                        r = i.padding,
                        l = i.flipVariations,
                        c = i.allowedAutoPlacements,
                        h = void 0 === c ? m : c,
                        d = J(n),
                        u = d
                          ? l
                            ? p
                            : p.filter(function (t) {
                                return J(t) === d;
                              })
                          : a,
                        f = u.filter(function (t) {
                          return h.indexOf(t) >= 0;
                        });
                      0 === f.length && (f = u);
                      var g = f.reduce(function (e, i) {
                        return (
                          (e[i] = gt(t, {
                            placement: i,
                            boundary: s,
                            rootBoundary: o,
                            padding: r,
                          })[$(i)]),
                          e
                        );
                      }, {});
                      return Object.keys(g).sort(function (t, e) {
                        return g[t] - g[e];
                      });
                    })(e, {
                      placement: i,
                      boundary: v,
                      rootBoundary: y,
                      padding: b,
                      flipVariations: A,
                      allowedAutoPlacements: T,
                    })
                  : i
              );
            }, []),
            L = e.rects.reference,
            S = e.rects.popper,
            D = new Map(),
            I = !0,
            N = k[0],
            P = 0;
          P < k.length;
          P++
        ) {
          var M = k[P],
            j = $(M),
            F = J(M) === l,
            H = [i, n].indexOf(j) >= 0,
            B = H ? "width" : "height",
            W = gt(e, {
              placement: M,
              boundary: v,
              rootBoundary: y,
              altBoundary: w,
              padding: b,
            }),
            z = H ? (F ? s : o) : F ? n : i;
          L[B] > S[B] && (z = ot(z));
          var R = ot(z),
            q = [];
          if (
            (u && q.push(W[j] <= 0),
            g && q.push(W[z] <= 0, W[R] <= 0),
            q.every(function (t) {
              return t;
            }))
          ) {
            (N = M), (I = !1);
            break;
          }
          D.set(M, q);
        }
        if (I)
          for (
            var V = function (t) {
                var e = k.find(function (e) {
                  var i = D.get(e);
                  if (i)
                    return i.slice(0, t).every(function (t) {
                      return t;
                    });
                });
                if (e) return (N = e), "break";
              },
              K = A ? 3 : 1;
            K > 0 && "break" !== V(K);
            K--
          );
        e.placement !== N &&
          ((e.modifiersData[h]._skip = !0), (e.placement = N), (e.reset = !0));
      }
    },
    requiresIfExists: ["offset"],
    data: { _skip: !1 },
  };
  function bt(t, e, i) {
    return (
      void 0 === i && (i = { x: 0, y: 0 }),
      {
        top: t.top - e.height - i.y,
        right: t.right - e.width + i.x,
        bottom: t.bottom - e.height + i.y,
        left: t.left - e.width - i.x,
      }
    );
  }
  function vt(t) {
    return [i, s, n, o].some(function (e) {
      return t[e] >= 0;
    });
  }
  const yt = {
      name: "hide",
      enabled: !0,
      phase: "main",
      requiresIfExists: ["preventOverflow"],
      fn: function (t) {
        var e = t.state,
          i = t.name,
          n = e.rects.reference,
          s = e.rects.popper,
          o = e.modifiersData.preventOverflow,
          r = gt(e, { elementContext: "reference" }),
          a = gt(e, { altBoundary: !0 }),
          l = bt(r, n),
          c = bt(a, s, o),
          h = vt(l),
          d = vt(c);
        (e.modifiersData[i] = {
          referenceClippingOffsets: l,
          popperEscapeOffsets: c,
          isReferenceHidden: h,
          hasPopperEscaped: d,
        }),
          (e.attributes.popper = Object.assign({}, e.attributes.popper, {
            "data-popper-reference-hidden": h,
            "data-popper-escaped": d,
          }));
      },
    },
    wt = {
      name: "offset",
      enabled: !0,
      phase: "main",
      requires: ["popperOffsets"],
      fn: function (t) {
        var e = t.state,
          n = t.options,
          r = t.name,
          a = n.offset,
          l = void 0 === a ? [0, 0] : a,
          c = m.reduce(function (t, n) {
            return (
              (t[n] = (function (t, e, n) {
                var r = $(t),
                  a = [o, i].indexOf(r) >= 0 ? -1 : 1,
                  l =
                    "function" == typeof n
                      ? n(Object.assign({}, e, { placement: t }))
                      : n,
                  c = l[0],
                  h = l[1];
                return (
                  (c = c || 0),
                  (h = (h || 0) * a),
                  [o, s].indexOf(r) >= 0 ? { x: h, y: c } : { x: c, y: h }
                );
              })(n, e.rects, l)),
              t
            );
          }, {}),
          h = c[e.placement],
          d = h.x,
          u = h.y;
        null != e.modifiersData.popperOffsets &&
          ((e.modifiersData.popperOffsets.x += d),
          (e.modifiersData.popperOffsets.y += u)),
          (e.modifiersData[r] = c);
      },
    },
    Et = {
      name: "popperOffsets",
      enabled: !0,
      phase: "read",
      fn: function (t) {
        var e = t.state,
          i = t.name;
        e.modifiersData[i] = mt({
          reference: e.rects.reference,
          element: e.rects.popper,
          strategy: "absolute",
          placement: e.placement,
        });
      },
      data: {},
    },
    At = {
      name: "preventOverflow",
      enabled: !0,
      phase: "main",
      fn: function (t) {
        var e = t.state,
          r = t.options,
          a = t.name,
          c = r.mainAxis,
          h = void 0 === c || c,
          d = r.altAxis,
          u = void 0 !== d && d,
          f = r.boundary,
          p = r.rootBoundary,
          m = r.altBoundary,
          g = r.padding,
          _ = r.tether,
          b = void 0 === _ || _,
          v = r.tetherOffset,
          y = void 0 === v ? 0 : v,
          w = gt(e, {
            boundary: f,
            rootBoundary: p,
            padding: g,
            altBoundary: m,
          }),
          E = $(e.placement),
          A = J(e.placement),
          T = !A,
          C = Y(E),
          O = "x" === C ? "y" : "x",
          x = e.modifiersData.popperOffsets,
          k = e.rects.reference,
          L = e.rects.popper,
          S =
            "function" == typeof y
              ? y(Object.assign({}, e.rects, { placement: e.placement }))
              : y,
          D =
            "number" == typeof S
              ? { mainAxis: S, altAxis: S }
              : Object.assign({ mainAxis: 0, altAxis: 0 }, S),
          P = e.modifiersData.offset
            ? e.modifiersData.offset[e.placement]
            : null,
          M = { x: 0, y: 0 };
        if (x) {
          if (h) {
            var j,
              F = "y" === C ? i : o,
              B = "y" === C ? n : s,
              W = "y" === C ? "height" : "width",
              z = x[C],
              R = z + w[F],
              q = z - w[B],
              V = b ? -L[W] / 2 : 0,
              X = A === l ? k[W] : L[W],
              U = A === l ? -L[W] : -k[W],
              G = e.elements.arrow,
              Z = b && G ? H(G) : { width: 0, height: 0 },
              tt = e.modifiersData["arrow#persistent"]
                ? e.modifiersData["arrow#persistent"].padding
                : { top: 0, right: 0, bottom: 0, left: 0 },
              et = tt[F],
              it = tt[B],
              nt = Q(0, k[W], Z[W]),
              st = T
                ? k[W] / 2 - V - nt - et - D.mainAxis
                : X - nt - et - D.mainAxis,
              ot = T
                ? -k[W] / 2 + V + nt + it + D.mainAxis
                : U + nt + it + D.mainAxis,
              rt = e.elements.arrow && K(e.elements.arrow),
              at = rt
                ? "y" === C
                  ? rt.clientTop || 0
                  : rt.clientLeft || 0
                : 0,
              lt = null != (j = null == P ? void 0 : P[C]) ? j : 0,
              ct = z + ot - lt,
              ht = Q(b ? N(R, z + st - lt - at) : R, z, b ? I(q, ct) : q);
            (x[C] = ht), (M[C] = ht - z);
          }
          if (u) {
            var dt,
              ut = "x" === C ? i : o,
              ft = "x" === C ? n : s,
              pt = x[O],
              mt = "y" === O ? "height" : "width",
              _t = pt + w[ut],
              bt = pt - w[ft],
              vt = -1 !== [i, o].indexOf(E),
              yt = null != (dt = null == P ? void 0 : P[O]) ? dt : 0,
              wt = vt ? _t : pt - k[mt] - L[mt] - yt + D.altAxis,
              Et = vt ? pt + k[mt] + L[mt] - yt - D.altAxis : bt,
              At =
                b && vt
                  ? (function (t, e, i) {
                      var n = Q(t, e, i);
                      return n > i ? i : n;
                    })(wt, pt, Et)
                  : Q(b ? wt : _t, pt, b ? Et : bt);
            (x[O] = At), (M[O] = At - pt);
          }
          e.modifiersData[a] = M;
        }
      },
      requiresIfExists: ["offset"],
    };
  function Tt(t, e, i) {
    void 0 === i && (i = !1);
    var n,
      s,
      o = L(e),
      r =
        L(e) &&
        (function (t) {
          var e = t.getBoundingClientRect(),
            i = P(e.width) / t.offsetWidth || 1,
            n = P(e.height) / t.offsetHeight || 1;
          return 1 !== i || 1 !== n;
        })(e),
      a = R(e),
      l = F(t, r, i),
      c = { scrollLeft: 0, scrollTop: 0 },
      h = { x: 0, y: 0 };
    return (
      (o || (!o && !i)) &&
        (("body" !== O(e) || ht(a)) &&
          (c =
            (n = e) !== x(n) && L(n)
              ? { scrollLeft: (s = n).scrollLeft, scrollTop: s.scrollTop }
              : lt(n)),
        L(e)
          ? (((h = F(e, !0)).x += e.clientLeft), (h.y += e.clientTop))
          : a && (h.x = ct(a))),
      {
        x: l.left + c.scrollLeft - h.x,
        y: l.top + c.scrollTop - h.y,
        width: l.width,
        height: l.height,
      }
    );
  }
  function Ct(t) {
    var e = new Map(),
      i = new Set(),
      n = [];
    function s(t) {
      i.add(t.name),
        []
          .concat(t.requires || [], t.requiresIfExists || [])
          .forEach(function (t) {
            if (!i.has(t)) {
              var n = e.get(t);
              n && s(n);
            }
          }),
        n.push(t);
    }
    return (
      t.forEach(function (t) {
        e.set(t.name, t);
      }),
      t.forEach(function (t) {
        i.has(t.name) || s(t);
      }),
      n
    );
  }
  var Ot = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function xt() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
      e[i] = arguments[i];
    return !e.some(function (t) {
      return !(t && "function" == typeof t.getBoundingClientRect);
    });
  }
  function kt(t) {
    void 0 === t && (t = {});
    var e = t,
      i = e.defaultModifiers,
      n = void 0 === i ? [] : i,
      s = e.defaultOptions,
      o = void 0 === s ? Ot : s;
    return function (t, e, i) {
      void 0 === i && (i = o);
      var s,
        r,
        a = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, Ot, o),
          modifiersData: {},
          elements: { reference: t, popper: e },
          attributes: {},
          styles: {},
        },
        l = [],
        c = !1,
        h = {
          state: a,
          setOptions: function (i) {
            var s = "function" == typeof i ? i(a.options) : i;
            d(),
              (a.options = Object.assign({}, o, a.options, s)),
              (a.scrollParents = {
                reference: k(t)
                  ? ut(t)
                  : t.contextElement
                  ? ut(t.contextElement)
                  : [],
                popper: ut(e),
              });
            var r,
              c,
              u = (function (t) {
                var e = Ct(t);
                return C.reduce(function (t, i) {
                  return t.concat(
                    e.filter(function (t) {
                      return t.phase === i;
                    })
                  );
                }, []);
              })(
                ((r = [].concat(n, a.options.modifiers)),
                (c = r.reduce(function (t, e) {
                  var i = t[e.name];
                  return (
                    (t[e.name] = i
                      ? Object.assign({}, i, e, {
                          options: Object.assign({}, i.options, e.options),
                          data: Object.assign({}, i.data, e.data),
                        })
                      : e),
                    t
                  );
                }, {})),
                Object.keys(c).map(function (t) {
                  return c[t];
                }))
              );
            return (
              (a.orderedModifiers = u.filter(function (t) {
                return t.enabled;
              })),
              a.orderedModifiers.forEach(function (t) {
                var e = t.name,
                  i = t.options,
                  n = void 0 === i ? {} : i,
                  s = t.effect;
                if ("function" == typeof s) {
                  var o = s({ state: a, name: e, instance: h, options: n });
                  l.push(o || function () {});
                }
              }),
              h.update()
            );
          },
          forceUpdate: function () {
            if (!c) {
              var t = a.elements,
                e = t.reference,
                i = t.popper;
              if (xt(e, i)) {
                (a.rects = {
                  reference: Tt(e, K(i), "fixed" === a.options.strategy),
                  popper: H(i),
                }),
                  (a.reset = !1),
                  (a.placement = a.options.placement),
                  a.orderedModifiers.forEach(function (t) {
                    return (a.modifiersData[t.name] = Object.assign(
                      {},
                      t.data
                    ));
                  });
                for (var n = 0; n < a.orderedModifiers.length; n++)
                  if (!0 !== a.reset) {
                    var s = a.orderedModifiers[n],
                      o = s.fn,
                      r = s.options,
                      l = void 0 === r ? {} : r,
                      d = s.name;
                    "function" == typeof o &&
                      (a =
                        o({ state: a, options: l, name: d, instance: h }) || a);
                  } else (a.reset = !1), (n = -1);
              }
            }
          },
          update:
            ((s = function () {
              return new Promise(function (t) {
                h.forceUpdate(), t(a);
              });
            }),
            function () {
              return (
                r ||
                  (r = new Promise(function (t) {
                    Promise.resolve().then(function () {
                      (r = void 0), t(s());
                    });
                  })),
                r
              );
            }),
          destroy: function () {
            d(), (c = !0);
          },
        };
      if (!xt(t, e)) return h;
      function d() {
        l.forEach(function (t) {
          return t();
        }),
          (l = []);
      }
      return (
        h.setOptions(i).then(function (t) {
          !c && i.onFirstUpdate && i.onFirstUpdate(t);
        }),
        h
      );
    };
  }
  var Lt = kt(),
    St = kt({ defaultModifiers: [nt, Et, et, D, wt, _t, At, G, yt] }),
    Dt = kt({ defaultModifiers: [nt, Et, et, D] });
  const $t = "transitionend",
    It = (t) => (
      t &&
        window.CSS &&
        window.CSS.escape &&
        (t = t.replace(/#([^\s"#']+)/g, (t, e) => `#${CSS.escape(e)}`)),
      t
    ),
    Nt = (t) => {
      t.dispatchEvent(new Event($t));
    },
    Pt = (t) =>
      !(!t || "object" != typeof t) &&
      (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
    Mt = (t) =>
      Pt(t)
        ? t.jquery
          ? t[0]
          : t
        : "string" == typeof t && t.length > 0
        ? document.querySelector(It(t))
        : null,
    jt = (t) => {
      if (!Pt(t) || 0 === t.getClientRects().length) return !1;
      const e =
          "visible" === getComputedStyle(t).getPropertyValue("visibility"),
        i = t.closest("details:not([open])");
      if (!i) return e;
      if (i !== t) {
        const e = t.closest("summary");
        if (e && e.parentNode !== i) return !1;
        if (null === e) return !1;
      }
      return e;
    },
    Ft = (t) =>
      !t ||
      t.nodeType !== Node.ELEMENT_NODE ||
      !!t.classList.contains("disabled") ||
      (void 0 !== t.disabled
        ? t.disabled
        : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
    Ht = (t) => {
      if (!document.documentElement.attachShadow) return null;
      if ("function" == typeof t.getRootNode) {
        const e = t.getRootNode();
        return e instanceof ShadowRoot ? e : null;
      }
      return t instanceof ShadowRoot
        ? t
        : t.parentNode
        ? Ht(t.parentNode)
        : null;
    },
    Bt = () => {},
    Wt = (t) => {
      t.offsetHeight;
    },
    zt = () =>
      window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
        ? window.jQuery
        : null,
    Rt = [],
    qt = () => "rtl" === document.documentElement.dir,
    Vt = (t) => {
      var e;
      (e = () => {
        const e = zt();
        if (e) {
          const i = t.NAME,
            n = e.fn[i];
          (e.fn[i] = t.jQueryInterface),
            (e.fn[i].Constructor = t),
            (e.fn[i].noConflict = () => ((e.fn[i] = n), t.jQueryInterface));
        }
      }),
        "loading" === document.readyState
          ? (Rt.length ||
              document.addEventListener("DOMContentLoaded", () => {
                for (const t of Rt) t();
              }),
            Rt.push(e))
          : e();
    },
    Kt = (t, e = [], i = t) => ("function" == typeof t ? t(...e) : i),
    Yt = (t, e, i = !0) => {
      if (!i) return void Kt(t);
      const n =
        ((t) => {
          if (!t) return 0;
          let { transitionDuration: e, transitionDelay: i } =
            window.getComputedStyle(t);
          const n = Number.parseFloat(e),
            s = Number.parseFloat(i);
          return n || s
            ? ((e = e.split(",")[0]),
              (i = i.split(",")[0]),
              1e3 * (Number.parseFloat(e) + Number.parseFloat(i)))
            : 0;
        })(e) + 5;
      let s = !1;
      const o = ({ target: i }) => {
        i === e && ((s = !0), e.removeEventListener($t, o), Kt(t));
      };
      e.addEventListener($t, o),
        setTimeout(() => {
          s || Nt(e);
        }, n);
    },
    Qt = (t, e, i, n) => {
      const s = t.length;
      let o = t.indexOf(e);
      return -1 === o
        ? !i && n
          ? t[s - 1]
          : t[0]
        : ((o += i ? 1 : -1),
          n && (o = (o + s) % s),
          t[Math.max(0, Math.min(o, s - 1))]);
    },
    Xt = /[^.]*(?=\..*)\.|.*/,
    Ut = /\..*/,
    Gt = /::\d+$/,
    Jt = {};
  let Zt = 1;
  const te = { mouseenter: "mouseover", mouseleave: "mouseout" },
    ee = new Set([
      "click",
      "dblclick",
      "mouseup",
      "mousedown",
      "contextmenu",
      "mousewheel",
      "DOMMouseScroll",
      "mouseover",
      "mouseout",
      "mousemove",
      "selectstart",
      "selectend",
      "keydown",
      "keypress",
      "keyup",
      "orientationchange",
      "touchstart",
      "touchmove",
      "touchend",
      "touchcancel",
      "pointerdown",
      "pointermove",
      "pointerup",
      "pointerleave",
      "pointercancel",
      "gesturestart",
      "gesturechange",
      "gestureend",
      "focus",
      "blur",
      "change",
      "reset",
      "select",
      "submit",
      "focusin",
      "focusout",
      "load",
      "unload",
      "beforeunload",
      "resize",
      "move",
      "DOMContentLoaded",
      "readystatechange",
      "error",
      "abort",
      "scroll",
    ]);
  function ie(t, e) {
    return (e && `${e}::${Zt++}`) || t.uidEvent || Zt++;
  }
  function ne(t) {
    const e = ie(t);
    return (t.uidEvent = e), (Jt[e] = Jt[e] || {}), Jt[e];
  }
  function se(t, e, i = null) {
    return Object.values(t).find(
      (t) => t.callable === e && t.delegationSelector === i
    );
  }
  function oe(t, e, i) {
    const n = "string" == typeof e,
      s = n ? i : e || i;
    let o = ce(t);
    return ee.has(o) || (o = t), [n, s, o];
  }
  function re(t, e, i, n, s) {
    if ("string" != typeof e || !t) return;
    let [o, r, a] = oe(e, i, n);
    if (e in te) {
      const t = (t) =>
        function (e) {
          if (
            !e.relatedTarget ||
            (e.relatedTarget !== e.delegateTarget &&
              !e.delegateTarget.contains(e.relatedTarget))
          )
            return t.call(this, e);
        };
      r = t(r);
    }
    const l = ne(t),
      c = l[a] || (l[a] = {}),
      h = se(c, r, o ? i : null);
    if (h) return void (h.oneOff = h.oneOff && s);
    const d = ie(r, e.replace(Xt, "")),
      u = o
        ? (function (t, e, i) {
            return function n(s) {
              const o = t.querySelectorAll(e);
              for (let { target: r } = s; r && r !== this; r = r.parentNode)
                for (const a of o)
                  if (a === r)
                    return (
                      de(s, { delegateTarget: r }),
                      n.oneOff && he.off(t, s.type, e, i),
                      i.apply(r, [s])
                    );
            };
          })(t, i, r)
        : (function (t, e) {
            return function i(n) {
              return (
                de(n, { delegateTarget: t }),
                i.oneOff && he.off(t, n.type, e),
                e.apply(t, [n])
              );
            };
          })(t, r);
    (u.delegationSelector = o ? i : null),
      (u.callable = r),
      (u.oneOff = s),
      (u.uidEvent = d),
      (c[d] = u),
      t.addEventListener(a, u, o);
  }
  function ae(t, e, i, n, s) {
    const o = se(e[i], n, s);
    o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
  }
  function le(t, e, i, n) {
    const s = e[i] || {};
    for (const [o, r] of Object.entries(s))
      o.includes(n) && ae(t, e, i, r.callable, r.delegationSelector);
  }
  function ce(t) {
    return (t = t.replace(Ut, "")), te[t] || t;
  }
  const he = {
    on(t, e, i, n) {
      re(t, e, i, n, !1);
    },
    one(t, e, i, n) {
      re(t, e, i, n, !0);
    },
    off(t, e, i, n) {
      if ("string" != typeof e || !t) return;
      const [s, o, r] = oe(e, i, n),
        a = r !== e,
        l = ne(t),
        c = l[r] || {},
        h = e.startsWith(".");
      if (void 0 === o) {
        if (h) for (const i of Object.keys(l)) le(t, l, i, e.slice(1));
        for (const [i, n] of Object.entries(c)) {
          const s = i.replace(Gt, "");
          (a && !e.includes(s)) ||
            ae(t, l, r, n.callable, n.delegationSelector);
        }
      } else {
        if (!Object.keys(c).length) return;
        ae(t, l, r, o, s ? i : null);
      }
    },
    trigger(t, e, i) {
      if ("string" != typeof e || !t) return null;
      const n = zt();
      let s = null,
        o = !0,
        r = !0,
        a = !1;
      e !== ce(e) &&
        n &&
        ((s = n.Event(e, i)),
        n(t).trigger(s),
        (o = !s.isPropagationStopped()),
        (r = !s.isImmediatePropagationStopped()),
        (a = s.isDefaultPrevented()));
      let l = new Event(e, { bubbles: o, cancelable: !0 });
      return (
        (l = de(l, i)),
        a && l.preventDefault(),
        r && t.dispatchEvent(l),
        l.defaultPrevented && s && s.preventDefault(),
        l
      );
    },
  };
  function de(t, e = {}) {
    for (const [i, n] of Object.entries(e))
      try {
        t[i] = n;
      } catch (e) {
        Object.defineProperty(t, i, { configurable: !0, get: () => n });
      }
    return t;
  }
  const ue = new Map(),
    fe = {
      set(t, e, i) {
        ue.has(t) || ue.set(t, new Map());
        const n = ue.get(t);
        n.has(e) || 0 === n.size
          ? n.set(e, i)
          : console.error(
              `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                Array.from(n.keys())[0]
              }.`
            );
      },
      get: (t, e) => (ue.has(t) && ue.get(t).get(e)) || null,
      remove(t, e) {
        if (!ue.has(t)) return;
        const i = ue.get(t);
        i.delete(e), 0 === i.size && ue.delete(t);
      },
    };
  function pe(t) {
    if ("true" === t) return !0;
    if ("false" === t) return !1;
    if (t === Number(t).toString()) return Number(t);
    if ("" === t || "null" === t) return null;
    if ("string" != typeof t) return t;
    try {
      return JSON.parse(decodeURIComponent(t));
    } catch (e) {
      return t;
    }
  }
  function me(t) {
    return t.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
  }
  const ge = {
    setDataAttribute(t, e, i) {
      t.setAttribute(`data-bs-${me(e)}`, i);
    },
    removeDataAttribute(t, e) {
      t.removeAttribute(`data-bs-${me(e)}`);
    },
    getDataAttributes(t) {
      if (!t) return {};
      const e = {},
        i = Object.keys(t.dataset).filter(
          (t) => t.startsWith("bs") && !t.startsWith("bsConfig")
        );
      for (const n of i) {
        let i = n.replace(/^bs/, "");
        (i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
          (e[i] = pe(t.dataset[n]));
      }
      return e;
    },
    getDataAttribute: (t, e) => pe(t.getAttribute(`data-bs-${me(e)}`)),
  };
  class _e {
    static get Default() {
      return {};
    }
    static get DefaultType() {
      return {};
    }
    static get NAME() {
      throw new Error(
        'You have to implement the static method "NAME", for each component!'
      );
    }
    _getConfig(t) {
      return (
        (t = this._mergeConfigObj(t)),
        (t = this._configAfterMerge(t)),
        this._typeCheckConfig(t),
        t
      );
    }
    _configAfterMerge(t) {
      return t;
    }
    _mergeConfigObj(t, e) {
      const i = Pt(e) ? ge.getDataAttribute(e, "config") : {};
      return {
        ...this.constructor.Default,
        ...("object" == typeof i ? i : {}),
        ...(Pt(e) ? ge.getDataAttributes(e) : {}),
        ...("object" == typeof t ? t : {}),
      };
    }
    _typeCheckConfig(t, e = this.constructor.DefaultType) {
      for (const [n, s] of Object.entries(e)) {
        const e = t[n],
          o = Pt(e)
            ? "element"
            : null == (i = e)
            ? `${i}`
            : Object.prototype.toString
                .call(i)
                .match(/\s([a-z]+)/i)[1]
                .toLowerCase();
        if (!new RegExp(s).test(o))
          throw new TypeError(
            `${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${o}" but expected type "${s}".`
          );
      }
      var i;
    }
  }
  class be extends _e {
    constructor(t, e) {
      super(),
        (t = Mt(t)) &&
          ((this._element = t),
          (this._config = this._getConfig(e)),
          fe.set(this._element, this.constructor.DATA_KEY, this));
    }
    dispose() {
      fe.remove(this._element, this.constructor.DATA_KEY),
        he.off(this._element, this.constructor.EVENT_KEY);
      for (const t of Object.getOwnPropertyNames(this)) this[t] = null;
    }
    _queueCallback(t, e, i = !0) {
      Yt(t, e, i);
    }
    _getConfig(t) {
      return (
        (t = this._mergeConfigObj(t, this._element)),
        (t = this._configAfterMerge(t)),
        this._typeCheckConfig(t),
        t
      );
    }
    static getInstance(t) {
      return fe.get(Mt(t), this.DATA_KEY);
    }
    static getOrCreateInstance(t, e = {}) {
      return (
        this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
      );
    }
    static get VERSION() {
      return "5.3.0-alpha1";
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
    static eventName(t) {
      return `${t}${this.EVENT_KEY}`;
    }
  }
  const ve = (t) => {
      let e = t.getAttribute("data-bs-target");
      if (!e || "#" === e) {
        let i = t.getAttribute("href");
        if (!i || (!i.includes("#") && !i.startsWith("."))) return null;
        i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`),
          (e = i && "#" !== i ? i.trim() : null);
      }
      return It(e);
    },
    ye = {
      find: (t, e = document.documentElement) =>
        [].concat(...Element.prototype.querySelectorAll.call(e, t)),
      findOne: (t, e = document.documentElement) =>
        Element.prototype.querySelector.call(e, t),
      children: (t, e) => [].concat(...t.children).filter((t) => t.matches(e)),
      parents(t, e) {
        const i = [];
        let n = t.parentNode.closest(e);
        for (; n; ) i.push(n), (n = n.parentNode.closest(e));
        return i;
      },
      prev(t, e) {
        let i = t.previousElementSibling;
        for (; i; ) {
          if (i.matches(e)) return [i];
          i = i.previousElementSibling;
        }
        return [];
      },
      next(t, e) {
        let i = t.nextElementSibling;
        for (; i; ) {
          if (i.matches(e)) return [i];
          i = i.nextElementSibling;
        }
        return [];
      },
      focusableChildren(t) {
        const e = [
          "a",
          "button",
          "input",
          "textarea",
          "select",
          "details",
          "[tabindex]",
          '[contenteditable="true"]',
        ]
          .map((t) => `${t}:not([tabindex^="-"])`)
          .join(",");
        return this.find(e, t).filter((t) => !Ft(t) && jt(t));
      },
      getSelectorFromElement(t) {
        const e = ve(t);
        return e && ye.findOne(e) ? e : null;
      },
      getElementFromSelector(t) {
        const e = ve(t);
        return e ? ye.findOne(e) : null;
      },
      getMultipleElementsFromSelector(t) {
        const e = ve(t);
        return e ? ye.find(e) : [];
      },
    },
    we = (t, e = "hide") => {
      const i = `click.dismiss${t.EVENT_KEY}`,
        n = t.NAME;
      he.on(document, i, `[data-bs-dismiss="${n}"]`, function (i) {
        if (
          (["A", "AREA"].includes(this.tagName) && i.preventDefault(), Ft(this))
        )
          return;
        const s = ye.getElementFromSelector(this) || this.closest(`.${n}`);
        t.getOrCreateInstance(s)[e]();
      });
    },
    Ee = ".bs.alert",
    Ae = `close${Ee}`,
    Te = `closed${Ee}`;
  class Ce extends be {
    static get NAME() {
      return "alert";
    }
    close() {
      if (he.trigger(this._element, Ae).defaultPrevented) return;
      this._element.classList.remove("show");
      const t = this._element.classList.contains("fade");
      this._queueCallback(() => this._destroyElement(), this._element, t);
    }
    _destroyElement() {
      this._element.remove(), he.trigger(this._element, Te), this.dispose();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Ce.getOrCreateInstance(this);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  we(Ce, "close"), Vt(Ce);
  const Oe = '[data-bs-toggle="button"]';
  class xe extends be {
    static get NAME() {
      return "button";
    }
    toggle() {
      this._element.setAttribute(
        "aria-pressed",
        this._element.classList.toggle("active")
      );
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = xe.getOrCreateInstance(this);
        "toggle" === t && e[t]();
      });
    }
  }
  he.on(document, "click.bs.button.data-api", Oe, (t) => {
    t.preventDefault();
    const e = t.target.closest(Oe);
    xe.getOrCreateInstance(e).toggle();
  }),
    Vt(xe);
  const ke = ".bs.swipe",
    Le = `touchstart${ke}`,
    Se = `touchmove${ke}`,
    De = `touchend${ke}`,
    $e = `pointerdown${ke}`,
    Ie = `pointerup${ke}`,
    Ne = { endCallback: null, leftCallback: null, rightCallback: null },
    Pe = {
      endCallback: "(function|null)",
      leftCallback: "(function|null)",
      rightCallback: "(function|null)",
    };
  class Me extends _e {
    constructor(t, e) {
      super(),
        (this._element = t),
        t &&
          Me.isSupported() &&
          ((this._config = this._getConfig(e)),
          (this._deltaX = 0),
          (this._supportPointerEvents = Boolean(window.PointerEvent)),
          this._initEvents());
    }
    static get Default() {
      return Ne;
    }
    static get DefaultType() {
      return Pe;
    }
    static get NAME() {
      return "swipe";
    }
    dispose() {
      he.off(this._element, ke);
    }
    _start(t) {
      this._supportPointerEvents
        ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX)
        : (this._deltaX = t.touches[0].clientX);
    }
    _end(t) {
      this._eventIsPointerPenTouch(t) &&
        (this._deltaX = t.clientX - this._deltaX),
        this._handleSwipe(),
        Kt(this._config.endCallback);
    }
    _move(t) {
      this._deltaX =
        t.touches && t.touches.length > 1
          ? 0
          : t.touches[0].clientX - this._deltaX;
    }
    _handleSwipe() {
      const t = Math.abs(this._deltaX);
      if (t <= 40) return;
      const e = t / this._deltaX;
      (this._deltaX = 0),
        e && Kt(e > 0 ? this._config.rightCallback : this._config.leftCallback);
    }
    _initEvents() {
      this._supportPointerEvents
        ? (he.on(this._element, $e, (t) => this._start(t)),
          he.on(this._element, Ie, (t) => this._end(t)),
          this._element.classList.add("pointer-event"))
        : (he.on(this._element, Le, (t) => this._start(t)),
          he.on(this._element, Se, (t) => this._move(t)),
          he.on(this._element, De, (t) => this._end(t)));
    }
    _eventIsPointerPenTouch(t) {
      return (
        this._supportPointerEvents &&
        ("pen" === t.pointerType || "touch" === t.pointerType)
      );
    }
    static isSupported() {
      return (
        "ontouchstart" in document.documentElement ||
        navigator.maxTouchPoints > 0
      );
    }
  }
  const je = ".bs.carousel",
    Fe = ".data-api",
    He = "next",
    Be = "prev",
    We = "left",
    ze = "right",
    Re = `slide${je}`,
    qe = `slid${je}`,
    Ve = `keydown${je}`,
    Ke = `mouseenter${je}`,
    Ye = `mouseleave${je}`,
    Qe = `dragstart${je}`,
    Xe = `load${je}${Fe}`,
    Ue = `click${je}${Fe}`,
    Ge = "carousel",
    Je = "active",
    Ze = ".active",
    ti = ".carousel-item",
    ei = Ze + ti,
    ii = { ArrowLeft: ze, ArrowRight: We },
    ni = {
      interval: 5e3,
      keyboard: !0,
      pause: "hover",
      ride: !1,
      touch: !0,
      wrap: !0,
    },
    si = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      pause: "(string|boolean)",
      ride: "(boolean|string)",
      touch: "boolean",
      wrap: "boolean",
    };
  class oi extends be {
    constructor(t, e) {
      super(t, e),
        (this._interval = null),
        (this._activeElement = null),
        (this._isSliding = !1),
        (this.touchTimeout = null),
        (this._swipeHelper = null),
        (this._indicatorsElement = ye.findOne(
          ".carousel-indicators",
          this._element
        )),
        this._addEventListeners(),
        this._config.ride === Ge && this.cycle();
    }
    static get Default() {
      return ni;
    }
    static get DefaultType() {
      return si;
    }
    static get NAME() {
      return "carousel";
    }
    next() {
      this._slide(He);
    }
    nextWhenVisible() {
      !document.hidden && jt(this._element) && this.next();
    }
    prev() {
      this._slide(Be);
    }
    pause() {
      this._isSliding && Nt(this._element), this._clearInterval();
    }
    cycle() {
      this._clearInterval(),
        this._updateInterval(),
        (this._interval = setInterval(
          () => this.nextWhenVisible(),
          this._config.interval
        ));
    }
    _maybeEnableCycle() {
      this._config.ride &&
        (this._isSliding
          ? he.one(this._element, qe, () => this.cycle())
          : this.cycle());
    }
    to(t) {
      const e = this._getItems();
      if (t > e.length - 1 || t < 0) return;
      if (this._isSliding)
        return void he.one(this._element, qe, () => this.to(t));
      const i = this._getItemIndex(this._getActive());
      if (i === t) return;
      const n = t > i ? He : Be;
      this._slide(n, e[t]);
    }
    dispose() {
      this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
    }
    _configAfterMerge(t) {
      return (t.defaultInterval = t.interval), t;
    }
    _addEventListeners() {
      this._config.keyboard &&
        he.on(this._element, Ve, (t) => this._keydown(t)),
        "hover" === this._config.pause &&
          (he.on(this._element, Ke, () => this.pause()),
          he.on(this._element, Ye, () => this._maybeEnableCycle())),
        this._config.touch &&
          Me.isSupported() &&
          this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
      for (const t of ye.find(".carousel-item img", this._element))
        he.on(t, Qe, (t) => t.preventDefault());
      const t = {
        leftCallback: () => this._slide(this._directionToOrder(We)),
        rightCallback: () => this._slide(this._directionToOrder(ze)),
        endCallback: () => {
          "hover" === this._config.pause &&
            (this.pause(),
            this.touchTimeout && clearTimeout(this.touchTimeout),
            (this.touchTimeout = setTimeout(
              () => this._maybeEnableCycle(),
              500 + this._config.interval
            )));
        },
      };
      this._swipeHelper = new Me(this._element, t);
    }
    _keydown(t) {
      if (/input|textarea/i.test(t.target.tagName)) return;
      const e = ii[t.key];
      e && (t.preventDefault(), this._slide(this._directionToOrder(e)));
    }
    _getItemIndex(t) {
      return this._getItems().indexOf(t);
    }
    _setActiveIndicatorElement(t) {
      if (!this._indicatorsElement) return;
      const e = ye.findOne(Ze, this._indicatorsElement);
      e.classList.remove(Je), e.removeAttribute("aria-current");
      const i = ye.findOne(
        `[data-bs-slide-to="${t}"]`,
        this._indicatorsElement
      );
      i && (i.classList.add(Je), i.setAttribute("aria-current", "true"));
    }
    _updateInterval() {
      const t = this._activeElement || this._getActive();
      if (!t) return;
      const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
      this._config.interval = e || this._config.defaultInterval;
    }
    _slide(t, e = null) {
      if (this._isSliding) return;
      const i = this._getActive(),
        n = t === He,
        s = e || Qt(this._getItems(), i, n, this._config.wrap);
      if (s === i) return;
      const o = this._getItemIndex(s),
        r = (e) =>
          he.trigger(this._element, e, {
            relatedTarget: s,
            direction: this._orderToDirection(t),
            from: this._getItemIndex(i),
            to: o,
          });
      if (r(Re).defaultPrevented) return;
      if (!i || !s) return;
      const a = Boolean(this._interval);
      this.pause(),
        (this._isSliding = !0),
        this._setActiveIndicatorElement(o),
        (this._activeElement = s);
      const l = n ? "carousel-item-start" : "carousel-item-end",
        c = n ? "carousel-item-next" : "carousel-item-prev";
      s.classList.add(c),
        Wt(s),
        i.classList.add(l),
        s.classList.add(l),
        this._queueCallback(
          () => {
            s.classList.remove(l, c),
              s.classList.add(Je),
              i.classList.remove(Je, c, l),
              (this._isSliding = !1),
              r(qe);
          },
          i,
          this._isAnimated()
        ),
        a && this.cycle();
    }
    _isAnimated() {
      return this._element.classList.contains("slide");
    }
    _getActive() {
      return ye.findOne(ei, this._element);
    }
    _getItems() {
      return ye.find(ti, this._element);
    }
    _clearInterval() {
      this._interval &&
        (clearInterval(this._interval), (this._interval = null));
    }
    _directionToOrder(t) {
      return qt() ? (t === We ? Be : He) : t === We ? He : Be;
    }
    _orderToDirection(t) {
      return qt() ? (t === Be ? We : ze) : t === Be ? ze : We;
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = oi.getOrCreateInstance(this, t);
        if ("number" != typeof t) {
          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
              throw new TypeError(`No method named "${t}"`);
            e[t]();
          }
        } else e.to(t);
      });
    }
  }
  he.on(document, Ue, "[data-bs-slide], [data-bs-slide-to]", function (t) {
    const e = ye.getElementFromSelector(this);
    if (!e || !e.classList.contains(Ge)) return;
    t.preventDefault();
    const i = oi.getOrCreateInstance(e),
      n = this.getAttribute("data-bs-slide-to");
    return n
      ? (i.to(n), void i._maybeEnableCycle())
      : "next" === ge.getDataAttribute(this, "slide")
      ? (i.next(), void i._maybeEnableCycle())
      : (i.prev(), void i._maybeEnableCycle());
  }),
    he.on(window, Xe, () => {
      const t = ye.find('[data-bs-ride="carousel"]');
      for (const e of t) oi.getOrCreateInstance(e);
    }),
    Vt(oi);
  const ri = ".bs.collapse",
    ai = `show${ri}`,
    li = `shown${ri}`,
    ci = `hide${ri}`,
    hi = `hidden${ri}`,
    di = `click${ri}.data-api`,
    ui = "show",
    fi = "collapse",
    pi = "collapsing",
    mi = `:scope .${fi} .${fi}`,
    gi = '[data-bs-toggle="collapse"]',
    _i = { parent: null, toggle: !0 },
    bi = { parent: "(null|element)", toggle: "boolean" };
  class vi extends be {
    constructor(t, e) {
      super(t, e), (this._isTransitioning = !1), (this._triggerArray = []);
      const i = ye.find(gi);
      for (const t of i) {
        const e = ye.getSelectorFromElement(t),
          i = ye.find(e).filter((t) => t === this._element);
        null !== e && i.length && this._triggerArray.push(t);
      }
      this._initializeChildren(),
        this._config.parent ||
          this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
        this._config.toggle && this.toggle();
    }
    static get Default() {
      return _i;
    }
    static get DefaultType() {
      return bi;
    }
    static get NAME() {
      return "collapse";
    }
    toggle() {
      this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (this._isTransitioning || this._isShown()) return;
      let t = [];
      if (
        (this._config.parent &&
          (t = this._getFirstLevelChildren(
            ".collapse.show, .collapse.collapsing"
          )
            .filter((t) => t !== this._element)
            .map((t) => vi.getOrCreateInstance(t, { toggle: !1 }))),
        t.length && t[0]._isTransitioning)
      )
        return;
      if (he.trigger(this._element, ai).defaultPrevented) return;
      for (const e of t) e.hide();
      const e = this._getDimension();
      this._element.classList.remove(fi),
        this._element.classList.add(pi),
        (this._element.style[e] = 0),
        this._addAriaAndCollapsedClass(this._triggerArray, !0),
        (this._isTransitioning = !0);
      const i = `scroll${e[0].toUpperCase() + e.slice(1)}`;
      this._queueCallback(
        () => {
          (this._isTransitioning = !1),
            this._element.classList.remove(pi),
            this._element.classList.add(fi, ui),
            (this._element.style[e] = ""),
            he.trigger(this._element, li);
        },
        this._element,
        !0
      ),
        (this._element.style[e] = `${this._element[i]}px`);
    }
    hide() {
      if (this._isTransitioning || !this._isShown()) return;
      if (he.trigger(this._element, ci).defaultPrevented) return;
      const t = this._getDimension();
      (this._element.style[t] = `${
        this._element.getBoundingClientRect()[t]
      }px`),
        Wt(this._element),
        this._element.classList.add(pi),
        this._element.classList.remove(fi, ui);
      for (const t of this._triggerArray) {
        const e = ye.getElementFromSelector(t);
        e && !this._isShown(e) && this._addAriaAndCollapsedClass([t], !1);
      }
      (this._isTransitioning = !0),
        (this._element.style[t] = ""),
        this._queueCallback(
          () => {
            (this._isTransitioning = !1),
              this._element.classList.remove(pi),
              this._element.classList.add(fi),
              he.trigger(this._element, hi);
          },
          this._element,
          !0
        );
    }
    _isShown(t = this._element) {
      return t.classList.contains(ui);
    }
    _configAfterMerge(t) {
      return (t.toggle = Boolean(t.toggle)), (t.parent = Mt(t.parent)), t;
    }
    _getDimension() {
      return this._element.classList.contains("collapse-horizontal")
        ? "width"
        : "height";
    }
    _initializeChildren() {
      if (!this._config.parent) return;
      const t = this._getFirstLevelChildren(gi);
      for (const e of t) {
        const t = ye.getElementFromSelector(e);
        t && this._addAriaAndCollapsedClass([e], this._isShown(t));
      }
    }
    _getFirstLevelChildren(t) {
      const e = ye.find(mi, this._config.parent);
      return ye.find(t, this._config.parent).filter((t) => !e.includes(t));
    }
    _addAriaAndCollapsedClass(t, e) {
      if (t.length)
        for (const i of t)
          i.classList.toggle("collapsed", !e),
            i.setAttribute("aria-expanded", e);
    }
    static jQueryInterface(t) {
      const e = {};
      return (
        "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1),
        this.each(function () {
          const i = vi.getOrCreateInstance(this, e);
          if ("string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
            i[t]();
          }
        })
      );
    }
  }
  he.on(document, di, gi, function (t) {
    ("A" === t.target.tagName ||
      (t.delegateTarget && "A" === t.delegateTarget.tagName)) &&
      t.preventDefault();
    for (const t of ye.getMultipleElementsFromSelector(this))
      vi.getOrCreateInstance(t, { toggle: !1 }).toggle();
  }),
    Vt(vi);
  const yi = "dropdown",
    wi = ".bs.dropdown",
    Ei = ".data-api",
    Ai = "ArrowUp",
    Ti = "ArrowDown",
    Ci = `hide${wi}`,
    Oi = `hidden${wi}`,
    xi = `show${wi}`,
    ki = `shown${wi}`,
    Li = `click${wi}${Ei}`,
    Si = `keydown${wi}${Ei}`,
    Di = `keyup${wi}${Ei}`,
    $i = "show",
    Ii = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
    Ni = `${Ii}.${$i}`,
    Pi = ".dropdown-menu",
    Mi = qt() ? "top-end" : "top-start",
    ji = qt() ? "top-start" : "top-end",
    Fi = qt() ? "bottom-end" : "bottom-start",
    Hi = qt() ? "bottom-start" : "bottom-end",
    Bi = qt() ? "left-start" : "right-start",
    Wi = qt() ? "right-start" : "left-start",
    zi = {
      autoClose: !0,
      boundary: "clippingParents",
      display: "dynamic",
      offset: [0, 2],
      popperConfig: null,
      reference: "toggle",
    },
    Ri = {
      autoClose: "(boolean|string)",
      boundary: "(string|element)",
      display: "string",
      offset: "(array|string|function)",
      popperConfig: "(null|object|function)",
      reference: "(string|element|object)",
    };
  class qi extends be {
    constructor(t, e) {
      super(t, e),
        (this._popper = null),
        (this._parent = this._element.parentNode),
        (this._menu =
          ye.next(this._element, Pi)[0] ||
          ye.prev(this._element, Pi)[0] ||
          ye.findOne(Pi, this._parent)),
        (this._inNavbar = this._detectNavbar());
    }
    static get Default() {
      return zi;
    }
    static get DefaultType() {
      return Ri;
    }
    static get NAME() {
      return yi;
    }
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (Ft(this._element) || this._isShown()) return;
      const t = { relatedTarget: this._element };
      if (!he.trigger(this._element, xi, t).defaultPrevented) {
        if (
          (this._createPopper(),
          "ontouchstart" in document.documentElement &&
            !this._parent.closest(".navbar-nav"))
        )
          for (const t of [].concat(...document.body.children))
            he.on(t, "mouseover", Bt);
        this._element.focus(),
          this._element.setAttribute("aria-expanded", !0),
          this._menu.classList.add($i),
          this._element.classList.add($i),
          he.trigger(this._element, ki, t);
      }
    }
    hide() {
      if (Ft(this._element) || !this._isShown()) return;
      const t = { relatedTarget: this._element };
      this._completeHide(t);
    }
    dispose() {
      this._popper && this._popper.destroy(), super.dispose();
    }
    update() {
      (this._inNavbar = this._detectNavbar()),
        this._popper && this._popper.update();
    }
    _completeHide(t) {
      if (!he.trigger(this._element, Ci, t).defaultPrevented) {
        if ("ontouchstart" in document.documentElement)
          for (const t of [].concat(...document.body.children))
            he.off(t, "mouseover", Bt);
        this._popper && this._popper.destroy(),
          this._menu.classList.remove($i),
          this._element.classList.remove($i),
          this._element.setAttribute("aria-expanded", "false"),
          ge.removeDataAttribute(this._menu, "popper"),
          he.trigger(this._element, Oi, t);
      }
    }
    _getConfig(t) {
      if (
        "object" == typeof (t = super._getConfig(t)).reference &&
        !Pt(t.reference) &&
        "function" != typeof t.reference.getBoundingClientRect
      )
        throw new TypeError(
          `${yi.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
        );
      return t;
    }
    _createPopper() {
      if (void 0 === e)
        throw new TypeError(
          "Bootstrap's dropdowns require Popper (https://popper.js.org)"
        );
      let t = this._element;
      "parent" === this._config.reference
        ? (t = this._parent)
        : Pt(this._config.reference)
        ? (t = Mt(this._config.reference))
        : "object" == typeof this._config.reference &&
          (t = this._config.reference);
      const i = this._getPopperConfig();
      this._popper = St(t, this._menu, i);
    }
    _isShown() {
      return this._menu.classList.contains($i);
    }
    _getPlacement() {
      const t = this._parent;
      if (t.classList.contains("dropend")) return Bi;
      if (t.classList.contains("dropstart")) return Wi;
      if (t.classList.contains("dropup-center")) return "top";
      if (t.classList.contains("dropdown-center")) return "bottom";
      const e =
        "end" ===
        getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return t.classList.contains("dropup") ? (e ? ji : Mi) : e ? Hi : Fi;
    }
    _detectNavbar() {
      return null !== this._element.closest(".navbar");
    }
    _getOffset() {
      const { offset: t } = this._config;
      return "string" == typeof t
        ? t.split(",").map((t) => Number.parseInt(t, 10))
        : "function" == typeof t
        ? (e) => t(e, this._element)
        : t;
    }
    _getPopperConfig() {
      const t = {
        placement: this._getPlacement(),
        modifiers: [
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          { name: "offset", options: { offset: this._getOffset() } },
        ],
      };
      return (
        (this._inNavbar || "static" === this._config.display) &&
          (ge.setDataAttribute(this._menu, "popper", "static"),
          (t.modifiers = [{ name: "applyStyles", enabled: !1 }])),
        { ...t, ...Kt(this._config.popperConfig, [t]) }
      );
    }
    _selectMenuItem({ key: t, target: e }) {
      const i = ye
        .find(
          ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
          this._menu
        )
        .filter((t) => jt(t));
      i.length && Qt(i, e, t === Ti, !i.includes(e)).focus();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = qi.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
    static clearMenus(t) {
      if (2 === t.button || ("keyup" === t.type && "Tab" !== t.key)) return;
      const e = ye.find(Ni);
      for (const i of e) {
        const e = qi.getInstance(i);
        if (!e || !1 === e._config.autoClose) continue;
        const n = t.composedPath(),
          s = n.includes(e._menu);
        if (
          n.includes(e._element) ||
          ("inside" === e._config.autoClose && !s) ||
          ("outside" === e._config.autoClose && s)
        )
          continue;
        if (
          e._menu.contains(t.target) &&
          (("keyup" === t.type && "Tab" === t.key) ||
            /input|select|option|textarea|form/i.test(t.target.tagName))
        )
          continue;
        const o = { relatedTarget: e._element };
        "click" === t.type && (o.clickEvent = t), e._completeHide(o);
      }
    }
    static dataApiKeydownHandler(t) {
      const e = /input|textarea/i.test(t.target.tagName),
        i = "Escape" === t.key,
        n = [Ai, Ti].includes(t.key);
      if (!n && !i) return;
      if (e && !i) return;
      t.preventDefault();
      const s = this.matches(Ii)
          ? this
          : ye.prev(this, Ii)[0] ||
            ye.next(this, Ii)[0] ||
            ye.findOne(Ii, t.delegateTarget.parentNode),
        o = qi.getOrCreateInstance(s);
      if (n) return t.stopPropagation(), o.show(), void o._selectMenuItem(t);
      o._isShown() && (t.stopPropagation(), o.hide(), s.focus());
    }
  }
  he.on(document, Si, Ii, qi.dataApiKeydownHandler),
    he.on(document, Si, Pi, qi.dataApiKeydownHandler),
    he.on(document, Li, qi.clearMenus),
    he.on(document, Di, qi.clearMenus),
    he.on(document, Li, Ii, function (t) {
      t.preventDefault(), qi.getOrCreateInstance(this).toggle();
    }),
    Vt(qi);
  const Vi = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    Ki = ".sticky-top",
    Yi = "padding-right",
    Qi = "margin-right";
  class Xi {
    constructor() {
      this._element = document.body;
    }
    getWidth() {
      const t = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - t);
    }
    hide() {
      const t = this.getWidth();
      this._disableOverFlow(),
        this._setElementAttributes(this._element, Yi, (e) => e + t),
        this._setElementAttributes(Vi, Yi, (e) => e + t),
        this._setElementAttributes(Ki, Qi, (e) => e - t);
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow"),
        this._resetElementAttributes(this._element, Yi),
        this._resetElementAttributes(Vi, Yi),
        this._resetElementAttributes(Ki, Qi);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow"),
        (this._element.style.overflow = "hidden");
    }
    _setElementAttributes(t, e, i) {
      const n = this.getWidth();
      this._applyManipulationCallback(t, (t) => {
        if (t !== this._element && window.innerWidth > t.clientWidth + n)
          return;
        this._saveInitialAttribute(t, e);
        const s = window.getComputedStyle(t).getPropertyValue(e);
        t.style.setProperty(e, `${i(Number.parseFloat(s))}px`);
      });
    }
    _saveInitialAttribute(t, e) {
      const i = t.style.getPropertyValue(e);
      i && ge.setDataAttribute(t, e, i);
    }
    _resetElementAttributes(t, e) {
      this._applyManipulationCallback(t, (t) => {
        const i = ge.getDataAttribute(t, e);
        null !== i
          ? (ge.removeDataAttribute(t, e), t.style.setProperty(e, i))
          : t.style.removeProperty(e);
      });
    }
    _applyManipulationCallback(t, e) {
      if (Pt(t)) e(t);
      else for (const i of ye.find(t, this._element)) e(i);
    }
  }
  const Ui = "backdrop",
    Gi = "show",
    Ji = `mousedown.bs.${Ui}`,
    Zi = {
      className: "modal-backdrop",
      clickCallback: null,
      isAnimated: !1,
      isVisible: !0,
      rootElement: "body",
    },
    tn = {
      className: "string",
      clickCallback: "(function|null)",
      isAnimated: "boolean",
      isVisible: "boolean",
      rootElement: "(element|string)",
    };
  class en extends _e {
    constructor(t) {
      super(),
        (this._config = this._getConfig(t)),
        (this._isAppended = !1),
        (this._element = null);
    }
    static get Default() {
      return Zi;
    }
    static get DefaultType() {
      return tn;
    }
    static get NAME() {
      return Ui;
    }
    show(t) {
      if (!this._config.isVisible) return void Kt(t);
      this._append();
      const e = this._getElement();
      this._config.isAnimated && Wt(e),
        e.classList.add(Gi),
        this._emulateAnimation(() => {
          Kt(t);
        });
    }
    hide(t) {
      this._config.isVisible
        ? (this._getElement().classList.remove(Gi),
          this._emulateAnimation(() => {
            this.dispose(), Kt(t);
          }))
        : Kt(t);
    }
    dispose() {
      this._isAppended &&
        (he.off(this._element, Ji),
        this._element.remove(),
        (this._isAppended = !1));
    }
    _getElement() {
      if (!this._element) {
        const t = document.createElement("div");
        (t.className = this._config.className),
          this._config.isAnimated && t.classList.add("fade"),
          (this._element = t);
      }
      return this._element;
    }
    _configAfterMerge(t) {
      return (t.rootElement = Mt(t.rootElement)), t;
    }
    _append() {
      if (this._isAppended) return;
      const t = this._getElement();
      this._config.rootElement.append(t),
        he.on(t, Ji, () => {
          Kt(this._config.clickCallback);
        }),
        (this._isAppended = !0);
    }
    _emulateAnimation(t) {
      Yt(t, this._getElement(), this._config.isAnimated);
    }
  }
  const nn = ".bs.focustrap",
    sn = `focusin${nn}`,
    on = `keydown.tab${nn}`,
    rn = "backward",
    an = { autofocus: !0, trapElement: null },
    ln = { autofocus: "boolean", trapElement: "element" };
  class cn extends _e {
    constructor(t) {
      super(),
        (this._config = this._getConfig(t)),
        (this._isActive = !1),
        (this._lastTabNavDirection = null);
    }
    static get Default() {
      return an;
    }
    static get DefaultType() {
      return ln;
    }
    static get NAME() {
      return "focustrap";
    }
    activate() {
      this._isActive ||
        (this._config.autofocus && this._config.trapElement.focus(),
        he.off(document, nn),
        he.on(document, sn, (t) => this._handleFocusin(t)),
        he.on(document, on, (t) => this._handleKeydown(t)),
        (this._isActive = !0));
    }
    deactivate() {
      this._isActive && ((this._isActive = !1), he.off(document, nn));
    }
    _handleFocusin(t) {
      const { trapElement: e } = this._config;
      if (t.target === document || t.target === e || e.contains(t.target))
        return;
      const i = ye.focusableChildren(e);
      0 === i.length
        ? e.focus()
        : this._lastTabNavDirection === rn
        ? i[i.length - 1].focus()
        : i[0].focus();
    }
    _handleKeydown(t) {
      "Tab" === t.key &&
        (this._lastTabNavDirection = t.shiftKey ? rn : "forward");
    }
  }
  const hn = ".bs.modal",
    dn = `hide${hn}`,
    un = `hidePrevented${hn}`,
    fn = `hidden${hn}`,
    pn = `show${hn}`,
    mn = `shown${hn}`,
    gn = `resize${hn}`,
    _n = `click.dismiss${hn}`,
    bn = `mousedown.dismiss${hn}`,
    vn = `keydown.dismiss${hn}`,
    yn = `click${hn}.data-api`,
    wn = "modal-open",
    En = "show",
    An = "modal-static",
    Tn = { backdrop: !0, focus: !0, keyboard: !0 },
    Cn = {
      backdrop: "(boolean|string)",
      focus: "boolean",
      keyboard: "boolean",
    };
  class On extends be {
    constructor(t, e) {
      super(t, e),
        (this._dialog = ye.findOne(".modal-dialog", this._element)),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        (this._isShown = !1),
        (this._isTransitioning = !1),
        (this._scrollBar = new Xi()),
        this._addEventListeners();
    }
    static get Default() {
      return Tn;
    }
    static get DefaultType() {
      return Cn;
    }
    static get NAME() {
      return "modal";
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      this._isShown ||
        this._isTransitioning ||
        he.trigger(this._element, pn, { relatedTarget: t }).defaultPrevented ||
        ((this._isShown = !0),
        (this._isTransitioning = !0),
        this._scrollBar.hide(),
        document.body.classList.add(wn),
        this._adjustDialog(),
        this._backdrop.show(() => this._showElement(t)));
    }
    hide() {
      this._isShown &&
        !this._isTransitioning &&
        (he.trigger(this._element, dn).defaultPrevented ||
          ((this._isShown = !1),
          (this._isTransitioning = !0),
          this._focustrap.deactivate(),
          this._element.classList.remove(En),
          this._queueCallback(
            () => this._hideModal(),
            this._element,
            this._isAnimated()
          )));
    }
    dispose() {
      for (const t of [window, this._dialog]) he.off(t, hn);
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }
    _initializeBackDrop() {
      return new en({
        isVisible: Boolean(this._config.backdrop),
        isAnimated: this._isAnimated(),
      });
    }
    _initializeFocusTrap() {
      return new cn({ trapElement: this._element });
    }
    _showElement(t) {
      document.body.contains(this._element) ||
        document.body.append(this._element),
        (this._element.style.display = "block"),
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        (this._element.scrollTop = 0);
      const e = ye.findOne(".modal-body", this._dialog);
      e && (e.scrollTop = 0),
        Wt(this._element),
        this._element.classList.add(En),
        this._queueCallback(
          () => {
            this._config.focus && this._focustrap.activate(),
              (this._isTransitioning = !1),
              he.trigger(this._element, mn, { relatedTarget: t });
          },
          this._dialog,
          this._isAnimated()
        );
    }
    _addEventListeners() {
      he.on(this._element, vn, (t) => {
        if ("Escape" === t.key)
          return this._config.keyboard
            ? (t.preventDefault(), void this.hide())
            : void this._triggerBackdropTransition();
      }),
        he.on(window, gn, () => {
          this._isShown && !this._isTransitioning && this._adjustDialog();
        }),
        he.on(this._element, bn, (t) => {
          he.one(this._element, _n, (e) => {
            this._element === t.target &&
              this._element === e.target &&
              ("static" !== this._config.backdrop
                ? this._config.backdrop && this.hide()
                : this._triggerBackdropTransition());
          });
        });
    }
    _hideModal() {
      (this._element.style.display = "none"),
        this._element.setAttribute("aria-hidden", !0),
        this._element.removeAttribute("aria-modal"),
        this._element.removeAttribute("role"),
        (this._isTransitioning = !1),
        this._backdrop.hide(() => {
          document.body.classList.remove(wn),
            this._resetAdjustments(),
            this._scrollBar.reset(),
            he.trigger(this._element, fn);
        });
    }
    _isAnimated() {
      return this._element.classList.contains("fade");
    }
    _triggerBackdropTransition() {
      if (he.trigger(this._element, un).defaultPrevented) return;
      const t =
          this._element.scrollHeight > document.documentElement.clientHeight,
        e = this._element.style.overflowY;
      "hidden" === e ||
        this._element.classList.contains(An) ||
        (t || (this._element.style.overflowY = "hidden"),
        this._element.classList.add(An),
        this._queueCallback(() => {
          this._element.classList.remove(An),
            this._queueCallback(() => {
              this._element.style.overflowY = e;
            }, this._dialog);
        }, this._dialog),
        this._element.focus());
    }
    _adjustDialog() {
      const t =
          this._element.scrollHeight > document.documentElement.clientHeight,
        e = this._scrollBar.getWidth(),
        i = e > 0;
      if (i && !t) {
        const t = qt() ? "paddingLeft" : "paddingRight";
        this._element.style[t] = `${e}px`;
      }
      if (!i && t) {
        const t = qt() ? "paddingRight" : "paddingLeft";
        this._element.style[t] = `${e}px`;
      }
    }
    _resetAdjustments() {
      (this._element.style.paddingLeft = ""),
        (this._element.style.paddingRight = "");
    }
    static jQueryInterface(t, e) {
      return this.each(function () {
        const i = On.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
          i[t](e);
        }
      });
    }
  }
  he.on(document, yn, '[data-bs-toggle="modal"]', function (t) {
    const e = ye.getElementFromSelector(this);
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
      he.one(e, pn, (t) => {
        t.defaultPrevented ||
          he.one(e, fn, () => {
            jt(this) && this.focus();
          });
      });
    const i = ye.findOne(".modal.show");
    i && On.getInstance(i).hide(), On.getOrCreateInstance(e).toggle(this);
  }),
    we(On),
    Vt(On);
  const xn = ".bs.offcanvas",
    kn = ".data-api",
    Ln = `load${xn}${kn}`,
    Sn = "show",
    Dn = "showing",
    $n = "hiding",
    In = ".offcanvas.show",
    Nn = `show${xn}`,
    Pn = `shown${xn}`,
    Mn = `hide${xn}`,
    jn = `hidePrevented${xn}`,
    Fn = `hidden${xn}`,
    Hn = `resize${xn}`,
    Bn = `click${xn}${kn}`,
    Wn = `keydown.dismiss${xn}`,
    zn = { backdrop: !0, keyboard: !0, scroll: !1 },
    Rn = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      scroll: "boolean",
    };
  class qn extends be {
    constructor(t, e) {
      super(t, e),
        (this._isShown = !1),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        this._addEventListeners();
    }
    static get Default() {
      return zn;
    }
    static get DefaultType() {
      return Rn;
    }
    static get NAME() {
      return "offcanvas";
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      this._isShown ||
        he.trigger(this._element, Nn, { relatedTarget: t }).defaultPrevented ||
        ((this._isShown = !0),
        this._backdrop.show(),
        this._config.scroll || new Xi().hide(),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        this._element.classList.add(Dn),
        this._queueCallback(
          () => {
            (this._config.scroll && !this._config.backdrop) ||
              this._focustrap.activate(),
              this._element.classList.add(Sn),
              this._element.classList.remove(Dn),
              he.trigger(this._element, Pn, { relatedTarget: t });
          },
          this._element,
          !0
        ));
    }
    hide() {
      this._isShown &&
        (he.trigger(this._element, Mn).defaultPrevented ||
          (this._focustrap.deactivate(),
          this._element.blur(),
          (this._isShown = !1),
          this._element.classList.add($n),
          this._backdrop.hide(),
          this._queueCallback(
            () => {
              this._element.classList.remove(Sn, $n),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                this._config.scroll || new Xi().reset(),
                he.trigger(this._element, Fn);
            },
            this._element,
            !0
          )));
    }
    dispose() {
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    _initializeBackDrop() {
      const t = Boolean(this._config.backdrop);
      return new en({
        className: "offcanvas-backdrop",
        isVisible: t,
        isAnimated: !0,
        rootElement: this._element.parentNode,
        clickCallback: t
          ? () => {
              "static" !== this._config.backdrop
                ? this.hide()
                : he.trigger(this._element, jn);
            }
          : null,
      });
    }
    _initializeFocusTrap() {
      return new cn({ trapElement: this._element });
    }
    _addEventListeners() {
      he.on(this._element, Wn, (t) => {
        "Escape" === t.key &&
          (this._config.keyboard ? this.hide() : he.trigger(this._element, jn));
      });
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = qn.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  he.on(document, Bn, '[data-bs-toggle="offcanvas"]', function (t) {
    const e = ye.getElementFromSelector(this);
    if ((["A", "AREA"].includes(this.tagName) && t.preventDefault(), Ft(this)))
      return;
    he.one(e, Fn, () => {
      jt(this) && this.focus();
    });
    const i = ye.findOne(In);
    i && i !== e && qn.getInstance(i).hide(),
      qn.getOrCreateInstance(e).toggle(this);
  }),
    he.on(window, Ln, () => {
      for (const t of ye.find(In)) qn.getOrCreateInstance(t).show();
    }),
    he.on(window, Hn, () => {
      for (const t of ye.find("[aria-modal][class*=show][class*=offcanvas-]"))
        "fixed" !== getComputedStyle(t).position &&
          qn.getOrCreateInstance(t).hide();
    }),
    we(qn),
    Vt(qn);
  const Vn = new Set([
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href",
    ]),
    Kn = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
    Yn =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
    Qn = (t, e) => {
      const i = t.nodeName.toLowerCase();
      return e.includes(i)
        ? !Vn.has(i) || Boolean(Kn.test(t.nodeValue) || Yn.test(t.nodeValue))
        : e.filter((t) => t instanceof RegExp).some((t) => t.test(i));
    },
    Xn = {
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
      img: ["src", "srcset", "alt", "title", "width", "height"],
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
      ul: [],
    },
    Un = {
      allowList: Xn,
      content: {},
      extraClass: "",
      html: !1,
      sanitize: !0,
      sanitizeFn: null,
      template: "<div></div>",
    },
    Gn = {
      allowList: "object",
      content: "object",
      extraClass: "(string|function)",
      html: "boolean",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      template: "string",
    },
    Jn = {
      entry: "(string|element|function|null)",
      selector: "(string|element)",
    };
  class Zn extends _e {
    constructor(t) {
      super(), (this._config = this._getConfig(t));
    }
    static get Default() {
      return Un;
    }
    static get DefaultType() {
      return Gn;
    }
    static get NAME() {
      return "TemplateFactory";
    }
    getContent() {
      return Object.values(this._config.content)
        .map((t) => this._resolvePossibleFunction(t))
        .filter(Boolean);
    }
    hasContent() {
      return this.getContent().length > 0;
    }
    changeContent(t) {
      return (
        this._checkContent(t),
        (this._config.content = { ...this._config.content, ...t }),
        this
      );
    }
    toHtml() {
      const t = document.createElement("div");
      t.innerHTML = this._maybeSanitize(this._config.template);
      for (const [e, i] of Object.entries(this._config.content))
        this._setContent(t, i, e);
      const e = t.children[0],
        i = this._resolvePossibleFunction(this._config.extraClass);
      return i && e.classList.add(...i.split(" ")), e;
    }
    _typeCheckConfig(t) {
      super._typeCheckConfig(t), this._checkContent(t.content);
    }
    _checkContent(t) {
      for (const [e, i] of Object.entries(t))
        super._typeCheckConfig({ selector: e, entry: i }, Jn);
    }
    _setContent(t, e, i) {
      const n = ye.findOne(i, t);
      n &&
        ((e = this._resolvePossibleFunction(e))
          ? Pt(e)
            ? this._putElementInTemplate(Mt(e), n)
            : this._config.html
            ? (n.innerHTML = this._maybeSanitize(e))
            : (n.textContent = e)
          : n.remove());
    }
    _maybeSanitize(t) {
      return this._config.sanitize
        ? (function (t, e, i) {
            if (!t.length) return t;
            if (i && "function" == typeof i) return i(t);
            const n = new window.DOMParser().parseFromString(t, "text/html"),
              s = [].concat(...n.body.querySelectorAll("*"));
            for (const t of s) {
              const i = t.nodeName.toLowerCase();
              if (!Object.keys(e).includes(i)) {
                t.remove();
                continue;
              }
              const n = [].concat(...t.attributes),
                s = [].concat(e["*"] || [], e[i] || []);
              for (const e of n) Qn(e, s) || t.removeAttribute(e.nodeName);
            }
            return n.body.innerHTML;
          })(t, this._config.allowList, this._config.sanitizeFn)
        : t;
    }
    _resolvePossibleFunction(t) {
      return Kt(t, [this]);
    }
    _putElementInTemplate(t, e) {
      if (this._config.html) return (e.innerHTML = ""), void e.append(t);
      e.textContent = t.textContent;
    }
  }
  const ts = new Set(["sanitize", "allowList", "sanitizeFn"]),
    es = "fade",
    is = "show",
    ns = ".modal",
    ss = "hide.bs.modal",
    os = "hover",
    rs = "focus",
    as = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: qt() ? "left" : "right",
      BOTTOM: "bottom",
      LEFT: qt() ? "right" : "left",
    },
    ls = {
      allowList: Xn,
      animation: !0,
      boundary: "clippingParents",
      container: !1,
      customClass: "",
      delay: 0,
      fallbackPlacements: ["top", "right", "bottom", "left"],
      html: !1,
      offset: [0, 0],
      placement: "top",
      popperConfig: null,
      sanitize: !0,
      sanitizeFn: null,
      selector: !1,
      template:
        '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      title: "",
      trigger: "hover focus",
    },
    cs = {
      allowList: "object",
      animation: "boolean",
      boundary: "(string|element)",
      container: "(string|element|boolean)",
      customClass: "(string|function)",
      delay: "(number|object)",
      fallbackPlacements: "array",
      html: "boolean",
      offset: "(array|string|function)",
      placement: "(string|function)",
      popperConfig: "(null|object|function)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      selector: "(string|boolean)",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
    };
  class hs extends be {
    constructor(t, i) {
      if (void 0 === e)
        throw new TypeError(
          "Bootstrap's tooltips require Popper (https://popper.js.org)"
        );
      super(t, i),
        (this._isEnabled = !0),
        (this._timeout = 0),
        (this._isHovered = null),
        (this._activeTrigger = {}),
        (this._popper = null),
        (this._templateFactory = null),
        (this._newContent = null),
        (this.tip = null),
        this._setListeners(),
        this._config.selector || this._fixTitle();
    }
    static get Default() {
      return ls;
    }
    static get DefaultType() {
      return cs;
    }
    static get NAME() {
      return "tooltip";
    }
    enable() {
      this._isEnabled = !0;
    }
    disable() {
      this._isEnabled = !1;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle() {
      this._isEnabled &&
        ((this._activeTrigger.click = !this._activeTrigger.click),
        this._isShown() ? this._leave() : this._enter());
    }
    dispose() {
      clearTimeout(this._timeout),
        he.off(this._element.closest(ns), ss, this._hideModalHandler),
        this._element.getAttribute("data-bs-original-title") &&
          this._element.setAttribute(
            "title",
            this._element.getAttribute("data-bs-original-title")
          ),
        this._disposePopper(),
        super.dispose();
    }
    show() {
      if ("none" === this._element.style.display)
        throw new Error("Please use show on visible elements");
      if (!this._isWithContent() || !this._isEnabled) return;
      const t = he.trigger(this._element, this.constructor.eventName("show")),
        e = (
          Ht(this._element) || this._element.ownerDocument.documentElement
        ).contains(this._element);
      if (t.defaultPrevented || !e) return;
      this._disposePopper();
      const i = this._getTipElement();
      this._element.setAttribute("aria-describedby", i.getAttribute("id"));
      const { container: n } = this._config;
      if (
        (this._element.ownerDocument.documentElement.contains(this.tip) ||
          (n.append(i),
          he.trigger(this._element, this.constructor.eventName("inserted"))),
        (this._popper = this._createPopper(i)),
        i.classList.add(is),
        "ontouchstart" in document.documentElement)
      )
        for (const t of [].concat(...document.body.children))
          he.on(t, "mouseover", Bt);
      this._queueCallback(
        () => {
          he.trigger(this._element, this.constructor.eventName("shown")),
            !1 === this._isHovered && this._leave(),
            (this._isHovered = !1);
        },
        this.tip,
        this._isAnimated()
      );
    }
    hide() {
      if (
        this._isShown() &&
        !he.trigger(this._element, this.constructor.eventName("hide"))
          .defaultPrevented
      ) {
        if (
          (this._getTipElement().classList.remove(is),
          "ontouchstart" in document.documentElement)
        )
          for (const t of [].concat(...document.body.children))
            he.off(t, "mouseover", Bt);
        (this._activeTrigger.click = !1),
          (this._activeTrigger[rs] = !1),
          (this._activeTrigger[os] = !1),
          (this._isHovered = null),
          this._queueCallback(
            () => {
              this._isWithActiveTrigger() ||
                (this._isHovered || this._disposePopper(),
                this._element.removeAttribute("aria-describedby"),
                he.trigger(
                  this._element,
                  this.constructor.eventName("hidden")
                ));
            },
            this.tip,
            this._isAnimated()
          );
      }
    }
    update() {
      this._popper && this._popper.update();
    }
    _isWithContent() {
      return Boolean(this._getTitle());
    }
    _getTipElement() {
      return (
        this.tip ||
          (this.tip = this._createTipElement(
            this._newContent || this._getContentForTemplate()
          )),
        this.tip
      );
    }
    _createTipElement(t) {
      const e = this._getTemplateFactory(t).toHtml();
      if (!e) return null;
      e.classList.remove(es, is),
        e.classList.add(`bs-${this.constructor.NAME}-auto`);
      const i = ((t) => {
        do {
          t += Math.floor(1e6 * Math.random());
        } while (document.getElementById(t));
        return t;
      })(this.constructor.NAME).toString();
      return (
        e.setAttribute("id", i), this._isAnimated() && e.classList.add(es), e
      );
    }
    setContent(t) {
      (this._newContent = t),
        this._isShown() && (this._disposePopper(), this.show());
    }
    _getTemplateFactory(t) {
      return (
        this._templateFactory
          ? this._templateFactory.changeContent(t)
          : (this._templateFactory = new Zn({
              ...this._config,
              content: t,
              extraClass: this._resolvePossibleFunction(
                this._config.customClass
              ),
            })),
        this._templateFactory
      );
    }
    _getContentForTemplate() {
      return { ".tooltip-inner": this._getTitle() };
    }
    _getTitle() {
      return (
        this._resolvePossibleFunction(this._config.title) ||
        this._element.getAttribute("data-bs-original-title")
      );
    }
    _initializeOnDelegatedTarget(t) {
      return this.constructor.getOrCreateInstance(
        t.delegateTarget,
        this._getDelegateConfig()
      );
    }
    _isAnimated() {
      return (
        this._config.animation || (this.tip && this.tip.classList.contains(es))
      );
    }
    _isShown() {
      return this.tip && this.tip.classList.contains(is);
    }
    _createPopper(t) {
      const e = Kt(this._config.placement, [this, t, this._element]),
        i = as[e.toUpperCase()];
      return St(this._element, t, this._getPopperConfig(i));
    }
    _getOffset() {
      const { offset: t } = this._config;
      return "string" == typeof t
        ? t.split(",").map((t) => Number.parseInt(t, 10))
        : "function" == typeof t
        ? (e) => t(e, this._element)
        : t;
    }
    _resolvePossibleFunction(t) {
      return Kt(t, [this._element]);
    }
    _getPopperConfig(t) {
      const e = {
        placement: t,
        modifiers: [
          {
            name: "flip",
            options: { fallbackPlacements: this._config.fallbackPlacements },
          },
          { name: "offset", options: { offset: this._getOffset() } },
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          {
            name: "arrow",
            options: { element: `.${this.constructor.NAME}-arrow` },
          },
          {
            name: "preSetPlacement",
            enabled: !0,
            phase: "beforeMain",
            fn: (t) => {
              this._getTipElement().setAttribute(
                "data-popper-placement",
                t.state.placement
              );
            },
          },
        ],
      };
      return { ...e, ...Kt(this._config.popperConfig, [e]) };
    }
    _setListeners() {
      const t = this._config.trigger.split(" ");
      for (const e of t)
        if ("click" === e)
          he.on(
            this._element,
            this.constructor.eventName("click"),
            this._config.selector,
            (t) => {
              this._initializeOnDelegatedTarget(t).toggle();
            }
          );
        else if ("manual" !== e) {
          const t =
              e === os
                ? this.constructor.eventName("mouseenter")
                : this.constructor.eventName("focusin"),
            i =
              e === os
                ? this.constructor.eventName("mouseleave")
                : this.constructor.eventName("focusout");
          he.on(this._element, t, this._config.selector, (t) => {
            const e = this._initializeOnDelegatedTarget(t);
            (e._activeTrigger["focusin" === t.type ? rs : os] = !0), e._enter();
          }),
            he.on(this._element, i, this._config.selector, (t) => {
              const e = this._initializeOnDelegatedTarget(t);
              (e._activeTrigger["focusout" === t.type ? rs : os] =
                e._element.contains(t.relatedTarget)),
                e._leave();
            });
        }
      (this._hideModalHandler = () => {
        this._element && this.hide();
      }),
        he.on(this._element.closest(ns), ss, this._hideModalHandler);
    }
    _fixTitle() {
      const t = this._element.getAttribute("title");
      t &&
        (this._element.getAttribute("aria-label") ||
          this._element.textContent.trim() ||
          this._element.setAttribute("aria-label", t),
        this._element.setAttribute("data-bs-original-title", t),
        this._element.removeAttribute("title"));
    }
    _enter() {
      this._isShown() || this._isHovered
        ? (this._isHovered = !0)
        : ((this._isHovered = !0),
          this._setTimeout(() => {
            this._isHovered && this.show();
          }, this._config.delay.show));
    }
    _leave() {
      this._isWithActiveTrigger() ||
        ((this._isHovered = !1),
        this._setTimeout(() => {
          this._isHovered || this.hide();
        }, this._config.delay.hide));
    }
    _setTimeout(t, e) {
      clearTimeout(this._timeout), (this._timeout = setTimeout(t, e));
    }
    _isWithActiveTrigger() {
      return Object.values(this._activeTrigger).includes(!0);
    }
    _getConfig(t) {
      const e = ge.getDataAttributes(this._element);
      for (const t of Object.keys(e)) ts.has(t) && delete e[t];
      return (
        (t = { ...e, ...("object" == typeof t && t ? t : {}) }),
        (t = this._mergeConfigObj(t)),
        (t = this._configAfterMerge(t)),
        this._typeCheckConfig(t),
        t
      );
    }
    _configAfterMerge(t) {
      return (
        (t.container = !1 === t.container ? document.body : Mt(t.container)),
        "number" == typeof t.delay &&
          (t.delay = { show: t.delay, hide: t.delay }),
        "number" == typeof t.title && (t.title = t.title.toString()),
        "number" == typeof t.content && (t.content = t.content.toString()),
        t
      );
    }
    _getDelegateConfig() {
      const t = {};
      for (const [e, i] of Object.entries(this._config))
        this.constructor.Default[e] !== i && (t[e] = i);
      return (t.selector = !1), (t.trigger = "manual"), t;
    }
    _disposePopper() {
      this._popper && (this._popper.destroy(), (this._popper = null)),
        this.tip && (this.tip.remove(), (this.tip = null));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = hs.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  Vt(hs);
  const ds = {
      ...hs.Default,
      content: "",
      offset: [0, 8],
      placement: "right",
      template:
        '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      trigger: "click",
    },
    us = { ...hs.DefaultType, content: "(null|string|element|function)" };
  class fs extends hs {
    static get Default() {
      return ds;
    }
    static get DefaultType() {
      return us;
    }
    static get NAME() {
      return "popover";
    }
    _isWithContent() {
      return this._getTitle() || this._getContent();
    }
    _getContentForTemplate() {
      return {
        ".popover-header": this._getTitle(),
        ".popover-body": this._getContent(),
      };
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = fs.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  Vt(fs);
  const ps = ".bs.scrollspy",
    ms = `activate${ps}`,
    gs = `click${ps}`,
    _s = `load${ps}.data-api`,
    bs = "active",
    vs = "[href]",
    ys = ".nav-link",
    ws = `${ys}, .nav-item > ${ys}, .list-group-item`,
    Es = {
      offset: null,
      rootMargin: "0px 0px -25%",
      smoothScroll: !1,
      target: null,
      threshold: [0.1, 0.5, 1],
    },
    As = {
      offset: "(number|null)",
      rootMargin: "string",
      smoothScroll: "boolean",
      target: "element",
      threshold: "array",
    };
  class Ts extends be {
    constructor(t, e) {
      super(t, e),
        (this._targetLinks = new Map()),
        (this._observableSections = new Map()),
        (this._rootElement =
          "visible" === getComputedStyle(this._element).overflowY
            ? null
            : this._element),
        (this._activeTarget = null),
        (this._observer = null),
        (this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }),
        this.refresh();
    }
    static get Default() {
      return Es;
    }
    static get DefaultType() {
      return As;
    }
    static get NAME() {
      return "scrollspy";
    }
    refresh() {
      this._initializeTargetsAndObservables(),
        this._maybeEnableSmoothScroll(),
        this._observer
          ? this._observer.disconnect()
          : (this._observer = this._getNewObserver());
      for (const t of this._observableSections.values())
        this._observer.observe(t);
    }
    dispose() {
      this._observer.disconnect(), super.dispose();
    }
    _configAfterMerge(t) {
      return (
        (t.target = Mt(t.target) || document.body),
        (t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin),
        "string" == typeof t.threshold &&
          (t.threshold = t.threshold
            .split(",")
            .map((t) => Number.parseFloat(t))),
        t
      );
    }
    _maybeEnableSmoothScroll() {
      this._config.smoothScroll &&
        (he.off(this._config.target, gs),
        he.on(this._config.target, gs, vs, (t) => {
          const e = this._observableSections.get(t.target.hash);
          if (e) {
            t.preventDefault();
            const i = this._rootElement || window,
              n = e.offsetTop - this._element.offsetTop;
            if (i.scrollTo)
              return void i.scrollTo({ top: n, behavior: "smooth" });
            i.scrollTop = n;
          }
        }));
    }
    _getNewObserver() {
      const t = {
        root: this._rootElement,
        threshold: this._config.threshold,
        rootMargin: this._config.rootMargin,
      };
      return new IntersectionObserver((t) => this._observerCallback(t), t);
    }
    _observerCallback(t) {
      const e = (t) => this._targetLinks.get(`#${t.target.id}`),
        i = (t) => {
          (this._previousScrollData.visibleEntryTop = t.target.offsetTop),
            this._process(e(t));
        },
        n = (this._rootElement || document.documentElement).scrollTop,
        s = n >= this._previousScrollData.parentScrollTop;
      this._previousScrollData.parentScrollTop = n;
      for (const o of t) {
        if (!o.isIntersecting) {
          (this._activeTarget = null), this._clearActiveClass(e(o));
          continue;
        }
        const t =
          o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
        if (s && t) {
          if ((i(o), !n)) return;
        } else s || t || i(o);
      }
    }
    _initializeTargetsAndObservables() {
      (this._targetLinks = new Map()), (this._observableSections = new Map());
      const t = ye.find(vs, this._config.target);
      for (const e of t) {
        if (!e.hash || Ft(e)) continue;
        const t = ye.findOne(e.hash, this._element);
        jt(t) &&
          (this._targetLinks.set(e.hash, e),
          this._observableSections.set(e.hash, t));
      }
    }
    _process(t) {
      this._activeTarget !== t &&
        (this._clearActiveClass(this._config.target),
        (this._activeTarget = t),
        t.classList.add(bs),
        this._activateParents(t),
        he.trigger(this._element, ms, { relatedTarget: t }));
    }
    _activateParents(t) {
      if (t.classList.contains("dropdown-item"))
        ye.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(
          bs
        );
      else
        for (const e of ye.parents(t, ".nav, .list-group"))
          for (const t of ye.prev(e, ws)) t.classList.add(bs);
    }
    _clearActiveClass(t) {
      t.classList.remove(bs);
      const e = ye.find(`${vs}.${bs}`, t);
      for (const t of e) t.classList.remove(bs);
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Ts.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  he.on(window, _s, () => {
    for (const t of ye.find('[data-bs-spy="scroll"]'))
      Ts.getOrCreateInstance(t);
  }),
    Vt(Ts);
  const Cs = ".bs.tab",
    Os = `hide${Cs}`,
    xs = `hidden${Cs}`,
    ks = `show${Cs}`,
    Ls = `shown${Cs}`,
    Ss = `click${Cs}`,
    Ds = `keydown${Cs}`,
    $s = `load${Cs}`,
    Is = "ArrowLeft",
    Ns = "ArrowRight",
    Ps = "ArrowUp",
    Ms = "ArrowDown",
    js = "active",
    Fs = "fade",
    Hs = "show",
    Bs = ":not(.dropdown-toggle)",
    Ws =
      '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
    zs = `.nav-link${Bs}, .list-group-item${Bs}, [role="tab"]${Bs}, ${Ws}`,
    Rs = `.${js}[data-bs-toggle="tab"], .${js}[data-bs-toggle="pill"], .${js}[data-bs-toggle="list"]`;
  class qs extends be {
    constructor(t) {
      super(t),
        (this._parent = this._element.closest(
          '.list-group, .nav, [role="tablist"]'
        )),
        this._parent &&
          (this._setInitialAttributes(this._parent, this._getChildren()),
          he.on(this._element, Ds, (t) => this._keydown(t)));
    }
    static get NAME() {
      return "tab";
    }
    show() {
      const t = this._element;
      if (this._elemIsActive(t)) return;
      const e = this._getActiveElem(),
        i = e ? he.trigger(e, Os, { relatedTarget: t }) : null;
      he.trigger(t, ks, { relatedTarget: e }).defaultPrevented ||
        (i && i.defaultPrevented) ||
        (this._deactivate(e, t), this._activate(t, e));
    }
    _activate(t, e) {
      t &&
        (t.classList.add(js),
        this._activate(ye.getElementFromSelector(t)),
        this._queueCallback(
          () => {
            "tab" === t.getAttribute("role")
              ? (t.removeAttribute("tabindex"),
                t.setAttribute("aria-selected", !0),
                this._toggleDropDown(t, !0),
                he.trigger(t, Ls, { relatedTarget: e }))
              : t.classList.add(Hs);
          },
          t,
          t.classList.contains(Fs)
        ));
    }
    _deactivate(t, e) {
      t &&
        (t.classList.remove(js),
        t.blur(),
        this._deactivate(ye.getElementFromSelector(t)),
        this._queueCallback(
          () => {
            "tab" === t.getAttribute("role")
              ? (t.setAttribute("aria-selected", !1),
                t.setAttribute("tabindex", "-1"),
                this._toggleDropDown(t, !1),
                he.trigger(t, xs, { relatedTarget: e }))
              : t.classList.remove(Hs);
          },
          t,
          t.classList.contains(Fs)
        ));
    }
    _keydown(t) {
      if (![Is, Ns, Ps, Ms].includes(t.key)) return;
      t.stopPropagation(), t.preventDefault();
      const e = [Ns, Ms].includes(t.key),
        i = Qt(
          this._getChildren().filter((t) => !Ft(t)),
          t.target,
          e,
          !0
        );
      i && (i.focus({ preventScroll: !0 }), qs.getOrCreateInstance(i).show());
    }
    _getChildren() {
      return ye.find(zs, this._parent);
    }
    _getActiveElem() {
      return this._getChildren().find((t) => this._elemIsActive(t)) || null;
    }
    _setInitialAttributes(t, e) {
      this._setAttributeIfNotExists(t, "role", "tablist");
      for (const t of e) this._setInitialAttributesOnChild(t);
    }
    _setInitialAttributesOnChild(t) {
      t = this._getInnerElement(t);
      const e = this._elemIsActive(t),
        i = this._getOuterElement(t);
      t.setAttribute("aria-selected", e),
        i !== t && this._setAttributeIfNotExists(i, "role", "presentation"),
        e || t.setAttribute("tabindex", "-1"),
        this._setAttributeIfNotExists(t, "role", "tab"),
        this._setInitialAttributesOnTargetPanel(t);
    }
    _setInitialAttributesOnTargetPanel(t) {
      const e = ye.getElementFromSelector(t);
      e &&
        (this._setAttributeIfNotExists(e, "role", "tabpanel"),
        t.id &&
          this._setAttributeIfNotExists(e, "aria-labelledby", `#${t.id}`));
    }
    _toggleDropDown(t, e) {
      const i = this._getOuterElement(t);
      if (!i.classList.contains("dropdown")) return;
      const n = (t, n) => {
        const s = ye.findOne(t, i);
        s && s.classList.toggle(n, e);
      };
      n(".dropdown-toggle", js),
        n(".dropdown-menu", Hs),
        i.setAttribute("aria-expanded", e);
    }
    _setAttributeIfNotExists(t, e, i) {
      t.hasAttribute(e) || t.setAttribute(e, i);
    }
    _elemIsActive(t) {
      return t.classList.contains(js);
    }
    _getInnerElement(t) {
      return t.matches(zs) ? t : ye.findOne(zs, t);
    }
    _getOuterElement(t) {
      return t.closest(".nav-item, .list-group-item") || t;
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = qs.getOrCreateInstance(this);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  he.on(document, Ss, Ws, function (t) {
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
      Ft(this) || qs.getOrCreateInstance(this).show();
  }),
    he.on(window, $s, () => {
      for (const t of ye.find(Rs)) qs.getOrCreateInstance(t);
    }),
    Vt(qs);
  const Vs = ".bs.toast",
    Ks = `mouseover${Vs}`,
    Ys = `mouseout${Vs}`,
    Qs = `focusin${Vs}`,
    Xs = `focusout${Vs}`,
    Us = `hide${Vs}`,
    Gs = `hidden${Vs}`,
    Js = `show${Vs}`,
    Zs = `shown${Vs}`,
    to = "hide",
    eo = "show",
    io = "showing",
    no = { animation: "boolean", autohide: "boolean", delay: "number" },
    so = { animation: !0, autohide: !0, delay: 5e3 };
  class oo extends be {
    constructor(t, e) {
      super(t, e),
        (this._timeout = null),
        (this._hasMouseInteraction = !1),
        (this._hasKeyboardInteraction = !1),
        this._setListeners();
    }
    static get Default() {
      return so;
    }
    static get DefaultType() {
      return no;
    }
    static get NAME() {
      return "toast";
    }
    show() {
      he.trigger(this._element, Js).defaultPrevented ||
        (this._clearTimeout(),
        this._config.animation && this._element.classList.add("fade"),
        this._element.classList.remove(to),
        Wt(this._element),
        this._element.classList.add(eo, io),
        this._queueCallback(
          () => {
            this._element.classList.remove(io),
              he.trigger(this._element, Zs),
              this._maybeScheduleHide();
          },
          this._element,
          this._config.animation
        ));
    }
    hide() {
      this.isShown() &&
        (he.trigger(this._element, Us).defaultPrevented ||
          (this._element.classList.add(io),
          this._queueCallback(
            () => {
              this._element.classList.add(to),
                this._element.classList.remove(io, eo),
                he.trigger(this._element, Gs);
            },
            this._element,
            this._config.animation
          )));
    }
    dispose() {
      this._clearTimeout(),
        this.isShown() && this._element.classList.remove(eo),
        super.dispose();
    }
    isShown() {
      return this._element.classList.contains(eo);
    }
    _maybeScheduleHide() {
      this._config.autohide &&
        (this._hasMouseInteraction ||
          this._hasKeyboardInteraction ||
          (this._timeout = setTimeout(() => {
            this.hide();
          }, this._config.delay)));
    }
    _onInteraction(t, e) {
      switch (t.type) {
        case "mouseover":
        case "mouseout":
          this._hasMouseInteraction = e;
          break;
        case "focusin":
        case "focusout":
          this._hasKeyboardInteraction = e;
      }
      if (e) return void this._clearTimeout();
      const i = t.relatedTarget;
      this._element === i ||
        this._element.contains(i) ||
        this._maybeScheduleHide();
    }
    _setListeners() {
      he.on(this._element, Ks, (t) => this._onInteraction(t, !0)),
        he.on(this._element, Ys, (t) => this._onInteraction(t, !1)),
        he.on(this._element, Qs, (t) => this._onInteraction(t, !0)),
        he.on(this._element, Xs, (t) => this._onInteraction(t, !1));
    }
    _clearTimeout() {
      clearTimeout(this._timeout), (this._timeout = null);
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = oo.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  we(oo),
    Vt(oo),
    document.getElementById("darkMode").addEventListener("click", () => {
      "dark" == document.documentElement.getAttribute("data-bs-theme")
        ? document.documentElement.setAttribute("data-bs-theme", "light")
        : document.documentElement.setAttribute("data-bs-theme", "dark");
    });
  const ro = [
    "dreamer",
    "problem solver",
    "art enthusiast",
    "team leader",
    "team player",
    "nerd",
    "traveller",
    "curious learner",
    "culture lover",
    "language addicted",
  ];
  let ao = 0,
    lo = document.getElementById("carousel-words");
  setInterval(function () {
    (lo.innerHTML = ro[ao]), ao++, ao >= ro.length && (ao = 0);
  }, 1500);
  let co = new Date().getFullYear();
  document.getElementById("current-year").innerHTML = co;
})();
const spinnerWrapperEl = document.querySelector(".spinner-wrapper");
window.addEventListener("load", () => {
  spinnerWrapperEl.style.opacity = "0";
  setTimeout(() => {
    spinnerWrapperEl.style.display = "none";
  }, 300);
});
window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      this.contact_number.value = (Math.random() * 100000) | 0;
      emailjs.sendForm("contact_service", "contact_form", this).then(
        function () {
          console.log("SUCCESS!");
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    });
};
