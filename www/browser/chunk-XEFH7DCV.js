import {
  AuthService
} from "./chunk-Z233NFIF.js";
import {
  ProfileSettingsService
} from "./chunk-IDV7EZ7D.js";
import {
  AdminService
} from "./chunk-IK76A6XB.js";
import {
  addIcons,
  closeCircle,
  personAddOutline,
  personRemoveOutline
} from "./chunk-U7I4M26G.js";
import {
  ProfileService
} from "./chunk-FQYQIARY.js";
import {
  IonAvatar,
  IonButton,
  IonCol,
  IonGrid,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonRow,
  IonicModule
} from "./chunk-AZ27F32N.js";
import {
  NgForOf,
  NgIf,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-A54Y6D4U.js";

// src/app/Screen/suggestions/suggestions.component.ts
function SuggestionsComponent_ion_item_11_ion_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 8);
    \u0275\u0275listener("click", function SuggestionsComponent_ion_item_11_ion_button_5_Template_ion_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const profile_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.followUser(profile_r2);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(1, "ion-icon", 9);
    \u0275\u0275text(2, " Seguir ");
    \u0275\u0275elementEnd();
  }
}
function SuggestionsComponent_ion_item_11_ion_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 8);
    \u0275\u0275listener("click", function SuggestionsComponent_ion_item_11_ion_button_6_Template_ion_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const profile_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.unfollowUser(profile_r2);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(1, "ion-icon", 10);
    \u0275\u0275text(2, " Dejar de seguir ");
    \u0275\u0275elementEnd();
  }
}
function SuggestionsComponent_ion_item_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item", 4);
    \u0275\u0275listener("click", function SuggestionsComponent_ion_item_11_Template_ion_item_click_0_listener() {
      const profile_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.navigateToProfile(profile_r2.id));
    });
    \u0275\u0275elementStart(1, "ion-avatar", 5);
    \u0275\u0275element(2, "img", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-label");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SuggestionsComponent_ion_item_11_ion_button_5_Template, 3, 0, "ion-button", 7)(6, SuggestionsComponent_ion_item_11_ion_button_6_Template, 3, 0, "ion-button", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const profile_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275propertyInterpolate("src", profile_r2.avatar, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(profile_r2.nickname);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !profile_r2.seguido);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", profile_r2.seguido);
  }
}
var _SuggestionsComponent = class _SuggestionsComponent {
  constructor(profileService, profileSettings, router, adminService, authService) {
    this.profileService = profileService;
    this.profileSettings = profileSettings;
    this.router = router;
    this.adminService = adminService;
    this.authService = authService;
    this.profiles = [];
    this.screen = screen;
    addIcons({ closeCircle, personAddOutline, personRemoveOutline });
  }
  ngOnInit() {
    this.getRecomendations();
  }
  getRecomendations() {
    this.profileService.getRecomendations().subscribe({
      next: (data) => {
        this.profiles = data;
        console.log(this.profiles);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  followUser(profile) {
    let token = sessionStorage.getItem("token") || "";
    this.profileSettings.followUser(token, 1, profile.id).subscribe({
      next: (data) => {
        console.log(data);
        profile.seguido = true;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  navigateToProfile(profileId) {
    this.router.navigate(["/profile/", profileId]);
  }
  screenAdmin() {
    this.adminService.verifyAdmin().subscribe({
      next: (data) => {
        if (data == true) {
          this.router.navigate(["/admin"]);
        }
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  unfollowUser(profile) {
    let token = sessionStorage.getItem("token") || "";
    console.log("token", token);
    this.profileSettings.unfollowUser(token, 1, profile.id).subscribe({
      next: (data) => {
        console.log(data);
        profile.seguido = false;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
};
_SuggestionsComponent.\u0275fac = function SuggestionsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SuggestionsComponent)(\u0275\u0275directiveInject(ProfileService), \u0275\u0275directiveInject(ProfileSettingsService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AdminService), \u0275\u0275directiveInject(AuthService));
};
_SuggestionsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuggestionsComponent, selectors: [["app-suggestions"]], decls: 12, vars: 1, consts: [["id", "sugerencias", 1, "ion-no-padding"], [1, "content-column"], ["src", "assets/icon/Logo.png", 3, "click"], ["lines", "none", 3, "click", 4, "ngFor", "ngForOf"], ["lines", "none", 3, "click"], ["aria-hidden", "true", "slot", "start"], ["alt", "", 3, "src"], ["slot", "end", 3, "click", 4, "ngIf"], ["slot", "end", 3, "click"], ["name", "person-add-outline"], ["name", "person-remove-outline"]], template: function SuggestionsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "body")(1, "ion-grid", 0)(2, "ion-row")(3, "ion-col", 1)(4, "ion-img", 2);
    \u0275\u0275listener("click", function SuggestionsComponent_Template_ion_img_click_4_listener() {
      return ctx.screenAdmin();
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "ion-row")(6, "ion-col")(7, "h6");
    \u0275\u0275text(8, "Sugerencias");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "ion-row")(10, "ion-col");
    \u0275\u0275template(11, SuggestionsComponent_ion_item_11_Template, 7, 4, "ion-item", 3);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(11);
    \u0275\u0275property("ngForOf", ctx.profiles);
  }
}, dependencies: [
  IonicModule,
  IonAvatar,
  IonButton,
  IonCol,
  IonGrid,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonRow,
  NgForOf,
  NgIf
], styles: ["\n\nbody[_ngcontent-%COMP%] {\n  width: 25%;\n}\nion-grid[_ngcontent-%COMP%] {\n  background-color: #042F2E;\n  height: 100%;\n}\nion-item[_ngcontent-%COMP%] {\n  --inner-padding-top: 0;\n  --inner-padding-bottom: 0;\n  --border-width: 0;\n  --background: transparent;\n  --ion-item-background: transparent;\n  margin-left: 5%;\n}\nion-button[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 70%;\n  --background: #6fb3a6;\n}\nh6[_ngcontent-%COMP%], \nh2[_ngcontent-%COMP%] {\n  margin-left: 8%;\n}\nion-button[_ngcontent-%COMP%] {\n  color: black;\n  font-size: 70%;\n}\nion-img[_ngcontent-%COMP%] {\n  width: 70%;\n  margin: auto;\n}\n/*# sourceMappingURL=suggestions.component.css.map */"] });
var SuggestionsComponent = _SuggestionsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuggestionsComponent, { className: "SuggestionsComponent", filePath: "src/app/screen/suggestions/suggestions.component.ts", lineNumber: 25 });
})();

export {
  SuggestionsComponent
};
//# sourceMappingURL=chunk-XEFH7DCV.js.map
