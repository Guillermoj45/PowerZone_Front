import {
  CloudinaryService,
  WebsocketService
} from "./chunk-H5CLOZ4O.js";
import "./chunk-2JTE6DJZ.js";
import {
  LoadingController
} from "./chunk-ED5SIT5L.js";
import {
  addIcons,
  arrowRedoOutline
} from "./chunk-U7I4M26G.js";
import {
  ProfileService
} from "./chunk-FQYQIARY.js";
import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonTitle,
  IonToolbar,
  IonicModule,
  TextValueAccessorDirective,
  ToastController
} from "./chunk-AZ27F32N.js";
import "./chunk-IRNVB6F3.js";
import {
  CommonModule,
  FormsModule,
  NgControlStatus,
  NgForOf,
  NgModel,
  Router,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
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
  __async
} from "./chunk-ZVATTXSA.js";

// src/app/Screen/mensajes/mensajes.component.ts
function MensajesComponent_ion_item_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item")(1, "ion-avatar", 8);
    \u0275\u0275element(2, "ion-img", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-label")(4, "h2");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "ion-button", 10);
    \u0275\u0275listener("click", function MensajesComponent_ion_item_8_Template_ion_button_click_10_listener() {
      const grupo_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.verGrupo(grupo_r3.id));
    });
    \u0275\u0275element(11, "ion-icon", 11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const grupo_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", grupo_r3.image.toURL());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(grupo_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", grupo_r3.ultimoMensaje, " - ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(grupo_r3.ultimoMensajeHora);
  }
}
function MensajesComponent_ng_template_11_ion_item_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item")(1, "ion-avatar", 8);
    \u0275\u0275element(2, "ion-img", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-label")(4, "h2");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "ion-button", 10);
    \u0275\u0275listener("click", function MensajesComponent_ng_template_11_ion_item_13_Template_ion_button_click_8_listener() {
      const perfil_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleSeleccionPerfil(perfil_r8));
    });
    \u0275\u0275element(9, "ion-icon", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const perfil_r8 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", perfil_r8.avatar);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(perfil_r8.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(perfil_r8.nickname);
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("name", ctx_r3.perfilesSeleccionados.includes(perfil_r8) ? "checkmark" : "add");
  }
}
function MensajesComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-header")(1, "ion-toolbar")(2, "ion-title");
    \u0275\u0275text(3, "Personas para a\xF1adir");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-buttons", 12)(5, "ion-button", 13);
    \u0275\u0275listener("click", function MensajesComponent_ng_template_11_Template_ion_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      \u0275\u0275nextContext();
      const modal_r6 = \u0275\u0275reference(10);
      return \u0275\u0275resetView(modal_r6.dismiss());
    });
    \u0275\u0275text(6, "Cerrar");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(7, "ion-content", 14)(8, "ion-item")(9, "ion-label", 15);
    \u0275\u0275text(10, "Nombre del grupo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "ion-input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function MensajesComponent_ng_template_11_Template_ion_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.nombreGrupo, $event) || (ctx_r3.nombreGrupo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "ion-list", 17);
    \u0275\u0275template(13, MensajesComponent_ng_template_11_ion_item_13_Template, 10, 4, "ion-item", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 18);
    \u0275\u0275listener("change", function MensajesComponent_ng_template_11_Template_input_change_14_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "label", 19);
    \u0275\u0275text(16, "Seleccionar archivo");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "ion-footer")(18, "ion-toolbar")(19, "ion-title");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "ion-buttons", 12)(22, "ion-button", 20);
    \u0275\u0275listener("click", function MensajesComponent_ng_template_11_Template_ion_button_click_22_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.crearGrupoConSeleccionados());
    });
    \u0275\u0275text(23, " Crear ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.nombreGrupo);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.perfilesSeguidos);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" Seleccionados: ", ctx_r3.perfilesSeleccionados.length, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.perfilesSeleccionados.length === 0 || !ctx_r3.nombreGrupo);
  }
}
var _MensajesComponent = class _MensajesComponent {
  constructor(websocketService, loadingController, toastController, router, profileService, cloudinaryService) {
    this.websocketService = websocketService;
    this.loadingController = loadingController;
    this.toastController = toastController;
    this.router = router;
    this.profileService = profileService;
    this.cloudinaryService = cloudinaryService;
    this.grupos = [];
    this.perfilesSeguidos = [];
    this.perfilesSeleccionados = [];
    this.nombreGrupo = "";
    this.imagenGrupo = null;
    addIcons({ arrowRedoOutline });
  }
  ngOnInit() {
    this.presentingElement = document.querySelector(".ion-page");
    this.cargarGrupos();
  }
  formatearFecha(timestamp) {
    if (!timestamp)
      return "";
    const fechaMensaje = new Date(timestamp);
    const ahora = /* @__PURE__ */ new Date();
    const diferenciaHoras = (ahora.getTime() - fechaMensaje.getTime()) / (1e3 * 60 * 60);
    if (diferenciaHoras < 24) {
      return fechaMensaje.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    } else {
      return fechaMensaje.toLocaleDateString();
    }
  }
  cargarGrupos() {
    return __async(this, null, function* () {
      const loading = yield this.loadingController.create({ message: "Cargando grupos..." });
      yield loading.present();
      this.websocketService.getUserGroups().subscribe({
        next: (response) => __async(this, null, function* () {
          this.grupos = response.grupos || [];
          this.websocketService.getUltimosMensajesPorGrupo().subscribe({
            next: (mensajesResponse) => {
              console.log("Mensajes recibidos:", mensajesResponse);
              this.grupos.forEach((grupo) => {
                grupo.image = this.cloudinaryService.getImage(grupo.image);
                const mensaje = mensajesResponse.find((m) => m.grupoId === grupo.id);
                if (mensaje) {
                  grupo.ultimoMensaje = mensaje.ultimoMensaje || "Sin mensajes";
                  grupo.ultimoMensajeHora = this.formatearFecha(mensaje.ultimoMensajeTimestamp);
                } else {
                  grupo.ultimoMensaje = "Sin mensajes";
                  grupo.ultimoMensajeHora = "";
                }
              });
            },
            error: () => {
              this.grupos.forEach((grupo) => {
                grupo.ultimoMensaje = "Sin mensajes";
                grupo.ultimoMensajeHora = "";
              });
            }
          });
          console.log("Grupos cargados:", this.grupos);
          yield loading.dismiss();
        }),
        error: (error) => __async(this, null, function* () {
          console.error("Error al cargar los grupos:", error);
          yield loading.dismiss();
          this.mostrarToast("Error al cargar los grupos.", "danger");
        })
      });
    });
  }
  mostrarPerfilesSeguidos() {
    return __async(this, null, function* () {
      const loading = yield this.loadingController.create({ message: "Cargando perfiles..." });
      yield loading.present();
      this.websocketService.getFollowingProfiles().subscribe({
        next: (response) => __async(this, null, function* () {
          this.perfilesSeguidos = response.perfiles || [];
          this.perfilesSeleccionados = [];
          console.log("Perfiles seguidos:", this.perfilesSeguidos);
          yield loading.dismiss();
        }),
        error: (error) => __async(this, null, function* () {
          console.error("Error al cargar los perfiles seguidos:", error);
          yield loading.dismiss();
          this.mostrarToast("Error al cargar los perfiles seguidos.", "danger");
        })
      });
    });
  }
  toggleSeleccionPerfil(perfil) {
    const index = this.perfilesSeleccionados.findIndex((p) => p.id === perfil.id);
    if (index > -1) {
      this.perfilesSeleccionados.splice(index, 1);
    } else {
      this.perfilesSeleccionados.push(perfil);
    }
  }
  crearGrupoConSeleccionados() {
    return __async(this, null, function* () {
      if (!this.nombreGrupo.trim()) {
        this.mostrarToast("El nombre del grupo no puede estar vac\xEDo.", "warning");
        return;
      }
      if (this.perfilesSeleccionados.length < 1) {
        this.mostrarToast("Debes seleccionar al menos 1 usuarios.", "warning");
        return;
      }
      if (!this.imagenGrupo) {
        this.mostrarToast("Debes elegir una foto para el grupo.", "warning");
        return;
      }
      const token = sessionStorage.getItem("token");
      if (!token) {
        this.mostrarToast("No se encontr\xF3 el token de autenticaci\xF3n.", "danger");
        return;
      }
      const profile = yield this.profileService.getProfile(token).toPromise();
      const userId = profile.id;
      if (!userId) {
        this.mostrarToast("No se encontr\xF3 el ID del usuario.", "danger");
        return;
      }
      this.perfilesSeleccionados.push({ id: userId });
      const loading = yield this.loadingController.create({ message: "Creando grupo..." });
      yield loading.present();
      const grupoData = { name: this.nombreGrupo };
      const formData = new FormData();
      formData.append("group", JSON.stringify(grupoData));
      if (this.imagenGrupo) {
        formData.append("file", this.imagenGrupo);
      }
      try {
        const groupName = { name: this.nombreGrupo };
        const file = this.imagenGrupo || void 0;
        const grupo = yield this.websocketService.createGroup(groupName, file).toPromise();
        console.log("Grupo creado:", grupo);
        const userIds = this.perfilesSeleccionados.map((p) => p.id);
        const response = yield this.websocketService.addUsersToGroup(grupo.id, userIds).toPromise();
        console.log("Usuarios a\xF1adidos al grupo correctamente:", response.message);
        this.mostrarToast("Grupo creado con \xE9xito.", "success");
        this.router.navigate([`/prueba/${grupo.id}`]);
        yield loading.dismiss();
        this.cargarGrupos();
      } catch (error) {
        console.error("Error al crear grupo o a\xF1adir usuarios:", error);
        this.mostrarToast("Error al crear grupo o a\xF1adir usuarios.", "danger");
        yield loading.dismiss();
      }
    });
  }
  onFileSelected(event) {
    var _a;
    const input = event.target;
    if ((_a = input == null ? void 0 : input.files) == null ? void 0 : _a.length) {
      this.imagenGrupo = input.files[0];
    }
  }
  crearNuevaConversacion(grupoId) {
    console.log(`Crear conversaci\xF3n con el grupo: ${grupoId}`);
    this.mostrarPerfilesSeguidos();
  }
  verGrupo(grupoId) {
    this.router.navigate([`/chat/${grupoId}`]);
  }
  mostrarToast(mensaje, color) {
    return __async(this, null, function* () {
      const toast = yield this.toastController.create({ message: mensaje, duration: 2e3, color });
      yield toast.present();
    });
  }
};
_MensajesComponent.\u0275fac = function MensajesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MensajesComponent)(\u0275\u0275directiveInject(WebsocketService), \u0275\u0275directiveInject(LoadingController), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ProfileService), \u0275\u0275directiveInject(CloudinaryService));
};
_MensajesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MensajesComponent, selectors: [["app-mensajes"]], decls: 12, vars: 2, consts: [["modal", ""], [1, "ion-page"], [1, "header"], [1, "ion-padding", 2, "--background", "#055a58"], ["id", "open-modal", "expand", "block", 3, "click"], [2, "margin-right", "5%"], [4, "ngFor", "ngForOf"], ["trigger", "open-modal", 3, "presentingElement"], ["slot", "start"], [3, "src"], ["fill", "clear", "slot", "end", 1, "boton-anyadir", 3, "click"], ["name", "arrow-redo-outline"], ["slot", "end"], [3, "click"], [2, "--background", "#096360"], ["position", "floating"], [3, "ngModelChange", "ngModel"], [2, "background-color", "#042f2e"], ["type", "file", "id", "fileInput", 3, "change"], ["for", "fileInput"], [3, "click", "disabled"], [3, "name"]], template: function MensajesComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "ion-toolbar")(2, "ion-title", 2);
    \u0275\u0275text(3, "Mensajes directos");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "ion-content", 3)(5, "ion-button", 4);
    \u0275\u0275listener("click", function MensajesComponent_Template_ion_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.crearNuevaConversacion("someGroupId"));
    });
    \u0275\u0275text(6, " Crear nueva conversaci\xF3n ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ul", 5);
    \u0275\u0275template(8, MensajesComponent_ion_item_8_Template, 12, 4, "ion-item", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "ion-modal", 7, 0);
    \u0275\u0275template(11, MensajesComponent_ng_template_11_Template, 24, 4, "ng-template");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx.grupos);
    \u0275\u0275advance();
    \u0275\u0275property("presentingElement", ctx.presentingElement);
  }
}, dependencies: [IonicModule, IonAvatar, IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonList, IonTitle, IonToolbar, IonModal, TextValueAccessorDirective, CommonModule, NgForOf, FormsModule, NgControlStatus, NgModel], styles: ['@charset "UTF-8";\n\n\n\nion-item[_ngcontent-%COMP%] {\n  --background: #042f2e;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n  margin: 2% 0;\n}\nion-toolbar[_ngcontent-%COMP%] {\n  --background: #042f2e;\n  --color: white;\n  padding: 12px 20px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n  border-bottom: 4px solid #ffffff;\n}\n.header[_ngcontent-%COMP%] {\n  font-size: 1.6em;\n  font-weight: bold;\n  color: #ffffff;\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n}\nion-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);\n}\nion-button[_ngcontent-%COMP%]:hover {\n  --background: rgba(5, 90, 88, 0.1);\n  transform: scale(1.02);\n  transition: all 0.3s ease;\n}\nion-item[_ngcontent-%COMP%]   .boton-anyadir[_ngcontent-%COMP%] {\n  transition: transform 0.3s ease;\n}\nion-item[_ngcontent-%COMP%]   .boton-anyadir[_ngcontent-%COMP%]:hover {\n  transform: rotate(45deg);\n}\nion-modal[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.5s ease-out;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n#open-modal[_ngcontent-%COMP%] {\n  --color: white;\n  --background: #042f2e;\n  transition: background-color 0.3s ease;\n}\nion-list[_ngcontent-%COMP%] {\n  padding: 0;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    transform: translateX(-100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\ninput[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\ninput[type=file][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 10px 20px;\n  background-color: #042f2e;\n  color: white;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 1rem;\n  transition: background-color 0.3s ease, transform 0.2s ease;\n}\ninput[type=file][_ngcontent-%COMP%]:hover    + label[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\ninput[type=file][_ngcontent-%COMP%]:valid    + label[_ngcontent-%COMP%] {\n  background-color: #077a48;\n  margin: 2%;\n}\n/*# sourceMappingURL=mensajes.component.css.map */'] });
var MensajesComponent = _MensajesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MensajesComponent, { className: "MensajesComponent", filePath: "src/app/screen/mensajes/mensajes.component.ts", lineNumber: 20 });
})();
export {
  MensajesComponent
};
//# sourceMappingURL=mensajes.component-YRKCM7YW.js.map
