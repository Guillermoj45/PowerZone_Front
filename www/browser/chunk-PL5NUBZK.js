import {
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵsanitizeUrl
} from "./chunk-A54Y6D4U.js";

// src/app/Component/carrousel/carrousel.component.ts
var _CarrouselComponent = class _CarrouselComponent {
  constructor() {
    this.images = [
      "assets/img/inicio.png",
      "assets/img/rutinas.png",
      "assets/img/ejercicios.png",
      "assets/img/editar.png"
    ];
    this.currentIndex = 0;
  }
  ngOnInit() {
    this.startCarousel();
  }
  startCarousel() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 5e3);
  }
};
_CarrouselComponent.\u0275fac = function CarrouselComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CarrouselComponent)();
};
_CarrouselComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CarrouselComponent, selectors: [["app-carrousel"]], decls: 2, vars: 1, consts: [[1, "corousel"], ["alt", "Imagen del carrousel", 3, "src"]], template: function CarrouselComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "img", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx.images[ctx.currentIndex], \u0275\u0275sanitizeUrl);
  }
}, styles: ['@charset "UTF-8";\n\n\n\n.carousel[_ngcontent-%COMP%] {\n  width: 80%;\n  height: 150px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n}\n.carousel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: opacity 1s ease-in-out;\n}\n/*# sourceMappingURL=carrousel.component.css.map */'] });
var CarrouselComponent = _CarrouselComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CarrouselComponent, { className: "CarrouselComponent", filePath: "src/app/component/carrousel/carrousel.component.ts", lineNumber: 9 });
})();

export {
  CarrouselComponent
};
//# sourceMappingURL=chunk-PL5NUBZK.js.map
