import {
  addIcons,
  logoIonitron,
  sendOutline,
  sendSharp
} from "./chunk-U7I4M26G.js";
import {
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonInput,
  IonRow,
  IonSpinner,
  IonicModule,
  TextValueAccessorDirective,
  environment
} from "./chunk-AZ27F32N.js";
import "./chunk-IRNVB6F3.js";
import {
  CommonModule,
  FormsModule,
  HttpClient,
  HttpHeaders,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtext,
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
import "./chunk-ZVATTXSA.js";

// src/app/Service/bold.pipe.ts
var _BoldPipe = class _BoldPipe {
  transform(value) {
    if (!value)
      return value;
    return value.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\n/g, "<br>");
  }
};
_BoldPipe.\u0275fac = function BoldPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BoldPipe)();
};
_BoldPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "bold", type: _BoldPipe, pure: true });
var BoldPipe = _BoldPipe;

// src/app/Service/chat-bot.service.ts
var _ChatBotService = class _ChatBotService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  sendMessage(message, token) {
    const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
    return this.httpClient.post(environment.apiUrl + "/chatBot/chat", { text: message }, { headers });
  }
};
_ChatBotService.\u0275fac = function ChatBotService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ChatBotService)(\u0275\u0275inject(HttpClient));
};
_ChatBotService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ChatBotService, factory: _ChatBotService.\u0275fac, providedIn: "root" });
var ChatBotService = _ChatBotService;

// src/app/Screen/health/health.component.ts
function HealthComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "span", 19);
    \u0275\u0275pipe(2, "bold");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r1 = ctx.$implicit;
    \u0275\u0275classProp("user", msg_r1.isUser)("bot", !msg_r1.isUser);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(2, 5, msg_r1.text), \u0275\u0275sanitizeHtml);
  }
}
function HealthComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "span");
    \u0275\u0275text(2, "Escribiendo...");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "ion-spinner", 21);
    \u0275\u0275elementEnd();
  }
}
var _HealthComponent = class _HealthComponent {
  constructor(chabot) {
    this.chabot = chabot;
    this.messageText = "";
    this.messages = [];
    this.isTyping = false;
    addIcons({
      sendSharp,
      logoIonitron,
      sendOutline
    });
  }
  sendMessage() {
    if (this.messageText.trim()) {
      this.messages.push({ text: this.messageText, isUser: true });
      this.isTyping = true;
      const token = sessionStorage.getItem("token");
      this.chabot.sendMessage(this.messageText, token).subscribe({
        next: (response) => {
          console.log("Respuesta del servidor:", response);
          setTimeout(() => {
            let botMessage;
            if (typeof response === "string") {
              botMessage = response;
            } else if (response && typeof response.text === "string") {
              botMessage = response.text;
            } else {
              botMessage = "Respuesta no disponible";
            }
            this.messages.push({ text: botMessage, isUser: false });
            this.isTyping = false;
          }, 1e3);
        },
        error: (error) => {
          var _a;
          console.error("Error en la respuesta:", error);
          const errorMessage = ((_a = error.error) == null ? void 0 : _a.text) || "Error al enviar el mensaje";
          this.messages.push({ text: errorMessage, isUser: false });
          this.isTyping = false;
        }
      });
      this.messageText = "";
    } else {
      console.error("El texto del mensaje est\xE1 vac\xEDo");
    }
  }
};
_HealthComponent.\u0275fac = function HealthComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HealthComponent)(\u0275\u0275directiveInject(ChatBotService));
};
_HealthComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HealthComponent, selectors: [["app-health"]], decls: 22, vars: 3, consts: [["fullscreen", ""], [1, "chat-container", "ion-no-padding"], [1, "chat-header", "movil"], ["size", "1", 1, "icon-back"], ["name", "arrow-back-outline"], ["size", "1", 1, "chat-avatar"], ["name", "logo-ionitron"], ["size", "10", 1, "chat-user-info"], [2, "padding-left", "20px"], [1, "chat-messages"], [1, "message-list"], ["class", "message", 3, "user", "bot", 4, "ngFor", "ngForOf"], ["class", "message bot typing-animation", 4, "ngIf"], [1, "chat-input-row"], ["size", "9", "size-md", "10"], ["placeholder", " Escriba un mensaje...", 2, "color", "white", 3, "ngModelChange", "keyup.enter", "ngModel"], ["size-md", "2", 1, "send-icon"], [3, "click"], [1, "message"], [3, "innerHTML"], [1, "message", "bot", "typing-animation"], ["name", "dots", "color", "primary"]], template: function HealthComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 0)(1, "ion-grid", 1)(2, "ion-row", 2)(3, "ion-col", 3);
    \u0275\u0275element(4, "ion-icon", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-col", 5);
    \u0275\u0275element(6, "ion-icon", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ion-col", 7)(8, "h4", 8);
    \u0275\u0275text(9, "POWERZONE IA");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "ion-row", 9)(11, "ion-col")(12, "div", 10);
    \u0275\u0275template(13, HealthComponent_div_13_Template, 3, 7, "div", 11)(14, HealthComponent_div_14_Template, 4, 0, "div", 12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "ion-row", 13)(16, "ion-col", 14)(17, "ion-input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function HealthComponent_Template_ion_input_ngModelChange_17_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.messageText, $event) || (ctx.messageText = $event);
      return $event;
    });
    \u0275\u0275listener("keyup.enter", function HealthComponent_Template_ion_input_keyup_enter_17_listener() {
      return ctx.sendMessage();
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "ion-col", 16)(19, "button", 17);
    \u0275\u0275listener("click", function HealthComponent_Template_button_click_19_listener() {
      return ctx.sendMessage();
    });
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21, "Enviar");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(13);
    \u0275\u0275property("ngForOf", ctx.messages);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isTyping);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.messageText);
  }
}, dependencies: [FormsModule, NgControlStatus, NgModel, IonicModule, IonCol, IonContent, IonGrid, IonIcon, IonInput, IonRow, IonSpinner, TextValueAccessorDirective, CommonModule, NgForOf, NgIf, BoldPipe], styles: ['@charset "UTF-8";\n\n\n\n.chat-container[_ngcontent-%COMP%] {\n  background-color: #343541;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.chat-header[_ngcontent-%COMP%] {\n  background-color: #202123;\n  color: #ffffff;\n  padding: 10px;\n  align-items: center;\n  border-bottom: 1px solid #2f2f30;\n}\n.icon-back[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #ffffff;\n  cursor: pointer;\n}\n.chat-avatar[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  color: #00a67f;\n}\n.chat-user-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  color: #ffffff;\n}\n.chat-messages[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  overflow-y: auto;\n  padding: 10px;\n  background-color: #343541;\n}\n.message-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.message[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-radius: 8px;\n  max-width: 80%;\n  word-wrap: break-word;\n  color: #eaeaea;\n  font-size: 15px;\n  line-height: 1.4;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n.message.user[_ngcontent-%COMP%] {\n  background-color: #00a67f;\n  align-self: flex-end;\n  text-align: right;\n  color: #ffffff;\n}\n.message.bot[_ngcontent-%COMP%] {\n  background-color: #444654;\n  align-self: flex-start;\n  text-align: left;\n}\n.chat-input-row[_ngcontent-%COMP%] {\n  background-color: #202123;\n  padding: 10px;\n  border-top: 1px solid #2f2f30;\n  align-items: center;\n  display: flex;\n}\n.chat-input-row[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  background-color: #40414f;\n  border-radius: 20px;\n  padding: 8px 12px;\n  border: 1px solid #565869;\n  color: #ffffff;\n  width: 100%;\n  font-size: 16px;\n}\n.send-icon[_ngcontent-%COMP%] {\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nbutton[_ngcontent-%COMP%] {\n  border: 0;\n  background-image:\n    linear-gradient(\n      150deg,\n      #9500ff,\n      #09f,\n      #00ddff);\n  border-radius: 8px;\n  color: white;\n  display: flex;\n  font-size: 15px;\n  padding: 3px;\n  cursor: pointer;\n  transition: 0.3s;\n  margin-left: 8px;\n}\nbutton[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background-color: black;\n  padding: 13px 20px;\n  border-radius: 6px;\n  transition: 0.3s;\n}\nbutton[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  background: none;\n}\nbutton[_ngcontent-%COMP%]:active {\n  transform: scale(0.9);\n}\n.typing-animation[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 10px;\n}\n.typing-animation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  font-style: italic;\n  color: #888;\n}\n.typing-animation[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n@media (max-width: 600px) {\n  .chat-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .chat-input-row[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n  .send-icon[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    width: 100%;\n    justify-content: flex-end;\n  }\n  button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n}\n@media (max-width: 1000px) {\n  .movil[_ngcontent-%COMP%] {\n    margin-top: 14%;\n  }\n  .chat-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .message[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .chat-input-row[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=health.component.css.map */'] });
var HealthComponent = _HealthComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HealthComponent, { className: "HealthComponent", filePath: "src/app/screen/health/health.component.ts", lineNumber: 18 });
})();
export {
  HealthComponent
};
//# sourceMappingURL=health.component-XK54TBM7.js.map
