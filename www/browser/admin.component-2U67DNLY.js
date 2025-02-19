import {
  AdminService
} from "./chunk-IK76A6XB.js";
import {
  BooleanValueAccessorDirective,
  IonAvatar,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonLabel,
  IonList,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonText,
  IonTitle,
  IonToolbar,
  IonicModule,
  RouterLinkDelegateDirective
} from "./chunk-AZ27F32N.js";
import "./chunk-IRNVB6F3.js";
import {
  Router,
  RouterLink,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵpropertyInterpolate1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
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

// src/app/Screen/admin/admin.component.ts
function AdminComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item", 4)(1, "ion-avatar", 13);
    \u0275\u0275element(2, "img", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-label", 15)(4, "div", 16)(5, "span")(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "ion-checkbox", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 18)(10, "strong");
    \u0275\u0275text(11, "Motivo:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const report_r1 = ctx.$implicit;
    \u0275\u0275propertyInterpolate1("routerLink", "/post-details/", report_r1.idPost, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("src", report_r1.avatarReported, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("Reporte de ", report_r1.reporter, " hacia ", report_r1.reported, "");
    \u0275\u0275advance();
    \u0275\u0275property("checked", report_r1.state !== "PENDING");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", report_r1.reason, " ");
  }
}
function AdminComponent_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item", 8)(1, "ion-avatar", 13);
    \u0275\u0275element(2, "img", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "ion-label");
    \u0275\u0275text(5, " El usuario ");
    \u0275\u0275elementStart(6, "b");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " se le ha avisado ");
    \u0275\u0275elementStart(9, "b");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 20);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 21);
    \u0275\u0275element(13, "path", 22);
    \u0275\u0275elementStart(14, "g", 23);
    \u0275\u0275element(15, "path", 24)(16, "path", 25);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const avisado_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", avisado_r2.avatar, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(avisado_r2.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(avisado_r2.reportsCount);
  }
}
function AdminComponent_For_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item", 8)(1, "ion-avatar", 13);
    \u0275\u0275element(2, "img", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "ion-label");
    \u0275\u0275text(5, " El usuario ");
    \u0275\u0275elementStart(6, "b");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 20);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 21);
    \u0275\u0275element(11, "path", 22);
    \u0275\u0275elementStart(12, "g", 23);
    \u0275\u0275element(13, "path", 24)(14, "path", 25);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const suspendido_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", suspendido_r3.avatar, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(suspendido_r3.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ha sido baneado despu\xE9s de recibir ", suspendido_r3.reportsCount, " advertencias ");
  }
}
var _AdminComponent = class _AdminComponent {
  constructor(adminService, router) {
    this.adminService = adminService;
    this.router = router;
    this.reports = [];
    this.avisados = [];
    this.suspendidos = [];
  }
  ngOnInit() {
    console.log("Reports", this.reports);
    this.recuperarSuspendidos();
    this.recuperarAvisados();
    this.recuperarReportes();
  }
  onIonInfiniteReportes(event) {
    setTimeout(() => {
      this.recuperarReportes();
      event.target.complete();
    }, 500);
    window.location.reload();
  }
  onIonInfiniteAvisado(event) {
    setTimeout(() => {
      this.recuperarAvisados();
      event.target.complete();
    }, 500);
    window.location.reload();
  }
  onIonInfiniteSuspendidos(event) {
    setTimeout(() => {
      this.recuperarSuspendidos();
      event.target.complete();
    }, 500);
    window.location.reload();
  }
  recuperarReportes() {
    this.adminService.getReports(this.reports.length).subscribe({
      next: (data) => {
        console.log("Report", data);
        this.reports.push(...data);
      },
      error: (err) => {
        this.router.navigate(["/login"]);
      }
    });
  }
  recuperarAvisados() {
    this.adminService.getUserWarnings(this.avisados.length).subscribe({
      next: (data) => {
        console.log("Avisados", data);
        this.avisados.push(...data);
      },
      error: (err) => {
        this.router.navigate(["/login"]);
      }
    });
  }
  recuperarSuspendidos() {
    this.adminService.getUserBanned(this.suspendidos.length).subscribe({
      next: (data) => {
        console.log("Suspendidos", data);
        this.suspendidos.push(...data);
      },
      error: (err) => {
        this.router.navigate(["/login"]);
      }
    });
  }
};
_AdminComponent.\u0275fac = function AdminComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AdminComponent)(\u0275\u0275directiveInject(AdminService), \u0275\u0275directiveInject(Router));
};
_AdminComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminComponent, selectors: [["app-admin"]], decls: 53, vars: 0, consts: [["tab", "home"], ["id", "home-page", 1, "page-container"], [1, "example-content"], [1, "ion-no-padding"], [1, "item_list", 3, "routerLink"], [3, "ionInfinite"], ["tab", "library"], ["id", "library-page", 1, "page-container"], [1, "item_list"], ["tab", "search"], ["id", "search-page", 1, "page-container"], ["slot", "bottom"], [1, "ion-text-size"], ["slot", "start"], ["alt", "Avatar del reportado", 3, "src"], [1, "report-info"], [1, "report-header"], ["disabled", "", 3, "checked"], [1, "report-reason"], ["alt", "avatar", 3, "src"], [1, "icon-container"], ["viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg"], ["d", "m0 0h24v24h-24z", "fill", "#fff", "opacity", "0"], ["fill", "#231f20"], ["d", "m9.71 11.29a1 1 0 0 0 -1.42 1.42l3 3a1 1 0 0 0 .71.29 1 1 0 0 0 .72-.34l7-8a1 1 0 0 0 -1.5-1.32l-6.22 7.2z"], ["d", "m21 11a1 1 0 0 0 -1 1 8 8 0 0 1 -8 8 8 8 0 0 1 -5.67-13.64 7.93 7.93 0 0 1 5.67-2.36 8.79 8.79 0 0 1 1.9.22 1 1 0 1 0 .47-1.94 10.54 10.54 0 0 0 -2.37-.28 10 10 0 0 0 -7 17.09 9.93 9.93 0 0 0 7 2.91 10 10 0 0 0 10-10 1 1 0 0 0 -1-1z"]], template: function AdminComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-tabs")(1, "ion-tab", 0)(2, "div", 1)(3, "ion-header")(4, "ion-toolbar")(5, "ion-title")(6, "h1");
    \u0275\u0275text(7, "Reportes de usuarios");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(8, "ion-content")(9, "div", 2)(10, "ion-list", 3);
    \u0275\u0275repeaterCreate(11, AdminComponent_For_12_Template, 13, 7, "ion-item", 4, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "ion-infinite-scroll", 5);
    \u0275\u0275listener("ionInfinite", function AdminComponent_Template_ion_infinite_scroll_ionInfinite_13_listener($event) {
      return ctx.onIonInfiniteReportes($event);
    });
    \u0275\u0275element(14, "ion-infinite-scroll-content");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(15, "ion-tab", 6)(16, "div", 7)(17, "ion-header")(18, "ion-toolbar")(19, "ion-title")(20, "h1");
    \u0275\u0275text(21, "Avisados");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(22, "ion-content")(23, "div", 2)(24, "ion-list", 3);
    \u0275\u0275repeaterCreate(25, AdminComponent_For_26_Template, 17, 3, "ion-item", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "ion-infinite-scroll", 5);
    \u0275\u0275listener("ionInfinite", function AdminComponent_Template_ion_infinite_scroll_ionInfinite_27_listener($event) {
      return ctx.onIonInfiniteAvisado($event);
    });
    \u0275\u0275element(28, "ion-infinite-scroll-content");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(29, "ion-tab", 9)(30, "div", 10)(31, "ion-header")(32, "ion-toolbar")(33, "ion-title")(34, "h1");
    \u0275\u0275text(35, "Suspendidos");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(36, "ion-content")(37, "div", 2)(38, "ion-list", 3);
    \u0275\u0275repeaterCreate(39, AdminComponent_For_40_Template, 15, 3, "ion-item", 8, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "ion-infinite-scroll", 5);
    \u0275\u0275listener("ionInfinite", function AdminComponent_Template_ion_infinite_scroll_ionInfinite_41_listener($event) {
      return ctx.onIonInfiniteSuspendidos($event);
    });
    \u0275\u0275element(42, "ion-infinite-scroll-content");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(43, "ion-tab-bar", 11)(44, "ion-tab-button", 0)(45, "ion-text", 12);
    \u0275\u0275text(46, "Reportes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "ion-tab-button", 6)(48, "ion-text", 12);
    \u0275\u0275text(49, "Avisados");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "ion-tab-button", 9)(51, "ion-text", 12);
    \u0275\u0275text(52, "Suspendidos");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(11);
    \u0275\u0275repeater(ctx.reports);
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx.avisados);
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx.suspendidos);
  }
}, dependencies: [IonicModule, IonAvatar, IonCheckbox, IonContent, IonHeader, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonLabel, IonList, IonTab, IonTabBar, IonTabButton, IonText, IonTitle, IonToolbar, BooleanValueAccessorDirective, IonTabs, RouterLinkDelegateDirective, RouterLink], styles: ['@charset "UTF-8";\n\n\n\n.page-container[_ngcontent-%COMP%] {\n  height: 92%;\n  background-color: #042f2e;\n  padding: 0.5rem;\n}\nion-tabs[_ngcontent-%COMP%], \nion-tab-bar[_ngcontent-%COMP%], \nion-toolbar[_ngcontent-%COMP%] {\n  --background: #042f2e;\n}\nion-content[_ngcontent-%COMP%], \nion-list[_ngcontent-%COMP%], \n.example-content[_ngcontent-%COMP%], \nion-label[_ngcontent-%COMP%], \nh1[_ngcontent-%COMP%], \nspan[_ngcontent-%COMP%], \n.ion-text-size[_ngcontent-%COMP%] {\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  color: #eaeaea;\n}\nion-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.2rem;\n  color: #eaeaea;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.ion-text-size[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 500;\n}\n.ion-no-padding[_ngcontent-%COMP%] {\n  padding: 0 !important;\n  margin: 0 !important;\n}\nion-list[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\nion-item.item_list[_ngcontent-%COMP%] {\n  --background: #0a6c6a;\n  margin: 0.5rem 0;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n  transition: transform 0.1s ease, box-shadow 0.1s ease;\n}\nion-item.item_list[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px) scale(1.02);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);\n}\nion-avatar[_ngcontent-%COMP%] {\n  min-width: 50px;\n  min-height: 50px;\n  margin-right: 0.5rem;\n}\nion-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border: 2px solid #fff;\n}\n.report-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 5px;\n}\n.report-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n.report-reason[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #b3b3b3;\n}\nion-checkbox[disabled][_ngcontent-%COMP%] {\n  --background: #b3b3b3;\n  --checkmark-color: #b3b3b3;\n}\n.icon-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 30px;\n}\n.icon-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  fill: #fff;\n}\nion-tab-bar[_ngcontent-%COMP%] {\n  --border: none;\n  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.3);\n}\nion-tab-button[_ngcontent-%COMP%] {\n  --color: #eaeaea;\n  --color-selected: #2aa198;\n  --ripple-color: #2aa198;\n  text-transform: uppercase;\n}\n@media (max-width: 768px) {\n  .ion-text-size[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  ion-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n/*# sourceMappingURL=admin.component.css.map */'] });
var AdminComponent = _AdminComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminComponent, { className: "AdminComponent", filePath: "src/app/screen/admin/admin.component.ts", lineNumber: 18 });
})();
export {
  AdminComponent
};
//# sourceMappingURL=admin.component-2U67DNLY.js.map
