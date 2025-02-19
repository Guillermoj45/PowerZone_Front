import {
  NewCommentComponent
} from "./chunk-EHKKNGCG.js";
import {
  PostService
} from "./chunk-77HXCZAV.js";
import {
  addIcons,
  bookmark,
  bookmarkOutline,
  chatbubble,
  heart,
  heartOutline,
  shareSocial
} from "./chunk-U7I4M26G.js";
import {
  IonAvatar,
  IonButton,
  IonCol,
  IonContent,
  IonFab,
  IonGrid,
  IonIcon,
  IonImg,
  IonRow,
  IonicModule,
  ModalController,
  ToastController
} from "./chunk-AZ27F32N.js";
import "./chunk-IRNVB6F3.js";
import {
  CommonModule,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
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

// src/app/Screen/post-save/post-save.component.ts
function PostSaveComponent_ion_row_3_ion_col_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-col", 21);
    \u0275\u0275element(1, "ion-img", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const post_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", post_r2.image_post);
  }
}
function PostSaveComponent_ion_row_3_ion_avatar_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-avatar");
    \u0275\u0275element(1, "img", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const post_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", post_r2.avatarcomment, \u0275\u0275sanitizeUrl);
  }
}
function PostSaveComponent_ion_row_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-row", 5)(1, "ion-col", 6)(2, "ion-button", 7);
    \u0275\u0275listener("click", function PostSaveComponent_ion_row_3_Template_ion_button_click_2_listener() {
      const post_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.navigateToProfile(post_r2.post == null ? null : post_r2.post.id));
    });
    \u0275\u0275elementStart(3, "ion-avatar");
    \u0275\u0275element(4, "img", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 9);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, PostSaveComponent_ion_row_3_ion_col_7_Template, 2, 1, "ion-col", 10);
    \u0275\u0275elementStart(8, "ion-col", 11);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "ion-col", 12)(11, "ion-button", 13);
    \u0275\u0275listener("click", function PostSaveComponent_ion_row_3_Template_ion_button_click_11_listener() {
      const post_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.likePost(post_r2));
    });
    \u0275\u0275element(12, "ion-icon", 14);
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "ion-button", 13);
    \u0275\u0275listener("click", function PostSaveComponent_ion_row_3_Template_ion_button_click_15_listener() {
      const post_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openNewCommentModal(post_r2.post == null ? null : post_r2.post.id));
    });
    \u0275\u0275element(16, "ion-icon", 15);
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "ion-button", 13);
    \u0275\u0275listener("click", function PostSaveComponent_ion_row_3_Template_ion_button_click_19_listener() {
      const post_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.savePost(post_r2));
    });
    \u0275\u0275element(20, "ion-icon", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "ion-button", 13);
    \u0275\u0275listener("click", function PostSaveComponent_ion_row_3_Template_ion_button_click_21_listener() {
      const post_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sharePost(post_r2));
    });
    \u0275\u0275element(22, "ion-icon", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "ion-col", 17);
    \u0275\u0275listener("click", function PostSaveComponent_ion_row_3_Template_ion_col_click_23_listener() {
      const post_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.viewPostDetails(post_r2));
    });
    \u0275\u0275elementStart(24, "div", 18);
    \u0275\u0275template(25, PostSaveComponent_ion_row_3_ion_avatar_25_Template, 2, 1, "ion-avatar", 19);
    \u0275\u0275elementStart(26, "span", 20)(27, "b");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const post_r2 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("src", post_r2.avatar, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(post_r2.nickname);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", post_r2.image_post);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", post_r2.post == null ? null : post_r2.post.content, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("name", post_r2.liked ? "heart" : "heart-outline");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(post_r2.numlikes);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(post_r2.numcomments);
    \u0275\u0275advance(2);
    \u0275\u0275property("name", post_r2.saved ? "bookmark" : "bookmark-outline");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", post_r2.avatarcomment && post_r2.avatarcomment.trim().length > 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(post_r2.nicknamecomment);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", post_r2.firstcomment, " ");
  }
}
var _PostSaveComponent = class _PostSaveComponent {
  constructor(postService, toastController, router, modalController) {
    this.postService = postService;
    this.toastController = toastController;
    this.router = router;
    this.modalController = modalController;
    this.savedPosts = [];
    addIcons({ bookmark, heart, chatbubble, shareSocial, heartOutline, bookmarkOutline });
  }
  ngOnInit() {
    this.loadSavedPosts();
    window.addEventListener("postUpdated", this.loadSavedPosts.bind(this));
  }
  loadSavedPosts() {
    const token = sessionStorage.getItem("token");
    if (!token) {
      console.error("No token found in session storage");
      return;
    }
    this.postService.getAllSavedPosts(token).subscribe((posts) => {
      this.savedPosts = posts;
      this.savedPosts.forEach((post) => {
        var _a;
        const postId = (_a = post.post) == null ? void 0 : _a.id;
        if (postId !== void 0) {
          this.postService.hasLikedPost(token, postId).subscribe((hasLiked) => {
            post.liked = hasLiked;
          }, (error) => {
            console.error(`Error checking like status for post ${postId}:`, error);
          });
          this.postService.hasSavedPost(token, postId).subscribe((hasSaved) => {
            post.saved = hasSaved;
          }, (error) => {
            console.error(`Error checking save status for post ${postId}:`, error);
          });
        }
      });
    }, (error) => {
      console.error("Error fetching saved posts:", error);
    });
  }
  viewPostDetails(post) {
    var _a;
    const postId = (_a = post.post) == null ? void 0 : _a.id;
    if (postId !== void 0) {
      this.router.navigate([`/post-details`, postId]);
    } else {
      console.error("Post ID not found");
    }
  }
  likePost(post) {
    var _a;
    const token = sessionStorage.getItem("token");
    if (!token) {
      console.error("No token found in session storage");
      return;
    }
    const postId = (_a = post.post) == null ? void 0 : _a.id;
    if (postId === void 0) {
      console.error("Post ID not found");
      return;
    }
    this.postService.hasLikedPost(token, postId).subscribe((hasLiked) => {
      if (hasLiked) {
        this.postService.unlikePost(token, postId).subscribe(() => {
          console.log(`Unliked post: ${postId}`);
          post.liked = false;
          this.ngOnInit();
        }, (error) => console.error("Error unliking the post:", error));
      } else {
        this.postService.likePost(token, postId).subscribe(() => {
          console.log(`Liked post: ${postId}`);
          post.liked = true;
          this.ngOnInit();
        }, (error) => console.error("Error liking the post:", error));
      }
    }, (error) => console.error("Error checking like status:", error));
  }
  savePost(post) {
    return __async(this, null, function* () {
      var _a;
      const token = sessionStorage.getItem("token");
      if (!token) {
        console.error("No token found in session storage");
        return;
      }
      const postId = (_a = post.post) == null ? void 0 : _a.id;
      if (postId === void 0) {
        console.error("Post ID not found");
        return;
      }
      if (post.saved) {
        this.postService.unsavePost(token, postId).subscribe(() => __async(this, null, function* () {
          console.log(`Unsaved post: ${postId}`);
          post.saved = false;
          const toast = yield this.toastController.create({
            message: "Eliminado de los Post guardados",
            color: "success",
            duration: 2e3,
            position: "top"
          });
          yield toast.present();
          this.ngOnInit();
        }), (error) => {
          console.error("Error unsaving the post:", error);
        });
      } else {
        this.postService.savePost(token, postId).subscribe(() => __async(this, null, function* () {
          console.log(`Saved post: ${postId}`);
          post.saved = true;
          const toast = yield this.toastController.create({
            message: "Post guardado correctamente",
            color: "success",
            duration: 2e3,
            position: "top",
            cssClass: "custom-toast"
          });
          yield toast.present();
          this.ngOnInit();
        }), (error) => {
          console.error("Error saving the post:", error);
        });
      }
    });
  }
  openNewCommentModal(idpost) {
    return __async(this, null, function* () {
      const modal = yield this.modalController.create({
        component: NewCommentComponent,
        componentProps: { postId: idpost }
      });
      yield modal.present();
    });
  }
  sharePost(post) {
    return __async(this, null, function* () {
      var _a;
      const postId = (_a = post.post) == null ? void 0 : _a.id;
      if (postId === void 0) {
        console.error("Post ID not found");
        return;
      }
      const link = `${window.location.origin}/post-details/${postId}`;
      yield navigator.clipboard.writeText(link);
      const toast = yield this.toastController.create({
        message: "Enlace en el portapapeles",
        color: "success",
        duration: 2e3,
        position: "top",
        cssClass: "custom-toast"
      });
      yield toast.present();
    });
  }
  navigateToProfile(postId) {
    const token = sessionStorage.getItem("token");
    if (!token) {
      console.error("No token found in session storage");
      return;
    }
    if (postId === void 0) {
      console.error("Post ID not found");
      return;
    }
    this.postService.getUserIdByPostId(token, postId).subscribe((userId) => {
      this.router.navigate([`/profile/${userId}`]);
    }, (error) => {
      console.error("Error fetching user ID:", error);
    });
  }
};
_PostSaveComponent.\u0275fac = function PostSaveComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PostSaveComponent)(\u0275\u0275directiveInject(PostService), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ModalController));
};
_PostSaveComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PostSaveComponent, selectors: [["app-post-save"]], decls: 5, vars: 1, consts: [[1, "custom-scroll"], [1, "ion-no-padding", "post-container", "movil"], [1, "scroll-container"], ["class", "post", 4, "ngFor", "ngForOf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], [1, "post"], ["size", "12", 1, "user-info"], ["fill", "clear", 2, "padding", "0", 3, "click"], ["alt", "Imagen perfil", 3, "src"], [1, "username"], ["size", "12", "class", "post-image", 4, "ngIf"], ["size", "12", 1, "post-description"], ["size", "12", 1, "post-actions"], ["fill", "clear", 1, "action-button", 3, "click"], [3, "name"], ["name", "chatbubble"], ["name", "share-social"], ["size", "12", 1, "highlighted-comment", 3, "click"], [1, "comment-container"], [4, "ngIf"], [1, "comment"], ["size", "12", 1, "post-image"], [1, "responsive-image", 3, "src"], [3, "src"]], template: function PostSaveComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 0)(1, "ion-grid", 1)(2, "div", 2);
    \u0275\u0275template(3, PostSaveComponent_ion_row_3_Template, 30, 11, "ion-row", 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(4, "ion-fab", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx.savedPosts);
  }
}, dependencies: [IonicModule, IonAvatar, IonButton, IonCol, IonContent, IonFab, IonGrid, IonIcon, IonImg, IonRow, CommonModule, NgForOf, NgIf], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  background-color: #001f1f;\n  color: white;\n  padding: 10px;\n}\nion-content[_ngcontent-%COMP%] {\n  --background: #001f1f;\n  background-color: #001f1f !important;\n}\n.post-container[_ngcontent-%COMP%] {\n  max-width: 100%;\n  margin: 0 auto;\n}\n.post[_ngcontent-%COMP%] {\n  background-color: #0a4d4d;\n  border-radius: 15px;\n  padding: 15px;\n  margin-bottom: 15px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);\n}\n.post-image[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 12px;\n}\n.username[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n  color: #d9f7f7;\n}\n.post-image[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  width: 100%;\n  height: 300px;\n  object-fit: contain;\n  border: 4px solid #042F2E;\n  background-color: #042F2E;\n}\n.post-description[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 20px;\n  margin-left: 30px;\n  color: #d9f7f7;\n  font-weight: bold;\n}\n.post-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 10px;\n  padding: 10px;\n  background-color: rgba(255, 255, 255, 0.1);\n  border-radius: 10px;\n}\n.action-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  color: #d9f7f7;\n  font-size: 16px;\n}\n.highlighted-comment[_ngcontent-%COMP%]   .comment-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background-color: #013534;\n  border-radius: 10px;\n  padding: 10px;\n  color: white;\n}\n.custom-fab-button[_ngcontent-%COMP%] {\n  --background: #00a896;\n  --color: white;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);\n}\n.custom-fab-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n[_nghost-%COMP%]     .hashtag {\n  color: #00f5d4;\n  font-weight: bold;\n  cursor: pointer;\n}\n.post-date[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #d9f7f7;\n  margin-left: auto;\n}\n.responsive-image[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 1000px;\n  width: auto;\n  height: auto;\n  object-fit: contain;\n}\nion-content[_ngcontent-%COMP%]::part(scroll) {\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\nion-content[_ngcontent-%COMP%]::part(scroll)::-webkit-scrollbar {\n  display: none;\n}\n.custom-fab-button[_ngcontent-%COMP%] {\n  --background: #013534;\n  --color: white;\n}\n.custom-fab-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n@media (max-width: 1000px) {\n  .movil[_ngcontent-%COMP%] {\n    margin-top: 20%;\n  }\n}\n.post-date[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #fff;\n  margin-left: 300px;\n}\nion-list[_ngcontent-%COMP%] {\n  background-color: #0a4d4d;\n  color: white;\n  border-radius: 10px;\n  padding: 10px;\n  margin: 10px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);\n}\nion-item[_ngcontent-%COMP%] {\n  --background: #0a4d4d;\n  color: white;\n  border-bottom: 1px solid white;\n}\nion-select[_ngcontent-%COMP%] {\n  color: white;\n}\nion-select[_ngcontent-%COMP%]::part(icon) {\n  color: white;\n}\n.comment[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  margin-left: 20px;\n}\n/*# sourceMappingURL=post-save.component.css.map */'] });
var PostSaveComponent = _PostSaveComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PostSaveComponent, { className: "PostSaveComponent", filePath: "src/app/screen/post-save/post-save.component.ts", lineNumber: 18 });
})();
export {
  PostSaveComponent
};
//# sourceMappingURL=post-save.component-NCVBJRZQ.js.map
