import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import {MegaNotification} from "../Models/MegaNotification";

@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    private apiUrl = '/api/notification';
    private token = sessionStorage.getItem('token');

    constructor(private http: HttpClient) {
    }

    private getHeaders(): HttpHeaders {

        return new HttpHeaders({
            'Authorization': `Bearer ${this.token}`,
        });
    }

    public getNotifications(): Observable<MegaNotification[]> {
        return this.http.get<MegaNotification[]>(`${this.apiUrl}`, { headers: this.getHeaders() });
    }
}
