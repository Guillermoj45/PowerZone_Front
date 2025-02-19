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
  IonInputPasswordToggle,
  IonItem,
  IonRow,
  IonText
} from "./chunk-ED5SIT5L.js";
import {
  RegistroService
} from "./chunk-FQYQIARY.js";
import {
  AlertController
} from "./chunk-AZ27F32N.js";
import "./chunk-IRNVB6F3.js";
import {
  ActivatedRoute,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Router,
  RouterLink,
  Validators,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-A54Y6D4U.js";
import "./chunk-ZTVCPE3I.js";
import "./chunk-5H55HBS7.js";
import "./chunk-HHPBBMWP.js";
import "./chunk-74ZUTEVJ.js";
import "./chunk-6NM256MY.js";
import "./chunk-V4CINFRS.js";
import "./chunk-KQEJHESJ.js";
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
import "./chunk-LHYYZWFK.js";
import "./chunk-4WT7J3YM.js";
import "./chunk-6FFMTLXI.js";
import "./chunk-XIXT7DF6.js";
import "./chunk-CC56LK7W.js";
import "./chunk-K3HSXS64.js";
import {
  __async,
  __spreadValues
} from "./chunk-ZVATTXSA.js";

// src/app/Models/Login.ts
var Login = class {
};

// src/app/Screen/login/login.component.ts
var _LoginComponent = class _LoginComponent {
  constructor(fb, authService, router, route, alertController) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.route = route;
    this.alertController = alertController;
    this.login = new Login();
    this.loginForm = this.fb.group({
      email: [this.login.email, [Validators.required, Validators.email]],
      password: [this.login.password, Validators.required]
    });
  }
  ngOnInit() {
  }
  showAlert(message) {
    return __async(this, null, function* () {
      const alert = yield this.alertController.create({
        header: "Error",
        message,
        buttons: ["OK"]
      });
      yield alert.present();
    });
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      this.markFormTouched();
      this.showAlert("Para acceder se necesitan rellenar los campos correctamente.");
      return;
    }
    this.login = __spreadValues(__spreadValues({}, this.login), this.loginForm.value);
    this.authService.login(this.login).subscribe((response) => {
      const token = response.token;
      if (token) {
        this.authService.isBanned(token).subscribe({
          next: (response2) => {
            if (response2 == true) {
              this.showAlert("Login fallido: Usuario baneado");
            } else {
              sessionStorage.setItem("token", token);
              console.log("Navigating to /posts");
              const returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/posts";
              this.router.navigateByUrl(returnUrl);
            }
          },
          error: (error) => {
            console.error("Error checking ban status", error);
            this.showAlert("Error checking ban status");
          }
        });
      } else {
        this.showAlert("Login fallido: Datos inv\xE1lidos");
      }
    }, (error) => {
      console.error("Login fallido", error);
      this.showAlert("Login fallido: Datos inv\xE1lidos");
    });
  }
  // Función para marcar todos los controles del formulario como "touched"
  markFormTouched() {
    Object.values(this.loginForm.controls).forEach((control) => {
      control.markAsTouched();
    });
  }
};
_LoginComponent.\u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(RegistroService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(AlertController));
};
_LoginComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 33, vars: 1, consts: [[1, "Registrobody", 2, "height", "100%"], [1, "ion-no-padding"], ["size-lg", "6", 1, "Registrobody"], ["id", "onichan"], ["src", "../../../assets/img/marco2.png", 1, "overlay-image"], ["id", "onichan2"], ["size-lg", "6", "size-xs", "12", 1, "Registrobody"], [1, "subForm"], ["src", "assets/logo.png", "id", "logo"], [3, "ngSubmit", "formGroup"], ["formControlName", "email", "label", "Correo", "placeholder", "Ingrese su correo"], ["formControlName", "password", "type", "password", "label", "Contrase\xF1a", "placeholder", "Ingrese su contrase\xF1a"], ["slot", "end"], ["type", "submit", "expand", "block"], [1, "subForm2"], ["routerLink", "/registro"], [1, "subForm3"], ["routerLink", "/recu"]], template: function LoginComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 0)(1, "ion-grid", 1)(2, "ion-row")(3, "ion-col", 2)(4, "div", 3);
    \u0275\u0275element(5, "img", 4);
    \u0275\u0275elementStart(6, "div", 5);
    \u0275\u0275element(7, "app-carrousel");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "ion-col", 6)(9, "div", 7);
    \u0275\u0275element(10, "ion-img", 8);
    \u0275\u0275elementStart(11, "form", 9);
    \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_11_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275elementStart(12, "ion-item");
    \u0275\u0275element(13, "ion-input", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "ion-item")(15, "ion-input", 11);
    \u0275\u0275element(16, "ion-input-password-toggle", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "ion-button", 13);
    \u0275\u0275text(18, "Iniciar Sesi\xF3n");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 14)(20, "ion-text");
    \u0275\u0275text(21, "\xBFNo tienes Cuenta?");
    \u0275\u0275element(22, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "ion-text", 15)(24, "b");
    \u0275\u0275text(25, "Reg\xEDstrate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 16)(27, "ion-text");
    \u0275\u0275text(28, "\xBFHas olvidado tu contrase\xF1a?");
    \u0275\u0275element(29, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "ion-text", 17)(31, "b");
    \u0275\u0275text(32, "Recuperar Cuenta");
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(11);
    \u0275\u0275property("formGroup", ctx.loginForm);
  }
}, dependencies: [
  CarrouselComponent,
  FormsModule,
  \u0275NgNoValidate,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  FormGroupDirective,
  FormControlName,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonImg,
  IonInput,
  IonInputPasswordToggle,
  IonItem,
  IonRow,
  IonText,
  RouterLink
], styles: ['@charset "UTF-8";\n\n\n\n.Registrobody[_ngcontent-%COMP%] {\n  background-color: #042f2e;\n  color: white;\n  height: 100vh;\n  justify-content: center;\n  align-items: center;\n}\n#onichan[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n#onichan2[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#onichan[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  width: 100%;\n  height: auto;\n}\n#onichan[_ngcontent-%COMP%]   app-carrousel[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  height: auto;\n}\n.Registrobody[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --background: #042f2e;\n  color: white;\n}\n.Registrobody[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  --background: #042f2e;\n  color: white;\n}\n.Registrobody[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  color: white;\n}\n.Registrobody[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --background: #68aecc;\n  --color: white;\n}\n.subForm[_ngcontent-%COMP%] {\n  background-color: #042f2e;\n  border: 1px solid white;\n  border-radius: 5px;\n  width: 60%;\n  margin-top: 2%;\n  padding: 1%;\n  text-align: center;\n}\n.subForm2[_ngcontent-%COMP%] {\n  background-color: #042f2e;\n  border: 1px solid white;\n  border-radius: 5px;\n  width: 100%;\n  margin-top: 2%;\n  padding: 1%;\n  text-align: center;\n}\n.subForm3[_ngcontent-%COMP%] {\n  background-color: #042f2e;\n  width: 100%;\n  margin-top: 3%;\n  padding: 1%;\n  text-align: center;\n}\n.Registrobody[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]:first-child {\n  margin-right: 1%;\n}\n#logo[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 50%;\n  margin: 0 auto;\n  display: block;\n}\nion-col[_ngcontent-%COMP%]:first-child {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  padding-right: 4%;\n}\nion-col[_ngcontent-%COMP%]:last-child {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding-left: 2%;\n}\n@media (max-width: 1000px) {\n  .Registrobody[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]:first-child {\n    display: none;\n  }\n  .subForm[_ngcontent-%COMP%] {\n    background-color: #042f2e;\n    border: 0;\n    width: 100%;\n    margin-top: 20px;\n    text-align: center;\n    padding: 30px;\n    gap: 20px;\n    display: flex;\n    flex-direction: column;\n  }\n  .subForm[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n    margin-bottom: 5%;\n  }\n  .subForm[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n    margin-top: 10%;\n  }\n  .subForm2[_ngcontent-%COMP%] {\n    margin-top: 10%;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */'] });
var LoginComponent = _LoginComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/screen/login/login.component.ts", lineNumber: 43 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=login.component-7IXRI73C.js.map
