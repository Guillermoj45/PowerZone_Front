import {
  environment
} from "./chunk-AZ27F32N.js";
import {
  HttpClient,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-A54Y6D4U.js";

// src/app/Service/auth.service.ts
var _AuthService = class _AuthService {
  constructor(http) {
    this.http = http;
    this.currentUser = null;
  }
  // Iniciar sesión y manejar el almacenamiento
  login(loginData) {
    return this.http.post(environment.apiUrl + "/auth/login", loginData).pipe(tap((response) => {
      console.log("Respuesta del servidor:", response);
      const token = response.token;
      if (token) {
        sessionStorage.setItem("token", token);
      }
      const username = response.username;
      const nickname = response.nickname;
      if (username && nickname) {
        localStorage.setItem("username", username);
        localStorage.setItem("nickname", nickname);
      }
      this.currentUser = { username, nickname };
    }));
  }
  // Obtener el token desde sessionStorage
  getToken() {
    return sessionStorage.getItem("token");
  }
  // Cerrar sesión eliminando datos del almacenamiento
  logout() {
    sessionStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("nickname");
    this.currentUser = null;
  }
};
_AuthService.\u0275fac = function AuthService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(HttpClient));
};
_AuthService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
var AuthService = _AuthService;

export {
  AuthService
};
//# sourceMappingURL=chunk-Z233NFIF.js.map
