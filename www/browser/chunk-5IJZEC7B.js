import {
  ProfileSettingsService
} from "./chunk-IDV7EZ7D.js";
import {
  NewPostComponent
} from "./chunk-WV2SIDCP.js";
import {
  add,
  addIcons,
  closeCircle,
  home,
  logInOutline,
  logoIonitron,
  notifications,
  paperPlaneOutline,
  personCircleOutline,
  restaurant,
  search,
  settingsSharp
} from "./chunk-U7I4M26G.js";
import {
  IonCol,
  IonGrid,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
  IonicModule,
  ModalController
} from "./chunk-AZ27F32N.js";
import {
  BehaviorSubject,
  Router,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵtext
} from "./chunk-A54Y6D4U.js";
import {
  __async
} from "./chunk-ZVATTXSA.js";

// src/app/Service/Menu.service.ts
var _Menu = class _Menu {
  constructor() {
    this.useAlternateMenuSubject = new BehaviorSubject(false);
    this.useAlternateMenu$ = this.useAlternateMenuSubject.asObservable();
  }
  toggleMenu() {
    this.useAlternateMenuSubject.next(true);
  }
};
_Menu.\u0275fac = function Menu_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _Menu)();
};
_Menu.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _Menu, factory: _Menu.\u0275fac, providedIn: "root" });
var Menu = _Menu;

// src/app/Screen/menuoriginal/menuoriginal.component.ts
var _MenuoriginalComponent = class _MenuoriginalComponent {
  constructor(modalController, router, menuService, profileSettings) {
    this.modalController = modalController;
    this.router = router;
    this.menuService = menuService;
    this.profileSettings = profileSettings;
    this.profile = {
      nickName: "",
      name: "",
      email: "",
      bornDate: "",
      avatar: "",
      id: 0
    };
    addIcons({
      home,
      search,
      add,
      restaurant,
      notifications,
      closeCircle,
      personCircleOutline,
      settingsSharp,
      logInOutline,
      paperPlaneOutline,
      logoIonitron
    });
  }
  toggleMenu() {
    this.menuService.toggleMenu();
  }
  openAddPostModal() {
    return __async(this, null, function* () {
      const modal = yield this.modalController.create({
        component: NewPostComponent
      });
      yield modal.present();
    });
  }
  ngOnInit() {
    const token = sessionStorage.getItem("token");
    if (token) {
      this.profileSettings.getData(token).subscribe((data) => {
        this.profile = data;
      });
    } else {
      console.error("Token is null");
    }
  }
  navigateTo(path) {
    this.router.navigate([path]);
  }
  LogOut() {
    sessionStorage.removeItem("token");
    this.router.navigate(["/login"]);
  }
};
_MenuoriginalComponent.\u0275fac = function MenuoriginalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MenuoriginalComponent)(\u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(Menu), \u0275\u0275directiveInject(ProfileSettingsService));
};
_MenuoriginalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MenuoriginalComponent, selectors: [["app-menuoriginal"]], decls: 37, vars: 0, consts: [["lines", "none", 3, "click"], ["aria-hidden", "true", "name", "home", "slot", "start"], ["lines", "none", "id", "busqueda", 3, "click"], ["aria-hidden", "true", "name", "search", "slot", "start"], ["lines", "none", "id", "publicar2"], ["aria-hidden", "true", "name", "add", "slot", "start"], [3, "click"], ["lines", "none", "id", "mensajes", 3, "click"], ["name", "paper-plane-outline", "aria-hidden", "true", "slot", "start"], ["lines", "none", "id", "chatbot", 3, "click"], ["name", "logo-ionitron", "aria-hidden", "true", "slot", "start"], ["lines", "none", "id", "notificaciones", 3, "click"], ["aria-hidden", "true", "name", "notifications", "slot", "start"], ["lines", "none", "id", "perfil", 3, "click"], ["aria-hidden", "true", "name", "person-circle-outline", "slot", "start"], ["lines", "none", "id", "cerrar-sesion", 3, "click"], ["aria-hidden", "true", "name", "log-in-outline", "slot", "start"]], template: function MenuoriginalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "body")(1, "ion-grid")(2, "ion-row")(3, "ion-col")(4, "ion-list")(5, "ion-item", 0);
    \u0275\u0275listener("click", function MenuoriginalComponent_Template_ion_item_click_5_listener() {
      return ctx.navigateTo("/posts");
    });
    \u0275\u0275element(6, "ion-icon", 1);
    \u0275\u0275elementStart(7, "ion-label");
    \u0275\u0275text(8, "Inicio");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "ion-item", 2);
    \u0275\u0275listener("click", function MenuoriginalComponent_Template_ion_item_click_9_listener() {
      return ctx.toggleMenu();
    });
    \u0275\u0275element(10, "ion-icon", 3);
    \u0275\u0275elementStart(11, "ion-label");
    \u0275\u0275text(12, "Busqueda");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "ion-item", 4);
    \u0275\u0275element(14, "ion-icon", 5);
    \u0275\u0275elementStart(15, "ion-label", 6);
    \u0275\u0275listener("click", function MenuoriginalComponent_Template_ion_label_click_15_listener() {
      return ctx.openAddPostModal();
    });
    \u0275\u0275text(16, "Publicar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "ion-item", 7);
    \u0275\u0275listener("click", function MenuoriginalComponent_Template_ion_item_click_17_listener() {
      return ctx.navigateTo("/mensajes");
    });
    \u0275\u0275element(18, "ion-icon", 8);
    \u0275\u0275elementStart(19, "ion-label");
    \u0275\u0275text(20, "Mensajes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "ion-item", 9);
    \u0275\u0275listener("click", function MenuoriginalComponent_Template_ion_item_click_21_listener() {
      return ctx.navigateTo("/health");
    });
    \u0275\u0275element(22, "ion-icon", 10);
    \u0275\u0275elementStart(23, "ion-label");
    \u0275\u0275text(24, "Chatbot");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "ion-item", 11);
    \u0275\u0275listener("click", function MenuoriginalComponent_Template_ion_item_click_25_listener() {
      return ctx.navigateTo("/notification");
    });
    \u0275\u0275element(26, "ion-icon", 12);
    \u0275\u0275elementStart(27, "ion-label");
    \u0275\u0275text(28, "Notificaciones");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "ion-item", 13);
    \u0275\u0275listener("click", function MenuoriginalComponent_Template_ion_item_click_29_listener() {
      return ctx.navigateTo("/profile");
    });
    \u0275\u0275element(30, "ion-icon", 14);
    \u0275\u0275elementStart(31, "ion-label");
    \u0275\u0275text(32, "Perfil");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "ion-item", 15);
    \u0275\u0275listener("click", function MenuoriginalComponent_Template_ion_item_click_33_listener() {
      return ctx.LogOut();
    });
    \u0275\u0275element(34, "ion-icon", 16);
    \u0275\u0275elementStart(35, "ion-label");
    \u0275\u0275text(36, "Cerrar Sesi\xF3n");
    \u0275\u0275elementEnd()()()()()()();
  }
}, dependencies: [IonicModule, IonCol, IonGrid, IonIcon, IonItem, IonLabel, IonList, IonRow], styles: ["\n\nion-list[_ngcontent-%COMP%] {\n  background-color: #042F2E;\n  height: 100%;\n  padding: 0px 30px;\n}\nion-item[_ngcontent-%COMP%] {\n  --inner-padding-top: 0;\n  --inner-padding-bottom: 0;\n  --border-width: 0;\n  --background: transparent;\n  --ion-item-background: transparent;\n  margin-top: 2%;\n}\nion-grid[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: #042F2E;\n}\n/*# sourceMappingURL=menuoriginal.component.css.map */"] });
var MenuoriginalComponent = _MenuoriginalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MenuoriginalComponent, { className: "MenuoriginalComponent", filePath: "src/app/screen/menuoriginal/menuoriginal.component.ts", lineNumber: 32 });
})();

export {
  Menu,
  MenuoriginalComponent
};
//# sourceMappingURL=chunk-5IJZEC7B.js.map
