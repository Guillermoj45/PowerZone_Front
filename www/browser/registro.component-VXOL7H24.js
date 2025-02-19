import {
  CarrouselComponent
} from "./chunk-PL5NUBZK.js";
import {
  LoadingController
} from "./chunk-ED5SIT5L.js";
import {
  RegistroService
} from "./chunk-FQYQIARY.js";
import {
  AlertController,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonImg,
  IonInput,
  IonInputPasswordToggle,
  IonItem,
  IonLabel,
  IonRow,
  IonText,
  IonicModule,
  RouterLinkDelegateDirective,
  TextValueAccessorDirective
} from "./chunk-AZ27F32N.js";
import "./chunk-IRNVB6F3.js";
import {
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgIf,
  ReactiveFormsModule,
  Router,
  RouterLink,
  RouterModule,
  Validators,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtemplate,
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

// src/app/Models/Register.ts
var Register = class {
};

// src/app/Screen/registro/registro.component.ts
function RegistroComponent_p_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1, "El nombre no puede contener n\xFAmeros.");
    \u0275\u0275elementEnd();
  }
}
function RegistroComponent_p_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1, "Introduce un correo v\xE1lido.");
    \u0275\u0275elementEnd();
  }
}
function RegistroComponent_p_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1, "La contrase\xF1a debe tener al menos 8 caracteres.");
    \u0275\u0275elementEnd();
  }
}
var _RegistroComponent = class _RegistroComponent {
  constructor(fb, registroService, router, alertController, loadingController) {
    this.fb = fb;
    this.registroService = registroService;
    this.router = router;
    this.alertController = alertController;
    this.loadingController = loadingController;
    this.register = new Register();
    this.avatarBase64 = "";
    this.registerForm = this.fb.group({
      nickname: [this.register.nickname, Validators.required],
      name: [this.register.name, [Validators.required, Validators.pattern(/^[^\d]+$/)]],
      email: [this.register.email, [Validators.required, Validators.email]],
      bornDate: [this.register.bornDate, Validators.required],
      password: [this.register.password, [Validators.required, Validators.minLength(8)]]
      // Nota: No se incluye avatar en el FormGroup, ya que se asignará desde la variable avatarBase64
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
    return __async(this, null, function* () {
      if (this.registerForm.valid) {
        const loading = yield this.loadingController.create({
          message: "Registrando..."
        });
        yield loading.present();
        this.register = __spreadValues(__spreadValues({}, this.register), this.registerForm.value);
        this.register.avatar = this.avatarBase64;
        this.registroService.registerUser(this.register).subscribe({
          next: () => __async(this, null, function* () {
            console.info("Registro exitoso");
            yield loading.dismiss();
            this.router.navigate(["/login"]);
          }),
          error: (error) => __async(this, null, function* () {
            console.error(error);
            yield loading.dismiss();
            this.showAlert("Ha ocurrido un error al registrar el usuario.");
          })
        });
      } else {
        this.markFormTouched();
        this.showAlert("Hay campos vac\xEDos o con informaci\xF3n err\xF3nea.");
      }
    });
  }
  // Función para marcar todos los controles del formulario como touched
  markFormTouched() {
    Object.values(this.registerForm.controls).forEach((control) => {
      control.markAsTouched();
    });
  }
  // Función para convertir el archivo seleccionado a Base64 y asignarlo a la variable avatarBase64
  onFileSelected(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.avatarBase64 = reader.result;
        console.log("File converted to Base64:", this.avatarBase64);
      };
      reader.readAsDataURL(file);
    }
  }
};
_RegistroComponent.\u0275fac = function RegistroComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RegistroComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(RegistroService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AlertController), \u0275\u0275directiveInject(LoadingController));
};
_RegistroComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegistroComponent, selectors: [["app-registro"]], decls: 39, vars: 10, consts: [[1, "Registrobody", 2, "height", "100%"], [1, "ion-no-padding"], [1, "Registrobody"], ["id", "onichan"], ["src", "../../../assets/img/marco2.png", 1, "overlay-image"], ["id", "onichan2"], ["size-lg", "6", "size-xs", "12", 1, "Registrobody"], [1, "subForm"], [3, "ngSubmit", "formGroup"], ["src", "assets/logo.png", "id", "logo"], ["formControlName", "nickname", "label", "Nickname", "placeholder", "Ingrese su nickname"], ["formControlName", "name", "label", "Nombre", "placeholder", "Ingrese su nombre"], ["class", "error", 4, "ngIf"], ["formControlName", "email", "label", "Correo", "placeholder", "Ingrese su email"], ["formControlName", "bornDate", "label", "Fecha nacimiento", "type", "date"], ["formControlName", "password", "type", "password", "label", "Contrase\xF1a", "placeholder", "Ingrese su contrase\xF1a"], ["slot", "end"], ["type", "file", 3, "change"], ["type", "submit", "expand", "block"], [1, "subForm2"], ["routerLink", "/login"], [1, "error"]], template: function RegistroComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 0)(1, "ion-grid", 1)(2, "ion-row")(3, "ion-col", 2)(4, "div", 3);
    \u0275\u0275element(5, "img", 4);
    \u0275\u0275elementStart(6, "div", 5);
    \u0275\u0275element(7, "app-carrousel");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "ion-col", 6)(9, "div", 7)(10, "form", 8);
    \u0275\u0275listener("ngSubmit", function RegistroComponent_Template_form_ngSubmit_10_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275element(11, "ion-img", 9);
    \u0275\u0275elementStart(12, "ion-item");
    \u0275\u0275element(13, "ion-input", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "ion-item");
    \u0275\u0275element(15, "ion-input", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, RegistroComponent_p_16_Template, 2, 0, "p", 12);
    \u0275\u0275elementStart(17, "ion-item");
    \u0275\u0275element(18, "ion-input", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, RegistroComponent_p_19_Template, 2, 0, "p", 12);
    \u0275\u0275elementStart(20, "ion-item");
    \u0275\u0275element(21, "ion-input", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "ion-item");
    \u0275\u0275element(23, "ion-input", 15)(24, "ion-input-password-toggle", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, RegistroComponent_p_25_Template, 2, 0, "p", 12);
    \u0275\u0275elementStart(26, "ion-item")(27, "ion-label");
    \u0275\u0275text(28, "Subir Imagen");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 17);
    \u0275\u0275listener("change", function RegistroComponent_Template_input_change_29_listener($event) {
      return ctx.onFileSelected($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "ion-button", 18);
    \u0275\u0275text(31, "Registrarse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 19)(33, "ion-text");
    \u0275\u0275text(34, "\xBFYa tienes Cuenta?");
    \u0275\u0275element(35, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "ion-text", 20)(37, "b");
    \u0275\u0275text(38, "Inicia Sesi\xF3n");
    \u0275\u0275elementEnd()()()()()()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    \u0275\u0275advance(10);
    \u0275\u0275property("formGroup", ctx.registerForm);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("invalid", ((tmp_1_0 = ctx.registerForm.get("name")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.registerForm.get("name")) == null ? null : tmp_1_0.touched));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx.registerForm.get("name")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.registerForm.get("name")) == null ? null : tmp_2_0.touched));
    \u0275\u0275advance();
    \u0275\u0275classProp("invalid", ((tmp_3_0 = ctx.registerForm.get("email")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.registerForm.get("email")) == null ? null : tmp_3_0.touched));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx.registerForm.get("email")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.registerForm.get("email")) == null ? null : tmp_4_0.touched));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("invalid", ((tmp_5_0 = ctx.registerForm.get("password")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.registerForm.get("password")) == null ? null : tmp_5_0.touched));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ((tmp_6_0 = ctx.registerForm.get("password")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.registerForm.get("password")) == null ? null : tmp_6_0.touched));
  }
}, dependencies: [
  IonicModule,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonImg,
  IonInput,
  IonInputPasswordToggle,
  IonItem,
  IonLabel,
  IonRow,
  IonText,
  TextValueAccessorDirective,
  RouterLinkDelegateDirective,
  CarrouselComponent,
  RouterModule,
  RouterLink,
  NgIf,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  NgControlStatus,
  NgControlStatusGroup,
  FormGroupDirective,
  FormControlName
], styles: ['@charset "UTF-8";\n\n\n\n.Registrobody[_ngcontent-%COMP%] {\n  background-color: #042f2e;\n  color: white;\n  height: 100vh;\n  justify-content: center;\n  align-items: center;\n}\n#onichan[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n#onichan2[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#onichan[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  width: 100%;\n  height: auto;\n}\n#onichan[_ngcontent-%COMP%]   app-carrousel[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  height: auto;\n}\n.Registrobody[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --background: #042f2e;\n  color: white;\n}\n.Registrobody[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  --background: #042f2e;\n  color: white;\n}\n.Registrobody[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  color: white;\n}\n.Registrobody[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --background: #68aecc;\n  --color: white;\n}\n.subForm[_ngcontent-%COMP%] {\n  background-color: #042f2e;\n  border: 1px solid white;\n  border-radius: 5px;\n  width: 60%;\n  margin-top: 2%;\n  padding: 1%;\n  text-align: center;\n}\n.subForm2[_ngcontent-%COMP%] {\n  background-color: #042f2e;\n  border: 1px solid white;\n  border-radius: 5px;\n  width: 100%;\n  margin-top: 2%;\n  padding: 1%;\n  text-align: center;\n}\n.Registrobody[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]:first-child {\n  margin-right: 1%;\n}\n#logo[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 50%;\n  margin: 0 auto;\n  display: block;\n}\nion-col[_ngcontent-%COMP%]:first-child {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  padding-right: 4%;\n}\nion-col[_ngcontent-%COMP%]:last-child {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding-left: 2%;\n}\n.error[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 12px;\n  margin-top: 4px;\n}\nion-item.invalid[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  border: 1px solid red;\n  border-radius: 4px;\n}\n@media (max-width: 1000px) {\n  .Registrobody[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]:first-child {\n    display: none;\n  }\n  .subForm[_ngcontent-%COMP%] {\n    background-color: #042f2e;\n    border: 0;\n    width: 100%;\n    margin-top: 20px;\n    text-align: center;\n    padding: 30px;\n    gap: 20px;\n    display: flex;\n    flex-direction: column;\n  }\n  .subForm[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n    margin-bottom: 5%;\n  }\n  .subForm[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n    margin-top: 10%;\n  }\n  .subForm2[_ngcontent-%COMP%] {\n    margin-top: 10%;\n  }\n}\n/*# sourceMappingURL=registro.component.css.map */'] });
var RegistroComponent = _RegistroComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegistroComponent, { className: "RegistroComponent", filePath: "src/app/screen/registro/registro.component.ts", lineNumber: 24 });
})();
export {
  RegistroComponent
};
//# sourceMappingURL=registro.component-VXOL7H24.js.map
