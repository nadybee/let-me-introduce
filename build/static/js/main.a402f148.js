/*! For license information please see main.a402f148.js.LICENSE.txt */
!(function () {
  "use strict"
  var e = {
      463: function (e, t, n) {
        var r = n(791),
          a = n(296)
        function l(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n])
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          )
        }
        var o = new Set(),
          i = {}
        function u(e, t) {
          s(e, t), s(e + "Capture", t)
        }
        function s(e, t) {
          for (i[e] = t, e = 0; e < t.length; e++) o.add(t[e])
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          m = {}
        function h(e, t, n, r, a, l, o) {
          ;(this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = l),
            (this.removeEmptyString = o)
        }
        var v = {}
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            v[e] = new h(e, 0, !1, e, null, !1, !1)
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0]
            v[t] = new h(t, 1, !1, e[1], null, !1, !1)
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              v[e] = new h(e, 2, !1, e.toLowerCase(), null, !1, !1)
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            v[e] = new h(e, 2, !1, e, null, !1, !1)
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              v[e] = new h(e, 3, !1, e.toLowerCase(), null, !1, !1)
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            v[e] = new h(e, 3, !0, e, null, !1, !1)
          }),
          ["capture", "download"].forEach(function (e) {
            v[e] = new h(e, 4, !1, e, null, !1, !1)
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            v[e] = new h(e, 6, !1, e, null, !1, !1)
          }),
          ["rowSpan", "start"].forEach(function (e) {
            v[e] = new h(e, 5, !1, e.toLowerCase(), null, !1, !1)
          })
        var g = /[\-:]([a-z])/g
        function y(e) {
          return e[1].toUpperCase()
        }
        function b(e, t, n, r) {
          var a = v.hasOwnProperty(t) ? v[t] : null
          ;(null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      )
                    default:
                      return !1
                  }
                })(e, t, n, r)
              )
                return !0
              if (r) return !1
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t
                  case 4:
                    return !1 === t
                  case 5:
                    return isNaN(t)
                  case 6:
                    return isNaN(t) || 1 > t
                }
              return !1
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!d.call(m, e) ||
                    (!d.call(p, e) &&
                      (f.test(e) ? (m[e] = !0) : ((p[e] = !0), !1)))
                  )
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(g, y)
            v[t] = new h(t, 1, !1, e, null, !1, !1)
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(g, y)
              v[t] = new h(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(g, y)
            v[t] = new h(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            )
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            v[e] = new h(e, 1, !1, e.toLowerCase(), null, !1, !1)
          }),
          (v.xlinkHref = new h(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            v[e] = new h(e, 1, !1, e.toLowerCase(), null, !0, !0)
          })
        var x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          w = Symbol.for("react.element"),
          k = Symbol.for("react.portal"),
          S = Symbol.for("react.fragment"),
          E = Symbol.for("react.strict_mode"),
          j = Symbol.for("react.profiler"),
          N = Symbol.for("react.provider"),
          C = Symbol.for("react.context"),
          P = Symbol.for("react.forward_ref"),
          _ = Symbol.for("react.suspense"),
          T = Symbol.for("react.suspense_list"),
          L = Symbol.for("react.memo"),
          O = Symbol.for("react.lazy")
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode")
        var z = Symbol.for("react.offscreen")
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker")
        var F = Symbol.iterator
        function M(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (F && e[F]) || e["@@iterator"])
            ? e
            : null
        }
        var R,
          I = Object.assign
        function D(e) {
          if (void 0 === R)
            try {
              throw Error()
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/)
              R = (t && t[1]) || ""
            }
          return "\n" + R + e
        }
        var A = !1
        function B(e, t) {
          if (!e || A) return ""
          A = !0
          var n = Error.prepareStackTrace
          Error.prepareStackTrace = void 0
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error()
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error()
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, [])
                } catch (s) {
                  var r = s
                }
                Reflect.construct(e, [], t)
              } else {
                try {
                  t.call()
                } catch (s) {
                  r = s
                }
                e.call(t.prototype)
              }
            else {
              try {
                throw Error()
              } catch (s) {
                r = s
              }
              e()
            }
          } catch (s) {
            if (s && r && "string" === typeof s.stack) {
              for (
                var a = s.stack.split("\n"),
                  l = r.stack.split("\n"),
                  o = a.length - 1,
                  i = l.length - 1;
                1 <= o && 0 <= i && a[o] !== l[i];

              )
                i--
              for (; 1 <= o && 0 <= i; o--, i--)
                if (a[o] !== l[i]) {
                  if (1 !== o || 1 !== i)
                    do {
                      if ((o--, 0 > --i || a[o] !== l[i])) {
                        var u = "\n" + a[o].replace(" at new ", " at ")
                        return (
                          e.displayName &&
                            u.includes("<anonymous>") &&
                            (u = u.replace("<anonymous>", e.displayName)),
                          u
                        )
                      }
                    } while (1 <= o && 0 <= i)
                  break
                }
            }
          } finally {
            ;(A = !1), (Error.prepareStackTrace = n)
          }
          return (e = e ? e.displayName || e.name : "") ? D(e) : ""
        }
        function U(e) {
          switch (e.tag) {
            case 5:
              return D(e.type)
            case 16:
              return D("Lazy")
            case 13:
              return D("Suspense")
            case 19:
              return D("SuspenseList")
            case 0:
            case 2:
            case 15:
              return (e = B(e.type, !1))
            case 11:
              return (e = B(e.type.render, !1))
            case 1:
              return (e = B(e.type, !0))
            default:
              return ""
          }
        }
        function H(e) {
          if (null == e) return null
          if ("function" === typeof e) return e.displayName || e.name || null
          if ("string" === typeof e) return e
          switch (e) {
            case S:
              return "Fragment"
            case k:
              return "Portal"
            case j:
              return "Profiler"
            case E:
              return "StrictMode"
            case _:
              return "Suspense"
            case T:
              return "SuspenseList"
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case C:
                return (e.displayName || "Context") + ".Consumer"
              case N:
                return (e._context.displayName || "Context") + ".Provider"
              case P:
                var t = e.render
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                )
              case L:
                return null !== (t = e.displayName || null)
                  ? t
                  : H(e.type) || "Memo"
              case O:
                ;(t = e._payload), (e = e._init)
                try {
                  return H(e(t))
                } catch (n) {}
            }
          return null
        }
        function V(e) {
          var t = e.type
          switch (e.tag) {
            case 24:
              return "Cache"
            case 9:
              return (t.displayName || "Context") + ".Consumer"
            case 10:
              return (t._context.displayName || "Context") + ".Provider"
            case 18:
              return "DehydratedFragment"
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              )
            case 7:
              return "Fragment"
            case 5:
              return t
            case 4:
              return "Portal"
            case 3:
              return "Root"
            case 6:
              return "Text"
            case 16:
              return H(t)
            case 8:
              return t === E ? "StrictMode" : "Mode"
            case 22:
              return "Offscreen"
            case 12:
              return "Profiler"
            case 21:
              return "Scope"
            case 13:
              return "Suspense"
            case 19:
              return "SuspenseList"
            case 25:
              return "TracingMarker"
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null
              if ("string" === typeof t) return t
          }
          return null
        }
        function W(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e
            default:
              return ""
          }
        }
        function $(e) {
          var t = e.type
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          )
        }
        function Q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = $(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t]
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  l = n.set
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this)
                    },
                    set: function (e) {
                      ;(r = "" + e), l.call(this, e)
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r
                    },
                    setValue: function (e) {
                      r = "" + e
                    },
                    stopTracking: function () {
                      ;(e._valueTracker = null), delete e[t]
                    },
                  }
                )
              }
            })(e))
        }
        function q(e) {
          if (!e) return !1
          var t = e._valueTracker
          if (!t) return !0
          var n = t.getValue(),
            r = ""
          return (
            e && (r = $(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          )
        }
        function Y(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null
          try {
            return e.activeElement || e.body
          } catch (t) {
            return e.body
          }
        }
        function K(e, t) {
          var n = t.checked
          return I({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          })
        }
        function G(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked
          ;(n = W(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            })
        }
        function J(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1)
        }
        function X(e, t) {
          J(e, t)
          var n = W(t.value),
            r = t.type
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n)
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value")
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, W(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked)
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return
            ;(t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t)
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n)
        }
        function ee(e, t, n) {
          ;("number" === t && Y(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
        }
        var te = Array.isArray
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {}
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0)
          } else {
            for (n = "" + W(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                )
              null !== t || e[a].disabled || (t = e[a])
            }
            null !== t && (t.selected = !0)
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(l(91))
          return I({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          })
        }
        function ae(e, t) {
          var n = t.value
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(l(92))
              if (te(n)) {
                if (1 < n.length) throw Error(l(93))
                n = n[0]
              }
              t = n
            }
            null == t && (t = ""), (n = t)
          }
          e._wrapperState = { initialValue: W(n) }
        }
        function le(e, t) {
          var n = W(t.value),
            r = W(t.defaultValue)
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r)
        }
        function oe(e) {
          var t = e.textContent
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t)
        }
        function ie(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg"
            case "math":
              return "http://www.w3.org/1998/Math/MathML"
            default:
              return "http://www.w3.org/1999/xhtml"
          }
        }
        function ue(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? ie(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e
        }
        var se,
          ce,
          de =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t
              else {
                for (
                  (se = se || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = se.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild)
                for (; t.firstChild; ) e.appendChild(t.firstChild)
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t)
                  })
                }
              : ce)
        function fe(e, t) {
          if (t) {
            var n = e.firstChild
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t)
          }
          e.textContent = t
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          me = ["Webkit", "ms", "Moz", "O"]
        function he(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px"
        }
        function ve(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = he(n, t[n], r)
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a)
            }
        }
        Object.keys(pe).forEach(function (e) {
          me.forEach(function (t) {
            ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e])
          })
        })
        var ge = I(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        )
        function ye(e, t) {
          if (t) {
            if (
              ge[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(l(137, e))
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(l(60))
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(l(61))
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(l(62))
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1
            default:
              return !0
          }
        }
        var xe = null
        function we(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          )
        }
        var ke = null,
          Se = null,
          Ee = null
        function je(e) {
          if ((e = ba(e))) {
            if ("function" !== typeof ke) throw Error(l(280))
            var t = e.stateNode
            t && ((t = wa(t)), ke(e.stateNode, e.type, t))
          }
        }
        function Ne(e) {
          Se ? (Ee ? Ee.push(e) : (Ee = [e])) : (Se = e)
        }
        function Ce() {
          if (Se) {
            var e = Se,
              t = Ee
            if (((Ee = Se = null), je(e), t))
              for (e = 0; e < t.length; e++) je(t[e])
          }
        }
        function Pe(e, t) {
          return e(t)
        }
        function _e() {}
        var Te = !1
        function Le(e, t, n) {
          if (Te) return e(t, n)
          Te = !0
          try {
            return Pe(e, t, n)
          } finally {
            ;(Te = !1), (null !== Se || null !== Ee) && (_e(), Ce())
          }
        }
        function Oe(e, t) {
          var n = e.stateNode
          if (null === n) return null
          var r = wa(n)
          if (null === r) return null
          n = r[t]
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              ;(r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r)
              break e
            default:
              e = !1
          }
          if (e) return null
          if (n && "function" !== typeof n) throw Error(l(231, t, typeof n))
          return n
        }
        var ze = !1
        if (c)
          try {
            var Fe = {}
            Object.defineProperty(Fe, "passive", {
              get: function () {
                ze = !0
              },
            }),
              window.addEventListener("test", Fe, Fe),
              window.removeEventListener("test", Fe, Fe)
          } catch (ce) {
            ze = !1
          }
        function Me(e, t, n, r, a, l, o, i, u) {
          var s = Array.prototype.slice.call(arguments, 3)
          try {
            t.apply(n, s)
          } catch (c) {
            this.onError(c)
          }
        }
        var Re = !1,
          Ie = null,
          De = !1,
          Ae = null,
          Be = {
            onError: function (e) {
              ;(Re = !0), (Ie = e)
            },
          }
        function Ue(e, t, n, r, a, l, o, i, u) {
          ;(Re = !1), (Ie = null), Me.apply(Be, arguments)
        }
        function He(e) {
          var t = e,
            n = e
          if (e.alternate) for (; t.return; ) t = t.return
          else {
            e = t
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return)
            } while (e)
          }
          return 3 === t.tag ? n : null
        }
        function Ve(e) {
          if (13 === e.tag) {
            var t = e.memoizedState
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated
          }
          return null
        }
        function We(e) {
          if (He(e) !== e) throw Error(l(188))
        }
        function $e(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate
              if (!t) {
                if (null === (t = He(e))) throw Error(l(188))
                return t !== e ? null : e
              }
              for (var n = e, r = t; ; ) {
                var a = n.return
                if (null === a) break
                var o = a.alternate
                if (null === o) {
                  if (null !== (r = a.return)) {
                    n = r
                    continue
                  }
                  break
                }
                if (a.child === o.child) {
                  for (o = a.child; o; ) {
                    if (o === n) return We(a), e
                    if (o === r) return We(a), t
                    o = o.sibling
                  }
                  throw Error(l(188))
                }
                if (n.return !== r.return) (n = a), (r = o)
                else {
                  for (var i = !1, u = a.child; u; ) {
                    if (u === n) {
                      ;(i = !0), (n = a), (r = o)
                      break
                    }
                    if (u === r) {
                      ;(i = !0), (r = a), (n = o)
                      break
                    }
                    u = u.sibling
                  }
                  if (!i) {
                    for (u = o.child; u; ) {
                      if (u === n) {
                        ;(i = !0), (n = o), (r = a)
                        break
                      }
                      if (u === r) {
                        ;(i = !0), (r = o), (n = a)
                        break
                      }
                      u = u.sibling
                    }
                    if (!i) throw Error(l(189))
                  }
                }
                if (n.alternate !== r) throw Error(l(190))
              }
              if (3 !== n.tag) throw Error(l(188))
              return n.stateNode.current === n ? e : t
            })(e))
            ? Qe(e)
            : null
        }
        function Qe(e) {
          if (5 === e.tag || 6 === e.tag) return e
          for (e = e.child; null !== e; ) {
            var t = Qe(e)
            if (null !== t) return t
            e = e.sibling
          }
          return null
        }
        var qe = a.unstable_scheduleCallback,
          Ye = a.unstable_cancelCallback,
          Ke = a.unstable_shouldYield,
          Ge = a.unstable_requestPaint,
          Je = a.unstable_now,
          Xe = a.unstable_getCurrentPriorityLevel,
          Ze = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          lt = null
        var ot = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === (e >>>= 0) ? 32 : (31 - ((it(e) / ut) | 0)) | 0
              },
          it = Math.log,
          ut = Math.LN2
        var st = 64,
          ct = 4194304
        function dt(e) {
          switch (e & -e) {
            case 1:
              return 1
            case 2:
              return 2
            case 4:
              return 4
            case 8:
              return 8
            case 16:
              return 16
            case 32:
              return 32
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e
            case 134217728:
              return 134217728
            case 268435456:
              return 268435456
            case 536870912:
              return 536870912
            case 1073741824:
              return 1073741824
            default:
              return e
          }
        }
        function ft(e, t) {
          var n = e.pendingLanes
          if (0 === n) return 0
          var r = 0,
            a = e.suspendedLanes,
            l = e.pingedLanes,
            o = 268435455 & n
          if (0 !== o) {
            var i = o & ~a
            0 !== i ? (r = dt(i)) : 0 !== (l &= o) && (r = dt(l))
          } else 0 !== (o = n & ~a) ? (r = dt(o)) : 0 !== l && (r = dt(l))
          if (0 === r) return 0
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (l = t & -t) || (16 === a && 0 !== (4194240 & l)))
          )
            return t
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - ot(t))), (r |= e[n]), (t &= ~a)
          return r
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3
            default:
              return -1
          }
        }
        function mt(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0
        }
        function ht() {
          var e = st
          return 0 === (4194240 & (st <<= 1)) && (st = 64), e
        }
        function vt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e)
          return t
        }
        function gt(e, t, n) {
          ;(e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - ot(t))] = n)
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t)
          for (e = e.entanglements; n; ) {
            var r = 31 - ot(n),
              a = 1 << r
            ;(a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a)
          }
        }
        var bt = 0
        function xt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1
        }
        var wt,
          kt,
          St,
          Et,
          jt,
          Nt = !1,
          Ct = [],
          Pt = null,
          _t = null,
          Tt = null,
          Lt = new Map(),
          Ot = new Map(),
          zt = [],
          Ft =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            )
        function Mt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Pt = null
              break
            case "dragenter":
            case "dragleave":
              _t = null
              break
            case "mouseover":
            case "mouseout":
              Tt = null
              break
            case "pointerover":
            case "pointerout":
              Lt.delete(t.pointerId)
              break
            case "gotpointercapture":
            case "lostpointercapture":
              Ot.delete(t.pointerId)
          }
        }
        function Rt(e, t, n, r, a, l) {
          return null === e || e.nativeEvent !== l
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: l,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && kt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e)
        }
        function It(e) {
          var t = ya(e.target)
          if (null !== t) {
            var n = He(t)
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Ve(n)))
                  return (
                    (e.blockedOn = t),
                    void jt(e.priority, function () {
                      St(n)
                    })
                  )
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null)
          }
          e.blockedOn = null
        }
        function Dt(e) {
          if (null !== e.blockedOn) return !1
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Kt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
            if (null !== n)
              return null !== (t = ba(n)) && kt(t), (e.blockedOn = n), !1
            var r = new (n = e.nativeEvent).constructor(n.type, n)
            ;(xe = r), n.target.dispatchEvent(r), (xe = null), t.shift()
          }
          return !0
        }
        function At(e, t, n) {
          Dt(e) && n.delete(t)
        }
        function Bt() {
          ;(Nt = !1),
            null !== Pt && Dt(Pt) && (Pt = null),
            null !== _t && Dt(_t) && (_t = null),
            null !== Tt && Dt(Tt) && (Tt = null),
            Lt.forEach(At),
            Ot.forEach(At)
        }
        function Ut(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Nt ||
              ((Nt = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, Bt)))
        }
        function Ht(e) {
          function t(t) {
            return Ut(t, e)
          }
          if (0 < Ct.length) {
            Ut(Ct[0], e)
            for (var n = 1; n < Ct.length; n++) {
              var r = Ct[n]
              r.blockedOn === e && (r.blockedOn = null)
            }
          }
          for (
            null !== Pt && Ut(Pt, e),
              null !== _t && Ut(_t, e),
              null !== Tt && Ut(Tt, e),
              Lt.forEach(t),
              Ot.forEach(t),
              n = 0;
            n < zt.length;
            n++
          )
            (r = zt[n]).blockedOn === e && (r.blockedOn = null)
          for (; 0 < zt.length && null === (n = zt[0]).blockedOn; )
            It(n), null === n.blockedOn && zt.shift()
        }
        var Vt = x.ReactCurrentBatchConfig,
          Wt = !0
        function $t(e, t, n, r) {
          var a = bt,
            l = Vt.transition
          Vt.transition = null
          try {
            ;(bt = 1), qt(e, t, n, r)
          } finally {
            ;(bt = a), (Vt.transition = l)
          }
        }
        function Qt(e, t, n, r) {
          var a = bt,
            l = Vt.transition
          Vt.transition = null
          try {
            ;(bt = 4), qt(e, t, n, r)
          } finally {
            ;(bt = a), (Vt.transition = l)
          }
        }
        function qt(e, t, n, r) {
          if (Wt) {
            var a = Kt(e, t, n, r)
            if (null === a) Wr(e, t, r, Yt, n), Mt(e, r)
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (Pt = Rt(Pt, e, t, n, r, a)), !0
                  case "dragenter":
                    return (_t = Rt(_t, e, t, n, r, a)), !0
                  case "mouseover":
                    return (Tt = Rt(Tt, e, t, n, r, a)), !0
                  case "pointerover":
                    var l = a.pointerId
                    return Lt.set(l, Rt(Lt.get(l) || null, e, t, n, r, a)), !0
                  case "gotpointercapture":
                    return (
                      (l = a.pointerId),
                      Ot.set(l, Rt(Ot.get(l) || null, e, t, n, r, a)),
                      !0
                    )
                }
                return !1
              })(a, e, t, n, r)
            )
              r.stopPropagation()
            else if ((Mt(e, r), 4 & t && -1 < Ft.indexOf(e))) {
              for (; null !== a; ) {
                var l = ba(a)
                if (
                  (null !== l && wt(l),
                  null === (l = Kt(e, t, n, r)) && Wr(e, t, r, Yt, n),
                  l === a)
                )
                  break
                a = l
              }
              null !== a && r.stopPropagation()
            } else Wr(e, t, r, null, n)
          }
        }
        var Yt = null
        function Kt(e, t, n, r) {
          if (((Yt = null), null !== (e = ya((e = we(r))))))
            if (null === (t = He(e))) e = null
            else if (13 === (n = t.tag)) {
              if (null !== (e = Ve(t))) return e
              e = null
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null
              e = null
            } else t !== e && (e = null)
          return (Yt = e), null
        }
        function Gt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4
            case "message":
              switch (Xe()) {
                case Ze:
                  return 1
                case et:
                  return 4
                case tt:
                case nt:
                  return 16
                case rt:
                  return 536870912
                default:
                  return 16
              }
            default:
              return 16
          }
        }
        var Jt = null,
          Xt = null,
          Zt = null
        function en() {
          if (Zt) return Zt
          var e,
            t,
            n = Xt,
            r = n.length,
            a = "value" in Jt ? Jt.value : Jt.textContent,
            l = a.length
          for (e = 0; e < r && n[e] === a[e]; e++);
          var o = r - e
          for (t = 1; t <= o && n[r - t] === a[l - t]; t++);
          return (Zt = a.slice(e, 1 < t ? 1 - t : void 0))
        }
        function tn(e) {
          var t = e.keyCode
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          )
        }
        function nn() {
          return !0
        }
        function rn() {
          return !1
        }
        function an(e) {
          function t(t, n, r, a, l) {
            for (var o in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = l),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(a) : a[o]))
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            )
          }
          return (
            I(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0
                var e = this.nativeEvent
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn))
              },
              stopPropagation: function () {
                var e = this.nativeEvent
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn))
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          )
        }
        var ln,
          on,
          un,
          sn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(sn),
          dn = I({}, sn, { view: 0, detail: 0 }),
          fn = an(dn),
          pn = I({}, dn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: jn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== un &&
                    (un && "mousemove" === e.type
                      ? ((ln = e.screenX - un.screenX),
                        (on = e.screenY - un.screenY))
                      : (on = ln = 0),
                    (un = e)),
                  ln)
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : on
            },
          }),
          mn = an(pn),
          hn = an(I({}, pn, { dataTransfer: 0 })),
          vn = an(I({}, dn, { relatedTarget: 0 })),
          gn = an(
            I({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          yn = I({}, sn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData
            },
          }),
          bn = an(yn),
          xn = an(I({}, sn, { data: 0 })),
          wn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          kn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          Sn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          }
        function En(e) {
          var t = this.nativeEvent
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Sn[e]) && !!t[e]
        }
        function jn() {
          return En
        }
        var Nn = I({}, dn, {
            key: function (e) {
              if (e.key) {
                var t = wn[e.key] || e.key
                if ("Unidentified" !== t) return t
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? kn[e.keyCode] || "Unidentified"
                : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: jn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0
            },
          }),
          Cn = an(Nn),
          Pn = an(
            I({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          _n = an(
            I({}, dn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: jn,
            })
          ),
          Tn = an(
            I({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Ln = I({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          On = an(Ln),
          zn = [9, 13, 27, 32],
          Fn = c && "CompositionEvent" in window,
          Mn = null
        c && "documentMode" in document && (Mn = document.documentMode)
        var Rn = c && "TextEvent" in window && !Mn,
          In = c && (!Fn || (Mn && 8 < Mn && 11 >= Mn)),
          Dn = String.fromCharCode(32),
          An = !1
        function Bn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== zn.indexOf(t.keyCode)
            case "keydown":
              return 229 !== t.keyCode
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0
            default:
              return !1
          }
        }
        function Un(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null
        }
        var Hn = !1
        var Vn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        }
        function Wn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase()
          return "input" === t ? !!Vn[e.type] : "textarea" === t
        }
        function $n(e, t, n, r) {
          Ne(r),
            0 < (t = Qr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }))
        }
        var Qn = null,
          qn = null
        function Yn(e) {
          Dr(e, 0)
        }
        function Kn(e) {
          if (q(xa(e))) return e
        }
        function Gn(e, t) {
          if ("change" === e) return t
        }
        var Jn = !1
        if (c) {
          var Xn
          if (c) {
            var Zn = "oninput" in document
            if (!Zn) {
              var er = document.createElement("div")
              er.setAttribute("oninput", "return;"),
                (Zn = "function" === typeof er.oninput)
            }
            Xn = Zn
          } else Xn = !1
          Jn = Xn && (!document.documentMode || 9 < document.documentMode)
        }
        function tr() {
          Qn && (Qn.detachEvent("onpropertychange", nr), (qn = Qn = null))
        }
        function nr(e) {
          if ("value" === e.propertyName && Kn(qn)) {
            var t = []
            $n(t, qn, e, we(e)), Le(Yn, t)
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (qn = n), (Qn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr()
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Kn(qn)
        }
        function lr(e, t) {
          if ("click" === e) return Kn(t)
        }
        function or(e, t) {
          if ("input" === e || "change" === e) return Kn(t)
        }
        var ir =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                )
              }
        function ur(e, t) {
          if (ir(e, t)) return !0
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1
          var n = Object.keys(e),
            r = Object.keys(t)
          if (n.length !== r.length) return !1
          for (r = 0; r < n.length; r++) {
            var a = n[r]
            if (!d.call(t, a) || !ir(e[a], t[a])) return !1
          }
          return !0
        }
        function sr(e) {
          for (; e && e.firstChild; ) e = e.firstChild
          return e
        }
        function cr(e, t) {
          var n,
            r = sr(e)
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e }
              e = n
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling
                  break e
                }
                r = r.parentNode
              }
              r = void 0
            }
            r = sr(r)
          }
        }
        function dr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? dr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          )
        }
        function fr() {
          for (var e = window, t = Y(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href
            } catch (r) {
              n = !1
            }
            if (!n) break
            t = Y((e = t.contentWindow).document)
          }
          return t
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase()
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          )
        }
        function mr(e) {
          var t = fr(),
            n = e.focusedElem,
            r = e.selectionRange
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            dr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length))
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection()
                var a = n.textContent.length,
                  l = Math.min(r.start, a)
                ;(r = void 0 === r.end ? l : Math.min(r.end, a)),
                  !e.extend && l > r && ((a = r), (r = l), (l = a)),
                  (a = cr(n, l))
                var o = cr(n, r)
                a &&
                  o &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== o.node ||
                    e.focusOffset !== o.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  l > r
                    ? (e.addRange(t), e.extend(o.node, o.offset))
                    : (t.setEnd(o.node, o.offset), e.addRange(t)))
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top)
          }
        }
        var hr = c && "documentMode" in document && 11 >= document.documentMode,
          vr = null,
          gr = null,
          yr = null,
          br = !1
        function xr(e, t, n) {
          var r =
            n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument
          br ||
            null == vr ||
            vr !== Y(r) ||
            ("selectionStart" in (r = vr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && ur(yr, r)) ||
              ((yr = r),
              0 < (r = Qr(gr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = vr))))
        }
        function wr(e, t) {
          var n = {}
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          )
        }
        var kr = {
            animationend: wr("Animation", "AnimationEnd"),
            animationiteration: wr("Animation", "AnimationIteration"),
            animationstart: wr("Animation", "AnimationStart"),
            transitionend: wr("Transition", "TransitionEnd"),
          },
          Sr = {},
          Er = {}
        function jr(e) {
          if (Sr[e]) return Sr[e]
          if (!kr[e]) return e
          var t,
            n = kr[e]
          for (t in n) if (n.hasOwnProperty(t) && t in Er) return (Sr[e] = n[t])
          return e
        }
        c &&
          ((Er = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete kr.animationend.animation,
            delete kr.animationiteration.animation,
            delete kr.animationstart.animation),
          "TransitionEvent" in window || delete kr.transitionend.transition)
        var Nr = jr("animationend"),
          Cr = jr("animationiteration"),
          Pr = jr("animationstart"),
          _r = jr("transitionend"),
          Tr = new Map(),
          Lr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            )
        function Or(e, t) {
          Tr.set(e, t), u(t, [e])
        }
        for (var zr = 0; zr < Lr.length; zr++) {
          var Fr = Lr[zr]
          Or(Fr.toLowerCase(), "on" + (Fr[0].toUpperCase() + Fr.slice(1)))
        }
        Or(Nr, "onAnimationEnd"),
          Or(Cr, "onAnimationIteration"),
          Or(Pr, "onAnimationStart"),
          Or("dblclick", "onDoubleClick"),
          Or("focusin", "onFocus"),
          Or("focusout", "onBlur"),
          Or(_r, "onTransitionEnd"),
          s("onMouseEnter", ["mouseout", "mouseover"]),
          s("onMouseLeave", ["mouseout", "mouseover"]),
          s("onPointerEnter", ["pointerout", "pointerover"]),
          s("onPointerLeave", ["pointerout", "pointerover"]),
          u(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          u(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          u("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          u(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          )
        var Mr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Rr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Mr)
          )
        function Ir(e, t, n) {
          var r = e.type || "unknown-event"
          ;(e.currentTarget = n),
            (function (e, t, n, r, a, o, i, u, s) {
              if ((Ue.apply(this, arguments), Re)) {
                if (!Re) throw Error(l(198))
                var c = Ie
                ;(Re = !1), (Ie = null), De || ((De = !0), (Ae = c))
              }
            })(r, t, void 0, e),
            (e.currentTarget = null)
        }
        function Dr(e, t) {
          t = 0 !== (4 & t)
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event
            r = r.listeners
            e: {
              var l = void 0
              if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                  var i = r[o],
                    u = i.instance,
                    s = i.currentTarget
                  if (((i = i.listener), u !== l && a.isPropagationStopped()))
                    break e
                  Ir(a, i, s), (l = u)
                }
              else
                for (o = 0; o < r.length; o++) {
                  if (
                    ((u = (i = r[o]).instance),
                    (s = i.currentTarget),
                    (i = i.listener),
                    u !== l && a.isPropagationStopped())
                  )
                    break e
                  Ir(a, i, s), (l = u)
                }
            }
          }
          if (De) throw ((e = Ae), (De = !1), (Ae = null), e)
        }
        function Ar(e, t) {
          var n = t[ha]
          void 0 === n && (n = t[ha] = new Set())
          var r = e + "__bubble"
          n.has(r) || (Vr(t, e, 2, !1), n.add(r))
        }
        function Br(e, t, n) {
          var r = 0
          t && (r |= 4), Vr(n, e, r, t)
        }
        var Ur = "_reactListening" + Math.random().toString(36).slice(2)
        function Hr(e) {
          if (!e[Ur]) {
            ;(e[Ur] = !0),
              o.forEach(function (t) {
                "selectionchange" !== t &&
                  (Rr.has(t) || Br(t, !1, e), Br(t, !0, e))
              })
            var t = 9 === e.nodeType ? e : e.ownerDocument
            null === t || t[Ur] || ((t[Ur] = !0), Br("selectionchange", !1, t))
          }
        }
        function Vr(e, t, n, r) {
          switch (Gt(t)) {
            case 1:
              var a = $t
              break
            case 4:
              a = Qt
              break
            default:
              a = qt
          }
          ;(n = a.bind(null, t, n, e)),
            (a = void 0),
            !ze ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1)
        }
        function Wr(e, t, n, r, a) {
          var l = r
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return
              var o = r.tag
              if (3 === o || 4 === o) {
                var i = r.stateNode.containerInfo
                if (i === a || (8 === i.nodeType && i.parentNode === a)) break
                if (4 === o)
                  for (o = r.return; null !== o; ) {
                    var u = o.tag
                    if (
                      (3 === u || 4 === u) &&
                      ((u = o.stateNode.containerInfo) === a ||
                        (8 === u.nodeType && u.parentNode === a))
                    )
                      return
                    o = o.return
                  }
                for (; null !== i; ) {
                  if (null === (o = ya(i))) return
                  if (5 === (u = o.tag) || 6 === u) {
                    r = l = o
                    continue e
                  }
                  i = i.parentNode
                }
              }
              r = r.return
            }
          Le(function () {
            var r = l,
              a = we(n),
              o = []
            e: {
              var i = Tr.get(e)
              if (void 0 !== i) {
                var u = cn,
                  s = e
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e
                  case "keydown":
                  case "keyup":
                    u = Cn
                    break
                  case "focusin":
                    ;(s = "focus"), (u = vn)
                    break
                  case "focusout":
                    ;(s = "blur"), (u = vn)
                    break
                  case "beforeblur":
                  case "afterblur":
                    u = vn
                    break
                  case "click":
                    if (2 === n.button) break e
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    u = mn
                    break
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    u = hn
                    break
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    u = _n
                    break
                  case Nr:
                  case Cr:
                  case Pr:
                    u = gn
                    break
                  case _r:
                    u = Tn
                    break
                  case "scroll":
                    u = fn
                    break
                  case "wheel":
                    u = On
                    break
                  case "copy":
                  case "cut":
                  case "paste":
                    u = bn
                    break
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    u = Pn
                }
                var c = 0 !== (4 & t),
                  d = !c && "scroll" === e,
                  f = c ? (null !== i ? i + "Capture" : null) : i
                c = []
                for (var p, m = r; null !== m; ) {
                  var h = (p = m).stateNode
                  if (
                    (5 === p.tag &&
                      null !== h &&
                      ((p = h),
                      null !== f &&
                        null != (h = Oe(m, f)) &&
                        c.push($r(m, h, p))),
                    d)
                  )
                    break
                  m = m.return
                }
                0 < c.length &&
                  ((i = new u(i, s, null, n, a)),
                  o.push({ event: i, listeners: c }))
              }
            }
            if (0 === (7 & t)) {
              if (
                ((u = "mouseout" === e || "pointerout" === e),
                (!(i = "mouseover" === e || "pointerover" === e) ||
                  n === xe ||
                  !(s = n.relatedTarget || n.fromElement) ||
                  (!ya(s) && !s[ma])) &&
                  (u || i) &&
                  ((i =
                    a.window === a
                      ? a
                      : (i = a.ownerDocument)
                      ? i.defaultView || i.parentWindow
                      : window),
                  u
                    ? ((u = r),
                      null !==
                        (s = (s = n.relatedTarget || n.toElement)
                          ? ya(s)
                          : null) &&
                        (s !== (d = He(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                        (s = null))
                    : ((u = null), (s = r)),
                  u !== s))
              ) {
                if (
                  ((c = mn),
                  (h = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (m = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Pn),
                    (h = "onPointerLeave"),
                    (f = "onPointerEnter"),
                    (m = "pointer")),
                  (d = null == u ? i : xa(u)),
                  (p = null == s ? i : xa(s)),
                  ((i = new c(h, m + "leave", u, n, a)).target = d),
                  (i.relatedTarget = p),
                  (h = null),
                  ya(a) === r &&
                    (((c = new c(f, m + "enter", s, n, a)).target = p),
                    (c.relatedTarget = d),
                    (h = c)),
                  (d = h),
                  u && s)
                )
                  e: {
                    for (f = s, m = 0, p = c = u; p; p = qr(p)) m++
                    for (p = 0, h = f; h; h = qr(h)) p++
                    for (; 0 < m - p; ) (c = qr(c)), m--
                    for (; 0 < p - m; ) (f = qr(f)), p--
                    for (; m--; ) {
                      if (c === f || (null !== f && c === f.alternate)) break e
                      ;(c = qr(c)), (f = qr(f))
                    }
                    c = null
                  }
                else c = null
                null !== u && Yr(o, i, u, c, !1),
                  null !== s && null !== d && Yr(o, d, s, c, !0)
              }
              if (
                "select" ===
                  (u =
                    (i = r ? xa(r) : window).nodeName &&
                    i.nodeName.toLowerCase()) ||
                ("input" === u && "file" === i.type)
              )
                var v = Gn
              else if (Wn(i))
                if (Jn) v = or
                else {
                  v = ar
                  var g = rr
                }
              else
                (u = i.nodeName) &&
                  "input" === u.toLowerCase() &&
                  ("checkbox" === i.type || "radio" === i.type) &&
                  (v = lr)
              switch (
                (v && (v = v(e, r))
                  ? $n(o, v, n, a)
                  : (g && g(e, i, r),
                    "focusout" === e &&
                      (g = i._wrapperState) &&
                      g.controlled &&
                      "number" === i.type &&
                      ee(i, "number", i.value)),
                (g = r ? xa(r) : window),
                e)
              ) {
                case "focusin":
                  ;(Wn(g) || "true" === g.contentEditable) &&
                    ((vr = g), (gr = r), (yr = null))
                  break
                case "focusout":
                  yr = gr = vr = null
                  break
                case "mousedown":
                  br = !0
                  break
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  ;(br = !1), xr(o, n, a)
                  break
                case "selectionchange":
                  if (hr) break
                case "keydown":
                case "keyup":
                  xr(o, n, a)
              }
              var y
              if (Fn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart"
                      break e
                    case "compositionend":
                      b = "onCompositionEnd"
                      break e
                    case "compositionupdate":
                      b = "onCompositionUpdate"
                      break e
                  }
                  b = void 0
                }
              else
                Hn
                  ? Bn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart")
              b &&
                (In &&
                  "ko" !== n.locale &&
                  (Hn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Hn && (y = en())
                    : ((Xt = "value" in (Jt = a) ? Jt.value : Jt.textContent),
                      (Hn = !0))),
                0 < (g = Qr(r, b)).length &&
                  ((b = new xn(b, e, null, n, a)),
                  o.push({ event: b, listeners: g }),
                  y ? (b.data = y) : null !== (y = Un(n)) && (b.data = y))),
                (y = Rn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Un(t)
                        case "keypress":
                          return 32 !== t.which ? null : ((An = !0), Dn)
                        case "textInput":
                          return (e = t.data) === Dn && An ? null : e
                        default:
                          return null
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Hn)
                        return "compositionend" === e || (!Fn && Bn(e, t))
                          ? ((e = en()), (Zt = Xt = Jt = null), (Hn = !1), e)
                          : null
                      switch (e) {
                        case "paste":
                        default:
                          return null
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char
                            if (t.which) return String.fromCharCode(t.which)
                          }
                          return null
                        case "compositionend":
                          return In && "ko" !== t.locale ? null : t.data
                      }
                    })(e, n)) &&
                  0 < (r = Qr(r, "onBeforeInput")).length &&
                  ((a = new xn("onBeforeInput", "beforeinput", null, n, a)),
                  o.push({ event: a, listeners: r }),
                  (a.data = y))
            }
            Dr(o, t)
          })
        }
        function $r(e, t, n) {
          return { instance: e, listener: t, currentTarget: n }
        }
        function Qr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              l = a.stateNode
            5 === a.tag &&
              null !== l &&
              ((a = l),
              null != (l = Oe(e, n)) && r.unshift($r(e, l, a)),
              null != (l = Oe(e, t)) && r.push($r(e, l, a))),
              (e = e.return)
          }
          return r
        }
        function qr(e) {
          if (null === e) return null
          do {
            e = e.return
          } while (e && 5 !== e.tag)
          return e || null
        }
        function Yr(e, t, n, r, a) {
          for (var l = t._reactName, o = []; null !== n && n !== r; ) {
            var i = n,
              u = i.alternate,
              s = i.stateNode
            if (null !== u && u === r) break
            5 === i.tag &&
              null !== s &&
              ((i = s),
              a
                ? null != (u = Oe(n, l)) && o.unshift($r(n, u, i))
                : a || (null != (u = Oe(n, l)) && o.push($r(n, u, i)))),
              (n = n.return)
          }
          0 !== o.length && e.push({ event: t, listeners: o })
        }
        var Kr = /\r\n?/g,
          Gr = /\u0000|\uFFFD/g
        function Jr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Kr, "\n")
            .replace(Gr, "")
        }
        function Xr(e, t, n) {
          if (((t = Jr(t)), Jr(e) !== t && n)) throw Error(l(425))
        }
        function Zr() {}
        var ea = null,
          ta = null
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          )
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          la = "function" === typeof Promise ? Promise : void 0,
          oa =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof la
              ? function (e) {
                  return la.resolve(null).then(e).catch(ia)
                }
              : ra
        function ia(e) {
          setTimeout(function () {
            throw e
          })
        }
        function ua(e, t) {
          var n = t,
            r = 0
          do {
            var a = n.nextSibling
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Ht(t)
                r--
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++
            n = a
          } while (n)
          Ht(t)
        }
        function sa(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType
            if (1 === t || 3 === t) break
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break
              if ("/$" === t) return null
            }
          }
          return e
        }
        function ca(e) {
          e = e.previousSibling
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e
                t--
              } else "/$" === n && t++
            }
            e = e.previousSibling
          }
          return null
        }
        var da = Math.random().toString(36).slice(2),
          fa = "__reactFiber$" + da,
          pa = "__reactProps$" + da,
          ma = "__reactContainer$" + da,
          ha = "__reactEvents$" + da,
          va = "__reactListeners$" + da,
          ga = "__reactHandles$" + da
        function ya(e) {
          var t = e[fa]
          if (t) return t
          for (var n = e.parentNode; n; ) {
            if ((t = n[ma] || n[fa])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((n = e[fa])) return n
                  e = ca(e)
                }
              return t
            }
            n = (e = n).parentNode
          }
          return null
        }
        function ba(e) {
          return !(e = e[fa] || e[ma]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e
        }
        function xa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode
          throw Error(l(33))
        }
        function wa(e) {
          return e[pa] || null
        }
        var ka = [],
          Sa = -1
        function Ea(e) {
          return { current: e }
        }
        function ja(e) {
          0 > Sa || ((e.current = ka[Sa]), (ka[Sa] = null), Sa--)
        }
        function Na(e, t) {
          Sa++, (ka[Sa] = e.current), (e.current = t)
        }
        var Ca = {},
          Pa = Ea(Ca),
          _a = Ea(!1),
          Ta = Ca
        function La(e, t) {
          var n = e.type.contextTypes
          if (!n) return Ca
          var r = e.stateNode
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext
          var a,
            l = {}
          for (a in n) l[a] = t[a]
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = l)),
            l
          )
        }
        function Oa(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e
        }
        function za() {
          ja(_a), ja(Pa)
        }
        function Fa(e, t, n) {
          if (Pa.current !== Ca) throw Error(l(168))
          Na(Pa, t), Na(_a, n)
        }
        function Ma(e, t, n) {
          var r = e.stateNode
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(l(108, V(e) || "Unknown", a))
          return I({}, n, r)
        }
        function Ra(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Ca),
            (Ta = Pa.current),
            Na(Pa, e),
            Na(_a, _a.current),
            !0
          )
        }
        function Ia(e, t, n) {
          var r = e.stateNode
          if (!r) throw Error(l(169))
          n
            ? ((e = Ma(e, t, Ta)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              ja(_a),
              ja(Pa),
              Na(Pa, e))
            : ja(_a),
            Na(_a, n)
        }
        var Da = null,
          Aa = !1,
          Ba = !1
        function Ua(e) {
          null === Da ? (Da = [e]) : Da.push(e)
        }
        function Ha() {
          if (!Ba && null !== Da) {
            Ba = !0
            var e = 0,
              t = bt
            try {
              var n = Da
              for (bt = 1; e < n.length; e++) {
                var r = n[e]
                do {
                  r = r(!0)
                } while (null !== r)
              }
              ;(Da = null), (Aa = !1)
            } catch (a) {
              throw (null !== Da && (Da = Da.slice(e + 1)), qe(Ze, Ha), a)
            } finally {
              ;(bt = t), (Ba = !1)
            }
          }
          return null
        }
        var Va = [],
          Wa = 0,
          $a = null,
          Qa = 0,
          qa = [],
          Ya = 0,
          Ka = null,
          Ga = 1,
          Ja = ""
        function Xa(e, t) {
          ;(Va[Wa++] = Qa), (Va[Wa++] = $a), ($a = e), (Qa = t)
        }
        function Za(e, t, n) {
          ;(qa[Ya++] = Ga), (qa[Ya++] = Ja), (qa[Ya++] = Ka), (Ka = e)
          var r = Ga
          e = Ja
          var a = 32 - ot(r) - 1
          ;(r &= ~(1 << a)), (n += 1)
          var l = 32 - ot(t) + a
          if (30 < l) {
            var o = a - (a % 5)
            ;(l = (r & ((1 << o) - 1)).toString(32)),
              (r >>= o),
              (a -= o),
              (Ga = (1 << (32 - ot(t) + a)) | (n << a) | r),
              (Ja = l + e)
          } else (Ga = (1 << l) | (n << a) | r), (Ja = e)
        }
        function el(e) {
          null !== e.return && (Xa(e, 1), Za(e, 1, 0))
        }
        function tl(e) {
          for (; e === $a; )
            ($a = Va[--Wa]), (Va[Wa] = null), (Qa = Va[--Wa]), (Va[Wa] = null)
          for (; e === Ka; )
            (Ka = qa[--Ya]),
              (qa[Ya] = null),
              (Ja = qa[--Ya]),
              (qa[Ya] = null),
              (Ga = qa[--Ya]),
              (qa[Ya] = null)
        }
        var nl = null,
          rl = null,
          al = !1,
          ll = null
        function ol(e, t) {
          var n = Ls(5, null, null, 0)
          ;(n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n)
        }
        function il(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (nl = e), (rl = sa(t.firstChild)), !0)
              )
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (nl = e), (rl = null), !0)
              )
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ka ? { id: Ga, overflow: Ja } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Ls(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (nl = e),
                (rl = null),
                !0)
              )
            default:
              return !1
          }
        }
        function ul(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags)
        }
        function sl(e) {
          if (al) {
            var t = rl
            if (t) {
              var n = t
              if (!il(e, t)) {
                if (ul(e)) throw Error(l(418))
                t = sa(n.nextSibling)
                var r = nl
                t && il(e, t)
                  ? ol(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (al = !1), (nl = e))
              }
            } else {
              if (ul(e)) throw Error(l(418))
              ;(e.flags = (-4097 & e.flags) | 2), (al = !1), (nl = e)
            }
          }
        }
        function cl(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return
          nl = e
        }
        function dl(e) {
          if (e !== nl) return !1
          if (!al) return cl(e), (al = !0), !1
          var t
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = rl))
          ) {
            if (ul(e)) throw (fl(), Error(l(418)))
            for (; t; ) ol(e, t), (t = sa(t.nextSibling))
          }
          if ((cl(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(l(317))
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data
                  if ("/$" === n) {
                    if (0 === t) {
                      rl = sa(e.nextSibling)
                      break e
                    }
                    t--
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++
                }
                e = e.nextSibling
              }
              rl = null
            }
          } else rl = nl ? sa(e.stateNode.nextSibling) : null
          return !0
        }
        function fl() {
          for (var e = rl; e; ) e = sa(e.nextSibling)
        }
        function pl() {
          ;(rl = nl = null), (al = !1)
        }
        function ml(e) {
          null === ll ? (ll = [e]) : ll.push(e)
        }
        var hl = x.ReactCurrentBatchConfig
        function vl(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = I({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n])
            return t
          }
          return t
        }
        var gl = Ea(null),
          yl = null,
          bl = null,
          xl = null
        function wl() {
          xl = bl = yl = null
        }
        function kl(e) {
          var t = gl.current
          ja(gl), (e._currentValue = t)
        }
        function Sl(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break
            e = e.return
          }
        }
        function El(e, t) {
          ;(yl = e),
            (xl = bl = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (xi = !0), (e.firstContext = null))
        }
        function jl(e) {
          var t = e._currentValue
          if (xl !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === bl)
            ) {
              if (null === yl) throw Error(l(308))
              ;(bl = e), (yl.dependencies = { lanes: 0, firstContext: e })
            } else bl = bl.next = e
          return t
        }
        var Nl = null
        function Cl(e) {
          null === Nl ? (Nl = [e]) : Nl.push(e)
        }
        function Pl(e, t, n, r) {
          var a = t.interleaved
          return (
            null === a
              ? ((n.next = n), Cl(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            _l(e, r)
          )
        }
        function _l(e, t) {
          e.lanes |= t
          var n = e.alternate
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return)
          return 3 === n.tag ? n.stateNode : null
        }
        var Tl = !1
        function Ll(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          }
        }
        function Ol(e, t) {
          ;(e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              })
        }
        function zl(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          }
        }
        function Fl(e, t, n) {
          var r = e.updateQueue
          if (null === r) return null
          if (((r = r.shared), 0 !== (2 & Pu))) {
            var a = r.pending
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              _l(e, n)
            )
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), Cl(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            _l(e, n)
          )
        }
        function Ml(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes
            ;(n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n)
          }
        }
        function Rl(e, t) {
          var n = e.updateQueue,
            r = e.alternate
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              l = null
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var o = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                }
                null === l ? (a = l = o) : (l = l.next = o), (n = n.next)
              } while (null !== n)
              null === l ? (a = l = t) : (l = l.next = t)
            } else a = l = t
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: l,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            )
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t)
        }
        function Il(e, t, n, r) {
          var a = e.updateQueue
          Tl = !1
          var l = a.firstBaseUpdate,
            o = a.lastBaseUpdate,
            i = a.shared.pending
          if (null !== i) {
            a.shared.pending = null
            var u = i,
              s = u.next
            ;(u.next = null), null === o ? (l = s) : (o.next = s), (o = u)
            var c = e.alternate
            null !== c &&
              (i = (c = c.updateQueue).lastBaseUpdate) !== o &&
              (null === i ? (c.firstBaseUpdate = s) : (i.next = s),
              (c.lastBaseUpdate = u))
          }
          if (null !== l) {
            var d = a.baseState
            for (o = 0, c = s = u = null, i = l; ; ) {
              var f = i.lane,
                p = i.eventTime
              if ((r & f) === f) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: i.tag,
                      payload: i.payload,
                      callback: i.callback,
                      next: null,
                    })
                e: {
                  var m = e,
                    h = i
                  switch (((f = t), (p = n), h.tag)) {
                    case 1:
                      if ("function" === typeof (m = h.payload)) {
                        d = m.call(p, d, f)
                        break e
                      }
                      d = m
                      break e
                    case 3:
                      m.flags = (-65537 & m.flags) | 128
                    case 0:
                      if (
                        null ===
                          (f =
                            "function" === typeof (m = h.payload)
                              ? m.call(p, d, f)
                              : m) ||
                        void 0 === f
                      )
                        break e
                      d = I({}, d, f)
                      break e
                    case 2:
                      Tl = !0
                  }
                }
                null !== i.callback &&
                  0 !== i.lane &&
                  ((e.flags |= 64),
                  null === (f = a.effects) ? (a.effects = [i]) : f.push(i))
              } else
                (p = {
                  eventTime: p,
                  lane: f,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                }),
                  null === c ? ((s = c = p), (u = d)) : (c = c.next = p),
                  (o |= f)
              if (null === (i = i.next)) {
                if (null === (i = a.shared.pending)) break
                ;(i = (f = i).next),
                  (f.next = null),
                  (a.lastBaseUpdate = f),
                  (a.shared.pending = null)
              }
            }
            if (
              (null === c && (u = d),
              (a.baseState = u),
              (a.firstBaseUpdate = s),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t
              do {
                ;(o |= a.lane), (a = a.next)
              } while (a !== t)
            } else null === l && (a.shared.lanes = 0)
            ;(Ru |= o), (e.lanes = o), (e.memoizedState = d)
          }
        }
        function Dl(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(l(191, a))
                a.call(r)
              }
            }
        }
        var Al = new r.Component().refs
        function Bl(e, t, n, r) {
          ;(n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : I({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n)
        }
        var Ul = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && He(e) === e
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals
            var r = es(),
              a = ts(e),
              l = zl(r, a)
            ;(l.payload = t),
              void 0 !== n && null !== n && (l.callback = n),
              null !== (t = Fl(e, l, a)) && (ns(t, e, a, r), Ml(t, e, a))
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals
            var r = es(),
              a = ts(e),
              l = zl(r, a)
            ;(l.tag = 1),
              (l.payload = t),
              void 0 !== n && null !== n && (l.callback = n),
              null !== (t = Fl(e, l, a)) && (ns(t, e, a, r), Ml(t, e, a))
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals
            var n = es(),
              r = ts(e),
              a = zl(n, r)
            ;(a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Fl(e, a, r)) && (ns(t, e, r, n), Ml(t, e, r))
          },
        }
        function Hl(e, t, n, r, a, l, o) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, l, o)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !ur(n, r) ||
                !ur(a, l)
        }
        function Vl(e, t, n) {
          var r = !1,
            a = Ca,
            l = t.contextType
          return (
            "object" === typeof l && null !== l
              ? (l = jl(l))
              : ((a = Oa(t) ? Ta : Pa.current),
                (l = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? La(e, a)
                  : Ca)),
            (t = new t(n, l)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Ul),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = l)),
            t
          )
        }
        function Wl(e, t, n, r) {
          ;(e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Ul.enqueueReplaceState(t, t.state, null)
        }
        function $l(e, t, n, r) {
          var a = e.stateNode
          ;(a.props = n), (a.state = e.memoizedState), (a.refs = Al), Ll(e)
          var l = t.contextType
          "object" === typeof l && null !== l
            ? (a.context = jl(l))
            : ((l = Oa(t) ? Ta : Pa.current), (a.context = La(e, l))),
            (a.state = e.memoizedState),
            "function" === typeof (l = t.getDerivedStateFromProps) &&
              (Bl(e, t, l, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && Ul.enqueueReplaceState(a, a.state, null),
              Il(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308)
        }
        function Ql(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(l(309))
                var r = n.stateNode
              }
              if (!r) throw Error(l(147, e))
              var a = r,
                o = "" + e
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === o
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs
                    t === Al && (t = a.refs = {}),
                      null === e ? delete t[o] : (t[o] = e)
                  }),
                  (t._stringRef = o),
                  t)
            }
            if ("string" !== typeof e) throw Error(l(284))
            if (!n._owner) throw Error(l(290, e))
          }
          return e
        }
        function ql(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              l(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          )
        }
        function Yl(e) {
          return (0, e._init)(e._payload)
        }
        function Kl(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n)
            }
          }
          function n(n, r) {
            if (!e) return null
            for (; null !== r; ) t(n, r), (r = r.sibling)
            return null
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling)
            return e
          }
          function a(e, t) {
            return ((e = zs(e, t)).index = 0), (e.sibling = null), e
          }
          function o(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            )
          }
          function i(t) {
            return e && null === t.alternate && (t.flags |= 2), t
          }
          function u(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Is(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t)
          }
          function s(e, t, n, r) {
            var l = n.type
            return l === S
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === l ||
                  ("object" === typeof l &&
                    null !== l &&
                    l.$$typeof === O &&
                    Yl(l) === t.type))
              ? (((r = a(t, n.props)).ref = Ql(e, t, n)), (r.return = e), r)
              : (((r = Fs(n.type, n.key, n.props, null, e.mode, r)).ref = Ql(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r)
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Ds(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t)
          }
          function d(e, t, n, r, l) {
            return null === t || 7 !== t.tag
              ? (((t = Ms(n, e.mode, r, l)).return = e), t)
              : (((t = a(t, n)).return = e), t)
          }
          function f(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Is("" + t, e.mode, n)).return = e), t
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case w:
                  return (
                    ((n = Fs(t.type, t.key, t.props, null, e.mode, n)).ref = Ql(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  )
                case k:
                  return ((t = Ds(t, e.mode, n)).return = e), t
                case O:
                  return f(e, (0, t._init)(t._payload), n)
              }
              if (te(t) || M(t))
                return ((t = Ms(t, e.mode, n, null)).return = e), t
              ql(e, t)
            }
            return null
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : u(e, t, "" + n, r)
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case w:
                  return n.key === a ? s(e, t, n, r) : null
                case k:
                  return n.key === a ? c(e, t, n, r) : null
                case O:
                  return p(e, t, (a = n._init)(n._payload), r)
              }
              if (te(n) || M(n)) return null !== a ? null : d(e, t, n, r, null)
              ql(e, n)
            }
            return null
          }
          function m(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return u(t, (e = e.get(n) || null), "" + r, a)
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case w:
                  return s(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  )
                case k:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  )
                case O:
                  return m(e, t, n, (0, r._init)(r._payload), a)
              }
              if (te(r) || M(r)) return d(t, (e = e.get(n) || null), r, a, null)
              ql(t, r)
            }
            return null
          }
          function h(a, l, i, u) {
            for (
              var s = null, c = null, d = l, h = (l = 0), v = null;
              null !== d && h < i.length;
              h++
            ) {
              d.index > h ? ((v = d), (d = null)) : (v = d.sibling)
              var g = p(a, d, i[h], u)
              if (null === g) {
                null === d && (d = v)
                break
              }
              e && d && null === g.alternate && t(a, d),
                (l = o(g, l, h)),
                null === c ? (s = g) : (c.sibling = g),
                (c = g),
                (d = v)
            }
            if (h === i.length) return n(a, d), al && Xa(a, h), s
            if (null === d) {
              for (; h < i.length; h++)
                null !== (d = f(a, i[h], u)) &&
                  ((l = o(d, l, h)),
                  null === c ? (s = d) : (c.sibling = d),
                  (c = d))
              return al && Xa(a, h), s
            }
            for (d = r(a, d); h < i.length; h++)
              null !== (v = m(d, a, h, i[h], u)) &&
                (e &&
                  null !== v.alternate &&
                  d.delete(null === v.key ? h : v.key),
                (l = o(v, l, h)),
                null === c ? (s = v) : (c.sibling = v),
                (c = v))
            return (
              e &&
                d.forEach(function (e) {
                  return t(a, e)
                }),
              al && Xa(a, h),
              s
            )
          }
          function v(a, i, u, s) {
            var c = M(u)
            if ("function" !== typeof c) throw Error(l(150))
            if (null == (u = c.call(u))) throw Error(l(151))
            for (
              var d = (c = null), h = i, v = (i = 0), g = null, y = u.next();
              null !== h && !y.done;
              v++, y = u.next()
            ) {
              h.index > v ? ((g = h), (h = null)) : (g = h.sibling)
              var b = p(a, h, y.value, s)
              if (null === b) {
                null === h && (h = g)
                break
              }
              e && h && null === b.alternate && t(a, h),
                (i = o(b, i, v)),
                null === d ? (c = b) : (d.sibling = b),
                (d = b),
                (h = g)
            }
            if (y.done) return n(a, h), al && Xa(a, v), c
            if (null === h) {
              for (; !y.done; v++, y = u.next())
                null !== (y = f(a, y.value, s)) &&
                  ((i = o(y, i, v)),
                  null === d ? (c = y) : (d.sibling = y),
                  (d = y))
              return al && Xa(a, v), c
            }
            for (h = r(a, h); !y.done; v++, y = u.next())
              null !== (y = m(h, a, v, y.value, s)) &&
                (e &&
                  null !== y.alternate &&
                  h.delete(null === y.key ? v : y.key),
                (i = o(y, i, v)),
                null === d ? (c = y) : (d.sibling = y),
                (d = y))
            return (
              e &&
                h.forEach(function (e) {
                  return t(a, e)
                }),
              al && Xa(a, v),
              c
            )
          }
          return function e(r, l, o, u) {
            if (
              ("object" === typeof o &&
                null !== o &&
                o.type === S &&
                null === o.key &&
                (o = o.props.children),
              "object" === typeof o && null !== o)
            ) {
              switch (o.$$typeof) {
                case w:
                  e: {
                    for (var s = o.key, c = l; null !== c; ) {
                      if (c.key === s) {
                        if ((s = o.type) === S) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((l = a(c, o.props.children)).return = r),
                              (r = l)
                            break e
                          }
                        } else if (
                          c.elementType === s ||
                          ("object" === typeof s &&
                            null !== s &&
                            s.$$typeof === O &&
                            Yl(s) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((l = a(c, o.props)).ref = Ql(r, c, o)),
                            (l.return = r),
                            (r = l)
                          break e
                        }
                        n(r, c)
                        break
                      }
                      t(r, c), (c = c.sibling)
                    }
                    o.type === S
                      ? (((l = Ms(o.props.children, r.mode, u, o.key)).return =
                          r),
                        (r = l))
                      : (((u = Fs(
                          o.type,
                          o.key,
                          o.props,
                          null,
                          r.mode,
                          u
                        )).ref = Ql(r, l, o)),
                        (u.return = r),
                        (r = u))
                  }
                  return i(r)
                case k:
                  e: {
                    for (c = o.key; null !== l; ) {
                      if (l.key === c) {
                        if (
                          4 === l.tag &&
                          l.stateNode.containerInfo === o.containerInfo &&
                          l.stateNode.implementation === o.implementation
                        ) {
                          n(r, l.sibling),
                            ((l = a(l, o.children || [])).return = r),
                            (r = l)
                          break e
                        }
                        n(r, l)
                        break
                      }
                      t(r, l), (l = l.sibling)
                    }
                    ;((l = Ds(o, r.mode, u)).return = r), (r = l)
                  }
                  return i(r)
                case O:
                  return e(r, l, (c = o._init)(o._payload), u)
              }
              if (te(o)) return h(r, l, o, u)
              if (M(o)) return v(r, l, o, u)
              ql(r, o)
            }
            return ("string" === typeof o && "" !== o) || "number" === typeof o
              ? ((o = "" + o),
                null !== l && 6 === l.tag
                  ? (n(r, l.sibling), ((l = a(l, o)).return = r), (r = l))
                  : (n(r, l), ((l = Is(o, r.mode, u)).return = r), (r = l)),
                i(r))
              : n(r, l)
          }
        }
        var Gl = Kl(!0),
          Jl = Kl(!1),
          Xl = {},
          Zl = Ea(Xl),
          eo = Ea(Xl),
          to = Ea(Xl)
        function no(e) {
          if (e === Xl) throw Error(l(174))
          return e
        }
        function ro(e, t) {
          switch ((Na(to, t), Na(eo, e), Na(Zl, Xl), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : ue(null, "")
              break
            default:
              t = ue(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              )
          }
          ja(Zl), Na(Zl, t)
        }
        function ao() {
          ja(Zl), ja(eo), ja(to)
        }
        function lo(e) {
          no(to.current)
          var t = no(Zl.current),
            n = ue(t, e.type)
          t !== n && (Na(eo, e), Na(Zl, n))
        }
        function oo(e) {
          eo.current === e && (ja(Zl), ja(eo))
        }
        var io = Ea(0)
        function uo(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t
            } else if (null !== t.child) {
              ;(t.child.return = t), (t = t.child)
              continue
            }
            if (t === e) break
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null
              t = t.return
            }
            ;(t.sibling.return = t.return), (t = t.sibling)
          }
          return null
        }
        var so = []
        function co() {
          for (var e = 0; e < so.length; e++)
            so[e]._workInProgressVersionPrimary = null
          so.length = 0
        }
        var fo = x.ReactCurrentDispatcher,
          po = x.ReactCurrentBatchConfig,
          mo = 0,
          ho = null,
          vo = null,
          go = null,
          yo = !1,
          bo = !1,
          xo = 0,
          wo = 0
        function ko() {
          throw Error(l(321))
        }
        function So(e, t) {
          if (null === t) return !1
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!ir(e[n], t[n])) return !1
          return !0
        }
        function Eo(e, t, n, r, a, o) {
          if (
            ((mo = o),
            (ho = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (fo.current = null === e || null === e.memoizedState ? ii : ui),
            (e = n(r, a)),
            bo)
          ) {
            o = 0
            do {
              if (((bo = !1), (xo = 0), 25 <= o)) throw Error(l(301))
              ;(o += 1),
                (go = vo = null),
                (t.updateQueue = null),
                (fo.current = si),
                (e = n(r, a))
            } while (bo)
          }
          if (
            ((fo.current = oi),
            (t = null !== vo && null !== vo.next),
            (mo = 0),
            (go = vo = ho = null),
            (yo = !1),
            t)
          )
            throw Error(l(300))
          return e
        }
        function jo() {
          var e = 0 !== xo
          return (xo = 0), e
        }
        function No() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          }
          return (
            null === go ? (ho.memoizedState = go = e) : (go = go.next = e), go
          )
        }
        function Co() {
          if (null === vo) {
            var e = ho.alternate
            e = null !== e ? e.memoizedState : null
          } else e = vo.next
          var t = null === go ? ho.memoizedState : go.next
          if (null !== t) (go = t), (vo = e)
          else {
            if (null === e) throw Error(l(310))
            ;(e = {
              memoizedState: (vo = e).memoizedState,
              baseState: vo.baseState,
              baseQueue: vo.baseQueue,
              queue: vo.queue,
              next: null,
            }),
              null === go ? (ho.memoizedState = go = e) : (go = go.next = e)
          }
          return go
        }
        function Po(e, t) {
          return "function" === typeof t ? t(e) : t
        }
        function _o(e) {
          var t = Co(),
            n = t.queue
          if (null === n) throw Error(l(311))
          n.lastRenderedReducer = e
          var r = vo,
            a = r.baseQueue,
            o = n.pending
          if (null !== o) {
            if (null !== a) {
              var i = a.next
              ;(a.next = o.next), (o.next = i)
            }
            ;(r.baseQueue = a = o), (n.pending = null)
          }
          if (null !== a) {
            ;(o = a.next), (r = r.baseState)
            var u = (i = null),
              s = null,
              c = o
            do {
              var d = c.lane
              if ((mo & d) === d)
                null !== s &&
                  (s = s.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action))
              else {
                var f = {
                  lane: d,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                }
                null === s ? ((u = s = f), (i = r)) : (s = s.next = f),
                  (ho.lanes |= d),
                  (Ru |= d)
              }
              c = c.next
            } while (null !== c && c !== o)
            null === s ? (i = r) : (s.next = u),
              ir(r, t.memoizedState) || (xi = !0),
              (t.memoizedState = r),
              (t.baseState = i),
              (t.baseQueue = s),
              (n.lastRenderedState = r)
          }
          if (null !== (e = n.interleaved)) {
            a = e
            do {
              ;(o = a.lane), (ho.lanes |= o), (Ru |= o), (a = a.next)
            } while (a !== e)
          } else null === a && (n.lanes = 0)
          return [t.memoizedState, n.dispatch]
        }
        function To(e) {
          var t = Co(),
            n = t.queue
          if (null === n) throw Error(l(311))
          n.lastRenderedReducer = e
          var r = n.dispatch,
            a = n.pending,
            o = t.memoizedState
          if (null !== a) {
            n.pending = null
            var i = (a = a.next)
            do {
              ;(o = e(o, i.action)), (i = i.next)
            } while (i !== a)
            ir(o, t.memoizedState) || (xi = !0),
              (t.memoizedState = o),
              null === t.baseQueue && (t.baseState = o),
              (n.lastRenderedState = o)
          }
          return [o, r]
        }
        function Lo() {}
        function Oo(e, t) {
          var n = ho,
            r = Co(),
            a = t(),
            o = !ir(r.memoizedState, a)
          if (
            (o && ((r.memoizedState = a), (xi = !0)),
            (r = r.queue),
            Wo(Mo.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              o ||
              (null !== go && 1 & go.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Ao(9, Fo.bind(null, n, r, a, t), void 0, null),
              null === _u)
            )
              throw Error(l(349))
            0 !== (30 & mo) || zo(n, t, a)
          }
          return a
        }
        function zo(e, t, n) {
          ;(e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = ho.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (ho.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e)
        }
        function Fo(e, t, n, r) {
          ;(t.value = n), (t.getSnapshot = r), Ro(t) && Io(e)
        }
        function Mo(e, t, n) {
          return n(function () {
            Ro(t) && Io(e)
          })
        }
        function Ro(e) {
          var t = e.getSnapshot
          e = e.value
          try {
            var n = t()
            return !ir(e, n)
          } catch (r) {
            return !0
          }
        }
        function Io(e) {
          var t = _l(e, 1)
          null !== t && ns(t, e, 1, -1)
        }
        function Do(e) {
          var t = No()
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Po,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = ni.bind(null, ho, e)),
            [t.memoizedState, e]
          )
        }
        function Ao(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = ho.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (ho.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          )
        }
        function Bo() {
          return Co().memoizedState
        }
        function Uo(e, t, n, r) {
          var a = No()
          ;(ho.flags |= e),
            (a.memoizedState = Ao(1 | t, n, void 0, void 0 === r ? null : r))
        }
        function Ho(e, t, n, r) {
          var a = Co()
          r = void 0 === r ? null : r
          var l = void 0
          if (null !== vo) {
            var o = vo.memoizedState
            if (((l = o.destroy), null !== r && So(r, o.deps)))
              return void (a.memoizedState = Ao(t, n, l, r))
          }
          ;(ho.flags |= e), (a.memoizedState = Ao(1 | t, n, l, r))
        }
        function Vo(e, t) {
          return Uo(8390656, 8, e, t)
        }
        function Wo(e, t) {
          return Ho(2048, 8, e, t)
        }
        function $o(e, t) {
          return Ho(4, 2, e, t)
        }
        function Qo(e, t) {
          return Ho(4, 4, e, t)
        }
        function qo(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null)
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null
              })
            : void 0
        }
        function Yo(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Ho(4, 4, qo.bind(null, t, e), n)
          )
        }
        function Ko() {}
        function Go(e, t) {
          var n = Co()
          t = void 0 === t ? null : t
          var r = n.memoizedState
          return null !== r && null !== t && So(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e)
        }
        function Jo(e, t) {
          var n = Co()
          t = void 0 === t ? null : t
          var r = n.memoizedState
          return null !== r && null !== t && So(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e)
        }
        function Xo(e, t, n) {
          return 0 === (21 & mo)
            ? (e.baseState && ((e.baseState = !1), (xi = !0)),
              (e.memoizedState = n))
            : (ir(n, t) ||
                ((n = ht()), (ho.lanes |= n), (Ru |= n), (e.baseState = !0)),
              t)
        }
        function Zo(e, t) {
          var n = bt
          ;(bt = 0 !== n && 4 > n ? n : 4), e(!0)
          var r = po.transition
          po.transition = {}
          try {
            e(!1), t()
          } finally {
            ;(bt = n), (po.transition = r)
          }
        }
        function ei() {
          return Co().memoizedState
        }
        function ti(e, t, n) {
          var r = ts(e)
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            ri(e))
          )
            ai(t, n)
          else if (null !== (n = Pl(e, t, n, r))) {
            ns(n, e, r, es()), li(n, t, r)
          }
        }
        function ni(e, t, n) {
          var r = ts(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }
          if (ri(e)) ai(t, a)
          else {
            var l = e.alternate
            if (
              0 === e.lanes &&
              (null === l || 0 === l.lanes) &&
              null !== (l = t.lastRenderedReducer)
            )
              try {
                var o = t.lastRenderedState,
                  i = l(o, n)
                if (((a.hasEagerState = !0), (a.eagerState = i), ir(i, o))) {
                  var u = t.interleaved
                  return (
                    null === u
                      ? ((a.next = a), Cl(t))
                      : ((a.next = u.next), (u.next = a)),
                    void (t.interleaved = a)
                  )
                }
              } catch (s) {}
            null !== (n = Pl(e, t, a, r)) &&
              (ns(n, e, r, (a = es())), li(n, t, r))
          }
        }
        function ri(e) {
          var t = e.alternate
          return e === ho || (null !== t && t === ho)
        }
        function ai(e, t) {
          bo = yo = !0
          var n = e.pending
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t)
        }
        function li(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes
            ;(n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n)
          }
        }
        var oi = {
            readContext: jl,
            useCallback: ko,
            useContext: ko,
            useEffect: ko,
            useImperativeHandle: ko,
            useInsertionEffect: ko,
            useLayoutEffect: ko,
            useMemo: ko,
            useReducer: ko,
            useRef: ko,
            useState: ko,
            useDebugValue: ko,
            useDeferredValue: ko,
            useTransition: ko,
            useMutableSource: ko,
            useSyncExternalStore: ko,
            useId: ko,
            unstable_isNewReconciler: !1,
          },
          ii = {
            readContext: jl,
            useCallback: function (e, t) {
              return (No().memoizedState = [e, void 0 === t ? null : t]), e
            },
            useContext: jl,
            useEffect: Vo,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Uo(4194308, 4, qo.bind(null, t, e), n)
              )
            },
            useLayoutEffect: function (e, t) {
              return Uo(4194308, 4, e, t)
            },
            useInsertionEffect: function (e, t) {
              return Uo(4, 2, e, t)
            },
            useMemo: function (e, t) {
              var n = No()
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              )
            },
            useReducer: function (e, t, n) {
              var r = No()
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = ti.bind(null, ho, e)),
                [r.memoizedState, e]
              )
            },
            useRef: function (e) {
              return (e = { current: e }), (No().memoizedState = e)
            },
            useState: Do,
            useDebugValue: Ko,
            useDeferredValue: function (e) {
              return (No().memoizedState = e)
            },
            useTransition: function () {
              var e = Do(!1),
                t = e[0]
              return (e = Zo.bind(null, e[1])), (No().memoizedState = e), [t, e]
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = ho,
                a = No()
              if (al) {
                if (void 0 === n) throw Error(l(407))
                n = n()
              } else {
                if (((n = t()), null === _u)) throw Error(l(349))
                0 !== (30 & mo) || zo(r, t, n)
              }
              a.memoizedState = n
              var o = { value: n, getSnapshot: t }
              return (
                (a.queue = o),
                Vo(Mo.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                Ao(9, Fo.bind(null, r, o, n, t), void 0, null),
                n
              )
            },
            useId: function () {
              var e = No(),
                t = _u.identifierPrefix
              if (al) {
                var n = Ja
                ;(t =
                  ":" +
                  t +
                  "R" +
                  (n = (Ga & ~(1 << (32 - ot(Ga) - 1))).toString(32) + n)),
                  0 < (n = xo++) && (t += "H" + n.toString(32)),
                  (t += ":")
              } else t = ":" + t + "r" + (n = wo++).toString(32) + ":"
              return (e.memoizedState = t)
            },
            unstable_isNewReconciler: !1,
          },
          ui = {
            readContext: jl,
            useCallback: Go,
            useContext: jl,
            useEffect: Wo,
            useImperativeHandle: Yo,
            useInsertionEffect: $o,
            useLayoutEffect: Qo,
            useMemo: Jo,
            useReducer: _o,
            useRef: Bo,
            useState: function () {
              return _o(Po)
            },
            useDebugValue: Ko,
            useDeferredValue: function (e) {
              return Xo(Co(), vo.memoizedState, e)
            },
            useTransition: function () {
              return [_o(Po)[0], Co().memoizedState]
            },
            useMutableSource: Lo,
            useSyncExternalStore: Oo,
            useId: ei,
            unstable_isNewReconciler: !1,
          },
          si = {
            readContext: jl,
            useCallback: Go,
            useContext: jl,
            useEffect: Wo,
            useImperativeHandle: Yo,
            useInsertionEffect: $o,
            useLayoutEffect: Qo,
            useMemo: Jo,
            useReducer: To,
            useRef: Bo,
            useState: function () {
              return To(Po)
            },
            useDebugValue: Ko,
            useDeferredValue: function (e) {
              var t = Co()
              return null === vo
                ? (t.memoizedState = e)
                : Xo(t, vo.memoizedState, e)
            },
            useTransition: function () {
              return [To(Po)[0], Co().memoizedState]
            },
            useMutableSource: Lo,
            useSyncExternalStore: Oo,
            useId: ei,
            unstable_isNewReconciler: !1,
          }
        function ci(e, t) {
          try {
            var n = "",
              r = t
            do {
              ;(n += U(r)), (r = r.return)
            } while (r)
            var a = n
          } catch (l) {
            a = "\nError generating stack: " + l.message + "\n" + l.stack
          }
          return { value: e, source: t, stack: a, digest: null }
        }
        function di(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          }
        }
        function fi(e, t) {
          try {
            console.error(t.value)
          } catch (n) {
            setTimeout(function () {
              throw n
            })
          }
        }
        var pi = "function" === typeof WeakMap ? WeakMap : Map
        function mi(e, t, n) {
          ;((n = zl(-1, n)).tag = 3), (n.payload = { element: null })
          var r = t.value
          return (
            (n.callback = function () {
              Wu || ((Wu = !0), ($u = r)), fi(0, t)
            }),
            n
          )
        }
        function hi(e, t, n) {
          ;(n = zl(-1, n)).tag = 3
          var r = e.type.getDerivedStateFromError
          if ("function" === typeof r) {
            var a = t.value
            ;(n.payload = function () {
              return r(a)
            }),
              (n.callback = function () {
                fi(0, t)
              })
          }
          var l = e.stateNode
          return (
            null !== l &&
              "function" === typeof l.componentDidCatch &&
              (n.callback = function () {
                fi(0, t),
                  "function" !== typeof r &&
                    (null === Qu ? (Qu = new Set([this])) : Qu.add(this))
                var e = t.stack
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                })
              }),
            n
          )
        }
        function vi(e, t, n) {
          var r = e.pingCache
          if (null === r) {
            r = e.pingCache = new pi()
            var a = new Set()
            r.set(t, a)
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a))
          a.has(n) || (a.add(n), (e = js.bind(null, e, t, n)), t.then(e, e))
        }
        function gi(e) {
          do {
            var t
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e
            e = e.return
          } while (null !== e)
          return null
        }
        function yi(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = zl(-1, 1)).tag = 2), Fl(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e)
        }
        var bi = x.ReactCurrentOwner,
          xi = !1
        function wi(e, t, n, r) {
          t.child = null === e ? Jl(t, null, n, r) : Gl(t, e.child, n, r)
        }
        function ki(e, t, n, r, a) {
          n = n.render
          var l = t.ref
          return (
            El(t, a),
            (r = Eo(e, t, n, r, l, a)),
            (n = jo()),
            null === e || xi
              ? (al && n && el(t), (t.flags |= 1), wi(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Wi(e, t, a))
          )
        }
        function Si(e, t, n, r, a) {
          if (null === e) {
            var l = n.type
            return "function" !== typeof l ||
              Os(l) ||
              void 0 !== l.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Fs(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = l), Ei(e, t, l, r, a))
          }
          if (((l = e.child), 0 === (e.lanes & a))) {
            var o = l.memoizedProps
            if (
              (n = null !== (n = n.compare) ? n : ur)(o, r) &&
              e.ref === t.ref
            )
              return Wi(e, t, a)
          }
          return (
            (t.flags |= 1),
            ((e = zs(l, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          )
        }
        function Ei(e, t, n, r, a) {
          if (null !== e) {
            var l = e.memoizedProps
            if (ur(l, r) && e.ref === t.ref) {
              if (((xi = !1), (t.pendingProps = r = l), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), Wi(e, t, a)
              0 !== (131072 & e.flags) && (xi = !0)
            }
          }
          return Ci(e, t, n, r, a)
        }
        function ji(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            l = null !== e ? e.memoizedState : null
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Na(zu, Ou),
                (Ou |= n)
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== l ? l.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Na(zu, Ou),
                  (Ou |= e),
                  null
                )
              ;(t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== l ? l.baseLanes : n),
                Na(zu, Ou),
                (Ou |= r)
            }
          else
            null !== l
              ? ((r = l.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Na(zu, Ou),
              (Ou |= r)
          return wi(e, t, a, n), t.child
        }
        function Ni(e, t) {
          var n = t.ref
          ;((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152))
        }
        function Ci(e, t, n, r, a) {
          var l = Oa(n) ? Ta : Pa.current
          return (
            (l = La(t, l)),
            El(t, a),
            (n = Eo(e, t, n, r, l, a)),
            (r = jo()),
            null === e || xi
              ? (al && r && el(t), (t.flags |= 1), wi(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Wi(e, t, a))
          )
        }
        function Pi(e, t, n, r, a) {
          if (Oa(n)) {
            var l = !0
            Ra(t)
          } else l = !1
          if ((El(t, a), null === t.stateNode))
            Vi(e, t), Vl(t, n, r), $l(t, n, r, a), (r = !0)
          else if (null === e) {
            var o = t.stateNode,
              i = t.memoizedProps
            o.props = i
            var u = o.context,
              s = n.contextType
            "object" === typeof s && null !== s
              ? (s = jl(s))
              : (s = La(t, (s = Oa(n) ? Ta : Pa.current)))
            var c = n.getDerivedStateFromProps,
              d =
                "function" === typeof c ||
                "function" === typeof o.getSnapshotBeforeUpdate
            d ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((i !== r || u !== s) && Wl(t, o, r, s)),
              (Tl = !1)
            var f = t.memoizedState
            ;(o.state = f),
              Il(t, r, o, a),
              (u = t.memoizedState),
              i !== r || f !== u || _a.current || Tl
                ? ("function" === typeof c &&
                    (Bl(t, n, c, r), (u = t.memoizedState)),
                  (i = Tl || Hl(t, n, i, r, f, u, s))
                    ? (d ||
                        ("function" !== typeof o.UNSAFE_componentWillMount &&
                          "function" !== typeof o.componentWillMount) ||
                        ("function" === typeof o.componentWillMount &&
                          o.componentWillMount(),
                        "function" === typeof o.UNSAFE_componentWillMount &&
                          o.UNSAFE_componentWillMount()),
                      "function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (o.props = r),
                  (o.state = u),
                  (o.context = s),
                  (r = i))
                : ("function" === typeof o.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1))
          } else {
            ;(o = t.stateNode),
              Ol(e, t),
              (i = t.memoizedProps),
              (s = t.type === t.elementType ? i : vl(t.type, i)),
              (o.props = s),
              (d = t.pendingProps),
              (f = o.context),
              "object" === typeof (u = n.contextType) && null !== u
                ? (u = jl(u))
                : (u = La(t, (u = Oa(n) ? Ta : Pa.current)))
            var p = n.getDerivedStateFromProps
            ;(c =
              "function" === typeof p ||
              "function" === typeof o.getSnapshotBeforeUpdate) ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((i !== d || f !== u) && Wl(t, o, r, u)),
              (Tl = !1),
              (f = t.memoizedState),
              (o.state = f),
              Il(t, r, o, a)
            var m = t.memoizedState
            i !== d || f !== m || _a.current || Tl
              ? ("function" === typeof p &&
                  (Bl(t, n, p, r), (m = t.memoizedState)),
                (s = Tl || Hl(t, n, s, r, f, m, u) || !1)
                  ? (c ||
                      ("function" !== typeof o.UNSAFE_componentWillUpdate &&
                        "function" !== typeof o.componentWillUpdate) ||
                      ("function" === typeof o.componentWillUpdate &&
                        o.componentWillUpdate(r, m, u),
                      "function" === typeof o.UNSAFE_componentWillUpdate &&
                        o.UNSAFE_componentWillUpdate(r, m, u)),
                    "function" === typeof o.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof o.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof o.componentDidUpdate ||
                      (i === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof o.getSnapshotBeforeUpdate ||
                      (i === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = m)),
                (o.props = r),
                (o.state = m),
                (o.context = u),
                (r = s))
              : ("function" !== typeof o.componentDidUpdate ||
                  (i === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof o.getSnapshotBeforeUpdate ||
                  (i === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1))
          }
          return _i(e, t, n, r, l, a)
        }
        function _i(e, t, n, r, a, l) {
          Ni(e, t)
          var o = 0 !== (128 & t.flags)
          if (!r && !o) return a && Ia(t, n, !1), Wi(e, t, l)
          ;(r = t.stateNode), (bi.current = t)
          var i =
            o && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render()
          return (
            (t.flags |= 1),
            null !== e && o
              ? ((t.child = Gl(t, e.child, null, l)),
                (t.child = Gl(t, null, i, l)))
              : wi(e, t, i, l),
            (t.memoizedState = r.state),
            a && Ia(t, n, !0),
            t.child
          )
        }
        function Ti(e) {
          var t = e.stateNode
          t.pendingContext
            ? Fa(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Fa(0, t.context, !1),
            ro(e, t.containerInfo)
        }
        function Li(e, t, n, r, a) {
          return pl(), ml(a), (t.flags |= 256), wi(e, t, n, r), t.child
        }
        var Oi,
          zi,
          Fi,
          Mi = { dehydrated: null, treeContext: null, retryLane: 0 }
        function Ri(e) {
          return { baseLanes: e, cachePool: null, transitions: null }
        }
        function Ii(e, t, n) {
          var r,
            a = t.pendingProps,
            o = io.current,
            i = !1,
            u = 0 !== (128 & t.flags)
          if (
            ((r = u) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & o)),
            r
              ? ((i = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (o |= 1),
            Na(io, 1 & o),
            null === e)
          )
            return (
              sl(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((u = a.children),
                  (e = a.fallback),
                  i
                    ? ((a = t.mode),
                      (i = t.child),
                      (u = { mode: "hidden", children: u }),
                      0 === (1 & a) && null !== i
                        ? ((i.childLanes = 0), (i.pendingProps = u))
                        : (i = Rs(u, a, 0, null)),
                      (e = Ms(e, a, n, null)),
                      (i.return = t),
                      (e.return = t),
                      (i.sibling = e),
                      (t.child = i),
                      (t.child.memoizedState = Ri(n)),
                      (t.memoizedState = Mi),
                      e)
                    : Di(t, u))
            )
          if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
            return (function (e, t, n, r, a, o, i) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Ai(e, t, i, (r = di(Error(l(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((o = r.fallback),
                    (a = t.mode),
                    (r = Rs(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((o = Ms(o, a, i, null)).flags |= 2),
                    (r.return = t),
                    (o.return = t),
                    (r.sibling = o),
                    (t.child = r),
                    0 !== (1 & t.mode) && Gl(t, e.child, null, i),
                    (t.child.memoizedState = Ri(i)),
                    (t.memoizedState = Mi),
                    o)
              if (0 === (1 & t.mode)) return Ai(e, t, i, null)
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset)) var u = r.dgst
                return (
                  (r = u), Ai(e, t, i, (r = di((o = Error(l(419))), r, void 0)))
                )
              }
              if (((u = 0 !== (i & e.childLanes)), xi || u)) {
                if (null !== (r = _u)) {
                  switch (i & -i) {
                    case 4:
                      a = 2
                      break
                    case 16:
                      a = 8
                      break
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32
                      break
                    case 536870912:
                      a = 268435456
                      break
                    default:
                      a = 0
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | i)) ? 0 : a) &&
                    a !== o.retryLane &&
                    ((o.retryLane = a), _l(e, a), ns(r, e, a, -1))
                }
                return hs(), Ai(e, t, i, (r = di(Error(l(421)))))
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Cs.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = o.treeContext),
                  (rl = sa(a.nextSibling)),
                  (nl = t),
                  (al = !0),
                  (ll = null),
                  null !== e &&
                    ((qa[Ya++] = Ga),
                    (qa[Ya++] = Ja),
                    (qa[Ya++] = Ka),
                    (Ga = e.id),
                    (Ja = e.overflow),
                    (Ka = t)),
                  ((t = Di(t, r.children)).flags |= 4096),
                  t)
            })(e, t, u, a, r, o, n)
          if (i) {
            ;(i = a.fallback), (u = t.mode), (r = (o = e.child).sibling)
            var s = { mode: "hidden", children: a.children }
            return (
              0 === (1 & u) && t.child !== o
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = s),
                  (t.deletions = null))
                : ((a = zs(o, s)).subtreeFlags = 14680064 & o.subtreeFlags),
              null !== r
                ? (i = zs(r, i))
                : ((i = Ms(i, u, n, null)).flags |= 2),
              (i.return = t),
              (a.return = t),
              (a.sibling = i),
              (t.child = a),
              (a = i),
              (i = t.child),
              (u =
                null === (u = e.child.memoizedState)
                  ? Ri(n)
                  : {
                      baseLanes: u.baseLanes | n,
                      cachePool: null,
                      transitions: u.transitions,
                    }),
              (i.memoizedState = u),
              (i.childLanes = e.childLanes & ~n),
              (t.memoizedState = Mi),
              a
            )
          }
          return (
            (e = (i = e.child).sibling),
            (a = zs(i, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          )
        }
        function Di(e, t) {
          return (
            ((t = Rs(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          )
        }
        function Ai(e, t, n, r) {
          return (
            null !== r && ml(r),
            Gl(t, e.child, null, n),
            ((e = Di(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          )
        }
        function Bi(e, t, n) {
          e.lanes |= t
          var r = e.alternate
          null !== r && (r.lanes |= t), Sl(e.return, t, n)
        }
        function Ui(e, t, n, r, a) {
          var l = e.memoizedState
          null === l
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((l.isBackwards = t),
              (l.rendering = null),
              (l.renderingStartTime = 0),
              (l.last = r),
              (l.tail = n),
              (l.tailMode = a))
        }
        function Hi(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            l = r.tail
          if ((wi(e, t, r.children, n), 0 !== (2 & (r = io.current))))
            (r = (1 & r) | 2), (t.flags |= 128)
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Bi(e, n, t)
                else if (19 === e.tag) Bi(e, n, t)
                else if (null !== e.child) {
                  ;(e.child.return = e), (e = e.child)
                  continue
                }
                if (e === t) break e
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e
                  e = e.return
                }
                ;(e.sibling.return = e.return), (e = e.sibling)
              }
            r &= 1
          }
          if ((Na(io, r), 0 === (1 & t.mode))) t.memoizedState = null
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === uo(e) && (a = n),
                    (n = n.sibling)
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Ui(t, !1, a, n, l)
                break
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === uo(e)) {
                    t.child = a
                    break
                  }
                  ;(e = a.sibling), (a.sibling = n), (n = a), (a = e)
                }
                Ui(t, !0, n, null, l)
                break
              case "together":
                Ui(t, !1, null, null, void 0)
                break
              default:
                t.memoizedState = null
            }
          return t.child
        }
        function Vi(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
        }
        function Wi(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Ru |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null
          if (null !== e && t.child !== e.child) throw Error(l(153))
          if (null !== t.child) {
            for (
              n = zs((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = zs(e, e.pendingProps)).return = t)
            n.sibling = null
          }
          return t.child
        }
        function $i(e, t) {
          if (!al)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling)
                null === n ? (e.tail = null) : (n.sibling = null)
                break
              case "collapsed":
                n = e.tail
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling)
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null)
            }
        }
        function Qi(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling)
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling)
          return (e.subtreeFlags |= r), (e.childLanes = n), t
        }
        function qi(e, t, n) {
          var r = t.pendingProps
          switch ((tl(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Qi(t), null
            case 1:
            case 17:
              return Oa(t.type) && za(), Qi(t), null
            case 3:
              return (
                (r = t.stateNode),
                ao(),
                ja(_a),
                ja(Pa),
                co(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (dl(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ll && (os(ll), (ll = null)))),
                Qi(t),
                null
              )
            case 5:
              oo(t)
              var a = no(to.current)
              if (((n = t.type), null !== e && null != t.stateNode))
                zi(e, t, n, r),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(l(166))
                  return Qi(t), null
                }
                if (((e = no(Zl.current)), dl(t))) {
                  ;(r = t.stateNode), (n = t.type)
                  var o = t.memoizedProps
                  switch (
                    ((r[fa] = t), (r[pa] = o), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Ar("cancel", r), Ar("close", r)
                      break
                    case "iframe":
                    case "object":
                    case "embed":
                      Ar("load", r)
                      break
                    case "video":
                    case "audio":
                      for (a = 0; a < Mr.length; a++) Ar(Mr[a], r)
                      break
                    case "source":
                      Ar("error", r)
                      break
                    case "img":
                    case "image":
                    case "link":
                      Ar("error", r), Ar("load", r)
                      break
                    case "details":
                      Ar("toggle", r)
                      break
                    case "input":
                      G(r, o), Ar("invalid", r)
                      break
                    case "select":
                      ;(r._wrapperState = { wasMultiple: !!o.multiple }),
                        Ar("invalid", r)
                      break
                    case "textarea":
                      ae(r, o), Ar("invalid", r)
                  }
                  for (var u in (ye(n, o), (a = null), o))
                    if (o.hasOwnProperty(u)) {
                      var s = o[u]
                      "children" === u
                        ? "string" === typeof s
                          ? r.textContent !== s &&
                            (!0 !== o.suppressHydrationWarning &&
                              Xr(r.textContent, s, e),
                            (a = ["children", s]))
                          : "number" === typeof s &&
                            r.textContent !== "" + s &&
                            (!0 !== o.suppressHydrationWarning &&
                              Xr(r.textContent, s, e),
                            (a = ["children", "" + s]))
                        : i.hasOwnProperty(u) &&
                          null != s &&
                          "onScroll" === u &&
                          Ar("scroll", r)
                    }
                  switch (n) {
                    case "input":
                      Q(r), Z(r, o, !0)
                      break
                    case "textarea":
                      Q(r), oe(r)
                      break
                    case "select":
                    case "option":
                      break
                    default:
                      "function" === typeof o.onClick && (r.onclick = Zr)
                  }
                  ;(r = a), (t.updateQueue = r), null !== r && (t.flags |= 4)
                } else {
                  ;(u = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = ie(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = u.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = u.createElement(n, { is: r.is }))
                        : ((e = u.createElement(n)),
                          "select" === n &&
                            ((u = e),
                            r.multiple
                              ? (u.multiple = !0)
                              : r.size && (u.size = r.size)))
                      : (e = u.createElementNS(e, n)),
                    (e[fa] = t),
                    (e[pa] = r),
                    Oi(e, t),
                    (t.stateNode = e)
                  e: {
                    switch (((u = be(n, r)), n)) {
                      case "dialog":
                        Ar("cancel", e), Ar("close", e), (a = r)
                        break
                      case "iframe":
                      case "object":
                      case "embed":
                        Ar("load", e), (a = r)
                        break
                      case "video":
                      case "audio":
                        for (a = 0; a < Mr.length; a++) Ar(Mr[a], e)
                        a = r
                        break
                      case "source":
                        Ar("error", e), (a = r)
                        break
                      case "img":
                      case "image":
                      case "link":
                        Ar("error", e), Ar("load", e), (a = r)
                        break
                      case "details":
                        Ar("toggle", e), (a = r)
                        break
                      case "input":
                        G(e, r), (a = K(e, r)), Ar("invalid", e)
                        break
                      case "option":
                      default:
                        a = r
                        break
                      case "select":
                        ;(e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = I({}, r, { value: void 0 })),
                          Ar("invalid", e)
                        break
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Ar("invalid", e)
                    }
                    for (o in (ye(n, a), (s = a)))
                      if (s.hasOwnProperty(o)) {
                        var c = s[o]
                        "style" === o
                          ? ve(e, c)
                          : "dangerouslySetInnerHTML" === o
                          ? null != (c = c ? c.__html : void 0) && de(e, c)
                          : "children" === o
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && fe(e, c)
                            : "number" === typeof c && fe(e, "" + c)
                          : "suppressContentEditableWarning" !== o &&
                            "suppressHydrationWarning" !== o &&
                            "autoFocus" !== o &&
                            (i.hasOwnProperty(o)
                              ? null != c && "onScroll" === o && Ar("scroll", e)
                              : null != c && b(e, o, c, u))
                      }
                    switch (n) {
                      case "input":
                        Q(e), Z(e, r, !1)
                        break
                      case "textarea":
                        Q(e), oe(e)
                        break
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + W(r.value))
                        break
                      case "select":
                        ;(e.multiple = !!r.multiple),
                          null != (o = r.value)
                            ? ne(e, !!r.multiple, o, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0)
                        break
                      default:
                        "function" === typeof a.onClick && (e.onclick = Zr)
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus
                        break e
                      case "img":
                        r = !0
                        break e
                      default:
                        r = !1
                    }
                  }
                  r && (t.flags |= 4)
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
              }
              return Qi(t), null
            case 6:
              if (e && null != t.stateNode) Fi(0, t, e.memoizedProps, r)
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(l(166))
                if (((n = no(to.current)), no(Zl.current), dl(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[fa] = t),
                    (o = r.nodeValue !== n) && null !== (e = nl))
                  )
                    switch (e.tag) {
                      case 3:
                        Xr(r.nodeValue, n, 0 !== (1 & e.mode))
                        break
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Xr(r.nodeValue, n, 0 !== (1 & e.mode))
                    }
                  o && (t.flags |= 4)
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[fa] = t),
                    (t.stateNode = r)
              }
              return Qi(t), null
            case 13:
              if (
                (ja(io),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  al &&
                  null !== rl &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  fl(), pl(), (t.flags |= 98560), (o = !1)
                else if (((o = dl(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!o) throw Error(l(318))
                    if (
                      !(o =
                        null !== (o = t.memoizedState) ? o.dehydrated : null)
                    )
                      throw Error(l(317))
                    o[fa] = t
                  } else
                    pl(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4)
                  Qi(t), (o = !1)
                } else null !== ll && (os(ll), (ll = null)), (o = !0)
                if (!o) return 65536 & t.flags ? t : null
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & io.current)
                        ? 0 === Fu && (Fu = 3)
                        : hs())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Qi(t),
                  null)
            case 4:
              return (
                ao(), null === e && Hr(t.stateNode.containerInfo), Qi(t), null
              )
            case 10:
              return kl(t.type._context), Qi(t), null
            case 19:
              if ((ja(io), null === (o = t.memoizedState))) return Qi(t), null
              if (((r = 0 !== (128 & t.flags)), null === (u = o.rendering)))
                if (r) $i(o, !1)
                else {
                  if (0 !== Fu || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (u = uo(e))) {
                        for (
                          t.flags |= 128,
                            $i(o, !1),
                            null !== (r = u.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((o = n).flags &= 14680066),
                            null === (u = o.alternate)
                              ? ((o.childLanes = 0),
                                (o.lanes = e),
                                (o.child = null),
                                (o.subtreeFlags = 0),
                                (o.memoizedProps = null),
                                (o.memoizedState = null),
                                (o.updateQueue = null),
                                (o.dependencies = null),
                                (o.stateNode = null))
                              : ((o.childLanes = u.childLanes),
                                (o.lanes = u.lanes),
                                (o.child = u.child),
                                (o.subtreeFlags = 0),
                                (o.deletions = null),
                                (o.memoizedProps = u.memoizedProps),
                                (o.memoizedState = u.memoizedState),
                                (o.updateQueue = u.updateQueue),
                                (o.type = u.type),
                                (e = u.dependencies),
                                (o.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling)
                        return Na(io, (1 & io.current) | 2), t.child
                      }
                      e = e.sibling
                    }
                  null !== o.tail &&
                    Je() > Hu &&
                    ((t.flags |= 128), (r = !0), $i(o, !1), (t.lanes = 4194304))
                }
              else {
                if (!r)
                  if (null !== (e = uo(u))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      $i(o, !0),
                      null === o.tail &&
                        "hidden" === o.tailMode &&
                        !u.alternate &&
                        !al)
                    )
                      return Qi(t), null
                  } else
                    2 * Je() - o.renderingStartTime > Hu &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      $i(o, !1),
                      (t.lanes = 4194304))
                o.isBackwards
                  ? ((u.sibling = t.child), (t.child = u))
                  : (null !== (n = o.last) ? (n.sibling = u) : (t.child = u),
                    (o.last = u))
              }
              return null !== o.tail
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = Je()),
                  (t.sibling = null),
                  (n = io.current),
                  Na(io, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Qi(t), null)
            case 22:
            case 23:
              return (
                ds(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Ou) &&
                    (Qi(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Qi(t),
                null
              )
            case 24:
            case 25:
              return null
          }
          throw Error(l(156, t.tag))
        }
        function Yi(e, t) {
          switch ((tl(t), t.tag)) {
            case 1:
              return (
                Oa(t.type) && za(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              )
            case 3:
              return (
                ao(),
                ja(_a),
                ja(Pa),
                co(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              )
            case 5:
              return oo(t), null
            case 13:
              if (
                (ja(io),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(l(340))
                pl()
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null
            case 19:
              return ja(io), null
            case 4:
              return ao(), null
            case 10:
              return kl(t.type._context), null
            case 22:
            case 23:
              return ds(), null
            default:
              return null
          }
        }
        ;(Oi = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode)
            else if (4 !== n.tag && null !== n.child) {
              ;(n.child.return = n), (n = n.child)
              continue
            }
            if (n === t) break
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return
              n = n.return
            }
            ;(n.sibling.return = n.return), (n = n.sibling)
          }
        }),
          (zi = function (e, t, n, r) {
            var a = e.memoizedProps
            if (a !== r) {
              ;(e = t.stateNode), no(Zl.current)
              var l,
                o = null
              switch (n) {
                case "input":
                  ;(a = K(e, a)), (r = K(e, r)), (o = [])
                  break
                case "select":
                  ;(a = I({}, a, { value: void 0 })),
                    (r = I({}, r, { value: void 0 })),
                    (o = [])
                  break
                case "textarea":
                  ;(a = re(e, a)), (r = re(e, r)), (o = [])
                  break
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Zr)
              }
              for (c in (ye(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ("style" === c) {
                    var u = a[c]
                    for (l in u)
                      u.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""))
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (i.hasOwnProperty(c)
                        ? o || (o = [])
                        : (o = o || []).push(c, null))
              for (c in r) {
                var s = r[c]
                if (
                  ((u = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && s !== u && (null != s || null != u))
                )
                  if ("style" === c)
                    if (u) {
                      for (l in u)
                        !u.hasOwnProperty(l) ||
                          (s && s.hasOwnProperty(l)) ||
                          (n || (n = {}), (n[l] = ""))
                      for (l in s)
                        s.hasOwnProperty(l) &&
                          u[l] !== s[l] &&
                          (n || (n = {}), (n[l] = s[l]))
                    } else n || (o || (o = []), o.push(c, n)), (n = s)
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((s = s ? s.__html : void 0),
                        (u = u ? u.__html : void 0),
                        null != s && u !== s && (o = o || []).push(c, s))
                      : "children" === c
                      ? ("string" !== typeof s && "number" !== typeof s) ||
                        (o = o || []).push(c, "" + s)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (i.hasOwnProperty(c)
                          ? (null != s && "onScroll" === c && Ar("scroll", e),
                            o || u === s || (o = []))
                          : (o = o || []).push(c, s))
              }
              n && (o = o || []).push("style", n)
              var c = o
              ;(t.updateQueue = c) && (t.flags |= 4)
            }
          }),
          (Fi = function (e, t, n, r) {
            n !== r && (t.flags |= 4)
          })
        var Ki = !1,
          Gi = !1,
          Ji = "function" === typeof WeakSet ? WeakSet : Set,
          Xi = null
        function Zi(e, t) {
          var n = e.ref
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null)
              } catch (r) {
                Es(e, t, r)
              }
            else n.current = null
        }
        function eu(e, t, n) {
          try {
            n()
          } catch (r) {
            Es(e, t, r)
          }
        }
        var tu = !1
        function nu(e, t, n) {
          var r = t.updateQueue
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next)
            do {
              if ((a.tag & e) === e) {
                var l = a.destroy
                ;(a.destroy = void 0), void 0 !== l && eu(t, n, l)
              }
              a = a.next
            } while (a !== r)
          }
        }
        function ru(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next)
            do {
              if ((n.tag & e) === e) {
                var r = n.create
                n.destroy = r()
              }
              n = n.next
            } while (n !== t)
          }
        }
        function au(e) {
          var t = e.ref
          if (null !== t) {
            var n = e.stateNode
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e)
          }
        }
        function lu(e) {
          var t = e.alternate
          null !== t && ((e.alternate = null), lu(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[fa],
              delete t[pa],
              delete t[ha],
              delete t[va],
              delete t[ga]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null)
        }
        function ou(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag
        }
        function iu(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || ou(e.return)) return null
              e = e.return
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e
              if (null === e.child || 4 === e.tag) continue e
              ;(e.child.return = e), (e = e.child)
            }
            if (!(2 & e.flags)) return e.stateNode
          }
        }
        function uu(e, t, n) {
          var r = e.tag
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Zr))
          else if (4 !== r && null !== (e = e.child))
            for (uu(e, t, n), e = e.sibling; null !== e; )
              uu(e, t, n), (e = e.sibling)
        }
        function su(e, t, n) {
          var r = e.tag
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
          else if (4 !== r && null !== (e = e.child))
            for (su(e, t, n), e = e.sibling; null !== e; )
              su(e, t, n), (e = e.sibling)
        }
        var cu = null,
          du = !1
        function fu(e, t, n) {
          for (n = n.child; null !== n; ) pu(e, t, n), (n = n.sibling)
        }
        function pu(e, t, n) {
          if (lt && "function" === typeof lt.onCommitFiberUnmount)
            try {
              lt.onCommitFiberUnmount(at, n)
            } catch (i) {}
          switch (n.tag) {
            case 5:
              Gi || Zi(n, t)
            case 6:
              var r = cu,
                a = du
              ;(cu = null),
                fu(e, t, n),
                (du = a),
                null !== (cu = r) &&
                  (du
                    ? ((e = cu),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : cu.removeChild(n.stateNode))
              break
            case 18:
              null !== cu &&
                (du
                  ? ((e = cu),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? ua(e.parentNode, n)
                      : 1 === e.nodeType && ua(e, n),
                    Ht(e))
                  : ua(cu, n.stateNode))
              break
            case 4:
              ;(r = cu),
                (a = du),
                (cu = n.stateNode.containerInfo),
                (du = !0),
                fu(e, t, n),
                (cu = r),
                (du = a)
              break
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Gi &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next
                do {
                  var l = a,
                    o = l.destroy
                  ;(l = l.tag),
                    void 0 !== o &&
                      (0 !== (2 & l) || 0 !== (4 & l)) &&
                      eu(n, t, o),
                    (a = a.next)
                } while (a !== r)
              }
              fu(e, t, n)
              break
            case 1:
              if (
                !Gi &&
                (Zi(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  ;(r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount()
                } catch (i) {
                  Es(n, t, i)
                }
              fu(e, t, n)
              break
            case 21:
              fu(e, t, n)
              break
            case 22:
              1 & n.mode
                ? ((Gi = (r = Gi) || null !== n.memoizedState),
                  fu(e, t, n),
                  (Gi = r))
                : fu(e, t, n)
              break
            default:
              fu(e, t, n)
          }
        }
        function mu(e) {
          var t = e.updateQueue
          if (null !== t) {
            e.updateQueue = null
            var n = e.stateNode
            null === n && (n = e.stateNode = new Ji()),
              t.forEach(function (t) {
                var r = Ps.bind(null, e, t)
                n.has(t) || (n.add(t), t.then(r, r))
              })
          }
        }
        function hu(e, t) {
          var n = t.deletions
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r]
              try {
                var o = e,
                  i = t,
                  u = i
                e: for (; null !== u; ) {
                  switch (u.tag) {
                    case 5:
                      ;(cu = u.stateNode), (du = !1)
                      break e
                    case 3:
                    case 4:
                      ;(cu = u.stateNode.containerInfo), (du = !0)
                      break e
                  }
                  u = u.return
                }
                if (null === cu) throw Error(l(160))
                pu(o, i, a), (cu = null), (du = !1)
                var s = a.alternate
                null !== s && (s.return = null), (a.return = null)
              } catch (c) {
                Es(a, t, c)
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) vu(t, e), (t = t.sibling)
        }
        function vu(e, t) {
          var n = e.alternate,
            r = e.flags
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((hu(t, e), gu(e), 4 & r)) {
                try {
                  nu(3, e, e.return), ru(3, e)
                } catch (v) {
                  Es(e, e.return, v)
                }
                try {
                  nu(5, e, e.return)
                } catch (v) {
                  Es(e, e.return, v)
                }
              }
              break
            case 1:
              hu(t, e), gu(e), 512 & r && null !== n && Zi(n, n.return)
              break
            case 5:
              if (
                (hu(t, e),
                gu(e),
                512 & r && null !== n && Zi(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode
                try {
                  fe(a, "")
                } catch (v) {
                  Es(e, e.return, v)
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var o = e.memoizedProps,
                  i = null !== n ? n.memoizedProps : o,
                  u = e.type,
                  s = e.updateQueue
                if (((e.updateQueue = null), null !== s))
                  try {
                    "input" === u &&
                      "radio" === o.type &&
                      null != o.name &&
                      J(a, o),
                      be(u, i)
                    var c = be(u, o)
                    for (i = 0; i < s.length; i += 2) {
                      var d = s[i],
                        f = s[i + 1]
                      "style" === d
                        ? ve(a, f)
                        : "dangerouslySetInnerHTML" === d
                        ? de(a, f)
                        : "children" === d
                        ? fe(a, f)
                        : b(a, d, f, c)
                    }
                    switch (u) {
                      case "input":
                        X(a, o)
                        break
                      case "textarea":
                        le(a, o)
                        break
                      case "select":
                        var p = a._wrapperState.wasMultiple
                        a._wrapperState.wasMultiple = !!o.multiple
                        var m = o.value
                        null != m
                          ? ne(a, !!o.multiple, m, !1)
                          : p !== !!o.multiple &&
                            (null != o.defaultValue
                              ? ne(a, !!o.multiple, o.defaultValue, !0)
                              : ne(a, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    a[pa] = o
                  } catch (v) {
                    Es(e, e.return, v)
                  }
              }
              break
            case 6:
              if ((hu(t, e), gu(e), 4 & r)) {
                if (null === e.stateNode) throw Error(l(162))
                ;(a = e.stateNode), (o = e.memoizedProps)
                try {
                  a.nodeValue = o
                } catch (v) {
                  Es(e, e.return, v)
                }
              }
              break
            case 3:
              if (
                (hu(t, e),
                gu(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Ht(t.containerInfo)
                } catch (v) {
                  Es(e, e.return, v)
                }
              break
            case 4:
            default:
              hu(t, e), gu(e)
              break
            case 13:
              hu(t, e),
                gu(e),
                8192 & (a = e.child).flags &&
                  ((o = null !== a.memoizedState),
                  (a.stateNode.isHidden = o),
                  !o ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Uu = Je())),
                4 & r && mu(e)
              break
            case 22:
              if (
                ((d = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Gi = (c = Gi) || d), hu(t, e), (Gi = c))
                  : hu(t, e),
                gu(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !d && 0 !== (1 & e.mode))
                )
                  for (Xi = e, d = e.child; null !== d; ) {
                    for (f = Xi = d; null !== Xi; ) {
                      switch (((m = (p = Xi).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          nu(4, p, p.return)
                          break
                        case 1:
                          Zi(p, p.return)
                          var h = p.stateNode
                          if ("function" === typeof h.componentWillUnmount) {
                            ;(r = p), (n = p.return)
                            try {
                              ;(t = r),
                                (h.props = t.memoizedProps),
                                (h.state = t.memoizedState),
                                h.componentWillUnmount()
                            } catch (v) {
                              Es(r, n, v)
                            }
                          }
                          break
                        case 5:
                          Zi(p, p.return)
                          break
                        case 22:
                          if (null !== p.memoizedState) {
                            wu(f)
                            continue
                          }
                      }
                      null !== m ? ((m.return = p), (Xi = m)) : wu(f)
                    }
                    d = d.sibling
                  }
                e: for (d = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f
                      try {
                        ;(a = f.stateNode),
                          c
                            ? "function" === typeof (o = a.style).setProperty
                              ? o.setProperty("display", "none", "important")
                              : (o.display = "none")
                            : ((u = f.stateNode),
                              (i =
                                void 0 !== (s = f.memoizedProps.style) &&
                                null !== s &&
                                s.hasOwnProperty("display")
                                  ? s.display
                                  : null),
                              (u.style.display = he("display", i)))
                      } catch (v) {
                        Es(e, e.return, v)
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d)
                      try {
                        f.stateNode.nodeValue = c ? "" : f.memoizedProps
                      } catch (v) {
                        Es(e, e.return, v)
                      }
                  } else if (
                    ((22 !== f.tag && 23 !== f.tag) ||
                      null === f.memoizedState ||
                      f === e) &&
                    null !== f.child
                  ) {
                    ;(f.child.return = f), (f = f.child)
                    continue
                  }
                  if (f === e) break e
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === e) break e
                    d === f && (d = null), (f = f.return)
                  }
                  d === f && (d = null),
                    (f.sibling.return = f.return),
                    (f = f.sibling)
                }
              }
              break
            case 19:
              hu(t, e), gu(e), 4 & r && mu(e)
            case 21:
          }
        }
        function gu(e) {
          var t = e.flags
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (ou(n)) {
                    var r = n
                    break e
                  }
                  n = n.return
                }
                throw Error(l(160))
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode
                  32 & r.flags && (fe(a, ""), (r.flags &= -33)), su(e, iu(e), a)
                  break
                case 3:
                case 4:
                  var o = r.stateNode.containerInfo
                  uu(e, iu(e), o)
                  break
                default:
                  throw Error(l(161))
              }
            } catch (i) {
              Es(e, e.return, i)
            }
            e.flags &= -3
          }
          4096 & t && (e.flags &= -4097)
        }
        function yu(e, t, n) {
          ;(Xi = e), bu(e, t, n)
        }
        function bu(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Xi; ) {
            var a = Xi,
              l = a.child
            if (22 === a.tag && r) {
              var o = null !== a.memoizedState || Ki
              if (!o) {
                var i = a.alternate,
                  u = (null !== i && null !== i.memoizedState) || Gi
                i = Ki
                var s = Gi
                if (((Ki = o), (Gi = u) && !s))
                  for (Xi = a; null !== Xi; )
                    (u = (o = Xi).child),
                      22 === o.tag && null !== o.memoizedState
                        ? ku(a)
                        : null !== u
                        ? ((u.return = o), (Xi = u))
                        : ku(a)
                for (; null !== l; ) (Xi = l), bu(l, t, n), (l = l.sibling)
                ;(Xi = a), (Ki = i), (Gi = s)
              }
              xu(e)
            } else
              0 !== (8772 & a.subtreeFlags) && null !== l
                ? ((l.return = a), (Xi = l))
                : xu(e)
          }
        }
        function xu(e) {
          for (; null !== Xi; ) {
            var t = Xi
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Gi || ru(5, t)
                      break
                    case 1:
                      var r = t.stateNode
                      if (4 & t.flags && !Gi)
                        if (null === n) r.componentDidMount()
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : vl(t.type, n.memoizedProps)
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          )
                        }
                      var o = t.updateQueue
                      null !== o && Dl(t, o, r)
                      break
                    case 3:
                      var i = t.updateQueue
                      if (null !== i) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode
                          }
                        Dl(t, i, n)
                      }
                      break
                    case 5:
                      var u = t.stateNode
                      if (null === n && 4 & t.flags) {
                        n = u
                        var s = t.memoizedProps
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            s.autoFocus && n.focus()
                            break
                          case "img":
                            s.src && (n.src = s.src)
                        }
                      }
                      break
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate
                        if (null !== c) {
                          var d = c.memoizedState
                          if (null !== d) {
                            var f = d.dehydrated
                            null !== f && Ht(f)
                          }
                        }
                      }
                      break
                    default:
                      throw Error(l(163))
                  }
                Gi || (512 & t.flags && au(t))
              } catch (p) {
                Es(t, t.return, p)
              }
            }
            if (t === e) {
              Xi = null
              break
            }
            if (null !== (n = t.sibling)) {
              ;(n.return = t.return), (Xi = n)
              break
            }
            Xi = t.return
          }
        }
        function wu(e) {
          for (; null !== Xi; ) {
            var t = Xi
            if (t === e) {
              Xi = null
              break
            }
            var n = t.sibling
            if (null !== n) {
              ;(n.return = t.return), (Xi = n)
              break
            }
            Xi = t.return
          }
        }
        function ku(e) {
          for (; null !== Xi; ) {
            var t = Xi
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return
                  try {
                    ru(4, t)
                  } catch (u) {
                    Es(t, n, u)
                  }
                  break
                case 1:
                  var r = t.stateNode
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return
                    try {
                      r.componentDidMount()
                    } catch (u) {
                      Es(t, a, u)
                    }
                  }
                  var l = t.return
                  try {
                    au(t)
                  } catch (u) {
                    Es(t, l, u)
                  }
                  break
                case 5:
                  var o = t.return
                  try {
                    au(t)
                  } catch (u) {
                    Es(t, o, u)
                  }
              }
            } catch (u) {
              Es(t, t.return, u)
            }
            if (t === e) {
              Xi = null
              break
            }
            var i = t.sibling
            if (null !== i) {
              ;(i.return = t.return), (Xi = i)
              break
            }
            Xi = t.return
          }
        }
        var Su,
          Eu = Math.ceil,
          ju = x.ReactCurrentDispatcher,
          Nu = x.ReactCurrentOwner,
          Cu = x.ReactCurrentBatchConfig,
          Pu = 0,
          _u = null,
          Tu = null,
          Lu = 0,
          Ou = 0,
          zu = Ea(0),
          Fu = 0,
          Mu = null,
          Ru = 0,
          Iu = 0,
          Du = 0,
          Au = null,
          Bu = null,
          Uu = 0,
          Hu = 1 / 0,
          Vu = null,
          Wu = !1,
          $u = null,
          Qu = null,
          qu = !1,
          Yu = null,
          Ku = 0,
          Gu = 0,
          Ju = null,
          Xu = -1,
          Zu = 0
        function es() {
          return 0 !== (6 & Pu) ? Je() : -1 !== Xu ? Xu : (Xu = Je())
        }
        function ts(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Pu) && 0 !== Lu
            ? Lu & -Lu
            : null !== hl.transition
            ? (0 === Zu && (Zu = ht()), Zu)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Gt(e.type))
        }
        function ns(e, t, n, r) {
          if (50 < Gu) throw ((Gu = 0), (Ju = null), Error(l(185)))
          gt(e, n, r),
            (0 !== (2 & Pu) && e === _u) ||
              (e === _u && (0 === (2 & Pu) && (Iu |= n), 4 === Fu && is(e, Lu)),
              rs(e, r),
              1 === n &&
                0 === Pu &&
                0 === (1 & t.mode) &&
                ((Hu = Je() + 500), Aa && Ha()))
        }
        function rs(e, t) {
          var n = e.callbackNode
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                l = e.pendingLanes;
              0 < l;

            ) {
              var o = 31 - ot(l),
                i = 1 << o,
                u = a[o]
              ;-1 === u
                ? (0 !== (i & n) && 0 === (i & r)) || (a[o] = pt(i, t))
                : u <= t && (e.expiredLanes |= i),
                (l &= ~i)
            }
          })(e, t)
          var r = ft(e, e === _u ? Lu : 0)
          if (0 === r)
            null !== n && Ye(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0)
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ye(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    ;(Aa = !0), Ua(e)
                  })(us.bind(null, e))
                : Ua(us.bind(null, e)),
                oa(function () {
                  0 === (6 & Pu) && Ha()
                }),
                (n = null)
            else {
              switch (xt(r)) {
                case 1:
                  n = Ze
                  break
                case 4:
                  n = et
                  break
                case 16:
                default:
                  n = tt
                  break
                case 536870912:
                  n = rt
              }
              n = _s(n, as.bind(null, e))
            }
            ;(e.callbackPriority = t), (e.callbackNode = n)
          }
        }
        function as(e, t) {
          if (((Xu = -1), (Zu = 0), 0 !== (6 & Pu))) throw Error(l(327))
          var n = e.callbackNode
          if (ks() && e.callbackNode !== n) return null
          var r = ft(e, e === _u ? Lu : 0)
          if (0 === r) return null
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = vs(e, r)
          else {
            t = r
            var a = Pu
            Pu |= 2
            var o = ms()
            for (
              (_u === e && Lu === t) ||
              ((Vu = null), (Hu = Je() + 500), fs(e, t));
              ;

            )
              try {
                ys()
                break
              } catch (u) {
                ps(e, u)
              }
            wl(),
              (ju.current = o),
              (Pu = a),
              null !== Tu ? (t = 0) : ((_u = null), (Lu = 0), (t = Fu))
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = mt(e)) && ((r = a), (t = ls(e, a))),
              1 === t)
            )
              throw ((n = Mu), fs(e, 0), is(e, r), rs(e, Je()), n)
            if (6 === t) is(e, r)
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              l = a.getSnapshot
                            a = a.value
                            try {
                              if (!ir(l(), a)) return !1
                            } catch (i) {
                              return !1
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n)
                      else {
                        if (t === e) break
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0
                          t = t.return
                        }
                        ;(t.sibling.return = t.return), (t = t.sibling)
                      }
                    }
                    return !0
                  })(a) &&
                  (2 === (t = vs(e, r)) &&
                    0 !== (o = mt(e)) &&
                    ((r = o), (t = ls(e, o))),
                  1 === t))
              )
                throw ((n = Mu), fs(e, 0), is(e, r), rs(e, Je()), n)
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(l(345))
                case 2:
                case 5:
                  ws(e, Bu, Vu)
                  break
                case 3:
                  if (
                    (is(e, r),
                    (130023424 & r) === r && 10 < (t = Uu + 500 - Je()))
                  ) {
                    if (0 !== ft(e, 0)) break
                    if (((a = e.suspendedLanes) & r) !== r) {
                      es(), (e.pingedLanes |= e.suspendedLanes & a)
                      break
                    }
                    e.timeoutHandle = ra(ws.bind(null, e, Bu, Vu), t)
                    break
                  }
                  ws(e, Bu, Vu)
                  break
                case 4:
                  if ((is(e, r), (4194240 & r) === r)) break
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var i = 31 - ot(r)
                    ;(o = 1 << i), (i = t[i]) > a && (a = i), (r &= ~o)
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Je() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Eu(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(ws.bind(null, e, Bu, Vu), r)
                    break
                  }
                  ws(e, Bu, Vu)
                  break
                default:
                  throw Error(l(329))
              }
            }
          }
          return rs(e, Je()), e.callbackNode === n ? as.bind(null, e) : null
        }
        function ls(e, t) {
          var n = Au
          return (
            e.current.memoizedState.isDehydrated && (fs(e, t).flags |= 256),
            2 !== (e = vs(e, t)) && ((t = Bu), (Bu = n), null !== t && os(t)),
            e
          )
        }
        function os(e) {
          null === Bu ? (Bu = e) : Bu.push.apply(Bu, e)
        }
        function is(e, t) {
          for (
            t &= ~Du,
              t &= ~Iu,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - ot(t),
              r = 1 << n
            ;(e[n] = -1), (t &= ~r)
          }
        }
        function us(e) {
          if (0 !== (6 & Pu)) throw Error(l(327))
          ks()
          var t = ft(e, 0)
          if (0 === (1 & t)) return rs(e, Je()), null
          var n = vs(e, t)
          if (0 !== e.tag && 2 === n) {
            var r = mt(e)
            0 !== r && ((t = r), (n = ls(e, r)))
          }
          if (1 === n) throw ((n = Mu), fs(e, 0), is(e, t), rs(e, Je()), n)
          if (6 === n) throw Error(l(345))
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            ws(e, Bu, Vu),
            rs(e, Je()),
            null
          )
        }
        function ss(e, t) {
          var n = Pu
          Pu |= 1
          try {
            return e(t)
          } finally {
            0 === (Pu = n) && ((Hu = Je() + 500), Aa && Ha())
          }
        }
        function cs(e) {
          null !== Yu && 0 === Yu.tag && 0 === (6 & Pu) && ks()
          var t = Pu
          Pu |= 1
          var n = Cu.transition,
            r = bt
          try {
            if (((Cu.transition = null), (bt = 1), e)) return e()
          } finally {
            ;(bt = r), (Cu.transition = n), 0 === (6 & (Pu = t)) && Ha()
          }
        }
        function ds() {
          ;(Ou = zu.current), ja(zu)
        }
        function fs(e, t) {
          ;(e.finishedWork = null), (e.finishedLanes = 0)
          var n = e.timeoutHandle
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Tu))
            for (n = Tu.return; null !== n; ) {
              var r = n
              switch ((tl(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    za()
                  break
                case 3:
                  ao(), ja(_a), ja(Pa), co()
                  break
                case 5:
                  oo(r)
                  break
                case 4:
                  ao()
                  break
                case 13:
                case 19:
                  ja(io)
                  break
                case 10:
                  kl(r.type._context)
                  break
                case 22:
                case 23:
                  ds()
              }
              n = n.return
            }
          if (
            ((_u = e),
            (Tu = e = zs(e.current, null)),
            (Lu = Ou = t),
            (Fu = 0),
            (Mu = null),
            (Du = Iu = Ru = 0),
            (Bu = Au = null),
            null !== Nl)
          ) {
            for (t = 0; t < Nl.length; t++)
              if (null !== (r = (n = Nl[t]).interleaved)) {
                n.interleaved = null
                var a = r.next,
                  l = n.pending
                if (null !== l) {
                  var o = l.next
                  ;(l.next = a), (r.next = o)
                }
                n.pending = r
              }
            Nl = null
          }
          return e
        }
        function ps(e, t) {
          for (;;) {
            var n = Tu
            try {
              if ((wl(), (fo.current = oi), yo)) {
                for (var r = ho.memoizedState; null !== r; ) {
                  var a = r.queue
                  null !== a && (a.pending = null), (r = r.next)
                }
                yo = !1
              }
              if (
                ((mo = 0),
                (go = vo = ho = null),
                (bo = !1),
                (xo = 0),
                (Nu.current = null),
                null === n || null === n.return)
              ) {
                ;(Fu = 1), (Mu = t), (Tu = null)
                break
              }
              e: {
                var o = e,
                  i = n.return,
                  u = n,
                  s = t
                if (
                  ((t = Lu),
                  (u.flags |= 32768),
                  null !== s &&
                    "object" === typeof s &&
                    "function" === typeof s.then)
                ) {
                  var c = s,
                    d = u,
                    f = d.tag
                  if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                    var p = d.alternate
                    p
                      ? ((d.updateQueue = p.updateQueue),
                        (d.memoizedState = p.memoizedState),
                        (d.lanes = p.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null))
                  }
                  var m = gi(i)
                  if (null !== m) {
                    ;(m.flags &= -257),
                      yi(m, i, u, 0, t),
                      1 & m.mode && vi(o, c, t),
                      (s = c)
                    var h = (t = m).updateQueue
                    if (null === h) {
                      var v = new Set()
                      v.add(s), (t.updateQueue = v)
                    } else h.add(s)
                    break e
                  }
                  if (0 === (1 & t)) {
                    vi(o, c, t), hs()
                    break e
                  }
                  s = Error(l(426))
                } else if (al && 1 & u.mode) {
                  var g = gi(i)
                  if (null !== g) {
                    0 === (65536 & g.flags) && (g.flags |= 256),
                      yi(g, i, u, 0, t),
                      ml(ci(s, u))
                    break e
                  }
                }
                ;(o = s = ci(s, u)),
                  4 !== Fu && (Fu = 2),
                  null === Au ? (Au = [o]) : Au.push(o),
                  (o = i)
                do {
                  switch (o.tag) {
                    case 3:
                      ;(o.flags |= 65536),
                        (t &= -t),
                        (o.lanes |= t),
                        Rl(o, mi(0, s, t))
                      break e
                    case 1:
                      u = s
                      var y = o.type,
                        b = o.stateNode
                      if (
                        0 === (128 & o.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === Qu || !Qu.has(b))))
                      ) {
                        ;(o.flags |= 65536),
                          (t &= -t),
                          (o.lanes |= t),
                          Rl(o, hi(o, u, t))
                        break e
                      }
                  }
                  o = o.return
                } while (null !== o)
              }
              xs(n)
            } catch (x) {
              ;(t = x), Tu === n && null !== n && (Tu = n = n.return)
              continue
            }
            break
          }
        }
        function ms() {
          var e = ju.current
          return (ju.current = oi), null === e ? oi : e
        }
        function hs() {
          ;(0 !== Fu && 3 !== Fu && 2 !== Fu) || (Fu = 4),
            null === _u ||
              (0 === (268435455 & Ru) && 0 === (268435455 & Iu)) ||
              is(_u, Lu)
        }
        function vs(e, t) {
          var n = Pu
          Pu |= 2
          var r = ms()
          for ((_u === e && Lu === t) || ((Vu = null), fs(e, t)); ; )
            try {
              gs()
              break
            } catch (a) {
              ps(e, a)
            }
          if ((wl(), (Pu = n), (ju.current = r), null !== Tu))
            throw Error(l(261))
          return (_u = null), (Lu = 0), Fu
        }
        function gs() {
          for (; null !== Tu; ) bs(Tu)
        }
        function ys() {
          for (; null !== Tu && !Ke(); ) bs(Tu)
        }
        function bs(e) {
          var t = Su(e.alternate, e, Ou)
          ;(e.memoizedProps = e.pendingProps),
            null === t ? xs(e) : (Tu = t),
            (Nu.current = null)
        }
        function xs(e) {
          var t = e
          do {
            var n = t.alternate
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = qi(n, t, Ou))) return void (Tu = n)
            } else {
              if (null !== (n = Yi(n, t)))
                return (n.flags &= 32767), void (Tu = n)
              if (null === e) return (Fu = 6), void (Tu = null)
              ;(e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
            }
            if (null !== (t = t.sibling)) return void (Tu = t)
            Tu = t = e
          } while (null !== t)
          0 === Fu && (Fu = 5)
        }
        function ws(e, t, n) {
          var r = bt,
            a = Cu.transition
          try {
            ;(Cu.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  ks()
                } while (null !== Yu)
                if (0 !== (6 & Pu)) throw Error(l(327))
                n = e.finishedWork
                var a = e.finishedLanes
                if (null === n) return null
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(l(177))
                ;(e.callbackNode = null), (e.callbackPriority = 0)
                var o = n.lanes | n.childLanes
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t
                    ;(e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements)
                    var r = e.eventTimes
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - ot(n),
                        l = 1 << a
                      ;(t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~l)
                    }
                  })(e, o),
                  e === _u && ((Tu = _u = null), (Lu = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    qu ||
                    ((qu = !0),
                    _s(tt, function () {
                      return ks(), null
                    })),
                  (o = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || o)
                ) {
                  ;(o = Cu.transition), (Cu.transition = null)
                  var i = bt
                  bt = 1
                  var u = Pu
                  ;(Pu |= 4),
                    (Nu.current = null),
                    (function (e, t) {
                      if (((ea = Wt), pr((e = fr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          }
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection()
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode
                              var a = r.anchorOffset,
                                o = r.focusNode
                              r = r.focusOffset
                              try {
                                n.nodeType, o.nodeType
                              } catch (w) {
                                n = null
                                break e
                              }
                              var i = 0,
                                u = -1,
                                s = -1,
                                c = 0,
                                d = 0,
                                f = e,
                                p = null
                              t: for (;;) {
                                for (
                                  var m;
                                  f !== n ||
                                    (0 !== a && 3 !== f.nodeType) ||
                                    (u = i + a),
                                    f !== o ||
                                      (0 !== r && 3 !== f.nodeType) ||
                                      (s = i + r),
                                    3 === f.nodeType &&
                                      (i += f.nodeValue.length),
                                    null !== (m = f.firstChild);

                                )
                                  (p = f), (f = m)
                                for (;;) {
                                  if (f === e) break t
                                  if (
                                    (p === n && ++c === a && (u = i),
                                    p === o && ++d === r && (s = i),
                                    null !== (m = f.nextSibling))
                                  )
                                    break
                                  p = (f = p).parentNode
                                }
                                f = m
                              }
                              n =
                                -1 === u || -1 === s
                                  ? null
                                  : { start: u, end: s }
                            } else n = null
                          }
                        n = n || { start: 0, end: 0 }
                      } else n = null
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Wt = !1,
                          Xi = t;
                        null !== Xi;

                      )
                        if (
                          ((e = (t = Xi).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Xi = e)
                        else
                          for (; null !== Xi; ) {
                            t = Xi
                            try {
                              var h = t.alternate
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break
                                  case 1:
                                    if (null !== h) {
                                      var v = h.memoizedProps,
                                        g = h.memoizedState,
                                        y = t.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? v
                                            : vl(t.type, v),
                                          g
                                        )
                                      y.__reactInternalSnapshotBeforeUpdate = b
                                    }
                                    break
                                  case 3:
                                    var x = t.stateNode.containerInfo
                                    1 === x.nodeType
                                      ? (x.textContent = "")
                                      : 9 === x.nodeType &&
                                        x.documentElement &&
                                        x.removeChild(x.documentElement)
                                    break
                                  default:
                                    throw Error(l(163))
                                }
                            } catch (w) {
                              Es(t, t.return, w)
                            }
                            if (null !== (e = t.sibling)) {
                              ;(e.return = t.return), (Xi = e)
                              break
                            }
                            Xi = t.return
                          }
                      ;(h = tu), (tu = !1)
                    })(e, n),
                    vu(n, e),
                    mr(ta),
                    (Wt = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    yu(n, e, a),
                    Ge(),
                    (Pu = u),
                    (bt = i),
                    (Cu.transition = o)
                } else e.current = n
                if (
                  (qu && ((qu = !1), (Yu = e), (Ku = a)),
                  0 === (o = e.pendingLanes) && (Qu = null),
                  (function (e) {
                    if (lt && "function" === typeof lt.onCommitFiberRoot)
                      try {
                        lt.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        )
                      } catch (t) {}
                  })(n.stateNode),
                  rs(e, Je()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    r((a = t[n]).value, {
                      componentStack: a.stack,
                      digest: a.digest,
                    })
                if (Wu) throw ((Wu = !1), (e = $u), ($u = null), e)
                0 !== (1 & Ku) && 0 !== e.tag && ks(),
                  0 !== (1 & (o = e.pendingLanes))
                    ? e === Ju
                      ? Gu++
                      : ((Gu = 0), (Ju = e))
                    : (Gu = 0),
                  Ha()
              })(e, t, n, r)
          } finally {
            ;(Cu.transition = a), (bt = r)
          }
          return null
        }
        function ks() {
          if (null !== Yu) {
            var e = xt(Ku),
              t = Cu.transition,
              n = bt
            try {
              if (((Cu.transition = null), (bt = 16 > e ? 16 : e), null === Yu))
                var r = !1
              else {
                if (((e = Yu), (Yu = null), (Ku = 0), 0 !== (6 & Pu)))
                  throw Error(l(331))
                var a = Pu
                for (Pu |= 4, Xi = e.current; null !== Xi; ) {
                  var o = Xi,
                    i = o.child
                  if (0 !== (16 & Xi.flags)) {
                    var u = o.deletions
                    if (null !== u) {
                      for (var s = 0; s < u.length; s++) {
                        var c = u[s]
                        for (Xi = c; null !== Xi; ) {
                          var d = Xi
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              nu(8, d, o)
                          }
                          var f = d.child
                          if (null !== f) (f.return = d), (Xi = f)
                          else
                            for (; null !== Xi; ) {
                              var p = (d = Xi).sibling,
                                m = d.return
                              if ((lu(d), d === c)) {
                                Xi = null
                                break
                              }
                              if (null !== p) {
                                ;(p.return = m), (Xi = p)
                                break
                              }
                              Xi = m
                            }
                        }
                      }
                      var h = o.alternate
                      if (null !== h) {
                        var v = h.child
                        if (null !== v) {
                          h.child = null
                          do {
                            var g = v.sibling
                            ;(v.sibling = null), (v = g)
                          } while (null !== v)
                        }
                      }
                      Xi = o
                    }
                  }
                  if (0 !== (2064 & o.subtreeFlags) && null !== i)
                    (i.return = o), (Xi = i)
                  else
                    e: for (; null !== Xi; ) {
                      if (0 !== (2048 & (o = Xi).flags))
                        switch (o.tag) {
                          case 0:
                          case 11:
                          case 15:
                            nu(9, o, o.return)
                        }
                      var y = o.sibling
                      if (null !== y) {
                        ;(y.return = o.return), (Xi = y)
                        break e
                      }
                      Xi = o.return
                    }
                }
                var b = e.current
                for (Xi = b; null !== Xi; ) {
                  var x = (i = Xi).child
                  if (0 !== (2064 & i.subtreeFlags) && null !== x)
                    (x.return = i), (Xi = x)
                  else
                    e: for (i = b; null !== Xi; ) {
                      if (0 !== (2048 & (u = Xi).flags))
                        try {
                          switch (u.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ru(9, u)
                          }
                        } catch (k) {
                          Es(u, u.return, k)
                        }
                      if (u === i) {
                        Xi = null
                        break e
                      }
                      var w = u.sibling
                      if (null !== w) {
                        ;(w.return = u.return), (Xi = w)
                        break e
                      }
                      Xi = u.return
                    }
                }
                if (
                  ((Pu = a),
                  Ha(),
                  lt && "function" === typeof lt.onPostCommitFiberRoot)
                )
                  try {
                    lt.onPostCommitFiberRoot(at, e)
                  } catch (k) {}
                r = !0
              }
              return r
            } finally {
              ;(bt = n), (Cu.transition = t)
            }
          }
          return !1
        }
        function Ss(e, t, n) {
          ;(e = Fl(e, (t = mi(0, (t = ci(n, t)), 1)), 1)),
            (t = es()),
            null !== e && (gt(e, 1, t), rs(e, t))
        }
        function Es(e, t, n) {
          if (3 === e.tag) Ss(e, e, n)
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Ss(t, e, n)
                break
              }
              if (1 === t.tag) {
                var r = t.stateNode
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Qu || !Qu.has(r)))
                ) {
                  ;(t = Fl(t, (e = hi(t, (e = ci(n, e)), 1)), 1)),
                    (e = es()),
                    null !== t && (gt(t, 1, e), rs(t, e))
                  break
                }
              }
              t = t.return
            }
        }
        function js(e, t, n) {
          var r = e.pingCache
          null !== r && r.delete(t),
            (t = es()),
            (e.pingedLanes |= e.suspendedLanes & n),
            _u === e &&
              (Lu & n) === n &&
              (4 === Fu ||
              (3 === Fu && (130023424 & Lu) === Lu && 500 > Je() - Uu)
                ? fs(e, 0)
                : (Du |= n)),
            rs(e, t)
        }
        function Ns(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)))
          var n = es()
          null !== (e = _l(e, t)) && (gt(e, t, n), rs(e, n))
        }
        function Cs(e) {
          var t = e.memoizedState,
            n = 0
          null !== t && (n = t.retryLane), Ns(e, n)
        }
        function Ps(e, t) {
          var n = 0
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState
              null !== a && (n = a.retryLane)
              break
            case 19:
              r = e.stateNode
              break
            default:
              throw Error(l(314))
          }
          null !== r && r.delete(t), Ns(e, n)
        }
        function _s(e, t) {
          return qe(e, t)
        }
        function Ts(e, t, n, r) {
          ;(this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null)
        }
        function Ls(e, t, n, r) {
          return new Ts(e, t, n, r)
        }
        function Os(e) {
          return !(!(e = e.prototype) || !e.isReactComponent)
        }
        function zs(e, t) {
          var n = e.alternate
          return (
            null === n
              ? (((n = Ls(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          )
        }
        function Fs(e, t, n, r, a, o) {
          var i = 2
          if (((r = e), "function" === typeof e)) Os(e) && (i = 1)
          else if ("string" === typeof e) i = 5
          else
            e: switch (e) {
              case S:
                return Ms(n.children, a, o, t)
              case E:
                ;(i = 8), (a |= 8)
                break
              case j:
                return (
                  ((e = Ls(12, n, t, 2 | a)).elementType = j), (e.lanes = o), e
                )
              case _:
                return ((e = Ls(13, n, t, a)).elementType = _), (e.lanes = o), e
              case T:
                return ((e = Ls(19, n, t, a)).elementType = T), (e.lanes = o), e
              case z:
                return Rs(n, a, o, t)
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case N:
                      i = 10
                      break e
                    case C:
                      i = 9
                      break e
                    case P:
                      i = 11
                      break e
                    case L:
                      i = 14
                      break e
                    case O:
                      ;(i = 16), (r = null)
                      break e
                  }
                throw Error(l(130, null == e ? e : typeof e, ""))
            }
          return (
            ((t = Ls(i, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = o),
            t
          )
        }
        function Ms(e, t, n, r) {
          return ((e = Ls(7, e, r, t)).lanes = n), e
        }
        function Rs(e, t, n, r) {
          return (
            ((e = Ls(22, e, r, t)).elementType = z),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          )
        }
        function Is(e, t, n) {
          return ((e = Ls(6, e, null, t)).lanes = n), e
        }
        function Ds(e, t, n) {
          return (
            ((t = Ls(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          )
        }
        function As(e, t, n, r, a) {
          ;(this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = vt(0)),
            (this.expirationTimes = vt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = vt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null)
        }
        function Bs(e, t, n, r, a, l, o, i, u) {
          return (
            (e = new As(e, t, n, i, u)),
            1 === t ? ((t = 1), !0 === l && (t |= 8)) : (t = 0),
            (l = Ls(3, null, null, t)),
            (e.current = l),
            (l.stateNode = e),
            (l.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Ll(l),
            e
          )
        }
        function Us(e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null
          return {
            $$typeof: k,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n,
          }
        }
        function Hs(e) {
          if (!e) return Ca
          e: {
            if (He((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(l(170))
            var t = e
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context
                  break e
                case 1:
                  if (Oa(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext
                    break e
                  }
              }
              t = t.return
            } while (null !== t)
            throw Error(l(171))
          }
          if (1 === e.tag) {
            var n = e.type
            if (Oa(n)) return Ma(e, n, t)
          }
          return t
        }
        function Vs(e, t, n, r, a, l, o, i, u) {
          return (
            ((e = Bs(n, r, !0, e, 0, l, 0, i, u)).context = Hs(null)),
            (n = e.current),
            ((l = zl((r = es()), (a = ts(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Fl(n, l, a),
            (e.current.lanes = a),
            gt(e, a, r),
            rs(e, r),
            e
          )
        }
        function Ws(e, t, n, r) {
          var a = t.current,
            l = es(),
            o = ts(a)
          return (
            (n = Hs(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = zl(l, o)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Fl(a, t, o)) && (ns(e, a, o, l), Ml(e, a, o)),
            o
          )
        }
        function $s(e) {
          return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null
        }
        function Qs(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane
            e.retryLane = 0 !== n && n < t ? n : t
          }
        }
        function qs(e, t) {
          Qs(e, t), (e = e.alternate) && Qs(e, t)
        }
        Su = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || _a.current) xi = !0
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (xi = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Ti(t), pl()
                        break
                      case 5:
                        lo(t)
                        break
                      case 1:
                        Oa(t.type) && Ra(t)
                        break
                      case 4:
                        ro(t, t.stateNode.containerInfo)
                        break
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value
                        Na(gl, r._currentValue), (r._currentValue = a)
                        break
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Na(io, 1 & io.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Ii(e, t, n)
                            : (Na(io, 1 & io.current),
                              null !== (e = Wi(e, t, n)) ? e.sibling : null)
                        Na(io, 1 & io.current)
                        break
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Hi(e, t, n)
                          t.flags |= 128
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Na(io, io.current),
                          r)
                        )
                          break
                        return null
                      case 22:
                      case 23:
                        return (t.lanes = 0), ji(e, t, n)
                    }
                    return Wi(e, t, n)
                  })(e, t, n)
                )
              xi = 0 !== (131072 & e.flags)
            }
          else (xi = !1), al && 0 !== (1048576 & t.flags) && Za(t, Qa, t.index)
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type
              Vi(e, t), (e = t.pendingProps)
              var a = La(t, Pa.current)
              El(t, n), (a = Eo(null, t, r, e, a, n))
              var o = jo()
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Oa(r) ? ((o = !0), Ra(t)) : (o = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Ll(t),
                    (a.updater = Ul),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    $l(t, r, e, n),
                    (t = _i(null, t, r, !0, o, n)))
                  : ((t.tag = 0),
                    al && o && el(t),
                    wi(null, t, a, n),
                    (t = t.child)),
                t
              )
            case 16:
              r = t.elementType
              e: {
                switch (
                  (Vi(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Os(e) ? 1 : 0
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === P) return 11
                        if (e === L) return 14
                      }
                      return 2
                    })(r)),
                  (e = vl(r, e)),
                  a)
                ) {
                  case 0:
                    t = Ci(null, t, r, e, n)
                    break e
                  case 1:
                    t = Pi(null, t, r, e, n)
                    break e
                  case 11:
                    t = ki(null, t, r, e, n)
                    break e
                  case 14:
                    t = Si(null, t, r, vl(r.type, e), n)
                    break e
                }
                throw Error(l(306, r, ""))
              }
              return t
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ci(e, t, r, (a = t.elementType === r ? a : vl(r, a)), n)
              )
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Pi(e, t, r, (a = t.elementType === r ? a : vl(r, a)), n)
              )
            case 3:
              e: {
                if ((Ti(t), null === e)) throw Error(l(387))
                ;(r = t.pendingProps),
                  (a = (o = t.memoizedState).element),
                  Ol(e, t),
                  Il(t, r, null, n)
                var i = t.memoizedState
                if (((r = i.element), o.isDehydrated)) {
                  if (
                    ((o = {
                      element: r,
                      isDehydrated: !1,
                      cache: i.cache,
                      pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                      transitions: i.transitions,
                    }),
                    (t.updateQueue.baseState = o),
                    (t.memoizedState = o),
                    256 & t.flags)
                  ) {
                    t = Li(e, t, r, n, (a = ci(Error(l(423)), t)))
                    break e
                  }
                  if (r !== a) {
                    t = Li(e, t, r, n, (a = ci(Error(l(424)), t)))
                    break e
                  }
                  for (
                    rl = sa(t.stateNode.containerInfo.firstChild),
                      nl = t,
                      al = !0,
                      ll = null,
                      n = Jl(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling)
                } else {
                  if ((pl(), r === a)) {
                    t = Wi(e, t, n)
                    break e
                  }
                  wi(e, t, r, n)
                }
                t = t.child
              }
              return t
            case 5:
              return (
                lo(t),
                null === e && sl(t),
                (r = t.type),
                (a = t.pendingProps),
                (o = null !== e ? e.memoizedProps : null),
                (i = a.children),
                na(r, a)
                  ? (i = null)
                  : null !== o && na(r, o) && (t.flags |= 32),
                Ni(e, t),
                wi(e, t, i, n),
                t.child
              )
            case 6:
              return null === e && sl(t), null
            case 13:
              return Ii(e, t, n)
            case 4:
              return (
                ro(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Gl(t, null, r, n)) : wi(e, t, r, n),
                t.child
              )
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                ki(e, t, r, (a = t.elementType === r ? a : vl(r, a)), n)
              )
            case 7:
              return wi(e, t, t.pendingProps, n), t.child
            case 8:
            case 12:
              return wi(e, t, t.pendingProps.children, n), t.child
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (o = t.memoizedProps),
                  (i = a.value),
                  Na(gl, r._currentValue),
                  (r._currentValue = i),
                  null !== o)
                )
                  if (ir(o.value, i)) {
                    if (o.children === a.children && !_a.current) {
                      t = Wi(e, t, n)
                      break e
                    }
                  } else
                    for (
                      null !== (o = t.child) && (o.return = t);
                      null !== o;

                    ) {
                      var u = o.dependencies
                      if (null !== u) {
                        i = o.child
                        for (var s = u.firstContext; null !== s; ) {
                          if (s.context === r) {
                            if (1 === o.tag) {
                              ;(s = zl(-1, n & -n)).tag = 2
                              var c = o.updateQueue
                              if (null !== c) {
                                var d = (c = c.shared).pending
                                null === d
                                  ? (s.next = s)
                                  : ((s.next = d.next), (d.next = s)),
                                  (c.pending = s)
                              }
                            }
                            ;(o.lanes |= n),
                              null !== (s = o.alternate) && (s.lanes |= n),
                              Sl(o.return, n, t),
                              (u.lanes |= n)
                            break
                          }
                          s = s.next
                        }
                      } else if (10 === o.tag)
                        i = o.type === t.type ? null : o.child
                      else if (18 === o.tag) {
                        if (null === (i = o.return)) throw Error(l(341))
                        ;(i.lanes |= n),
                          null !== (u = i.alternate) && (u.lanes |= n),
                          Sl(i, n, t),
                          (i = o.sibling)
                      } else i = o.child
                      if (null !== i) i.return = o
                      else
                        for (i = o; null !== i; ) {
                          if (i === t) {
                            i = null
                            break
                          }
                          if (null !== (o = i.sibling)) {
                            ;(o.return = i.return), (i = o)
                            break
                          }
                          i = i.return
                        }
                      o = i
                    }
                wi(e, t, a.children, n), (t = t.child)
              }
              return t
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                El(t, n),
                (r = r((a = jl(a)))),
                (t.flags |= 1),
                wi(e, t, r, n),
                t.child
              )
            case 14:
              return (
                (a = vl((r = t.type), t.pendingProps)),
                Si(e, t, r, (a = vl(r.type, a)), n)
              )
            case 15:
              return Ei(e, t, t.type, t.pendingProps, n)
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : vl(r, a)),
                Vi(e, t),
                (t.tag = 1),
                Oa(r) ? ((e = !0), Ra(t)) : (e = !1),
                El(t, n),
                Vl(t, r, a),
                $l(t, r, a, n),
                _i(null, t, r, !0, e, n)
              )
            case 19:
              return Hi(e, t, n)
            case 22:
              return ji(e, t, n)
          }
          throw Error(l(156, t.tag))
        }
        var Ys =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e)
              }
        function Ks(e) {
          this._internalRoot = e
        }
        function Gs(e) {
          this._internalRoot = e
        }
        function Js(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          )
        }
        function Xs(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          )
        }
        function Zs() {}
        function ec(e, t, n, r, a) {
          var l = n._reactRootContainer
          if (l) {
            var o = l
            if ("function" === typeof a) {
              var i = a
              a = function () {
                var e = $s(o)
                i.call(e)
              }
            }
            Ws(t, o, e, a)
          } else
            o = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var l = r
                  r = function () {
                    var e = $s(o)
                    l.call(e)
                  }
                }
                var o = Vs(t, r, e, 0, null, !1, 0, "", Zs)
                return (
                  (e._reactRootContainer = o),
                  (e[ma] = o.current),
                  Hr(8 === e.nodeType ? e.parentNode : e),
                  cs(),
                  o
                )
              }
              for (; (a = e.lastChild); ) e.removeChild(a)
              if ("function" === typeof r) {
                var i = r
                r = function () {
                  var e = $s(u)
                  i.call(e)
                }
              }
              var u = Bs(e, 0, !1, null, 0, !1, 0, "", Zs)
              return (
                (e._reactRootContainer = u),
                (e[ma] = u.current),
                Hr(8 === e.nodeType ? e.parentNode : e),
                cs(function () {
                  Ws(t, u, n, r)
                }),
                u
              )
            })(n, t, e, a, r)
          return $s(o)
        }
        ;(Gs.prototype.render = Ks.prototype.render =
          function (e) {
            var t = this._internalRoot
            if (null === t) throw Error(l(409))
            Ws(e, t, null, null)
          }),
          (Gs.prototype.unmount = Ks.prototype.unmount =
            function () {
              var e = this._internalRoot
              if (null !== e) {
                this._internalRoot = null
                var t = e.containerInfo
                cs(function () {
                  Ws(null, e, null, null)
                }),
                  (t[ma] = null)
              }
            }),
          (Gs.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Et()
              e = { blockedOn: null, target: e, priority: t }
              for (
                var n = 0;
                n < zt.length && 0 !== t && t < zt[n].priority;
                n++
              );
              zt.splice(n, 0, e), 0 === n && It(e)
            }
          }),
          (wt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode
                if (t.current.memoizedState.isDehydrated) {
                  var n = dt(t.pendingLanes)
                  0 !== n &&
                    (yt(t, 1 | n),
                    rs(t, Je()),
                    0 === (6 & Pu) && ((Hu = Je() + 500), Ha()))
                }
                break
              case 13:
                cs(function () {
                  var t = _l(e, 1)
                  if (null !== t) {
                    var n = es()
                    ns(t, e, 1, n)
                  }
                }),
                  qs(e, 1)
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = _l(e, 134217728)
              if (null !== t) ns(t, e, 134217728, es())
              qs(e, 134217728)
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = ts(e),
                n = _l(e, t)
              if (null !== n) ns(n, e, t, es())
              qs(e, t)
            }
          }),
          (Et = function () {
            return bt
          }),
          (jt = function (e, t) {
            var n = bt
            try {
              return (bt = e), t()
            } finally {
              bt = n
            }
          }),
          (ke = function (e, t, n) {
            switch (t) {
              case "input":
                if ((X(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t]
                    if (r !== e && r.form === e.form) {
                      var a = wa(r)
                      if (!a) throw Error(l(90))
                      q(r), X(r, a)
                    }
                  }
                }
                break
              case "textarea":
                le(e, n)
                break
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1)
            }
          }),
          (Pe = ss),
          (_e = cs)
        var tc = {
            usingClientEntryPoint: !1,
            Events: [ba, xa, wa, Ne, Ce, ss],
          },
          nc = {
            findFiberByHostInstance: ya,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: x.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = $e(e)) ? null : e.stateNode
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          }
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__
          if (!ac.isDisabled && ac.supportsFiber)
            try {
              ;(at = ac.inject(rc)), (lt = ac)
            } catch (ce) {}
        }
        ;(t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null
            if (!Js(t)) throw Error(l(200))
            return Us(e, t, null, n)
          }),
          (t.createRoot = function (e, t) {
            if (!Js(e)) throw Error(l(299))
            var n = !1,
              r = "",
              a = Ys
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Bs(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ma] = t.current),
              Hr(8 === e.nodeType ? e.parentNode : e),
              new Ks(t)
            )
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null
            if (1 === e.nodeType) return e
            var t = e._reactInternals
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(l(188))
              throw ((e = Object.keys(e).join(",")), Error(l(268, e)))
            }
            return (e = null === (e = $e(t)) ? null : e.stateNode)
          }),
          (t.flushSync = function (e) {
            return cs(e)
          }),
          (t.hydrate = function (e, t, n) {
            if (!Xs(t)) throw Error(l(200))
            return ec(null, e, t, !0, n)
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Js(e)) throw Error(l(405))
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              o = "",
              i = Ys
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (i = n.onRecoverableError)),
              (t = Vs(t, null, e, 1, null != n ? n : null, a, 0, o, i)),
              (e[ma] = t.current),
              Hr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a)
            return new Gs(t)
          }),
          (t.render = function (e, t, n) {
            if (!Xs(t)) throw Error(l(200))
            return ec(null, e, t, !1, n)
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Xs(e)) throw Error(l(40))
            return (
              !!e._reactRootContainer &&
              (cs(function () {
                ec(null, null, e, !1, function () {
                  ;(e._reactRootContainer = null), (e[ma] = null)
                })
              }),
              !0)
            )
          }),
          (t.unstable_batchedUpdates = ss),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Xs(n)) throw Error(l(200))
            if (null == e || void 0 === e._reactInternals) throw Error(l(38))
            return ec(e, t, n, !1, r)
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608")
      },
      250: function (e, t, n) {
        var r = n(164)
        ;(t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot)
      },
      164: function (e, t, n) {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
            } catch (t) {
              console.error(t)
            }
        })(),
          (e.exports = n(463))
      },
      374: function (e, t, n) {
        var r = n(791),
          a = Symbol.for("react.element"),
          l = Symbol.for("react.fragment"),
          o = Object.prototype.hasOwnProperty,
          i =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          u = { key: !0, ref: !0, __self: !0, __source: !0 }
        function s(e, t, n) {
          var r,
            l = {},
            s = null,
            c = null
          for (r in (void 0 !== n && (s = "" + n),
          void 0 !== t.key && (s = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            o.call(t, r) && !u.hasOwnProperty(r) && (l[r] = t[r])
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === l[r] && (l[r] = t[r])
          return {
            $$typeof: a,
            type: e,
            key: s,
            ref: c,
            props: l,
            _owner: i.current,
          }
        }
        ;(t.Fragment = l), (t.jsx = s), (t.jsxs = s)
      },
      117: function (e, t) {
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          l = Symbol.for("react.strict_mode"),
          o = Symbol.for("react.profiler"),
          i = Symbol.for("react.provider"),
          u = Symbol.for("react.context"),
          s = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          p = Symbol.iterator
        var m = {
            isMounted: function () {
              return !1
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          h = Object.assign,
          v = {}
        function g(e, t, n) {
          ;(this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || m)
        }
        function y() {}
        function b(e, t, n) {
          ;(this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || m)
        }
        ;(g.prototype.isReactComponent = {}),
          (g.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              )
            this.updater.enqueueSetState(this, e, t, "setState")
          }),
          (g.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate")
          }),
          (y.prototype = g.prototype)
        var x = (b.prototype = new y())
        ;(x.constructor = b), h(x, g.prototype), (x.isPureReactComponent = !0)
        var w = Array.isArray,
          k = Object.prototype.hasOwnProperty,
          S = { current: null },
          E = { key: !0, ref: !0, __self: !0, __source: !0 }
        function j(e, t, r) {
          var a,
            l = {},
            o = null,
            i = null
          if (null != t)
            for (a in (void 0 !== t.ref && (i = t.ref),
            void 0 !== t.key && (o = "" + t.key),
            t))
              k.call(t, a) && !E.hasOwnProperty(a) && (l[a] = t[a])
          var u = arguments.length - 2
          if (1 === u) l.children = r
          else if (1 < u) {
            for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2]
            l.children = s
          }
          if (e && e.defaultProps)
            for (a in (u = e.defaultProps)) void 0 === l[a] && (l[a] = u[a])
          return {
            $$typeof: n,
            type: e,
            key: o,
            ref: i,
            props: l,
            _owner: S.current,
          }
        }
        function N(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n
        }
        var C = /\/+/g
        function P(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" }
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e]
                  })
                )
              })("" + e.key)
            : t.toString(36)
        }
        function _(e, t, a, l, o) {
          var i = typeof e
          ;("undefined" !== i && "boolean" !== i) || (e = null)
          var u = !1
          if (null === e) u = !0
          else
            switch (i) {
              case "string":
              case "number":
                u = !0
                break
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    u = !0
                }
            }
          if (u)
            return (
              (o = o((u = e))),
              (e = "" === l ? "." + P(u, 0) : l),
              w(o)
                ? ((a = ""),
                  null != e && (a = e.replace(C, "$&/") + "/"),
                  _(o, t, a, "", function (e) {
                    return e
                  }))
                : null != o &&
                  (N(o) &&
                    (o = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      }
                    })(
                      o,
                      a +
                        (!o.key || (u && u.key === o.key)
                          ? ""
                          : ("" + o.key).replace(C, "$&/") + "/") +
                        e
                    )),
                  t.push(o)),
              1
            )
          if (((u = 0), (l = "" === l ? "." : l + ":"), w(e)))
            for (var s = 0; s < e.length; s++) {
              var c = l + P((i = e[s]), s)
              u += _(i, t, a, c, o)
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), s = 0; !(i = e.next()).done; )
              u += _((i = i.value), t, a, (c = l + P(i, s++)), o)
          else if ("object" === i)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            )
          return u
        }
        function T(e, t, n) {
          if (null == e) return e
          var r = [],
            a = 0
          return (
            _(e, r, "", "", function (e) {
              return t.call(n, e, a++)
            }),
            r
          )
        }
        function L(e) {
          if (-1 === e._status) {
            var t = e._result
            ;(t = t()).then(
              function (t) {
                ;(0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t))
              },
              function (t) {
                ;(0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t))
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t))
          }
          if (1 === e._status) return e._result.default
          throw e._result
        }
        var O = { current: null },
          z = { transition: null },
          F = {
            ReactCurrentDispatcher: O,
            ReactCurrentBatchConfig: z,
            ReactCurrentOwner: S,
          }
        ;(t.Children = {
          map: T,
          forEach: function (e, t, n) {
            T(
              e,
              function () {
                t.apply(this, arguments)
              },
              n
            )
          },
          count: function (e) {
            var t = 0
            return (
              T(e, function () {
                t++
              }),
              t
            )
          },
          toArray: function (e) {
            return (
              T(e, function (e) {
                return e
              }) || []
            )
          },
          only: function (e) {
            if (!N(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              )
            return e
          },
        }),
          (t.Component = g),
          (t.Fragment = a),
          (t.Profiler = o),
          (t.PureComponent = b),
          (t.StrictMode = l),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = F),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              )
            var a = h({}, e.props),
              l = e.key,
              o = e.ref,
              i = e._owner
            if (null != t) {
              if (
                (void 0 !== t.ref && ((o = t.ref), (i = S.current)),
                void 0 !== t.key && (l = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var u = e.type.defaultProps
              for (s in t)
                k.call(t, s) &&
                  !E.hasOwnProperty(s) &&
                  (a[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s])
            }
            var s = arguments.length - 2
            if (1 === s) a.children = r
            else if (1 < s) {
              u = Array(s)
              for (var c = 0; c < s; c++) u[c] = arguments[c + 2]
              a.children = u
            }
            return {
              $$typeof: n,
              type: e.type,
              key: l,
              ref: o,
              props: a,
              _owner: i,
            }
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: u,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: i, _context: e }),
              (e.Consumer = e)
            )
          }),
          (t.createElement = j),
          (t.createFactory = function (e) {
            var t = j.bind(null, e)
            return (t.type = e), t
          }),
          (t.createRef = function () {
            return { current: null }
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: s, render: e }
          }),
          (t.isValidElement = N),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: L,
            }
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t }
          }),
          (t.startTransition = function (e) {
            var t = z.transition
            z.transition = {}
            try {
              e()
            } finally {
              z.transition = t
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            )
          }),
          (t.useCallback = function (e, t) {
            return O.current.useCallback(e, t)
          }),
          (t.useContext = function (e) {
            return O.current.useContext(e)
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return O.current.useDeferredValue(e)
          }),
          (t.useEffect = function (e, t) {
            return O.current.useEffect(e, t)
          }),
          (t.useId = function () {
            return O.current.useId()
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return O.current.useImperativeHandle(e, t, n)
          }),
          (t.useInsertionEffect = function (e, t) {
            return O.current.useInsertionEffect(e, t)
          }),
          (t.useLayoutEffect = function (e, t) {
            return O.current.useLayoutEffect(e, t)
          }),
          (t.useMemo = function (e, t) {
            return O.current.useMemo(e, t)
          }),
          (t.useReducer = function (e, t, n) {
            return O.current.useReducer(e, t, n)
          }),
          (t.useRef = function (e) {
            return O.current.useRef(e)
          }),
          (t.useState = function (e) {
            return O.current.useState(e)
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return O.current.useSyncExternalStore(e, t, n)
          }),
          (t.useTransition = function () {
            return O.current.useTransition()
          }),
          (t.version = "18.2.0")
      },
      791: function (e, t, n) {
        e.exports = n(117)
      },
      184: function (e, t, n) {
        e.exports = n(374)
      },
      813: function (e, t) {
        function n(e, t) {
          var n = e.length
          e.push(t)
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r]
            if (!(0 < l(a, t))) break e
            ;(e[r] = t), (e[n] = a), (n = r)
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0]
        }
        function a(e) {
          if (0 === e.length) return null
          var t = e[0],
            n = e.pop()
          if (n !== t) {
            e[0] = n
            e: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
              var i = 2 * (r + 1) - 1,
                u = e[i],
                s = i + 1,
                c = e[s]
              if (0 > l(u, n))
                s < a && 0 > l(c, u)
                  ? ((e[r] = c), (e[s] = n), (r = s))
                  : ((e[r] = u), (e[i] = n), (r = i))
              else {
                if (!(s < a && 0 > l(c, n))) break e
                ;(e[r] = c), (e[s] = n), (r = s)
              }
            }
          }
          return t
        }
        function l(e, t) {
          var n = e.sortIndex - t.sortIndex
          return 0 !== n ? n : e.id - t.id
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var o = performance
          t.unstable_now = function () {
            return o.now()
          }
        } else {
          var i = Date,
            u = i.now()
          t.unstable_now = function () {
            return i.now() - u
          }
        }
        var s = [],
          c = [],
          d = 1,
          f = null,
          p = 3,
          m = !1,
          h = !1,
          v = !1,
          g = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null
        function x(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c)
            else {
              if (!(t.startTime <= e)) break
              a(c), (t.sortIndex = t.expirationTime), n(s, t)
            }
            t = r(c)
          }
        }
        function w(e) {
          if (((v = !1), x(e), !h))
            if (null !== r(s)) (h = !0), z(k)
            else {
              var t = r(c)
              null !== t && F(w, t.startTime - e)
            }
        }
        function k(e, n) {
          ;(h = !1), v && ((v = !1), y(N), (N = -1)), (m = !0)
          var l = p
          try {
            for (
              x(n), f = r(s);
              null !== f && (!(f.expirationTime > n) || (e && !_()));

            ) {
              var o = f.callback
              if ("function" === typeof o) {
                ;(f.callback = null), (p = f.priorityLevel)
                var i = o(f.expirationTime <= n)
                ;(n = t.unstable_now()),
                  "function" === typeof i
                    ? (f.callback = i)
                    : f === r(s) && a(s),
                  x(n)
              } else a(s)
              f = r(s)
            }
            if (null !== f) var u = !0
            else {
              var d = r(c)
              null !== d && F(w, d.startTime - n), (u = !1)
            }
            return u
          } finally {
            ;(f = null), (p = l), (m = !1)
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling)
        var S,
          E = !1,
          j = null,
          N = -1,
          C = 5,
          P = -1
        function _() {
          return !(t.unstable_now() - P < C)
        }
        function T() {
          if (null !== j) {
            var e = t.unstable_now()
            P = e
            var n = !0
            try {
              n = j(!0, e)
            } finally {
              n ? S() : ((E = !1), (j = null))
            }
          } else E = !1
        }
        if ("function" === typeof b)
          S = function () {
            b(T)
          }
        else if ("undefined" !== typeof MessageChannel) {
          var L = new MessageChannel(),
            O = L.port2
          ;(L.port1.onmessage = T),
            (S = function () {
              O.postMessage(null)
            })
        } else
          S = function () {
            g(T, 0)
          }
        function z(e) {
          ;(j = e), E || ((E = !0), S())
        }
        function F(e, n) {
          N = g(function () {
            e(t.unstable_now())
          }, n)
        }
        ;(t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null
          }),
          (t.unstable_continueExecution = function () {
            h || m || ((h = !0), z(k))
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (C = 0 < e ? Math.floor(1e3 / e) : 5)
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(s)
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3
                break
              default:
                t = p
            }
            var n = p
            p = t
            try {
              return e()
            } finally {
              p = n
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break
              default:
                e = 3
            }
            var n = p
            p = e
            try {
              return t()
            } finally {
              p = n
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, l) {
            var o = t.unstable_now()
            switch (
              ("object" === typeof l && null !== l
                ? (l = "number" === typeof (l = l.delay) && 0 < l ? o + l : o)
                : (l = o),
              e)
            ) {
              case 1:
                var i = -1
                break
              case 2:
                i = 250
                break
              case 5:
                i = 1073741823
                break
              case 4:
                i = 1e4
                break
              default:
                i = 5e3
            }
            return (
              (e = {
                id: d++,
                callback: a,
                priorityLevel: e,
                startTime: l,
                expirationTime: (i = l + i),
                sortIndex: -1,
              }),
              l > o
                ? ((e.sortIndex = l),
                  n(c, e),
                  null === r(s) &&
                    e === r(c) &&
                    (v ? (y(N), (N = -1)) : (v = !0), F(w, l - o)))
                : ((e.sortIndex = i), n(s, e), h || m || ((h = !0), z(k))),
              e
            )
          }),
          (t.unstable_shouldYield = _),
          (t.unstable_wrapCallback = function (e) {
            var t = p
            return function () {
              var n = p
              p = t
              try {
                return e.apply(this, arguments)
              } finally {
                p = n
              }
            }
          })
      },
      296: function (e, t, n) {
        e.exports = n(813)
      },
    },
    t = {}
  function n(r) {
    var a = t[r]
    if (void 0 !== a) return a.exports
    var l = (t[r] = { exports: {} })
    return e[r](l, l.exports, n), l.exports
  }
  ;(n.m = e),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] })
    }),
    (n.f = {}),
    (n.e = function (e) {
      return Promise.all(
        Object.keys(n.f).reduce(function (t, r) {
          return n.f[r](e, t), t
        }, [])
      )
    }),
    (n.u = function (e) {
      return "static/js/" + e + ".1ed0c42c.chunk.js"
    }),
    (n.miniCssF = function (e) {}),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (function () {
      var e = {},
        t = "portfolio:"
      n.l = function (r, a, l, o) {
        if (e[r]) e[r].push(a)
        else {
          var i, u
          if (void 0 !== l)
            for (
              var s = document.getElementsByTagName("script"), c = 0;
              c < s.length;
              c++
            ) {
              var d = s[c]
              if (
                d.getAttribute("src") == r ||
                d.getAttribute("data-webpack") == t + l
              ) {
                i = d
                break
              }
            }
          i ||
            ((u = !0),
            ((i = document.createElement("script")).charset = "utf-8"),
            (i.timeout = 120),
            n.nc && i.setAttribute("nonce", n.nc),
            i.setAttribute("data-webpack", t + l),
            (i.src = r)),
            (e[r] = [a])
          var f = function (t, n) {
              ;(i.onerror = i.onload = null), clearTimeout(p)
              var a = e[r]
              if (
                (delete e[r],
                i.parentNode && i.parentNode.removeChild(i),
                a &&
                  a.forEach(function (e) {
                    return e(n)
                  }),
                t)
              )
                return t(n)
            },
            p = setTimeout(
              f.bind(null, void 0, { type: "timeout", target: i }),
              12e4
            )
          ;(i.onerror = f.bind(null, i.onerror)),
            (i.onload = f.bind(null, i.onload)),
            u && document.head.appendChild(i)
        }
      }
    })(),
    (n.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 })
    }),
    (n.p = "/let-me-introduce/"),
    (function () {
      var e = { 179: 0 }
      n.f.j = function (t, r) {
        var a = n.o(e, t) ? e[t] : void 0
        if (0 !== a)
          if (a) r.push(a[2])
          else {
            var l = new Promise(function (n, r) {
              a = e[t] = [n, r]
            })
            r.push((a[2] = l))
            var o = n.p + n.u(t),
              i = new Error()
            n.l(
              o,
              function (r) {
                if (n.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var l = r && ("load" === r.type ? "missing" : r.type),
                    o = r && r.target && r.target.src
                  ;(i.message =
                    "Loading chunk " + t + " failed.\n(" + l + ": " + o + ")"),
                    (i.name = "ChunkLoadError"),
                    (i.type = l),
                    (i.request = o),
                    a[1](i)
                }
              },
              "chunk-" + t,
              t
            )
          }
      }
      var t = function (t, r) {
          var a,
            l,
            o = r[0],
            i = r[1],
            u = r[2],
            s = 0
          if (
            o.some(function (t) {
              return 0 !== e[t]
            })
          ) {
            for (a in i) n.o(i, a) && (n.m[a] = i[a])
            if (u) u(n)
          }
          for (t && t(r); s < o.length; s++)
            (l = o[s]), n.o(e, l) && e[l] && e[l][0](), (e[l] = 0)
        },
        r = (self.webpackChunkportfolio = self.webpackChunkportfolio || [])
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)))
    })(),
    (function () {
      var e = n(791),
        t = n(250)
      function r(e, t) {
        ;(null == t || t > e.length) && (t = e.length)
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
        return r
      }
      function a(e, t) {
        if (e) {
          if ("string" === typeof e) return r(e, t)
          var n = Object.prototype.toString.call(e).slice(8, -1)
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? r(e, t)
              : void 0
          )
        }
      }
      function l(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"]
            if (null != n) {
              var r,
                a,
                l = [],
                o = !0,
                i = !1
              try {
                for (
                  n = n.call(e);
                  !(o = (r = n.next()).done) &&
                  (l.push(r.value), !t || l.length !== t);
                  o = !0
                );
              } catch (u) {
                ;(i = !0), (a = u)
              } finally {
                try {
                  o || null == n.return || n.return()
                } finally {
                  if (i) throw a
                }
              }
              return l
            }
          })(e, t) ||
          a(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            )
          })()
        )
      }
      var o = n(184),
        i = (0, e.createContext)(),
        u = function (t) {
          var n = t.children,
            r = l((0, e.useState)("about"), 2),
            a = r[0],
            u = r[1],
            s = l(
              (0, e.useState)({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                message: "",
              }),
              2
            ),
            c = s[0],
            d = s[1],
            f = l((0, e.useState)(!1), 2),
            p = f[0],
            m = f[1]
          return (0, o.jsx)(i.Provider, {
            value: {
              currentPage: a,
              toSend: c,
              submit: p,
              setCurrentPage: u,
              setToSend: d,
              setSubmit: m,
            },
            children: n,
          })
        },
        s = i
      function c(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return r(e)
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e)
          })(e) ||
          a(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            )
          })()
        )
      }
      function d(e, t) {
        if (null == e) return {}
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {}
            var n,
              r,
              a = {},
              l = Object.keys(e)
            for (r = 0; r < l.length; r++)
              (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n])
            return a
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e)
          for (r = 0; r < l.length; r++)
            (n = l[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]))
        }
        return a
      }
      function f(e, t) {
        var n =
          ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"]
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = a(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            n && (e = n)
            var r = 0,
              l = function () {}
            return {
              s: l,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] }
              },
              e: function (e) {
                throw e
              },
              f: l,
            }
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          )
        }
        var o,
          i = !0,
          u = !1
        return {
          s: function () {
            n = n.call(e)
          },
          n: function () {
            var e = n.next()
            return (i = e.done), e
          },
          e: function (e) {
            ;(u = !0), (o = e)
          },
          f: function () {
            try {
              i || null == n.return || n.return()
            } finally {
              if (u) throw o
            }
          },
        }
      }
      function p(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        )
      }
      function m(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? m(Object(n), !0).forEach(function (t) {
                p(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : m(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                )
              })
        }
        return e
      }
      function v(e, t) {
        if (e in t) {
          for (
            var n = t[e],
              r = arguments.length,
              a = new Array(r > 2 ? r - 2 : 0),
              l = 2;
            l < r;
            l++
          )
            a[l - 2] = arguments[l]
          return "function" == typeof n ? n.apply(void 0, a) : n
        }
        var o = new Error(
          'Tried to handle "'
            .concat(
              e,
              '" but there is no handler defined. Only defined handlers are: '
            )
            .concat(
              Object.keys(t)
                .map(function (e) {
                  return '"'.concat(e, '"')
                })
                .join(", "),
              "."
            )
        )
        throw (Error.captureStackTrace && Error.captureStackTrace(o, v), o)
      }
      var g,
        y = ["static"],
        b = ["unmount"],
        x = ["as", "children", "refName"],
        w =
          (((g = w || {})[(g.None = 0)] = "None"),
          (g[(g.RenderStrategy = 1)] = "RenderStrategy"),
          (g[(g.Static = 2)] = "Static"),
          g),
        k = (function (e) {
          return (
            (e[(e.Unmount = 0)] = "Unmount"), (e[(e.Hidden = 1)] = "Hidden"), e
          )
        })(k || {})
      function S(e) {
        var t = e.ourProps,
          n = e.theirProps,
          r = e.slot,
          a = e.defaultTag,
          l = e.features,
          o = e.visible,
          i = void 0 === o || o,
          u = e.name,
          s = j(n, t)
        if (i) return E(s, r, a, u)
        var c = null != l ? l : 0
        if (2 & c) {
          var f = s.static,
            m = void 0 !== f && f,
            g = d(s, y)
          if (m) return E(g, r, a, u)
        }
        if (1 & c) {
          var x,
            w = s.unmount,
            k = void 0 === w || w,
            S = d(s, b)
          return v(
            k ? 0 : 1,
            (p((x = {}), 0, function () {
              return null
            }),
            p(x, 1, function () {
              return E(
                h(h({}, S), {}, { hidden: !0, style: { display: "none" } }),
                r,
                a,
                u
              )
            }),
            x)
          )
        }
        return E(s, r, a, u)
      }
      function E(t) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = arguments.length > 2 ? arguments[2] : void 0,
          a = arguments.length > 3 ? arguments[3] : void 0,
          l = P(t, ["unmount", "static"]),
          o = l.as,
          i = void 0 === o ? r : o,
          u = l.children,
          s = l.refName,
          c = void 0 === s ? "ref" : s,
          f = d(l, x),
          m = void 0 !== t.ref ? p({}, c, t.ref) : {},
          h = "function" == typeof u ? u(n) : u
        f.className &&
          "function" == typeof f.className &&
          (f.className = f.className(n))
        var v = {}
        if (i === e.Fragment && Object.keys(C(f)).length > 0) {
          if (!(0, e.isValidElement)(h) || (Array.isArray(h) && h.length > 1))
            throw new Error(
              [
                'Passing props on "Fragment"!',
                "",
                "The current component <".concat(
                  a,
                  ' /> is rendering a "Fragment".'
                ),
                "However we need to passthrough the following props:",
                Object.keys(f)
                  .map(function (e) {
                    return "  - ".concat(e)
                  })
                  .join("\n"),
                "",
                "You can apply a few solutions:",
                [
                  'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
                  "Render a single element as the child so that we can forward the props onto that element.",
                ]
                  .map(function (e) {
                    return "  - ".concat(e)
                  })
                  .join("\n"),
              ].join("\n")
            )
          return (0, e.cloneElement)(
            h,
            Object.assign({}, j(h.props, C(P(f, ["ref"]))), v, m)
          )
        }
        return (0, e.createElement)(
          i,
          Object.assign(
            {},
            P(f, ["ref"]),
            i !== e.Fragment && m,
            i !== e.Fragment && v
          ),
          h
        )
      }
      function j() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n]
        if (0 === t.length) return {}
        if (1 === t.length) return t[0]
        for (var r = {}, a = {}, l = 0, o = t; l < o.length; l++) {
          var i = o[l]
          for (var u in i)
            u.startsWith("on") && "function" == typeof i[u]
              ? (null != a[u] || (a[u] = []), a[u].push(i[u]))
              : (r[u] = i[u])
        }
        if (r.disabled || r["aria-disabled"])
          return Object.assign(
            r,
            Object.fromEntries(
              Object.keys(a).map(function (e) {
                return [e, void 0]
              })
            )
          )
        var s = function (e) {
          Object.assign(
            r,
            p({}, e, function (t) {
              for (
                var n = a[e],
                  r = arguments.length,
                  l = new Array(r > 1 ? r - 1 : 0),
                  o = 1;
                o < r;
                o++
              )
                l[o - 1] = arguments[o]
              var i,
                u = f(n)
              try {
                for (u.s(); !(i = u.n()).done; ) {
                  var s = i.value
                  if (t.defaultPrevented) return
                  s.apply(void 0, [t].concat(l))
                }
              } catch (c) {
                u.e(c)
              } finally {
                u.f()
              }
            })
          )
        }
        for (var c in a) s(c)
        return r
      }
      function N(t) {
        var n
        return Object.assign((0, e.forwardRef)(t), {
          displayName: null != (n = t.displayName) ? n : t.name,
        })
      }
      function C(e) {
        var t = Object.assign({}, e)
        for (var n in t) void 0 === t[n] && delete t[n]
        return t
      }
      function P(e) {
        var t,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          r = Object.assign({}, e),
          a = f(n)
        try {
          for (a.s(); !(t = a.n()).done; ) {
            var l = t.value
            l in r && delete r[l]
          }
        } catch (o) {
          a.e(o)
        } finally {
          a.f()
        }
        return r
      }
      var _ = "undefined" != typeof window ? e.useLayoutEffect : e.useEffect
      function T(t) {
        var n = (0, e.useRef)(t)
        return (
          _(
            function () {
              n.current = t
            },
            [t]
          ),
          n
        )
      }
      var L = function (t) {
          var n = T(t)
          return e.useCallback(
            function () {
              return n.current.apply(n, arguments)
            },
            [n]
          )
        },
        O = Symbol()
      function z(e) {
        var t =
          !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
        return Object.assign(e, p({}, O, t))
      }
      function F() {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
          n[r] = arguments[r]
        var a = (0, e.useRef)(n)
        ;(0, e.useEffect)(
          function () {
            a.current = n
          },
          [n]
        )
        var l = L(function (e) {
          var t,
            n = f(a.current)
          try {
            for (n.s(); !(t = n.n()).done; ) {
              var r = t.value
              null != r && ("function" == typeof r ? r(e) : (r.current = e))
            }
          } catch (l) {
            n.e(l)
          } finally {
            n.f()
          }
        })
        return n.every(function (e) {
          return null == e || (null == e ? void 0 : e[O])
        })
          ? void 0
          : l
      }
      var M,
        R = { serverHandoffComplete: !1 }
      function I() {
        var t = l((0, e.useState)(R.serverHandoffComplete), 2),
          n = t[0],
          r = t[1]
        return (
          (0, e.useEffect)(
            function () {
              !0 !== n && r(!0)
            },
            [n]
          ),
          (0, e.useEffect)(function () {
            !1 === R.serverHandoffComplete && (R.serverHandoffComplete = !0)
          }, []),
          n
        )
      }
      var D = 0
      function A() {
        return ++D
      }
      var B =
          null != (M = e.useId)
            ? M
            : function () {
                var t = I(),
                  n = l(e.useState(t ? A : null), 2),
                  r = n[0],
                  a = n[1]
                return (
                  _(
                    function () {
                      null === r && a(A())
                    },
                    [r]
                  ),
                  null != r ? "" + r : void 0
                )
              },
        U = (function (e) {
          return (
            (e.Space = " "),
            (e.Enter = "Enter"),
            (e.Escape = "Escape"),
            (e.Backspace = "Backspace"),
            (e.Delete = "Delete"),
            (e.ArrowLeft = "ArrowLeft"),
            (e.ArrowUp = "ArrowUp"),
            (e.ArrowRight = "ArrowRight"),
            (e.ArrowDown = "ArrowDown"),
            (e.Home = "Home"),
            (e.End = "End"),
            (e.PageUp = "PageUp"),
            (e.PageDown = "PageDown"),
            (e.Tab = "Tab"),
            e
          )
        })(U || {})
      function H(e) {
        for (
          var t = e.parentElement, n = null;
          t && !(t instanceof HTMLFieldSetElement);

        )
          t instanceof HTMLLegendElement && (n = t), (t = t.parentElement)
        var r = "" === (null == t ? void 0 : t.getAttribute("disabled"))
        return (
          (!r ||
            !(function (e) {
              if (!e) return !1
              for (var t = e.previousElementSibling; null !== t; ) {
                if (t instanceof HTMLLegendElement) return !1
                t = t.previousElementSibling
              }
              return !0
            })(n)) &&
          r
        )
      }
      function V(e) {
        return "undefined" == typeof window
          ? null
          : e instanceof Node
          ? e.ownerDocument
          : null != e &&
            e.hasOwnProperty("current") &&
            e.current instanceof Node
          ? e.current.ownerDocument
          : document
      }
      var W,
        $ = [
          "[contentEditable=true]",
          "[tabindex]",
          "a[href]",
          "area[href]",
          "button:not([disabled])",
          "iframe",
          "input:not([disabled])",
          "select:not([disabled])",
          "textarea:not([disabled])",
        ]
          .map(function (e) {
            return "".concat(e, ":not([tabindex='-1'])")
          })
          .join(","),
        Q = (function (e) {
          return (
            (e[(e.First = 1)] = "First"),
            (e[(e.Previous = 2)] = "Previous"),
            (e[(e.Next = 4)] = "Next"),
            (e[(e.Last = 8)] = "Last"),
            (e[(e.WrapAround = 16)] = "WrapAround"),
            (e[(e.NoScroll = 32)] = "NoScroll"),
            e
          )
        })(Q || {}),
        q = (function (e) {
          return (
            (e[(e.Error = 0)] = "Error"),
            (e[(e.Overflow = 1)] = "Overflow"),
            (e[(e.Success = 2)] = "Success"),
            (e[(e.Underflow = 3)] = "Underflow"),
            e
          )
        })(q || {}),
        Y =
          (((W = Y || {})[(W.Previous = -1)] = "Previous"),
          (W[(W.Next = 1)] = "Next"),
          W)
      function K() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : document.body
        return null == e ? [] : Array.from(e.querySelectorAll($))
      }
      var G = (function (e) {
        return (e[(e.Strict = 0)] = "Strict"), (e[(e.Loose = 1)] = "Loose"), e
      })(G || {})
      function J(e) {
        var t,
          n,
          r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
        return (
          e !== (null == (n = V(e)) ? void 0 : n.body) &&
          v(
            r,
            (p((t = {}), 0, function () {
              return e.matches($)
            }),
            p(t, 1, function () {
              for (var t = e; null !== t; ) {
                if (t.matches($)) return !0
                t = t.parentElement
              }
              return !1
            }),
            t)
          )
        )
      }
      function X(e) {
        null == e || e.focus({ preventScroll: !0 })
      }
      var Z = ["textarea", "input"].join(",")
      function ee(e) {
        var t, n
        return (
          null !=
            (n =
              null == (t = null == e ? void 0 : e.matches)
                ? void 0
                : t.call(e, Z)) && n
        )
      }
      function te(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : function (e) {
                return e
              }
        return e.slice().sort(function (e, n) {
          var r = t(e),
            a = t(n)
          if (null === r || null === a) return 0
          var l = r.compareDocumentPosition(a)
          return l & Node.DOCUMENT_POSITION_FOLLOWING
            ? -1
            : l & Node.DOCUMENT_POSITION_PRECEDING
            ? 1
            : 0
        })
      }
      function ne(e, t) {
        var n,
          r =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          a = Array.isArray(e)
            ? e.length > 0
              ? e[0].ownerDocument
              : document
            : e.ownerDocument,
          l = Array.isArray(e) ? (r ? te(e) : e) : K(e),
          o = a.activeElement,
          i = (function () {
            if (5 & t) return 1
            if (10 & t) return -1
            throw new Error(
              "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
            )
          })(),
          u = (function () {
            if (1 & t) return 0
            if (2 & t) return Math.max(0, l.indexOf(o)) - 1
            if (4 & t) return Math.max(0, l.indexOf(o)) + 1
            if (8 & t) return l.length - 1
            throw new Error(
              "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
            )
          })(),
          s = 32 & t ? { preventScroll: !0 } : {},
          c = 0,
          d = l.length
        do {
          if (c >= d || c + d <= 0) return 0
          var f = u + c
          if (16 & t) f = (f + d) % d
          else {
            if (f < 0) return 3
            if (f >= d) return 1
          }
          null == (n = l[f]) || n.focus(s), (c += i)
        } while (n !== a.activeElement)
        return (
          6 & t && ee(n) && n.select(),
          n.hasAttribute("tabindex") || n.setAttribute("tabindex", "0"),
          2
        )
      }
      var re = (0, e.createContext)(null)
      re.displayName = "OpenClosedContext"
      var ae = (function (e) {
        return (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
      })(ae || {})
      function le() {
        return (0, e.useContext)(re)
      }
      function oe(t) {
        var n = t.value,
          r = t.children
        return e.createElement(re.Provider, { value: n }, r)
      }
      function ie(e) {
        var t
        if (e.type) return e.type
        var n = null != (t = e.as) ? t : "button"
        return "string" == typeof n && "button" === n.toLowerCase()
          ? "button"
          : void 0
      }
      function ue(t, n, r) {
        var a = T(n)
        ;(0, e.useEffect)(
          function () {
            function e(e) {
              a.current(e)
            }
            return (
              window.addEventListener(t, e, r),
              function () {
                return window.removeEventListener(t, e, r)
              }
            )
          },
          [t, r]
        )
      }
      function se(t, n) {
        var r =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          a = (0, e.useRef)(!1)
        function l(e, r) {
          if (a.current && !e.defaultPrevented) {
            var l = (function e(t) {
                return "function" == typeof t
                  ? e(t())
                  : Array.isArray(t) || t instanceof Set
                  ? t
                  : [t]
              })(t),
              o = r(e)
            if (null !== o && o.ownerDocument.documentElement.contains(o)) {
              var i,
                u = f(l)
              try {
                for (u.s(); !(i = u.n()).done; ) {
                  var s = i.value
                  if (null !== s) {
                    var c = s instanceof HTMLElement ? s : s.current
                    if (null != c && c.contains(o)) return
                  }
                }
              } catch (d) {
                u.e(d)
              } finally {
                u.f()
              }
              return (
                !J(o, G.Loose) && -1 !== o.tabIndex && e.preventDefault(),
                n(e, o)
              )
            }
          }
        }
        ;(0, e.useEffect)(
          function () {
            requestAnimationFrame(function () {
              a.current = r
            })
          },
          [r]
        ),
          ue(
            "click",
            function (e) {
              return l(e, function (e) {
                return e.target
              })
            },
            !0
          ),
          ue(
            "blur",
            function (e) {
              return l(e, function () {
                return window.document.activeElement instanceof
                  HTMLIFrameElement
                  ? window.document.activeElement
                  : null
              })
            },
            !0
          )
      }
      function ce() {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
          n[r] = arguments[r]
        return (0, e.useMemo)(function () {
          return V.apply(void 0, n)
        }, [].concat(n))
      }
      function de(t, n, r, a) {
        var l = T(r)
        ;(0, e.useEffect)(
          function () {
            function e(e) {
              l.current(e)
            }
            return (
              (t = null != t ? t : window).addEventListener(n, e, a),
              function () {
                return t.removeEventListener(n, e, a)
              }
            )
          },
          [t, n, a]
        )
      }
      var fe = ["features"],
        pe = (function (e) {
          return (
            (e[(e.None = 1)] = "None"),
            (e[(e.Focusable = 2)] = "Focusable"),
            (e[(e.Hidden = 4)] = "Hidden"),
            e
          )
        })(pe || {}),
        me = N(function (e, t) {
          var n = e.features,
            r = void 0 === n ? 1 : n,
            a = d(e, fe)
          return S({
            ourProps: {
              ref: t,
              "aria-hidden": 2 === (2 & r) || void 0,
              style: h(
                {
                  position: "absolute",
                  width: 1,
                  height: 1,
                  padding: 0,
                  margin: -1,
                  overflow: "hidden",
                  clip: "rect(0, 0, 0, 0)",
                  whiteSpace: "nowrap",
                  borderWidth: "0",
                },
                4 === (4 & r) && 2 !== (2 & r) && { display: "none" }
              ),
            },
            theirProps: a,
            slot: {},
            defaultTag: "div",
            name: "Hidden",
          })
        }),
        he = (function (e) {
          return (
            (e[(e.Forwards = 0)] = "Forwards"),
            (e[(e.Backwards = 1)] = "Backwards"),
            e
          )
        })(he || {})
      function ve() {
        var t = (0, e.useRef)(0)
        return (
          ue(
            "keydown",
            function (e) {
              "Tab" === e.key && (t.current = e.shiftKey ? 1 : 0)
            },
            !0
          ),
          t
        )
      }
      var ge,
        ye = ["focus"],
        be = (function (e) {
          return (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
        })(be || {}),
        xe = (function (e) {
          return (
            (e[(e.TogglePopover = 0)] = "TogglePopover"),
            (e[(e.ClosePopover = 1)] = "ClosePopover"),
            (e[(e.SetButton = 2)] = "SetButton"),
            (e[(e.SetButtonId = 3)] = "SetButtonId"),
            (e[(e.SetPanel = 4)] = "SetPanel"),
            (e[(e.SetPanelId = 5)] = "SetPanelId"),
            e
          )
        })(xe || {}),
        we =
          (p((ge = {}), 0, function (e) {
            var t
            return h(
              h({}, e),
              {},
              {
                popoverState: v(
                  e.popoverState,
                  ((t = {}), p(t, 0, 1), p(t, 1, 0), t)
                ),
              }
            )
          }),
          p(ge, 1, function (e) {
            return 1 === e.popoverState
              ? e
              : h(h({}, e), {}, { popoverState: 1 })
          }),
          p(ge, 2, function (e, t) {
            return e.button === t.button
              ? e
              : h(h({}, e), {}, { button: t.button })
          }),
          p(ge, 3, function (e, t) {
            return e.buttonId === t.buttonId
              ? e
              : h(h({}, e), {}, { buttonId: t.buttonId })
          }),
          p(ge, 4, function (e, t) {
            return e.panel === t.panel ? e : h(h({}, e), {}, { panel: t.panel })
          }),
          p(ge, 5, function (e, t) {
            return e.panelId === t.panelId
              ? e
              : h(h({}, e), {}, { panelId: t.panelId })
          }),
          ge),
        ke = (0, e.createContext)(null)
      function Se(t) {
        var n = (0, e.useContext)(ke)
        if (null === n) {
          var r = new Error(
            "<".concat(t, " /> is missing a parent <Popover /> component.")
          )
          throw (Error.captureStackTrace && Error.captureStackTrace(r, Se), r)
        }
        return n
      }
      ke.displayName = "PopoverContext"
      var Ee = (0, e.createContext)(null)
      function je(t) {
        var n = (0, e.useContext)(Ee)
        if (null === n) {
          var r = new Error(
            "<".concat(t, " /> is missing a parent <Popover /> component.")
          )
          throw (Error.captureStackTrace && Error.captureStackTrace(r, je), r)
        }
        return n
      }
      Ee.displayName = "PopoverAPIContext"
      var Ne = (0, e.createContext)(null)
      function Ce() {
        return (0, e.useContext)(Ne)
      }
      Ne.displayName = "PopoverGroupContext"
      var Pe = (0, e.createContext)(null)
      function _e(e, t) {
        return v(t.type, we, e, t)
      }
      Pe.displayName = "PopoverPanelContext"
      var Te = N(function (t, n) {
          var r,
            a,
            o = "headlessui-popover-button-".concat(B()),
            i = "headlessui-popover-panel-".concat(B()),
            u = (0, e.useRef)(null),
            s = F(
              n,
              z(function (e) {
                u.current = e
              })
            ),
            c = (0, e.useReducer)(_e, {
              popoverState: 1,
              button: null,
              buttonId: o,
              panel: null,
              panelId: i,
              beforePanelSentinel: (0, e.createRef)(),
              afterPanelSentinel: (0, e.createRef)(),
            }),
            d = l(c, 2),
            m = d[0],
            h = m.popoverState,
            g = m.button,
            y = m.panel,
            b = m.beforePanelSentinel,
            x = m.afterPanelSentinel,
            w = d[1],
            k = ce(null != (a = u.current) ? a : g)
          ;(0, e.useEffect)(
            function () {
              return w({ type: 3, buttonId: o })
            },
            [o, w]
          ),
            (0, e.useEffect)(
              function () {
                return w({ type: 5, panelId: i })
              },
              [i, w]
            )
          var E = (0, e.useMemo)(
              function () {
                if (!g || !y) return !1
                var e,
                  t = f(document.querySelectorAll("body > *"))
                try {
                  for (t.s(); !(e = t.n()).done; ) {
                    var n = e.value
                    if (
                      Number(null == n ? void 0 : n.contains(g)) ^
                      Number(null == n ? void 0 : n.contains(y))
                    )
                      return !0
                  }
                } catch (r) {
                  t.e(r)
                } finally {
                  t.f()
                }
                return !1
              },
              [g, y]
            ),
            j = (0, e.useMemo)(
              function () {
                return {
                  buttonId: o,
                  panelId: i,
                  close: function () {
                    return w({ type: 1 })
                  },
                }
              },
              [o, i, w]
            ),
            N = Ce(),
            C = null == N ? void 0 : N.registerPopover,
            P = L(function () {
              var e
              return null !=
                (e = null == N ? void 0 : N.isFocusWithinPopoverGroup())
                ? e
                : (null == k ? void 0 : k.activeElement) &&
                    ((null == g ? void 0 : g.contains(k.activeElement)) ||
                      (null == y ? void 0 : y.contains(k.activeElement)))
            })
          ;(0, e.useEffect)(
            function () {
              return null == C ? void 0 : C(j)
            },
            [C, j]
          ),
            de(
              null == k ? void 0 : k.defaultView,
              "focus",
              function (e) {
                var t, n, r, a
                0 === h &&
                  (P() ||
                    !g ||
                    !y ||
                    (null !=
                      (n = null == (t = b.current) ? void 0 : t.contains) &&
                      n.call(t, e.target)) ||
                    (null !=
                      (a = null == (r = x.current) ? void 0 : r.contains) &&
                      a.call(r, e.target)) ||
                    w({ type: 1 }))
              },
              !0
            ),
            se(
              [g, y],
              function (e, t) {
                w({ type: 1 }),
                  J(t, G.Loose) || (e.preventDefault(), null == g || g.focus())
              },
              0 === h
            )
          var _ = L(function (e) {
              w({ type: 1 })
              var t = e
                ? e instanceof HTMLElement
                  ? e
                  : e.current instanceof HTMLElement
                  ? e.current
                  : g
                : g
              null == t || t.focus()
            }),
            T = (0, e.useMemo)(
              function () {
                return { close: _, isPortalled: E }
              },
              [_, E]
            ),
            O = (0, e.useMemo)(
              function () {
                return { open: 0 === h, close: _ }
              },
              [h, _]
            ),
            M = t,
            R = { ref: s }
          return e.createElement(
            ke.Provider,
            { value: c },
            e.createElement(
              Ee.Provider,
              { value: T },
              e.createElement(
                oe,
                {
                  value: v(
                    h,
                    ((r = {}), p(r, 0, ae.Open), p(r, 1, ae.Closed), r)
                  ),
                },
                S({
                  ourProps: R,
                  theirProps: M,
                  slot: O,
                  defaultTag: "div",
                  name: "Popover",
                })
              )
            )
          )
        }),
        Le = N(function (t, n) {
          var r = l(Se("Popover.Button"), 2),
            a = r[0],
            o = r[1],
            i = je("Popover.Button").isPortalled,
            u = (0, e.useRef)(null),
            s = "headlessui-focus-sentinel-".concat(B()),
            c = Ce(),
            d = null == c ? void 0 : c.closeOthers,
            f = (0, e.useContext)(Pe),
            m = null !== f && f === a.panelId,
            h = F(
              u,
              n,
              m
                ? null
                : function (e) {
                    return o({ type: 2, button: e })
                  }
            ),
            g = F(u, n),
            y = ce(u),
            b = L(function (e) {
              var t, n, r
              if (m) {
                if (1 === a.popoverState) return
                switch (e.key) {
                  case U.Space:
                  case U.Enter:
                    e.preventDefault(),
                      null == (n = (t = e.target).click) || n.call(t),
                      o({ type: 1 }),
                      null == (r = a.button) || r.focus()
                }
              } else
                switch (e.key) {
                  case U.Space:
                  case U.Enter:
                    e.preventDefault(),
                      e.stopPropagation(),
                      1 === a.popoverState && (null == d || d(a.buttonId)),
                      o({ type: 0 })
                    break
                  case U.Escape:
                    if (0 !== a.popoverState)
                      return null == d ? void 0 : d(a.buttonId)
                    if (
                      !u.current ||
                      ((null == y ? void 0 : y.activeElement) &&
                        !u.current.contains(y.activeElement))
                    )
                      return
                    e.preventDefault(), e.stopPropagation(), o({ type: 1 })
                }
            }),
            x = L(function (e) {
              m || (e.key === U.Space && e.preventDefault())
            }),
            w = L(function (e) {
              var n, r
              H(e.currentTarget) ||
                t.disabled ||
                (m
                  ? (o({ type: 1 }), null == (n = a.button) || n.focus())
                  : (e.preventDefault(),
                    e.stopPropagation(),
                    1 === a.popoverState && (null == d || d(a.buttonId)),
                    o({ type: 0 }),
                    null == (r = a.button) || r.focus()))
            }),
            k = L(function (e) {
              e.preventDefault(), e.stopPropagation()
            }),
            E = 0 === a.popoverState,
            j = (0, e.useMemo)(
              function () {
                return { open: E }
              },
              [E]
            ),
            N = (function (t, n) {
              var r = l(
                  (0, e.useState)(function () {
                    return ie(t)
                  }),
                  2
                ),
                a = r[0],
                o = r[1]
              return (
                _(
                  function () {
                    o(ie(t))
                  },
                  [t.type, t.as]
                ),
                _(
                  function () {
                    a ||
                      !n.current ||
                      (n.current instanceof HTMLButtonElement &&
                        !n.current.hasAttribute("type") &&
                        o("button"))
                  },
                  [a, n]
                ),
                a
              )
            })(t, u),
            C = t,
            P = m
              ? { ref: g, type: N, onKeyDown: b, onClick: w }
              : {
                  ref: h,
                  id: a.buttonId,
                  type: N,
                  "aria-expanded": t.disabled ? void 0 : 0 === a.popoverState,
                  "aria-controls": a.panel ? a.panelId : void 0,
                  onKeyDown: b,
                  onKeyUp: x,
                  onClick: w,
                  onMouseDown: k,
                },
            T = ve(),
            O = L(function () {
              var e = a.panel
              e &&
                (function () {
                  var t
                  v(
                    T.current,
                    (p((t = {}), he.Forwards, function () {
                      return ne(e, Q.First)
                    }),
                    p(t, he.Backwards, function () {
                      return ne(e, Q.Last)
                    }),
                    t)
                  )
                })()
            })
          return e.createElement(
            e.Fragment,
            null,
            S({
              ourProps: P,
              theirProps: C,
              slot: j,
              defaultTag: "button",
              name: "Popover.Button",
            }),
            E &&
              !m &&
              i &&
              e.createElement(me, {
                id: s,
                features: pe.Focusable,
                as: "button",
                type: "button",
                onFocus: O,
              })
          )
        }),
        Oe = w.RenderStrategy | w.Static,
        ze = N(function (t, n) {
          var r = l(Se("Popover.Overlay"), 2),
            a = r[0].popoverState,
            o = r[1],
            i = F(n),
            u = "headlessui-popover-overlay-".concat(B()),
            s = le(),
            c = null !== s ? s === ae.Open : 0 === a,
            d = L(function (e) {
              if (H(e.currentTarget)) return e.preventDefault()
              o({ type: 1 })
            })
          return S({
            ourProps: { ref: i, id: u, "aria-hidden": !0, onClick: d },
            theirProps: t,
            slot: (0, e.useMemo)(
              function () {
                return { open: 0 === a }
              },
              [a]
            ),
            defaultTag: "div",
            features: Oe,
            visible: c,
            name: "Popover.Overlay",
          })
        }),
        Fe = w.RenderStrategy | w.Static,
        Me = N(function (t, n) {
          var r = t.focus,
            a = void 0 !== r && r,
            o = d(t, ye),
            i = l(Se("Popover.Panel"), 2),
            u = i[0],
            s = i[1],
            m = je("Popover.Panel"),
            h = m.close,
            g = m.isPortalled,
            y = "headlessui-focus-sentinel-before-".concat(B()),
            b = "headlessui-focus-sentinel-after-".concat(B()),
            x = (0, e.useRef)(null),
            w = F(x, n, function (e) {
              s({ type: 4, panel: e })
            }),
            k = ce(x),
            E = le(),
            j = null !== E ? E === ae.Open : 0 === u.popoverState,
            N = L(function (e) {
              var t
              if (e.key === U.Escape) {
                if (
                  0 !== u.popoverState ||
                  !x.current ||
                  ((null == k ? void 0 : k.activeElement) &&
                    !x.current.contains(k.activeElement))
                )
                  return
                e.preventDefault(),
                  e.stopPropagation(),
                  s({ type: 1 }),
                  null == (t = u.button) || t.focus()
              }
            })
          ;(0, e.useEffect)(
            function () {
              var e
              t.static ||
                (1 === u.popoverState &&
                  (null == (e = t.unmount) || e) &&
                  s({ type: 4, panel: null }))
            },
            [u.popoverState, t.unmount, t.static, s]
          ),
            (0, e.useEffect)(
              function () {
                if (a && 0 === u.popoverState && x.current) {
                  var e = null == k ? void 0 : k.activeElement
                  x.current.contains(e) || ne(x.current, Q.First)
                }
              },
              [a, x, u.popoverState]
            )
          var C = (0, e.useMemo)(
              function () {
                return { open: 0 === u.popoverState, close: h }
              },
              [u, h]
            ),
            P = {
              ref: w,
              id: u.panelId,
              onKeyDown: N,
              onBlur:
                a && 0 === u.popoverState
                  ? function (e) {
                      var t,
                        n,
                        r,
                        a,
                        l,
                        o = e.relatedTarget
                      !o ||
                        !x.current ||
                        (null != (t = x.current) && t.contains(o)) ||
                        (s({ type: 1 }),
                        ((null ==
                        (r =
                          null == (n = u.beforePanelSentinel.current)
                            ? void 0
                            : n.contains)
                          ? void 0
                          : r.call(n, o)) ||
                          (null ==
                          (l =
                            null == (a = u.afterPanelSentinel.current)
                              ? void 0
                              : a.contains)
                            ? void 0
                            : l.call(a, o))) &&
                          o.focus({ preventScroll: !0 }))
                    }
                  : void 0,
              tabIndex: -1,
            },
            _ = ve(),
            T = L(function () {
              var e = x.current
              e &&
                (function () {
                  var t
                  v(
                    _.current,
                    (p((t = {}), he.Forwards, function () {
                      ne(e, Q.First)
                    }),
                    p(t, he.Backwards, function () {
                      var e
                      null == (e = u.button) || e.focus({ preventScroll: !0 })
                    }),
                    t)
                  )
                })()
            }),
            O = L(function () {
              var e = x.current
              e &&
                (function () {
                  var t
                  v(
                    _.current,
                    (p((t = {}), he.Forwards, function () {
                      var e, t, n
                      if (u.button) {
                        var r,
                          a = K(),
                          l = a.indexOf(u.button),
                          o = a.slice(0, l + 1),
                          i = [].concat(c(a.slice(l + 1)), c(o)),
                          s = f(i.slice())
                        try {
                          for (s.s(); !(r = s.n()).done; ) {
                            var d = r.value
                            if (
                              (null ==
                              (t =
                                null == (e = null == d ? void 0 : d.id)
                                  ? void 0
                                  : e.startsWith)
                                ? void 0
                                : t.call(e, "headlessui-focus-sentinel-")) ||
                              (null == (n = u.panel) ? void 0 : n.contains(d))
                            ) {
                              var p = i.indexOf(d)
                              ;-1 !== p && i.splice(p, 1)
                            }
                          }
                        } catch (m) {
                          s.e(m)
                        } finally {
                          s.f()
                        }
                        ne(i, Q.First, !1)
                      }
                    }),
                    p(t, he.Backwards, function () {
                      return ne(e, Q.Last)
                    }),
                    t)
                  )
                })()
            })
          return e.createElement(
            Pe.Provider,
            { value: u.panelId },
            j &&
              g &&
              e.createElement(me, {
                id: y,
                ref: u.beforePanelSentinel,
                features: pe.Focusable,
                as: "button",
                type: "button",
                onFocus: T,
              }),
            S({
              ourProps: P,
              theirProps: o,
              slot: C,
              defaultTag: "div",
              features: Fe,
              visible: j,
              name: "Popover.Panel",
            }),
            j &&
              g &&
              e.createElement(me, {
                id: b,
                ref: u.afterPanelSentinel,
                features: pe.Focusable,
                as: "button",
                type: "button",
                onFocus: O,
              })
          )
        }),
        Re = N(function (t, n) {
          var r = (0, e.useRef)(null),
            a = F(r, n),
            o = l((0, e.useState)([]), 2),
            i = o[0],
            u = o[1],
            s = L(function (e) {
              u(function (t) {
                var n = t.indexOf(e)
                if (-1 !== n) {
                  var r = t.slice()
                  return r.splice(n, 1), r
                }
                return t
              })
            }),
            d = L(function (e) {
              return (
                u(function (t) {
                  return [].concat(c(t), [e])
                }),
                function () {
                  return s(e)
                }
              )
            }),
            p = L(function () {
              var e,
                t = V(r)
              if (!t) return !1
              var n = t.activeElement
              return (
                !(null == (e = r.current) || !e.contains(n)) ||
                i.some(function (e) {
                  var r, a
                  return (
                    (null == (r = t.getElementById(e.buttonId))
                      ? void 0
                      : r.contains(n)) ||
                    (null == (a = t.getElementById(e.panelId))
                      ? void 0
                      : a.contains(n))
                  )
                })
              )
            }),
            m = L(function (e) {
              var t,
                n = f(i)
              try {
                for (n.s(); !(t = n.n()).done; ) {
                  var r = t.value
                  r.buttonId !== e && r.close()
                }
              } catch (a) {
                n.e(a)
              } finally {
                n.f()
              }
            }),
            h = (0, e.useMemo)(
              function () {
                return {
                  registerPopover: d,
                  unregisterPopover: s,
                  isFocusWithinPopoverGroup: p,
                  closeOthers: m,
                }
              },
              [d, s, p, m]
            ),
            v = (0, e.useMemo)(function () {
              return {}
            }, []),
            g = t,
            y = { ref: a }
          return e.createElement(
            Ne.Provider,
            { value: h },
            S({
              ourProps: y,
              theirProps: g,
              slot: v,
              defaultTag: "div",
              name: "Popover.Group",
            })
          )
        }),
        Ie = Object.assign(Te, {
          Button: Le,
          Overlay: ze,
          Panel: Me,
          Group: Re,
        })
      function De(e) {
        "function" == typeof queueMicrotask
          ? queueMicrotask(e)
          : Promise.resolve()
              .then(e)
              .catch(function (e) {
                return setTimeout(function () {
                  throw e
                })
              })
      }
      function Ae() {
        var t = (0, e.useRef)(!1)
        return (
          _(function () {
            return (
              (t.current = !0),
              function () {
                t.current = !1
              }
            )
          }, []),
          t
        )
      }
      function Be(e) {
        return (
          (Be =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e
                }),
          Be(e)
        )
      }
      function Ue() {
        Ue = function () {
          return e
        }
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r = "function" == typeof Symbol ? Symbol : {},
          a = r.iterator || "@@iterator",
          l = r.asyncIterator || "@@asyncIterator",
          o = r.toStringTag || "@@toStringTag"
        function i(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          )
        }
        try {
          i({}, "")
        } catch (N) {
          i = function (e, t, n) {
            return (e[t] = n)
          }
        }
        function u(e, t, n, r) {
          var a = t && t.prototype instanceof d ? t : d,
            l = Object.create(a.prototype),
            o = new S(r || [])
          return (
            (l._invoke = (function (e, t, n) {
              var r = "suspendedStart"
              return function (a, l) {
                if ("executing" === r)
                  throw new Error("Generator is already running")
                if ("completed" === r) {
                  if ("throw" === a) throw l
                  return j()
                }
                for (n.method = a, n.arg = l; ; ) {
                  var o = n.delegate
                  if (o) {
                    var i = x(o, n)
                    if (i) {
                      if (i === c) continue
                      return i
                    }
                  }
                  if ("next" === n.method) n.sent = n._sent = n.arg
                  else if ("throw" === n.method) {
                    if ("suspendedStart" === r) throw ((r = "completed"), n.arg)
                    n.dispatchException(n.arg)
                  } else "return" === n.method && n.abrupt("return", n.arg)
                  r = "executing"
                  var u = s(e, t, n)
                  if ("normal" === u.type) {
                    if (
                      ((r = n.done ? "completed" : "suspendedYield"),
                      u.arg === c)
                    )
                      continue
                    return { value: u.arg, done: n.done }
                  }
                  "throw" === u.type &&
                    ((r = "completed"), (n.method = "throw"), (n.arg = u.arg))
                }
              }
            })(e, n, o)),
            l
          )
        }
        function s(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) }
          } catch (N) {
            return { type: "throw", arg: N }
          }
        }
        e.wrap = u
        var c = {}
        function d() {}
        function f() {}
        function p() {}
        var m = {}
        i(m, a, function () {
          return this
        })
        var h = Object.getPrototypeOf,
          v = h && h(h(E([])))
        v && v !== t && n.call(v, a) && (m = v)
        var g = (p.prototype = d.prototype = Object.create(m))
        function y(e) {
          ;["next", "throw", "return"].forEach(function (t) {
            i(e, t, function (e) {
              return this._invoke(t, e)
            })
          })
        }
        function b(e, t) {
          function r(a, l, o, i) {
            var u = s(e[a], e, l)
            if ("throw" !== u.type) {
              var c = u.arg,
                d = c.value
              return d && "object" == Be(d) && n.call(d, "__await")
                ? t.resolve(d.__await).then(
                    function (e) {
                      r("next", e, o, i)
                    },
                    function (e) {
                      r("throw", e, o, i)
                    }
                  )
                : t.resolve(d).then(
                    function (e) {
                      ;(c.value = e), o(c)
                    },
                    function (e) {
                      return r("throw", e, o, i)
                    }
                  )
            }
            i(u.arg)
          }
          var a
          this._invoke = function (e, n) {
            function l() {
              return new t(function (t, a) {
                r(e, n, t, a)
              })
            }
            return (a = a ? a.then(l, l) : l())
          }
        }
        function x(e, t) {
          var n = e.iterator[t.method]
          if (void 0 === n) {
            if (((t.delegate = null), "throw" === t.method)) {
              if (
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                x(e, t),
                "throw" === t.method)
              )
                return c
              ;(t.method = "throw"),
                (t.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ))
            }
            return c
          }
          var r = s(n, e.iterator, t.arg)
          if ("throw" === r.type)
            return (t.method = "throw"), (t.arg = r.arg), (t.delegate = null), c
          var a = r.arg
          return a
            ? a.done
              ? ((t[e.resultName] = a.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                c)
              : a
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              c)
        }
        function w(e) {
          var t = { tryLoc: e[0] }
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t)
        }
        function k(e) {
          var t = e.completion || {}
          ;(t.type = "normal"), delete t.arg, (e.completion = t)
        }
        function S(e) {
          ;(this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(w, this),
            this.reset(!0)
        }
        function E(e) {
          if (e) {
            var t = e[a]
            if (t) return t.call(e)
            if ("function" == typeof e.next) return e
            if (!isNaN(e.length)) {
              var r = -1,
                l = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t
                  return (t.value = void 0), (t.done = !0), t
                }
              return (l.next = l)
            }
          }
          return { next: j }
        }
        function j() {
          return { value: void 0, done: !0 }
        }
        return (
          (f.prototype = p),
          i(g, "constructor", p),
          i(p, "constructor", f),
          (f.displayName = i(p, o, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor
            return (
              !!t &&
              (t === f || "GeneratorFunction" === (t.displayName || t.name))
            )
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, p)
                : ((e.__proto__ = p), i(e, o, "GeneratorFunction")),
              (e.prototype = Object.create(g)),
              e
            )
          }),
          (e.awrap = function (e) {
            return { __await: e }
          }),
          y(b.prototype),
          i(b.prototype, l, function () {
            return this
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, n, r, a, l) {
            void 0 === l && (l = Promise)
            var o = new b(u(t, n, r, a), l)
            return e.isGeneratorFunction(n)
              ? o
              : o.next().then(function (e) {
                  return e.done ? e.value : o.next()
                })
          }),
          y(g),
          i(g, o, "Generator"),
          i(g, a, function () {
            return this
          }),
          i(g, "toString", function () {
            return "[object Generator]"
          }),
          (e.keys = function (e) {
            var t = []
            for (var n in e) t.push(n)
            return (
              t.reverse(),
              function n() {
                for (; t.length; ) {
                  var r = t.pop()
                  if (r in e) return (n.value = r), (n.done = !1), n
                }
                return (n.done = !0), n
              }
            )
          }),
          (e.values = E),
          (S.prototype = {
            constructor: S,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(k),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0)
            },
            stop: function () {
              this.done = !0
              var e = this.tryEntries[0].completion
              if ("throw" === e.type) throw e.arg
              return this.rval
            },
            dispatchException: function (e) {
              if (this.done) throw e
              var t = this
              function r(n, r) {
                return (
                  (o.type = "throw"),
                  (o.arg = e),
                  (t.next = n),
                  r && ((t.method = "next"), (t.arg = void 0)),
                  !!r
                )
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var l = this.tryEntries[a],
                  o = l.completion
                if ("root" === l.tryLoc) return r("end")
                if (l.tryLoc <= this.prev) {
                  var i = n.call(l, "catchLoc"),
                    u = n.call(l, "finallyLoc")
                  if (i && u) {
                    if (this.prev < l.catchLoc) return r(l.catchLoc, !0)
                    if (this.prev < l.finallyLoc) return r(l.finallyLoc)
                  } else if (i) {
                    if (this.prev < l.catchLoc) return r(l.catchLoc, !0)
                  } else {
                    if (!u)
                      throw new Error("try statement without catch or finally")
                    if (this.prev < l.finallyLoc) return r(l.finallyLoc)
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var a = this.tryEntries[r]
                if (
                  a.tryLoc <= this.prev &&
                  n.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var l = a
                  break
                }
              }
              l &&
                ("break" === e || "continue" === e) &&
                l.tryLoc <= t &&
                t <= l.finallyLoc &&
                (l = null)
              var o = l ? l.completion : {}
              return (
                (o.type = e),
                (o.arg = t),
                l
                  ? ((this.method = "next"), (this.next = l.finallyLoc), c)
                  : this.complete(o)
              )
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                c
              )
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t]
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), k(n), c
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t]
                if (n.tryLoc === e) {
                  var r = n.completion
                  if ("throw" === r.type) {
                    var a = r.arg
                    k(n)
                  }
                  return a
                }
              }
              throw new Error("illegal catch attempt")
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: E(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                c
              )
            },
          }),
          e
        )
      }
      function He(e, t, n, r, a, l, o) {
        try {
          var i = e[l](o),
            u = i.value
        } catch (s) {
          return void n(s)
        }
        i.done ? t(u) : Promise.resolve(u).then(r, a)
      }
      function Ve() {
        var e = [],
          t = [],
          n = {
            enqueue: function (e) {
              t.push(e)
            },
            addEventListener: function (e, t, r, a) {
              return (
                e.addEventListener(t, r, a),
                n.add(function () {
                  return e.removeEventListener(t, r, a)
                })
              )
            },
            requestAnimationFrame: (function (e) {
              function t() {
                return e.apply(this, arguments)
              }
              return (
                (t.toString = function () {
                  return e.toString()
                }),
                t
              )
            })(function () {
              var e = requestAnimationFrame.apply(void 0, arguments)
              return n.add(function () {
                return cancelAnimationFrame(e)
              })
            }),
            nextFrame: function () {
              for (
                var e = arguments.length, t = new Array(e), r = 0;
                r < e;
                r++
              )
                t[r] = arguments[r]
              return n.requestAnimationFrame(function () {
                return n.requestAnimationFrame.apply(n, t)
              })
            },
            setTimeout: (function (e) {
              function t() {
                return e.apply(this, arguments)
              }
              return (
                (t.toString = function () {
                  return e.toString()
                }),
                t
              )
            })(function () {
              var e = setTimeout.apply(void 0, arguments)
              return n.add(function () {
                return clearTimeout(e)
              })
            }),
            add: function (t) {
              return (
                e.push(t),
                function () {
                  var n = e.indexOf(t)
                  n >= 0 && (0, l(e.splice(n, 1), 1)[0])()
                }
              )
            },
            dispose: function () {
              var t,
                n = f(e.splice(0))
              try {
                for (n.s(); !(t = n.n()).done; ) {
                  ;(0, t.value)()
                }
              } catch (r) {
                n.e(r)
              } finally {
                n.f()
              }
            },
            workQueue: function () {
              return ((e = Ue().mark(function e() {
                var n, r, a
                return Ue().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          ;(n = f(t.splice(0))), (e.prev = 1), n.s()
                        case 3:
                          if ((r = n.n()).done) {
                            e.next = 9
                            break
                          }
                          return (a = r.value), (e.next = 7), a()
                        case 7:
                          e.next = 3
                          break
                        case 9:
                          e.next = 14
                          break
                        case 11:
                          ;(e.prev = 11), (e.t0 = e.catch(1)), n.e(e.t0)
                        case 14:
                          return (e.prev = 14), n.f(), e.finish(14)
                        case 17:
                        case "end":
                          return e.stop()
                      }
                  },
                  e,
                  null,
                  [[1, 11, 14, 17]]
                )
              })),
              function () {
                var t = this,
                  n = arguments
                return new Promise(function (r, a) {
                  var l = e.apply(t, n)
                  function o(e) {
                    He(l, r, a, o, i, "next", e)
                  }
                  function i(e) {
                    He(l, r, a, o, i, "throw", e)
                  }
                  o(void 0)
                })
              })()
              var e
            },
          }
        return n
      }
      function We(e) {
        for (
          var t, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1;
          a < n;
          a++
        )
          r[a - 1] = arguments[a]
        e && r.length > 0 && (t = e.classList).add.apply(t, r)
      }
      function $e(e) {
        for (
          var t, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1;
          a < n;
          a++
        )
          r[a - 1] = arguments[a]
        e && r.length > 0 && (t = e.classList).remove.apply(t, r)
      }
      var Qe = (function (e) {
        return (e.Ended = "ended"), (e.Cancelled = "cancelled"), e
      })(Qe || {})
      function qe(e, t, n, r) {
        var a = n ? "enter" : "leave",
          o = Ve(),
          i =
            void 0 !== r
              ? (function (e) {
                  var t = { called: !1 }
                  return function () {
                    if (!t.called)
                      return (t.called = !0), e.apply(void 0, arguments)
                  }
                })(r)
              : function () {},
          u = v(a, {
            enter: function () {
              return t.enter
            },
            leave: function () {
              return t.leave
            },
          }),
          s = v(a, {
            enter: function () {
              return t.enterTo
            },
            leave: function () {
              return t.leaveTo
            },
          }),
          d = v(a, {
            enter: function () {
              return t.enterFrom
            },
            leave: function () {
              return t.leaveFrom
            },
          })
        return (
          $e.apply(
            void 0,
            [e].concat(
              c(t.enter),
              c(t.enterTo),
              c(t.enterFrom),
              c(t.leave),
              c(t.leaveFrom),
              c(t.leaveTo),
              c(t.entered)
            )
          ),
          We.apply(void 0, [e].concat(c(u), c(d))),
          o.nextFrame(function () {
            $e.apply(void 0, [e].concat(c(d))),
              We.apply(void 0, [e].concat(c(s))),
              (function (e, t) {
                var n = Ve()
                if (!e) return n.dispose
                var r = getComputedStyle(e),
                  a = [r.transitionDuration, r.transitionDelay].map(function (
                    e
                  ) {
                    var t = e
                        .split(",")
                        .filter(Boolean)
                        .map(function (e) {
                          return e.includes("ms")
                            ? parseFloat(e)
                            : 1e3 * parseFloat(e)
                        })
                        .sort(function (e, t) {
                          return t - e
                        }),
                      n = l(t, 1)[0]
                    return void 0 === n ? 0 : n
                  }),
                  o = l(a, 2)
                if (o[0] + o[1] !== 0) {
                  var i = []
                  i.push(
                    n.addEventListener(e, "transitionrun", function (r) {
                      r.target === r.currentTarget &&
                        (i.splice(0).forEach(function (e) {
                          return e()
                        }),
                        i.push(
                          n.addEventListener(e, "transitionend", function (e) {
                            e.target === e.currentTarget &&
                              (t("ended"),
                              i.splice(0).forEach(function (e) {
                                return e()
                              }))
                          }),
                          n.addEventListener(
                            e,
                            "transitioncancel",
                            function (e) {
                              e.target === e.currentTarget &&
                                (t("cancelled"),
                                i.splice(0).forEach(function (e) {
                                  return e()
                                }))
                            }
                          )
                        ))
                    })
                  )
                } else t("ended")
                n.add(function () {
                  return t("cancelled")
                }),
                  n.dispose
              })(e, function (n) {
                return (
                  "ended" === n &&
                    ($e.apply(void 0, [e].concat(c(u))),
                    We.apply(void 0, [e].concat(c(t.entered)))),
                  i(n)
                )
              })
          }),
          o.dispose
        )
      }
      function Ye(t) {
        var n = t.container,
          r = t.direction,
          a = t.classes,
          o = t.events,
          i = t.onStart,
          u = t.onStop,
          s = Ae(),
          c = (function () {
            var t = l((0, e.useState)(Ve), 1)[0]
            return (
              (0, e.useEffect)(
                function () {
                  return function () {
                    return t.dispose()
                  }
                },
                [t]
              ),
              t
            )
          })(),
          d = T(r),
          f = L(function () {
            return v(d.current, {
              enter: function () {
                return o.current.beforeEnter()
              },
              leave: function () {
                return o.current.beforeLeave()
              },
              idle: function () {},
            })
          }),
          m = L(function () {
            return v(d.current, {
              enter: function () {
                return o.current.afterEnter()
              },
              leave: function () {
                return o.current.afterLeave()
              },
              idle: function () {},
            })
          })
        _(
          function () {
            var e = Ve()
            c.add(e.dispose)
            var t = n.current
            if (t && "idle" !== d.current && s.current)
              return (
                e.dispose(),
                f(),
                i.current(d.current),
                e.add(
                  qe(t, a.current, "enter" === d.current, function (t) {
                    var n
                    e.dispose(),
                      v(
                        t,
                        (p((n = {}), Qe.Ended, function () {
                          m(), u.current(d.current)
                        }),
                        p(n, Qe.Cancelled, function () {}),
                        n)
                      )
                  })
                ),
                e.dispose
              )
          },
          [r]
        )
      }
      var Ke = [
          "beforeEnter",
          "afterEnter",
          "beforeLeave",
          "afterLeave",
          "enter",
          "enterFrom",
          "enterTo",
          "entered",
          "leave",
          "leaveFrom",
          "leaveTo",
        ],
        Ge = ["show", "appear", "unmount"]
      function Je() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
        return e.split(" ").filter(function (e) {
          return e.trim().length > 1
        })
      }
      var Xe = (0, e.createContext)(null)
      Xe.displayName = "TransitionContext"
      var Ze = (function (e) {
        return (e.Visible = "visible"), (e.Hidden = "hidden"), e
      })(Ze || {})
      var et = (0, e.createContext)(null)
      function tt(e) {
        return "children" in e
          ? tt(e.children)
          : e.current.filter(function (e) {
              return "visible" === e.state
            }).length > 0
      }
      function nt(t) {
        var n = T(t),
          r = (0, e.useRef)([]),
          a = Ae(),
          l = L(function (e) {
            var t,
              l =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : k.Hidden,
              o = r.current.findIndex(function (t) {
                return t.id === e
              })
            ;-1 !== o &&
              (v(
                l,
                (p((t = {}), k.Unmount, function () {
                  r.current.splice(o, 1)
                }),
                p(t, k.Hidden, function () {
                  r.current[o].state = "hidden"
                }),
                t)
              ),
              De(function () {
                var e
                !tt(r) && a.current && (null == (e = n.current) || e.call(n))
              }))
          }),
          o = L(function (e) {
            var t = r.current.find(function (t) {
              return t.id === e
            })
            return (
              t
                ? "visible" !== t.state && (t.state = "visible")
                : r.current.push({ id: e, state: "visible" }),
              function () {
                return l(e, k.Unmount)
              }
            )
          })
        return (0, e.useMemo)(
          function () {
            return { children: r, register: o, unregister: l }
          },
          [o, l, r]
        )
      }
      function rt() {}
      et.displayName = "NestingContext"
      var at = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"]
      function lt(e) {
        var t,
          n,
          r = {},
          a = f(at)
        try {
          for (a.s(); !(n = a.n()).done; ) {
            var l = n.value
            r[l] = null != (t = e[l]) ? t : rt
          }
        } catch (o) {
          a.e(o)
        } finally {
          a.f()
        }
        return r
      }
      var ot = w.RenderStrategy,
        it = N(function (t, n) {
          var r,
            a = t.beforeEnter,
            o = t.afterEnter,
            i = t.beforeLeave,
            u = t.afterLeave,
            s = t.enter,
            c = t.enterFrom,
            f = t.enterTo,
            m = t.entered,
            h = t.leave,
            g = t.leaveFrom,
            y = t.leaveTo,
            b = d(t, Ke),
            x = (0, e.useRef)(null),
            w = F(x, n),
            E = l((0, e.useState)("visible"), 2),
            j = E[0],
            N = E[1],
            C = b.unmount ? k.Unmount : k.Hidden,
            P = (function () {
              var t = (0, e.useContext)(Xe)
              if (null === t)
                throw new Error(
                  "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
                )
              return t
            })(),
            _ = P.show,
            L = P.appear,
            O = P.initial,
            z = (function () {
              var t = (0, e.useContext)(et)
              if (null === t)
                throw new Error(
                  "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
                )
              return t
            })(),
            M = z.register,
            R = z.unregister,
            D = (0, e.useRef)(null),
            A = B()
          ;(0, e.useEffect)(
            function () {
              if (A) return M(A)
            },
            [M, A]
          ),
            (0, e.useEffect)(
              function () {
                if (C === k.Hidden && A) {
                  var e
                  if (_ && "visible" !== j) return void N("visible")
                  v(
                    j,
                    (p((e = {}), "hidden", function () {
                      return R(A)
                    }),
                    p(e, "visible", function () {
                      return M(A)
                    }),
                    e)
                  )
                }
              },
              [j, A, M, R, _, C]
            )
          var U = T({
              enter: Je(s),
              enterFrom: Je(c),
              enterTo: Je(f),
              entered: Je(m),
              leave: Je(h),
              leaveFrom: Je(g),
              leaveTo: Je(y),
            }),
            H = (function (t) {
              var n = (0, e.useRef)(lt(t))
              return (
                (0, e.useEffect)(
                  function () {
                    n.current = lt(t)
                  },
                  [t]
                ),
                n
              )
            })({
              beforeEnter: a,
              afterEnter: o,
              beforeLeave: i,
              afterLeave: u,
            }),
            V = I()
          ;(0, e.useEffect)(
            function () {
              if (V && "visible" === j && null === x.current)
                throw new Error(
                  "Did you forget to passthrough the `ref` to the actual DOM node?"
                )
            },
            [x, j, V]
          )
          var W = O && !L,
            $ = !V || W || D.current === _ ? "idle" : _ ? "enter" : "leave",
            Q = (0, e.useRef)(!1),
            q = nt(function () {
              Q.current || (N("hidden"), R(A))
            })
          Ye({
            container: x,
            classes: U,
            events: H,
            direction: $,
            onStart: T(function () {
              Q.current = !0
            }),
            onStop: T(function (e) {
              ;(Q.current = !1), "leave" === e && !tt(q) && (N("hidden"), R(A))
            }),
          }),
            (0, e.useEffect)(
              function () {
                !W || (C === k.Hidden ? (D.current = null) : (D.current = _))
              },
              [_, W, j]
            )
          var Y = b,
            K = { ref: w }
          return e.createElement(
            et.Provider,
            { value: q },
            e.createElement(
              oe,
              {
                value: v(
                  j,
                  ((r = {}),
                  p(r, "visible", ae.Open),
                  p(r, "hidden", ae.Closed),
                  r)
                ),
              },
              S({
                ourProps: K,
                theirProps: Y,
                defaultTag: "div",
                features: ot,
                visible: "visible" === j,
                name: "Transition.Child",
              })
            )
          )
        }),
        ut = N(function (t, n) {
          var r,
            a = t.show,
            o = t.appear,
            i = void 0 !== o && o,
            u = t.unmount,
            s = d(t, Ge),
            c = (0, e.useRef)(null),
            f = F(c, n)
          I()
          var m = le()
          if (
            (void 0 === a &&
              null !== m &&
              (a = v(m, (p((r = {}), ae.Open, !0), p(r, ae.Closed, !1), r))),
            ![!0, !1].includes(a))
          )
            throw new Error(
              "A <Transition /> is used but it is missing a `show={true | false}` prop."
            )
          var g = l((0, e.useState)(a ? "visible" : "hidden"), 2),
            y = g[0],
            b = g[1],
            x = nt(function () {
              b("hidden")
            }),
            w = l((0, e.useState)(!0), 2),
            k = w[0],
            E = w[1],
            j = (0, e.useRef)([a])
          _(
            function () {
              !1 !== k &&
                j.current[j.current.length - 1] !== a &&
                (j.current.push(a), E(!1))
            },
            [j, a]
          )
          var N = (0, e.useMemo)(
            function () {
              return { show: a, appear: i, initial: k }
            },
            [a, i, k]
          )
          ;(0, e.useEffect)(
            function () {
              if (a) b("visible")
              else if (tt(x)) {
                var e = c.current
                if (!e) return
                var t = e.getBoundingClientRect()
                0 === t.x &&
                  0 === t.y &&
                  0 === t.width &&
                  0 === t.height &&
                  b("hidden")
              } else b("hidden")
            },
            [a, x]
          )
          var C = { unmount: u }
          return e.createElement(
            et.Provider,
            { value: x },
            e.createElement(
              Xe.Provider,
              { value: N },
              S({
                ourProps: h(
                  h({}, C),
                  {},
                  {
                    as: e.Fragment,
                    children: e.createElement(it, h(h({ ref: f }, C), s)),
                  }
                ),
                theirProps: {},
                defaultTag: e.Fragment,
                features: ot,
                visible: "visible" === y,
                name: "Transition",
              })
            )
          )
        }),
        st = N(function (t, n) {
          var r = null !== (0, e.useContext)(Xe),
            a = null !== le()
          return e.createElement(
            e.Fragment,
            null,
            !r && a
              ? e.createElement(ut, h({ ref: n }, t))
              : e.createElement(it, h({ ref: n }, t))
          )
        }),
        ct = Object.assign(ut, { Child: st, Root: ut })
      var dt = e.forwardRef(function (t, n) {
        return e.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 1.5,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: n,
            },
            t
          ),
          e.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5",
          })
        )
      })
      var ft = e.forwardRef(function (t, n) {
        return e.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 1.5,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: n,
            },
            t
          ),
          e.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z",
          })
        )
      })
      var pt = e.forwardRef(function (t, n) {
        return e.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 1.5,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: n,
            },
            t
          ),
          e.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M6 18L18 6M6 6l12 12",
          })
        )
      })
      var mt = e.forwardRef(function (t, n) {
        return e.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 20 20",
              fill: "currentColor",
              "aria-hidden": "true",
              ref: n,
            },
            t
          ),
          e.createElement("path", {
            fillRule: "evenodd",
            d: "M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z",
            clipRule: "evenodd",
          })
        )
      })
      var ht = [
        {
          id: 1,
          name: "The Wedding Loop",
          href: "https://limitless-journey-28555.herokuapp.com/",
          github: "https://github.com/brinton0739/cometomywedding",
          description:
            "Users can manage their guest list and let guests upload pictures to their wedding album",
          paragraph:
            "This application was a group project to showcase the MVC model. My main contribution was the app design and styling of the front end, the sign up and login features and the functionality of the photo uploading and saving to AWS S3 bucket.",
          highlights: [
            "Vanilla Javascript",
            "mySQL, sequelize",
            "AWS S3 Bucket",
            "Tailwind css",
            "Node.js",
            "express",
            "Handlebars",
          ],
          icon: e.forwardRef(function (t, n) {
            return e.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  strokeWidth: 1.5,
                  stroke: "currentColor",
                  "aria-hidden": "true",
                  ref: n,
                },
                t
              ),
              e.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z",
              })
            )
          }),
          imageSrc: "./images/wedding.jpeg",
          imageSrc2: "./images/wedding_loop.png",
          imageAlt: "screenshot of the Wedding loop homepage",
          version: { name: "1.0", date: "July, 2021" },
          click: "wedding",
        },
        {
          id: 2,
          name: "Plan My Date App",
          href: "https://nadybee.github.io/date_ideas/",
          github: "https://github.com/nadybee/date_ideas",
          description:
            "Users can let the app choose a random resturant in their area, along with a random activity",
          paragraph:
            "This application was a group project showcasing a front end application and intergrating 3rd party API's. I was primarily response for the intergration of the Yelp API and the Bored API and the CSS",
          highlights: [
            "Vanilla Javascript",
            "Yelp API",
            "Bored API",
            "Tailwind css",
            "HTML/CSS",
          ],
          icon: e.forwardRef(function (t, n) {
            return e.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  strokeWidth: 1.5,
                  stroke: "currentColor",
                  "aria-hidden": "true",
                  ref: n,
                },
                t
              ),
              e.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
              })
            )
          }),
          imageSrc: "./images/date.jpeg",
          imageSrc2: "./images/plan_my_date.png",
          imageAlt: "screenshot of plan my date app",
          version: { name: "1.0", date: "June, 2021" },
          click: "date",
        },
        {
          id: 3,
          name: "BlackJack",
          href: "https://nadybee.github.io/Blackjack/",
          github: "https://github.com/nadybee/Blackjack",
          description: "Classic BlackJack using OOP Vanilla Javascript",
          paragraph:
            "This was my first project before my bootcamp, trying to learn Javascript on my own. I got the game to work, and made some improvements to that game during my studies",
          highlights: ["Vanilla Javascript", "HTML/CSS"],
          icon: e.forwardRef(function (t, n) {
            return e.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  strokeWidth: 1.5,
                  stroke: "currentColor",
                  "aria-hidden": "true",
                  ref: n,
                },
                t
              ),
              e.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z",
              })
            )
          }),
          imageSrc: "./images/AdobeStock_236741674.jpeg",
          imageSrc2: "./images/blackjack.png",
          imageAlt: "screenshot of plan my date app",
          version: { name: "2.0", date: "Jan, 2022" },
          click: "blackjack",
        },
        {
          id: 4,
          name: "Weather Dashboard",
          href: "https://nadybee.github.io/Weather_Dashboard/",
          github: "https://github.com/nadybee/Weather_Dashboard",
          description: "App to check the weather",
          paragraph:
            "The project showcased my learning on how to fetch and use data from the 3rd party api, and how to use a CSS library",
          highlights: [
            "Javascript",
            "OpenWeather API",
            "Bootstrap",
            "HTML/CSS",
          ],
          icon: e.forwardRef(function (t, n) {
            return e.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  strokeWidth: 1.5,
                  stroke: "currentColor",
                  "aria-hidden": "true",
                  ref: n,
                },
                t
              ),
              e.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z",
              })
            )
          }),
          imageSrc: "./images/weather.jpeg",
          imageSrc2: "./images/weather_dashboard.png",
          imageAlt: "screenshot of plan my date app",
          version: { name: "1.0", date: "May, 2022" },
          click: "weather",
        },
        {
          id: 5,
          name: "Mock Tech Blog",
          href: "https://warm-dusk-87697.herokuapp.com/",
          github: "https://github.com/nadybee/Tech-Blog-using-MVC",
          description:
            "A mock blog that users can create an account, make posts and comments",
          paragraph:
            "This app was built from scratch using the MVC model. This showcases my CRUD knowledge",
          highlights: [
            "Javascript",
            "SQL",
            "mySQL, Sequelize",
            "Bootstrap",
            "Node.js",
            "express",
            "Handlebars",
          ],
          icon: e.forwardRef(function (t, n) {
            return e.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  strokeWidth: 1.5,
                  stroke: "currentColor",
                  "aria-hidden": "true",
                  ref: n,
                },
                t
              ),
              e.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z",
              })
            )
          }),
          imageSrc: "./images/tech_blog.jpeg",
          imageSrc2: "./images/tech_blog_screenshots.png",
          imageAlt: "screenshot of plan my date app",
          version: { name: "1.0", date: "July, 2022" },
          click: "tech-blog",
        },
        {
          id: 6,
          name: "Yoodlize",
          href: "https://www.yoodlize.com/",
          branch: "https://yoodlize.app.link/fOK6zoT2Rsb",
          description: "The rent anything app",
          paragraph:
            "Yoodlize is the reason I am learning to code. I designed 2.0 version of the app and oversee the further development, and I look forward to be able to dive into the code.",
          highlights: [
            "React",
            "React Native",
            "Graphql",
            "POSTgreSQL",
            "Figma",
          ],
          icon: e.forwardRef(function (t, n) {
            return e.createElement(
              "svg",
              Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  strokeWidth: 1.5,
                  stroke: "currentColor",
                  "aria-hidden": "true",
                  ref: n,
                },
                t
              ),
              e.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3",
              })
            )
          }),
          imageSrc: "./images/yoodlize.png",
          imageSrc2: "./images.yoodlize.png",
          imageAlt: "screenshot of plan my date app",
          version: { name: "2.2.1", date: "Aug, 2022" },
          click: "yoodlize",
        },
      ]
      function vt() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n]
        return t.filter(Boolean).join(" ")
      }
      function gt() {
        var t = (0, e.useContext)(s).setCurrentPage
        return (0, o.jsx)("div", {
          className: "bg-gray-50 sticky top-0 z-40",
          children: (0, o.jsxs)(Ie, {
            className: "relative bg-white shadow",
            children: [
              (0, o.jsx)("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6",
                children: (0, o.jsxs)("div", {
                  className:
                    "flex justify-between items-center py-6 md:justify-start md:space-x-10",
                  children: [
                    (0, o.jsx)("div", {
                      className: "flex justify-start lg:w-0 lg:flex-1",
                      children: (0, o.jsx)("a", {
                        onClick: function () {
                          t("about")
                        },
                        children: (0, o.jsxs)("h1", {
                          className: "text-xl md:text-3xl text-red-700",
                          children: [" ", "Natalie Fairbourne Portfolio"],
                        }),
                      }),
                    }),
                    (0, o.jsx)("div", {
                      className: "-mr-2 -my-2 md:hidden",
                      children: (0, o.jsxs)(Ie.Button, {
                        className:
                          "bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500",
                        children: [
                          (0, o.jsx)("span", {
                            className: "sr-only",
                            children: "Open menu",
                          }),
                          (0, o.jsx)(dt, {
                            className: "h-6 w-6",
                            "aria-hidden": "true",
                          }),
                        ],
                      }),
                    }),
                    (0, o.jsxs)(Ie.Group, {
                      as: "nav",
                      className: "hidden md:flex space-x-10",
                      children: [
                        (0, o.jsx)(Ie, {
                          className: "relative",
                          children: function (n) {
                            var r = n.open
                            return (0, o.jsxs)(o.Fragment, {
                              children: [
                                (0, o.jsxs)(Ie.Button, {
                                  className: vt(
                                    r ? "text-gray-900" : "text-gray-500",
                                    "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                  ),
                                  children: [
                                    (0, o.jsx)("span", {
                                      children: "My Projects",
                                    }),
                                    (0, o.jsx)(mt, {
                                      className: vt(
                                        r ? "text-gray-600" : "text-gray-400",
                                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                                      ),
                                      "aria-hidden": "true",
                                    }),
                                  ],
                                }),
                                (0, o.jsx)(ct, {
                                  as: e.Fragment,
                                  enter: "transition ease-out duration-200",
                                  enterFrom: "opacity-0 translate-y-1",
                                  enterTo: "opacity-100 translate-y-0",
                                  leave: "transition ease-in duration-150",
                                  leaveFrom: "opacity-100 translate-y-0",
                                  leaveTo: "opacity-0 translate-y-1",
                                  children: (0, o.jsx)(Ie.Panel, {
                                    className:
                                      "absolute -ml-4 mt-3 transform z-10 px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2",
                                    children: (0, o.jsxs)("div", {
                                      className:
                                        "rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden",
                                      children: [
                                        (0, o.jsx)("div", {
                                          className:
                                            "relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8",
                                          children: ht.map(function (e) {
                                            return (0, o.jsxs)(
                                              "a",
                                              {
                                                onClick: function () {
                                                  t(e.click)
                                                },
                                                className:
                                                  "-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50",
                                                children: [
                                                  (0, o.jsx)(e.icon, {
                                                    className:
                                                      "flex-shrink-0 h-6 w-6 text-red-600",
                                                    "aria-hidden": "true",
                                                  }),
                                                  (0, o.jsxs)("div", {
                                                    className: "ml-4",
                                                    children: [
                                                      (0, o.jsx)("p", {
                                                        className:
                                                          "text-base font-medium text-gray-900",
                                                        children: e.name,
                                                      }),
                                                      (0, o.jsx)("p", {
                                                        className:
                                                          "mt-1 text-sm text-gray-500",
                                                        children: e.description,
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              e.name
                                            )
                                          }),
                                        }),
                                        (0, o.jsx)("div", {
                                          className:
                                            "px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8",
                                          children: (0, o.jsx)("div", {
                                            className: "flow-root",
                                            children: (0, o.jsxs)("a", {
                                              onClick: function () {
                                                t("projects")
                                              },
                                              className:
                                                "-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100",
                                              children: [
                                                (0, o.jsx)(ft, {
                                                  className:
                                                    "flex-shrink-0 h-6 w-6 text-red-600",
                                                  "aria-hidden": "true",
                                                }),
                                                (0, o.jsx)("span", {
                                                  className: "ml-3",
                                                  children: "See All Projects",
                                                }),
                                              ],
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                              ],
                            })
                          },
                        }),
                        (0, o.jsx)("a", {
                          onClick: function () {
                            t("yoodlize")
                          },
                          className:
                            "text-base font-medium text-gray-500 hover:text-gray-900",
                          children: "Current Project",
                        }),
                        (0, o.jsx)("a", {
                          onClick: function () {
                            t("resume")
                          },
                          className:
                            "text-base font-medium text-gray-500 hover:text-gray-900",
                          children: "Resume",
                        }),
                        (0, o.jsx)("a", {
                          onClick: function () {
                            t("contact")
                          },
                          className:
                            "text-base font-medium text-gray-500 hover:text-gray-900",
                          children: "Contact Me",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, o.jsx)(ct, {
                as: e.Fragment,
                enter: "duration-200 ease-out",
                enterFrom: "opacity-0 scale-95",
                enterTo: "opacity-100 scale-100",
                leave: "duration-100 ease-in",
                leaveFrom: "opacity-100 scale-100",
                leaveTo: "opacity-0 scale-95",
                children: (0, o.jsx)(Ie.Panel, {
                  focus: !0,
                  className:
                    "absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden",
                  children: (0, o.jsxs)("div", {
                    className:
                      "rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50",
                    children: [
                      (0, o.jsxs)("div", {
                        className: "pt-5 pb-6 px-5",
                        children: [
                          (0, o.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [
                              (0, o.jsx)("div", {
                                children: (0, o.jsx)("h1", {
                                  children: " Natalie Fairbourne Portfolio",
                                }),
                              }),
                              (0, o.jsx)("div", {
                                className: "-mr-2",
                                children: (0, o.jsxs)(Ie.Button, {
                                  className:
                                    "bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500",
                                  children: [
                                    (0, o.jsx)("span", {
                                      className: "sr-only",
                                      children: "Close menu",
                                    }),
                                    (0, o.jsx)(pt, {
                                      className: "h-6 w-6",
                                      "aria-hidden": "true",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          (0, o.jsx)("div", {
                            className: "mt-6",
                            children: (0, o.jsx)("nav", {
                              className: "grid gap-y-8",
                              children: ht.map(function (e) {
                                return (0, o.jsxs)(
                                  "a",
                                  {
                                    onClick: function () {
                                      t(e.click)
                                    },
                                    className:
                                      "-m-3 p-3 flex items-center rounded-md hover:bg-gray-50",
                                    children: [
                                      (0, o.jsx)(e.icon, {
                                        className:
                                          "flex-shrink-0 h-6 w-6 text-red-600",
                                        "aria-hidden": "true",
                                      }),
                                      (0, o.jsx)("span", {
                                        className:
                                          "ml-3 text-base font-medium text-gray-900",
                                        children: e.name,
                                      }),
                                    ],
                                  },
                                  e.name
                                )
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, o.jsx)("div", {
                        className: "py-6 px-5 space-y-6",
                        children: (0, o.jsxs)("div", {
                          className: "grid grid-cols-2 gap-y-4 gap-x-8",
                          children: [
                            (0, o.jsx)("a", {
                              onClick: function () {
                                t("project")
                              },
                              className:
                                "text-base font-medium text-gray-900 hover:text-gray-700",
                              children: "Current Project",
                            }),
                            (0, o.jsx)("a", {
                              onClick: function () {
                                t("resume")
                              },
                              className:
                                "text-base font-medium pointer-events-auto text-gray-900 hover:text-gray-700",
                              children: "Resume",
                            }),
                            (0, o.jsx)("a", {
                              onClick: function () {
                                t("contact")
                              },
                              className:
                                "text-base font-medium text-gray-900 hover:text-gray-700",
                              children: "Contact Me",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        })
      }
      var yt = [
        {
          name: "Linkedin",
          href: "https://www.linkedin.com/in/natalie-fairbourne-51986685/",
          icon: function (e) {
            return (0, o.jsx)(
              "svg",
              h(
                h({ fill: "currentColor", viewBox: "0 0 24 24" }, e),
                {},
                {
                  children: (0, o.jsx)("path", {
                    fillRule: "evenodd",
                    d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
                  }),
                }
              )
            )
          },
        },
        {
          name: "Instagram",
          href: "https://www.instagram.com/nataliefairbourne/",
          icon: function (e) {
            return (0, o.jsx)(
              "svg",
              h(
                h({ fill: "currentColor", viewBox: "0 0 24 24" }, e),
                {},
                {
                  children: (0, o.jsx)("path", {
                    fillRule: "evenodd",
                    d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
                    clipRule: "evenodd",
                  }),
                }
              )
            )
          },
        },
        {
          name: "GitHub",
          href: "https://github.com/nadybee",
          icon: function (e) {
            return (0, o.jsx)(
              "svg",
              h(
                h({ fill: "currentColor", viewBox: "0 0 24 24" }, e),
                {},
                {
                  children: (0, o.jsx)("path", {
                    fillRule: "evenodd",
                    d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
                    clipRule: "evenodd",
                  }),
                }
              )
            )
          },
        },
      ]
      function bt() {
        return (0, o.jsx)("footer", {
          className: "bg-white fixed inset-x-0 bottom-0 z-30",
          children: (0, o.jsxs)("div", {
            className:
              "max-w-7xl mx-auto py-8 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8",
            children: [
              (0, o.jsx)("div", {
                className: "flex justify-center space-x-6 md:order-2",
                children: yt.map(function (e) {
                  return (0,
                  o.jsxs)("a", { href: e.href, target: "_blank", className: "text-gray-400 hover:text-gray-500", children: [(0, o.jsx)("span", { className: "sr-only", children: e.name }), (0, o.jsx)(e.icon, { className: "h-6 w-6", "aria-hidden": "true" })] }, e.name)
                }),
              }),
              (0, o.jsx)("div", {
                className: "mt-8 md:mt-0 md:order-1",
                children: (0, o.jsx)("p", {
                  className: "text-center text-base text-gray-400",
                  children: "\xa9 2022 Natalie Fairbourne All rights reserved.",
                }),
              }),
            ],
          }),
        })
      }
      function xt() {
        var t = (0, e.useContext)(s).setCurrentPage
        return (0, o.jsx)("main", {
          className: "lg:relative",
          children: (0, o.jsx)("div", {
            className:
              "mx-auto max-w-7xl w-full pt-8 pb-20 lg:py-48 lg:text-left",
            children: (0, o.jsxs)("div", {
              className: "px-4 lg:w-1/2 sm:px-8 xl:pr-16",
              children: [
                (0, o.jsx)("div", {
                  className:
                    "relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full",
                  children: (0, o.jsx)("img", {
                    className:
                      "absolute inset-0 w-full h-full object-cover object-right",
                    src: "/images/IMG_1153.jpg",
                    alt: "",
                  }),
                }),
                (0, o.jsx)("h1", {
                  className:
                    "text-2xl mt-2 tracking-tight font-bold text-gray-700  md:text-5xl",
                  children: "Let me introduce myself . . .",
                }),
                (0, o.jsxs)("p", {
                  className:
                    "mt-3 max-w-md mx-auto text-gray-600 text-base md:text-xl md:mt-5 md:max-w-3xl",
                  children: [
                    "My name is Natalie Fairbourne and I live in Orem, Utah. I am a software developer in training at the University of Utah Full Stack Bootcamp. I am the co-founder and CPO of Yoodlize, a peer-to-peer marketplace where you can rent anything. I oversee the platform and I designed the majority of the app. My motivation to learn to code is to be more hands on in continued development of Yoodlize.",
                    (0, o.jsx)("br", {}),
                    "I also have a food services company called Bee's Kitchen. I have three almost grown children, two 100 lb. dogs, and a husband who is also my co-founder. I am about 500 hrs into the 10,000 hours it takes to become a master software engineer!",
                  ],
                }),
                (0, o.jsxs)("div", {
                  className: "mt-10 sm:flex sm:justify-center lg:justify-start",
                  children: [
                    (0, o.jsx)("div", {
                      className: "rounded-md shadow",
                      children: (0, o.jsx)("a", {
                        onClick: function () {
                          t("projects")
                        },
                        className:
                          "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10",
                        children: "See Projects",
                      }),
                    }),
                    (0, o.jsx)("div", {
                      className: "mt-3 rounded-md shadow sm:mt-0 sm:ml-3",
                      children: (0, o.jsx)("a", {
                        onClick: function () {
                          t("contact")
                        },
                        className:
                          "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10",
                        children: "Contact Me",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        })
      }
      var wt = e.forwardRef(function (t, n) {
        return e.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 1.5,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: n,
            },
            t
          ),
          e.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z",
          })
        )
      })
      var kt = e.forwardRef(function (t, n) {
          return e.createElement(
            "svg",
            Object.assign(
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                stroke: "currentColor",
                "aria-hidden": "true",
                ref: n,
              },
              t
            ),
            e.createElement("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
            })
          )
        }),
        St = { _origin: "https://api.emailjs.com" },
        Et = function (e, t, n) {
          if (!e)
            throw "The user ID is required. Visit https://dashboard.emailjs.com/admin/integration"
          if (!t)
            throw "The service ID is required. Visit https://dashboard.emailjs.com/admin"
          if (!n)
            throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"
          return !0
        }
      function jt(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n]
          ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r)
        }
      }
      function Nt(e, t, n) {
        return (
          t && jt(e.prototype, t),
          n && jt(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        )
      }
      var Ct = Nt(function e(t) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function")
          })(this, e),
            (this.status = t.status),
            (this.text = t.responseText)
        }),
        Pt = function (e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
          return new Promise(function (r, a) {
            var l = new XMLHttpRequest()
            l.addEventListener("load", function (e) {
              var t = e.target,
                n = new Ct(t)
              200 === n.status || "OK" === n.text ? r(n) : a(n)
            }),
              l.addEventListener("error", function (e) {
                var t = e.target
                a(new Ct(t))
              }),
              l.open("POST", St._origin + e, !0),
              Object.keys(n).forEach(function (e) {
                l.setRequestHeader(e, n[e])
              }),
              l.send(t)
          })
        },
        _t = function (e, t, n, r) {
          var a = r || St._userID
          Et(a, e, t)
          var l = {
            lib_version: "3.2.0",
            user_id: a,
            service_id: e,
            template_id: t,
            template_params: n,
          }
          return Pt("/api/v1.0/email/send", JSON.stringify(l), {
            "Content-type": "application/json",
          })
        }
      function Tt(t, n) {
        var r = (0, e.useRef)([]),
          a = L(t)
        ;(0, e.useEffect)(function () {
          var e,
            t = f(n.entries())
          try {
            for (t.s(); !(e = t.n()).done; ) {
              var o = l(e.value, 2),
                i = o[0],
                u = o[1]
              if (r.current[i] !== u) {
                var s = a(n)
                return (r.current = n), s
              }
            }
          } catch (c) {
            t.e(c)
          } finally {
            t.f()
          }
        }, [a].concat(c(n)))
      }
      var Lt = ["initialFocus", "containers", "features"],
        Ot = (function (e) {
          return (
            (e[(e.None = 1)] = "None"),
            (e[(e.InitialFocus = 2)] = "InitialFocus"),
            (e[(e.TabLock = 4)] = "TabLock"),
            (e[(e.FocusLock = 8)] = "FocusLock"),
            (e[(e.RestoreFocus = 16)] = "RestoreFocus"),
            (e[(e.All = 30)] = "All"),
            e
          )
        })(Ot || {}),
        zt = Object.assign(
          N(function (t, n) {
            var r = (0, e.useRef)(null),
              a = F(r, n),
              l = t.initialFocus,
              o = t.containers,
              i = t.features,
              u = void 0 === i ? 30 : i,
              s = d(t, Lt)
            I() || (u = 1)
            var c = ce(r)
            !(function (t, n) {
              var r = t.ownerDocument,
                a = (0, e.useRef)(null)
              de(
                null == r ? void 0 : r.defaultView,
                "focusout",
                function (e) {
                  !n || a.current || (a.current = e.target)
                },
                !0
              ),
                Tt(
                  function () {
                    n ||
                      ((null == r ? void 0 : r.activeElement) ===
                        (null == r ? void 0 : r.body) && X(a.current),
                      (a.current = null))
                  },
                  [n]
                )
              var l = (0, e.useRef)(!1)
              ;(0, e.useEffect)(function () {
                return (
                  (l.current = !1),
                  function () {
                    ;(l.current = !0),
                      De(function () {
                        !l.current || (X(a.current), (a.current = null))
                      })
                  }
                )
              }, [])
            })({ ownerDocument: c }, Boolean(16 & u))
            var m = (function (t, n) {
              var r = t.ownerDocument,
                a = t.container,
                l = t.initialFocus,
                o = (0, e.useRef)(null)
              return (
                Tt(
                  function () {
                    if (n) {
                      var e = a.current
                      if (e) {
                        var t = null == r ? void 0 : r.activeElement
                        if (null != l && l.current) {
                          if ((null == l ? void 0 : l.current) === t)
                            return void (o.current = t)
                        } else if (e.contains(t)) return void (o.current = t)
                        null != l && l.current
                          ? X(l.current)
                          : ne(e, Q.First) === q.Error &&
                            console.warn(
                              "There are no focusable elements inside the <FocusTrap />"
                            ),
                          (o.current = null == r ? void 0 : r.activeElement)
                      }
                    }
                  },
                  [n]
                ),
                o
              )
            })(
              { ownerDocument: c, container: r, initialFocus: l },
              Boolean(2 & u)
            )
            !(function (e, t) {
              var n = e.ownerDocument,
                r = e.container,
                a = e.containers,
                l = e.previousActiveElement,
                o = Ae()
              de(
                null == n ? void 0 : n.defaultView,
                "focus",
                function (e) {
                  if (t && o.current) {
                    var n = new Set(null == a ? void 0 : a.current)
                    n.add(r)
                    var i = l.current
                    if (i) {
                      var u = e.target
                      u && u instanceof HTMLElement
                        ? (function (e, t) {
                            var n,
                              r,
                              a = f(e)
                            try {
                              for (a.s(); !(r = a.n()).done; ) {
                                if (
                                  null != (n = r.value.current) &&
                                  n.contains(t)
                                )
                                  return !0
                              }
                            } catch (l) {
                              a.e(l)
                            } finally {
                              a.f()
                            }
                            return !1
                          })(n, u)
                          ? ((l.current = u), X(u))
                          : (e.preventDefault(), e.stopPropagation(), X(i))
                        : X(l.current)
                    }
                  }
                },
                !0
              )
            })(
              {
                ownerDocument: c,
                container: r,
                containers: o,
                previousActiveElement: m,
              },
              Boolean(8 & u)
            )
            var h = ve(),
              g = L(function () {
                var e,
                  t = r.current
                !t ||
                  v(
                    h.current,
                    (p((e = {}), he.Forwards, function () {
                      return ne(t, Q.First)
                    }),
                    p(e, he.Backwards, function () {
                      return ne(t, Q.Last)
                    }),
                    e)
                  )
              }),
              y = { ref: a }
            return e.createElement(
              e.Fragment,
              null,
              Boolean(4 & u) &&
                e.createElement(me, {
                  as: "button",
                  type: "button",
                  onFocus: g,
                  features: pe.Focusable,
                }),
              S({
                ourProps: y,
                theirProps: s,
                defaultTag: "div",
                name: "FocusTrap",
              }),
              Boolean(4 & u) &&
                e.createElement(me, {
                  as: "button",
                  type: "button",
                  onFocus: g,
                  features: pe.Focusable,
                })
            )
          }),
          { features: Ot }
        )
      var Ft = new Set(),
        Mt = new Map()
      function Rt(e) {
        e.setAttribute("aria-hidden", "true"), (e.inert = !0)
      }
      function It(e) {
        var t = Mt.get(e)
        !t ||
          (null === t["aria-hidden"]
            ? e.removeAttribute("aria-hidden")
            : e.setAttribute("aria-hidden", t["aria-hidden"]),
          (e.inert = t.inert))
      }
      var Dt = n(164),
        At = (0, e.createContext)(!1)
      function Bt() {
        return (0, e.useContext)(At)
      }
      function Ut(t) {
        return e.createElement(At.Provider, { value: t.force }, t.children)
      }
      var Ht = ["target"]
      var Vt = e.Fragment,
        Wt = N(function (t, n) {
          var r = t,
            a = (0, e.useRef)(null),
            o = F(
              z(function (e) {
                a.current = e
              }),
              n
            ),
            i = ce(a),
            u = (function (t) {
              var n = Bt(),
                r = (0, e.useContext)(Qt),
                a = ce(t),
                o = (0, e.useState)(function () {
                  if ((!n && null !== r) || "undefined" == typeof window)
                    return null
                  var e =
                    null == a
                      ? void 0
                      : a.getElementById("headlessui-portal-root")
                  if (e) return e
                  if (null === a) return null
                  var t = a.createElement("div")
                  return (
                    t.setAttribute("id", "headlessui-portal-root"),
                    a.body.appendChild(t)
                  )
                }),
                i = l(o, 2),
                u = i[0],
                s = i[1]
              return (
                (0, e.useEffect)(
                  function () {
                    null !== u &&
                      ((null != a && a.body.contains(u)) ||
                        null == a ||
                        a.body.appendChild(u))
                  },
                  [u, a]
                ),
                (0, e.useEffect)(
                  function () {
                    n || (null !== r && s(r.current))
                  },
                  [r, s, n]
                ),
                u
              )
            })(a),
            s = (0, e.useState)(function () {
              var e
              return "undefined" == typeof window
                ? null
                : null != (e = null == i ? void 0 : i.createElement("div"))
                ? e
                : null
            }),
            c = l(s, 1)[0],
            d = I(),
            f = (0, e.useRef)(!1)
          return (
            _(
              function () {
                if (((f.current = !1), u && c))
                  return (
                    u.contains(c) ||
                      (c.setAttribute("data-headlessui-portal", ""),
                      u.appendChild(c)),
                    function () {
                      ;(f.current = !0),
                        De(function () {
                          var e
                          !f.current ||
                            !u ||
                            !c ||
                            (u.removeChild(c),
                            u.childNodes.length <= 0 &&
                              (null == (e = u.parentElement) ||
                                e.removeChild(u)))
                        })
                    }
                  )
              },
              [u, c]
            ),
            d && u && c
              ? (0, Dt.createPortal)(
                  S({
                    ourProps: { ref: o },
                    theirProps: r,
                    defaultTag: Vt,
                    name: "Portal",
                  }),
                  c
                )
              : null
          )
        }),
        $t = e.Fragment,
        Qt = (0, e.createContext)(null),
        qt = N(function (t, n) {
          var r = t.target,
            a = d(t, Ht),
            l = { ref: F(n) }
          return e.createElement(
            Qt.Provider,
            { value: r },
            S({
              ourProps: l,
              theirProps: a,
              defaultTag: $t,
              name: "Popover.Group",
            })
          )
        }),
        Yt = Object.assign(Wt, { Group: qt }),
        Kt = (0, e.createContext)(null)
      function Gt() {
        var t = (0, e.useContext)(Kt)
        if (null === t) {
          var n = new Error(
            "You used a <Description /> component, but it is not inside a relevant parent."
          )
          throw (Error.captureStackTrace && Error.captureStackTrace(n, Gt), n)
        }
        return t
      }
      function Jt() {
        var t = l((0, e.useState)([]), 2),
          n = t[0],
          r = t[1]
        return [
          n.length > 0 ? n.join(" ") : void 0,
          (0, e.useMemo)(
            function () {
              return function (t) {
                var n = L(function (e) {
                    return (
                      r(function (t) {
                        return [].concat(c(t), [e])
                      }),
                      function () {
                        return r(function (t) {
                          var n = t.slice(),
                            r = n.indexOf(e)
                          return -1 !== r && n.splice(r, 1), n
                        })
                      }
                    )
                  }),
                  a = (0, e.useMemo)(
                    function () {
                      return {
                        register: n,
                        slot: t.slot,
                        name: t.name,
                        props: t.props,
                      }
                    },
                    [n, t.slot, t.name, t.props]
                  )
                return e.createElement(Kt.Provider, { value: a }, t.children)
              }
            },
            [r]
          ),
        ]
      }
      var Xt = N(function (e, t) {
          var n = Gt(),
            r = "headlessui-description-".concat(B()),
            a = F(t)
          _(
            function () {
              return n.register(r)
            },
            [r, n.register]
          )
          var l = e
          return S({
            ourProps: h(h({ ref: a }, n.props), {}, { id: r }),
            theirProps: l,
            slot: n.slot || {},
            defaultTag: "p",
            name: n.name || "Description",
          })
        }),
        Zt = (0, e.createContext)(function () {})
      Zt.displayName = "StackContext"
      var en = (function (e) {
        return (e[(e.Add = 0)] = "Add"), (e[(e.Remove = 1)] = "Remove"), e
      })(en || {})
      function tn(t) {
        var n = t.children,
          r = t.onUpdate,
          a = t.type,
          l = t.element,
          o = (0, e.useContext)(Zt),
          i = L(function () {
            null == r || r.apply(void 0, arguments), o.apply(void 0, arguments)
          })
        return (
          _(
            function () {
              return (
                i(0, a, l),
                function () {
                  return i(1, a, l)
                }
              )
            },
            [i, a, l]
          ),
          e.createElement(Zt.Provider, { value: i }, n)
        )
      }
      var nn = ["open", "onClose", "initialFocus", "__demoMode"],
        rn = (function (e) {
          return (e[(e.Open = 0)] = "Open"), (e[(e.Closed = 1)] = "Closed"), e
        })(rn || {}),
        an = (function (e) {
          return (e[(e.SetTitleId = 0)] = "SetTitleId"), e
        })(an || {}),
        ln = p({}, 0, function (e, t) {
          return e.titleId === t.id ? e : h(h({}, e), {}, { titleId: t.id })
        }),
        on = (0, e.createContext)(null)
      function un(t) {
        var n = (0, e.useContext)(on)
        if (null === n) {
          var r = new Error(
            "<".concat(t, " /> is missing a parent <Dialog /> component.")
          )
          throw (Error.captureStackTrace && Error.captureStackTrace(r, un), r)
        }
        return n
      }
      function sn(e, t) {
        return v(t.type, ln, e, t)
      }
      on.displayName = "DialogContext"
      var cn = w.RenderStrategy | w.Static,
        dn = N(function (t, n) {
          var r,
            a = t.open,
            o = t.onClose,
            i = t.initialFocus,
            u = t.__demoMode,
            s = void 0 !== u && u,
            m = d(t, nn),
            h = l((0, e.useState)(0), 2),
            g = h[0],
            y = h[1],
            b = le()
          void 0 === a &&
            null !== b &&
            (a = v(b, (p((r = {}), ae.Open, !0), p(r, ae.Closed, !1), r)))
          var x = (0, e.useRef)(new Set()),
            w = (0, e.useRef)(null),
            k = F(w, n),
            E = (0, e.useRef)(null),
            j = ce(w),
            N = t.hasOwnProperty("open") || null !== b,
            C = t.hasOwnProperty("onClose")
          if (!N && !C)
            throw new Error(
              "You have to provide an `open` and an `onClose` prop to the `Dialog` component."
            )
          if (!N)
            throw new Error(
              "You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop."
            )
          if (!C)
            throw new Error(
              "You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop."
            )
          if ("boolean" != typeof a)
            throw new Error(
              "You provided an `open` prop to the `Dialog`, but the value is not a boolean. Received: ".concat(
                a
              )
            )
          if ("function" != typeof o)
            throw new Error(
              "You provided an `onClose` prop to the `Dialog`, but the value is not a function. Received: ".concat(
                o
              )
            )
          var P = a ? 0 : 1,
            T = l(
              (0, e.useReducer)(sn, {
                titleId: null,
                descriptionId: null,
                panelRef: (0, e.createRef)(),
              }),
              2
            ),
            O = T[0],
            z = T[1],
            M = L(function () {
              return o(!1)
            }),
            R = L(function (e) {
              return z({ type: 0, id: e })
            }),
            D = !!I() && !s && 0 === P,
            A = g > 1,
            H = null !== (0, e.useContext)(on),
            W = A ? "parent" : "leaf"
          ;(function (e) {
            var t =
              !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
            _(
              function () {
                if (t && e.current) {
                  var n = e.current,
                    r = V(n)
                  if (r) {
                    Ft.add(n)
                    var a,
                      l = f(Mt.keys())
                    try {
                      for (l.s(); !(a = l.n()).done; ) {
                        var o = a.value
                        o.contains(n) && (It(o), Mt.delete(o))
                      }
                    } catch (i) {
                      l.e(i)
                    } finally {
                      l.f()
                    }
                    return (
                      r.querySelectorAll("body > *").forEach(function (e) {
                        if (e instanceof HTMLElement) {
                          var t,
                            n = f(Ft)
                          try {
                            for (n.s(); !(t = n.n()).done; ) {
                              var r = t.value
                              if (e.contains(r)) return
                            }
                          } catch (i) {
                            n.e(i)
                          } finally {
                            n.f()
                          }
                          1 === Ft.size &&
                            (Mt.set(e, {
                              "aria-hidden": e.getAttribute("aria-hidden"),
                              inert: e.inert,
                            }),
                            Rt(e))
                        }
                      }),
                      function () {
                        if ((Ft.delete(n), Ft.size > 0))
                          r.querySelectorAll("body > *").forEach(function (e) {
                            if (e instanceof HTMLElement && !Mt.has(e)) {
                              var t,
                                n = f(Ft)
                              try {
                                for (n.s(); !(t = n.n()).done; ) {
                                  var r = t.value
                                  if (e.contains(r)) return
                                }
                              } catch (i) {
                                n.e(i)
                              } finally {
                                n.f()
                              }
                              Mt.set(e, {
                                "aria-hidden": e.getAttribute("aria-hidden"),
                                inert: e.inert,
                              }),
                                Rt(e)
                            }
                          })
                        else {
                          var e,
                            t = f(Mt.keys())
                          try {
                            for (t.s(); !(e = t.n()).done; ) {
                              var a = e.value
                              It(a), Mt.delete(a)
                            }
                          } catch (i) {
                            t.e(i)
                          } finally {
                            t.f()
                          }
                        }
                      }
                    )
                  }
                }
              },
              [t]
            )
          })(w, !!A && D),
            se(
              function () {
                var e, t
                return [].concat(
                  c(
                    Array.from(
                      null !=
                        (e =
                          null == j
                            ? void 0
                            : j.querySelectorAll(
                                "body > *, [data-headlessui-portal]"
                              ))
                        ? e
                        : []
                    ).filter(function (e) {
                      return !(
                        !(e instanceof HTMLElement) ||
                        e.contains(E.current) ||
                        (O.panelRef.current && e.contains(O.panelRef.current))
                      )
                    })
                  ),
                  [null != (t = O.panelRef.current) ? t : w.current]
                )
              },
              M,
              D && !A
            ),
            de(null == j ? void 0 : j.defaultView, "keydown", function (e) {
              e.defaultPrevented ||
                (e.key === U.Escape &&
                  0 === P &&
                  (A || (e.preventDefault(), e.stopPropagation(), M())))
            }),
            (0, e.useEffect)(
              function () {
                var e
                if (0 === P && !H) {
                  var t = V(w)
                  if (t) {
                    var n = t.documentElement,
                      r = null != (e = t.defaultView) ? e : window,
                      a = n.style.overflow,
                      l = n.style.paddingRight,
                      o = r.innerWidth - n.clientWidth
                    if (((n.style.overflow = "hidden"), o > 0)) {
                      var i = o - (n.clientWidth - n.offsetWidth)
                      n.style.paddingRight = "".concat(i, "px")
                    }
                    return function () {
                      ;(n.style.overflow = a), (n.style.paddingRight = l)
                    }
                  }
                }
              },
              [P, H]
            ),
            (0, e.useEffect)(
              function () {
                if (0 === P && w.current) {
                  var e = new IntersectionObserver(function (e) {
                    var t,
                      n = f(e)
                    try {
                      for (n.s(); !(t = n.n()).done; ) {
                        var r = t.value
                        0 === r.boundingClientRect.x &&
                          0 === r.boundingClientRect.y &&
                          0 === r.boundingClientRect.width &&
                          0 === r.boundingClientRect.height &&
                          M()
                      }
                    } catch (a) {
                      n.e(a)
                    } finally {
                      n.f()
                    }
                  })
                  return (
                    e.observe(w.current),
                    function () {
                      return e.disconnect()
                    }
                  )
                }
              },
              [P, w, M]
            )
          var $ = l(Jt(), 2),
            Q = $[0],
            q = $[1],
            Y = "headlessui-dialog-".concat(B()),
            K = (0, e.useMemo)(
              function () {
                return [{ dialogState: P, close: M, setTitleId: R }, O]
              },
              [P, O, M, R]
            ),
            G = (0, e.useMemo)(
              function () {
                return { open: 0 === P }
              },
              [P]
            ),
            J = {
              ref: k,
              id: Y,
              role: "dialog",
              "aria-modal": 0 === P || void 0,
              "aria-labelledby": O.titleId,
              "aria-describedby": Q,
            }
          return e.createElement(
            tn,
            {
              type: "Dialog",
              element: w,
              onUpdate: L(function (e, t, n) {
                var r
                "Dialog" === t &&
                  v(
                    e,
                    (p((r = {}), en.Add, function () {
                      x.current.add(n),
                        y(function (e) {
                          return e + 1
                        })
                    }),
                    p(r, en.Remove, function () {
                      x.current.add(n),
                        y(function (e) {
                          return e - 1
                        })
                    }),
                    r)
                  )
              }),
            },
            e.createElement(
              Ut,
              { force: !0 },
              e.createElement(
                Yt,
                null,
                e.createElement(
                  on.Provider,
                  { value: K },
                  e.createElement(
                    Yt.Group,
                    { target: w },
                    e.createElement(
                      Ut,
                      { force: !1 },
                      e.createElement(
                        q,
                        { slot: G, name: "Dialog.Description" },
                        e.createElement(
                          zt,
                          {
                            initialFocus: i,
                            containers: x,
                            features: D
                              ? v(W, {
                                  parent: zt.features.RestoreFocus,
                                  leaf:
                                    zt.features.All & ~zt.features.FocusLock,
                                })
                              : zt.features.None,
                          },
                          S({
                            ourProps: J,
                            theirProps: m,
                            slot: G,
                            defaultTag: "div",
                            features: cn,
                            visible: 0 === P,
                            name: "Dialog",
                          })
                        )
                      )
                    )
                  )
                )
              )
            ),
            e.createElement(me, { features: pe.Hidden, ref: E })
          )
        }),
        fn = N(function (t, n) {
          var r = l(un("Dialog.Overlay"), 1)[0],
            a = r.dialogState,
            o = r.close,
            i = F(n),
            u = "headlessui-dialog-overlay-".concat(B()),
            s = L(function (e) {
              if (e.target === e.currentTarget) {
                if (H(e.currentTarget)) return e.preventDefault()
                e.preventDefault(), e.stopPropagation(), o()
              }
            })
          return S({
            ourProps: { ref: i, id: u, "aria-hidden": !0, onClick: s },
            theirProps: t,
            slot: (0, e.useMemo)(
              function () {
                return { open: 0 === a }
              },
              [a]
            ),
            defaultTag: "div",
            name: "Dialog.Overlay",
          })
        }),
        pn = N(function (t, n) {
          var r = l(un("Dialog.Backdrop"), 2),
            a = r[0].dialogState,
            o = r[1],
            i = F(n),
            u = "headlessui-dialog-backdrop-".concat(B())
          ;(0, e.useEffect)(
            function () {
              if (null === o.panelRef.current)
                throw new Error(
                  "A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing."
                )
            },
            [o.panelRef]
          )
          var s = (0, e.useMemo)(
            function () {
              return { open: 0 === a }
            },
            [a]
          )
          return e.createElement(
            Ut,
            { force: !0 },
            e.createElement(
              Yt,
              null,
              S({
                ourProps: { ref: i, id: u, "aria-hidden": !0 },
                theirProps: t,
                slot: s,
                defaultTag: "div",
                name: "Dialog.Backdrop",
              })
            )
          )
        }),
        mn = N(function (t, n) {
          var r = l(un("Dialog.Panel"), 2),
            a = r[0].dialogState,
            o = F(n, r[1].panelRef),
            i = "headlessui-dialog-panel-".concat(B()),
            u = (0, e.useMemo)(
              function () {
                return { open: 0 === a }
              },
              [a]
            ),
            s = L(function (e) {
              e.stopPropagation()
            })
          return S({
            ourProps: { ref: o, id: i, onClick: s },
            theirProps: t,
            slot: u,
            defaultTag: "div",
            name: "Dialog.Panel",
          })
        }),
        hn = N(function (t, n) {
          var r = l(un("Dialog.Title"), 1)[0],
            a = r.dialogState,
            o = r.setTitleId,
            i = "headlessui-dialog-title-".concat(B()),
            u = F(n)
          ;(0, e.useEffect)(
            function () {
              return (
                o(i),
                function () {
                  return o(null)
                }
              )
            },
            [i, o]
          )
          var s = (0, e.useMemo)(
            function () {
              return { open: 0 === a }
            },
            [a]
          )
          return S({
            ourProps: { ref: u, id: i },
            theirProps: t,
            slot: s,
            defaultTag: "h2",
            name: "Dialog.Title",
          })
        }),
        vn = Object.assign(dn, {
          Backdrop: pn,
          Panel: mn,
          Overlay: fn,
          Title: hn,
          Description: Xt,
        })
      var gn = e.forwardRef(function (t, n) {
        return e.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 1.5,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: n,
            },
            t
          ),
          e.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M4.5 12.75l6 6 9-13.5",
          })
        )
      })
      function yn() {
        var t = l((0, e.useState)(!0), 2),
          n = t[0],
          r = t[1],
          a = (0, e.useContext)(s).setCurrentPage
        return (0, o.jsx)(ct.Root, {
          show: n,
          as: e.Fragment,
          children: (0, o.jsxs)(vn, {
            as: "div",
            className: "relative z-30",
            onClose: r,
            children: [
              (0, o.jsx)(ct.Child, {
                as: e.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: (0, o.jsx)("div", {
                  className:
                    "fixed inset-0 bg-warm-gray-400 bg-opacity-75 transition-opacity",
                }),
              }),
              (0, o.jsx)("div", {
                className: "fixed inset-0 z-10 overflow-y-auto",
                children: (0, o.jsx)("div", {
                  className:
                    "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",
                  children: (0, o.jsx)(ct.Child, {
                    as: e.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom:
                      "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                    enterTo: "opacity-100 translate-y-0 sm:scale-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
                    leaveTo:
                      "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                    children: (0, o.jsxs)(vn.Panel, {
                      className:
                        "relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6",
                      children: [
                        (0, o.jsxs)("div", {
                          children: [
                            (0, o.jsx)("div", {
                              className:
                                "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100",
                              children: (0, o.jsx)(gn, {
                                className: "h-6 w-6 text-green-600",
                                "aria-hidden": "true",
                              }),
                            }),
                            (0, o.jsxs)("div", {
                              className: "mt-3 text-center sm:mt-5",
                              children: [
                                (0, o.jsx)(vn.Title, {
                                  as: "h3",
                                  className:
                                    "text-lg font-medium leading-6 text-gray-900",
                                  children: "Submitted!",
                                }),
                                (0, o.jsx)("div", {
                                  className: "mt-2",
                                  children: (0, o.jsx)("p", {
                                    className: "text-sm text-gray-500",
                                    children:
                                      "Thank you for reaching out, I will get right back to you!",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, o.jsx)("div", {
                          className: "mt-5 sm:mt-6",
                          children: (0, o.jsx)("button", {
                            type: "button",
                            className:
                              "inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:text-sm",
                            onClick: function () {
                              r(!1), a("about")
                            },
                            children: "Close",
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            ],
          }),
        })
      }
      function bn() {
        var t = (0, e.useContext)(s),
          n = t.setCurrentPage,
          r = t.setToSend,
          a = (t.setSubmit, t.submit),
          l = t.toSend,
          i = function (e) {
            r(h(h({}, l), {}, p({}, e.target.name, e.target.value)))
          }
        return (0, o.jsx)(o.Fragment, {
          children: a
            ? (0, o.jsx)(yn, {})
            : (0, o.jsxs)("main", {
                className: "",
                children: [
                  (0, o.jsx)("div", {
                    className: "bg-warm-gray-50",
                    children: (0, o.jsx)("div", {
                      className: " mt-8 md:py-24 lg:py-32",
                      children: (0, o.jsxs)("div", {
                        className:
                          "relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8",
                        children: [
                          (0, o.jsx)("h1", {
                            className:
                              "text-4xl font-bold tracking-tight text-gray-700 sm:text-5xl lg:text-6xl",
                            children: "I would love to hear from you!",
                          }),
                          (0, o.jsx)("p", {
                            className: "mt-6 text-xl text-gray-500 max-w-3xl",
                            children:
                              "Please fill out this form and I will get right back to you.",
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, o.jsxs)("section", {
                    className: "relative bg-white mt-8",
                    "aria-labelledby": "contact-heading",
                    children: [
                      (0, o.jsx)("div", {
                        className: "absolute w-full h-1/2 bg-warm-gray-50",
                        "aria-hidden": "true",
                      }),
                      (0, o.jsx)("div", {
                        className:
                          "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                      }),
                      (0, o.jsx)("div", {
                        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                        children: (0, o.jsxs)("div", {
                          className: "relative bg-white shadow-xl",
                          children: [
                            (0, o.jsx)("h2", {
                              id: "contact-heading",
                              className: "sr-only",
                              children: "Contact me",
                            }),
                            (0, o.jsxs)("div", {
                              className: "grid grid-cols-1 lg:grid-cols-3",
                              children: [
                                (0, o.jsxs)("div", {
                                  className:
                                    "relative overflow-hidden py-10 px-6 bg-gradient-to-b from-red-500 to-red-600 sm:px-10 xl:p-12",
                                  children: [
                                    (0, o.jsx)("div", {
                                      className:
                                        "absolute inset-0 pointer-events-none sm:hidden",
                                      "aria-hidden": "true",
                                      children: (0, o.jsxs)("svg", {
                                        className:
                                          "absolute inset-0 w-full h-full",
                                        width: 343,
                                        height: 388,
                                        viewBox: "0 0 343 388",
                                        fill: "none",
                                        preserveAspectRatio: "xMidYMid slice",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                          (0, o.jsx)("path", {
                                            d: "M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z",
                                            fill: "url(#linear1)",
                                            fillOpacity: ".1",
                                          }),
                                          (0, o.jsx)("defs", {
                                            children: (0, o.jsxs)(
                                              "linearGradient",
                                              {
                                                id: "linear1",
                                                x1: "254.553",
                                                y1: "107.554",
                                                x2: "961.66",
                                                y2: "814.66",
                                                gradientUnits: "userSpaceOnUse",
                                                children: [
                                                  (0, o.jsx)("stop", {
                                                    stopColor: "#fff",
                                                  }),
                                                  (0, o.jsx)("stop", {
                                                    offset: 1,
                                                    stopColor: "#fff",
                                                    stopOpacity: 0,
                                                  }),
                                                ],
                                              }
                                            ),
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, o.jsx)("div", {
                                      className:
                                        "hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden",
                                      "aria-hidden": "true",
                                      children: (0, o.jsxs)("svg", {
                                        className:
                                          "absolute inset-0 w-full h-full",
                                        width: 359,
                                        height: 339,
                                        viewBox: "0 0 359 339",
                                        fill: "none",
                                        preserveAspectRatio: "xMidYMid slice",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                          (0, o.jsx)("path", {
                                            d: "M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z",
                                            fill: "url(#linear2)",
                                            fillOpacity: ".1",
                                          }),
                                          (0, o.jsx)("defs", {
                                            children: (0, o.jsxs)(
                                              "linearGradient",
                                              {
                                                id: "linear2",
                                                x1: "192.553",
                                                y1: "28.553",
                                                x2: "899.66",
                                                y2: "735.66",
                                                gradientUnits: "userSpaceOnUse",
                                                children: [
                                                  (0, o.jsx)("stop", {
                                                    stopColor: "#fff",
                                                  }),
                                                  (0, o.jsx)("stop", {
                                                    offset: 1,
                                                    stopColor: "#fff",
                                                    stopOpacity: 0,
                                                  }),
                                                ],
                                              }
                                            ),
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, o.jsx)("div", {
                                      className:
                                        "hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block",
                                      "aria-hidden": "true",
                                      children: (0, o.jsxs)("svg", {
                                        className:
                                          "absolute inset-0 w-full h-full",
                                        width: 160,
                                        height: 678,
                                        viewBox: "0 0 160 678",
                                        fill: "none",
                                        preserveAspectRatio: "xMidYMid slice",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                          (0, o.jsx)("path", {
                                            d: "M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z",
                                            fill: "url(#linear3)",
                                            fillOpacity: ".1",
                                          }),
                                          (0, o.jsx)("defs", {
                                            children: (0, o.jsxs)(
                                              "linearGradient",
                                              {
                                                id: "linear3",
                                                x1: "192.553",
                                                y1: "325.553",
                                                x2: "899.66",
                                                y2: "1032.66",
                                                gradientUnits: "userSpaceOnUse",
                                                children: [
                                                  (0, o.jsx)("stop", {
                                                    stopColor: "#fff",
                                                  }),
                                                  (0, o.jsx)("stop", {
                                                    offset: 1,
                                                    stopColor: "#fff",
                                                    stopOpacity: 0,
                                                  }),
                                                ],
                                              }
                                            ),
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, o.jsx)("h4", {
                                      className:
                                        "mt-6 text-xl font-bold text-red-50 max-w-3xl",
                                      children: "Natalie Fairbourne",
                                    }),
                                    (0, o.jsxs)("dl", {
                                      className: "mt-8 space-y-6",
                                      children: [
                                        (0, o.jsx)("dt", {
                                          children: (0, o.jsx)("span", {
                                            className: "sr-only",
                                            children: "Phone number",
                                          }),
                                        }),
                                        (0, o.jsxs)("dd", {
                                          className:
                                            "flex text-base text-red-50",
                                          children: [
                                            (0, o.jsx)(wt, {
                                              className:
                                                "flex-shrink-0 w-6 h-6 text-red-200",
                                              "aria-hidden": "true",
                                            }),
                                            (0, o.jsx)("span", {
                                              className: "ml-3",
                                              children: "+1 (801)708-1016",
                                            }),
                                          ],
                                        }),
                                        (0, o.jsx)("dt", {
                                          children: (0, o.jsx)("span", {
                                            className: "sr-only",
                                            children: "Email",
                                          }),
                                        }),
                                        (0, o.jsxs)("dd", {
                                          className:
                                            "flex text-base text-red-50",
                                          children: [
                                            (0, o.jsx)(kt, {
                                              className:
                                                "flex-shrink-0 w-6 h-6 text-red-200",
                                              "aria-hidden": "true",
                                            }),
                                            (0, o.jsx)("span", {
                                              className: "ml-3",
                                              children: "natalie@yoodize.com",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, o.jsxs)("ul", {
                                      role: "list",
                                      className: "mt-8 flex space-x-12",
                                      children: [
                                        (0, o.jsx)("li", {
                                          children: (0, o.jsxs)("a", {
                                            className:
                                              "text-red-200 hover:text-red-100",
                                            href: "https://www.linkedin.com/in/natalie-fairbourne-51986685/",
                                            target: "_blank",
                                            children: [
                                              (0, o.jsx)("span", {
                                                className: "sr-only",
                                                children: "Linkedin",
                                              }),
                                              (0, o.jsx)("svg", {
                                                className: "w-7 h-7",
                                                "aria-hidden": "true",
                                                fill: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: (0, o.jsx)("path", {
                                                  fillRule: "evenodd",
                                                  d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
                                                  clipRule: "evenodd",
                                                }),
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, o.jsx)("li", {
                                          children: (0, o.jsxs)("a", {
                                            className:
                                              "text-red-200 hover:text-red-100",
                                            href: "https://www.instagram.com/nataliefairbourne/",
                                            target: "_blank",
                                            children: [
                                              (0, o.jsx)("span", {
                                                className: "sr-only",
                                                children: "Instagram",
                                              }),
                                              (0, o.jsx)("svg", {
                                                className: "w-7 h-7",
                                                "aria-hidden": "true",
                                                fill: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: (0, o.jsx)("path", {
                                                  d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
                                                }),
                                              }),
                                            ],
                                          }),
                                        }),
                                        (0, o.jsx)("li", {
                                          children: (0, o.jsxs)("a", {
                                            className:
                                              "text-red-200 hover:text-red-100",
                                            href: "https://github.com/nadybee",
                                            target: "_blank",
                                            children: [
                                              (0, o.jsx)("span", {
                                                className: "sr-only",
                                                children: "GitHub",
                                              }),
                                              (0, o.jsx)("svg", {
                                                className: "w-7 h-7",
                                                "aria-hidden": "true",
                                                fill: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: (0, o.jsx)("path", {
                                                  fillRule: "evenodd",
                                                  d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
                                                  clipRule: "evenodd",
                                                }),
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, o.jsxs)("div", {
                                  className:
                                    "py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12",
                                  children: [
                                    (0, o.jsx)("h3", {
                                      className:
                                        "text-lg font-medium text-warm-gray-900",
                                      children: "Send me a message",
                                    }),
                                    (0, o.jsxs)("form", {
                                      onSubmit: function (e) {
                                        e.preventDefault(),
                                          _t(
                                            "service_ao5t6sd",
                                            "template_kp2brax",
                                            l,
                                            "UPSAdBvAIZLu7AthK"
                                          )
                                            .then(function (e) {
                                              console.log(
                                                "SUCCESS!",
                                                e.status,
                                                e.text
                                              )
                                            })
                                            .then(function () {
                                              r({
                                                firstName: "",
                                                lastName: "",
                                                email: "",
                                                phone: "",
                                                subject: "",
                                                message: "",
                                              }),
                                                n("modal"),
                                                console.log(a)
                                            })
                                            .catch(function (e) {
                                              console.log("FAILED...", e)
                                            })
                                      },
                                      className:
                                        "mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8",
                                      children: [
                                        (0, o.jsxs)("div", {
                                          children: [
                                            (0, o.jsx)("label", {
                                              htmlFor: "first-name",
                                              className:
                                                "block text-sm font-medium text-warm-gray-900",
                                              children: "First name",
                                            }),
                                            (0, o.jsx)("div", {
                                              className: "mt-1",
                                              children: (0, o.jsx)("input", {
                                                type: "text",
                                                name: "firstName",
                                                id: "first-name",
                                                autoComplete: "given-name",
                                                className:
                                                  "py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-red-500 focus:border-red-500 border-warm-gray-300 rounded-md",
                                                value: l.firstName,
                                                onChange: i,
                                              }),
                                            }),
                                          ],
                                        }),
                                        (0, o.jsxs)("div", {
                                          children: [
                                            (0, o.jsx)("label", {
                                              htmlFor: "last-name",
                                              className:
                                                "block text-sm font-medium text-warm-gray-900",
                                              children: "Last name",
                                            }),
                                            (0, o.jsx)("div", {
                                              className: "mt-1",
                                              children: (0, o.jsx)("input", {
                                                type: "text",
                                                name: "lastName",
                                                id: "last-name",
                                                autoComplete: "family-name",
                                                className:
                                                  "py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-red-500 focus:border-red-500 border-warm-gray-300 rounded-md",
                                                value: l.lastName,
                                                onChange: i,
                                              }),
                                            }),
                                          ],
                                        }),
                                        (0, o.jsxs)("div", {
                                          children: [
                                            (0, o.jsx)("label", {
                                              htmlFor: "email",
                                              className:
                                                "block text-sm font-medium text-warm-gray-900",
                                              children: "Email",
                                            }),
                                            (0, o.jsx)("div", {
                                              className: "mt-1",
                                              children: (0, o.jsx)("input", {
                                                id: "email",
                                                name: "email",
                                                type: "email",
                                                autoComplete: "email",
                                                className:
                                                  "py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-red-500 focus:border-red-500 border-warm-gray-300 rounded-md",
                                                value: l.email,
                                                onChange: i,
                                              }),
                                            }),
                                          ],
                                        }),
                                        (0, o.jsxs)("div", {
                                          children: [
                                            (0, o.jsxs)("div", {
                                              className: "flex justify-between",
                                              children: [
                                                (0, o.jsx)("label", {
                                                  htmlFor: "phone",
                                                  className:
                                                    "block text-sm font-medium text-warm-gray-900",
                                                  children: "Phone",
                                                }),
                                                (0, o.jsx)("span", {
                                                  id: "phone-optional",
                                                  className:
                                                    "text-sm text-warm-gray-500",
                                                  children: "Optional",
                                                }),
                                              ],
                                            }),
                                            (0, o.jsx)("div", {
                                              className: "mt-1",
                                              children: (0, o.jsx)("input", {
                                                type: "text",
                                                name: "phone",
                                                id: "phone",
                                                autoComplete: "tel",
                                                className:
                                                  "py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-red-500 focus:border-red-500 border-warm-gray-300 rounded-md",
                                                "aria-describedby":
                                                  "phone-optional",
                                                value: l.phone,
                                                onChange: i,
                                              }),
                                            }),
                                          ],
                                        }),
                                        (0, o.jsxs)("div", {
                                          className: "sm:col-span-2",
                                          children: [
                                            (0, o.jsx)("label", {
                                              htmlFor: "subject",
                                              className:
                                                "block text-sm font-medium text-warm-gray-900",
                                              children: "Subject",
                                            }),
                                            (0, o.jsx)("div", {
                                              className: "mt-1",
                                              children: (0, o.jsx)("input", {
                                                type: "text",
                                                name: "subject",
                                                id: "subject",
                                                className:
                                                  "py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-red-500 focus:border-red-500 border-warm-gray-300 rounded-md",
                                                value: l.subject,
                                                onChange: i,
                                              }),
                                            }),
                                          ],
                                        }),
                                        (0, o.jsxs)("div", {
                                          className: "sm:col-span-2",
                                          children: [
                                            (0, o.jsxs)("div", {
                                              className: "flex justify-between",
                                              children: [
                                                (0, o.jsx)("label", {
                                                  htmlFor: "message",
                                                  className:
                                                    "block text-sm font-medium text-warm-gray-900",
                                                  children: "Message",
                                                }),
                                                (0, o.jsx)("span", {
                                                  id: "message-max",
                                                  className:
                                                    "text-sm text-warm-gray-500",
                                                  children:
                                                    "Max. 500 characters",
                                                }),
                                              ],
                                            }),
                                            (0, o.jsx)("div", {
                                              className: "mt-1",
                                              children: (0, o.jsx)("textarea", {
                                                id: "message",
                                                name: "message",
                                                rows: 4,
                                                className:
                                                  "py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-red-500 focus:border-red-500 border border-warm-gray-300 rounded-md",
                                                "aria-describedby":
                                                  "message-max",
                                                value: l.message,
                                                onChange: i,
                                              }),
                                            }),
                                          ],
                                        }),
                                        (0, o.jsx)("div", {
                                          className:
                                            "sm:col-span-2 sm:flex sm:justify-end",
                                          children: (0, o.jsx)("button", {
                                            type: "submit",
                                            className:
                                              "mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:w-auto",
                                            children: "Submit",
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
        })
      }
      function xn() {
        var t,
          n = (0, e.useContext)(s).currentPage
        return (
          "wedding" === n
            ? (t = ht[0])
            : "date" === n
            ? (t = ht[1])
            : "blackjack" === n
            ? (t = ht[2])
            : "weather" === n
            ? (t = ht[3])
            : "tech-blog" === n
            ? (t = ht[4])
            : "yoodlize" === n && (t = ht[5]),
          (0, o.jsx)("div", {
            className: "bg-white mt-10",
            children: (0, o.jsx)("div", {
              className: "mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8",
              children: (0, o.jsxs)("div", {
                className:
                  "lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16",
                children: [
                  (0, o.jsx)("div", {
                    className: "lg:row-end-1 lg:col-span-4",
                    children: (0, o.jsx)("div", {
                      className:
                        "aspect-w-4 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden drop-shadow-xl",
                      children: (0, o.jsx)("img", {
                        src: t.imageSrc,
                        alt: t.imageAlt,
                        className: "object-center object-cover",
                      }),
                    }),
                  }),
                  (0, o.jsxs)("div", {
                    className:
                      "max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3",
                    children: [
                      (0, o.jsx)("div", {
                        className: "flex flex-col-reverse",
                        children: (0, o.jsxs)("div", {
                          className: "mt-4",
                          children: [
                            (0, o.jsx)("h1", {
                              className:
                                "text-2xl font-bold tracking-tight text-gray-800 sm:text-3xl",
                              children: t.name,
                            }),
                            (0, o.jsx)("h2", {
                              id: "information-heading",
                              className: "sr-only",
                              children: "Product information",
                            }),
                            (0, o.jsxs)("p", {
                              className: "text-sm text-gray-500 mt-2",
                              children: [
                                "Version ",
                                t.version.name,
                                " (Updated",
                                " ",
                                (0, o.jsx)("time", {
                                  dateTime: t.version.datetime,
                                  children: t.version.date,
                                }),
                                ")",
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, o.jsx)("h3", {
                        className: "text-sm mt-4 font-medium text-gray-900",
                        children: "Description:",
                      }),
                      (0, o.jsx)("p", {
                        className: "text-gray-500 mt-6",
                        children: t.description,
                      }),
                      (0, o.jsx)("h3", {
                        className: "text-sm mt-4 font-medium text-gray-900",
                        children: "Method:",
                      }),
                      (0, o.jsx)("p", {
                        className: "text-gray-500 mt-6",
                        children: t.paragraph,
                      }),
                      (0, o.jsxs)("div", {
                        className: "border-t border-gray-200 mt-10 pt-10",
                        children: [
                          (0, o.jsx)("h3", {
                            className: "text-sm font-medium text-gray-900",
                            children: "What was used:",
                          }),
                          (0, o.jsx)("div", {
                            className: "mt-4 prose prose-sm text-gray-500",
                            children: (0, o.jsx)("ul", {
                              children: t.highlights.map(function (e) {
                                return (0, o.jsx)("li", { children: e }, e)
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, o.jsxs)("div", {
                        className:
                          "mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2",
                        children: [
                          (0, o.jsx)("a", {
                            className:
                              "w-full bg-red-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-red-500",
                            href: t.href,
                            target: "_blank",
                            children: "Deployed App",
                          }),
                          (0, o.jsx)("a", {
                            className:
                              "w-full bg-red-50 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-red-700 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-red-500",
                            href: t.github,
                            target: "_blank",
                            children: "GitHub",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          })
        )
      }
      function wn() {
        return (0, o.jsx)("div", {
          className: "bg-white lg:relative ",
          children: (0, o.jsxs)("div", {
            className: "relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8",
            children: [
              (0, o.jsx)("div", {
                className:
                  "hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen",
              }),
              (0, o.jsx)("div", {
                className:
                  "mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none",
                children: (0, o.jsxs)("div", {
                  children: [
                    (0, o.jsx)("h2", {
                      className: "text-lg text-red-700 font-semibold",
                      children: "Resume",
                    }),
                    (0, o.jsx)("h3", {
                      className:
                        "mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl",
                      children: "Natalie Pope Fairbourne",
                    }),
                    (0, o.jsx)("p", {
                      className:
                        "mt-2 text-base leading-8 font-light tracking-tight text-gray-900",
                      children: "natalie@yoodlize.com",
                    }),
                    (0, o.jsx)("p", {
                      className:
                        "text-base leading-8 font-light tracking-tight text-gray-900",
                      children: "801-708-1016",
                    }),
                  ],
                }),
              }),
              (0, o.jsxs)("div", {
                className: "mt-8 lg:grid lg:grid-cols-2 lg:gap-8",
                children: [
                  (0, o.jsxs)("div", {
                    className: "relative lg:row-start-1 lg:col-start-2",
                    children: [
                      (0, o.jsx)("svg", {
                        className:
                          "hidden lg:block absolute top-0 right-0 -mt-20 -mr-20",
                        width: 404,
                        height: 384,
                        fill: "none",
                        viewBox: "0 0 404 384",
                        "aria-hidden": "true",
                        children: (0, o.jsx)("rect", {
                          width: 404,
                          height: 384,
                          fill: "url(#de316486-4a29-4312-bdfc-fbce2132a2c1)",
                        }),
                      }),
                      (0, o.jsx)("div", {
                        className:
                          "relative text-base mx-auto max-w-prose lg:max-w-none",
                        children: (0, o.jsxs)("figure", {
                          children: [
                            (0, o.jsx)("div", {
                              className:
                                "aspect-w-12 aspect-h-7 lg:aspect-none",
                              children: (0, o.jsx)("img", {
                                className:
                                  "rounded-lg shadow-lg object-cover object-center",
                                src: "./images/natalie_profile.png",
                                alt: "Natalie Fairbourne profile pic",
                                width: 1184,
                                height: 1376,
                              }),
                            }),
                            (0, o.jsx)("a", {
                              href: "./fairbourne_resume.pdf",
                              target: "_blank",
                              className:
                                "w-full mt-2 bg-white border border-red-700 rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-red-700 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-red-500",
                              children: "Download my Resume",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, o.jsxs)("div", {
                    className: "mt-8 lg:mt-0",
                    children: [
                      (0, o.jsxs)("div", {
                        className:
                          "text-base max-w-prose mx-auto lg:max-w-none",
                        children: [
                          (0, o.jsx)("h3", {
                            className:
                              "mt-2 text-xl leading-8 font-bold tracking-tight text-gray-900",
                            children: "Education",
                          }),
                          (0, o.jsxs)("ul", {
                            className:
                              "text-lg text-gray-500 list-[square] ml-8",
                            children: [
                              (0, o.jsx)("li", {
                                children:
                                  " Brigham Young University (1997-2000)",
                              }),
                              (0, o.jsxs)("li", {
                                children: [
                                  " ",
                                  "University of Utah Profession Education Bootcamp (2022)",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, o.jsxs)("div", {
                        className:
                          "text-base max-w-prose mx-auto lg:max-w-none",
                        children: [
                          (0, o.jsx)("h3", {
                            className:
                              "mt-8 text-xl leading-8 font-bold tracking-tight text-gray-900",
                            children: "Experience",
                          }),
                          (0, o.jsxs)("ul", {
                            className:
                              "text-lg text-gray-500 list-[square] ml-8 my-2",
                            children: [
                              (0, o.jsxs)("li", {
                                className: "font-bold",
                                children: [
                                  " ",
                                  "Yoodlize: Co-Founder/CPO (2020-current)",
                                ],
                              }),
                              (0, o.jsxs)("ul", {
                                className: "list-disc ml-8 font-light",
                                children: [
                                  (0, o.jsx)("li", {
                                    className: "",
                                    children:
                                      " I oversaw the design and launch of 2.0.",
                                  }),
                                  (0, o.jsx)("li", {
                                    children:
                                      " I manage the app with over 10,000 users.",
                                  }),
                                ],
                              }),
                              (0, o.jsxs)("li", {
                                className: "mt-4 font-bold",
                                children: [
                                  " ",
                                  "Bee's Kitchen: Owner/Operator (2018-current)",
                                ],
                              }),
                              (0, o.jsxs)("ul", {
                                className: "list-disc ml-8  font-light",
                                children: [
                                  (0, o.jsxs)("li", {
                                    children: [
                                      " ",
                                      "I provide food services for in-patient care facilities 365 days a year.",
                                    ],
                                  }),
                                  (0, o.jsxs)("li", {
                                    children: [
                                      " ",
                                      "I manage employees, inventory, budgets, invoicing, and operations.",
                                    ],
                                  }),
                                ],
                              }),
                              (0, o.jsxs)("li", {
                                className: "mt-4 font-bold",
                                children: [
                                  " ",
                                  "Bamba Water: Co-Founder/CFO(2014-2017)",
                                ],
                              }),
                              (0, o.jsxs)("ul", {
                                className: "list-disc ml-8 font-light",
                                children: [
                                  (0, o.jsxs)("li", {
                                    children: [
                                      " ",
                                      "I helped launch the water company in East Africa. It sells over 100k units a day.",
                                      " ",
                                    ],
                                  }),
                                  (0, o.jsxs)("li", {
                                    children: [
                                      " ",
                                      "I over saw the finance and budgeting. Bamba water has 2 million in revenue and 150+ employees.",
                                      " ",
                                    ],
                                  }),
                                  (0, o.jsxs)("li", {
                                    children: [
                                      " ",
                                      "I implemented a robust inventory management and loss prevention program.",
                                      " ",
                                    ],
                                  }),
                                ],
                              }),
                              (0, o.jsxs)("li", {
                                className: "mt-4 font-bold",
                                children: [
                                  " ",
                                  "Bestway Markets Mtaani: Co-Founder (2015-2017)",
                                ],
                              }),
                              (0, o.jsxs)("ul", {
                                className: "list-disc ml-8 font-light",
                                children: [
                                  (0, o.jsxs)("li", {
                                    children: [
                                      " ",
                                      "Bestway Mtaani is a chain of mini supermarkets in Mombasa, Kenya.",
                                      " ",
                                    ],
                                  }),
                                  (0, o.jsx)("li", {
                                    children:
                                      " I helped open three locations. ",
                                  }),
                                  (0, o.jsx)("li", {
                                    children:
                                      " I implemented inventory, POS and ordering systems. ",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, o.jsxs)("div", {
                        className:
                          "text-base max-w-prose mx-auto lg:max-w-none",
                        children: [
                          (0, o.jsx)("h3", {
                            className:
                              "mt-8 text-xl leading-8 font-bold tracking-tight text-gray-900",
                            children: "Skills",
                          }),
                          (0, o.jsxs)("ul", {
                            className:
                              "text-lg text-gray-500 list-[square] ml-8 mt-2",
                            children: [
                              (0, o.jsx)("li", {
                                children: "HTML/CSS: Tailwind, bootstrap",
                              }),
                              (0, o.jsx)("li", { children: "JavaScript" }),
                              (0, o.jsx)("li", {
                                children: "SQL, mySQL, sequelize",
                              }),
                              (0, o.jsx)("li", {
                                children: "Node.js, express",
                              }),
                              (0, o.jsx)("li", {
                                children: "MongoDB, mongoose",
                              }),
                              (0, o.jsx)("li", { children: "React" }),
                              (0, o.jsx)("li", { children: "Figma/Sketch" }),
                              (0, o.jsx)("li", { children: "Adobe Suite" }),
                              (0, o.jsx)("li", {
                                children: "Product Management (scrum/agile)",
                              }),
                              (0, o.jsx)("li", {
                                children: "Startup and product launch",
                              }),
                              (0, o.jsx)("li", { children: "Marketing" }),
                              (0, o.jsx)("li", { children: "QuickBooks" }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        })
      }
      function kn() {
        var t = (0, e.useContext)(s),
          n = (t.currentPage, t.setCurrentPage)
        return (0, o.jsx)("div", {
          className: "bg-white",
          children: (0, o.jsxs)("div", {
            className:
              "max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8",
            children: [
              (0, o.jsx)("h2", { className: "sr-only", children: "Projects" }),
              (0, o.jsx)("div", {
                className:
                  "grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8",
                children: ht.map(function (e) {
                  return (0, o.jsxs)(
                    "div",
                    {
                      className:
                        "group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden",
                      children: [
                        (0, o.jsx)("div", {
                          className:
                            "aspect-square bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-48",
                          children: (0, o.jsx)("img", {
                            src: e.imageSrc,
                            alt: e.imageAlt,
                            className:
                              "w-full h-full object-center object-cover object-top sm:w-full sm:h-full",
                          }),
                        }),
                        (0, o.jsxs)("div", {
                          className: "flex-1 p-4 space-y-2 flex flex-col",
                          children: [
                            (0, o.jsx)("h3", {
                              className: "text-base font-bold text-gray-900",
                              children: (0, o.jsxs)("a", {
                                onClick: function () {
                                  n(e.click)
                                },
                                children: [
                                  (0, o.jsx)("span", {
                                    "aria-hidden": "true",
                                    className: "absolute inset-0",
                                  }),
                                  e.name,
                                ],
                              }),
                            }),
                            (0, o.jsx)("p", {
                              className: "text-sm text-gray-500",
                              children: e.description,
                            }),
                            (0, o.jsx)("div", {
                              className: "flex-1 flex flex-col justify-end",
                            }),
                          ],
                        }),
                      ],
                    },
                    e.id
                  )
                }),
              }),
            ],
          }),
        })
      }
      function Sn() {
        var t = (0, e.useContext)(s).currentPage
        return (0, o.jsx)(o.Fragment, {
          children:
            "about" === t
              ? (0, o.jsx)(xt, {})
              : "contact" === t
              ? (0, o.jsx)(bn, {})
              : "modal" === t
              ? (0, o.jsx)(yn, {})
              : "resume" === t
              ? (0, o.jsx)(wn, {})
              : "wedding" === t ||
                "tech-blog" === t ||
                "date" === t ||
                "yoodlize" === t ||
                "weather" === t ||
                "blackjack" === t
              ? (0, o.jsx)(xn, {})
              : "projects" === t
              ? (0, o.jsx)(kn, {})
              : (0, o.jsx)(xt, {}),
        })
      }
      var En = function () {
          return (0, o.jsx)(u, {
            children: (0, o.jsxs)("div", {
              className: "font-sans flex flex-col h-screen",
              children: [
                (0, o.jsx)(gt, {}),
                (0, o.jsx)(Sn, {}),
                (0, o.jsx)(bt, {}),
              ],
            }),
          })
        },
        jn = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(787)
              .then(n.bind(n, 787))
              .then(function (t) {
                var n = t.getCLS,
                  r = t.getFID,
                  a = t.getFCP,
                  l = t.getLCP,
                  o = t.getTTFB
                n(e), r(e), a(e), l(e), o(e)
              })
        }
      t
        .createRoot(document.getElementById("root"))
        .render((0, o.jsx)(e.StrictMode, { children: (0, o.jsx)(En, {}) })),
        jn()
    })()
})()
//# sourceMappingURL=main.a402f148.js.map
