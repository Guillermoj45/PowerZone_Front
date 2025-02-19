import {
  HttpClient,
  HttpHeaders,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-A54Y6D4U.js";

// src/app/Service/profile-settings.service.ts
var _ProfileSettingsService = class _ProfileSettingsService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  getData(token) {
    const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
    return this.httpClient.post("https://powerzone-back-elk6.onrender.com/profile/getData", {}, { headers });
  }
  updateProfile(token, profile) {
    const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
    return this.httpClient.post("https://powerzone-back-elk6.onrender.com/profile/updateData", profile, { headers });
  }
  getProfileById(id) {
    return this.httpClient.get(`https://powerzone-back-elk6.onrender.com/profile/${id}`);
  }
  followUser(token, userId, followUserId) {
    const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
    return this.httpClient.post(`https://powerzone-back-elk6.onrender.com/profile/${userId}/follow/${followUserId}`, {}, { headers });
  }
  unfollowUser(token, userId, unfollowUserId) {
    const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
    return this.httpClient.post(`https://powerzone-back-elk6.onrender.com/profile/${userId}/unfollow/${unfollowUserId}`, {}, { headers });
  }
  isFollowing(token, userId, followUserId) {
    const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
    return this.httpClient.get(`https://powerzone-back-elk6.onrender.com/profile/${userId}/isFollowing/${followUserId}`, { headers });
  }
};
_ProfileSettingsService.\u0275fac = function ProfileSettingsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ProfileSettingsService)(\u0275\u0275inject(HttpClient));
};
_ProfileSettingsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProfileSettingsService, factory: _ProfileSettingsService.\u0275fac, providedIn: "root" });
var ProfileSettingsService = _ProfileSettingsService;

export {
  ProfileSettingsService
};
//# sourceMappingURL=chunk-QVSGVATM.js.map
