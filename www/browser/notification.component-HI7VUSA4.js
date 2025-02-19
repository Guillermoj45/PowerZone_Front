import {
  IonAvatar,
  IonCol,
  IonContent,
  IonGrid,
  IonItem,
  IonLabel,
  IonRow,
  IonTitle,
  IonToolbar,
  IonicModule,
  environment
} from "./chunk-AZ27F32N.js";
import "./chunk-IRNVB6F3.js";
import {
  HttpClient,
  HttpHeaders,
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  Router,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
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
import "./chunk-ZVATTXSA.js";

// src/app/Service/NotificationService.ts
var _NotificationService = class _NotificationService {
  constructor(http) {
    this.http = http;
    this.apiUrl = environment.apiUrl + "/notification";
    this.token = sessionStorage.getItem("token");
  }
  getHeaders() {
    return new HttpHeaders({
      "Authorization": `Bearer ${this.token}`
    });
  }
  getNotifications() {
    return this.http.get(`${this.apiUrl}`, { headers: this.getHeaders() });
  }
};
_NotificationService.\u0275fac = function NotificationService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NotificationService)(\u0275\u0275inject(HttpClient));
};
_NotificationService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationService, factory: _NotificationService.\u0275fac, providedIn: "root" });
var NotificationService = _NotificationService;

// src/app/Screen/notification/notification.component.ts
function NotificationComponent_ng_container_5_ng_container_5_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " te ha enviado un mensaje");
    \u0275\u0275elementEnd();
  }
}
function NotificationComponent_ng_container_5_ng_container_5_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " ha publicado una nueva publicaci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function NotificationComponent_ng_container_5_ng_container_5_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " le ha dado me gusta a tu publicaci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function NotificationComponent_ng_container_5_ng_container_5_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " te ha seguido");
    \u0275\u0275elementEnd();
  }
}
function NotificationComponent_ng_container_5_ng_container_5_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " ha comentado tu publicaci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function NotificationComponent_ng_container_5_ng_container_5_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " ha realizado una acci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function NotificationComponent_ng_container_5_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-row")(2, "ion-col")(3, "ion-item", 7);
    \u0275\u0275listener("click", function NotificationComponent_ng_container_5_ng_container_5_Template_ion_item_click_3_listener() {
      const notification_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToNotification(notification_r2));
    });
    \u0275\u0275elementStart(4, "ion-avatar", 8);
    \u0275\u0275element(5, "img", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ion-label", 10)(7, "b");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 11);
    \u0275\u0275template(10, NotificationComponent_ng_container_5_ng_container_5_span_10_Template, 2, 0, "span", 12)(11, NotificationComponent_ng_container_5_ng_container_5_span_11_Template, 2, 0, "span", 12)(12, NotificationComponent_ng_container_5_ng_container_5_span_12_Template, 2, 0, "span", 12)(13, NotificationComponent_ng_container_5_ng_container_5_span_13_Template, 2, 0, "span", 12)(14, NotificationComponent_ng_container_5_ng_container_5_span_14_Template, 2, 0, "span", 12)(15, NotificationComponent_ng_container_5_ng_container_5_span_15_Template, 2, 0, "span", 13);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const notification_r2 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275property("src", notification_r2.emitter.avatar, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(notification_r2.emitter.nickName);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitch", notification_r2.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "MESSAGE");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "NEW_POST");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "NEW_LIKE");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "NEW_FOLLOWER");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "NEW_COMMENT");
  }
}
function NotificationComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-row", 5)(2, "ion-col")(3, "h2");
    \u0275\u0275text(4, "Hoy");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(5, NotificationComponent_ng_container_5_ng_container_5_Template, 16, 8, "ng-container", 6);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r2.notificationsToday);
  }
}
function NotificationComponent_ng_container_6_ng_container_5_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " te ha enviado un mensaje");
    \u0275\u0275elementEnd();
  }
}
function NotificationComponent_ng_container_6_ng_container_5_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " ha publicado una nueva publicaci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function NotificationComponent_ng_container_6_ng_container_5_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " le ha dado me gusta a tu publicaci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function NotificationComponent_ng_container_6_ng_container_5_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " te ha seguido");
    \u0275\u0275elementEnd();
  }
}
function NotificationComponent_ng_container_6_ng_container_5_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " ha comentado tu publicaci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function NotificationComponent_ng_container_6_ng_container_5_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " ha realizado una acci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function NotificationComponent_ng_container_6_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-row")(2, "ion-col")(3, "ion-item", 7);
    \u0275\u0275listener("click", function NotificationComponent_ng_container_6_ng_container_5_Template_ion_item_click_3_listener() {
      const notification_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToNotification(notification_r5));
    });
    \u0275\u0275elementStart(4, "ion-avatar", 8);
    \u0275\u0275element(5, "img", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ion-label", 10)(7, "b");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 11);
    \u0275\u0275template(10, NotificationComponent_ng_container_6_ng_container_5_span_10_Template, 2, 0, "span", 12)(11, NotificationComponent_ng_container_6_ng_container_5_span_11_Template, 2, 0, "span", 12)(12, NotificationComponent_ng_container_6_ng_container_5_span_12_Template, 2, 0, "span", 12)(13, NotificationComponent_ng_container_6_ng_container_5_span_13_Template, 2, 0, "span", 12)(14, NotificationComponent_ng_container_6_ng_container_5_span_14_Template, 2, 0, "span", 12)(15, NotificationComponent_ng_container_6_ng_container_5_span_15_Template, 2, 0, "span", 13);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const notification_r5 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275property("src", notification_r5.emitter.avatar, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(notification_r5.emitter.nickName);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitch", notification_r5.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "MESSAGE");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "NEW_POST");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "NEW_LIKE");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "NEW_FOLLOWER");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "NEW_COMMENT");
  }
}
function NotificationComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-row", 5)(2, "ion-col")(3, "h2");
    \u0275\u0275text(4, "Ayer");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(5, NotificationComponent_ng_container_6_ng_container_5_Template, 16, 8, "ng-container", 6);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r2.notificationsYesterday);
  }
}
function NotificationComponent_ng_container_7_ng_container_5_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " te ha enviado un mensaje");
    \u0275\u0275elementEnd();
  }
}
function NotificationComponent_ng_container_7_ng_container_5_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " ha publicado una nueva publicaci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function NotificationComponent_ng_container_7_ng_container_5_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " le ha dado me gusta a tu publicaci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function NotificationComponent_ng_container_7_ng_container_5_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " te ha seguido");
    \u0275\u0275elementEnd();
  }
}
function NotificationComponent_ng_container_7_ng_container_5_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " ha comentado tu publicaci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function NotificationComponent_ng_container_7_ng_container_5_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " ha realizado una acci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function NotificationComponent_ng_container_7_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-row")(2, "ion-col")(3, "ion-item", 7);
    \u0275\u0275listener("click", function NotificationComponent_ng_container_7_ng_container_5_Template_ion_item_click_3_listener() {
      const notification_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToNotification(notification_r7));
    });
    \u0275\u0275elementStart(4, "ion-avatar", 8);
    \u0275\u0275element(5, "img", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ion-label", 10)(7, "b");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 11);
    \u0275\u0275template(10, NotificationComponent_ng_container_7_ng_container_5_span_10_Template, 2, 0, "span", 12)(11, NotificationComponent_ng_container_7_ng_container_5_span_11_Template, 2, 0, "span", 12)(12, NotificationComponent_ng_container_7_ng_container_5_span_12_Template, 2, 0, "span", 12)(13, NotificationComponent_ng_container_7_ng_container_5_span_13_Template, 2, 0, "span", 12)(14, NotificationComponent_ng_container_7_ng_container_5_span_14_Template, 2, 0, "span", 12)(15, NotificationComponent_ng_container_7_ng_container_5_span_15_Template, 2, 0, "span", 13);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const notification_r7 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275property("src", notification_r7.emitter.avatar, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(notification_r7.emitter.nickName);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitch", notification_r7.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "MESSAGE");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "NEW_POST");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "NEW_LIKE");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "NEW_FOLLOWER");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "NEW_COMMENT");
  }
}
function NotificationComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-row", 5)(2, "ion-col")(3, "h2");
    \u0275\u0275text(4, "\xDAltimos 7 d\xEDas");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(5, NotificationComponent_ng_container_7_ng_container_5_Template, 16, 8, "ng-container", 6);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r2.notificationsLast7Days);
  }
}
function NotificationComponent_ng_container_8_ng_container_5_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " te ha enviado un mensaje");
    \u0275\u0275elementEnd();
  }
}
function NotificationComponent_ng_container_8_ng_container_5_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " ha publicado una nueva publicaci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function NotificationComponent_ng_container_8_ng_container_5_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " le ha dado me gusta a tu publicaci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function NotificationComponent_ng_container_8_ng_container_5_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " te ha seguido");
    \u0275\u0275elementEnd();
  }
}
function NotificationComponent_ng_container_8_ng_container_5_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " ha comentado tu publicaci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function NotificationComponent_ng_container_8_ng_container_5_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " ha realizado una acci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function NotificationComponent_ng_container_8_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-row")(2, "ion-col")(3, "ion-item", 7);
    \u0275\u0275listener("click", function NotificationComponent_ng_container_8_ng_container_5_Template_ion_item_click_3_listener() {
      const notification_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goToNotification(notification_r9));
    });
    \u0275\u0275elementStart(4, "ion-avatar", 8);
    \u0275\u0275element(5, "img", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ion-label", 10)(7, "b");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 11);
    \u0275\u0275template(10, NotificationComponent_ng_container_8_ng_container_5_span_10_Template, 2, 0, "span", 12)(11, NotificationComponent_ng_container_8_ng_container_5_span_11_Template, 2, 0, "span", 12)(12, NotificationComponent_ng_container_8_ng_container_5_span_12_Template, 2, 0, "span", 12)(13, NotificationComponent_ng_container_8_ng_container_5_span_13_Template, 2, 0, "span", 12)(14, NotificationComponent_ng_container_8_ng_container_5_span_14_Template, 2, 0, "span", 12)(15, NotificationComponent_ng_container_8_ng_container_5_span_15_Template, 2, 0, "span", 13);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const notification_r9 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275property("src", notification_r9.emitter.avatar, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(notification_r9.emitter.nickName);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitch", notification_r9.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "MESSAGE");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "NEW_POST");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "NEW_LIKE");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "NEW_FOLLOWER");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "NEW_COMMENT");
  }
}
function NotificationComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "ion-row", 5)(2, "ion-col")(3, "h2");
    \u0275\u0275text(4, "\xDAltimos 10 d\xEDas");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(5, NotificationComponent_ng_container_8_ng_container_5_Template, 16, 8, "ng-container", 6);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r2.notificationsLast10Days);
  }
}
var _NotificationComponent = class _NotificationComponent {
  constructor(notificationService, router) {
    this.notificationService = notificationService;
    this.router = router;
    this.notifications = [];
    this.notificationsToday = [];
    this.notificationsYesterday = [];
    this.notificationsLast7Days = [];
    this.notificationsLast10Days = [];
  }
  ngOnInit() {
    this.notificationService.getNotifications().subscribe({
      next: (notifications) => {
        this.notifications = notifications;
        this.groupNotifications();
      },
      error: (err) => console.error(err),
      complete: () => console.log("complete")
    });
  }
  groupNotifications() {
    const today = /* @__PURE__ */ new Date();
    this.notifications.forEach((notif) => {
      const notifDate = new Date(notif.date.toString());
      const diffMs = today.getTime() - notifDate.getTime();
      const diffDays = Math.floor(diffMs / (1e3 * 60 * 60 * 24));
      if (diffDays === 0) {
        this.notificationsToday.push(notif);
      } else if (diffDays === 1) {
        this.notificationsYesterday.push(notif);
      } else if (diffDays > 1 && diffDays <= 7) {
        this.notificationsLast7Days.push(notif);
      } else if (diffDays > 7 && diffDays <= 10) {
        this.notificationsLast10Days.push(notif);
      }
    });
  }
  goToNotification(notification) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
    console.log("Notification:", notification);
    switch (notification.type) {
      case "MESSAGE":
        this.router.navigate(["/chat/" + notification.groupMessenger.grupouser.group.id]);
        break;
      case "NEW_POST":
        if ((_c = (_b = (_a = notification.postDto) == null ? void 0 : _a.post) == null ? void 0 : _b.id) == null ? void 0 : _c.toString()) {
          this.router.navigate(["/post-details/" + ((_f = (_e = (_d = notification.postDto) == null ? void 0 : _d.post) == null ? void 0 : _e.id) == null ? void 0 : _f.toString())]);
        }
        break;
      case "NEW_LIKE":
        if ((_i = (_h = (_g = notification.postDto) == null ? void 0 : _g.post) == null ? void 0 : _h.id) == null ? void 0 : _i.toString()) {
          this.router.navigate(["/post-details/" + ((_l = (_k = (_j = notification.postDto) == null ? void 0 : _j.post) == null ? void 0 : _k.id) == null ? void 0 : _l.toString())]);
        }
        break;
      case "NEW_FOLLOWER":
        if (notification.emitter.id) {
          this.router.navigate(["/profile/" + notification.emitter.id]);
        }
        break;
      case "NEW_COMMENT":
        if (notification.comment.postId) {
          this.router.navigate(["/post-details/", (_o = (_n = (_m = notification.postDto) == null ? void 0 : _m.post) == null ? void 0 : _n.id) == null ? void 0 : _o.toString()]);
        }
        break;
      default:
        break;
    }
  }
};
_NotificationComponent.\u0275fac = function NotificationComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NotificationComponent)(\u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(Router));
};
_NotificationComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationComponent, selectors: [["app-notification"]], decls: 9, vars: 4, consts: [["fullscreen", ""], [1, "ion-no-padding"], [1, "movil"], [1, "header"], [4, "ngIf"], [1, "section-header"], [4, "ngFor", "ngForOf"], ["lines", "none", 1, "notification-item", 3, "click"], ["slot", "start"], ["alt", "avatar", 3, "src"], [1, "notification-label"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"]], template: function NotificationComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 0)(1, "ion-grid", 1)(2, "ion-toolbar", 2)(3, "ion-title", 3);
    \u0275\u0275text(4, "Notificaciones");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, NotificationComponent_ng_container_5_Template, 6, 1, "ng-container", 4)(6, NotificationComponent_ng_container_6_Template, 6, 1, "ng-container", 4)(7, NotificationComponent_ng_container_7_Template, 6, 1, "ng-container", 4)(8, NotificationComponent_ng_container_8_Template, 6, 1, "ng-container", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx.notificationsToday.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.notificationsYesterday.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.notificationsLast7Days.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.notificationsLast10Days.length > 0);
  }
}, dependencies: [
  IonicModule,
  IonAvatar,
  IonCol,
  IonContent,
  IonGrid,
  IonItem,
  IonLabel,
  IonRow,
  IonTitle,
  IonToolbar,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  NgIf,
  NgForOf
], styles: ['@charset "UTF-8";\n\n\n\nion-grid[_ngcontent-%COMP%] {\n  background-color: #007875;\n  height: 100%;\n}\nion-content[_ngcontent-%COMP%] {\n  --background: #007875;\n}\nion-toolbar[_ngcontent-%COMP%] {\n  --background: #042f2e;\n  --color: white;\n  padding: 12px 20px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n  border-bottom: 4px solid #ffffff;\n}\n.header[_ngcontent-%COMP%] {\n  font-size: 1.6em;\n  font-weight: bold;\n  color: #ffffff;\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n}\nh1[_ngcontent-%COMP%], \nh2[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #fff;\n}\n.section-header[_ngcontent-%COMP%] {\n  margin-left: 5%;\n}\nion-item[_ngcontent-%COMP%] {\n  --inner-padding-top: 10px;\n  --inner-padding-bottom: 10px;\n  --border-radius: 10px;\n  --background: #fff;\n  --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  margin: 0 5%;\n}\n.notification-item[_ngcontent-%COMP%] {\n  background-color: #FFF;\n  border-radius: 8px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  padding: 10px;\n}\n.notification-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f8f8;\n}\n.notification-label[_ngcontent-%COMP%] {\n  color: #333;\n}\nion-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  border: 2px solid #FF6F61;\n}\nion-col[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\nmovil[_ngcontent-%COMP%] {\n  margin: 0;\n}\n@media (max-width: 1000px) {\n  .movil[_ngcontent-%COMP%] {\n    margin-top: 15%;\n  }\n}\n/*# sourceMappingURL=notification.component.css.map */'] });
var NotificationComponent = _NotificationComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationComponent, { className: "NotificationComponent", filePath: "src/app/screen/notification/notification.component.ts", lineNumber: 22 });
})();
export {
  NotificationComponent
};
//# sourceMappingURL=notification.component-HI7VUSA4.js.map
