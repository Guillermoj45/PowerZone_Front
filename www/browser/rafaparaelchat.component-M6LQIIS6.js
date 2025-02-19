import {
  CloudinaryService,
  WebsocketService
} from "./chunk-H5CLOZ4O.js";
import "./chunk-2JTE6DJZ.js";
import {
  AuthService
} from "./chunk-Z233NFIF.js";
import {
  addIcons,
  arrowBackOutline,
  arrowDownOutline,
  closeOutline,
  searchOutline,
  send
} from "./chunk-U7I4M26G.js";
import {
  ProfileService
} from "./chunk-FQYQIARY.js";
import {
  IonAvatar,
  IonIcon,
  IonSearchbar,
  IonicModule,
  TextValueAccessorDirective
} from "./chunk-AZ27F32N.js";
import "./chunk-IRNVB6F3.js";
import {
  ActivatedRoute,
  DatePipe,
  DefaultValueAccessor,
  FormsModule,
  Location,
  NgClass,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
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
import "./chunk-ZVATTXSA.js";

// src/app/Screen/rafaparaelchat/rafaparaelchat.component.ts
var _c0 = ["chatMessages"];
var _c1 = (a0) => ({ "icon-blue": a0 });
var _c2 = (a0, a1) => ({ "message-sent": a0, "message-received": a1 });
function RafaparaelchatComponent_ion_icon_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-icon", 23);
    \u0275\u0275listener("click", function RafaparaelchatComponent_ion_icon_14_Template_ion_icon_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleSearchBar());
    });
    \u0275\u0275elementEnd();
  }
}
function RafaparaelchatComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "ion-searchbar", 25);
    \u0275\u0275twoWayListener("ngModelChange", function RafaparaelchatComponent_div_15_Template_ion_searchbar_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.searchTerm, $event) || (ctx_r2.searchTerm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ionInput", function RafaparaelchatComponent_div_15_Template_ion_searchbar_ionInput_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSearchInput($event));
    })("keyup.enter", function RafaparaelchatComponent_div_15_Template_ion_searchbar_keyup_enter_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.searchMessages());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "ion-icon", 26);
    \u0275\u0275listener("click", function RafaparaelchatComponent_div_15_Template_ion_icon_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleSearchBar());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.searchTerm);
  }
}
function RafaparaelchatComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 29);
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "span", 30);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const message_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(8, _c2, message_r5.sender === (ctx_r2.user == null ? null : ctx_r2.user.nickName), message_r5.sender !== (ctx_r2.user == null ? null : ctx_r2.user.nickName)));
    \u0275\u0275attribute("data-message-id", message_r5.timestamp);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(message_r5.sender);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", message_r5.content, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 5, message_r5.timestamp, "shortTime"));
  }
}
var _RafaparaelchatComponent = class _RafaparaelchatComponent {
  constructor(websocketService, route, authService, profileService, location2, cloudinaryService) {
    this.websocketService = websocketService;
    this.route = route;
    this.authService = authService;
    this.profileService = profileService;
    this.location = location2;
    this.cloudinaryService = cloudinaryService;
    this.messages = [];
    this.newMessage = "";
    this.senderNickname = "";
    this.groupName = "";
    this.groupPhotoUrl = "";
    this.searchTerm = "";
    this.searchIndex = 0;
    this.showSearchBar = false;
    this.followConversation = true;
    this.isIconBlue = false;
    addIcons({ arrowBackOutline, send, searchOutline, closeOutline, arrowDownOutline });
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const groupIdParam = params.get("groupId");
      if (groupIdParam) {
        this.groupId = +groupIdParam;
        this.websocketService.connect(this.groupId.toString());
        this.websocketService.getMessagesByGroup(this.groupId).subscribe({
          next: (messages) => {
            console.log("Mensajes recibidos:", messages);
            this.messages = messages;
          },
          error: (error) => {
            console.error("Error obteniendo mensajes del grupo:", error);
          }
        });
        this.websocketService.getGroupDetails(this.groupId).subscribe({
          next: (groupInfo) => {
            console.log("Informaci\xF3n del grupo:", groupInfo);
            this.groupName = groupInfo.name;
            this.groupPhotoUrl = this.cloudinaryService.getImage(groupInfo.image).toURL();
          },
          error: (error) => {
            console.error("Error obteniendo la informaci\xF3n del grupo:", error);
          }
        });
      } else {
        console.error("No se encontr\xF3 el groupId en la URL.");
      }
    });
    const token = sessionStorage.getItem("token");
    if (token) {
      this.profileService.getProfile(token).subscribe({
        next: (profile) => {
          this.user = profile;
          this.senderNickname = profile.nickName;
        },
        error: (error) => {
          console.error("Error obteniendo el perfil del usuario:", error);
        }
      });
    } else {
      console.error("Token no encontrado en sessionStorage.");
    }
    this.websocketService.getMessageObservable().subscribe({
      next: (messages) => {
        this.messages = [...this.messages, ...messages];
        if (this.followConversation) {
          this.scrollToBottom();
        }
      },
      error: (error) => {
        console.error("Error en la recepci\xF3n de mensajes:", error);
      }
    });
  }
  // Enviar un mensaje
  sendMessage() {
    if (!this.newMessage.trim() || !this.user) {
      console.error("Mensaje vac\xEDo o usuario no encontrado.");
      return;
    }
    const chatMessage = {
      sender: this.user.nickName,
      userId: this.user.id,
      content: this.newMessage.trim(),
      timestamp: Date.now(),
      groupId: this.groupId
    };
    this.websocketService.sendMessage(chatMessage);
    this.newMessage = "";
    if (this.followConversation) {
      this.scrollToBottom();
    }
  }
  // Desconectar del WebSocket cuando se destruye el componente
  ngOnDestroy() {
    this.websocketService.disconnect();
  }
  navigateBack() {
    window.history.back();
    setTimeout(() => location.reload(), 100);
  }
  onSearchInput(event) {
    if (event.key === "Enter") {
      this.searchMessages();
    }
  }
  clearSearch() {
    this.searchTerm = "";
    this.searchIndex = 0;
  }
  toggleSearchBar() {
    this.showSearchBar = !this.showSearchBar;
  }
  searchMessages() {
    if (!this.searchTerm.trim()) {
      console.error("T\xE9rmino de b\xFAsqueda vac\xEDo.");
      return;
    }
    const term = this.searchTerm.trim().toLowerCase();
    const searchResults = this.messages.filter((message) => message.content.toLowerCase().includes(term));
    if (searchResults.length > 0) {
      const selectedMessage = searchResults[this.searchIndex];
      const messageElement = document.querySelector(`[data-message-id="${selectedMessage.timestamp}"]`);
      if (messageElement) {
        messageElement.scrollIntoView({ behavior: "smooth", block: "center" });
        messageElement.classList.add("highlight");
        setTimeout(() => messageElement.classList.remove("highlight"), 2e3);
        this.searchIndex = (this.searchIndex + 1) % searchResults.length;
      } else {
        console.error("No se pudo encontrar el mensaje en el DOM.");
      }
    } else {
      console.error("No se encontraron mensajes con el t\xE9rmino de b\xFAsqueda.");
    }
  }
  toggleFollowConversation() {
    this.followConversation = !this.followConversation;
    this.isIconBlue = !this.isIconBlue;
  }
  scrollToBottom() {
    if (this.chatMessagesContainer) {
      this.chatMessagesContainer.nativeElement.scrollTop = this.chatMessagesContainer.nativeElement.scrollHeight;
    }
  }
};
_RafaparaelchatComponent.\u0275fac = function RafaparaelchatComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RafaparaelchatComponent)(\u0275\u0275directiveInject(WebsocketService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ProfileService), \u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(CloudinaryService));
};
_RafaparaelchatComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RafaparaelchatComponent, selectors: [["app-chat"]], viewQuery: function RafaparaelchatComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chatMessagesContainer = _t.first);
  }
}, decls: 30, vars: 9, consts: [["chatMessages", ""], [1, "chat-container"], [1, "chat-header", "movil"], [1, "icon-back", 3, "click"], ["name", "arrow-back-outline"], [1, "chat-avatar"], ["alt", "Grupo Foto", 3, "src"], [1, "chat-user-info"], [1, "search-container"], ["name", "arrow-down-outline", 3, "click", "ngClass"], ["name", "search-outline", 3, "click", 4, "ngIf"], ["class", "search-bar-wrapper", 4, "ngIf"], [1, "chat-messages"], [1, "message-list"], ["class", "message-container", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "chat-input-row"], ["placeholder", "Escriba un mensaje...", 3, "ngModelChange", "keyup.enter", "ngModel"], [3, "click"], [1, "svg-wrapper-1"], [1, "svg-wrapper"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "width", "24", "height", "24"], ["fill", "none", "d", "M0 0h24v24H0z"], ["fill", "currentColor", "d", "M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"], ["name", "search-outline", 3, "click"], [1, "search-bar-wrapper"], [3, "ngModelChange", "ionInput", "keyup.enter", "ngModel"], ["name", "close-outline", 3, "click"], [1, "message-container", 3, "ngClass"], [1, "message-sender"], [1, "message"], [1, "timestamp"]], template: function RafaparaelchatComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
    \u0275\u0275listener("click", function RafaparaelchatComponent_Template_div_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.navigateBack());
    });
    \u0275\u0275element(3, "ion-icon", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5)(5, "ion-avatar");
    \u0275\u0275element(6, "img", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 7)(8, "h4");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11, "En l\xEDnea");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 8)(13, "ion-icon", 9);
    \u0275\u0275listener("click", function RafaparaelchatComponent_Template_ion_icon_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.toggleFollowConversation());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, RafaparaelchatComponent_ion_icon_14_Template, 1, 0, "ion-icon", 10)(15, RafaparaelchatComponent_div_15_Template, 3, 1, "div", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 12, 0)(18, "div", 13);
    \u0275\u0275template(19, RafaparaelchatComponent_div_19_Template, 8, 11, "div", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 15)(21, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function RafaparaelchatComponent_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.newMessage, $event) || (ctx.newMessage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function RafaparaelchatComponent_Template_input_keyup_enter_21_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.sendMessage());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 17);
    \u0275\u0275listener("click", function RafaparaelchatComponent_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.sendMessage());
    });
    \u0275\u0275elementStart(23, "div", 18)(24, "div", 19);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(25, "svg", 20);
    \u0275\u0275element(26, "path", 21)(27, "path", 22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275text(29, "Send");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275property("src", ctx.groupPhotoUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.groupName);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(7, _c1, ctx.isIconBlue));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.showSearchBar);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.showSearchBar);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx.messages);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx.newMessage);
  }
}, dependencies: [
  DatePipe,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  NgForOf,
  IonicModule,
  IonAvatar,
  IonIcon,
  IonSearchbar,
  TextValueAccessorDirective,
  NgClass,
  NgIf
], styles: ['@charset "UTF-8";\n\n\n\n.chat-container[_ngcontent-%COMP%] {\n  background-color: #e5ddd5;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.chat-header[_ngcontent-%COMP%] {\n  background-color: #075e54;\n  color: white;\n  padding: 10px;\n  align-items: center;\n  display: flex;\n  border-bottom: 1px solid #ddd;\n}\n.icon-back[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: white;\n  cursor: pointer;\n}\n.chat-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 80%;\n  height: 80%;\n  margin-left: 5%;\n  margin-top: 5%;\n}\n.chat-user-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n}\n.chat-user-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  color: #d4d4d4;\n}\n.chat-messages[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  overflow-y: auto;\n  padding: 10px;\n  background-color: #075e54;\n}\n.message-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  background-color: #075e54;\n}\n.message-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-width: 80%;\n}\n.message-sender[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  margin-bottom: 2px;\n  color: #000000;\n}\n.message[_ngcontent-%COMP%] {\n  padding: 10px;\n  word-wrap: break-word;\n  color: #000000;\n  border-radius: 10px;\n  max-width: 100%;\n}\n.message-sent[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  background-color: #dcf8c6;\n  color: #000000;\n  border-radius: 10px;\n  padding: 8px 12px;\n}\n.message-received[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  background-color: #ffffff;\n  color: black;\n  border-radius: 10px;\n  padding: 8px 12px;\n}\n.timestamp[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  color: #575757;\n  margin-left: 10px;\n}\n.chat-input-row[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n  padding: 10px;\n  border-top: 1px solid #ddd;\n  display: flex;\n  align-items: center;\n}\n.chat-input-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  background-color: white;\n  color: black;\n  border-radius: 20px;\n  padding: 8px 12px;\n  border: 1px solid #ddd;\n}\n.chat-input-row[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #075e54;\n  cursor: pointer;\n}\n.chat-input-row[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n  padding: 10px;\n  border-top: 1px solid #ddd;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.chat-input-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  background-color: white;\n  color: black;\n  border-radius: 20px;\n  padding: 8px 12px;\n  border: 1px solid #ddd;\n}\nbutton[_ngcontent-%COMP%] {\n  font-family: inherit;\n  font-size: 20px;\n  background: #075e54;\n  color: white;\n  padding: 0.7em 1em;\n  padding-left: 0.9em;\n  display: flex;\n  align-items: center;\n  border: none;\n  border-radius: 16px;\n  overflow: hidden;\n  transition: all 0.2s;\n  cursor: pointer;\n}\nbutton[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: 0.3em;\n  transition: all 0.3s ease-in-out;\n}\nbutton[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: block;\n  transform-origin: center center;\n  transition: transform 0.3s ease-in-out;\n}\nbutton[_ngcontent-%COMP%]:hover   .svg-wrapper[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fly-1 0.6s ease-in-out infinite alternate;\n}\nbutton[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%] {\n  transform: translateX(1.2em) rotate(45deg) scale(1.1);\n}\nbutton[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  transform: translateX(5em);\n}\nbutton[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n}\n@keyframes _ngcontent-%COMP%_fly-1 {\n  from {\n    transform: translateY(0.1em);\n  }\n  to {\n    transform: translateY(-0.1em);\n  }\n}\n@media (max-width: 1000px) {\n  .movil[_ngcontent-%COMP%] {\n    margin-top: 14%;\n  }\n  .chat-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .chat-user-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .message[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .chat-input-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.chat-messages[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  overflow-y: auto;\n  padding: 10px;\n  background-color: #075e54;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n.chat-messages[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\nion-searchbar[_ngcontent-%COMP%] {\n  margin-left: auto;\n  --background: #013534;\n  --color: white;\n  --placeholder-color: lightgray;\n  --border-color: white;\n  --border-width: 0 0 2px 0;\n  --border-radius: 15px;\n  height: 30px;\n  width: 240px;\n}\n.message-container.highlight[_ngcontent-%COMP%] {\n  background-color: yellow;\n  transition: background-color 0.5s ease-in-out;\n}\n.search-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n}\n.search-bar-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\nion-searchbar[_ngcontent-%COMP%] {\n  --background: #013534;\n  --color: white;\n  --placeholder-color: lightgray;\n  --border-color: white;\n  --border-width: 0 0 2px 0;\n  --border-radius: 15px;\n  height: 30px;\n  width: 240px;\n}\nion-icon[name=search-outline][_ngcontent-%COMP%], \nion-icon[name=close-outline][_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: white;\n  cursor: pointer;\n}\nion-icon[name=arrow-down-outline][_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: white;\n  cursor: pointer;\n}\nion-icon.icon-blue[_ngcontent-%COMP%] {\n  color: #001f1f;\n}\n/*# sourceMappingURL=rafaparaelchat.component.css.map */'] });
var RafaparaelchatComponent = _RafaparaelchatComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RafaparaelchatComponent, { className: "RafaparaelchatComponent", filePath: "src/app/screen/rafaparaelchat/rafaparaelchat.component.ts", lineNumber: 29 });
})();
export {
  RafaparaelchatComponent
};
//# sourceMappingURL=rafaparaelchat.component-M6LQIIS6.js.map
