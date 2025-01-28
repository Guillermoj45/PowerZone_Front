import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../Models/Comment';

@Injectable({
    providedIn: 'root'
})
export class CommentService {
    private apiUrl = '/api/comments';

    constructor(private http: HttpClient) {}

    private getHeaders(token: string): HttpHeaders {
        return new HttpHeaders({
            'Authorization': token
        });
    }

    createComment(token: string, comment: Comment): Observable<Comment> {
        return this.http.post<Comment>(`${this.apiUrl}/create`, comment, { headers: this.getHeaders(token) });
    }

    deleteComment(token: string, comment: Comment): Observable<void> {
        return this.http.request<void>('delete', `${this.apiUrl}/delete`, { body: comment, headers: this.getHeaders(token) });
    }

    getCommentByUserName(comment: Comment): Observable<void> {
        return this.http.post<void>(`${this.apiUrl}/getuser`, comment);
    }
}
