import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../Models/Post';
import { PostDto } from '../Models/PostDto';
@Injectable({
    providedIn: 'root'
})
export class PostService {
    private apiUrl = '/api/post';

    constructor(private http: HttpClient) {}

    private getHeaders(token: string): HttpHeaders {
        return new HttpHeaders({
            'Authorization': `Bearer ${token}`,

        });
    }

    getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(this.apiUrl);
    }

    getPostById(id: number): Observable<Post> {
        return this.http.get<Post>(`${this.apiUrl}/${id}`);
    }

    createPost(token: string, post: Post, file?: File): Observable<PostDto> {
        const formData: FormData = new FormData();
        formData.append('post', new Blob([JSON.stringify(post)], { type: 'application/json' }));
        if (file) {
            formData.append('file', file);
        }

        return this.http.post<PostDto>(`${this.apiUrl}/create`, formData, { headers: this.getHeaders(token) });
    }



    deletePost(token: string, post: Post): Observable<void> {
        return this.http.request<void>('delete', `${this.apiUrl}/delete`, { body: post, headers: this.getHeaders(token) });
    }
    getAllPosts(token: string): Observable<PostDto[]> {
        return this.http.get<PostDto[]>(`${this.apiUrl}/all`, { headers: this.getHeaders(token) });
    }
    getBestPosts(token: string): Observable<PostDto[]> {
        return this.http.get<PostDto[]>(`${this.apiUrl}/best`, { headers: this.getHeaders(token) });
    }

    getUserPosts(token: string): Observable<Post[]> {
        return this.http.get<Post[]>(`${this.apiUrl}/userposts`, { headers: this.getHeaders(token) });
    }

    savePost(token: string, post: Post): Observable<string> {
        return this.http.post<string>(`${this.apiUrl}/save`, post, { headers: this.getHeaders(token) });
    }

    unsavePost(token: string, post: Post): Observable<string> {
        return this.http.post<string>(`${this.apiUrl}/unsave`, post, { headers: this.getHeaders(token) });
    }

    likePost(token: string, post: number | undefined): Observable<string> {
        return this.http.post<string>(`${this.apiUrl}/like`, post, { headers: this.getHeaders(token) });
    }

    unlikePost(token: string, post: Post): Observable<string> {
        return this.http.post<string>(`${this.apiUrl}/unlike`, post, { headers: this.getHeaders(token) });
    }

    sharePost(token: string, postId: number): Observable<string> {
        return this.http.post<string>(`${this.apiUrl}/share`, { postId }, { headers: this.getHeaders(token) });
    }
}
