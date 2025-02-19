import {
  HttpClient,
  HttpHeaders,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-A54Y6D4U.js";

// src/app/Service/Admin.service.ts
var _AdminService = class _AdminService {
  constructor(http) {
    this.http = http;
    this.token = sessionStorage.getItem("token") || "";
  }
  getReports(offset) {
    const headers = new HttpHeaders().set("Authorization", `Bearer ${this.token}`);
    return this.http.get(`https://powerzone-back-elk6.onrender.com/admin?offset=${offset}`, { headers });
  }
  getUserWarnings(offset) {
    const headers = new HttpHeaders().set("Authorization", `Bearer ${this.token}`);
    return this.http.get(`https://powerzone-back-elk6.onrender.com/admin/userWarning?offser=${offset}`, { headers });
  }
  getUserBanned(offset) {
    const headers = new HttpHeaders().set("Authorization", `Bearer ${this.token}`);
    return this.http.get(`https://powerzone-back-elk6.onrender.com/admin/userBanned?offset=${offset}`, { headers });
  }
  putWarning(id, state) {
    const headers = new HttpHeaders().set("Authorization", `Bearer ${this.token}`);
    let message = {
      id,
      state
    };
    console.log(message);
    return this.http.put(`https://powerzone-back-elk6.onrender.com/admin/report`, message, { headers });
  }
  verifyAdmin() {
    const headers = new HttpHeaders().set("Authorization", `Bearer ${this.token}`);
    return this.http.get(`https://powerzone-back-elk6.onrender.com/admin/isAdmin`, { headers });
  }
};
_AdminService.\u0275fac = function AdminService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AdminService)(\u0275\u0275inject(HttpClient));
};
_AdminService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminService, factory: _AdminService.\u0275fac, providedIn: "root" });
var AdminService = _AdminService;

export {
  AdminService
};
//# sourceMappingURL=chunk-LMVSORKF.js.map
