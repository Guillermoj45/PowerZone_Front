import {
  ProfileSettingsService
} from "./chunk-IDV7EZ7D.js";
import {
  LoadingController
} from "./chunk-ED5SIT5L.js";
import {
  addIcons,
  colorWandOutline
} from "./chunk-U7I4M26G.js";
import {
  IonAvatar,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonInput,
  IonItem,
  IonRow,
  IonicModule,
  TextValueAccessorDirective,
  ToastController
} from "./chunk-AZ27F32N.js";
import "./chunk-IRNVB6F3.js";
import {
  CommonModule,
  FormsModule,
  NgControlStatus,
  NgModel,
  formatDate,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
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

// src/app/Screen/settings/settings.component.ts
var _c0 = ["fileInput"];
var _SettingsComponent = class _SettingsComponent {
  constructor(profileSettings, loadingController, toastController) {
    this.profileSettings = profileSettings;
    this.loadingController = loadingController;
    this.toastController = toastController;
    this.profile = {
      nickName: "",
      name: "",
      email: "",
      bornDate: "",
      avatar: ""
    };
    this.selectedAvatar = null;
    addIcons({ colorWandOutline });
  }
  ngOnInit() {
    const token = sessionStorage.getItem("token");
    if (token) {
      this.profileSettings.getData(token).subscribe((data) => {
        this.originalProfile = __spreadValues({}, data);
        if (data.bornDate) {
          data.bornDate = formatDate(data.bornDate, "dd/MM/yyyy", "en");
        }
        this.profile = data;
      });
    } else {
      console.error("Token is null");
    }
  }
  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }
  updateProfile() {
    return __async(this, null, function* () {
      const token = sessionStorage.getItem("token");
      if (token) {
        if (this.profile.name && this.profile.email && this.profile.nickName && this.profile.bornDate) {
          const isModified = JSON.stringify(this.profile) !== JSON.stringify(this.originalProfile);
          if (isModified) {
            const loading = yield this.loadingController.create({
              message: "Guardando cambios..."
            });
            yield loading.present();
            const dateParts = this.profile.bornDate.split("/");
            this.profile.bornDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
            this.profileSettings.updateProfile(token, this.profile).subscribe((response) => __async(this, null, function* () {
              this.presentToast("Cambios guardados");
              yield loading.dismiss();
              this.originalProfile = __spreadValues({}, this.profile);
              this.profile.bornDate = formatDate(this.profile.bornDate, "dd/MM/yyyy", "en");
            }), (error) => __async(this, null, function* () {
              console.error("Error updating profile", error);
              yield loading.dismiss();
              this.presentToast("Error al guardar los cambios");
            }));
          } else {
            this.presentToast("No se ha modificado ning\xFAn campo");
          }
        } else {
          this.presentToast("Todos los campos deben ser completados");
        }
      } else {
        this.presentToast("Error de autenticaci\xF3n");
      }
    });
  }
  // Mostrar el mensaje de toast
  presentToast(message) {
    return __async(this, null, function* () {
      const toast = yield this.toastController.create({
        message,
        duration: 2e3
      });
      toast.present();
    });
  }
  onFileSelected(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedAvatar = reader.result;
        this.profile.avatar = this.selectedAvatar;
        console.log("File converted to Base64:", this.selectedAvatar);
      };
      reader.readAsDataURL(file);
    }
  }
};
_SettingsComponent.\u0275fac = function SettingsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SettingsComponent)(\u0275\u0275directiveInject(ProfileSettingsService), \u0275\u0275directiveInject(LoadingController), \u0275\u0275directiveInject(ToastController));
};
_SettingsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["app-settings"]], viewQuery: function SettingsComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInput = _t.first);
  }
}, decls: 23, vars: 5, consts: [["fileInput", ""], [1, "contenido_perfil", "ion-no-padding"], [2, "margin-top", "7%"], [1, "movil", 2, "justify-content", "center"], [2, "position", "relative", "display", "inline-block", "cursor", "pointer", 3, "click"], ["alt", "Imagen perfil", 3, "src"], ["name", "color-wand-outline", 2, "position", "absolute", "top", "0", "right", "0", "background", "black", "border-radius", "50%", "padding", "4px", "font-size", "18px"], ["type", "file", "accept", "image/*", "hidden", "", 3, "change"], [2, "justify-content", "center"], ["id", "contenido_perfil", "size", "8"], ["label", "Nickname", 3, "ngModelChange", "ngModel"], ["label", "Nombre", 3, "ngModelChange", "ngModel"], ["label", "Email", 3, "ngModelChange", "ngModel"], ["label", "Fecha de nacimiento", 3, "ngModelChange", "ngModel"], [2, "display", "flex", "justify-content", "center"], ["expand", "block", 3, "click"]], template: function SettingsComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-content")(1, "div", 1)(2, "ion-grid", 2)(3, "ion-row", 3)(4, "div", 4);
    \u0275\u0275listener("click", function SettingsComponent_Template_div_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.triggerFileInput());
    });
    \u0275\u0275elementStart(5, "ion-avatar");
    \u0275\u0275element(6, "img", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "ion-icon", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 7, 0);
    \u0275\u0275listener("change", function SettingsComponent_Template_input_change_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onFileSelected($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "ion-row", 8)(11, "ion-col", 9)(12, "ion-item")(13, "ion-input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_ion_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.profile.nickName, $event) || (ctx.profile.nickName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "ion-item")(15, "ion-input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_ion_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.profile.name, $event) || (ctx.profile.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "ion-item")(17, "ion-input", 12);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_ion_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.profile.email, $event) || (ctx.profile.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "ion-item")(19, "ion-input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Template_ion_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.profile.bornDate, $event) || (ctx.profile.bornDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 14)(21, "ion-button", 15);
    \u0275\u0275listener("click", function SettingsComponent_Template_ion_button_click_21_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.updateProfile());
    });
    \u0275\u0275text(22, "Actualizar");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275property("src", ctx.profile.avatar || "https://picsum.photos/800/400?random=1", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx.profile.nickName);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx.profile.name);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx.profile.email);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx.profile.bornDate);
  }
}, dependencies: [IonicModule, IonAvatar, IonButton, IonCol, IonContent, IonGrid, IonIcon, IonInput, IonItem, IonRow, TextValueAccessorDirective, FormsModule, NgControlStatus, NgModel, CommonModule], styles: ['@charset "UTF-8";\n\n\n\n.contenido_perfil[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  padding: 2%;\n  gap: 2%;\n  height: 100vh;\n}\nion-avatar[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 130px;\n  margin-bottom: 2%;\n}\nion-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 50%;\n  border: 2px solid white;\n}\n.text-center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 14px;\n  gap: 5px;\n  color: white;\n}\n.stats[_ngcontent-%COMP%] {\n  margin-top: 1%;\n  justify-content: start;\n  text-align: center;\n  gap: 1%;\n}\n.contenido_perfil[_ngcontent-%COMP%] {\n  background-color: #042f2e;\n  color: white;\n  display: flex;\n  align-self: center;\n  justify-content: center;\n}\nion-item[_ngcontent-%COMP%] {\n  --background: transparent;\n  --color: white;\n  margin: 30px 0;\n}\nion-input[_ngcontent-%COMP%] {\n  --background: transparent;\n  --placeholder-color: #b2d8d7;\n  color: white;\n}\nion-button[_ngcontent-%COMP%] {\n  --background: #279e9c;\n  --color: white;\n  margin-top: 20px;\n  width: 100%;\n}\nion-grid[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: 0;\n}\nion-row[_ngcontent-%COMP%], \nion-col[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n  text-align: left;\n}\nion-button[_ngcontent-%COMP%] {\n  --background: #279e9c;\n  --color: white;\n  margin-top: 3%;\n  width: 60%;\n  padding: 8px 16px;\n}\n.info_num[_ngcontent-%COMP%] {\n  font-size: 130%;\n}\n@media (max-width: 1000px) {\n  .movil[_ngcontent-%COMP%] {\n    margin-top: 20%;\n  }\n}\n/*# sourceMappingURL=settings.component.css.map */'] });
var SettingsComponent = _SettingsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent", filePath: "src/app/screen/settings/settings.component.ts", lineNumber: 22 });
})();
export {
  SettingsComponent
};
//# sourceMappingURL=settings.component-Y52HUXXG.js.map
