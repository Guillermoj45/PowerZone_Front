import {
  PostService
} from "./chunk-77HXCZAV.js";
import {
  addIcons,
  close,
  folderOutline,
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
  ToastController
} from "./chunk-AZ27F32N.js";
import {
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgIf,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-A54Y6D4U.js";
import {
  __async
} from "./chunk-ZVATTXSA.js";

// src/app/Screen/new-post/new-post.component.ts
var _c0 = ["fileInput"];
function NewPostComponent_p_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Archivo seleccionado: ", ctx_r1.fileName, " ");
  }
}
var _NewPostComponent = class _NewPostComponent {
  constructor(modalController, postService, toastController) {
    this.modalController = modalController;
    this.postService = postService;
    this.toastController = toastController;
    this.postContent = "";
    this.selectedFile = null;
    this.fileName = "";
    this.imageSelected = false;
    addIcons({ close, send, folderOutline });
  }
  ngOnInit() {
  }
  dismiss() {
    this.modalController.dismiss();
  }
  submitPost() {
    return __async(this, null, function* () {
      if (!this.imageSelected) {
        const toast = yield this.toastController.create({
          message: "Es obligatorio a\xF1adir una imagen.",
          color: "danger",
          duration: 2e3,
          position: "top",
          cssClass: "custom-toast"
        });
        yield toast.present();
        return;
      }
      const token = sessionStorage.getItem("token");
      if (!token) {
        console.error("No token found in cookies");
        return;
      }
      const newPost = {
        content: this.postContent,
        delete: false
      };
      const formData = new FormData();
      formData.append("post", JSON.stringify(newPost));
      if (this.selectedFile) {
        formData.append("file", this.selectedFile);
      }
      console.log("Creating post with file:", newPost);
      console.log("Token:", token);
      this.postService.createPost(token, formData).subscribe((response) => {
        console.log("Post created successfully:", response);
        this.dismiss();
        window.location.reload();
      }, (error) => {
        console.error("Error creating post:", error);
      });
    });
  }
  triggerFileInput() {
    console.log("triggerFileInput llamado");
    if (this.fileInput && this.fileInput.nativeElement) {
      this.fileInput.nativeElement.click();
    } else {
      console.error("Elemento fileInput no encontrado");
    }
  }
  onFileChange(event) {
    const input = event.target;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      this.fileName = this.selectedFile.name;
      this.imageSelected = true;
      console.log("Archivo seleccionado:", this.fileName);
    }
  }
};
_NewPostComponent.\u0275fac = function NewPostComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewPostComponent)(\u0275\u0275directiveInject(ModalController), \u0275\u0275directiveInject(PostService), \u0275\u0275directiveInject(ToastController));
};
_NewPostComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewPostComponent, selectors: [["app-new-post"]], viewQuery: function NewPostComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileInput = _t.first);
  }
}, decls: 28, vars: 2, consts: [["fileInput", ""], ["slot", "end"], [3, "click"], ["name", "close", 1, "send-icon"], [1, "ion-padding"], [1, "centered-form", 3, "ngSubmit"], ["position", "floating"], ["name", "content", "required", "", 1, "textArea", 3, "ngModelChange", "ngModel"], [1, "centered-button", "separated-item"], ["type", "button", 1, "add-file-button", 3, "click"], ["name", "folder-outline", 1, "folder-icon"], ["type", "file", "name", "file", "hidden", "", 3, "change"], ["class", "file-name", 4, "ngIf"], ["type", "submit", 1, "separated-item2"], [1, "svg-wrapper-1"], [1, "svg-wrapper"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "24", "height", "24"], ["fill", "none", "d", "M0 0h24v24H0z"], ["fill", "currentColor", "d", "M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"], [1, "file-name"]], template: function NewPostComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-header")(1, "ion-toolbar")(2, "ion-title");
    \u0275\u0275text(3, "\xBFQu\xE9 est\xE1s pensando hoy?\u{1F914}\u{1F914}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-buttons", 1)(5, "ion-button", 2);
    \u0275\u0275listener("click", function NewPostComponent_Template_ion_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.dismiss());
    });
    \u0275\u0275element(6, "ion-icon", 3);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(7, "ion-content", 4)(8, "form", 5);
    \u0275\u0275listener("ngSubmit", function NewPostComponent_Template_form_ngSubmit_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.submitPost());
    });
    \u0275\u0275elementStart(9, "ion-item")(10, "ion-label", 6);
    \u0275\u0275text(11, "Comparte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "ion-textarea", 7);
    \u0275\u0275twoWayListener("ngModelChange", function NewPostComponent_Template_ion_textarea_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.postContent, $event) || (ctx.postContent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "ion-item", 8)(14, "button", 9);
    \u0275\u0275listener("click", function NewPostComponent_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.triggerFileInput());
    });
    \u0275\u0275element(15, "ion-icon", 10);
    \u0275\u0275text(16, " A\xF1adir archivo ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 11, 0);
    \u0275\u0275listener("change", function NewPostComponent_Template_input_change_17_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onFileChange($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(19, NewPostComponent_p_19_Template, 2, 1, "p", 12);
    \u0275\u0275elementStart(20, "button", 13)(21, "div", 14)(22, "div", 15);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(23, "svg", 16);
    \u0275\u0275element(24, "path", 17)(25, "path", 18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27, "Publicar");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx.postContent);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx.fileName);
  }
}, dependencies: [IonicModule, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonTextarea, IonTitle, IonToolbar, TextValueAccessorDirective, FormsModule, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, NgIf], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  color: white;\n  padding: 15px;\n  border-radius: 10px;\n}\n.header-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n  text-align: center;\n}\n.stylish-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  max-width: 90%;\n  margin: auto;\n  background: #0d2b2a;\n  border-radius: 15px;\n  padding: 20px;\n}\n.form-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n.input-container[_ngcontent-%COMP%] {\n  background-color: white;\n  border-radius: 10px;\n  padding: 10px;\n}\n.options-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n  border-radius: 10px;\n  background-color: rgb(236, 75, 234);\n}\n.options-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: white;\n}\n.icon-style[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: #6fb3a6;\n}\n.textArea[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n  border: none;\n  border-radius: 10px;\n  padding: 10px;\n  font-size: 16px;\n}\n.publish-button[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #6fb3a6,\n      #42a5a3);\n  color: white;\n  font-size: 18px;\n  font-weight: bold;\n  border-radius: 25px;\n  padding: 12px;\n}\n.publish-button[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.2);\n}\n.separated-item[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.separated-item2[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\nbutton[_ngcontent-%COMP%] {\n  font-family: inherit;\n  font-size: 20px;\n  background: #042F2E;\n  color: white;\n  padding: 0.7em 1em;\n  padding-left: 0.9em;\n  display: flex;\n  align-items: center;\n  border: none;\n  border-radius: 16px;\n  overflow: hidden;\n  transition: all 0.2s;\n  cursor: pointer;\n  width: 100%;\n  justify-content: center;\n}\nbutton[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: 0.3em;\n  transition: all 0.3s ease-in-out;\n}\nbutton[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: block;\n  transform-origin: center center;\n  transition: transform 0.3s ease-in-out;\n}\nbutton[_ngcontent-%COMP%]:hover   .svg-wrapper[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fly-1 0.6s ease-in-out infinite alternate;\n}\nbutton[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  transform: translateX(1.2em) rotate(45deg) scale(1.1);\n}\nbutton[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  transform: translateX(5em);\n}\nbutton[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n@keyframes _ngcontent-%COMP%_fly-1 {\n  from {\n    transform: translateY(0.1em);\n  }\n  to {\n    transform: translateY(-0.1em);\n  }\n}\n.centered-button[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  padding: 10px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.1);\n}\n.folder-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 10px;\n  padding: 12px;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.15);\n}\n.folder-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: white;\n}\n.add-file-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 16px;\n  color: white;\n  background: #042F2E;\n  padding: 8px 12px;\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n  transition: background 0.3s ease-in-out;\n}\n.add-file-button[_ngcontent-%COMP%]:hover {\n  background: #042F2E;\n}\n/*# sourceMappingURL=new-post.component.css.map */"] });
var NewPostComponent = _NewPostComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewPostComponent, { className: "NewPostComponent", filePath: "src/app/screen/new-post/new-post.component.ts", lineNumber: 20 });
})();

export {
  NewPostComponent
};
//# sourceMappingURL=chunk-WV2SIDCP.js.map
