import {
  Client
} from "./chunk-2JTE6DJZ.js";
import {
  SuggestionsComponent
} from "./chunk-XEFH7DCV.js";
import "./chunk-Z233NFIF.js";
import {
  Menu,
  MenuoriginalComponent
} from "./chunk-5IJZEC7B.js";
import "./chunk-IDV7EZ7D.js";
import {
  ToastController,
  provideIonicAngular
} from "./chunk-ED5SIT5L.js";
import {
  NewPostComponent
} from "./chunk-WV2SIDCP.js";
import "./chunk-IK76A6XB.js";
import "./chunk-77HXCZAV.js";
import {
  add,
  addCircle,
  addIcons,
  chatbubbles,
  closeCircle,
  heart,
  home,
  logoIonitron,
  notifications,
  paperPlaneOutline,
  personAdd,
  personCircleOutline,
  restaurant,
  search,
  settingsSharp
} from "./chunk-U7I4M26G.js";
import {
  ProfileService
} from "./chunk-FQYQIARY.js";
import {
  IonApp,
  IonAvatar,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuButton,
  IonRouterOutlet,
  IonRow,
  IonTitle,
  IonToolbar,
  IonicModule,
  ModalController,
  TextValueAccessorDirective,
  environment
} from "./chunk-AZ27F32N.js";
import "./chunk-IRNVB6F3.js";
import {
  ActivatedRoute,
  BehaviorSubject,
  FormsModule,
  IonicRouteStrategy,
  NavigationEnd,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  PreloadAllModules,
  RouteReuseStrategy,
  Router,
  bootstrapApplication,
  provideHttpClient,
  provideRouter,
  withPreloading,
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
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
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

// src/app/Screen/search/search.component.ts
function SearchComponent_ion_item_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item", 4);
    \u0275\u0275listener("click", function SearchComponent_ion_item_7_Template_ion_item_click_0_listener() {
      const user_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.navigateToProfile(user_r2.id));
    });
    \u0275\u0275elementStart(1, "ion-avatar");
    \u0275\u0275element(2, "img", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-label", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", user_r2.avatar || "https://picsum.photos/200/300?random=1", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r2.nickname);
  }
}
var _SearchComponent = class _SearchComponent {
  constructor(profileService, router) {
    this.profileService = profileService;
    this.router = router;
    this.searchText = "";
    this.users = [];
  }
  ngOnInit() {
  }
  // Método para manejar el cambio en el campo de búsqueda
  onSearchChange() {
    if (this.searchText.trim().length > 0) {
      this.profileService.searchProfiles(this.searchText).subscribe((data) => {
        this.users = data;
        console.log(data);
      });
    } else {
      this.users = [];
    }
  }
  // Método para redirigir al perfil del usuario
  navigateToProfile(id) {
    this.router.navigate([`/profile/${id}`]);
  }
  // Método para eliminar un usuario de la lista visualmente
  removeUser(user) {
    this.users = this.users.filter((u) => u !== user);
  }
};
_SearchComponent.\u0275fac = function SearchComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SearchComponent)(\u0275\u0275directiveInject(ProfileService), \u0275\u0275directiveInject(Router));
};
_SearchComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchComponent, selectors: [["app-search"]], decls: 8, vars: 2, consts: [[1, "barra"], ["name", "search"], ["type", "text", "placeholder", "Buscar...", 3, "ngModelChange", "ionInput", "ngModel"], ["lines", "none", "style", "--background: transparent;", 3, "click", 4, "ngFor", "ngForOf"], ["lines", "none", 2, "--background", "transparent", 3, "click"], [3, "src"], [2, "color", "white"]], template: function SearchComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content")(1, "div", 0);
    \u0275\u0275element(2, "ion-icon", 1);
    \u0275\u0275elementStart(3, "ion-input", 2);
    \u0275\u0275twoWayListener("ngModelChange", function SearchComponent_Template_ion_input_ngModelChange_3_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
      return $event;
    });
    \u0275\u0275listener("ionInput", function SearchComponent_Template_ion_input_ionInput_3_listener() {
      return ctx.onSearchChange();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "ion-list")(5, "ion-list-header");
    \u0275\u0275text(6, "Resultados");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, SearchComponent_ion_item_7_Template, 5, 2, "ion-item", 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx.users);
  }
}, dependencies: [IonicModule, IonAvatar, IonContent, IonIcon, IonInput, IonItem, IonLabel, IonList, IonListHeader, TextValueAccessorDirective, FormsModule, NgControlStatus, NgModel, NgForOf], styles: ['@charset "UTF-8";\n\n\n\nion-content[_ngcontent-%COMP%] {\n  background-color: #042F2E;\n  --background: #042F2E;\n  color: white;\n}\nion-input[_ngcontent-%COMP%] {\n  background-color: #042F2E;\n  color: white;\n  border-bottom: 1px solid white;\n  padding: 5px 0;\n}\nion-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: white;\n}\nion-list-header[_ngcontent-%COMP%] {\n  color: white;\n  padding-left: 10px;\n}\nion-list[_ngcontent-%COMP%] {\n  background-color: #042F2E;\n}\nion-item[_ngcontent-%COMP%] {\n  --background: transparent;\n}\nion-label[_ngcontent-%COMP%] {\n  color: white;\n}\nion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n.barra[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 10px;\n  background-color: #042F2E;\n  margin-top: 56px;\n  margin-bottom: 20px;\n}\n.barra[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.barra[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  flex: 1;\n  color: white;\n}\n/*# sourceMappingURL=search.component.css.map */'] });
var SearchComponent = _SearchComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchComponent, { className: "SearchComponent", filePath: "src/app/screen/search/search.component.ts", lineNumber: 19 });
})();

// src/app/Guards/screen-size.guard.ts
var _ScreenSizeGuard = class _ScreenSizeGuard {
  canActivate() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 1e3) {
      return true;
    } else {
      alert("Esta vista solo est\xE1 disponible en dispositivos m\xF3viles.");
      return false;
    }
  }
};
_ScreenSizeGuard.\u0275fac = function ScreenSizeGuard_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ScreenSizeGuard)();
};
_ScreenSizeGuard.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ScreenSizeGuard, factory: _ScreenSizeGuard.\u0275fac, providedIn: "root" });
var ScreenSizeGuard = _ScreenSizeGuard;

// src/app/Service/menusuggestionsService.service.ts
var _MenuSuggestionsService = class _MenuSuggestionsService {
  constructor() {
    this.menuVisible = new BehaviorSubject(true);
    this.suggestionsVisible = new BehaviorSubject(true);
    this.menuVisible$ = this.menuVisible.asObservable();
    this.suggestionsVisible$ = this.suggestionsVisible.asObservable();
  }
  // Métodos para cambiar la visibilidad
  setMenuVisible(visible) {
    this.menuVisible.next(visible);
  }
  setSuggestionsVisible(visible) {
    this.suggestionsVisible.next(visible);
  }
};
_MenuSuggestionsService.\u0275fac = function MenuSuggestionsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MenuSuggestionsService)();
};
_MenuSuggestionsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MenuSuggestionsService, factory: _MenuSuggestionsService.\u0275fac, providedIn: "root" });
var MenuSuggestionsService = _MenuSuggestionsService;

// src/app/Guards/auth.guard.ts
var _AuthGuard = class _AuthGuard {
  constructor(router, menuSuggestionsService) {
    this.router = router;
    this.menuSuggestionsService = menuSuggestionsService;
  }
  canActivate(route, state) {
    const token = sessionStorage.getItem("token");
    if (token) {
      return true;
    } else {
      this.menuSuggestionsService.setMenuVisible(false);
      this.menuSuggestionsService.setSuggestionsVisible(false);
      this.router.navigate(["/login"], { queryParams: { returnUrl: state.url, fromShare: true } });
      return false;
    }
  }
};
_AuthGuard.\u0275fac = function AuthGuard_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AuthGuard)(\u0275\u0275inject(Router), \u0275\u0275inject(MenuSuggestionsService));
};
_AuthGuard.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthGuard, factory: _AuthGuard.\u0275fac, providedIn: "root" });
var AuthGuard = _AuthGuard;

// src/app/app.routes.ts
var routes = [
  {
    path: "home",
    loadComponent: () => import("./home.page-LQPNDGWS.js").then((m) => m.HomePage)
  },
  {
    path: "",
    redirectTo: "registro",
    pathMatch: "full"
  },
  {
    path: "registro",
    loadComponent: () => import("./registro.component-VXOL7H24.js").then((m) => m.RegistroComponent)
  },
  {
    path: "login",
    loadComponent: () => import("./login.component-7IXRI73C.js").then((m) => m.LoginComponent)
  },
  {
    path: "posts",
    loadComponent: () => import("./posts.component-YUHO4NRJ.js").then((m) => m.PostsComponent)
  },
  {
    path: "notification",
    loadComponent: () => import("./notification.component-HI7VUSA4.js").then((m) => m.NotificationComponent)
  },
  {
    path: "profile/:id",
    loadComponent: () => import("./profile.component-NFOLH3RU.js").then((m) => m.ProfileComponent)
  },
  {
    path: "profile",
    loadComponent: () => import("./profile.component-NFOLH3RU.js").then((m) => m.ProfileComponent)
  },
  {
    path: "menuoriginal",
    loadComponent: () => import("./menuoriginal.component-Q2PW4FWQ.js").then((m) => m.MenuoriginalComponent),
    canActivate: [AuthGuard]
  },
  {
    path: "admin",
    loadComponent: () => import("./admin.component-2U67DNLY.js").then((m) => m.AdminComponent)
  },
  {
    path: "search",
    component: SearchComponent,
    canActivate: [ScreenSizeGuard]
  },
  {
    path: "settings",
    loadComponent: () => import("./settings.component-Y52HUXXG.js").then((m) => m.SettingsComponent)
  },
  {
    path: "health",
    loadComponent: () => import("./health.component-XK54TBM7.js").then((m) => m.HealthComponent)
  },
  {
    path: "recu",
    loadComponent: () => import("./recuperacion-previa.component-IV6V5NYO.js").then((m) => m.RecuperacionPreviaComponent)
  },
  {
    path: "post-save",
    loadComponent: () => import("./post-save.component-NCVBJRZQ.js").then((m) => m.PostSaveComponent)
  },
  {
    path: "post-details/:id",
    loadComponent: () => import("./post-details.component-TCBWK55M.js").then((m) => m.PostDetailsComponent),
    canActivate: [AuthGuard]
  },
  {
    path: "posts-user/:id",
    loadComponent: () => import("./posts-user.component-UZQQKTPS.js").then((m) => m.PostsUserComponent)
  },
  {
    path: "chat/:groupId",
    loadComponent: () => import("./rafaparaelchat.component-M6LQIIS6.js").then((m) => m.RafaparaelchatComponent)
  },
  {
    path: "mensajes",
    loadComponent: () => import("./mensajes.component-YRKCM7YW.js").then((m) => m.MensajesComponent)
  },
  {
    path: "suggestion",
    loadComponent: () => import("./suggestions.component-5RLW3COH.js").then((m) => m.SuggestionsComponent),
    canActivate: [AuthGuard]
  }
];

// src/app/Screen/menu/menu.component.ts
function MenuComponent_ion_item_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item", 21);
    \u0275\u0275listener("click", function MenuComponent_ion_item_34_Template_ion_item_click_0_listener() {
      const profile_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.navigateToProfile(profile_r2.id));
    });
    \u0275\u0275elementStart(1, "ion-avatar", 22);
    \u0275\u0275element(2, "img", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-label");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const profile_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", profile_r2.avatar || "https://picsum.photos/200/300?random=1", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(profile_r2.nickname);
  }
}
var _MenuComponent = class _MenuComponent {
  constructor(profileService, router, modalController) {
    this.profileService = profileService;
    this.router = router;
    this.modalController = modalController;
    this.query = "";
    this.profiles = [];
    addIcons({
      home,
      search,
      add,
      restaurant,
      notifications,
      closeCircle,
      personCircleOutline,
      settingsSharp
    });
  }
  ngOnInit() {
  }
  openAddPostModal() {
    return __async(this, null, function* () {
      const modal = yield this.modalController.create({
        component: NewPostComponent
      });
      yield modal.present();
    });
  }
  // Método para manejar el cambio de búsqueda
  onSearchChange() {
    if (this.query.trim().length > 0) {
      this.profileService.searchProfiles(this.query).subscribe((data) => {
        this.profiles = data;
      });
    } else {
      this.profiles = [];
    }
  }
  // Método para redirigir al perfil de un usuario
  navigateToProfile(id) {
    this.router.navigate([`/profile/${id}`]);
  }
  LogOut() {
    sessionStorage.clear();
    this.router.navigate(["/login"]);
  }
};
_MenuComponent.\u0275fac = function MenuComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _MenuComponent)(\u0275\u0275directiveInject(ProfileService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ModalController));
};
_MenuComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MenuComponent, selectors: [["app-menu"]], decls: 35, vars: 3, consts: [[1, "ion-no-padding"], ["size", "3", 1, "menuizq-column"], [1, "menuizq"], ["href", "/posts"], ["aria-hidden", "true", "name", "home", "slot", "start"], [3, "click"], ["aria-hidden", "true", "name", "add", "slot", "start"], ["href", "/mensajes"], ["name", "paper-plane-outline", "aria-hidden", "true", "slot", "start"], ["href", "/health", "id", "chatbot"], ["name", "logo-ionitron", "aria-hidden", "true", "slot", "start"], ["href", "/notification", "id", "notificaciones"], ["aria-hidden", "true", "name", "notifications", "slot", "start"], ["href", "/profile", "id", "perfil"], ["aria-hidden", "true", "name", "person-circle-outline", "slot", "start"], ["id", "cerrar-sesion", 3, "click"], ["aria-hidden", "true", "name", "log-in-outline", "slot", "start"], ["size", "9", 1, "content-column"], [1, "recent-list"], ["placeholder", "Buscar", 3, "ngModelChange", "ionInput", "ngModel", "clearInput"], ["lines", "none", 3, "click", 4, "ngFor", "ngForOf"], ["lines", "none", 3, "click"], ["slot", "start"], [3, "src"]], template: function MenuComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "body")(1, "ion-grid", 0)(2, "ion-row")(3, "ion-col", 1)(4, "ion-list", 2)(5, "a", 3);
    \u0275\u0275element(6, "ion-icon", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "br");
    \u0275\u0275elementStart(8, "a", 5);
    \u0275\u0275listener("click", function MenuComponent_Template_a_click_8_listener() {
      return ctx.openAddPostModal();
    });
    \u0275\u0275element(9, "ion-icon", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "br");
    \u0275\u0275elementStart(11, "a", 7);
    \u0275\u0275element(12, "ion-icon", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "br");
    \u0275\u0275elementStart(14, "a", 9);
    \u0275\u0275element(15, "ion-icon", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "br");
    \u0275\u0275elementStart(17, "a", 11);
    \u0275\u0275element(18, "ion-icon", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "br");
    \u0275\u0275elementStart(20, "a", 13);
    \u0275\u0275element(21, "ion-icon", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "br");
    \u0275\u0275elementStart(23, "a", 15);
    \u0275\u0275listener("click", function MenuComponent_Template_a_click_23_listener() {
      return ctx.LogOut();
    });
    \u0275\u0275element(24, "ion-icon", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "br");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "ion-col", 17)(27, "ion-list")(28, "h2");
    \u0275\u0275text(29, "B\xFAsqueda");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 18)(31, "ion-input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function MenuComponent_Template_ion_input_ngModelChange_31_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.query, $event) || (ctx.query = $event);
      return $event;
    });
    \u0275\u0275listener("ionInput", function MenuComponent_Template_ion_input_ionInput_31_listener() {
      return ctx.onSearchChange();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "h6");
    \u0275\u0275text(33, "Resultados");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(34, MenuComponent_ion_item_34_Template, 5, 2, "ion-item", 20);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(31);
    \u0275\u0275twoWayProperty("ngModel", ctx.query);
    \u0275\u0275property("clearInput", true);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx.profiles);
  }
}, dependencies: [
  IonicModule,
  IonAvatar,
  IonCol,
  IonGrid,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
  TextValueAccessorDirective,
  NgForOf,
  FormsModule,
  NgControlStatus,
  NgModel
], styles: ['@charset "UTF-8";\n\n\n\nbody[_ngcontent-%COMP%] {\n  background-color: #042F2E;\n  width: 25%;\n}\nion-list[_ngcontent-%COMP%] {\n  background-color: #042F2E;\n  height: 100%;\n}\n.menuizq[_ngcontent-%COMP%] {\n  padding-top: 120px;\n  padding-left: 20px;\n}\n.menuizq[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 50%;\n  font-size: 24px;\n}\nion-item[_ngcontent-%COMP%] {\n  --inner-padding-top: 0;\n  --inner-padding-bottom: 0;\n  --border-width: 0;\n  --background: transparent;\n  --ion-item-background: transparent;\n  margin: 0;\n}\nion-button[_ngcontent-%COMP%] {\n  color: white;\n}\na[_ngcontent-%COMP%] {\n  color: white;\n}\n.menuizq[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   ion-icon[_ngcontent-%COMP%] {\n  color: #00CED1;\n}\n/*# sourceMappingURL=menu.component.css.map */'] });
var MenuComponent = _MenuComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MenuComponent, { className: "MenuComponent", filePath: "src/app/screen/menu/menu.component.ts", lineNumber: 32 });
})();

// src/app/Screen/footer/footer.component.ts
var _FooterComponent = class _FooterComponent {
  constructor(router, modalController) {
    this.router = router;
    this.modalController = modalController;
    addIcons({ home, search, add, restaurant, notifications, closeCircle, personCircleOutline, paperPlaneOutline });
  }
  ngOnInit() {
  }
  goToUrl(url) {
    this.router.navigate([url]);
  }
  openAddPostModal() {
    return __async(this, null, function* () {
      const modal = yield this.modalController.create({
        component: NewPostComponent
      });
      yield modal.present();
    });
  }
};
_FooterComponent.\u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FooterComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ModalController));
};
_FooterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], decls: 13, vars: 0, consts: [[1, "custom-footer"], [1, "footer-images"], ["fill", "clear", 3, "click"], ["name", "home", "slot", "start", 2, "font-size", "28px"], ["name", "search", "slot", "start", 2, "font-size", "28px"], ["name", "add", "slot", "start", 2, "font-size", "28px"], ["name", "logo-ionitron", "slot", "start", 2, "font-size", "28px"], ["name", "person-circle-outline", "slot", "start", 2, "font-size", "34px"]], template: function FooterComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-footer")(1, "ion-toolbar", 0)(2, "div", 1)(3, "ion-button", 2);
    \u0275\u0275listener("click", function FooterComponent_Template_ion_button_click_3_listener() {
      return ctx.goToUrl("/posts");
    });
    \u0275\u0275element(4, "ion-icon", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-button", 2);
    \u0275\u0275listener("click", function FooterComponent_Template_ion_button_click_5_listener() {
      return ctx.goToUrl("/search");
    });
    \u0275\u0275element(6, "ion-icon", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ion-button", 2);
    \u0275\u0275listener("click", function FooterComponent_Template_ion_button_click_7_listener() {
      return ctx.openAddPostModal();
    });
    \u0275\u0275element(8, "ion-icon", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "ion-button", 2);
    \u0275\u0275listener("click", function FooterComponent_Template_ion_button_click_9_listener() {
      return ctx.goToUrl("/health");
    });
    \u0275\u0275element(10, "ion-icon", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "ion-button", 2);
    \u0275\u0275listener("click", function FooterComponent_Template_ion_button_click_11_listener() {
      return ctx.goToUrl("/profile");
    });
    \u0275\u0275element(12, "ion-icon", 7);
    \u0275\u0275elementEnd()()()();
  }
}, dependencies: [IonicModule, IonButton, IonFooter, IonIcon, IonToolbar], styles: ['@charset "UTF-8";\n\n\n\n.custom-footer[_ngcontent-%COMP%] {\n  --background: #007875;\n}\n.footer-images[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 2%;\n  align-items: center;\n  flex-wrap: wrap;\n}\nion-icon[_ngcontent-%COMP%] {\n  color: black;\n}\n/*# sourceMappingURL=footer.component.css.map */'] });
var FooterComponent = _FooterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src/app/screen/footer/footer.component.ts", lineNumber: 26 });
})();

// src/app/Service/WebSocketNotification.ts
var _WebsocketServiceNotification = class _WebsocketServiceNotification {
  constructor(profileService) {
    this.profileService = profileService;
    this.megaNotification = new BehaviorSubject([]);
  }
  connectToNotification() {
    let token = sessionStorage.getItem("token") || "";
    this.profileService.getProfile(token).subscribe({
      next: (profile) => {
        this.connect(profile.id);
      },
      error: (error) => {
        console.error("Error al cargar el perfil:", error);
      },
      complete: () => {
        console.log("Profile loaded");
      }
    });
  }
  connect(roomId) {
    const webSocketUrl = environment.apiUrl + `/ws-native`;
    this.stompClient = new Client({
      webSocketFactory: () => new WebSocket(webSocketUrl),
      reconnectDelay: 5e3,
      debug: (str) => console.log(str),
      onConnect: () => {
        console.log("Conectado al servidor WebSocket nativo");
        this.stompClient.subscribe(`/topic/roomNotification/` + roomId, (message) => {
          try {
            const chatMessage = JSON.parse(message.body);
            console.log("ChatMessage: ", chatMessage);
            const currentMessages = this.megaNotification.getValue();
            this.megaNotification.next([chatMessage]);
          } catch (error) {
            console.error("Error al procesar el mensaje recibido:", error);
          }
        });
      },
      onStompError: (frame) => {
        console.error("Error en WebSocket: ", frame.headers["message"]);
      }
    });
    this.stompClient.activate();
  }
  // Obtener mensajes de un grupo
  getMessageObservable() {
    return this.megaNotification.asObservable();
  }
  sendMessage(chatMessage) {
    if (this.stompClient && this.stompClient.connected) {
      const message = JSON.stringify(chatMessage);
      this.stompClient.publish({
        destination: `/app/roomNotification/${chatMessage.groupId}`,
        body: message
      });
    } else {
      console.error("No se puede enviar el mensaje: WebSocket no est\xE1 conectado.");
    }
  }
};
_WebsocketServiceNotification.\u0275fac = function WebsocketServiceNotification_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _WebsocketServiceNotification)(\u0275\u0275inject(ProfileService));
};
_WebsocketServiceNotification.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WebsocketServiceNotification, factory: _WebsocketServiceNotification.\u0275fac, providedIn: "root" });
var WebsocketServiceNotification = _WebsocketServiceNotification;

// src/app/app.component.ts
function AppComponent_ion_col_3_app_menu_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-menu");
  }
}
function AppComponent_ion_col_3_app_menuoriginal_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-menuoriginal");
  }
}
function AppComponent_ion_col_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-col", 9);
    \u0275\u0275template(1, AppComponent_ion_col_3_app_menu_1_Template, 1, 0, "app-menu", 5)(2, AppComponent_ion_col_3_app_menuoriginal_2_Template, 1, 0, "app-menuoriginal", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.useAlternateMenu);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.useAlternateMenu);
  }
}
function AppComponent_ion_header_6_ion_menu_button_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-menu-button");
  }
}
function AppComponent_ion_header_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header")(1, "ion-toolbar")(2, "ion-buttons", 10);
    \u0275\u0275template(3, AppComponent_ion_header_6_ion_menu_button_3_Template, 1, 0, "ion-menu-button", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-title");
    \u0275\u0275text(5, "PowerZone");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("--background", ctx_r0.isChatRoute ? "#272727FF" : "transparent");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.menuVisible);
  }
}
function AppComponent_ion_col_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-col", 11);
    \u0275\u0275element(1, "app-suggestions");
    \u0275\u0275elementEnd();
  }
}
function AppComponent_ion_menu_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-menu", 12)(1, "ion-header")(2, "ion-toolbar")(3, "ion-title");
    \u0275\u0275text(4, "Men\xFA");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "ion-content")(6, "ion-list")(7, "ion-item", 13)(8, "a", 14);
    \u0275\u0275element(9, "ion-icon", 15);
    \u0275\u0275text(10, " Inicio ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "ion-item")(12, "a", 16);
    \u0275\u0275element(13, "ion-icon", 17);
    \u0275\u0275text(14, " Buscar ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "ion-item")(16, "a", 18);
    \u0275\u0275listener("click", function AppComponent_ion_menu_10_Template_a_click_16_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openAddPostModal());
    });
    \u0275\u0275element(17, "ion-icon", 19);
    \u0275\u0275text(18, " A\xF1adir Post ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "ion-item")(20, "a", 20);
    \u0275\u0275element(21, "ion-icon", 21);
    \u0275\u0275text(22, " Mensajes ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "ion-item")(24, "a", 22);
    \u0275\u0275element(25, "ion-icon", 23);
    \u0275\u0275text(26, " ChatBot ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "ion-item")(28, "a", 24);
    \u0275\u0275element(29, "ion-icon", 25);
    \u0275\u0275text(30, " Notificaciones ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "ion-item")(32, "a", 26);
    \u0275\u0275element(33, "ion-icon", 27);
    \u0275\u0275text(34, " Perfil ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "ion-item")(36, "a", 28);
    \u0275\u0275element(37, "ion-icon", 29);
    \u0275\u0275text(38, " Ajustes del perfil ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "ion-item")(40, "a", 18);
    \u0275\u0275listener("click", function AppComponent_ion_menu_10_Template_a_click_40_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.logOut());
    });
    \u0275\u0275element(41, "ion-icon", 30);
    \u0275\u0275text(42, " Cerrar Sesi\xF3n ");
    \u0275\u0275elementEnd()()()()();
  }
}
function AppComponent_app_footer_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-footer");
  }
}
var _AppComponent = class _AppComponent {
  constructor(menuSuggestionsService, router, menuService, modalController, route, webSocketNotificationService, toastController) {
    this.menuSuggestionsService = menuSuggestionsService;
    this.router = router;
    this.menuService = menuService;
    this.modalController = modalController;
    this.route = route;
    this.webSocketNotificationService = webSocketNotificationService;
    this.toastController = toastController;
    this.menuVisible = true;
    this.suggestionsVisible = true;
    this.useAlternateMenu = false;
    this.headerVisible = true;
    this.footerVisible = true;
    this.isChatRoute = false;
    addIcons({ settingsSharp, logoIonitron, personAdd, addCircle, chatbubbles, heart, paperPlaneOutline });
  }
  onResize(event) {
    this.updateViewBasedOnScreenSize();
  }
  closeHamburgerMenuIfNeeded() {
    if (window.innerWidth < 1e3) {
      this.menuVisible = false;
    }
  }
  webSocketNotification() {
    this.webSocketNotificationService.connectToNotification();
    this.webSocketNotificationService.getMessageObservable().subscribe({
      next: (megaNotification) => {
        this.notification(megaNotification[0]);
      },
      error: (error) => {
        console.error("Error al cargar el perfil:", error);
      },
      complete: () => {
        console.log("Profile loaded");
      }
    });
  }
  notification(meganotification) {
    switch (meganotification.type) {
      case "MESSAGE":
        if (this.router.url === "/chat/" + meganotification.groupMessenger.grupouser.group.id) {
          break;
        }
        const mensaje = "Has recibido un mensaje de " + meganotification.emitter.nickName;
        const buttons = [
          {
            side: "end",
            text: "Ver",
            handler: () => {
              this.router.navigate(["/prueba/" + meganotification.groupMessenger.grupouser.group.id]);
            }
          }
        ];
        this.presentToast("bottom", mensaje, buttons, "chatbubbles").then((r) => console.log("Toast presentado"));
        break;
      case "NEW_POST":
        const post = meganotification.emitter.nickName + " ha publicado un nuevo post";
        const buttonsPost = [
          {
            side: "end",
            text: "Ver",
            handler: () => {
              var _a, _b;
              if ((_a = meganotification.postDto) == null ? void 0 : _a.post) {
                this.router.navigate([`/post-details/${(_b = meganotification.postDto) == null ? void 0 : _b.post.id}`]);
              }
            }
          }
        ];
        this.presentToast("bottom", post, buttonsPost, "addCircle").then((r) => console.log("Toast presentado"));
        break;
      case "NEW_LIKE":
        const like = meganotification.emitter.nickName + " ha dado like a tu post";
        const buttonsLike = [
          {
            side: "end",
            text: "Ver post",
            handler: () => {
              var _a, _b;
              if ((_a = meganotification.postDto) == null ? void 0 : _a.post) {
                this.router.navigate([`/post-details/${(_b = meganotification.postDto) == null ? void 0 : _b.post.id}`]);
              }
            }
          },
          {
            side: "end",
            text: "Ver perfil",
            handler: () => {
              this.router.navigate([`/profile/${meganotification.emitter.id}`]);
            }
          }
        ];
        this.presentToast("bottom", like, buttonsLike, "heart").then((r) => console.log("Toast presentado"));
        break;
      case "NEW_FOLLOWER":
        const follower = meganotification.emitter.nickName + " te ha seguido";
        const buttonsFollower = [
          {
            side: "end",
            text: "Ver perfil",
            handler: () => {
              this.router.navigate([`/profile/${meganotification.emitter.id}`]);
            }
          }
        ];
        this.presentToast("bottom", follower, buttonsFollower, "personAdd").then((r) => console.log("Toast presentado"));
        break;
      case "NEW_COMMENT":
        const comment = meganotification.emitter.nickName + " ha comentado tu post";
        const buttonsComment = [
          {
            side: "end",
            text: "Ver post",
            handler: () => {
              var _a, _b;
              if ((_a = meganotification.postDto) == null ? void 0 : _a.post) {
                this.router.navigate([`/post-details/${(_b = meganotification.postDto) == null ? void 0 : _b.post.id}`]);
              }
            }
          },
          {
            side: "end",
            text: "Ver perfil",
            handler: () => {
              this.router.navigate([`/profile/${meganotification.emitter.id}`]);
            }
          }
        ];
        this.presentToast("bottom", comment, buttonsComment, "chatbubbles").then((r) => console.log("Toast presentado"));
        break;
    }
  }
  presentToast(_0) {
    return __async(this, arguments, function* (position, message = "Hello World!", buttons = [], Icon) {
      const toast = yield this.toastController.create({
        message,
        duration: 1500,
        position,
        buttons,
        icon: Icon
      });
      yield toast.present();
    });
  }
  ngOnInit() {
    this.webSocketNotification();
    this.updateViewBasedOnScreenSize();
    this.menuService.useAlternateMenu$.subscribe((useAlternateMenu) => {
      this.useAlternateMenu = useAlternateMenu;
    });
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentUrl = this.router.url;
        const queryParams = this.route.snapshot.queryParams;
        this.isChatRoute = currentUrl === "/chat";
        const hideFooter = ["/chat"].includes(currentUrl);
        this.footerVisible = !hideFooter;
        const hideMenus = ["/login", "/registro", "/recu"].includes(currentUrl) || queryParams["fromShare"] === "true";
        this.menuSuggestionsService.setMenuVisible(!hideMenus);
        this.menuSuggestionsService.setSuggestionsVisible(!hideMenus);
        this.closeHamburgerMenuIfNeeded();
        this.updateViewBasedOnScreenSize();
      }
    });
    this.menuSuggestionsService.menuVisible$.subscribe((visible) => {
      this.menuVisible = visible;
    });
    this.menuSuggestionsService.suggestionsVisible$.subscribe((visible) => {
      this.suggestionsVisible = visible;
    });
    this.route.queryParams.subscribe((params) => {
      console.log("Query Params:", params);
      if (params["fromShare"] === "true") {
        console.log("Ocultando men\xFAs por fromShare");
        setTimeout(() => {
          this.menuSuggestionsService.setMenuVisible(false);
          this.menuSuggestionsService.setSuggestionsVisible(false);
        }, 0);
      }
    });
  }
  updateViewBasedOnScreenSize() {
    const screenWidth = window.innerWidth;
    const isAuthRoute = ["/login", "/registro", "/recu"].includes(this.router.url);
    const isChatRoute = ["/chat"].includes(this.router.url);
    if (isAuthRoute) {
      this.menuVisible = false;
      this.suggestionsVisible = false;
    } else {
      this.menuVisible = screenWidth > 1e3;
      this.suggestionsVisible = screenWidth > 1e3;
    }
    this.headerVisible = screenWidth < 1e3 && !isAuthRoute;
    this.footerVisible = screenWidth < 1e3 && !isAuthRoute && !isChatRoute;
  }
  openAddPostModal() {
    return __async(this, null, function* () {
      const modal = yield this.modalController.create({
        component: NewPostComponent
      });
      yield modal.present();
    });
  }
  logOut() {
    sessionStorage.clear();
    this.router.navigate(["/login"]);
  }
  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
};
_AppComponent.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppComponent)(\u0275\u0275directiveInject(MenuSuggestionsService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(Menu), \u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(WebsocketServiceNotification), \u0275\u0275directiveInject(ToastController));
};
_AppComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("resize", function AppComponent_resize_HostBindingHandler($event) {
      return ctx.onResize($event);
    }, false, \u0275\u0275resolveWindow);
  }
}, decls: 12, vars: 5, consts: [[1, "ion-no-padding", 2, "height", "100%", "width", "100%"], [2, "height", "100%"], ["size", "3", "class", "menuizq-column ion-no-padding", "style", "height: 100%;", 4, "ngIf"], [1, "ion-no-padding", "content-column", 2, "height", "100%"], ["id", "main-content", 1, "ion-page"], [4, "ngIf"], ["fullscreen", ""], ["size", "3", "class", "ion-no-padding", "style", "height: 100%;", 4, "ngIf"], ["contentId", "main-content", "side", "start", "type", "overlay", 4, "ngIf"], ["size", "3", 1, "menuizq-column", "ion-no-padding", 2, "height", "100%"], ["slot", "start"], ["size", "3", 1, "ion-no-padding", 2, "height", "100%"], ["contentId", "main-content", "side", "start", "type", "overlay"], ["id", "home"], ["href", "/posts", 2, "color", "white", "text-decoration", "none"], ["name", "home", "slot", "start"], ["href", "/search", 2, "color", "white", "text-decoration", "none"], ["name", "search", "slot", "start"], [2, "color", "white", "text-decoration", "none", 3, "click"], ["name", "add", "slot", "start"], ["href", "/mensajes", 2, "color", "white", "text-decoration", "none"], ["name", "paper-plane-outline", "aria-hidden", "true", "slot", "start"], ["href", "/health", 2, "color", "white", "text-decoration", "none"], ["name", "logo-ionitron", "aria-hidden", "true", "slot", "start"], ["href", "/notification", 2, "color", "white", "text-decoration", "none"], ["name", "notifications", "slot", "start"], ["href", "/profile", 2, "color", "white", "text-decoration", "none"], ["name", "person-circle-outline", "slot", "start"], ["href", "/settings", 2, "color", "white", "text-decoration", "none"], ["name", "settings-sharp", "slot", "start"], ["name", "log-in-outline", "slot", "start"]], template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-app")(1, "ion-grid", 0)(2, "ion-row", 1);
    \u0275\u0275template(3, AppComponent_ion_col_3_Template, 3, 2, "ion-col", 2);
    \u0275\u0275elementStart(4, "ion-col", 3)(5, "div", 4);
    \u0275\u0275template(6, AppComponent_ion_header_6_Template, 6, 3, "ion-header", 5);
    \u0275\u0275elementStart(7, "ion-content", 6);
    \u0275\u0275element(8, "ion-router-outlet");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, AppComponent_ion_col_9_Template, 2, 0, "ion-col", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, AppComponent_ion_menu_10_Template, 43, 0, "ion-menu", 8)(11, AppComponent_app_footer_11_Template, 1, 0, "app-footer", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.menuVisible);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.headerVisible);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.suggestionsVisible);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.menuVisible);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.footerVisible);
  }
}, dependencies: [
  MenuComponent,
  IonicModule,
  IonApp,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonList,
  IonMenu,
  IonMenuButton,
  IonRow,
  IonTitle,
  IonToolbar,
  IonRouterOutlet,
  NgIf,
  MenuoriginalComponent,
  FooterComponent,
  SuggestionsComponent
], encapsulation: 2 });
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 31 });
})();

// src/main.ts
bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideHttpClient(),
    provideRouter(routes, withPreloading(PreloadAllModules))
  ]
});
//# sourceMappingURL=main.js.map
