import {
  addIcons,
  close,
  send
} from "./chunk-U7I4M26G.js";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonTextarea,
  IonTitle,
  IonToolbar,
  IonicModule,
  ModalController,
  TextValueAccessorDirective,
  environment
} from "./chunk-AZ27F32N.js";
import {
  FormsModule,
  HttpClient,
  HttpHeaders,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-A54Y6D4U.js";

// src/app/Service/Comment.service.ts
var _CommentService = class _CommentService {
  constructor(http) {
    this.http = http;
    this.apiUrl = environment.apiUrl + "/comment";
  }
  getHeaders(token) {
    return new HttpHeaders({
      "Authorization": `Bearer ${token}`
    });
  }
  getCommentsByPostId(token, postId) {
    return this.http.get(environment.apiUrl + `/post/${postId}/comments`, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }
  createComment(token, postId, commentContent) {
    const comment = { postId, content: commentContent };
    return this.http.post(`${this.apiUrl}/create`, comment, { headers: this.getHeaders(token) });
  }
  deleteComment(token, comment) {
    return this.http.request("delete", `${this.apiUrl}/delete`, { body: comment, headers: this.getHeaders(token) });
  }
};
_CommentService.\u0275fac = function CommentService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CommentService)(\u0275\u0275inject(HttpClient));
};
_CommentService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CommentService, factory: _CommentService.\u0275fac, providedIn: "root" });
var CommentService = _CommentService;

// src/app/Screen/new-comment/new-comment.component.ts
var _NewCommentComponent = class _NewCommentComponent {
  constructor(modalController, commentSerive) {
    this.modalController = modalController;
    this.commentSerive = commentSerive;
    this.commentContent = "";
    addIcons({ close, send });
  }
  dismiss() {
    this.modalController.dismiss();
  }
  submitComment() {
    const token = sessionStorage.getItem("token");
    if (!token) {
      console.error("No se ha encontrado el token");
      return;
    }
    if (!this.postId) {
      console.error("El post no tiene un ID definido");
      return;
    }
    console.log("Creating comment:", this.commentContent);
    console.log("Post ID:", this.postId);
    this.commentSerive.createComment(token, this.postId, this.commentContent).subscribe((response) => {
      console.log("Comment added:", response);
      this.dismiss();
    }, (error) => {
      console.error("Error adding comment:", error);
    });
  }
};
_NewCommentComponent.\u0275fac = function NewCommentComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewCommentComponent)(\u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(CommentService));
};
_NewCommentComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewCommentComponent, selectors: [["app-new-comment"]], inputs: { postId: "postId" }, decls: 20, vars: 1, consts: [["slot", "end"], [3, "click"], ["name", "close", 1, "send-icon"], [1, "ion-padding"], [1, "centered-form", 3, "ngSubmit"], ["position", "floating"], ["name", "content", "required", "", 1, "textArea", 3, "ngModelChange", "ngModel"], [2, "display", "flex", "align-items", "center", "justify-content", "center"], ["type", "submit", 1, "bookmarkBtn", "separated-item2"], [1, "IconContainer"], ["fill", "white", "viewBox", "0 0 512 512", "height", "1em"], ["d", "M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z"], [1, "text"]], template: function NewCommentComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header")(1, "ion-toolbar")(2, "ion-title");
    \u0275\u0275text(3, "Nuevo comentario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-buttons", 0)(5, "ion-button", 1);
    \u0275\u0275listener("click", function NewCommentComponent_Template_ion_button_click_5_listener() {
      return ctx.dismiss();
    });
    \u0275\u0275element(6, "ion-icon", 2);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(7, "ion-content", 3)(8, "form", 4);
    \u0275\u0275listener("ngSubmit", function NewCommentComponent_Template_form_ngSubmit_8_listener() {
      return ctx.submitComment();
    });
    \u0275\u0275elementStart(9, "ion-item")(10, "ion-label", 5);
    \u0275\u0275text(11, "Escribe aqu\xED tu comentario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "ion-textarea", 6);
    \u0275\u0275twoWayListener("ngModelChange", function NewCommentComponent_Template_ion_textarea_ngModelChange_12_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.commentContent, $event) || (ctx.commentContent = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 7)(14, "button", 8)(15, "span", 9);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 10);
    \u0275\u0275element(17, "path", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(18, "p", 12);
    \u0275\u0275text(19, "Comentar");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx.commentContent);
  }
}, dependencies: [IonicModule, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonTextarea, IonTitle, IonToolbar, TextValueAccessorDirective, FormsModule, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  color: white;\n  padding: 15px;\n  border-radius: 10px;\n  height: 50%;\n}\n.header-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n  text-align: center;\n}\n.stylish-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  max-width: 90%;\n  margin: auto;\n  background: #0d2b2a;\n  border-radius: 15px;\n  padding: 20px;\n}\n.form-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n.input-container[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 10px;\n  padding: 10px;\n}\n.options-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n  border-radius: 10px;\n  background-color: rgb(236, 75, 234);\n}\n.options-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: white;\n}\n.icon-style[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: #6fb3a6;\n}\n.textArea[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100px;\n  border: none;\n  border-radius: 10px;\n  padding: 10px;\n  font-size: 16px;\n}\n.publish-button[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6fb3a6,\n      #42a5a3);\n  color: white;\n  font-size: 18px;\n  font-weight: bold;\n  border-radius: 25px;\n  padding: 12px;\n}\n.publish-button[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.2);\n}\n.separated-item[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.separated-item2[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.bookmarkBtn[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 50px;\n  border-radius: 40px;\n  border: none;\n  background-color: rgb(4, 47, 46);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition-duration: 0.3s;\n  overflow: hidden;\n  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.062);\n}\n.IconContainer[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background-color: rgb(7, 85, 83);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  z-index: 2;\n  transition-duration: 0.3s;\n}\n.icon[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border-radius: 1px;\n}\n.text[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 120px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgb(255, 255, 255);\n  z-index: 1;\n  transition-duration: 0.3s;\n  font-size: 1.2em;\n  font-weight: 600;\n}\n.bookmarkBtn[_ngcontent-%COMP%]:hover   .IconContainer[_ngcontent-%COMP%] {\n  width: 300px;\n  border-radius: 40px;\n  transition-duration: 0.3s;\n}\n.bookmarkBtn[_ngcontent-%COMP%]:hover   .text[_ngcontent-%COMP%] {\n  transform: translate(10px);\n  width: 0;\n  font-size: 0;\n  transition-duration: 0.3s;\n}\n.bookmarkBtn[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n  transition-duration: 0.3s;\n}\n.folder-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 10px;\n  padding: 12px;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.15);\n}\n.folder-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: white;\n}\n.add-file-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 16px;\n  color: white;\n  background: #042F2E;\n  padding: 8px 12px;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n  transition: background 0.3s ease-in-out;\n}\n.add-file-button[_ngcontent-%COMP%]:hover {\n  background: #042F2E;\n}\n/*# sourceMappingURL=new-comment.component.css.map */"] });
var NewCommentComponent = _NewCommentComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewCommentComponent, { className: "NewCommentComponent", filePath: "src/app/screen/new-comment/new-comment.component.ts", lineNumber: 18 });
})();

export {
  CommentService,
  NewCommentComponent
};
//# sourceMappingURL=chunk-EHKKNGCG.js.map
