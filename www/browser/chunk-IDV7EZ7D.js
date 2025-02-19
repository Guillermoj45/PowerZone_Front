import {
  environment
} from "./chunk-AZ27F32N.js";
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
    return this.httpClient.post(environment.apiUrl + "/profile/getData", {}, { headers });
  }
  updateProfile(token, profile) {
    const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
    return this.httpClient.post(environment.apiUrl + "/profile/updateData", profile, { headers });
  }
  getProfileById(id) {
    return this.httpClient.get(environment.apiUrl + `/profile/${id}`);
  }
  followUser(token, userId, followUserId) {
    const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
    return this.httpClient.post(environment.apiUrl + `/profile/${userId}/follow/${followUserId}`, {}, { headers });
  }
  unfollowUser(token, userId, unfollowUserId) {
    const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
    return this.httpClient.post(environment.apiUrl + `/profile/${userId}/unfollow/${unfollowUserId}`, {}, { headers });
  }
  isFollowing(token, userId, followUserId) {
    const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
    return this.httpClient.get(environment.apiUrl + `/profile/${userId}/isFollowing/${followUserId}`, { headers });
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
//# sourceMappingURL=chunk-IDV7EZ7D.js.map
