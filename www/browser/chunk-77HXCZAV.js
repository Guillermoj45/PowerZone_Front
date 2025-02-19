import {
  environment
} from "./chunk-AZ27F32N.js";
import {
  HttpClient,
  HttpHeaders,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-A54Y6D4U.js";

// src/app/Service/Post.service.ts
var _PostService = class _PostService {
  constructor(http) {
    this.http = http;
    this.apiUrl = environment.apiUrl + "/post";
  }
  getHeaders(token) {
    return new HttpHeaders({
      "Authorization": `Bearer ${token}`
    });
  }
  getUserIdByPostId(token, postId) {
    return this.http.get(`${this.apiUrl}/${postId}/userId`, {
      headers: this.getHeaders(token)
    });
  }
  getPostsByPattern(pattern) {
    const token = sessionStorage.getItem("token") || "";
    const headers = this.getHeaders(token);
    return this.http.get(`${this.apiUrl}/pattern`, { headers, params: { pattern } });
  }
  getPostById(token, postId) {
    return this.http.get(environment.apiUrl + `/post/${postId}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }
  getFollowedPosts(token) {
    return this.http.get(`${this.apiUrl}/followed`, { headers: this.getHeaders(token) });
  }
  getPostsWithMostLikes(token) {
    return this.http.get(`${this.apiUrl}/most-liked`, { headers: this.getHeaders(token) });
  }
  getPostsWithMostComments(token) {
    return this.http.get(`${this.apiUrl}/most-commented`, { headers: this.getHeaders(token) });
  }
  reportPost(postId, reason) {
    const token = sessionStorage.getItem("token") || "";
    let mesage = {
      postId,
      contend: reason
    };
    return this.http.post(`${this.apiUrl}/report`, mesage, { headers: this.getHeaders(token) });
  }
  createPost(token, formData) {
    return this.http.post(`${this.apiUrl}/create`, formData, { headers: this.getHeaders(token) });
  }
  deletePost(token, post) {
    return this.http.request("delete", `${this.apiUrl}/delete`, { body: post, headers: this.getHeaders(token) });
  }
  getAllPosts(token) {
    return this.http.get(`${this.apiUrl}/all`, { headers: this.getHeaders(token) });
  }
  getUserPostsById(token, userId) {
    const headers = this.getHeaders(token);
    return this.http.get(`${this.apiUrl}/userposts/${userId}`, { headers });
  }
  getUserPosts(token) {
    return this.http.get(`${this.apiUrl}/userposts`, { headers: this.getHeaders(token) });
  }
  savePost(token, postId) {
    return this.http.post(`${this.apiUrl}/save`, { postId }, { headers: this.getHeaders(token) });
  }
  unsavePost(token, postId) {
    return this.http.post(`${this.apiUrl}/unsave`, { postId }, { headers: this.getHeaders(token) });
  }
  likePost(token, post) {
    return this.http.post(`${this.apiUrl}/like`, post, { headers: this.getHeaders(token) });
  }
  unlikePost(token, postId) {
    return this.http.post(`${this.apiUrl}/unlike`, postId, { headers: this.getHeaders(token) });
  }
  hasLikedPost(token, postId) {
    return this.http.post(`${this.apiUrl}/hasLiked`, postId, {
      headers: this.getHeaders(token)
    });
  }
  hasSavedPost(token, postId) {
    return this.http.post(`${this.apiUrl}/hasSaved`, postId, {
      headers: this.getHeaders(token)
    });
  }
  sharePost(token, postId) {
    return this.http.post(`${this.apiUrl}/share`, { postId }, { headers: this.getHeaders(token) });
  }
  getAllSavedPosts(token) {
    return this.http.get(`${this.apiUrl}/user/saved`, { headers: this.getHeaders(token) });
  }
  isNewUser(token) {
    const headers = new HttpHeaders({ Authorization: token });
    return this.http.post(environment.apiUrl + "/auth/isTutorialComplete", {}, { headers });
  }
  changeUserStatus(token) {
    const headers = new HttpHeaders({ Authorization: token });
    return this.http.post(environment.apiUrl + "/auth/tutorialComplete", {}, { headers });
  }
};
_PostService.\u0275fac = function PostService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PostService)(\u0275\u0275inject(HttpClient));
};
_PostService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PostService, factory: _PostService.\u0275fac, providedIn: "root" });
var PostService = _PostService;

export {
  PostService
};
//# sourceMappingURL=chunk-77HXCZAV.js.map
