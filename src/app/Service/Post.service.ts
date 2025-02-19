import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../Models/Post';
import {PostDto} from '../Models/PostDto';
import {environment} from "../../environments/environment.prod";

@Injectable({
    providedIn: 'root'
})
export class PostService {
    private apiUrl = environment.apiUrl + '/post';

    constructor(private http: HttpClient) {}

    private getHeaders(token: string): HttpHeaders {
        return new HttpHeaders({
            'Authorization': `Bearer ${token}`,

        });
    }
  getUserIdByPostId(token: string, postId: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/${postId}/userId`, {
      headers: this.getHeaders(token)
    });
  }

  getPostsByPattern(pattern: string): Observable<PostDto[]> {
    const token = sessionStorage.getItem('token') || '';
    const headers = this.getHeaders(token);
    return this.http.get<PostDto[]>(`${this.apiUrl}/pattern`, { headers, params: { pattern } });
  }
    getPostById(token: string, postId: number): Observable<PostDto> {
        return this.http.get<PostDto>(environment.apiUrl + `/post/${postId}`, {
            headers: { Authorization: `Bearer ${token}` }
        });
    }
    getFollowedPosts(token: string): Observable<PostDto[]> {
        return this.http.get<PostDto[]>(`${this.apiUrl}/followed`, { headers: this.getHeaders(token) });
    }
    getPostsWithMostLikes(token: string): Observable<PostDto[]> {
      return this.http.get<PostDto[]>(`${this.apiUrl}/most-liked`, { headers: this.getHeaders(token) });
    }

    getPostsWithMostComments(token: string): Observable<PostDto[]> {
      return this.http.get<PostDto[]>(`${this.apiUrl}/most-commented`, { headers: this.getHeaders(token) });
    }

    reportPost(postId: number, reason: string): Observable<void> {
      const token = sessionStorage.getItem('token') || '';
      let mesage =  {
        postId: postId,
        contend: reason
      }
        return this.http.post<void>(`${this.apiUrl}/report`, mesage, { headers: this.getHeaders(token) });
    }

    createPost(token: string, formData: FormData): Observable<PostDto> {
        return this.http.post<PostDto>(`${this.apiUrl}/create`, formData, { headers: this.getHeaders(token) });
    }

    deletePost(token: string, post: Post): Observable<void> {
        return this.http.request<void>('delete', `${this.apiUrl}/delete`, { body: post, headers: this.getHeaders(token) });
    }
    getAllPosts(token: string): Observable<PostDto[]> {
        return this.http.get<PostDto[]>(`${this.apiUrl}/all`, { headers: this.getHeaders(token) });
    }

    getUserPostsById(token: string, userId: string): Observable<PostDto[]> {
        const headers = this.getHeaders(token);
        return this.http.get<PostDto[]>(`${this.apiUrl}/userposts/${userId}`, { headers });
    }
    getUserPosts(token: string): Observable<PostDto[]> {
        return this.http.get<PostDto[]>(`${this.apiUrl}/userposts`, { headers: this.getHeaders(token) });
    }

    savePost(token: string, postId: number| undefined): Observable<string> {
        return this.http.post<string>(`${this.apiUrl}/save`, { postId }, { headers: this.getHeaders(token) });
    }

    unsavePost(token: string, postId: number): Observable<string> {
        return this.http.post<string>(`${this.apiUrl}/unsave`, { postId }, { headers: this.getHeaders(token) });
    }
    likePost(token: string, post: number | undefined): Observable<string> {
        return this.http.post<string>(`${this.apiUrl}/like`, post, { headers: this.getHeaders(token) });
    }

    unlikePost(token: string, postId: number) {
        return this.http.post(`${this.apiUrl}/unlike`, postId, {headers:   this.getHeaders(token) });
    }
    hasLikedPost(token: string, postId: number): Observable<boolean> {
        return this.http.post<boolean>(`${this.apiUrl}/hasLiked`, postId, {
            headers: this.getHeaders(token)
        });
    }
    hasSavedPost(token: string, postId: number): Observable<boolean> {
        return this.http.post<boolean>(`${this.apiUrl}/hasSaved`, postId, {
            headers: this.getHeaders(token)
        });
    }
    sharePost(token: string, postId: number): Observable<string> {
        return this.http.post<string>(`${this.apiUrl}/share`, { postId }, { headers: this.getHeaders(token) });
    }


    getAllSavedPosts(token: string): Observable<PostDto[]> {
        return this.http.get<PostDto[]>(`${this.apiUrl}/user/saved`, { headers: this.getHeaders(token) });
    }

    isNewUser(token: string): Observable<boolean> {
        const headers = new HttpHeaders({ Authorization: token });
        return this.http.post<boolean>(environment.apiUrl + '/auth/isTutorialComplete', {},{ headers });
    }

    changeUserStatus(token: string): Observable<void> {
        const headers = new HttpHeaders({ Authorization: token });
        return this.http.post<void>(environment.apiUrl + '/auth/tutorialComplete', {}, { headers });
    }

}
