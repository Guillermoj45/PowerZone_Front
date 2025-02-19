import {
  ProfileSettingsService
} from "./chunk-IDV7EZ7D.js";
import {
  PostService
} from "./chunk-77HXCZAV.js";
import {
  addIcons,
  bookmark,
  sendSharp,
  settingsOutline
} from "./chunk-U7I4M26G.js";
import {
  IonAvatar,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonRow,
  IonText,
  IonicModule
} from "./chunk-AZ27F32N.js";
import "./chunk-IRNVB6F3.js";
import {
  ActivatedRoute,
  NgForOf,
  NgIf,
  Router,
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpropertyInterpolate1,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
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
import {
  __async
} from "./chunk-ZVATTXSA.js";

// src/app/Screen/profile/profile.component.ts
function ProfileComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "ion-button", 19);
    \u0275\u0275listener("click", function ProfileComponent_div_30_Template_ion_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleFollow());
    });
    \u0275\u0275element(2, "ion-icon", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("name", ctx_r2.isFollowing ? "person-remove-outline" : "person-add-outline");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isFollowing ? "Dejar de seguir" : "Seguir", " ");
  }
}
function ProfileComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "ion-button", 19);
    \u0275\u0275listener("click", function ProfileComponent_div_31_Template_ion_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.navigateTo("/post-save"));
    });
    \u0275\u0275element(2, "ion-icon", 21);
    \u0275\u0275text(3, " Post guardados ");
    \u0275\u0275elementEnd()();
  }
}
function ProfileComponent_ion_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 19);
    \u0275\u0275listener("click", function ProfileComponent_ion_button_34_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.navigateTo("/settings"));
    });
    \u0275\u0275text(1, " Ajustes del perfil ");
    \u0275\u0275element(2, "ion-icon", 22);
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 19);
    \u0275\u0275listener("click", function ProfileComponent_ng_template_35_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.navigateTo("/mensajes"));
    });
    \u0275\u0275text(1, " Enviar un mensaje ");
    \u0275\u0275element(2, "ion-icon", 23);
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "p");
    \u0275\u0275text(2, "Este usuario no tiene publicaciones.");
    \u0275\u0275elementEnd()();
  }
}
function ProfileComponent_div_38_img_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 27);
    \u0275\u0275listener("click", function ProfileComponent_div_38_img_1_Template_img_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.navigateToPost(ctx_r2.profile.id));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const image_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    \u0275\u0275propertyInterpolate1("alt", "Imagen ", i_r9, "");
    \u0275\u0275property("src", image_r8 || "https://picsum.photos/200/300?random=2", \u0275\u0275sanitizeUrl);
  }
}
function ProfileComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275template(1, ProfileComponent_div_38_img_1_Template, 1, 3, "img", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.postImages);
  }
}
var _ProfileComponent = class _ProfileComponent {
  constructor(router, route, profileSettings, postService) {
    this.router = router;
    this.route = route;
    this.profileSettings = profileSettings;
    this.postService = postService;
    this.isOwnProfile = false;
    this.showButton = false;
    this.items = [];
    this.isHeaderHidden = false;
    this.lastScrollTop = 0;
    this.profileId = null;
    this.posts = [];
    this.profile = {
      nickname: "",
      name: "",
      email: "",
      bornDate: "",
      avatar: ""
    };
    this.postImages = [];
    this.isFollowing = false;
    this.followersCount = 0;
    this.followingCount = 0;
    addIcons({ bookmark, sendSharp, settingsOutline });
  }
  ngOnInit() {
    this.checkRoute();
    this.profileId = this.route.snapshot.paramMap.get("id");
    const currentUrl = this.router.url;
    this.isOwnProfile = !this.profileId && currentUrl === "/profile";
    if (this.profileId) {
      this.profileSettings.getProfileById(this.profileId).subscribe((data) => {
        this.profile = data;
        console.log("Loaded profile by ID:", this.profile);
      }, (error) => {
        console.error("Error retrieving profile by ID:", error);
      });
      this.loadPostsByUserId(this.profileId);
      this.checkIfFollowing();
    } else {
      const token = sessionStorage.getItem("token");
      if (token) {
        this.profileSettings.getData(token).subscribe((data) => {
          this.profile = data;
          console.log("Profile data loaded:", this.profile);
        }, (error) => {
          console.error("Error retrieving profile data:", error);
        });
        this.loadPostsByCurrentUser(token);
      } else {
        console.error("Token is null");
      }
    }
  }
  checkRoute() {
    const urlSegments = this.router.url.split("/");
    this.showButton = !(urlSegments.length === 2 && urlSegments[1] === "profile");
  }
  loadPostsByUserId(userId) {
    const token = sessionStorage.getItem("token");
    if (token) {
      this.postService.getUserPostsById(token, userId).subscribe((data) => {
        this.posts = data;
        this.extractPostImages();
        console.log("Loaded posts for user ID:", userId, this.posts);
      }, (error) => {
        console.error("Error retrieving posts for user ID:", error);
        this.posts = [];
      });
    } else {
      console.error("Token is null");
    }
  }
  loadPostsByCurrentUser(token) {
    this.postService.getUserPosts(token).subscribe((data) => {
      this.posts = data;
      this.extractPostImages();
      console.log("Loaded posts for current user:", this.posts);
    }, (error) => {
      console.error("Error retrieving posts for current user:", error);
      this.posts = [];
    });
  }
  extractPostImages() {
    this.postImages = this.posts.map((post) => post.image_post).filter((image) => image !== void 0);
  }
  navigateTo(path) {
    this.router.navigate([path]);
  }
  navigateToPost(userId) {
    if (userId !== void 0 && userId !== null) {
      this.router.navigate(["/posts-user", userId]);
    }
  }
  checkIfFollowing() {
    const token = sessionStorage.getItem("token");
    if (token && this.profileId) {
      this.profileSettings.isFollowing(token, parseInt(this.profileId), parseInt(this.profileId)).subscribe((isFollowing) => {
        this.isFollowing = isFollowing;
      }, (error) => {
        console.error("Error checking follow status:", error);
      });
    }
  }
  toggleFollow() {
    return __async(this, null, function* () {
      const token = sessionStorage.getItem("token");
      if (token && this.profileId) {
        try {
          if (this.isFollowing) {
            yield this.profileSettings.unfollowUser(token, parseInt(this.profileId), parseInt(this.profileId)).toPromise();
            this.isFollowing = false;
            console.log("Unfollowed successfully");
            this.ngOnInit();
          } else {
            yield this.profileSettings.followUser(token, parseInt(this.profileId), parseInt(this.profileId)).toPromise();
            this.isFollowing = true;
            console.log("Followed successfully");
            this.ngOnInit();
          }
        } catch (error) {
          console.error("Error toggling follow status:", error);
        }
      }
    });
  }
  onIonInfinite(event) {
    this.generateItems();
    setTimeout(() => {
      event.target.complete();
    }, 500);
  }
  generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 50; i++) {
      this.items.push(`Item ${count + i}`);
    }
  }
  onScroll(event) {
    const scrollTop = event.detail.scrollTop;
    this.isHeaderHidden = scrollTop > this.lastScrollTop && scrollTop > 100;
    this.lastScrollTop = scrollTop;
  }
};
_ProfileComponent.\u0275fac = function ProfileComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ProfileComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ProfileSettingsService), \u0275\u0275directiveInject(PostService));
};
_ProfileComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileComponent, selectors: [["app-profile"]], decls: 41, vars: 13, consts: [["sendMessage", ""], [3, "ionScroll"], [1, "contenido_perfil", "ion-no-padding"], [2, "margin-top", "5%"], [1, "movil", 2, "justify-content", "center", "margin-bottom", "10px"], [2, "display", "flex", "align-items", "center"], ["alt", "Imagen perfil", 3, "src"], [2, "padding-left", "7%"], [1, "stats"], [1, "text-center"], [1, "info_num"], [2, "margin", "2% 5%"], ["size", "5"], [4, "ngIf"], ["size", "2"], [3, "click", 4, "ngIf", "ngIfElse"], ["class", "no-posts", 4, "ngIf"], ["class", "image-grid", 4, "ngIf"], [3, "ionInfinite"], [3, "click"], [2, "margin-right", "5%", 3, "name"], ["name", "bookmark", 2, "margin-right", "5%"], ["name", "settings-outline", "slot", "start", 2, "margin-left", "5%", "margin-right", "4.5%"], ["name", "send-sharp", 2, "margin-left", "5%"], [1, "no-posts"], [1, "image-grid"], [3, "src", "alt", "click", 4, "ngFor", "ngForOf"], [3, "click", "src", "alt"]], template: function ProfileComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-content", 1);
    \u0275\u0275listener("ionScroll", function ProfileComponent_Template_ion_content_ionScroll_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onScroll($event));
    });
    \u0275\u0275elementStart(1, "div", 2)(2, "ion-grid", 3)(3, "ion-row", 4)(4, "ion-col", 5)(5, "ion-avatar");
    \u0275\u0275element(6, "img", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ion-text", 7);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "ion-row", 8)(10, "ion-col")(11, "div", 9)(12, "ion-text", 10);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "ion-text");
    \u0275\u0275text(15, "Seguidores");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "ion-col")(17, "div", 9)(18, "ion-text", 10);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "ion-text");
    \u0275\u0275text(21, "Seguidos");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "ion-col")(23, "div", 9)(24, "ion-text", 10);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "ion-text");
    \u0275\u0275text(27, "Publicaciones");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(28, "ion-row", 11)(29, "ion-col", 12);
    \u0275\u0275template(30, ProfileComponent_div_30_Template, 4, 2, "div", 13)(31, ProfileComponent_div_31_Template, 4, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "ion-col", 14);
    \u0275\u0275elementStart(33, "ion-col", 12);
    \u0275\u0275template(34, ProfileComponent_ion_button_34_Template, 3, 0, "ion-button", 15)(35, ProfileComponent_ng_template_35_Template, 3, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(37, ProfileComponent_div_37_Template, 3, 0, "div", 16)(38, ProfileComponent_div_38_Template, 2, 1, "div", 17);
    \u0275\u0275elementStart(39, "ion-infinite-scroll", 18);
    \u0275\u0275listener("ionInfinite", function ProfileComponent_Template_ion_infinite_scroll_ionInfinite_39_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onIonInfinite($event));
    });
    \u0275\u0275element(40, "ion-infinite-scroll-content");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sendMessage_r10 = \u0275\u0275reference(36);
    \u0275\u0275advance();
    \u0275\u0275classProp("hidden", ctx.isHeaderHidden);
    \u0275\u0275advance(5);
    \u0275\u0275property("src", ctx.profile.avatar, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.profile.nickname || ctx.profile.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx.profile.followers);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx.profile.following);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx.posts.length);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx.showButton);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.showButton);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.isOwnProfile)("ngIfElse", sendMessage_r10);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.posts.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.postImages.length > 0);
  }
}, dependencies: [IonicModule, IonAvatar, IonButton, IonCol, IonContent, IonGrid, IonIcon, IonInfiniteScroll, IonInfiniteScrollContent, IonRow, IonText, NgIf, RouterModule, NgForOf], styles: ['@charset "UTF-8";\n\n\n\n.hidden[_ngcontent-%COMP%] {\n  transform: translateY(-100%);\n  transition: transform 0.3s ease-in-out;\n}\n.contenido_perfil[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  background-color: #042f2e;\n  transition: transform 0.3s ease-in-out;\n}\nion-content[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  --background: #042f2e;\n  scrollbar-width: none;\n}\nion-content[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.contenido_perfil.ion-no-padding[_ngcontent-%COMP%] {\n  padding: 0;\n}\nion-avatar[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  margin-bottom: 2%;\n}\nion-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 50%;\n  border: 2px solid white;\n}\n.text-center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 14px;\n  gap: 5px;\n  color: white;\n}\n.stats[_ngcontent-%COMP%] {\n  margin-top: 1%;\n  justify-content: start;\n  text-align: center;\n  gap: 1%;\n}\nion-grid[_ngcontent-%COMP%] {\n  width: 100%;\n}\nion-row[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n  text-align: left;\n}\nion-item[_ngcontent-%COMP%] {\n  --background: transparent;\n  --color: white;\n  margin: 30px 0;\n}\nion-button[_ngcontent-%COMP%] {\n  --background: #279e9c;\n  --color: white;\n  margin-top: 20px;\n  width: 100%;\n}\n.info_num[_ngcontent-%COMP%] {\n  font-size: 130%;\n}\n.image-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 5px;\n  padding: 5px;\n  grid-auto-rows: 150px;\n}\n.image-grid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 6px;\n  border: 2px solid #ffffff;\n  box-sizing: border-box;\n}\n.botones[_ngcontent-%COMP%] {\n  --margin-left: 2%;\n}\n@media (max-width: 1000px) {\n  .movil[_ngcontent-%COMP%] {\n    margin-top: 20%;\n  }\n}\nion-content[_ngcontent-%COMP%]::part(scroll) {\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\nion-content[_ngcontent-%COMP%]::part(scroll)::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=profile.component.css.map */'] });
var ProfileComponent = _ProfileComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "src/app/screen/profile/profile.component.ts", lineNumber: 22 });
})();
export {
  ProfileComponent
};
//# sourceMappingURL=profile.component-NFOLH3RU.js.map
