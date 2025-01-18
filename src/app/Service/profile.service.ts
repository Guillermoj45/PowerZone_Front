import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Profile } from '../Models/Profile';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    private apiUrl = 'https://your-api-url.com/profile'; // Replace with your API URL

    constructor(private http: HttpClient) { }

    getProfile(token: string): Observable<Profile | null> {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.http.get<Profile>(this.apiUrl, { headers }).pipe(
            map(profile => profile || null),
            catchError(() => of(null))
        );
    }
}
