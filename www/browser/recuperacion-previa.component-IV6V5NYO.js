import {
  CarrouselComponent
} from "./chunk-PL5NUBZK.js";
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonImg,
  IonInput,
  IonItem,
  IonRow,
  IonText,
  IonicModule,
  RouterLinkDelegateDirective,
  TextValueAccessorDirective,
  environment
} from "./chunk-AZ27F32N.js";
import "./chunk-IRNVB6F3.js";
import {
  FormsModule,
  HttpClient,
  NgControlStatus,
  NgIf,
  NgModel,
  Router,
  RouterLink,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
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
import "./chunk-ZVATTXSA.js";

// src/app/Service/recuperacion-service.service.ts
var _RecuperacionServiceService = class _RecuperacionServiceService {
  constructor(http) {
    this.http = http;
    this.baseUrl = "/api/api/auth";
  }
  sendEmail(email) {
    return this.http.post(environment.apiUrl + `/api/auth/forgot-password?email=${email}`, null);
  }
  sendNewPassword(code, newPassword) {
    return this.http.post(environment.apiUrl + `/api/auth/reset-password?code=${code}&newPassword=${newPassword}`, null);
  }
};
_RecuperacionServiceService.\u0275fac = function RecuperacionServiceService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RecuperacionServiceService)(\u0275\u0275inject(HttpClient));
};
_RecuperacionServiceService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RecuperacionServiceService, factory: _RecuperacionServiceService.\u0275fac, providedIn: "root" });
var RecuperacionServiceService = _RecuperacionServiceService;

// src/app/Screen/recuperacion-previa/recuperacion-previa.component.ts
function RecuperacionPreviaComponent_ion_item_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item")(1, "ion-input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function RecuperacionPreviaComponent_ion_item_11_Template_ion_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.email, $event) || (ctx_r1.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.email);
  }
}
function RecuperacionPreviaComponent_ion_item_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item")(1, "ion-input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function RecuperacionPreviaComponent_ion_item_12_Template_ion_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.code, $event) || (ctx_r1.code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.code);
  }
}
function RecuperacionPreviaComponent_ion_item_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item")(1, "ion-input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function RecuperacionPreviaComponent_ion_item_13_Template_ion_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.password, $event) || (ctx_r1.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.password);
  }
}
function RecuperacionPreviaComponent_ion_item_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item")(1, "ion-input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function RecuperacionPreviaComponent_ion_item_14_Template_ion_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.passwordConfident, $event) || (ctx_r1.passwordConfident = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.passwordConfident);
  }
}
function RecuperacionPreviaComponent_ion_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 17);
    \u0275\u0275listener("click", function RecuperacionPreviaComponent_ion_button_15_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sendEmail());
    });
    \u0275\u0275text(1, "Enviar codigo de recupreci\xF3n");
    \u0275\u0275elementEnd();
  }
}
function RecuperacionPreviaComponent_ion_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 17);
    \u0275\u0275listener("click", function RecuperacionPreviaComponent_ion_button_16_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sendNewPassword());
    });
    \u0275\u0275text(1, "Recuperar cuenta");
    \u0275\u0275elementEnd();
  }
}
var _RecuperacionPreviaComponent = class _RecuperacionPreviaComponent {
  constructor(recu, router) {
    this.recu = recu;
    this.router = router;
    this.email = "";
    this.hecho = false;
    this.password = "";
    this.passwordConfident = "";
    this.code = "";
  }
  ngOnInit() {
  }
  sendEmail() {
    this.recu.sendEmail(this.email).subscribe({
      next: (data) => {
      },
      error: (err) => {
        console.error("Error al enviar el email", err);
      },
      complete: () => {
        this.hecho = true;
      }
    });
    this.hecho = true;
  }
  sendNewPassword() {
    this.recu.sendNewPassword(this.code, this.password).subscribe({
      next: () => {
        console.log("Hola");
      },
      error: (err) => {
        console.error("Error al enviar el email", err);
      }
    });
    this.router.navigate(["/login"]);
  }
};
_RecuperacionPreviaComponent.\u0275fac = function RecuperacionPreviaComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RecuperacionPreviaComponent)(\u0275\u0275directiveInject(RecuperacionServiceService), \u0275\u0275directiveInject(Router));
};
_RecuperacionPreviaComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecuperacionPreviaComponent, selectors: [["app-recuperacion-previa"]], decls: 24, vars: 6, consts: [[1, "Registrobody", 2, "height", "100%"], [1, "ion-no-padding"], [1, "Registrobody"], ["id", "onichan"], ["src", "../../../assets/img/marco2.png", 1, "overlay-image"], ["id", "onichan2"], ["size-lg", "6", "size-xs", "12", 1, "Registrobody"], [1, "subForm"], ["src", "assets/logo.png", "id", "logo"], [4, "ngIf"], ["expand", "block", 3, "click", 4, "ngIf"], [1, "subForm2"], ["routerLink", "/login"], ["label", "Introduce tu email", "placeholder", "Introduce tu email", 3, "ngModelChange", "ngModel"], ["label", "Codigo enviado a email", "placeholder", "Introduce el codigo", 3, "ngModelChange", "ngModel"], ["type", "password", "label", "Nueva contrase\xF1a", "placeholder", "Introduce la nueva contrase\xF1a", 3, "ngModelChange", "ngModel"], ["type", "password", "label", "Repite contrase\xF1a", "placeholder", "Repite la nueva contrase\xF1a", 3, "ngModelChange", "ngModel"], ["expand", "block", 3, "click"]], template: function RecuperacionPreviaComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 0)(1, "ion-grid", 1)(2, "ion-row")(3, "ion-col", 2)(4, "div", 3);
    \u0275\u0275element(5, "img", 4);
    \u0275\u0275elementStart(6, "div", 5);
    \u0275\u0275element(7, "app-carrousel");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "ion-col", 6)(9, "div", 7);
    \u0275\u0275element(10, "ion-img", 8);
    \u0275\u0275template(11, RecuperacionPreviaComponent_ion_item_11_Template, 2, 1, "ion-item", 9)(12, RecuperacionPreviaComponent_ion_item_12_Template, 2, 1, "ion-item", 9)(13, RecuperacionPreviaComponent_ion_item_13_Template, 2, 1, "ion-item", 9)(14, RecuperacionPreviaComponent_ion_item_14_Template, 2, 1, "ion-item", 9)(15, RecuperacionPreviaComponent_ion_button_15_Template, 2, 0, "ion-button", 10)(16, RecuperacionPreviaComponent_ion_button_16_Template, 2, 0, "ion-button", 10);
    \u0275\u0275elementStart(17, "div", 11)(18, "ion-text");
    \u0275\u0275text(19, "\xBFYa tienes Cuenta?");
    \u0275\u0275element(20, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "ion-text", 12)(22, "b");
    \u0275\u0275text(23, "Inicia Sesi\xF3n");
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", !ctx.hecho);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.hecho);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.hecho);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.hecho);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.hecho);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.hecho);
  }
}, dependencies: [
  CarrouselComponent,
  FormsModule,
  NgControlStatus,
  NgModel,
  IonicModule,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonImg,
  IonInput,
  IonItem,
  IonRow,
  IonText,
  TextValueAccessorDirective,
  RouterLinkDelegateDirective,
  NgIf,
  RouterLink
], styles: ['@charset "UTF-8";\n\n\n\n.Registrobody[_ngcontent-%COMP%] {\n  background-color: #042f2e;\n  color: white;\n  height: 100vh;\n  justify-content: center;\n  align-items: center;\n}\n#onichan[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n#onichan2[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#onichan[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  width: 100%;\n  height: auto;\n}\n#onichan[_ngcontent-%COMP%]   app-carrousel[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  height: auto;\n}\n.Registrobody[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --background: #042f2e;\n  color: white;\n}\n.Registrobody[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  --background: #042f2e;\n  color: white;\n}\n.Registrobody[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  color: white;\n}\n.Registrobody[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --background: #68aecc;\n  --color: white;\n}\n.subForm[_ngcontent-%COMP%] {\n  background-color: #042f2e;\n  border: 1px solid white;\n  border-radius: 5px;\n  width: 60%;\n  margin-top: 2%;\n  padding: 1%;\n  text-align: center;\n}\n.subForm2[_ngcontent-%COMP%] {\n  background-color: #042f2e;\n  border: 1px solid white;\n  border-radius: 5px;\n  width: 100%;\n  margin-top: 2%;\n  padding: 1%;\n  text-align: center;\n}\n.Registrobody[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]:first-child {\n  margin-right: 1%;\n}\n#logo[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 50%;\n  margin: 0 auto;\n  display: block;\n}\nion-col[_ngcontent-%COMP%]:first-child {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  padding-right: 4%;\n}\nion-col[_ngcontent-%COMP%]:last-child {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding-left: 2%;\n}\n.error[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 12px;\n  margin-top: 4px;\n}\nion-item.invalid[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  border: 1px solid red;\n  border-radius: 4px;\n}\n@media (max-width: 1000px) {\n  .Registrobody[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]:first-child {\n    display: none;\n  }\n  .subForm[_ngcontent-%COMP%] {\n    background-color: #042f2e;\n    border: 0;\n    width: 100%;\n    margin-top: 20px;\n    text-align: center;\n    padding: 30px;\n    gap: 20px;\n    display: flex;\n    flex-direction: column;\n  }\n  .subForm[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n    margin-bottom: 5%;\n  }\n  .subForm[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n    margin-top: 10%;\n  }\n  .subForm2[_ngcontent-%COMP%] {\n    margin-top: 10%;\n  }\n}\n/*# sourceMappingURL=recuperacion-previa.component.css.map */'] });
var RecuperacionPreviaComponent = _RecuperacionPreviaComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecuperacionPreviaComponent, { className: "RecuperacionPreviaComponent", filePath: "src/app/screen/recuperacion-previa/recuperacion-previa.component.ts", lineNumber: 22 });
})();
export {
  RecuperacionPreviaComponent
};
//# sourceMappingURL=recuperacion-previa.component-IV6V5NYO.js.map
