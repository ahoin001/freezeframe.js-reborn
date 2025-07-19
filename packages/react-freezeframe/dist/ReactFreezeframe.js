import ee, { Component as re, createRef as te } from "react";
import ne from "freezeframe";
var A = { exports: {} }, R = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var F;
function oe() {
  if (F) return R;
  F = 1;
  var u = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function s(m, i, l) {
    var p = null;
    if (l !== void 0 && (p = "" + l), i.key !== void 0 && (p = "" + i.key), "key" in i) {
      l = {};
      for (var E in i)
        E !== "key" && (l[E] = i[E]);
    } else l = i;
    return i = l.ref, {
      $$typeof: u,
      type: m,
      key: p,
      ref: i !== void 0 ? i : null,
      props: l
    };
  }
  return R.Fragment = n, R.jsx = s, R.jsxs = s, R;
}
var b = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var I;
function ae() {
  return I || (I = 1, process.env.NODE_ENV !== "production" && function() {
    function u(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Z ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case _:
          return "Fragment";
        case U:
          return "Profiler";
        case L:
          return "StrictMode";
        case J:
          return "Suspense";
        case X:
          return "SuspenseList";
        case H:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case W:
            return "Portal";
          case q:
            return (e.displayName || "Context") + ".Provider";
          case V:
            return (e._context.displayName || "Context") + ".Consumer";
          case G:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case B:
            return r = e.displayName || null, r !== null ? r : u(e.type) || "Memo";
          case x:
            r = e._payload, e = e._init;
            try {
              return u(e(r));
            } catch {
            }
        }
      return null;
    }
    function n(e) {
      return "" + e;
    }
    function s(e) {
      try {
        n(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, o = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          o
        ), n(e);
      }
    }
    function m(e) {
      if (e === _) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === x)
        return "<...>";
      try {
        var r = u(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var e = h.A;
      return e === null ? null : e.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function p(e) {
      if (y.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function E(e, r) {
      function t() {
        N || (N = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function D() {
      var e = u(this.type);
      return C[e] || (C[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function M(e, r, t, o, f, c, k, S) {
      return t = c.ref, e = {
        $$typeof: j,
        type: e,
        key: r,
        props: c,
        _owner: f
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: D
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: k
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: S
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function w(e, r, t, o, f, c, k, S) {
      var a = r.children;
      if (a !== void 0)
        if (o)
          if (Q(a)) {
            for (o = 0; o < a.length; o++)
              P(a[o]);
            Object.freeze && Object.freeze(a);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else P(a);
      if (y.call(r, "key")) {
        a = u(e);
        var d = Object.keys(r).filter(function(K) {
          return K !== "key";
        });
        o = 0 < d.length ? "{key: someKey, " + d.join(": ..., ") + ": ...}" : "{key: someKey}", $[a + o] || (d = 0 < d.length ? "{" + d.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          o,
          a,
          d,
          a
        ), $[a + o] = !0);
      }
      if (a = null, t !== void 0 && (s(t), a = "" + t), p(r) && (s(r.key), a = "" + r.key), "key" in r) {
        t = {};
        for (var g in r)
          g !== "key" && (t[g] = r[g]);
      } else t = r;
      return a && E(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), M(
        e,
        a,
        c,
        f,
        i(),
        t,
        k,
        S
      );
    }
    function P(e) {
      typeof e == "object" && e !== null && e.$$typeof === j && e._store && (e._store.validated = 1);
    }
    var v = ee, j = Symbol.for("react.transitional.element"), W = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), L = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), V = Symbol.for("react.consumer"), q = Symbol.for("react.context"), G = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), X = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), H = Symbol.for("react.activity"), Z = Symbol.for("react.client.reference"), h = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, y = Object.prototype.hasOwnProperty, Q = Array.isArray, T = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var N, C = {}, z = v["react-stack-bottom-frame"].bind(
      v,
      l
    )(), Y = T(m(l)), $ = {};
    b.Fragment = _, b.jsx = function(e, r, t, o, f) {
      var c = 1e4 > h.recentlyCreatedOwnerStacks++;
      return w(
        e,
        r,
        t,
        !1,
        o,
        f,
        c ? Error("react-stack-top-frame") : z,
        c ? T(m(e)) : Y
      );
    }, b.jsxs = function(e, r, t, o, f) {
      var c = 1e4 > h.recentlyCreatedOwnerStacks++;
      return w(
        e,
        r,
        t,
        !0,
        o,
        f,
        c ? Error("react-stack-top-frame") : z,
        c ? T(m(e)) : Y
      );
    };
  }()), b;
}
process.env.NODE_ENV === "production" ? A.exports = oe() : A.exports = ae();
var O = A.exports;
class le extends re {
  constructor(n) {
    super(n), this.freeze = te(), this.state = {
      isPlaying: !1
    }, this.props = n;
  }
  componentDidMount() {
    if (this.freeze.current === null)
      throw new ReferenceError("You must provide a valid ref");
    this.$freezeframe = new ne(this.freeze.current, this.props.options), this.$freezeframe.on("toggle", (n, s) => {
      s ? this.props.onStart && this.props.onStart(n, s) : this.props.onStop && this.props.onStop(n, s), this.props.onToggle && this.props.onToggle(n, s);
    });
  }
  componenWillUnmount() {
    this.$freezeframe && this.$freezeframe.destroy();
  }
  render() {
    const { children: n, alt: s, src: m } = this.props;
    return /* @__PURE__ */ O.jsx("div", { className: "react-freezeframe", children: n ? /* @__PURE__ */ O.jsx("div", { ref: this.freeze, children: n }) : /* @__PURE__ */ O.jsx(
      "img",
      {
        ref: this.freeze,
        alt: s,
        src: m
      }
    ) });
  }
  start() {
    var n;
    (n = this.$freezeframe) == null || n.start(), this.setState({
      isPlaying: !0
    });
  }
  stop() {
    var n;
    (n = this.$freezeframe) == null || n.stop(), this.setState({
      isPlaying: !1
    });
  }
  toggle() {
    this.state.isPlaying ? this.stop() : this.start();
  }
}
export {
  le as default
};
//# sourceMappingURL=ReactFreezeframe.js.map
