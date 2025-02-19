import {
  start
} from "./chunk-65SR4MAU.js";
import {
  CommentService,
  NewCommentComponent
} from "./chunk-EHKKNGCG.js";
import {
  AdminService
} from "./chunk-IK76A6XB.js";
import {
  PostService
} from "./chunk-77HXCZAV.js";
import {
  addIcons,
  bookmark,
  bookmarkOutline,
  chatbubble,
  ellipsisHorizontal,
  exitOutline,
  heart,
  heartOutline,
  shareSocial,
  trash
} from "./chunk-U7I4M26G.js";
import {
  ProfileService
} from "./chunk-FQYQIARY.js";
import {
  IonAvatar,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPopover,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonicModule,
  ModalController,
  SelectValueAccessorDirective,
  TextValueAccessorDirective,
  ToastController
} from "./chunk-AZ27F32N.js";
import "./chunk-IRNVB6F3.js";
import {
  ActivatedRoute,
  FormsModule,
  NgControlStatus,
  NgForOf,
  NgIf,
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
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

// src/app/Screen/post-details/post-details.component.ts
function PostDetailsComponent_ion_content_0_ng_template_13_div_0_ion_input_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function PostDetailsComponent_ion_content_0_ng_template_13_div_0_ion_input_12_Template_ion_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r1.reportReason, $event) || (ctx_r1.reportReason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.reportReason);
  }
}
function PostDetailsComponent_ion_content_0_ng_template_13_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "ion-select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function PostDetailsComponent_ion_content_0_ng_template_13_div_0_Template_ion_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.reportReason1, $event) || (ctx_r1.reportReason1 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(2, "ion-select-option", 26);
    \u0275\u0275text(3, "Spam");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-select-option", 27);
    \u0275\u0275text(5, "Abuso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ion-select-option", 28);
    \u0275\u0275text(7, "Contenido inapropiado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ion-select-option", 29);
    \u0275\u0275text(9, "Informaci\xF3n falsa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "ion-select-option", 30);
    \u0275\u0275text(11, "Otro");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, PostDetailsComponent_ion_content_0_ng_template_13_div_0_ion_input_12_Template, 1, 1, "ion-input", 31);
    \u0275\u0275elementStart(13, "ion-col", 32)(14, "ion-button", 33);
    \u0275\u0275listener("click", function PostDetailsComponent_ion_content_0_ng_template_13_div_0_Template_ion_button_click_14_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.reportPost(ctx_r1.post));
    });
    \u0275\u0275element(15, "ion-icon", 34);
    \u0275\u0275elementStart(16, "ion-label");
    \u0275\u0275text(17, "Reportar");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.reportReason1);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ctx_r1.reportReason1 === "otro");
  }
}
function PostDetailsComponent_ion_content_0_ng_template_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "ion-col", 32)(2, "ion-button", 33);
    \u0275\u0275listener("click", function PostDetailsComponent_ion_content_0_ng_template_13_div_1_Template_ion_button_click_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deletePost(ctx_r1.post, "SANCTIONED"));
    });
    \u0275\u0275element(3, "ion-icon", 34);
    \u0275\u0275elementStart(4, "ion-label");
    \u0275\u0275text(5, "Eliminar y advertir");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "ion-col", 32)(7, "ion-button", 36);
    \u0275\u0275listener("click", function PostDetailsComponent_ion_content_0_ng_template_13_div_1_Template_ion_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deletePost(ctx_r1.post, "SOLVED"));
    });
    \u0275\u0275element(8, "ion-icon", 37);
    \u0275\u0275elementStart(9, "ion-label");
    \u0275\u0275text(10, "Dejar pasar");
    \u0275\u0275elementEnd()()()();
  }
}
function PostDetailsComponent_ion_content_0_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PostDetailsComponent_ion_content_0_ng_template_13_div_0_Template, 18, 2, "div", 22)(1, PostDetailsComponent_ion_content_0_ng_template_13_div_1_Template, 11, 0, "div", 23);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", !ctx_r1.isAdmin1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isAdmin1);
  }
}
function PostDetailsComponent_ion_content_0_ion_col_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-col", 38);
    \u0275\u0275element(1, "ion-img", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.post.image_post);
  }
}
function PostDetailsComponent_ion_content_0_ion_list_31_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item", 41)(1, "ion-avatar", 42);
    \u0275\u0275element(2, "img", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-label")(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const comment_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", comment_r6.avatar, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(comment_r6.nickname);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(comment_r6.content);
  }
}
function PostDetailsComponent_ion_content_0_ion_list_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-list");
    \u0275\u0275template(1, PostDetailsComponent_ion_content_0_ion_list_31_ion_item_1_Template, 8, 3, "ion-item", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.comments);
  }
}
function PostDetailsComponent_ion_content_0_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "No hay comentarios a\xFAn.");
    \u0275\u0275elementEnd();
  }
}
function PostDetailsComponent_ion_content_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-content", 2)(1, "ion-grid", 3)(2, "div", 4)(3, "ion-row", 5)(4, "ion-col", 6)(5, "div", 7)(6, "ion-button", 8);
    \u0275\u0275listener("click", function PostDetailsComponent_ion_content_0_Template_ion_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navigateToProfile(ctx_r1.post.post == null ? null : ctx_r1.post.post.id));
    });
    \u0275\u0275elementStart(7, "ion-avatar");
    \u0275\u0275element(8, "img", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 10);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "ion-icon", 11);
    \u0275\u0275listener("click", function PostDetailsComponent_ion_content_0_Template_ion_icon_click_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.presentPopover($event, ctx_r1.post));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "ion-popover", 12);
    \u0275\u0275listener("didDismiss", function PostDetailsComponent_ion_content_0_Template_ion_popover_didDismiss_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openPopoverIndex = -1);
    });
    \u0275\u0275template(13, PostDetailsComponent_ion_content_0_ng_template_13_Template, 2, 2, "ng-template");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, PostDetailsComponent_ion_content_0_ion_col_14_Template, 2, 1, "ion-col", 13);
    \u0275\u0275elementStart(15, "ion-col", 14);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "ion-col", 15)(18, "ion-button", 16);
    \u0275\u0275listener("click", function PostDetailsComponent_ion_content_0_Template_ion_button_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.likePost(ctx_r1.post));
    });
    \u0275\u0275element(19, "ion-icon", 17);
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "ion-button", 16);
    \u0275\u0275listener("click", function PostDetailsComponent_ion_content_0_Template_ion_button_click_22_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openNewCommentModal(ctx_r1.post.post == null ? null : ctx_r1.post.post.id));
    });
    \u0275\u0275element(23, "ion-icon", 18);
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "ion-button", 16);
    \u0275\u0275listener("click", function PostDetailsComponent_ion_content_0_Template_ion_button_click_26_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.savePost(ctx_r1.post));
    });
    \u0275\u0275element(27, "ion-icon", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "ion-button", 16);
    \u0275\u0275listener("click", function PostDetailsComponent_ion_content_0_Template_ion_button_click_28_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sharePost(ctx_r1.post));
    });
    \u0275\u0275element(29, "ion-icon", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "ion-col", 20);
    \u0275\u0275template(31, PostDetailsComponent_ion_content_0_ion_list_31_Template, 2, 1, "ion-list", 21)(32, PostDetailsComponent_ion_content_0_ng_template_32_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const noComments_r7 = \u0275\u0275reference(33);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("src", ctx_r1.post.avatar, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.post.nickname);
    \u0275\u0275advance(2);
    \u0275\u0275property("isOpen", ctx_r1.openPopoverIndex === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.post.image_post);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.post.post == null ? null : ctx_r1.post.post.content) || "Sin descripci\xF3n disponible.", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("name", ctx_r1.post.liked ? "heart" : "heart-outline");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.post.numlikes || 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.post.numcomments || 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("name", ctx_r1.post.saved ? "bookmark" : "bookmark-outline");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.comments.length > 0)("ngIfElse", noComments_r7);
  }
}
var _PostDetailsComponent = class _PostDetailsComponent {
  constructor(router, route, postService, commentService, toastController, modalController, adminService, profile) {
    this.router = router;
    this.route = route;
    this.postService = postService;
    this.commentService = commentService;
    this.toastController = toastController;
    this.modalController = modalController;
    this.adminService = adminService;
    this.profile = profile;
    this.comments = [];
    this.isOpen = false;
    this.reportReason = "";
    this.openPopoverIndex = -1;
    this.isAdmin1 = false;
    this.reportReason1 = "";
    addIcons({ bookmark, heart, chatbubble, shareSocial, heartOutline, bookmarkOutline, ellipsisHorizontal, start, trash, exitOutline });
  }
  ngOnInit() {
    this.postId = Number(this.route.snapshot.paramMap.get("id"));
    this.loadPostDetails();
    this.loadComments();
    this.isAdmin();
  }
  // Esta función se llama al hacer click en el ícono y abre el popover correspondiente
  presentPopover(ev, post) {
    this.openPopoverIndex = 1;
  }
  deletePost(post, state) {
    this.adminService.putWarning(post.post.id, state).subscribe({
      next: () => {
        console.log(`Deleted post: ${post.post.id}`);
        this.isOpen = false;
        this.router.navigate(["/admin"]);
      },
      error: (error) => {
        console.error("Error deleting the post:", error);
      }
    });
    this.openPopoverIndex = -1;
  }
  isAdmin() {
    this.profile.isAdmin().subscribe({
      next: (isAdmin) => {
        this.isAdmin1 = isAdmin;
      },
      error: (error) => {
        this.isAdmin1 = false;
        console.error("Error checking if user is admin:", error);
      }
    });
  }
  reportPost(post) {
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
    if (this.reportReason1 !== "otro") {
      this.reportReason = this.reportReason1;
    }
    this.postService.reportPost(postId, this.reportReason).subscribe({
      next: () => {
        console.log(`Reported post: ${postId}`);
        this.isOpen = false;
        this.reportReason = "";
        this.reportReason1 = "";
        this.ngOnInit();
      },
      error: (error) => {
        console.error("Error reporting the post:", error);
        this.isOpen = false;
        this.reportReason = "";
        this.reportReason1 = "";
      }
    });
    this.openPopoverIndex = -1;
  }
  loadPostDetails() {
    const token = sessionStorage.getItem("token");
    if (token) {
      this.postService.getPostById(token, this.postId).subscribe((post) => {
        var _a;
        console.log("Datos del post:", post);
        this.post = post;
        const postId = (_a = post.post) == null ? void 0 : _a.id;
        if (postId !== void 0) {
          this.postService.hasLikedPost(token, postId).subscribe((hasLiked) => {
            this.post.liked = hasLiked;
          }, (error) => console.error("Error checking like status:", error));
          this.postService.hasSavedPost(token, postId).subscribe((hasSaved) => {
            post.saved = hasSaved;
          }, (error) => {
            console.error(`Error checking save status for post ${postId}:`, error);
          });
        }
      }, (error) => console.error("Error loading post details:", error));
    }
  }
  loadComments() {
    const token = sessionStorage.getItem("token");
    if (token) {
      this.commentService.getCommentsByPostId(token, this.postId).subscribe((comments) => {
        console.log("Comentarios:", comments);
        this.comments = comments;
      }, (error) => console.error("Error loading comments:", error));
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
        }), (error) => {
          console.error("Error unsaving the post:", error);
        });
      } else {
        this.postService.savePost(token, postId).subscribe(() => __async(this, null, function* () {
          console.log(`Saved post: ${postId}`);
          post.saved = true;
          const toast = yield this.toastController.create({
            message: "Post guardado correctament",
            color: "success",
            duration: 2e3,
            position: "top",
            cssClass: "custom-toast"
          });
          yield toast.present();
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
      modal.onDidDismiss().then(() => {
        this.loadPostDetails();
        this.loadComments();
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
_PostDetailsComponent.\u0275fac = function PostDetailsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PostDetailsComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(PostService), \u0275\u0275directiveInject(CommentService), \u0275\u0275directiveInject(ToastController), \u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(AdminService), \u0275\u0275directiveInject(ProfileService));
};
_PostDetailsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PostDetailsComponent, selectors: [["app-post-details"]], decls: 1, vars: 1, consts: [["noComments", ""], ["class", "custom-scroll", 4, "ngIf"], [1, "custom-scroll"], [1, "ion-no-padding", "post-container", "movil"], [1, "scroll-container"], [1, "post"], ["size", "12", 1, "user-info"], [2, "display", "flex", "align-items", "center"], ["fill", "clear", 2, "padding", "0", 3, "click"], [3, "src"], [1, "username"], ["name", "ellipsis-horizontal", 1, "more-button", 2, "margin-left", "auto", 3, "click"], [3, "didDismiss", "isOpen"], ["size", "12", "class", "post-image", 4, "ngIf"], ["size", "12", 1, "post-description"], ["size", "12", 1, "post-actions"], ["fill", "clear", 1, "action-button", 3, "click"], [3, "name"], ["name", "chatbubble"], ["name", "share-social"], ["size", "12", 1, "comments-section"], [4, "ngIf", "ngIfElse"], ["style", "margin: auto; padding-top: 10px;", 4, "ngIf"], ["style", "margin: auto", 4, "ngIf"], [2, "margin", "auto", "padding-top", "10px"], ["placeholder", "Raz\xF3n de reporte", 3, "ngModelChange", "ngModel"], ["value", "spam"], ["value", "abuso"], ["value", "contenido_inapropiado"], ["value", "informacion_falsa"], ["value", "otro"], ["placeholder", "Raz\xF3n de reporte", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["size", "12", 1, "post-actions", 2, "display", "flex", "justify-content", "center"], ["color", "danger", 3, "click"], ["name", "trash", "slot", "start"], [2, "margin", "auto"], ["color", "success", 3, "click"], ["name", "exit-outline", "slot", "start"], ["size", "12", 1, "post-image"], [1, "responsive-image", 3, "src"], ["class", "comment-item", 4, "ngFor", "ngForOf"], [1, "comment-item"], ["slot", "start"]], template: function PostDetailsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, PostDetailsComponent_ion_content_0_Template, 34, 11, "ion-content", 1);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.post);
  }
}, dependencies: [
  IonicModule,
  IonAvatar,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonPopover,
  SelectValueAccessorDirective,
  TextValueAccessorDirective,
  NgForOf,
  NgIf,
  FormsModule,
  NgControlStatus,
  NgModel
], styles: ['@charset "UTF-8";\n\n\n\n[_nghost-%COMP%] {\n  display: block;\n  background-color: #001f1f;\n  color: white;\n  padding: 10px;\n}\nion-content[_ngcontent-%COMP%] {\n  --background: #001f1f;\n  background-color: #001f1f !important;\n}\n.post-container[_ngcontent-%COMP%] {\n  max-width: 100%;\n  margin: 0 auto;\n}\n.post[_ngcontent-%COMP%] {\n  background-color: #0a4d4d;\n  border-radius: 15px;\n  padding: 15px;\n  margin-bottom: 15px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);\n}\n.post-image[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 12px;\n}\n.username[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n  color: #d9f7f7;\n}\n.post-image[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  width: 100%;\n  height: 300px;\n  object-fit: contain;\n  border: 4px solid #042F2E;\n  background-color: #042F2E;\n}\n.post-description[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 20px;\n  margin-left: 30px;\n  color: #d9f7f7;\n  font-weight: bold;\n}\n.post-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 10px;\n  padding: 10px;\n  background-color: rgba(255, 255, 255, 0.1);\n  border-radius: 10px;\n}\n.action-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  color: #d9f7f7;\n  font-size: 16px;\n}\n.highlighted-comment[_ngcontent-%COMP%]   .comment-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background-color: #013534;\n  border-radius: 10px;\n  padding: 10px;\n  color: white;\n}\n.custom-fab-button[_ngcontent-%COMP%] {\n  --background: #00a896;\n  --color: white;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);\n}\n.custom-fab-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n[_nghost-%COMP%]     .hashtag {\n  color: #00f5d4;\n  font-weight: bold;\n  cursor: pointer;\n}\n.post-date[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #d9f7f7;\n  margin-left: auto;\n}\n.responsive-image[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 1000px;\n  width: auto;\n  height: auto;\n  object-fit: contain;\n}\nion-content[_ngcontent-%COMP%]::part(scroll) {\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\nion-content[_ngcontent-%COMP%]::part(scroll)::-webkit-scrollbar {\n  display: none;\n}\n.custom-fab-button[_ngcontent-%COMP%] {\n  --background: #013534;\n  --color: white;\n}\n.custom-fab-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n@media (max-width: 1000px) {\n  .movil[_ngcontent-%COMP%] {\n    margin-top: 20%;\n  }\n}\n.post-date[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #fff;\n  margin-left: 300px;\n}\nion-list[_ngcontent-%COMP%] {\n  background-color: #0a4d4d;\n  color: white;\n  border-radius: 10px;\n  padding: 10px;\n  margin: 10px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);\n}\nion-item[_ngcontent-%COMP%] {\n  --background: #0a4d4d;\n  color: white;\n  border-bottom: 1px solid white;\n}\nion-select[_ngcontent-%COMP%] {\n  color: white;\n}\nion-select[_ngcontent-%COMP%]::part(icon) {\n  color: white;\n}\n.comment[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  margin-left: 20px;\n}\n/*# sourceMappingURL=post-details.component.css.map */'] });
var PostDetailsComponent = _PostDetailsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PostDetailsComponent, { className: "PostDetailsComponent", filePath: "src/app/screen/post-details/post-details.component.ts", lineNumber: 42 });
})();
export {
  PostDetailsComponent
};
//# sourceMappingURL=post-details.component-TCBWK55M.js.map
