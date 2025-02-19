import {
  HttpClient,
  HttpHeaders,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-A54Y6D4U.js";

// src/app/Service/profile.service.ts
var _RegistroService = class _RegistroService {
  constructor(http) {
    this.http = http;
  }
  registerUser(user) {
    return this.http.post("https://powerzone-back-elk6.onrender.com/auth/create", user);
  }
  login(login) {
    return this.http.post("https://powerzone-back-elk6.onrender.com/auth/login", login);
  }
  isBanned(token) {
    const headers = new HttpHeaders({ Authorization: token });
    return this.http.get("https://powerzone-back-elk6.onrender.com/auth/isBanned", { headers });
  }
};
_RegistroService.\u0275fac = function RegistroService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RegistroService)(\u0275\u0275inject(HttpClient));
};
_RegistroService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RegistroService, factory: _RegistroService.\u0275fac, providedIn: "root" });
var RegistroService = _RegistroService;
var _ProfileService = class _ProfileService {
  constructor(http) {
    this.http = http;
    this.baseUrl = "https://powerzone-back-elk6.onrender.com/profile";
  }
  getProfile(token) {
    const headers = new HttpHeaders({ Authorization: token });
    return this.http.post(`${this.baseUrl}/getData`, {}, { headers });
  }
  updateProfile(profile, token) {
    const headers = new HttpHeaders({ Authorization: token });
    return this.http.put(`${this.baseUrl}/updateData`, profile, { headers });
  }
  searchProfiles(query) {
    return this.http.get(`${this.baseUrl}/search?query=${query}`);
  }
  searchProfilesById(id) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  isAdmin() {
    const headers = new HttpHeaders().set("Authorization", `Bearer ${sessionStorage.getItem("token")}`);
    return this.http.get("https://powerzone-back-elk6.onrender.com/auth/ImAdmin", { headers });
  }
  getRecomendations() {
    const headers = new HttpHeaders().set("Authorization", `Bearer ${sessionStorage.getItem("token")}`);
    return this.http.get("https://powerzone-back-elk6.onrender.com/profile/recommended", { headers });
  }
};
_ProfileService.\u0275fac = function ProfileService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ProfileService)(\u0275\u0275inject(HttpClient));
};
_ProfileService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProfileService, factory: _ProfileService.\u0275fac, providedIn: "root" });
var ProfileService = _ProfileService;

export {
  RegistroService,
  ProfileService
};
//# sourceMappingURL=chunk-RFIO26KO.js.map
