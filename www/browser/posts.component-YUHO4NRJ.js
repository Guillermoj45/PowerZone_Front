import {
  start
} from "./chunk-65SR4MAU.js";
import {
  CommentService,
  NewCommentComponent
} from "./chunk-EHKKNGCG.js";
import {
  NewPostComponent
} from "./chunk-WV2SIDCP.js";
import {
  AdminService
} from "./chunk-IK76A6XB.js";
import {
  PostService
} from "./chunk-77HXCZAV.js";
import {
  addIcons,
  bookmark,
  bookmarkOutline,
  chatbubble,
  ellipsisHorizontal,
  exitOutline,
  heart,
  heartOutline,
  shareSocial,
  trash
} from "./chunk-U7I4M26G.js";
import {
  ProfileService
} from "./chunk-FQYQIARY.js";
import {
  IonAvatar,
  IonButton,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonGrid,
  IonIcon,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPopover,
  IonRow,
  IonSearchbar,
  IonSelect,
  IonSelectOption,
  IonicModule,
  ModalController,
  SelectValueAccessorDirective,
  TextValueAccessorDirective,
  ToastController
} from "./chunk-AZ27F32N.js";
import "./chunk-IRNVB6F3.js";
import {
  CommonModule,
  DatePipe,
  DomSanitizer,
  FormsModule,
  NavigationEnd,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  Router,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-A54Y6D4U.js";
import "./chunk-ZTVCPE3I.js";
import "./chunk-5H55HBS7.js";
import "./chunk-HHPBBMWP.js";
import "./chunk-74ZUTEVJ.js";
import "./chunk-6NM256MY.js";
import "./chunk-S7CL5QHB.js";
import "./chunk-BKPN4S4N.js";
import "./chunk-36AZKHWN.js";
import "./chunk-MBNBWCEE.js";
import "./chunk-52T2EOVQ.js";
import "./chunk-X6PYF5VD.js";
import "./chunk-2HS7YJ5A.js";
import "./chunk-F4BDZKIT.js";
import "./chunk-X6W3EUXB.js";
import "./chunk-JYOJD2RE.js";
import "./chunk-5JBVT5OV.js";
import "./chunk-KX4G5RV4.js";
import "./chunk-SF4AH5PM.js";
import "./chunk-BB7NI7QA.js";
import "./chunk-Z2CSFXBF.js";
import "./chunk-OQQEQ4WG.js";
import "./chunk-4KNII73W.js";
import "./chunk-ZCSC3ZHN.js";
import "./chunk-6U2MGNWA.js";
import "./chunk-4WT7J3YM.js";
import "./chunk-6FFMTLXI.js";
import "./chunk-K3HSXS64.js";
import {
  __async
} from "./chunk-ZVATTXSA.js";

// node_modules/intro.js/intro.module.js
function t(e3) {
  return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t2) {
    return typeof t2;
  } : function(t2) {
    return t2 && "function" == typeof Symbol && t2.constructor === Symbol && t2 !== Symbol.prototype ? "symbol" : typeof t2;
  }, t(e3);
}
function e(t2, e3, n2, o2) {
  return new (n2 || (n2 = Promise))(function(i2, r2) {
    function s2(t3) {
      try {
        l2(o2.next(t3));
      } catch (t4) {
        r2(t4);
      }
    }
    function a2(t3) {
      try {
        l2(o2.throw(t3));
      } catch (t4) {
        r2(t4);
      }
    }
    function l2(t3) {
      var e4;
      t3.done ? i2(t3.value) : (e4 = t3.value, e4 instanceof n2 ? e4 : new n2(function(t4) {
        t4(e4);
      })).then(s2, a2);
    }
    l2((o2 = o2.apply(t2, e3 || [])).next());
  });
}
function n(t2, e3) {
  var n2, o2, i2, r2, s2 = {
    label: 0,
    sent: function() {
      if (1 & i2[0]) throw i2[1];
      return i2[1];
    },
    trys: [],
    ops: []
  };
  return r2 = {
    next: a2(0),
    throw: a2(1),
    return: a2(2)
  }, "function" == typeof Symbol && (r2[Symbol.iterator] = function() {
    return this;
  }), r2;
  function a2(a3) {
    return function(l2) {
      return function(a4) {
        if (n2) throw new TypeError("Generator is already executing.");
        for (; r2 && (r2 = 0, a4[0] && (s2 = 0)), s2; ) try {
          if (n2 = 1, o2 && (i2 = 2 & a4[0] ? o2.return : a4[0] ? o2.throw || ((i2 = o2.return) && i2.call(o2), 0) : o2.next) && !(i2 = i2.call(o2, a4[1])).done) return i2;
          switch (o2 = 0, i2 && (a4 = [2 & a4[0], i2.value]), a4[0]) {
            case 0:
            case 1:
              i2 = a4;
              break;
            case 4:
              return s2.label++, {
                value: a4[1],
                done: false
              };
            case 5:
              s2.label++, o2 = a4[1], a4 = [0];
              continue;
            case 7:
              a4 = s2.ops.pop(), s2.trys.pop();
              continue;
            default:
              if (!(i2 = s2.trys, (i2 = i2.length > 0 && i2[i2.length - 1]) || 6 !== a4[0] && 2 !== a4[0])) {
                s2 = 0;
                continue;
              }
              if (3 === a4[0] && (!i2 || a4[1] > i2[0] && a4[1] < i2[3])) {
                s2.label = a4[1];
                break;
              }
              if (6 === a4[0] && s2.label < i2[1]) {
                s2.label = i2[1], i2 = a4;
                break;
              }
              if (i2 && s2.label < i2[2]) {
                s2.label = i2[2], s2.ops.push(a4);
                break;
              }
              i2[2] && s2.ops.pop(), s2.trys.pop();
              continue;
          }
          a4 = e3.call(t2, s2);
        } catch (t3) {
          a4 = [6, t3], o2 = 0;
        } finally {
          n2 = i2 = 0;
        }
        if (5 & a4[0]) throw a4[1];
        return {
          value: a4[0] ? a4[1] : void 0,
          done: true
        };
      }([a3, l2]);
    };
  }
}
function o(t2, e3, n2) {
  var o2, r2 = ((o2 = {})[t2] = e3, o2.path = "/", o2.expires = void 0, o2);
  if (n2) {
    var s2 = /* @__PURE__ */ new Date();
    s2.setTime(s2.getTime() + 24 * n2 * 60 * 60 * 1e3), r2.expires = s2.toUTCString();
  }
  var a2 = [];
  for (var l2 in r2) a2.push("".concat(l2, "=").concat(r2[l2]));
  return document.cookie = a2.join("; "), i(t2);
}
function i(t2) {
  return (e3 = {}, document.cookie.split(";").forEach(function(t3) {
    var n2 = t3.split("="), o2 = n2[0], i2 = n2[1];
    e3[o2.trim()] = i2;
  }), e3)[t2];
  var e3;
}
function r(t2, e3) {
  e3 ? o(t2._options.dontShowAgainCookie, "true", t2._options.dontShowAgainCookieDays) : o(t2._options.dontShowAgainCookie, "", -1);
}
var s;
var a = (s = {}, function(t2, e3) {
  return void 0 === e3 && (e3 = "introjs-stamp"), s[e3] = s[e3] || 0, void 0 === t2[e3] && (t2[e3] = s[e3]++), t2[e3];
});
var l = new (function() {
  function t2() {
    this.events_key = "introjs_event";
  }
  return t2.prototype._id = function(t3, e3, n2) {
    return t3 + a(e3) + (n2 ? "_".concat(a(n2)) : "");
  }, t2.prototype.on = function(t3, e3, n2, o2, i2) {
    var r2 = this._id(e3, n2, o2), s2 = function(e4) {
      return n2(o2 || t3, e4 || window.event);
    };
    "addEventListener" in t3 ? t3.addEventListener(e3, s2, i2) : "attachEvent" in t3 && t3.attachEvent("on".concat(e3), s2), t3[this.events_key] = t3[this.events_key] || {}, t3[this.events_key][r2] = s2;
  }, t2.prototype.off = function(t3, e3, n2, o2, i2) {
    var r2 = this._id(e3, n2, o2), s2 = t3[this.events_key] && t3[this.events_key][r2];
    s2 && ("removeEventListener" in t3 ? t3.removeEventListener(e3, s2, i2) : "detachEvent" in t3 && t3.detachEvent("on".concat(e3), s2), t3[this.events_key][r2] = null);
  }, t2;
}())();
var c = function(t2) {
  return "function" == typeof t2;
};
function u(t2, e3) {
  if (t2 instanceof SVGElement) {
    var n2 = t2.getAttribute("class") || "";
    n2.match(e3) || t2.setAttribute("class", "".concat(n2, " ").concat(e3));
  } else if (void 0 !== t2.classList) for (var o2 = 0, i2 = e3.split(" "); o2 < i2.length; o2++) {
    var r2 = i2[o2];
    t2.classList.add(r2);
  }
  else t2.className.match(e3) || (t2.className += " ".concat(e3));
}
function p(t2, e3) {
  var n2 = "";
  return "currentStyle" in t2 ? n2 = t2.currentStyle[e3] : document.defaultView && document.defaultView.getComputedStyle && (n2 = document.defaultView.getComputedStyle(t2, null).getPropertyValue(e3)), n2 && n2.toLowerCase ? n2.toLowerCase() : n2;
}
function h(t2, e3) {
  if (t2) {
    var n2 = function(t3) {
      var e4 = window.getComputedStyle(t3), n3 = "absolute" === e4.position, o2 = /(auto|scroll)/;
      if ("fixed" === e4.position) return document.body;
      for (var i2 = t3; i2 = i2.parentElement; ) if (e4 = window.getComputedStyle(i2), (!n3 || "static" !== e4.position) && o2.test(e4.overflow + e4.overflowY + e4.overflowX)) return i2;
      return document.body;
    }(e3);
    n2 !== document.body && (n2.scrollTop = e3.offsetTop - n2.offsetTop);
  }
}
function d() {
  if (void 0 !== window.innerWidth) return {
    width: window.innerWidth,
    height: window.innerHeight
  };
  var t2 = document.documentElement;
  return {
    width: t2.clientWidth,
    height: t2.clientHeight
  };
}
function f(t2, e3, n2, o2, i2) {
  var r2;
  if ("off" !== e3 && t2 && (r2 = "tooltip" === e3 ? i2.getBoundingClientRect() : o2.getBoundingClientRect(), !function(t3) {
    var e4 = t3.getBoundingClientRect();
    return e4.top >= 0 && e4.left >= 0 && e4.bottom + 80 <= window.innerHeight && e4.right <= window.innerWidth;
  }(o2))) {
    var s2 = d().height;
    r2.bottom - (r2.bottom - r2.top) < 0 || o2.clientHeight > s2 ? window.scrollBy(0, r2.top - (s2 / 2 - r2.height / 2) - n2) : window.scrollBy(0, r2.top - (s2 / 2 - r2.height / 2) + n2);
  }
}
function b(t2) {
  t2.setAttribute("role", "button"), t2.tabIndex = 0;
}
function m(t2) {
  var e3 = t2.parentElement;
  return !(!e3 || "HTML" === e3.nodeName) && ("fixed" === p(t2, "position") || m(e3));
}
function g(t2, e3) {
  var n2 = document.body, o2 = document.documentElement, i2 = window.pageYOffset || o2.scrollTop || n2.scrollTop, r2 = window.pageXOffset || o2.scrollLeft || n2.scrollLeft;
  e3 = e3 || n2;
  var s2 = t2.getBoundingClientRect(), a2 = e3.getBoundingClientRect(), l2 = p(e3, "position"), c2 = {
    width: s2.width,
    height: s2.height
  };
  return "body" !== e3.tagName.toLowerCase() && "relative" === l2 || "sticky" === l2 ? Object.assign(c2, {
    top: s2.top - a2.top,
    left: s2.left - a2.left
  }) : m(t2) ? Object.assign(c2, {
    top: s2.top,
    left: s2.left
  }) : Object.assign(c2, {
    top: s2.top + i2,
    left: s2.left + r2
  });
}
function v(t2, e3) {
  if (t2 instanceof SVGElement) {
    var n2 = t2.getAttribute("class") || "";
    t2.setAttribute("class", n2.replace(e3, "").replace(/^\s+|\s+$/g, ""));
  } else t2.className = t2.className.replace(e3, "").replace(/^\s+|\s+$/g, "");
}
function y(t2, e3) {
  var n2 = "";
  if (t2.style.cssText && (n2 += t2.style.cssText), "string" == typeof e3) n2 += e3;
  else for (var o2 in e3) n2 += "".concat(o2, ":").concat(e3[o2], ";");
  t2.style.cssText = n2;
}
function w(t2, e3, n2) {
  if (n2 && e3) {
    var o2 = g(e3.element, t2._targetElement), i2 = t2._options.helperElementPadding;
    e3.element instanceof Element && m(e3.element) ? u(n2, "introjs-fixedTooltip") : v(n2, "introjs-fixedTooltip"), "floating" === e3.position && (i2 = 0), y(n2, {
      width: "".concat(o2.width + i2, "px"),
      height: "".concat(o2.height + i2, "px"),
      top: "".concat(o2.top - i2 / 2, "px"),
      left: "".concat(o2.left - i2 / 2, "px")
    });
  }
}
function _(t2, e3, n2, o2, i2) {
  return t2.left + e3 + n2.width > o2.width ? (i2.style.left = "".concat(o2.width - n2.width - t2.left, "px"), false) : (i2.style.left = "".concat(e3, "px"), true);
}
function C(t2, e3, n2, o2) {
  return t2.left + t2.width - e3 - n2.width < 0 ? (o2.style.left = "".concat(-t2.left, "px"), false) : (o2.style.right = "".concat(e3, "px"), true);
}
function S(t2, e3) {
  t2.includes(e3) && t2.splice(t2.indexOf(e3), 1);
}
function k(t2, e3, n2, o2) {
  var i2 = t2.slice(), r2 = d(), s2 = g(n2).height + 10, a2 = g(n2).width + 20, l2 = e3.getBoundingClientRect(), c2 = "floating";
  if (l2.bottom + s2 > r2.height && S(i2, "bottom"), l2.top - s2 < 0 && S(i2, "top"), l2.right + a2 > r2.width && S(i2, "right"), l2.left - a2 < 0 && S(i2, "left"), o2 && (o2 = o2.split("-")[0]), i2.length && (c2 = i2[0], i2.includes(o2) && (c2 = o2)), "top" === c2 || "bottom" === c2) {
    var u2 = void 0, p2 = [];
    "top" === c2 ? (u2 = "top-middle-aligned", p2 = ["top-left-aligned", "top-middle-aligned", "top-right-aligned"]) : (u2 = "bottom-middle-aligned", p2 = ["bottom-left-aligned", "bottom-middle-aligned", "bottom-right-aligned"]), c2 = function(t3, e4, n3, o3) {
      var i3 = e4 / 2, r3 = Math.min(n3, window.screen.width);
      return r3 - t3 < e4 && (S(o3, "top-left-aligned"), S(o3, "bottom-left-aligned")), (t3 < i3 || r3 - t3 < i3) && (S(o3, "top-middle-aligned"), S(o3, "bottom-middle-aligned")), t3 < e4 && (S(o3, "top-right-aligned"), S(o3, "bottom-right-aligned")), o3.length ? o3[0] : null;
    }(l2.left, a2, r2.width, p2) || u2;
  }
  return c2;
}
function j(t2, e3, n2, o2, i2) {
  if (void 0 === i2 && (i2 = false), e3) {
    var r2, s2, a2, l2, c2 = "";
    n2.style.top = "", n2.style.right = "", n2.style.bottom = "", n2.style.left = "", n2.style.marginLeft = "", n2.style.marginTop = "", o2.style.display = "inherit", c2 = "string" == typeof e3.tooltipClass ? e3.tooltipClass : t2._options.tooltipClass, n2.className = ["introjs-tooltip", c2].filter(Boolean).join(" "), n2.setAttribute("role", "dialog"), "floating" !== (l2 = e3.position) && t2._options.autoPosition && (l2 = k(t2._options.positionPrecedence, e3.element, n2, l2)), s2 = g(e3.element), r2 = g(n2), a2 = d(), u(n2, "introjs-".concat(l2));
    var p2 = s2.width / 2 - r2.width / 2;
    switch (l2) {
      case "top-right-aligned":
        o2.className = "introjs-arrow bottom-right";
        var h2 = 0;
        C(s2, h2, r2, n2), n2.style.bottom = "".concat(s2.height + 20, "px");
        break;
      case "top-middle-aligned":
        o2.className = "introjs-arrow bottom-middle", i2 && (p2 += 5), C(s2, p2, r2, n2) && (n2.style.right = "", _(s2, p2, r2, a2, n2)), n2.style.bottom = "".concat(s2.height + 20, "px");
        break;
      case "top-left-aligned":
      case "top":
        o2.className = "introjs-arrow bottom", _(s2, i2 ? 0 : 15, r2, a2, n2), n2.style.bottom = "".concat(s2.height + 20, "px");
        break;
      case "right":
        n2.style.left = "".concat(s2.width + 20, "px"), s2.top + r2.height > a2.height ? (o2.className = "introjs-arrow left-bottom", n2.style.top = "-".concat(r2.height - s2.height - 20, "px")) : o2.className = "introjs-arrow left";
        break;
      case "left":
        i2 || true !== t2._options.showStepNumbers || (n2.style.top = "15px"), s2.top + r2.height > a2.height ? (n2.style.top = "-".concat(r2.height - s2.height - 20, "px"), o2.className = "introjs-arrow right-bottom") : o2.className = "introjs-arrow right", n2.style.right = "".concat(s2.width + 20, "px");
        break;
      case "floating":
        o2.style.display = "none", n2.style.left = "50%", n2.style.top = "50%", n2.style.marginLeft = "-".concat(r2.width / 2, "px"), n2.style.marginTop = "-".concat(r2.height / 2, "px");
        break;
      case "bottom-right-aligned":
        o2.className = "introjs-arrow top-right", C(s2, h2 = 0, r2, n2), n2.style.top = "".concat(s2.height + 20, "px");
        break;
      case "bottom-middle-aligned":
        o2.className = "introjs-arrow top-middle", i2 && (p2 += 5), C(s2, p2, r2, n2) && (n2.style.right = "", _(s2, p2, r2, a2, n2)), n2.style.top = "".concat(s2.height + 20, "px");
        break;
      default:
        o2.className = "introjs-arrow top", _(s2, 0, r2, a2, n2), n2.style.top = "".concat(s2.height + 20, "px");
    }
  }
}
function A() {
  for (var t2 = 0, e3 = Array.from(document.querySelectorAll(".introjs-showElement")); t2 < e3.length; t2++) {
    v(e3[t2], /introjs-[a-zA-Z]+/g);
  }
}
function x(t2, e3) {
  var n2 = document.createElement(t2);
  e3 = e3 || {};
  var o2 = /^(?:role|data-|aria-)/;
  for (var i2 in e3) {
    var r2 = e3[i2];
    "style" === i2 && "function" != typeof r2 ? y(n2, r2) : "string" == typeof r2 && i2.match(o2) ? n2.setAttribute(i2, r2) : n2[i2] = r2;
  }
  return n2;
}
function N(t2, e3, n2) {
  if (void 0 === n2 && (n2 = false), n2) {
    var o2 = e3.style.opacity || "1";
    y(e3, {
      opacity: "0"
    }), window.setTimeout(function() {
      y(e3, {
        opacity: o2
      });
    }, 10);
  }
  t2.appendChild(e3);
}
function E(t2, e3) {
  return (t2 + 1) / e3 * 100;
}
function T(t2, e3) {
  var n2 = x("div", {
    className: "introjs-bullets"
  });
  false === t2._options.showBullets && (n2.style.display = "none");
  var o2 = x("ul");
  o2.setAttribute("role", "tablist");
  for (var i2 = function() {
    var e4 = this.getAttribute("data-step-number");
    null != e4 && t2.goToStep(parseInt(e4, 10));
  }, r2 = 0; r2 < t2._introItems.length; r2++) {
    var s2 = t2._introItems[r2].step, a2 = x("li"), l2 = x("a");
    a2.setAttribute("role", "presentation"), l2.setAttribute("role", "tab"), l2.onclick = i2, r2 === e3.step - 1 && (l2.className = "active"), b(l2), l2.innerHTML = "&nbsp;", l2.setAttribute("data-step-number", s2.toString()), a2.appendChild(l2), o2.appendChild(a2);
  }
  return n2.appendChild(o2), n2;
}
function I(t2, e3, n2) {
  var o2 = t2.querySelector(".introjs-progress .introjs-progressbar");
  if (o2) {
    var i2 = E(e3, n2);
    o2.style.cssText = "width:".concat(i2, "%;"), o2.setAttribute("aria-valuenow", i2.toString());
  }
}
function L(t2, o2) {
  return e(this, void 0, void 0, function() {
    var i2, r2, s2, a2, l2, d2, m2, g2, v2, _2, C2, S2, k2, L2, P2, q2, R2, O2, M2, D2, F2, V2, z2, G2, W2 = this;
    return n(this, function(Q2) {
      switch (Q2.label) {
        case 0:
          return c(t2._introChangeCallback) ? [4, t2._introChangeCallback.call(t2, o2.element)] : [3, 2];
        case 1:
          Q2.sent(), Q2.label = 2;
        case 2:
          return i2 = document.querySelector(".introjs-helperLayer"), r2 = document.querySelector(".introjs-tooltipReferenceLayer"), s2 = "introjs-helperLayer", "string" == typeof o2.highlightClass && (s2 += " ".concat(o2.highlightClass)), "string" == typeof t2._options.highlightClass && (s2 += " ".concat(t2._options.highlightClass)), null !== i2 && null !== r2 ? (m2 = r2.querySelector(".introjs-helperNumberLayer"), g2 = r2.querySelector(".introjs-tooltiptext"), v2 = r2.querySelector(".introjs-tooltip-title"), _2 = r2.querySelector(".introjs-arrow"), C2 = r2.querySelector(".introjs-tooltip"), d2 = r2.querySelector(".introjs-skipbutton"), l2 = r2.querySelector(".introjs-prevbutton"), a2 = r2.querySelector(".introjs-nextbutton"), i2.className = s2, C2.style.opacity = "0", C2.style.display = "none", h(t2._options.scrollToElement, o2.element), w(t2, o2, i2), w(t2, o2, r2), A(), t2._lastShowElementTimer && window.clearTimeout(t2._lastShowElementTimer), t2._lastShowElementTimer = window.setTimeout(function() {
            null !== m2 && (m2.innerHTML = "".concat(o2.step, " ").concat(t2._options.stepNumbersOfLabel, " ").concat(t2._introItems.length)), g2.innerHTML = o2.intro || "", v2.innerHTML = o2.title || "", C2.style.display = "block", j(t2, o2, C2, _2), function(t3, e3, n2) {
              if (t3) {
                var o3 = e3.querySelector(".introjs-bullets li > a.active"), i3 = e3.querySelector('.introjs-bullets li > a[data-step-number="'.concat(n2.step, '"]'));
                o3 && i3 && (o3.className = "", i3.className = "active");
              }
            }(t2._options.showBullets, r2, o2), I(r2, t2._currentStep, t2._introItems.length), C2.style.opacity = "1", (null != a2 && /introjs-donebutton/gi.test(a2.className) || null != a2) && a2.focus(), f(t2._options.scrollToElement, o2.scrollTo, t2._options.scrollPadding, o2.element, g2);
          }, 350)) : (S2 = x("div", {
            className: s2
          }), k2 = x("div", {
            className: "introjs-tooltipReferenceLayer"
          }), L2 = x("div", {
            className: "introjs-arrow"
          }), P2 = x("div", {
            className: "introjs-tooltip"
          }), q2 = x("div", {
            className: "introjs-tooltiptext"
          }), R2 = x("div", {
            className: "introjs-tooltip-header"
          }), O2 = x("h1", {
            className: "introjs-tooltip-title"
          }), M2 = x("div"), y(S2, {
            "box-shadow": "0 0 1px 2px rgba(33, 33, 33, 0.8), rgba(33, 33, 33, ".concat(t2._options.overlayOpacity.toString(), ") 0 0 0 5000px")
          }), h(t2._options.scrollToElement, o2.element), w(t2, o2, S2), w(t2, o2, k2), N(t2._targetElement, S2, true), N(t2._targetElement, k2), q2.innerHTML = o2.intro, O2.innerHTML = o2.title, M2.className = "introjs-tooltipbuttons", false === t2._options.showButtons && (M2.style.display = "none"), R2.appendChild(O2), P2.appendChild(R2), P2.appendChild(q2), t2._options.dontShowAgain && (D2 = x("div", {
            className: "introjs-dontShowAgain"
          }), (F2 = x("input", {
            type: "checkbox",
            id: "introjs-dontShowAgain",
            name: "introjs-dontShowAgain"
          })).onchange = function(e3) {
            t2.setDontShowAgain(e3.target.checked);
          }, (V2 = x("label", {
            htmlFor: "introjs-dontShowAgain"
          })).innerText = t2._options.dontShowAgainLabel, D2.appendChild(F2), D2.appendChild(V2), P2.appendChild(D2)), P2.appendChild(T(t2, o2)), P2.appendChild(function(t3) {
            var e3 = x("div");
            e3.className = "introjs-progress", false === t3._options.showProgress && (e3.style.display = "none");
            var n2 = x("div", {
              className: "introjs-progressbar"
            });
            t3._options.progressBarAdditionalClass && (n2.className += " " + t3._options.progressBarAdditionalClass);
            var o3 = E(t3._currentStep, t3._introItems.length);
            return n2.setAttribute("role", "progress"), n2.setAttribute("aria-valuemin", "0"), n2.setAttribute("aria-valuemax", "100"), n2.setAttribute("aria-valuenow", o3.toString()), n2.style.cssText = "width:".concat(o3, "%;"), e3.appendChild(n2), e3;
          }(t2)), z2 = x("div"), true === t2._options.showStepNumbers && (z2.className = "introjs-helperNumberLayer", z2.innerHTML = "".concat(o2.step, " ").concat(t2._options.stepNumbersOfLabel, " ").concat(t2._introItems.length), P2.appendChild(z2)), P2.appendChild(L2), k2.appendChild(P2), (a2 = x("a")).onclick = function() {
            return e(W2, void 0, void 0, function() {
              return n(this, function(e3) {
                switch (e3.label) {
                  case 0:
                    return t2._introItems.length - 1 === t2._currentStep ? [3, 2] : [4, B(t2)];
                  case 1:
                    return e3.sent(), [3, 6];
                  case 2:
                    return /introjs-donebutton/gi.test(a2.className) ? c(t2._introCompleteCallback) ? [4, t2._introCompleteCallback.call(t2, t2._currentStep, "done")] : [3, 4] : [3, 6];
                  case 3:
                    e3.sent(), e3.label = 4;
                  case 4:
                    return [4, et(t2, t2._targetElement)];
                  case 5:
                    e3.sent(), e3.label = 6;
                  case 6:
                    return [2];
                }
              });
            });
          }, b(a2), a2.innerHTML = t2._options.nextLabel, (l2 = x("a")).onclick = function() {
            return e(W2, void 0, void 0, function() {
              return n(this, function(e3) {
                switch (e3.label) {
                  case 0:
                    return t2._currentStep > 0 ? [4, H(t2)] : [3, 2];
                  case 1:
                    e3.sent(), e3.label = 2;
                  case 2:
                    return [2];
                }
              });
            });
          }, b(l2), l2.innerHTML = t2._options.prevLabel, b(d2 = x("a", {
            className: "introjs-skipbutton"
          })), d2.innerHTML = t2._options.skipLabel, d2.onclick = function() {
            return e(W2, void 0, void 0, function() {
              return n(this, function(e3) {
                switch (e3.label) {
                  case 0:
                    return t2._introItems.length - 1 === t2._currentStep && c(t2._introCompleteCallback) ? [4, t2._introCompleteCallback.call(t2, t2._currentStep, "skip")] : [3, 2];
                  case 1:
                    e3.sent(), e3.label = 2;
                  case 2:
                    return c(t2._introSkipCallback) ? [4, t2._introSkipCallback.call(t2, t2._currentStep)] : [3, 4];
                  case 3:
                    e3.sent(), e3.label = 4;
                  case 4:
                    return [4, et(t2, t2._targetElement)];
                  case 5:
                    return e3.sent(), [2];
                }
              });
            });
          }, R2.appendChild(d2), t2._introItems.length > 1 && M2.appendChild(l2), M2.appendChild(a2), P2.appendChild(M2), j(t2, o2, P2, L2), f(t2._options.scrollToElement, o2.scrollTo, t2._options.scrollPadding, o2.element, P2)), (G2 = t2._targetElement.querySelector(".introjs-disableInteraction")) && G2.parentNode && G2.parentNode.removeChild(G2), o2.disableInteraction && function(t3, e3) {
            var n2 = document.querySelector(".introjs-disableInteraction");
            null === n2 && (n2 = x("div", {
              className: "introjs-disableInteraction"
            }), t3._targetElement.appendChild(n2)), w(t3, e3, n2);
          }(t2, o2), 0 === t2._currentStep && t2._introItems.length > 1 ? (null != a2 && (a2.className = "".concat(t2._options.buttonClass, " introjs-nextbutton"), a2.innerHTML = t2._options.nextLabel), true === t2._options.hidePrev ? (null != l2 && (l2.className = "".concat(t2._options.buttonClass, " introjs-prevbutton introjs-hidden")), null != a2 && u(a2, "introjs-fullbutton")) : null != l2 && (l2.className = "".concat(t2._options.buttonClass, " introjs-prevbutton introjs-disabled"))) : t2._introItems.length - 1 === t2._currentStep || 1 === t2._introItems.length ? (null != l2 && (l2.className = "".concat(t2._options.buttonClass, " introjs-prevbutton")), true === t2._options.hideNext ? (null != a2 && (a2.className = "".concat(t2._options.buttonClass, " introjs-nextbutton introjs-hidden")), null != l2 && u(l2, "introjs-fullbutton")) : null != a2 && (true === t2._options.nextToDone ? (a2.innerHTML = t2._options.doneLabel, u(a2, "".concat(t2._options.buttonClass, " introjs-nextbutton introjs-donebutton"))) : a2.className = "".concat(t2._options.buttonClass, " introjs-nextbutton introjs-disabled"))) : (null != l2 && (l2.className = "".concat(t2._options.buttonClass, " introjs-prevbutton")), null != a2 && (a2.className = "".concat(t2._options.buttonClass, " introjs-nextbutton"), a2.innerHTML = t2._options.nextLabel)), null != l2 && l2.setAttribute("role", "button"), null != a2 && a2.setAttribute("role", "button"), null != d2 && d2.setAttribute("role", "button"), null != a2 && a2.focus(), function(t3) {
            u(t3, "introjs-showElement");
            var e3 = p(t3, "position");
            "absolute" !== e3 && "relative" !== e3 && "sticky" !== e3 && "fixed" !== e3 && u(t3, "introjs-relativePosition");
          }(o2.element), c(t2._introAfterChangeCallback) ? [4, t2._introAfterChangeCallback.call(t2, o2.element)] : [3, 4];
        case 3:
          Q2.sent(), Q2.label = 4;
        case 4:
          return [2];
      }
    });
  });
}
function P(t2, o2) {
  return e(this, void 0, void 0, function() {
    return n(this, function(e3) {
      switch (e3.label) {
        case 0:
          return t2._currentStep = o2 - 2, void 0 === t2._introItems ? [3, 2] : [4, B(t2)];
        case 1:
          e3.sent(), e3.label = 2;
        case 2:
          return [2];
      }
    });
  });
}
function q(t2, o2) {
  return e(this, void 0, void 0, function() {
    return n(this, function(e3) {
      switch (e3.label) {
        case 0:
          return t2._currentStepNumber = o2, void 0 === t2._introItems ? [3, 2] : [4, B(t2)];
        case 1:
          e3.sent(), e3.label = 2;
        case 2:
          return [2];
      }
    });
  });
}
function B(t2) {
  return e(this, void 0, void 0, function() {
    var e3, o2, i2;
    return n(this, function(n2) {
      switch (n2.label) {
        case 0:
          if (t2._direction = "forward", void 0 !== t2._currentStepNumber) for (e3 = 0; e3 < t2._introItems.length; e3++) t2._introItems[e3].step === t2._currentStepNumber && (t2._currentStep = e3 - 1, t2._currentStepNumber = void 0);
          return -1 === t2._currentStep ? t2._currentStep = 0 : ++t2._currentStep, o2 = t2._introItems[t2._currentStep], i2 = true, c(t2._introBeforeChangeCallback) ? [4, t2._introBeforeChangeCallback.call(t2, o2 && o2.element, t2._currentStep, t2._direction)] : [3, 2];
        case 1:
          i2 = n2.sent(), n2.label = 2;
        case 2:
          return false === i2 ? (--t2._currentStep, [2, false]) : t2._introItems.length <= t2._currentStep ? c(t2._introCompleteCallback) ? [4, t2._introCompleteCallback.call(t2, t2._currentStep, "end")] : [3, 4] : [3, 6];
        case 3:
          n2.sent(), n2.label = 4;
        case 4:
          return [4, et(t2, t2._targetElement)];
        case 5:
          return n2.sent(), [2, false];
        case 6:
          return [4, L(t2, o2)];
        case 7:
          return n2.sent(), [2, true];
      }
    });
  });
}
function H(t2) {
  return e(this, void 0, void 0, function() {
    var e3, o2;
    return n(this, function(n2) {
      switch (n2.label) {
        case 0:
          return t2._direction = "backward", t2._currentStep <= 0 ? [2, false] : (--t2._currentStep, e3 = t2._introItems[t2._currentStep], o2 = true, c(t2._introBeforeChangeCallback) ? [4, t2._introBeforeChangeCallback.call(t2, e3 && e3.element, t2._currentStep, t2._direction)] : [3, 2]);
        case 1:
          o2 = n2.sent(), n2.label = 2;
        case 2:
          return false === o2 ? (++t2._currentStep, [2, false]) : [4, L(t2, e3)];
        case 3:
          return n2.sent(), [2, true];
      }
    });
  });
}
function R(t2, o2) {
  return e(this, void 0, void 0, function() {
    var e3, i2;
    return n(this, function(n2) {
      switch (n2.label) {
        case 0:
          return null === (e3 = void 0 === o2.code ? o2.which : o2.code) && (e3 = null === o2.charCode ? o2.keyCode : o2.charCode), "Escape" !== e3 && 27 !== e3 || true !== t2._options.exitOnEsc ? [3, 2] : [4, et(t2, t2._targetElement)];
        case 1:
          return n2.sent(), [3, 16];
        case 2:
          return "ArrowLeft" !== e3 && 37 !== e3 ? [3, 4] : [4, H(t2)];
        case 3:
          return n2.sent(), [3, 16];
        case 4:
          return "ArrowRight" !== e3 && 39 !== e3 ? [3, 6] : [4, B(t2)];
        case 5:
          return n2.sent(), [3, 16];
        case 6:
          return "Enter" !== e3 && "NumpadEnter" !== e3 && 13 !== e3 ? [3, 16] : (i2 = o2.target || o2.srcElement) && i2.className.match("introjs-prevbutton") ? [4, H(t2)] : [3, 8];
        case 7:
          return n2.sent(), [3, 15];
        case 8:
          return i2 && i2.className.match("introjs-skipbutton") ? t2._introItems.length - 1 === t2._currentStep && c(t2._introCompleteCallback) ? [4, t2._introCompleteCallback.call(t2, t2._currentStep, "skip")] : [3, 10] : [3, 12];
        case 9:
          n2.sent(), n2.label = 10;
        case 10:
          return [4, et(t2, t2._targetElement)];
        case 11:
          return n2.sent(), [3, 15];
        case 12:
          return i2 && i2.getAttribute("data-step-number") ? (i2.click(), [3, 15]) : [3, 13];
        case 13:
          return [4, B(t2)];
        case 14:
          n2.sent(), n2.label = 15;
        case 15:
          o2.preventDefault ? o2.preventDefault() : o2.returnValue = false, n2.label = 16;
        case 16:
          return [2];
      }
    });
  });
}
function O(e3) {
  if (null === e3 || "object" !== t(e3) || "nodeType" in e3) return e3;
  var n2 = {};
  for (var o2 in e3) "jQuery" in window && e3[o2] instanceof window.jQuery ? n2[o2] = e3[o2] : n2[o2] = O(e3[o2]);
  return n2;
}
function M(t2) {
  var e3 = document.querySelector(".introjs-hints");
  return e3 ? Array.from(e3.querySelectorAll(t2)) : [];
}
function D(t2, o2) {
  return e(this, void 0, void 0, function() {
    var e3;
    return n(this, function(n2) {
      switch (n2.label) {
        case 0:
          return e3 = M('.introjs-hint[data-step="'.concat(o2, '"]'))[0], Y(), e3 && u(e3, "introjs-hidehint"), c(t2._hintCloseCallback) ? [4, t2._hintCloseCallback.call(t2, o2)] : [3, 2];
        case 1:
          n2.sent(), n2.label = 2;
        case 2:
          return [2];
      }
    });
  });
}
function F(t2) {
  return e(this, void 0, void 0, function() {
    var e3, o2, i2, r2, s2;
    return n(this, function(n2) {
      switch (n2.label) {
        case 0:
          e3 = M(".introjs-hint"), o2 = 0, i2 = e3, n2.label = 1;
        case 1:
          return o2 < i2.length ? (r2 = i2[o2], (s2 = r2.getAttribute("data-step")) ? [4, D(t2, parseInt(s2, 10))] : [3, 3]) : [3, 4];
        case 2:
          n2.sent(), n2.label = 3;
        case 3:
          return o2++, [3, 1];
        case 4:
          return [2];
      }
    });
  });
}
function V(t2) {
  return e(this, void 0, void 0, function() {
    var e3, o2, i2, r2, s2;
    return n(this, function(n2) {
      switch (n2.label) {
        case 0:
          if (!(e3 = M(".introjs-hint")) || !e3.length) return [3, 1];
          for (o2 = 0, i2 = e3; o2 < i2.length; o2++) r2 = i2[o2], (s2 = r2.getAttribute("data-step")) && z(parseInt(s2, 10));
          return [3, 3];
        case 1:
          return [4, $(t2, t2._targetElement)];
        case 2:
          n2.sent(), n2.label = 3;
        case 3:
          return [2];
      }
    });
  });
}
function z(t2) {
  var e3 = M('.introjs-hint[data-step="'.concat(t2, '"]'))[0];
  e3 && v(e3, /introjs-hidehint/g);
}
function G(t2) {
  var e3 = M('.introjs-hint[data-step="'.concat(t2, '"]'))[0];
  e3 && e3.parentNode && e3.parentNode.removeChild(e3);
}
function W(t2) {
  return e(this, void 0, void 0, function() {
    var e3, o2, i2, r2, s2, a2, p2;
    return n(this, function(n2) {
      switch (n2.label) {
        case 0:
          for (null === (e3 = document.querySelector(".introjs-hints")) && (e3 = x("div", {
            className: "introjs-hints"
          })), o2 = function(e4) {
            return function(n3) {
              var o3 = n3 || window.event;
              o3 && o3.stopPropagation && o3.stopPropagation(), o3 && null !== o3.cancelBubble && (o3.cancelBubble = true), X(t2, e4);
            };
          }, i2 = 0; i2 < t2._hintItems.length; i2++) {
            if (r2 = t2._hintItems[i2], document.querySelector('.introjs-hint[data-step="'.concat(i2, '"]'))) return [2];
            b(s2 = x("a", {
              className: "introjs-hint"
            })), s2.onclick = o2(i2), r2.hintAnimation || u(s2, "introjs-hint-no-anim"), m(r2.element) && u(s2, "introjs-fixedhint"), a2 = x("div", {
              className: "introjs-hint-dot"
            }), p2 = x("div", {
              className: "introjs-hint-pulse"
            }), s2.appendChild(a2), s2.appendChild(p2), s2.setAttribute("data-step", i2.toString()), r2.hintTargetElement = r2.element, r2.element = s2, Q(r2.hintPosition, s2, r2.hintTargetElement), e3.appendChild(s2);
          }
          return document.body.appendChild(e3), c(t2._hintsAddedCallback) ? [4, t2._hintsAddedCallback.call(t2)] : [3, 2];
        case 1:
          n2.sent(), n2.label = 2;
        case 2:
          return t2._options.hintAutoRefreshInterval >= 0 && (t2._hintsAutoRefreshFunction = (h2 = function() {
            return U(t2);
          }, d2 = t2._options.hintAutoRefreshInterval, function() {
            for (var t3 = [], e4 = 0; e4 < arguments.length; e4++) t3[e4] = arguments[e4];
            window.clearTimeout(f2), f2 = window.setTimeout(function() {
              h2(t3);
            }, d2);
          }), l.on(window, "scroll", t2._hintsAutoRefreshFunction, t2, true)), [2];
      }
      var h2, d2, f2;
    });
  });
}
function Q(t2, e3, n2) {
  if (void 0 !== n2) {
    var o2 = g(n2), i2 = 20, r2 = 20;
    switch (t2) {
      default:
      case "top-left":
        e3.style.left = "".concat(o2.left, "px"), e3.style.top = "".concat(o2.top, "px");
        break;
      case "top-right":
        e3.style.left = "".concat(o2.left + o2.width - i2, "px"), e3.style.top = "".concat(o2.top, "px");
        break;
      case "bottom-left":
        e3.style.left = "".concat(o2.left, "px"), e3.style.top = "".concat(o2.top + o2.height - r2, "px");
        break;
      case "bottom-right":
        e3.style.left = "".concat(o2.left + o2.width - i2, "px"), e3.style.top = "".concat(o2.top + o2.height - r2, "px");
        break;
      case "middle-left":
        e3.style.left = "".concat(o2.left, "px"), e3.style.top = "".concat(o2.top + (o2.height - r2) / 2, "px");
        break;
      case "middle-right":
        e3.style.left = "".concat(o2.left + o2.width - i2, "px"), e3.style.top = "".concat(o2.top + (o2.height - r2) / 2, "px");
        break;
      case "middle-middle":
        e3.style.left = "".concat(o2.left + (o2.width - i2) / 2, "px"), e3.style.top = "".concat(o2.top + (o2.height - r2) / 2, "px");
        break;
      case "bottom-middle":
        e3.style.left = "".concat(o2.left + (o2.width - i2) / 2, "px"), e3.style.top = "".concat(o2.top + o2.height - r2, "px");
        break;
      case "top-middle":
        e3.style.left = "".concat(o2.left + (o2.width - i2) / 2, "px"), e3.style.top = "".concat(o2.top, "px");
    }
  }
}
function X(t2, o2) {
  return e(this, void 0, void 0, function() {
    var e3, i2, r2, s2, a2, l2, u2, p2, h2, d2, f2;
    return n(this, function(n2) {
      switch (n2.label) {
        case 0:
          return e3 = document.querySelector('.introjs-hint[data-step="'.concat(o2, '"]')), i2 = t2._hintItems[o2], c(t2._hintClickCallback) ? [4, t2._hintClickCallback.call(t2, e3, i2, o2)] : [3, 2];
        case 1:
          n2.sent(), n2.label = 2;
        case 2:
          return void 0 !== (r2 = Y()) && parseInt(r2, 10) === o2 || (s2 = x("div", {
            className: "introjs-tooltip"
          }), a2 = x("div"), l2 = x("div"), u2 = x("div"), s2.onclick = function(t3) {
            t3.stopPropagation ? t3.stopPropagation() : t3.cancelBubble = true;
          }, a2.className = "introjs-tooltiptext", (p2 = x("p")).innerHTML = i2.hint || "", a2.appendChild(p2), t2._options.hintShowButton && ((h2 = x("a")).className = t2._options.buttonClass, h2.setAttribute("role", "button"), h2.innerHTML = t2._options.hintButtonLabel, h2.onclick = function() {
            return D(t2, o2);
          }, a2.appendChild(h2)), l2.className = "introjs-arrow", s2.appendChild(l2), s2.appendChild(a2), d2 = e3.getAttribute("data-step") || "", t2._currentStep = parseInt(d2, 10), f2 = t2._hintItems[t2._currentStep], u2.className = "introjs-tooltipReferenceLayer introjs-hintReference", u2.setAttribute("data-step", d2), w(t2, f2, u2), u2.appendChild(s2), document.body.appendChild(u2), j(t2, f2, s2, l2, true)), [2];
      }
    });
  });
}
function Y() {
  var t2 = document.querySelector(".introjs-hintReference");
  if (t2 && t2.parentNode) {
    var e3 = t2.getAttribute("data-step");
    if (!e3) return;
    return t2.parentNode.removeChild(t2), e3;
  }
}
function $(t2, o2) {
  return e(this, void 0, void 0, function() {
    var e3, i2, r2, s2, a2, c2, u2, p2, h2, d2;
    return n(this, function(n2) {
      switch (n2.label) {
        case 0:
          if (t2._hintItems = [], t2._options.hints && t2._options.hints.length > 0) for (e3 = 0, i2 = t2._options.hints; e3 < i2.length; e3++) r2 = i2[e3], "string" == typeof (s2 = O(r2)).element && (s2.element = document.querySelector(s2.element)), s2.hintPosition = s2.hintPosition || t2._options.hintPosition, s2.hintAnimation = s2.hintAnimation || t2._options.hintAnimation, null !== s2.element && t2._hintItems.push(s2);
          else {
            if (!(a2 = Array.from(o2.querySelectorAll("*[data-hint]"))) || !a2.length) return [2, false];
            for (c2 = 0, u2 = a2; c2 < u2.length; c2++) p2 = u2[c2], h2 = p2.getAttribute("data-hint-animation"), d2 = t2._options.hintAnimation, h2 && (d2 = "true" === h2), t2._hintItems.push({
              element: p2,
              hint: p2.getAttribute("data-hint") || "",
              hintPosition: p2.getAttribute("data-hint-position") || t2._options.hintPosition,
              hintAnimation: d2,
              tooltipClass: p2.getAttribute("data-tooltip-class") || void 0,
              position: p2.getAttribute("data-position") || t2._options.tooltipPosition
            });
          }
          return [4, W(t2)];
        case 1:
          return n2.sent(), l.on(document, "click", Y, t2, false), l.on(window, "resize", U, t2, true), [2, true];
      }
    });
  });
}
function U(t2) {
  for (var e3 = 0, n2 = t2._hintItems; e3 < n2.length; e3++) {
    var o2 = n2[e3], i2 = o2.hintTargetElement;
    Q(o2.hintPosition, o2.element, i2);
  }
}
function Z(t2, e3) {
  var n2 = Array.from(e3.querySelectorAll("*[data-intro]")), o2 = [];
  if (t2._options.steps && t2._options.steps.length) for (var i2 = 0, r2 = t2._options.steps; i2 < r2.length; i2++) {
    var s2 = O(h2 = r2[i2]);
    if (s2.step = o2.length + 1, s2.title = s2.title || "", "string" == typeof s2.element && (s2.element = document.querySelector(s2.element) || void 0), void 0 === s2.element || null === s2.element) {
      var a2 = document.querySelector(".introjsFloatingElement");
      null === a2 && (a2 = x("div", {
        className: "introjsFloatingElement"
      }), document.body.appendChild(a2)), s2.element = a2, s2.position = "floating";
    }
    s2.position = s2.position || t2._options.tooltipPosition, s2.scrollTo = s2.scrollTo || t2._options.scrollTo, void 0 === s2.disableInteraction && (s2.disableInteraction = t2._options.disableInteraction), null !== s2.element && o2.push(s2);
  }
  else {
    var l2 = void 0;
    if (n2.length < 1) return [];
    for (var c2 = 0, u2 = n2; c2 < u2.length; c2++) {
      var p2 = u2[c2];
      if ((!t2._options.group || p2.getAttribute("data-intro-group") === t2._options.group) && "none" !== p2.style.display) {
        var h2 = parseInt(p2.getAttribute("data-step") || "", 10);
        l2 = t2._options.disableInteraction, p2.hasAttribute("data-disable-interaction") && (l2 = !!p2.getAttribute("data-disable-interaction")), h2 > 0 && (o2[h2 - 1] = {
          step: h2,
          element: p2,
          title: p2.getAttribute("data-title") || "",
          intro: p2.getAttribute("data-intro") || "",
          tooltipClass: p2.getAttribute("data-tooltip-class") || void 0,
          highlightClass: p2.getAttribute("data-highlight-class") || void 0,
          position: p2.getAttribute("data-position") || t2._options.tooltipPosition,
          scrollTo: p2.getAttribute("data-scroll-to") || t2._options.scrollTo,
          disableInteraction: l2
        });
      }
    }
    for (var d2 = 0, f2 = 0, b2 = n2; f2 < b2.length; f2++) {
      p2 = b2[f2];
      if ((!t2._options.group || p2.getAttribute("data-intro-group") === t2._options.group) && null === p2.getAttribute("data-step")) {
        for (; void 0 !== o2[d2]; ) d2++;
        l2 = p2.hasAttribute("data-disable-interaction") ? !!p2.getAttribute("data-disable-interaction") : t2._options.disableInteraction, o2[d2] = {
          element: p2,
          title: p2.getAttribute("data-title") || "",
          intro: p2.getAttribute("data-intro") || "",
          step: d2 + 1,
          tooltipClass: p2.getAttribute("data-tooltip-class") || void 0,
          highlightClass: p2.getAttribute("data-highlight-class") || void 0,
          position: p2.getAttribute("data-position") || t2._options.tooltipPosition,
          scrollTo: p2.getAttribute("data-scroll-to") || t2._options.scrollTo,
          disableInteraction: l2
        };
      }
    }
  }
  for (var m2 = [], g2 = 0; g2 < o2.length; g2++) o2[g2] && m2.push(o2[g2]);
  return (o2 = m2).sort(function(t3, e4) {
    return t3.step - e4.step;
  }), o2;
}
function J(t2, e3) {
  var n2 = t2._currentStep;
  if (null != n2 && -1 != n2) {
    var o2 = t2._introItems[n2], i2 = document.querySelector(".introjs-tooltipReferenceLayer"), r2 = document.querySelector(".introjs-helperLayer"), s2 = document.querySelector(".introjs-disableInteraction");
    w(t2, o2, r2), w(t2, o2, i2), w(t2, o2, s2), e3 && (t2._introItems = Z(t2, t2._targetElement), function(t3, e4) {
      if (t3._options.showBullets) {
        var n3 = document.querySelector(".introjs-bullets");
        n3 && n3.parentNode && n3.parentNode.replaceChild(T(t3, e4), n3);
      }
    }(t2, o2), I(i2, n2, t2._introItems.length));
    var a2 = document.querySelector(".introjs-arrow"), l2 = document.querySelector(".introjs-tooltip");
    return l2 && a2 && j(t2, t2._introItems[n2], l2, a2), U(t2), t2;
  }
}
function K(t2) {
  J(t2);
}
function tt(t2, e3) {
  if (void 0 === e3 && (e3 = false), t2 && t2.parentElement) {
    var n2 = t2.parentElement;
    e3 ? (y(t2, {
      opacity: "0"
    }), window.setTimeout(function() {
      try {
        n2.removeChild(t2);
      } catch (t3) {
      }
    }, 500)) : n2.removeChild(t2);
  }
}
function et(t2, o2, i2) {
  return void 0 === i2 && (i2 = false), e(this, void 0, void 0, function() {
    var e3, r2, s2, a2;
    return n(this, function(n2) {
      switch (n2.label) {
        case 0:
          return e3 = true, void 0 === t2._introBeforeExitCallback ? [3, 2] : [4, t2._introBeforeExitCallback.call(t2, o2)];
        case 1:
          e3 = n2.sent(), n2.label = 2;
        case 2:
          if (!i2 && false === e3) return [2];
          if ((r2 = Array.from(o2.querySelectorAll(".introjs-overlay"))) && r2.length) for (s2 = 0, a2 = r2; s2 < a2.length; s2++) tt(a2[s2]);
          return tt(o2.querySelector(".introjs-helperLayer"), true), tt(o2.querySelector(".introjs-tooltipReferenceLayer")), tt(o2.querySelector(".introjs-disableInteraction")), tt(document.querySelector(".introjsFloatingElement")), A(), l.off(window, "keydown", R, t2, true), l.off(window, "resize", K, t2, true), c(t2._introExitCallback) ? [4, t2._introExitCallback.call(t2)] : [3, 4];
        case 3:
          n2.sent(), n2.label = 4;
        case 4:
          return t2._currentStep = -1, [2];
      }
    });
  });
}
function nt(t2, o2) {
  return e(this, void 0, void 0, function() {
    var i2;
    return n(this, function(r2) {
      switch (r2.label) {
        case 0:
          return t2.isActive() ? c(t2._introStartCallback) ? [4, t2._introStartCallback.call(t2, o2)] : [3, 2] : [2, false];
        case 1:
          r2.sent(), r2.label = 2;
        case 2:
          return 0 === (i2 = Z(t2, o2)).length ? [2, false] : (t2._introItems = i2, function(t3, o3) {
            var i3 = this, r3 = x("div", {
              className: "introjs-overlay"
            });
            y(r3, {
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              position: "fixed"
            }), o3.appendChild(r3), true === t3._options.exitOnOverlayClick && (y(r3, {
              cursor: "pointer"
            }), r3.onclick = function() {
              return e(i3, void 0, void 0, function() {
                return n(this, function(e3) {
                  switch (e3.label) {
                    case 0:
                      return [4, et(t3, o3)];
                    case 1:
                      return e3.sent(), [2];
                  }
                });
              });
            });
          }(t2, o2), [4, B(t2)]);
        case 3:
          r2.sent(), o2.addEventListener, t2._options.keyboardNavigation && l.on(window, "keydown", R, t2, true), l.on(window, "resize", K, t2, true), r2.label = 4;
        case 4:
          return [2, false];
      }
    });
  });
}
function ot(t2, e3, n2) {
  return t2[e3] = n2, t2;
}
var it = function() {
  function t2(t3) {
    this._currentStep = -1, this._introItems = [], this._hintItems = [], this._targetElement = t3, this._options = {
      steps: [],
      hints: [],
      isActive: true,
      nextLabel: "Next",
      prevLabel: "Back",
      skipLabel: "\xD7",
      doneLabel: "Done",
      hidePrev: false,
      hideNext: false,
      nextToDone: true,
      tooltipPosition: "bottom",
      tooltipClass: "",
      group: "",
      highlightClass: "",
      exitOnEsc: true,
      exitOnOverlayClick: true,
      showStepNumbers: false,
      stepNumbersOfLabel: "of",
      keyboardNavigation: true,
      showButtons: true,
      showBullets: true,
      showProgress: false,
      scrollToElement: true,
      scrollTo: "element",
      scrollPadding: 30,
      overlayOpacity: 0.5,
      autoPosition: true,
      positionPrecedence: ["bottom", "top", "right", "left"],
      disableInteraction: false,
      dontShowAgain: false,
      dontShowAgainLabel: "Don't show this again",
      dontShowAgainCookie: "introjs-dontShowAgain",
      dontShowAgainCookieDays: 365,
      helperElementPadding: 10,
      hintPosition: "top-middle",
      hintButtonLabel: "Got it",
      hintShowButton: true,
      hintAutoRefreshInterval: 10,
      hintAnimation: true,
      buttonClass: "introjs-button",
      progressBarAdditionalClass: false
    };
  }
  return t2.prototype.isActive = function() {
    return (!this._options.dontShowAgain || "" === (t3 = i(this._options.dontShowAgainCookie)) || "true" !== t3) && this._options.isActive;
    var t3;
  }, t2.prototype.clone = function() {
    return new t2(this._targetElement);
  }, t2.prototype.setOption = function(t3, e3) {
    return this._options = ot(this._options, t3, e3), this;
  }, t2.prototype.setOptions = function(t3) {
    return this._options = function(t4, e3) {
      for (var n2 = 0, o2 = Object.entries(e3); n2 < o2.length; n2++) {
        var i2 = o2[n2];
        t4 = ot(t4, i2[0], i2[1]);
      }
      return t4;
    }(this._options, t3), this;
  }, t2.prototype.start = function() {
    return e(this, void 0, void 0, function() {
      return n(this, function(t3) {
        switch (t3.label) {
          case 0:
            return [4, nt(this, this._targetElement)];
          case 1:
            return t3.sent(), [2, this];
        }
      });
    });
  }, t2.prototype.goToStep = function(t3) {
    return e(this, void 0, void 0, function() {
      return n(this, function(e3) {
        switch (e3.label) {
          case 0:
            return [4, P(this, t3)];
          case 1:
            return e3.sent(), [2, this];
        }
      });
    });
  }, t2.prototype.addStep = function(t3) {
    return this._options.steps || (this._options.steps = []), this._options.steps.push(t3), this;
  }, t2.prototype.addSteps = function(t3) {
    if (!t3.length) return this;
    for (var e3 = 0; e3 < t3.length; e3++) this.addStep(t3[e3]);
    return this;
  }, t2.prototype.goToStepNumber = function(t3) {
    return e(this, void 0, void 0, function() {
      return n(this, function(e3) {
        switch (e3.label) {
          case 0:
            return [4, q(this, t3)];
          case 1:
            return e3.sent(), [2, this];
        }
      });
    });
  }, t2.prototype.nextStep = function() {
    return e(this, void 0, void 0, function() {
      return n(this, function(t3) {
        switch (t3.label) {
          case 0:
            return [4, B(this)];
          case 1:
            return t3.sent(), [2, this];
        }
      });
    });
  }, t2.prototype.previousStep = function() {
    return e(this, void 0, void 0, function() {
      return n(this, function(t3) {
        switch (t3.label) {
          case 0:
            return [4, H(this)];
          case 1:
            return t3.sent(), [2, this];
        }
      });
    });
  }, t2.prototype.currentStep = function() {
    return this._currentStep;
  }, t2.prototype.exit = function(t3) {
    return e(this, void 0, void 0, function() {
      return n(this, function(e3) {
        switch (e3.label) {
          case 0:
            return [4, et(this, this._targetElement, t3)];
          case 1:
            return e3.sent(), [2, this];
        }
      });
    });
  }, t2.prototype.refresh = function(t3) {
    return J(this, t3), this;
  }, t2.prototype.setDontShowAgain = function(t3) {
    return r(this, t3), this;
  }, t2.prototype.onbeforechange = function(t3) {
    if (!c(t3)) throw new Error("Provided callback for onbeforechange was not a function");
    return this._introBeforeChangeCallback = t3, this;
  }, t2.prototype.onchange = function(t3) {
    if (!c(t3)) throw new Error("Provided callback for onchange was not a function.");
    return this._introChangeCallback = t3, this;
  }, t2.prototype.onafterchange = function(t3) {
    if (!c(t3)) throw new Error("Provided callback for onafterchange was not a function");
    return this._introAfterChangeCallback = t3, this;
  }, t2.prototype.oncomplete = function(t3) {
    if (!c(t3)) throw new Error("Provided callback for oncomplete was not a function.");
    return this._introCompleteCallback = t3, this;
  }, t2.prototype.onhintsadded = function(t3) {
    if (!c(t3)) throw new Error("Provided callback for onhintsadded was not a function.");
    return this._hintsAddedCallback = t3, this;
  }, t2.prototype.onhintclick = function(t3) {
    if (!c(t3)) throw new Error("Provided callback for onhintclick was not a function.");
    return this._hintClickCallback = t3, this;
  }, t2.prototype.onhintclose = function(t3) {
    if (!c(t3)) throw new Error("Provided callback for onhintclose was not a function.");
    return this._hintCloseCallback = t3, this;
  }, t2.prototype.onstart = function(t3) {
    if (!c(t3)) throw new Error("Provided callback for onstart was not a function.");
    return this._introStartCallback = t3, this;
  }, t2.prototype.onexit = function(t3) {
    if (!c(t3)) throw new Error("Provided callback for onexit was not a function.");
    return this._introExitCallback = t3, this;
  }, t2.prototype.onskip = function(t3) {
    if (!c(t3)) throw new Error("Provided callback for onskip was not a function.");
    return this._introSkipCallback = t3, this;
  }, t2.prototype.onbeforeexit = function(t3) {
    if (!c(t3)) throw new Error("Provided callback for onbeforeexit was not a function.");
    return this._introBeforeExitCallback = t3, this;
  }, t2.prototype.addHints = function() {
    return e(this, void 0, void 0, function() {
      return n(this, function(t3) {
        switch (t3.label) {
          case 0:
            return [4, $(this, this._targetElement)];
          case 1:
            return t3.sent(), [2, this];
        }
      });
    });
  }, t2.prototype.hideHint = function(t3) {
    return e(this, void 0, void 0, function() {
      return n(this, function(e3) {
        switch (e3.label) {
          case 0:
            return [4, D(this, t3)];
          case 1:
            return e3.sent(), [2, this];
        }
      });
    });
  }, t2.prototype.hideHints = function() {
    return e(this, void 0, void 0, function() {
      return n(this, function(t3) {
        switch (t3.label) {
          case 0:
            return [4, F(this)];
          case 1:
            return t3.sent(), [2, this];
        }
      });
    });
  }, t2.prototype.showHint = function(t3) {
    return z(t3), this;
  }, t2.prototype.showHints = function() {
    return e(this, void 0, void 0, function() {
      return n(this, function(t3) {
        switch (t3.label) {
          case 0:
            return [4, V(this)];
          case 1:
            return t3.sent(), [2, this];
        }
      });
    });
  }, t2.prototype.removeHints = function() {
    return function(t3) {
      for (var e3 = 0, n2 = M(".introjs-hint"); e3 < n2.length; e3++) {
        var o2 = n2[e3].getAttribute("data-step");
        o2 && G(parseInt(o2, 10));
      }
      l.off(document, "click", Y, t3, false), l.off(window, "resize", U, t3, true), t3._hintsAutoRefreshFunction && l.off(window, "scroll", t3._hintsAutoRefreshFunction, t3, true);
    }(this), this;
  }, t2.prototype.removeHint = function(t3) {
    return G(t3), this;
  }, t2.prototype.showHintDialog = function(t3) {
    return e(this, void 0, void 0, function() {
      return n(this, function(e3) {
        switch (e3.label) {
          case 0:
            return [4, X(this, t3)];
          case 1:
            return e3.sent(), [2, this];
        }
      });
    });
  }, t2;
}();
var rt = function e2(n2) {
  var o2;
  if ("object" === t(n2)) o2 = new it(n2);
  else if ("string" == typeof n2) {
    var i2 = document.querySelector(n2);
    if (!i2) throw new Error("There is no element with given selector.");
    o2 = new it(i2);
  } else o2 = new it(document.body);
  return e2.instances[a(o2, "introjs-instance")] = o2, o2;
};
rt.version = "7.2.0", rt.instances = {};

// src/app/Service/tutorial.service.ts
var _TutorialService = class _TutorialService {
  constructor() {
    this.intro = rt();
  }
  configureSteps() {
    this.intro.setOptions({
      steps: [
        {
          element: "#pantallaPosts",
          intro: "Bienvenido a POWERZONE tu red social fitness \u{1F4AA}\u{1F4AA}. Aqu\xED podr\xE1s compartir tus rutinas de entrenamiento, dietas y mucho m\xE1s. \u{1F600}"
        },
        {
          element: "#pantallaPosts",
          intro: "Esta es la pantalla de inicio, aqu\xED podr\xE1s ver los posts de tus amigos y publicar tus propios posts.\u{1F440}\u{1F440}"
        },
        {
          element: "#posts",
          intro: "Aqu\xED podr\xE1s ver los posts de tus amigos y publicar tus propios posts.\u{1F440}"
        },
        {
          element: "#barra-busqueda",
          intro: "Aqu\xED podr\xE1s buscar\u{1F50E}\u{1F50E} por # los posts de tus amigos."
        },
        {
          element: "#filtro",
          intro: "Aqu\xED podr\xE1s filtrar los posts por mas gustados, comentados o solo por tus seguidores."
        },
        {
          element: "#like-button",
          intro: "Puedes darle like\u2764\uFE0F a los posts de tus amigos."
        },
        {
          element: "#chat",
          intro: "Puedes comentar\u{1F4AC} los posts de tus amigos."
        },
        {
          element: "#comentarios",
          intro: "Aqu\xED podr\xE1s ver los comentarios\u{1F4AC} de tus amigos."
        },
        {
          element: "#guardar",
          intro: "Puedes guardar\u{1F510} los posts que te gusten."
        },
        {
          element: "#compartir",
          intro: "Puedes compartir los posts de tus amigos."
        },
        {
          element: "#busqueda",
          intro: "Aqui podr\xE1s buscar\u{1F50E}\u{1F50E} usuarios registrados en la aplicaci\xF3n"
        },
        {
          element: "#publicar2",
          intro: "Aqu\xED podr\xE1s publicar tus propios posts."
        },
        {
          element: "#publicar",
          intro: "Aqu\xED tambien podr\xE1s publicar tus propios posts."
        },
        {
          element: "#mensajes",
          intro: "Aqu\xED podr\xE1s publicar tus propios posts."
        },
        {
          element: "#chatbot",
          intro: "Podr\xE1s hablar con nuestra IA fitness, puede hacer rutinas y darte dietas. \u{1F9BE}\u{1F916}\u{1F91C}\u{1F91B}\u{1F468}"
        },
        {
          element: "#notificaciones",
          intro: "Aqu\xED podr\xE1s ver las notificaciones"
        },
        {
          element: "#perfil",
          intro: "Mira tu perfil, posts, seguidores y seguidos"
        },
        {
          element: "#sugerencias",
          intro: "Aqu\xED podr\xE1s ver sugerencias de usuarios para seguir"
        }
      ],
      showProgress: true,
      showBullets: false,
      disableInteraction: true,
      overlayOpacity: 0.7
    });
  }
  startTour() {
    console.log("Iniciando el tour...");
    setTimeout(() => {
      this.configureSteps();
      this.intro.start();
    }, 500);
  }
};
_TutorialService.\u0275fac = function TutorialService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _TutorialService)();
};
_TutorialService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TutorialService, factory: _TutorialService.\u0275fac, providedIn: "root" });
var TutorialService = _TutorialService;

// src/app/Screen/posts/posts.component.ts
function PostsComponent_ion_row_18_ng_template_10_div_0_ion_input_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-input", 44);
    \u0275\u0275twoWayListener("ngModelChange", function PostsComponent_ion_row_18_ng_template_10_div_0_ion_input_12_Template_ion_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r2.reportReason, $event) || (ctx_r2.reportReason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.reportReason);
  }
}
function PostsComponent_ion_row_18_ng_template_10_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "ion-select", 44);
    \u0275\u0275twoWayListener("ngModelChange", function PostsComponent_ion_row_18_ng_template_10_div_0_Template_ion_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.reportReason1, $event) || (ctx_r2.reportReason1 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(2, "ion-select-option", 45);
    \u0275\u0275text(3, "Spam");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-select-option", 46);
    \u0275\u0275text(5, "Abuso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ion-select-option", 47);
    \u0275\u0275text(7, "Contenido inapropiado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ion-select-option", 48);
    \u0275\u0275text(9, "Informaci\xF3n falsa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "ion-select-option", 49);
    \u0275\u0275text(11, "Otro");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, PostsComponent_ion_row_18_ng_template_10_div_0_ion_input_12_Template, 1, 1, "ion-input", 50);
    \u0275\u0275elementStart(13, "ion-col", 51)(14, "ion-button", 52);
    \u0275\u0275listener("click", function PostsComponent_ion_row_18_ng_template_10_div_0_Template_ion_button_click_14_listener() {
      \u0275\u0275restoreView(_r6);
      const post_r2 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.reportPost(post_r2));
    });
    \u0275\u0275element(15, "ion-icon", 53);
    \u0275\u0275elementStart(16, "ion-label");
    \u0275\u0275text(17, "Reportar");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.reportReason1);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ctx_r2.reportReason1 === "otro");
  }
}
function PostsComponent_ion_row_18_ng_template_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54)(1, "ion-col", 51)(2, "ion-button", 52);
    \u0275\u0275listener("click", function PostsComponent_ion_row_18_ng_template_10_div_1_Template_ion_button_click_2_listener() {
      \u0275\u0275restoreView(_r8);
      const post_r2 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deletePost(post_r2, "SANCTIONED"));
    });
    \u0275\u0275element(3, "ion-icon", 53);
    \u0275\u0275elementStart(4, "ion-label");
    \u0275\u0275text(5, "Eliminar y advertir");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "ion-col", 51)(7, "ion-button", 55);
    \u0275\u0275listener("click", function PostsComponent_ion_row_18_ng_template_10_div_1_Template_ion_button_click_7_listener() {
      \u0275\u0275restoreView(_r8);
      const post_r2 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deletePost(post_r2, "SOLVED"));
    });
    \u0275\u0275element(8, "ion-icon", 56);
    \u0275\u0275elementStart(9, "ion-label");
    \u0275\u0275text(10, "Dejar pasar");
    \u0275\u0275elementEnd()()()();
  }
}
function PostsComponent_ion_row_18_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PostsComponent_ion_row_18_ng_template_10_div_0_Template, 18, 2, "div", 41)(1, PostsComponent_ion_row_18_ng_template_10_div_1_Template, 11, 0, "div", 42);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", !ctx_r2.isAdmin1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isAdmin1);
  }
}
function PostsComponent_ion_row_18_ion_col_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-col", 57);
    \u0275\u0275element(1, "ion-img", 58);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const post_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", post_r2.image_post);
  }
}
function PostsComponent_ion_row_18_ion_avatar_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-avatar");
    \u0275\u0275element(1, "img", 59);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const post_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", post_r2.avatarcomment, \u0275\u0275sanitizeUrl);
  }
}
function PostsComponent_ion_row_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-row", 18)(1, "ion-col", 19)(2, "div", 20)(3, "ion-button", 21);
    \u0275\u0275listener("click", function PostsComponent_ion_row_18_Template_ion_button_click_3_listener() {
      const post_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.navigateToProfile(post_r2.post == null ? null : post_r2.post.id));
    });
    \u0275\u0275elementStart(4, "ion-avatar");
    \u0275\u0275element(5, "img", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 23);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "ion-icon", 24);
    \u0275\u0275listener("click", function PostsComponent_ion_row_18_Template_ion_icon_click_8_listener($event) {
      const ctx_r3 = \u0275\u0275restoreView(_r1);
      const post_r2 = ctx_r3.$implicit;
      const i_r5 = ctx_r3.index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.presentPopover(i_r5, $event, post_r2));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "ion-popover", 25);
    \u0275\u0275listener("didDismiss", function PostsComponent_ion_row_18_Template_ion_popover_didDismiss_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openPopoverIndex = -1);
    });
    \u0275\u0275template(10, PostsComponent_ion_row_18_ng_template_10_Template, 2, 2, "ng-template");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, PostsComponent_ion_row_18_ion_col_11_Template, 2, 1, "ion-col", 26);
    \u0275\u0275element(12, "ion-col", 27);
    \u0275\u0275elementStart(13, "ion-col", 28)(14, "ion-button", 29);
    \u0275\u0275listener("click", function PostsComponent_ion_row_18_Template_ion_button_click_14_listener() {
      const post_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.likePost(post_r2));
    });
    \u0275\u0275element(15, "ion-icon", 30);
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "ion-button", 31);
    \u0275\u0275listener("click", function PostsComponent_ion_row_18_Template_ion_button_click_18_listener() {
      const post_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openNewCommentModal(post_r2.post == null ? null : post_r2.post.id, post_r2));
    });
    \u0275\u0275element(19, "ion-icon", 32);
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "ion-button", 33);
    \u0275\u0275listener("click", function PostsComponent_ion_row_18_Template_ion_button_click_22_listener() {
      const post_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.savePost(post_r2));
    });
    \u0275\u0275element(23, "ion-icon", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "ion-button", 34);
    \u0275\u0275listener("click", function PostsComponent_ion_row_18_Template_ion_button_click_24_listener() {
      const post_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sharePost(post_r2));
    });
    \u0275\u0275element(25, "ion-icon", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "ion-col", 36);
    \u0275\u0275listener("click", function PostsComponent_ion_row_18_Template_ion_col_click_26_listener() {
      const post_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.viewPostDetails(post_r2));
    });
    \u0275\u0275elementStart(27, "div", 37);
    \u0275\u0275template(28, PostsComponent_ion_row_18_ion_avatar_28_Template, 2, 1, "ion-avatar", 38);
    \u0275\u0275elementStart(29, "span", 39)(30, "b");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "span", 40);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const post_r2 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("id", "post-" + (post_r2.post == null ? null : post_r2.post.id));
    \u0275\u0275advance(5);
    \u0275\u0275property("src", post_r2.avatar, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(post_r2.nickname);
    \u0275\u0275advance(2);
    \u0275\u0275property("isOpen", ctx_r2.openPopoverIndex === i_r5);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", post_r2.image_post);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r2.highlightHashtags(post_r2.post == null ? null : post_r2.post.content), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(3);
    \u0275\u0275property("name", post_r2.liked ? "heart" : "heart-outline");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(post_r2.numlikes);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(post_r2.numcomments);
    \u0275\u0275advance(2);
    \u0275\u0275property("name", post_r2.saved ? "bookmark" : "bookmark-outline");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", post_r2.avatarcomment && post_r2.avatarcomment.trim().length > 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(post_r2.nicknamecomment);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", post_r2.firstcomment, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(35, 14, post_r2.post == null ? null : post_r2.post.createdAt, "dd/MM/yyyy HH:mm"));
  }
}
var _PostsComponent = class _PostsComponent {
  constructor(router, postService, modalController, toastController, profile, adminService, tutorialService, sanitizer, commentService) {
    this.router = router;
    this.postService = postService;
    this.modalController = modalController;
    this.toastController = toastController;
    this.profile = profile;
    this.adminService = adminService;
    this.tutorialService = tutorialService;
    this.sanitizer = sanitizer;
    this.commentService = commentService;
    this.posts = [];
    this.selectedFilter = "recientes";
    this.users = [];
    this.searchQuery = "";
    this.isOpen = false;
    this.reportReason = "";
    this.openPopoverIndex = -1;
    this.isAdmin1 = false;
    this.reportReason1 = "";
    addIcons({ bookmark, heart, chatbubble, shareSocial, heartOutline, bookmarkOutline, ellipsisHorizontal, start, trash, exitOutline });
  }
  ngOnInit() {
    this.isAdmin();
    this.startTutorialIfNeeded();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.loadPosts();
      }
    });
  }
  // Esta función se llama al hacer click en el ícono y abre el popover correspondiente
  presentPopover(index, ev, post) {
    this.openPopoverIndex = index;
  }
  highlightHashtags(text) {
    if (!text)
      return "";
    const replacedText = text.replace(/#(\w+)/g, '<span class="hashtag">#$1</span>');
    return this.sanitizer.bypassSecurityTrustHtml(replacedText);
  }
  deletePost(post, state) {
    this.adminService.putWarning(post.post.id, state).subscribe({
      next: () => {
        console.log(`Deleted post: ${post.post.id}`);
        this.isOpen = false;
        this.ngOnInit();
      },
      error: (error) => {
        console.error("Error deleting the post:", error);
      }
    });
    this.openPopoverIndex = -1;
  }
  isAdmin() {
    this.profile.isAdmin().subscribe({
      next: (isAdmin) => {
        this.isAdmin1 = isAdmin;
      },
      error: (error) => {
        this.isAdmin1 = false;
        console.error("Error checking if user is admin:", error);
      }
    });
  }
  reportPost(post) {
    var _a;
    const token = sessionStorage.getItem("token");
    if (!token) {
      console.error("No token found in session storage");
      return;
    }
    const postId = (_a = post.post) == null ? void 0 : _a.id;
    if (postId === void 0) {
      console.error("Post ID not found");
      return;
    }
    if (this.reportReason1 !== "otro") {
      this.reportReason = this.reportReason1;
    }
    this.postService.reportPost(postId, this.reportReason).subscribe({
      next: () => {
        console.log(`Reported post: ${postId}`);
        this.isOpen = false;
        this.reportReason = "";
        this.reportReason1 = "";
        this.ngOnInit();
      },
      error: (error) => {
        console.error("Error reporting the post:", error);
        this.isOpen = false;
        this.reportReason = "";
        this.reportReason1 = "";
      }
    });
    this.openPopoverIndex = -1;
  }
  startTutorialIfNeeded() {
    const token = sessionStorage.getItem("token");
    if (token) {
      this.postService.isNewUser(token).subscribe({
        next: (isNewUser) => {
          if (isNewUser) {
            console.log("Iniciando tutorial...");
            setTimeout(() => {
              this.tutorialService.startTour();
            }, 3500);
            this.postService.changeUserStatus(token).subscribe({
              next: () => {
                console.log("Estado del usuario actualizado.");
              },
              error: (error) => {
                console.error("Error actualizando estado del usuario:", error);
              }
            });
          }
        },
        error: (error) => {
          console.error("Error verificando si es nuevo usuario:", error);
        }
      });
    } else {
      console.error("No se encontr\xF3 token en session storage");
    }
  }
  viewPostDetails(post) {
    var _a;
    const postId = (_a = post.post) == null ? void 0 : _a.id;
    if (postId !== void 0) {
      this.router.navigate([`/post-details`, postId]);
    } else {
      console.error("Post ID not found");
    }
  }
  loadAllPosts() {
    return __async(this, null, function* () {
      var _a;
      const token = sessionStorage.getItem("token");
      if (!token) {
        console.error("No token found in session storage");
        return;
      }
      try {
        const posts = yield this.postService.getAllPosts(token).toPromise();
        this.posts = posts || [];
        for (const post of this.posts) {
          const postId = (_a = post.post) == null ? void 0 : _a.id;
          if (postId !== void 0) {
            post.liked = yield this.postService.hasLikedPost(token, postId).toPromise();
            post.saved = yield this.postService.hasSavedPost(token, postId).toPromise();
          }
        }
      } catch (error) {
        console.error("Error fetching all posts:", error);
      }
    });
  }
  navigateToProfile(postId) {
    const token = sessionStorage.getItem("token");
    if (!token) {
      console.error("No token found in session storage");
      return;
    }
    if (postId === void 0) {
      console.error("Post ID not found");
      return;
    }
    this.postService.getUserIdByPostId(token, postId).subscribe((userId) => {
      this.router.navigate([`/profile/${userId}`]);
    }, (error) => {
      console.error("Error fetching user ID:", error);
    });
  }
  likePost(post) {
    return __async(this, null, function* () {
      var _a, _b, _c;
      const token = sessionStorage.getItem("token");
      if (!token) {
        console.error("No token found in session storage");
        return;
      }
      const postId = (_a = post.post) == null ? void 0 : _a.id;
      if (postId === void 0) {
        console.error("Post ID not found");
        return;
      }
      try {
        const hasLiked = yield this.postService.hasLikedPost(token, postId).toPromise();
        if (hasLiked) {
          yield this.postService.unlikePost(token, postId).toPromise();
          console.log(`Unliked post: ${postId}`);
          post.liked = false;
          post.numlikes = ((_b = post.numlikes) != null ? _b : 0) - 1;
        } else {
          yield this.postService.likePost(token, postId).toPromise();
          console.log(`Liked post: ${postId}`);
          post.liked = true;
          post.numlikes = ((_c = post.numlikes) != null ? _c : 0) + 1;
        }
      } catch (error) {
        console.error("Error handling like status:", error);
      }
    });
  }
  savePost(post) {
    return __async(this, null, function* () {
      var _a;
      const token = sessionStorage.getItem("token");
      if (!token) {
        console.error("No token found in session storage");
        return;
      }
      const postId = (_a = post.post) == null ? void 0 : _a.id;
      if (postId === void 0) {
        console.error("Post ID not found");
        return;
      }
      if (post.saved) {
        this.postService.unsavePost(token, postId).subscribe(() => __async(this, null, function* () {
          console.log(`Unsaved post: ${postId}`);
          post.saved = false;
          const toast = yield this.toastController.create({
            message: "Eliminado de los Post guardados",
            color: "success",
            duration: 2e3,
            position: "top"
          });
          yield toast.present();
        }), (error) => {
          console.error("Error unsaving the post:", error);
        });
      } else {
        this.postService.savePost(token, postId).subscribe(() => __async(this, null, function* () {
          console.log(`Saved post: ${postId}`);
          post.saved = true;
          const toast = yield this.toastController.create({
            message: "Post guardado correctamente",
            color: "success",
            duration: 2e3,
            position: "top",
            cssClass: "custom-toast"
          });
          yield toast.present();
        }), (error) => {
          console.error("Error saving the post:", error);
        });
      }
    });
  }
  openAddPostModal() {
    return __async(this, null, function* () {
      const modal = yield this.modalController.create({
        component: NewPostComponent
      });
      yield modal.present();
    });
  }
  //TODO: Cambiar a un modal
  openNewCommentModal(idpost, post) {
    return __async(this, null, function* () {
      var _a;
      const modal = yield this.modalController.create({
        component: NewCommentComponent,
        componentProps: { postId: idpost }
      });
      yield modal.present();
      yield modal.onDidDismiss();
      post.numcomments = ((_a = post.numcomments) != null ? _a : 0) + 1;
      this.loadComments(post);
    });
  }
  loadComments(post) {
    return __async(this, null, function* () {
      var _a;
      const token = sessionStorage.getItem("token");
      if (!token) {
        console.error("No token found in session storage");
        return;
      }
      try {
        const postId = (_a = post.post) == null ? void 0 : _a.id;
        if (postId === void 0) {
          console.error("Post ID not found");
          return;
        }
        const comments = yield this.commentService.getCommentsByPostId(token, postId).toPromise();
        if (comments) {
          post.numcomments = comments.length;
          if (comments.length > 0) {
            const firstComment = comments[0];
            post.avatarcomment = firstComment.avatar;
            post.nicknamecomment = firstComment.nickname;
            post.firstcomment = firstComment.content;
          }
        }
      } catch (error) {
        console.error("Error loading comments:", error);
      }
    });
  }
  sharePost(post) {
    return __async(this, null, function* () {
      var _a;
      const postId = (_a = post.post) == null ? void 0 : _a.id;
      if (postId === void 0) {
        console.error("Post ID not found");
        return;
      }
      const link = `${window.location.origin}/post-details/${postId}`;
      yield navigator.clipboard.writeText(link);
      const toast = yield this.toastController.create({
        message: "Enlace en el portapapeles",
        color: "success",
        duration: 2e3,
        position: "top",
        cssClass: "custom-toast"
      });
      yield toast.present();
    });
  }
  loadMostLikedPosts() {
    return __async(this, null, function* () {
      var _a;
      const token = sessionStorage.getItem("token");
      if (!token) {
        console.error("No token found in session storage");
        return;
      }
      try {
        const mostLikedPosts = yield this.postService.getPostsWithMostLikes(token).toPromise();
        const allPosts = yield this.postService.getAllPosts(token).toPromise();
        if (!mostLikedPosts || !allPosts) {
          console.error("Error: mostLikedPosts or allPosts is undefined");
          return;
        }
        const postIds = /* @__PURE__ */ new Set();
        const combinedPosts = [...mostLikedPosts, ...allPosts].filter((post) => {
          var _a2;
          const postId = (_a2 = post.post) == null ? void 0 : _a2.id;
          if (postId !== void 0 && !postIds.has(postId)) {
            postIds.add(postId);
            return true;
          }
          return false;
        });
        this.posts = combinedPosts.sort((a2, b2) => {
          var _a2, _b;
          return ((_a2 = b2.numlikes) != null ? _a2 : 0) - ((_b = a2.numlikes) != null ? _b : 0);
        });
        for (const post of this.posts) {
          const postId = (_a = post.post) == null ? void 0 : _a.id;
          if (postId !== void 0) {
            post.liked = yield this.postService.hasLikedPost(token, postId).toPromise();
            post.saved = yield this.postService.hasSavedPost(token, postId).toPromise();
          }
        }
      } catch (error) {
        console.error("Error loading posts:", error);
      }
    });
  }
  loadMostCommentedPosts() {
    return __async(this, null, function* () {
      var _a;
      const token = sessionStorage.getItem("token");
      if (!token) {
        console.error("No token found in session storage");
        return;
      }
      try {
        const mostCommentedPosts = yield this.postService.getPostsWithMostComments(token).toPromise();
        const allPosts = yield this.postService.getAllPosts(token).toPromise();
        if (!mostCommentedPosts || !allPosts) {
          console.error("Error: mostCommentedPosts or allPosts is undefined");
          return;
        }
        const postIds = /* @__PURE__ */ new Set();
        const combinedPosts = [...mostCommentedPosts, ...allPosts].filter((post) => {
          var _a2;
          const postId = (_a2 = post.post) == null ? void 0 : _a2.id;
          if (postId !== void 0 && !postIds.has(postId)) {
            postIds.add(postId);
            return true;
          }
          return false;
        });
        this.posts = combinedPosts.sort((a2, b2) => {
          var _a2, _b;
          return ((_a2 = b2.numcomments) != null ? _a2 : 0) - ((_b = a2.numcomments) != null ? _b : 0);
        });
        for (const post of this.posts) {
          const postId = (_a = post.post) == null ? void 0 : _a.id;
          if (postId !== void 0) {
            post.liked = yield this.postService.hasLikedPost(token, postId).toPromise();
            post.saved = yield this.postService.hasSavedPost(token, postId).toPromise();
          }
        }
      } catch (error) {
        console.error("Error loading posts:", error);
      }
    });
  }
  loadFollowedPosts() {
    const token = sessionStorage.getItem("token");
    if (!token) {
      console.error("No token found in session storage");
      return;
    }
    this.postService.getFollowedPosts(token).subscribe((followedPosts) => {
      console.log("Followed Posts:", followedPosts);
      const postIds = /* @__PURE__ */ new Set();
      this.posts = followedPosts.filter((post) => {
        var _a;
        const postId = (_a = post.post) == null ? void 0 : _a.id;
        if (postId !== void 0 && !postIds.has(postId)) {
          postIds.add(postId);
          return true;
        }
        return false;
      });
      this.posts.forEach((post) => {
        var _a;
        const postId = (_a = post.post) == null ? void 0 : _a.id;
        if (postId !== void 0) {
          this.postService.hasLikedPost(token, postId).subscribe((hasLiked) => post.liked = hasLiked, (error) => console.error(`Error checking like status for post ${postId}:`, error));
          this.postService.hasSavedPost(token, postId).subscribe((hasSaved) => post.saved = hasSaved, (error) => console.error(`Error checking save status for post ${postId}:`, error));
        }
      });
    }, (error) => console.error("Error loading followed posts:", error));
  }
  onFilterChange() {
    console.log("Filtro cambiado a:", this.selectedFilter);
    this.loadPosts();
  }
  ngOnChanges(changes) {
    if (changes["selectedFilter"] && !changes["selectedFilter"].isFirstChange()) {
      this.loadPosts();
    }
  }
  filterPostsByPattern() {
    if (this.searchQuery.trim() === "" || !this.searchQuery.includes("#")) {
      this.loadPosts();
      return;
    }
    this.postService.getPostsByPattern(this.searchQuery).subscribe((data) => {
      this.posts = data.filter((post) => {
        var _a;
        return ((_a = post.post) == null ? void 0 : _a.content) && post.post.content.includes(this.searchQuery);
      });
    }, (error) => {
      console.error("Error filtering posts by pattern:", error);
    });
  }
  loadPosts() {
    switch (this.selectedFilter) {
      case "recientes":
        this.loadAllPosts();
        break;
      case "mas-gustados":
        this.loadMostLikedPosts();
        break;
      case "mas-hablados":
        this.loadMostCommentedPosts();
        break;
      case "seguidores":
        this.loadFollowedPosts();
        break;
      default:
        this.loadAllPosts();
        break;
    }
  }
  onSearchChange() {
    if (this.searchQuery.trim().length > 0) {
      if (this.searchQuery.startsWith("#")) {
        this.filterPostsByPattern();
      } else {
        this.profile.searchProfiles(this.searchQuery).subscribe((data) => {
          if (data.length > 0) {
            this.loadPostsByUser(data[0].id);
          } else {
            this.users = [];
            this.loadPosts();
          }
        });
      }
    } else {
      this.users = [];
      this.loadPosts();
    }
  }
  loadPostsByUser(userId) {
    const token = sessionStorage.getItem("token") || "";
    this.postService.getUserPostsById(token, userId).subscribe((data) => {
      this.posts = data;
    }, (error) => {
      console.error("Error loading posts by user:", error);
    });
  }
};
_PostsComponent.\u0275fac = function PostsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PostsComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PostService), \u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(ProfileService), \u0275\u0275directiveInject(AdminService), \u0275\u0275directiveInject(TutorialService), \u0275\u0275directiveInject(DomSanitizer), \u0275\u0275directiveInject(CommentService));
};
_PostsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PostsComponent, selectors: [["app-posts"]], features: [\u0275\u0275NgOnChangesFeature], decls: 22, vars: 3, consts: [["id", "pantallaPosts", 1, "custom-scroll"], [1, "ion-no-padding", "post-container", "movil"], ["id", "posts", 1, "scroll-container"], [1, "sticky-header"], ["size", "9", "id", "barra-busqueda"], [3, "ngModelChange", "ionInput", "ngModel"], ["size-sm", "3", "size-md", "3", "id", "filtro"], [1, "post-list"], [1, "post-list-item"], ["aria-label", "Post Filter", 3, "ngModelChange", "ionChange", "ngModel"], ["value", "recientes"], ["value", "mas-gustados"], ["value", "mas-hablados"], ["value", "seguidores"], ["class", "post", 4, "ngFor", "ngForOf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["id", "publicar", 1, "custom-fab-button", 3, "click"], ["name", "add", 1, "custom-fab-icon"], [1, "post"], ["size", "12", 1, "user-info", 2, "display", "flex", "justify-content", "space-between", "align-items", "center"], [2, "display", "flex", "align-items", "center"], ["fill", "clear", 2, "padding", "0", 3, "click"], ["alt", "Imagen de perfil", 3, "src"], [1, "username"], ["name", "ellipsis-horizontal", 1, "more-button", 3, "click"], [3, "didDismiss", "isOpen"], ["size", "12", "class", "post-image", 4, "ngIf"], ["size", "12", 1, "post-description", 3, "innerHTML"], ["size", "12", 1, "post-actions"], ["fill", "clear", "id", "like-button", 1, "action-button", 3, "click"], [3, "name"], ["fill", "clear", "id", "chat", 1, "action-button", 3, "click"], ["name", "chatbubble"], ["fill", "clear", "id", "guardar", 1, "action-button", "save-button", 3, "click"], ["fill", "clear", "id", "compartir", 1, "action-button", 3, "click"], ["name", "share-social"], ["size", "12", "id", "comentarios", 1, "highlighted-comment", 3, "click"], [1, "comment-container"], [4, "ngIf"], [1, "comment"], [1, "post-date"], ["style", "margin: auto; padding-top: 10px;", 4, "ngIf"], ["style", "margin: auto", 4, "ngIf"], [2, "margin", "auto", "padding-top", "10px"], ["placeholder", "Raz\xF3n de reporte", 3, "ngModelChange", "ngModel"], ["value", "spam"], ["value", "abuso"], ["value", "contenido_inapropiado"], ["value", "informacion_falsa"], ["value", "otro"], ["placeholder", "Raz\xF3n de reporte", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["size", "12", 1, "post-actions", 2, "display", "flex", "justify-content", "center"], ["color", "danger", 3, "click"], ["name", "trash", "slot", "start"], [2, "margin", "auto"], ["color", "success", 3, "click"], ["name", "exit-outline", "slot", "start"], ["size", "12", 1, "post-image"], [1, "responsive-image", 3, "src"], [3, "src"]], template: function PostsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 0)(1, "ion-grid", 1)(2, "div", 2)(3, "ion-row", 3)(4, "ion-col", 4)(5, "ion-searchbar", 5);
    \u0275\u0275twoWayListener("ngModelChange", function PostsComponent_Template_ion_searchbar_ngModelChange_5_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
      return $event;
    });
    \u0275\u0275listener("ionInput", function PostsComponent_Template_ion_searchbar_ionInput_5_listener() {
      return ctx.onSearchChange();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "ion-col", 6)(7, "ion-list", 7)(8, "ion-item", 8)(9, "ion-select", 9);
    \u0275\u0275twoWayListener("ngModelChange", function PostsComponent_Template_ion_select_ngModelChange_9_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.selectedFilter, $event) || (ctx.selectedFilter = $event);
      return $event;
    });
    \u0275\u0275listener("ionChange", function PostsComponent_Template_ion_select_ionChange_9_listener() {
      return ctx.onFilterChange();
    });
    \u0275\u0275elementStart(10, "ion-select-option", 10);
    \u0275\u0275text(11, "Recientes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "ion-select-option", 11);
    \u0275\u0275text(13, "M\xE1s Gustados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "ion-select-option", 12);
    \u0275\u0275text(15, "M\xE1s Comentados");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "ion-select-option", 13);
    \u0275\u0275text(17, "Tus Seguidores");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275template(18, PostsComponent_ion_row_18_Template, 36, 17, "ion-row", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "ion-fab", 15)(20, "ion-fab-button", 16);
    \u0275\u0275listener("click", function PostsComponent_Template_ion_fab_button_click_20_listener() {
      return ctx.openAddPostModal();
    });
    \u0275\u0275element(21, "ion-icon", 17);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.selectedFilter);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx.posts);
  }
}, dependencies: [
  IonicModule,
  IonAvatar,
  IonButton,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonGrid,
  IonIcon,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
  IonSearchbar,
  IonSelect,
  IonSelectOption,
  IonPopover,
  SelectValueAccessorDirective,
  TextValueAccessorDirective,
  NgForOf,
  CommonModule,
  NgIf,
  DatePipe,
  FormsModule,
  NgControlStatus,
  NgModel
], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  background-color: #001f1f;\n  color: white;\n  padding: 10px;\n}\nion-content[_ngcontent-%COMP%] {\n  --background: #001f1f;\n  background-color: #001f1f !important;\n}\n.post-container[_ngcontent-%COMP%] {\n  max-width: 100%;\n  margin: 0 auto;\n}\n.post[_ngcontent-%COMP%] {\n  background-color: #0a4d4d;\n  border-radius: 15px;\n  padding: 15px;\n  margin-bottom: 15px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);\n}\n.post-image[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 12px;\n}\n.username[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n  color: #d9f7f7;\n}\n.post-image[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  width: 100%;\n  height: 300px;\n  object-fit: contain;\n  border: 4px solid #042F2E;\n  background-color: #042F2E;\n}\n.post-description[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 20px;\n  margin-left: 30px;\n  color: #d9f7f7;\n  font-weight: bold;\n}\n.post-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 10px;\n  padding: 10px;\n  background-color: rgba(255, 255, 255, 0.1);\n  border-radius: 10px;\n}\n.action-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  color: #d9f7f7;\n  font-size: 16px;\n}\n.highlighted-comment[_ngcontent-%COMP%]   .comment-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background-color: #013534;\n  border-radius: 10px;\n  padding: 10px;\n  color: white;\n}\n.custom-fab-button[_ngcontent-%COMP%] {\n  --background: #00a896;\n  --color: white;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);\n}\n.custom-fab-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n[_nghost-%COMP%]     .hashtag {\n  color: #00f5d4;\n  font-weight: bold;\n  cursor: pointer;\n}\n.post-date[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #d9f7f7;\n  margin-left: auto;\n}\n.responsive-image[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 1000px;\n  width: auto;\n  height: auto;\n  object-fit: contain;\n}\nion-content[_ngcontent-%COMP%]::part(scroll) {\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\nion-content[_ngcontent-%COMP%]::part(scroll)::-webkit-scrollbar {\n  display: none;\n}\n.custom-fab-button[_ngcontent-%COMP%] {\n  --background: #013534;\n  --color: white;\n}\n.custom-fab-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n@media (max-width: 1000px) {\n  .movil[_ngcontent-%COMP%] {\n    margin-top: 20%;\n  }\n}\n.post-date[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #fff;\n  margin-left: auto;\n  padding: 10px;\n  text-align: right;\n}\nion-list[_ngcontent-%COMP%] {\n  background-color: #0a4d4d;\n  color: white;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);\n  width: 180px;\n  height: 48px;\n  margin-bottom: 5px;\n}\nion-item[_ngcontent-%COMP%] {\n  --background: #0a4d4d;\n  color: white;\n  border-bottom: 1px solid white;\n}\nion-select[_ngcontent-%COMP%] {\n  color: white;\n}\nion-select[_ngcontent-%COMP%]::part(icon) {\n  color: white;\n}\n.comment[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  margin-left: 20px;\n}\nion-searchbar[_ngcontent-%COMP%] {\n  --background: #0a4d4d;\n  --border-color: white;\n  --border-width: 0 0 2px 0;\n  --border-radius: 15px;\n  height: 50px;\n}\n.sticky-header[_ngcontent-%COMP%] {\n  display: flex;\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n  background: #013534;\n  padding: 10px;\n}\n@media (max-width: 600px) {\n  .post-list[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .post-list-item[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  ion-col#barra-busqueda[_ngcontent-%COMP%] {\n    flex: 1;\n    width: 100%;\n  }\n  ion-col#filtro[_ngcontent-%COMP%] {\n    flex: 0 0 auto;\n  }\n}\n/*# sourceMappingURL=posts.component.css.map */'] });
var PostsComponent = _PostsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PostsComponent, { className: "PostsComponent", filePath: "src/app/screen/posts/posts.component.ts", lineNumber: 43 });
})();
export {
  PostsComponent
};
/*! Bundled license information:

intro.js/intro.module.js:
  (*!
   * Intro.js v7.2.0
   * https://introjs.com
   *
   * Copyright (C) 2012-2023 Afshin Mehrabani (@afshinmeh).
   * https://introjs.com
   *
   * Date: Mon, 14 Aug 2023 19:47:14 GMT
   *)
*/
//# sourceMappingURL=posts.component-YUHO4NRJ.js.map
