import {
  createColorClasses
} from "./chunk-MBNBWCEE.js";
import {
  getIonMode
} from "./chunk-5JBVT5OV.js";
import {
  Host,
  h,
  registerInstance
} from "./chunk-KX4G5RV4.js";
import "./chunk-ZVATTXSA.js";

// node_modules/@ionic/core/dist/esm/ion-text.entry.js
var textCss = ":host(.ion-color){color:var(--ion-color-base)}";
var IonTextStyle0 = textCss;
var Text = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.color = void 0;
  }
  render() {
    const mode = getIonMode(this);
    return h(Host, {
      key: "e134d70c04344b708a2ecf6253722781ad2ca826",
      class: createColorClasses(this.color, {
        [mode]: true
      })
    }, h("slot", {
      key: "da79c760f7ebbcd007ce110439f05a62cb22eac8"
    }));
  }
};
Text.style = IonTextStyle0;
export {
  Text as ion_text
};
/*! Bundled license information:

@ionic/core/dist/esm/ion-text.entry.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=ion-text.entry-NAZV26UT.js.map
