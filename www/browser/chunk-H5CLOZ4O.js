import {
  Client
} from "./chunk-2JTE6DJZ.js";
import {
  environment
} from "./chunk-AZ27F32N.js";
import {
  BehaviorSubject,
  HttpClient,
  HttpHeaders,
  Observable,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-A54Y6D4U.js";

// src/app/Service/websocket.service.ts
var _WebsocketService = class _WebsocketService {
  constructor(http) {
    this.http = http;
    this.messageSubject = new BehaviorSubject([]);
  }
  // Método para conectarse al WebSocket
  connect(roomId) {
    const webSocketUrl = environment.apiUrl + `/ws-native`;
    this.stompClient = new Client({
      webSocketFactory: () => new WebSocket(webSocketUrl),
      reconnectDelay: 5e3,
      debug: (str) => console.log(str),
      onConnect: () => {
        console.log("Conectado al servidor WebSocket nativo");
        this.stompClient.subscribe(`/topic/messages/${roomId}`, (message) => {
          try {
            const chatMessage = JSON.parse(message.body);
            const currentMessages = this.messageSubject.getValue();
            this.messageSubject.next([chatMessage]);
          } catch (error) {
            console.error("Error al procesar el mensaje recibido:", error);
          }
        });
      },
      onStompError: (frame) => {
        console.error("Error en WebSocket: ", frame.headers["message"]);
      }
    });
    this.stompClient.activate();
  }
  newSubscription(roomId) {
  }
  // Método para enviar mensajes
  sendMessage(chatMessage) {
    if (this.stompClient && this.stompClient.connected) {
      const message = JSON.stringify(chatMessage);
      this.stompClient.publish({
        destination: `/app/chat/${chatMessage.groupId}`,
        body: message
      });
    } else {
      console.error("No se puede enviar el mensaje: WebSocket no est\xE1 conectado.");
    }
  }
  // Obtener mensajes de un grupo
  getMessageObservable() {
    return this.messageSubject.asObservable();
  }
  // Obtener los detalles de un grupo
  getGroupDetails(groupId) {
    const url = environment.apiUrl + `/messages/grupos/${groupId}`;
    const token = sessionStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.get(url, { headers });
  }
  // Método para obtener los grupos del usuario
  getUserGroups() {
    const url = environment.apiUrl + `/messages/info`;
    const token = sessionStorage.getItem("token");
    console.log("Token obtenido:", token);
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.get(url, { headers });
  }
  // Método para obtener los perfiles seguidos
  getFollowingProfiles() {
    const url = environment.apiUrl + `/profile/following`;
    const token = sessionStorage.getItem("token");
    if (!token) {
      return new Observable((observer) => {
        observer.error("Token no encontrado");
      });
    }
    console.log("Token obtenido:", token);
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.get(url, { headers });
  }
  // Crear un nuevo grupo
  createGroup(groupName, file) {
    const url = environment.apiUrl + "/messages/create";
    const token = sessionStorage.getItem("token");
    const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
    const formData = new FormData();
    formData.append("group", JSON.stringify({ name: groupName.name }));
    if (file) {
      formData.append("file", file);
    }
    return this.http.post(url, formData, { headers });
  }
  // Añadir usuarios a un grupo
  addUsersToGroup(groupId, userIds) {
    const url = environment.apiUrl + `/messages/addUsersToGroup`;
    const token = sessionStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}`, "Content-Type": "application/json" };
    const params = { groupId };
    const body = userIds;
    return this.http.post(url, body, { headers, params });
  }
  // Obtener mensajes por grupo
  getMessagesByGroup(groupId) {
    const url = environment.apiUrl + `/messages/group/${groupId}`;
    const token = sessionStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.get(url, { headers });
  }
  // Obtener los últimos mensajes de los grupos
  getUltimosMensajesPorGrupo() {
    const url = environment.apiUrl + `/messages/grupos/ultimos-mensajes`;
    const token = sessionStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` };
    return this.http.get(url, { headers });
  }
  // Desconectar el WebSocket
  disconnect() {
    if (this.stompClient && this.stompClient.active) {
      this.stompClient.deactivate();
      console.log("Conexi\xF3n WebSocket cerrada.");
    }
  }
};
_WebsocketService.\u0275fac = function WebsocketService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _WebsocketService)(\u0275\u0275inject(HttpClient));
};
_WebsocketService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WebsocketService, factory: _WebsocketService.\u0275fac, providedIn: "root" });
var WebsocketService = _WebsocketService;

// node_modules/@cloudinary/url-gen/config/BaseConfig.js
function isObject(a) {
  if (typeof a !== "object" || a instanceof Array) {
    return false;
  } else {
    return true;
  }
}
var Config = class {
  filterOutNonSupportedKeys(userProvidedConfig, validKeys) {
    const obj = /* @__PURE__ */ Object.create({});
    if (isObject(userProvidedConfig)) {
      Object.keys(userProvidedConfig).forEach((key) => {
        if (validKeys.indexOf(key) >= 0) {
          obj[key] = userProvidedConfig[key];
        } else {
          console.warn("Warning - unsupported key provided to configuration: ", key);
        }
      });
      return obj;
    } else {
      return /* @__PURE__ */ Object.create({});
    }
  }
};
var BaseConfig_default = Config;

// node_modules/@cloudinary/url-gen/internal/internalConstants.js
var ALLOWED_URL_CONFIG = ["cname", "secureDistribution", "privateCdn", "signUrl", "longUrlSignature", "shorten", "useRootPath", "secure", "forceVersion", "analytics", "queryParams"];

// node_modules/@cloudinary/url-gen/config/URLConfig.js
var URLConfig = class _URLConfig extends BaseConfig_default {
  /**
   * @param {IURLConfig} userURLConfig
   */
  constructor(userURLConfig) {
    super();
    const urlConfig = this.filterOutNonSupportedKeys(userURLConfig, ALLOWED_URL_CONFIG);
    Object.assign(this, {
      secure: true
    }, urlConfig);
  }
  extend(userURLConfig) {
    const urlConfig = this.filterOutNonSupportedKeys(userURLConfig, ALLOWED_URL_CONFIG);
    return new _URLConfig(Object.assign({}, this, urlConfig));
  }
  /**
   * @param {string} value Sets the cname
   */
  setCname(value) {
    this.cname = value;
    return this;
  }
  /**
   * @param {string} value Sets the secureDistribution
   */
  setSecureDistribution(value) {
    this.secureDistribution = value;
    return this;
  }
  /**
   * @param {boolean} value Sets whether to use a private CDN (Removes cloudName from URL)
   */
  setPrivateCdn(value) {
    this.privateCdn = value;
    return this;
  }
  /**
   * @param value Sets whether or not to sign the URL
   */
  setSignUrl(value) {
    this.signUrl = value;
    return this;
  }
  /**
   * @param value Sets whether or not to use a long signature
   */
  setLongUrlSignature(value) {
    this.longUrlSignature = value;
    return this;
  }
  /**
   * @param value Sets whether or not to shorten the URL
   */
  setShorten(value) {
    this.shorten = value;
    return this;
  }
  /**
   * @param value Sets whether or not to use a root path
   */
  setUseRootPath(value) {
    this.useRootPath = value;
    return this;
  }
  /**
   * @param value Sets whether or not to deliver the asset through https
   */
  setSecure(value) {
    this.secure = value;
    return this;
  }
  /**
   * @param value Sets whether to force a version in the URL
   */
  setForceVersion(value) {
    this.forceVersion = value;
    return this;
  }
  /**
   * @param params Sets additional params
   */
  setQueryParams(params) {
    this.queryParams = params;
    return this;
  }
};
var URLConfig_default = URLConfig;

// node_modules/@cloudinary/transformation-builder-sdk/internal/qualifier/QualifierValue.js
var QualifierValue = class {
  /**
   *
   * @param {QualifierValue | QualifierValue[] | any[] | string | number}qualifierValue
   */
  constructor(qualifierValue) {
    this.values = [];
    this.delimiter = ":";
    if (this.hasValue(qualifierValue)) {
      this.addValue(qualifierValue);
    }
  }
  /**
   * @description Joins the provided values with the provided delimiter
   */
  toString() {
    return this.values.join(this.delimiter);
  }
  /**
   * @description Checks if the provided argument has a value
   * @param {any} v
   * @private
   * @return {boolean}
   */
  hasValue(v) {
    return typeof v !== "undefined" && v !== null && v !== "";
  }
  /**
   * @desc Adds a value for the this qualifier instance
   * @param {any} value
   * @return {this}
   */
  addValue(value) {
    if (Array.isArray(value)) {
      this.values = this.values.concat(value);
    } else {
      this.values.push(value);
    }
    this.values = this.values.filter((v) => this.hasValue(v));
    return this;
  }
  /**
   * @description Sets the delimiter for this instance
   * @param delimiter
   */
  setDelimiter(delimiter) {
    this.delimiter = delimiter;
    return this;
  }
};

// node_modules/@cloudinary/transformation-builder-sdk/internal/utils/unsupportedError.js
var UnsupportedError = class extends Error {
  constructor(message = "Unsupported") {
    super(message);
  }
};
function createUnsupportedError(message) {
  return new UnsupportedError(message);
}

// node_modules/@cloudinary/transformation-builder-sdk/internal/models/qualifierToJson.js
function qualifierToJson() {
  return this._qualifierModel || {
    error: createUnsupportedError(`unsupported qualifier ${this.constructor.name}`)
  };
}

// node_modules/@cloudinary/transformation-builder-sdk/internal/models/QualifierModel.js
var QualifierModel = class {
  constructor() {
    this._qualifierModel = {};
  }
  toJson() {
    return qualifierToJson.apply(this);
  }
};

// node_modules/@cloudinary/transformation-builder-sdk/internal/qualifier/Qualifier.js
var Qualifier = class extends QualifierModel {
  constructor(key, qualifierValue) {
    super();
    this.delimiter = "_";
    this.key = key;
    if (qualifierValue instanceof QualifierValue) {
      this.qualifierValue = qualifierValue;
    } else {
      this.qualifierValue = new QualifierValue();
      this.qualifierValue.addValue(qualifierValue);
    }
  }
  toString() {
    const {
      key,
      delimiter,
      qualifierValue
    } = this;
    return `${key}${delimiter}${qualifierValue.toString()}`;
  }
  addValue(value) {
    this.qualifierValue.addValue(value);
    return this;
  }
};

// node_modules/@cloudinary/transformation-builder-sdk/qualifiers/flag/FlagQualifier.js
var FlagQualifier = class extends Qualifier {
  constructor(flagType, flagValue) {
    let qualifierValue;
    if (flagValue) {
      qualifierValue = new QualifierValue([flagType, `${flagValue}`]).setDelimiter(":");
    } else {
      qualifierValue = flagType;
    }
    super("fl", qualifierValue);
    this.flagValue = flagValue;
  }
  toString() {
    return super.toString().replace(/\./g, "%2E");
  }
  getFlagValue() {
    return this.flagValue;
  }
};

// node_modules/@cloudinary/transformation-builder-sdk/internal/utils/dataStructureUtils.js
function mapToSortedArray(map, flags) {
  const array = Array.from(map.entries());
  flags.forEach((flag) => {
    array.push(["fl", flag]);
  });
  return array.sort().map((v) => v[1]);
}

// node_modules/@cloudinary/transformation-builder-sdk/internal/models/actionToJson.js
function actionToJson() {
  var _a, _b, _c;
  const actionModelIsNotEmpty = this._actionModel && Object.keys(this._actionModel).length;
  const sourceTransformationError = (_c = (_b = (_a = this._actionModel) === null || _a === void 0 ? void 0 : _a.source) === null || _b === void 0 ? void 0 : _b.transformation) === null || _c === void 0 ? void 0 : _c.error;
  if (sourceTransformationError && sourceTransformationError instanceof Error) {
    return {
      error: sourceTransformationError
    };
  }
  if (actionModelIsNotEmpty) {
    return this._actionModel;
  }
  return {
    error: createUnsupportedError(`unsupported action ${this.constructor.name}`)
  };
}

// node_modules/@cloudinary/transformation-builder-sdk/internal/models/ActionModel.js
var ActionModel = class {
  constructor() {
    this._actionModel = {};
  }
  toJson() {
    return actionToJson.apply(this);
  }
};

// node_modules/@cloudinary/transformation-builder-sdk/internal/Action.js
var Action = class extends ActionModel {
  constructor() {
    super(...arguments);
    this.qualifiers = /* @__PURE__ */ new Map();
    this.flags = [];
    this.delimiter = ",";
    this.actionTag = "";
  }
  prepareQualifiers() {
  }
  /**
   * @description Returns the custom name tag that was given to this action
   * @return {string}
   */
  getActionTag() {
    return this.actionTag;
  }
  /**
   * @description Sets the custom name tag for this action
   * @return {this}
   */
  setActionTag(tag) {
    this.actionTag = tag;
    return this;
  }
  /**
   * @description Calls toString() on all child qualifiers (implicitly by using .join()).
   * @return {string}
   */
  toString() {
    this.prepareQualifiers();
    return mapToSortedArray(this.qualifiers, this.flags).join(this.delimiter);
  }
  /**
   * @description Adds the parameter to the action.
   * @param {SDK.Qualifier} qualifier
   * @return {this}
   */
  addQualifier(qualifier) {
    if (typeof qualifier === "string") {
      const [key, value] = qualifier.toLowerCase().split("_");
      if (key === "fl") {
        this.flags.push(new FlagQualifier(value));
      } else {
        this.qualifiers.set(key, new Qualifier(key, value));
      }
    } else {
      this.qualifiers.set(qualifier.key, qualifier);
    }
    return this;
  }
  /**
   * @description Adds a flag to the current action.
   * @param {Qualifiers.Flag} flag
   * @return {this}
   */
  addFlag(flag) {
    if (typeof flag === "string") {
      this.flags.push(new FlagQualifier(flag));
    } else {
      if (flag instanceof FlagQualifier) {
        this.flags.push(flag);
      }
    }
    return this;
  }
  addValueToQualifier(qualifierKey, qualifierValue) {
    this.qualifiers.get(qualifierKey).addValue(qualifierValue);
    return this;
  }
};

// node_modules/@cloudinary/transformation-builder-sdk/internal/utils/prepareColor.js
function prepareColor(color) {
  if (color) {
    return color.match(/^#/) ? `rgb:${color.substr(1)}` : color;
  } else {
    return color;
  }
}

// node_modules/@cloudinary/transformation-builder-sdk/actions/background/actions/BackgroundColor.js
var BackgroundColor = class extends Action {
  constructor(color) {
    super();
    this._actionModel = {};
    this.addQualifier(new Qualifier("b", new QualifierValue(prepareColor(color)).setDelimiter("_")));
    this._actionModel.color = color;
    this._actionModel.actionType = "backgroundColor";
  }
  static fromJson(actionModel) {
    const {
      color
    } = actionModel;
    const result = new this(color);
    return result;
  }
};

// node_modules/@cloudinary/transformation-builder-sdk/internal/RawAction.js
var RawAction = class {
  constructor(raw) {
    this.raw = raw;
  }
  toString() {
    return this.raw;
  }
  toJson() {
    return {
      error: createUnsupportedError(`unsupported action ${this.constructor.name}`)
    };
  }
};

// node_modules/@cloudinary/transformation-builder-sdk/internal/models/IErrorObject.js
function isErrorObject(obj) {
  const errorObj = obj;
  return "error" in errorObj && !!errorObj.error;
}

// node_modules/@cloudinary/transformation-builder-sdk/qualifiers/flag.js
function lossy() {
  return new FlagQualifier("lossy");
}
function preserveTransparency() {
  return new FlagQualifier("preserve_transparency");
}
function progressive(mode) {
  return new FlagQualifier("progressive", mode);
}

// node_modules/@cloudinary/transformation-builder-sdk/qualifiers/format/FormatQualifier.js
var FormatQualifier = class extends QualifierValue {
  constructor(val) {
    super(val);
    this.val = val;
  }
  getValue() {
    return this.val;
  }
};

// node_modules/@cloudinary/transformation-builder-sdk/internal/utils/objectFlip.js
function objectFlip(obj) {
  const result = {};
  Object.keys(obj).forEach((key) => {
    result[obj[key]] = key;
  });
  return result;
}

// node_modules/@cloudinary/transformation-builder-sdk/internal/internalConstants.js
var ACTION_TYPE_TO_CROP_MODE_MAP = {
  limitFit: "limit",
  limitFill: "lfill",
  minimumFit: "mfit",
  thumbnail: "thumb",
  limitPad: "lpad",
  minimumPad: "mpad",
  autoPad: "auto_pad"
};
var ACTION_TYPE_TO_DELIVERY_MODE_MAP = {
  colorSpace: "cs",
  dpr: "dpr",
  density: "dn",
  defaultImage: "d",
  format: "f",
  quality: "q"
};
var ACTION_TYPE_TO_EFFECT_MODE_MAP = {
  redEye: "redeye",
  advancedRedEye: "adv_redeye",
  oilPaint: "oil_paint",
  unsharpMask: "unsharp_mask",
  makeTransparent: "make_transparent",
  generativeRestore: "gen_restore",
  upscale: "upscale"
};
var ACTION_TYPE_TO_QUALITY_MODE_MAP = {
  autoBest: "auto:best",
  autoEco: "auto:eco",
  autoGood: "auto:good",
  autoLow: "auto:low",
  jpegminiHigh: "jpegmini:1",
  jpegminiMedium: "jpegmini:2",
  jpegminiBest: "jpegmini:0"
};
var ACTION_TYPE_TO_STREAMING_PROFILE_MODE_MAP = {
  fullHd: "full_hd",
  fullHdWifi: "full_hd_wifi",
  fullHdLean: "full_hd_lean",
  hdLean: "hd_lean"
};
var CHROMA_VALUE_TO_CHROMA_MODEL_ENUM = {
  444: "CHROMA_444",
  420: "CHROMA_420"
};
var COLOR_SPACE_MODEL_MODE_TO_COLOR_SPACE_MODE_MAP = {
  "noCmyk": "no_cmyk",
  "keepCmyk": "keep_cmyk",
  "tinySrgb": "tinysrgb",
  "srgbTrueColor": "srgb:truecolor"
};
var CHROMA_MODEL_ENUM_TO_CHROMA_VALUE = objectFlip(CHROMA_VALUE_TO_CHROMA_MODEL_ENUM);
var COLOR_SPACE_MODE_TO_COLOR_SPACE_MODEL_MODE_MAP = objectFlip(COLOR_SPACE_MODEL_MODE_TO_COLOR_SPACE_MODE_MAP);
var CROP_MODE_TO_ACTION_TYPE_MAP = objectFlip(ACTION_TYPE_TO_CROP_MODE_MAP);
var DELIVERY_MODE_TO_ACTION_TYPE_MAP = objectFlip(ACTION_TYPE_TO_DELIVERY_MODE_MAP);
var EFFECT_MODE_TO_ACTION_TYPE_MAP = objectFlip(ACTION_TYPE_TO_EFFECT_MODE_MAP);
var QUALITY_MODE_TO_ACTION_TYPE_MAP = objectFlip(ACTION_TYPE_TO_QUALITY_MODE_MAP);
var STREAMING_PROFILE_TO_ACTION_TYPE_MAP = objectFlip(ACTION_TYPE_TO_STREAMING_PROFILE_MODE_MAP);

// node_modules/@cloudinary/transformation-builder-sdk/actions/delivery/DeliveryAction.js
var DeliveryAction = class extends Action {
  /**
   * @param {string} deliveryKey A generic Delivery Action Key (such as q, f, dn, etc.)
   * @param {string} deliveryType A Format Qualifiers for the action, such as Quality.auto()
   * @param {string} modelProperty internal model property of the action, for example quality uses `level` while dpr uses `density`
   * @see Visit {@link Actions.Delivery|Delivery} for an example
   */
  constructor(deliveryKey, deliveryType, modelProperty) {
    super();
    this._actionModel = {};
    let deliveryTypeValue;
    if (deliveryType instanceof FormatQualifier) {
      deliveryTypeValue = deliveryType.getValue();
    } else {
      deliveryTypeValue = deliveryType;
    }
    this._actionModel.actionType = DELIVERY_MODE_TO_ACTION_TYPE_MAP[deliveryKey];
    this._actionModel[modelProperty] = deliveryTypeValue;
    this.addQualifier(new Qualifier(deliveryKey, deliveryType));
  }
};

// node_modules/@cloudinary/transformation-builder-sdk/qualifiers/progressive.js
var ProgressiveQualifier = class extends FlagQualifier {
  constructor(mode) {
    super("progressive", mode);
  }
};

// node_modules/@cloudinary/transformation-builder-sdk/actions/delivery/DeliveryFormatAction.js
var DeliveryFormatAction = class extends DeliveryAction {
  constructor(deliveryKey, deliveryType) {
    super(deliveryKey, deliveryType, "formatType");
  }
  /**
   * @description Uses lossy compression when delivering animated GIF files.
   * @return {this}
   */
  lossy() {
    this._actionModel.lossy = true;
    this.addFlag(lossy());
    return this;
  }
  /**
   * @description Uses progressive compression when delivering JPG file format.
   * @return {this}
   */
  progressive(mode) {
    if (mode instanceof ProgressiveQualifier) {
      this._actionModel.progressive = {
        mode: mode.getFlagValue()
      };
      this.addFlag(mode);
    } else {
      this._actionModel.progressive = {
        mode
      };
      this.addFlag(progressive(mode));
    }
    return this;
  }
  /**
   * @description Ensures that images with a transparency channel are delivered in PNG format.
   */
  preserveTransparency() {
    this._actionModel.preserveTransparency = true;
    this.addFlag(preserveTransparency());
    return this;
  }
  static fromJson(actionModel) {
    const {
      formatType,
      lossy: lossy2,
      progressive: progressive2,
      preserveTransparency: preserveTransparency2
    } = actionModel;
    let result;
    if (formatType) {
      result = new this("f", formatType);
    } else {
      result = new this("f");
    }
    if (progressive2) {
      if (progressive2.mode) {
        result.progressive(progressive2.mode);
      } else {
        result.progressive();
      }
    }
    lossy2 && result.lossy();
    preserveTransparency2 && result.preserveTransparency();
    return result;
  }
};

// node_modules/@cloudinary/transformation-builder-sdk/transformation/Transformation.js
var Transformation = class _Transformation {
  constructor() {
    this.actions = [];
  }
  /**
   * @param {SDK.Action | string} action
   * @return {this}
   */
  addAction(action) {
    let actionToAdd;
    if (typeof action === "string") {
      if (action.indexOf("/") >= 0) {
        throw "addAction cannot accept a string with a forward slash in it - /, use .addTransformation() instead";
      } else {
        actionToAdd = new RawAction(action);
      }
    } else {
      actionToAdd = action;
    }
    this.actions.push(actionToAdd);
    return this;
  }
  /**
   * @description Allows the injection of a raw transformation as a string into the transformation, or a Transformation instance that was previously created
   * @param {string | SDK.Transformation} tx
   * @example
   * import {Transformation} from "@cloudinary/url-gen";
   *
   * const transformation = new Transformation();
   * transformation.addTransformation('w_100/w_200/w_300');
   * @return {this}
   */
  addTransformation(tx) {
    if (tx instanceof _Transformation) {
      this.actions = this.actions.concat(tx.actions);
    } else {
      this.actions.push(new RawAction(tx));
    }
    return this;
  }
  /**
   * @return {string}
   */
  toString() {
    return this.actions.map((action) => {
      return action.toString();
    }).filter((a) => a).join("/");
  }
  /**
   * @description Delivers an animated GIF.
   * @param {AnimatedAction} animatedAction
   * @return {this}
   */
  animated(animatedAction) {
    return this.addAction(animatedAction);
  }
  /**
   * @description Adds a border around the image.
   * @param {Border} borderAction
   * @return {this}
   */
  border(borderAction) {
    return this.addAction(borderAction);
  }
  /**
   * @description Adjusts the shape of the delivered image. </br>
   * <b>Learn more:</b> {@link https://cloudinary.com/documentation/effects_and_artistic_enhancements#distort|Shape changes and distortion effects}
   * @param {IReshape} reshapeAction
   * @return {this}
   */
  reshape(reshapeAction) {
    return this.addAction(reshapeAction);
  }
  /**
   * @description Resize the asset using provided resize action
   * @param {ResizeSimpleAction} resizeAction
   * @return {this}
   */
  resize(resizeAction) {
    return this.addAction(resizeAction);
  }
  /**
   * @desc An alias to Action Delivery.quality
   * @param {string|number} quality
   * @return {this}
   */
  quality(quality) {
    this.addAction(new DeliveryFormatAction("q", quality));
    return this;
  }
  /**
   * @desc An alias to Action Delivery.format
   * @param {string} format
   * @return {this}
   */
  format(format) {
    this.addAction(new DeliveryFormatAction("f", format));
    return this;
  }
  /**
   * @description Rounds the specified corners of an image.
   * @param roundCornersAction
   * @return {this}
   */
  roundCorners(roundCornersAction) {
    return this.addAction(roundCornersAction);
  }
  /**
   * @description Adds an overlay over the base image.
   * @param {LayerAction} overlayAction
   * @return {this}
   */
  overlay(overlayAction) {
    return this.addAction(overlayAction);
  }
  /**
   * @description Adds an underlay under the base image.
   * @param {LayerAction} underlayAction
   * @return {this}
   */
  underlay(underlayAction) {
    underlayAction.setLayerType("u");
    return this.addAction(underlayAction);
  }
  /**
   * @description Defines an new user variable.
   * @param {VariableAction} variableAction
   * @return {this}
   */
  addVariable(variableAction) {
    return this.addAction(variableAction);
  }
  /**
   * @description Specifies a condition to be met before applying a transformation.
   * @param {ConditionalAction} conditionAction
   * @return {this}
   */
  conditional(conditionAction) {
    return this.addAction(conditionAction);
  }
  /**
   * @description Applies a filter or an effect on an asset.
   * @param {SimpleEffectAction} effectAction
   * @return {this}
   */
  effect(effectAction) {
    return this.addAction(effectAction);
  }
  /**
   * @description Applies adjustment effect on an asset.
   * @param action
   * @return {this}
   */
  adjust(action) {
    return this.addAction(action);
  }
  /**
   * @description Rotates the asset by the given angle.
   * @param {RotateAction} rotateAction
   * @return {this}
   */
  rotate(rotateAction) {
    return this.addAction(rotateAction);
  }
  /**
   * @description Applies a pre-defined named transformation of the given name.
   * @param {NamedTransformation} namedTransformation
   * @return {this}
   */
  namedTransformation(namedTransformation) {
    return this.addAction(namedTransformation);
  }
  /**
   * @description Applies delivery action.
   * @param deliveryAction
   * @return {this}
   */
  delivery(deliveryAction) {
    return this.addAction(deliveryAction);
  }
  /**
   * @description Sets the color of the background.
   * @param {Qualifiers.Color} color
   * @return {this}
   */
  backgroundColor(color) {
    return this.addAction(new BackgroundColor(color));
  }
  /**
   * @description Adds a layer in a Photoshop document.
   * @param action
   * @return {this}
   */
  psdTools(action) {
    return this.addAction(action);
  }
  /**
   * @description Extracts an image or a page using an index, a range, or a name from a layered media asset.
   * @param action
   * @return {this}
   */
  extract(action) {
    return this.addAction(action);
  }
  /**
   * @description Adds a flag as a separate action.
   * @param {Qualifiers.Flag | string} flagQualifier
   * @return {this}
   */
  addFlag(flagQualifier) {
    const action = new Action();
    let flagToAdd = flagQualifier;
    if (typeof flagQualifier === "string") {
      flagToAdd = new FlagQualifier(flagQualifier);
    }
    action.addQualifier(flagToAdd);
    return this.addAction(action);
  }
  /**
   * @description Inject a custom function into the image transformation pipeline.
   * @return {this}
   */
  customFunction(customFunction) {
    return this.addAction(customFunction);
  }
  /**
   * Transcodes the video (or audio) to another format.
   * @param {Action} action
   * @return {this}
   */
  transcode(action) {
    return this.addAction(action);
  }
  /**
   * Applies the specified video edit action.
   *
   * @param {videoEditType} action
   * @return {this}
   */
  videoEdit(action) {
    return this.addAction(action);
  }
  toJson() {
    const actions = [];
    for (const action of this.actions) {
      const json = action.toJson();
      if (isErrorObject(json)) {
        return json;
      }
      actions.push(json);
    }
    return {
      actions
    };
  }
};

// node_modules/@cloudinary/transformation-builder-sdk/transformation/ImageTransformation.js
var ImageTransformation = class extends Transformation {
};

// node_modules/@cloudinary/transformation-builder-sdk/transformation/VideoTransformation.js
var VideoTransformation = class extends Transformation {
};

// node_modules/@cloudinary/transformation-builder-sdk/actions/namedTransformation/NamedTransformationAction.js
var NamedTransformationAction = class extends Action {
  /**
   *
   * @param {string} name The name of the named transformation
   */
  constructor(name2) {
    super();
    this.addQualifier(new Qualifier("t", name2));
  }
};

// node_modules/@cloudinary/transformation-builder-sdk/actions/namedTransformation.js
function name(name2) {
  return new NamedTransformationAction(name2);
}

// node_modules/@cloudinary/url-gen/internal/url/urlUtils/isUrl.js
function isUrl(publicID) {
  return publicID.match(/^https?:\//);
}

// node_modules/@cloudinary/url-gen/internal/url/urlUtils/isFileName.js
function isFileName(publicID) {
  return publicID.indexOf("/") < 0;
}

// node_modules/@cloudinary/url-gen/internal/url/urlUtils/publicIDContainsVersion.js
function publicIDContainsVersion(publicID) {
  return publicID.match(/^v[0-9]+/);
}

// node_modules/@cloudinary/url-gen/internal/url/cloudinaryURL.js
function getUrlPrefix(cloudName, urlConfig) {
  const secure = urlConfig.secure;
  const privateCDN = urlConfig.privateCdn;
  const cname = urlConfig.cname;
  const secureDistribution = urlConfig.secureDistribution;
  if (!secure && !cname) {
    return `http://res.cloudinary.com/${cloudName}`;
  }
  if (secure && !secureDistribution && privateCDN) {
    return `https://${cloudName}-res.cloudinary.com`;
  }
  if (secure && !secureDistribution) {
    return `https://res.cloudinary.com/${cloudName}`;
  }
  if (secure && secureDistribution && privateCDN) {
    return `https://${secureDistribution}`;
  }
  if (secure && secureDistribution) {
    return `https://${secureDistribution}/${cloudName}`;
  }
  if (!secure && cname) {
    return `http://${cname}/${cloudName}`;
  } else {
    return "ERROR";
  }
}
function handleAssetType(assetType) {
  if (!assetType) {
    return "image";
  }
  return assetType;
}
function handleDeliveryType(deliveryType) {
  if (!deliveryType) {
    return "upload";
  }
  return deliveryType;
}
function getUrlVersion(publicID, version, forceVersion) {
  const shouldForceVersion = forceVersion !== false;
  if (version) {
    return `v${version}`;
  }
  if (publicIDContainsVersion(publicID) || isUrl(publicID) || isFileName(publicID)) {
    return "";
  }
  return shouldForceVersion ? "v1" : "";
}

// node_modules/@cloudinary/url-gen/sdkAnalytics/stringPad.js
function stringPad(value, _targetLength, _padString) {
  let targetLength = _targetLength >> 0;
  let padString = String(typeof _padString !== "undefined" ? _padString : " ");
  if (value.length > targetLength) {
    return String(value);
  } else {
    targetLength = targetLength - value.length;
    if (targetLength > padString.length) {
      padString += repeatStringNumTimes(padString, targetLength / padString.length);
    }
    return padString.slice(0, targetLength) + String(value);
  }
}
function repeatStringNumTimes(string, _times) {
  let times = _times;
  let repeatedString = "";
  while (times > 0) {
    repeatedString += string;
    times--;
  }
  return repeatedString;
}

// node_modules/@cloudinary/url-gen/sdkAnalytics/base64Map.js
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var base64Map = {};
var num = 0;
chars.split("").forEach((char) => {
  let key = num.toString(2);
  key = stringPad(key, 6, "0");
  base64Map[key] = char;
  num++;
});

// node_modules/@cloudinary/url-gen/sdkAnalytics/reverseVersion.js
function reverseVersion(semVer) {
  if (semVer.split(".").length < 2) {
    throw new Error("invalid semVer, must have at least two segments");
  }
  return semVer.split(".").reverse().join(".");
}

// node_modules/@cloudinary/url-gen/sdkAnalytics/padVersion.js
function padVersion(semVer) {
  if (semVer.split(".").length < 2) {
    throw new Error("invalid semVer, must have at least two segments");
  }
  return semVer.split(".").map((segment) => {
    const asNumber = +segment;
    if (isNaN(asNumber) || asNumber < 0) {
      throw "Invalid version number provided";
    }
    return stringPad(segment, 2, "0");
  }).join(".");
}

// node_modules/@cloudinary/url-gen/sdkAnalytics/encodeVersion.js
function encodeVersion(semVer) {
  let strResult = "";
  const parts = semVer.split(".").length;
  const paddedStringLength = parts * 6;
  const reversedSemver = reverseVersion(semVer);
  const paddedSemver = padVersion(reversedSemver);
  const num2 = parseInt(paddedSemver.split(".").join(""));
  let paddedBinary = num2.toString(2);
  paddedBinary = stringPad(paddedBinary, paddedStringLength, "0");
  if (paddedBinary.length % 6 !== 0) {
    throw "Version must be smaller than 43.21.26)";
  }
  paddedBinary.match(/.{1,6}/g).forEach((bitString) => {
    strResult += base64Map[bitString];
  });
  return strResult;
}

// node_modules/@cloudinary/url-gen/sdkAnalytics/getAnalyticsOptions.js
function getAnalyticsOptions(options) {
  const analyticsOptions = {
    sdkSemver: options.sdkSemver,
    techVersion: options.techVersion,
    sdkCode: options.sdkCode,
    product: options.product,
    feature: "0",
    osType: options.osType,
    osVersion: options.osVersion
  };
  if (options.accessibility) {
    analyticsOptions.feature = "D";
  }
  if (options.lazyload) {
    analyticsOptions.feature = "C";
  }
  if (options.responsive) {
    analyticsOptions.feature = "A";
  }
  if (options.placeholder) {
    analyticsOptions.feature = "B";
  }
  return analyticsOptions;
}

// node_modules/@cloudinary/url-gen/internal/utils/packageVersion.js
var packageVersion = "1.21.0";

// node_modules/@cloudinary/url-gen/sdkAnalytics/encodeOSVersion.js
function encodeOSVersion(semVer) {
  const [major, minor] = semVer.split(".");
  const binaryMajorVersion = parseInt(major).toString(2);
  const binaryMinorVersion = parseInt(minor).toString(2);
  const paddedMajor = binaryMajorVersion.padStart(6, "0");
  const paddedMinor = binaryMinorVersion.padStart(6, "0");
  return base64Map[paddedMajor] + base64Map[paddedMinor];
}

// node_modules/@cloudinary/url-gen/sdkAnalytics/getSDKAnalyticsSignature.js
function getNodeVersion() {
  const failedVersion = "0.0.0";
  if (typeof window !== "undefined") {
    return failedVersion;
  } else {
    try {
      return process.versions.node || failedVersion;
    } catch (e) {
      return failedVersion;
    }
  }
}
function ensureShapeOfTrackedProperties(trackedAnalytics) {
  const defaults = {
    techVersion: getNodeVersion(),
    sdkCode: "T",
    sdkSemver: packageVersion.split("-")[0],
    product: "A",
    osType: "Z",
    osVersion: "0.0",
    responsive: false,
    placeholder: false,
    lazyload: false,
    accessibility: false
  };
  if (!trackedAnalytics) {
    return defaults;
  } else {
    return Object.assign(Object.assign({}, defaults), trackedAnalytics);
  }
}
function getSDKAnalyticsSignature(_trackedAnalytics) {
  const trackedAnalytics = ensureShapeOfTrackedProperties(_trackedAnalytics);
  const analyticsOptions = getAnalyticsOptions(trackedAnalytics);
  try {
    const twoPartVersion = removePatchFromSemver(analyticsOptions.techVersion);
    const encodedSDKVersion = encodeVersion(analyticsOptions.sdkSemver);
    const encodedTechVersion = encodeVersion(twoPartVersion);
    const encodedOSVersion = encodeOSVersion(analyticsOptions.osVersion);
    const featureCode = analyticsOptions.feature;
    const SDKCode = analyticsOptions.sdkCode;
    const {
      product,
      osType
    } = analyticsOptions;
    const algoVersion = "D";
    return `${algoVersion}${product}${SDKCode}${encodedSDKVersion}${encodedTechVersion}${osType}${encodedOSVersion}${featureCode}`;
  } catch (e) {
    return "E";
  }
}
function removePatchFromSemver(semVerStr) {
  const parts = semVerStr.split(".");
  return `${parts[0]}.${parts[1]}`;
}

// node_modules/@cloudinary/url-gen/assets/CloudinaryFile.js
var SEO_TYPES = {
  "image/upload": "images",
  "image/private": "private_images",
  "image/authenticated": "authenticated_images",
  "raw/upload": "files",
  "video/upload": "videos"
};
var CloudinaryFile = class {
  constructor(publicID, cloudConfig = {}, urlConfig) {
    this.setPublicID(publicID);
    this.setCloudConfig(cloudConfig);
    this.setURLConfig(urlConfig);
  }
  /**
   * @description Sets the URL Config for this asset
   * @param urlConfig
   * @return {this}
   */
  setURLConfig(urlConfig) {
    this.urlConfig = new URLConfig_default(urlConfig);
    return this;
  }
  /**
   * @description Sets the Cloud Config for this asset
   * @param urlConfig
   * @return {this}
   */
  setCloudConfig(cloudConfig) {
    this.cloudName = cloudConfig.cloudName;
    this.apiKey = cloudConfig.apiKey;
    this.apiSecret = cloudConfig.apiSecret;
    this.authToken = cloudConfig.authToken;
    return this;
  }
  /**
   * @description Sets the public ID of the asset.
   * @param {string} publicID The public ID of the asset.
   * @return {this}
   */
  setPublicID(publicID) {
    this.publicID = publicID ? publicID.toString() : "";
    return this;
  }
  /**
   * @description Sets the delivery type of the asset.
   * @param {DELIVERY_TYPE | string} newType The type of the asset.
   * @return {this}
   */
  setDeliveryType(newType) {
    this.deliveryType = newType;
    return this;
  }
  /**
   * @description Sets the URL SEO suffix of the asset.
   * @param {string} newSuffix The SEO suffix.
   * @return {this}
   */
  setSuffix(newSuffix) {
    this.suffix = newSuffix;
    return this;
  }
  /**
   * @description Sets the signature of the asset.
   * @param {string} signature The signature.
   * @return {this}
   */
  setSignature(signature) {
    this.signature = signature;
    return this;
  }
  /**
   * @description Sets the version of the asset.
   * @param {string} newVersion The version of the asset.
   * @return {this}
   */
  setVersion(newVersion) {
    if (newVersion) {
      this.version = newVersion;
    }
    return this;
  }
  /**
   * @description Sets the asset type.
   * @param {string} newType The type of the asset.
   * @return {this}
   */
  setAssetType(newType) {
    if (newType) {
      this.assetType = newType;
    }
    return this;
  }
  sign() {
    return this;
  }
  /**
   * @description Serializes to URL string
   * @param overwriteOptions
   */
  toURL(overwriteOptions = {}) {
    return this.createCloudinaryURL(null, overwriteOptions.trackedAnalytics);
  }
  /**
   * @description Validate various options before attempting to create a URL
   * The function will throw in case a violation
   * @throws Validation errors
   */
  validateAssetForURLCreation() {
    if (typeof this.cloudName === "undefined") {
      throw "You must supply a cloudName when initializing the asset";
    }
    const suffixContainsDot = this.suffix && this.suffix.indexOf(".") >= 0;
    const suffixContainsSlash = this.suffix && this.suffix.indexOf("/") >= 0;
    if (suffixContainsDot || suffixContainsSlash) {
      throw "`suffix`` should not include . or /";
    }
  }
  /**
   * @description return an SEO friendly name for a combination of asset/delivery, some examples:
   * * image/upload -> images
   * * video/upload -> videos
   * If no match is found, return `{asset}/{delivery}`
   */
  getResourceType() {
    const assetType = handleAssetType(this.assetType);
    const deliveryType = handleDeliveryType(this.deliveryType);
    const hasSuffix = !!this.suffix;
    const regularSEOType = `${assetType}/${deliveryType}`;
    const shortSEOType = SEO_TYPES[`${assetType}/${deliveryType}`];
    const useRootPath = this.urlConfig.useRootPath;
    const shorten = this.urlConfig.shorten;
    if (useRootPath) {
      if (regularSEOType === "image/upload") {
        return "";
      } else {
        throw new Error(`useRootPath can only be used with assetType: 'image' and deliveryType: 'upload'. Provided: ${regularSEOType} instead`);
      }
    }
    if (shorten && regularSEOType === "image/upload") {
      return "iu";
    }
    if (hasSuffix) {
      if (shortSEOType) {
        return shortSEOType;
      } else {
        throw new Error(`URL Suffix only supported for ${Object.keys(SEO_TYPES).join(", ")}, Provided: ${regularSEOType} instead`);
      }
    }
    return regularSEOType;
  }
  getSignature() {
    if (this.signature) {
      return `s--${this.signature}--`;
    } else {
      return "";
    }
  }
  /**
   *
   * @description Creates a fully qualified CloudinaryURL
   * @return {string} CloudinaryURL
   * @throws Validation Errors
   */
  createCloudinaryURL(transformation, trackedAnalytics) {
    if (!this.publicID) {
      return "";
    }
    this.validateAssetForURLCreation();
    const prefix = getUrlPrefix(this.cloudName, this.urlConfig);
    const transformationString = transformation ? transformation.toString() : "";
    const version = getUrlVersion(this.publicID, this.version, this.urlConfig.forceVersion);
    const publicID = this.publicID;
    if (typeof transformation === "string") {
      const url = [prefix, this.getResourceType(), this.getSignature(), transformationString, version, publicID.replace(/,/g, "%2C"), this.suffix].filter((a) => a).join("/");
      return url;
    } else {
      const safeURL = [encodeURI(prefix), this.getResourceType(), this.getSignature(), encodeURI(transformationString), version, encodeURI(publicID).replace(/,/g, "%2C"), this.suffix && encodeURI(this.suffix)].filter((a) => a).join("/").replace(/\?/g, "%3F").replace(/=/g, "%3D");
      const shouldAddAnalytics = this.urlConfig.analytics !== false && !publicID.includes("?");
      let queryParamsString = "";
      if (typeof this.urlConfig.queryParams === "object") {
        try {
          const queryParams = new URLSearchParams(this.urlConfig.queryParams);
          if (shouldAddAnalytics) {
            queryParams.set("_a", getSDKAnalyticsSignature(trackedAnalytics));
          }
          queryParamsString = queryParams.toString();
        } catch (err) {
          console.error("Error: URLSearchParams is not available so the queryParams object cannot be parsed, please try passing as an already parsed string");
        }
      } else {
        queryParamsString = this.urlConfig.queryParams || "";
        if (shouldAddAnalytics) {
          queryParamsString += `${queryParamsString.length > 0 ? "&" : ""}_a=${getSDKAnalyticsSignature(trackedAnalytics)}`;
        }
      }
      if (queryParamsString) {
        return `${safeURL}?${queryParamsString}`;
      } else {
        return safeURL;
      }
    }
  }
};

// node_modules/@cloudinary/url-gen/assets/CloudinaryTransformable.js
var CloudinaryTransformable = class extends CloudinaryFile {
  constructor(publicID, cloudConfig, urlConfig, transformation) {
    super(publicID, cloudConfig, urlConfig);
    this.transformation = transformation;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.Animated} animated
   * @return {this}
   */
  animated(animated) {
    this.transformation.animated(animated);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.Border} border
   * @return {this}
   */
  border(border) {
    this.transformation.border(border);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.Reshape} reshape
   * @return {this}
   */
  reshape(reshape) {
    this.transformation.reshape(reshape);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.Resize} resize
   * @return {this}
   */
  resize(resize) {
    this.transformation.resize(resize);
    return this;
  }
  /**
   * @desc An alias to Action Delivery.quality
   * @param {string|number} quality
   * @return {this}
   */
  quality(quality) {
    this.addAction(new DeliveryFormatAction("q", quality));
    return this;
  }
  /**
   * @desc An alias to Action Delivery.format
   * @param {string} format
   * @return {this}
   */
  format(format) {
    this.addAction(new DeliveryFormatAction("f", format));
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.RoundCorners} roundCorners
   * @return {this}
   */
  roundCorners(roundCorners) {
    this.transformation.roundCorners(roundCorners);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @return {this}
   */
  overlay(overlayAction) {
    this.transformation.overlay(overlayAction);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.Variable} variableAction
   * @return {this}
   */
  addVariable(variableAction) {
    this.transformation.addVariable(variableAction);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.Condition} conditionalAction
   * @return {this}
   */
  conditional(conditionalAction) {
    this.transformation.conditional(conditionalAction);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.Effect} effect
   * @return {this}
   */
  effect(effect) {
    this.transformation.effect(effect);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.Adjust} action
   * @return {this}
   */
  adjust(action) {
    this.transformation.adjust(action);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.Rotate} rotate
   * @return {this}
   */
  rotate(rotate) {
    this.transformation.rotate(rotate);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.NamedTransformation} namedTransformation
   * @return {this}
   */
  namedTransformation(namedTransformation) {
    this.transformation.namedTransformation(namedTransformation);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.Delivery} deliveryAction
   * @return {this}
   */
  delivery(deliveryAction) {
    this.transformation.delivery(deliveryAction);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Qualifiers.color} color
   * @return {this}
   */
  backgroundColor(color) {
    this.transformation.backgroundColor(color);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.PSDTools} action
   * @return {this}
   */
  psdTools(action) {
    this.transformation.psdTools(action);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.Extract} action
   * @return {this}
   */
  extract(action) {
    this.transformation.extract(action);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Qualifiers.Flag | string} flagQualifier
   * @return {this}
   */
  addFlag(flagQualifier) {
    this.transformation.addFlag(flagQualifier);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.CustomFunction} customFunction
   * @return {this}
   */
  customFunction(customFunction) {
    this.transformation.customFunction(customFunction);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {SDK.Action | string} action
   * @return {this}
   */
  addAction(action) {
    this.transformation.addAction(action);
    return this;
  }
  /**
   * @description Extend your transformation with another transformation
   * @param { string | SDK.Transformation } tx
   */
  addTransformation(tx) {
    this.transformation.addTransformation(tx);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @return {string}
   */
  toString() {
    return this.transformation.toString();
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @return {this}
   */
  underlay(underlayAction) {
    this.transformation.underlay(underlayAction);
    return this;
  }
  toURL(overwriteOptions = {}) {
    return this.createCloudinaryURL(this.transformation, overwriteOptions === null || overwriteOptions === void 0 ? void 0 : overwriteOptions.trackedAnalytics);
  }
};

// node_modules/@cloudinary/url-gen/assets/CloudinaryImage.js
var CloudinaryImage = class extends CloudinaryTransformable {
  constructor(publicID, cloudConfig, urlConfig) {
    super(publicID, cloudConfig, urlConfig, new ImageTransformation());
  }
};

// node_modules/@cloudinary/url-gen/assets/CloudinaryVideo.js
var CloudinaryVideo = class extends CloudinaryTransformable {
  constructor(publicID, cloudConfig, urlConfig) {
    super(publicID, cloudConfig, urlConfig, new VideoTransformation());
    this.assetType = "video";
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.Transcode} action
   * @return {this}
   */
  transcode(action) {
    this.transformation.transcode(action);
    return this;
  }
  /**
   * @desc A proxy to {@link SDK.Transformation| Transformation} - Calls the same method contained in this.transformation
   * @param {Actions.VideoEdit} action
   * @return {this}
   */
  videoEdit(action) {
    this.transformation.videoEdit(action);
    return this;
  }
};

// node_modules/@cloudinary/url-gen/instance/Cloudinary.js
var Cloudinary = class {
  constructor(cloudinaryConfig) {
    if (cloudinaryConfig) {
      this.cloudinaryConfig = cloudinaryConfig;
    }
  }
  image(publicID) {
    return new CloudinaryImage(publicID, this.cloudinaryConfig.cloud, this.cloudinaryConfig.url);
  }
  video(publicID) {
    return new CloudinaryVideo(publicID, this.cloudinaryConfig.cloud, this.cloudinaryConfig.url);
  }
  setConfig(cloudinaryConfig) {
    this.cloudinaryConfig = cloudinaryConfig;
    return this;
  }
  getConfig() {
    return this.cloudinaryConfig;
  }
  extendConfig() {
  }
};

// src/app/Service/Cloudinary.service.ts
var _CloudinaryService = class _CloudinaryService {
  constructor() {
    this.cld = new Cloudinary({
      cloud: {
        cloudName: "dflz0gveu"
      }
    });
  }
  // Create a new CloudinaryImage instance.
  getImage(publicId, transformation) {
    const img = this.cld.image(publicId);
    if (transformation)
      img.namedTransformation(name(transformation));
    return img;
  }
};
_CloudinaryService.\u0275fac = function CloudinaryService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CloudinaryService)();
};
_CloudinaryService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CloudinaryService, factory: _CloudinaryService.\u0275fac, providedIn: "root" });
var CloudinaryService = _CloudinaryService;

export {
  WebsocketService,
  CloudinaryService
};
//# sourceMappingURL=chunk-H5CLOZ4O.js.map
