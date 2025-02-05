import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from '../Models/Register';
import { Login } from '../Models/Login';

@Injectable({
    providedIn: 'root'
})
export class RegistroService {
    constructor(private http: HttpClient) { }

    registerUser(user: Register): Observable<any> {
        return this.http.post<any>('/api/auth/create', user);
    }

    login(login: Login): Observable<any> {
        return this.http.post<any>('/api/auth/login', login);
    }
}

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    private baseUrl = '/api/profile'; // Proxy configurado

    constructor(private http: HttpClient) {}

    getProfile(token: string): Observable<any> {
        const headers = new HttpHeaders({ Authorization: token });
        return this.http.post<any>(`${this.baseUrl}/getData`, {}, { headers });
    }

    updateProfile(profile: any, token: string): Observable<any> {
        const headers = new HttpHeaders({ Authorization: token });
        return this.http.put<any>(`${this.baseUrl}/updateData`, profile, { headers });
    }

    searchProfiles(query: string): Observable<any[]> {
        return this.http.get<any[]>(`${this.baseUrl}/search?query=${query}`);
    }

    searchProfilesById(id: string): Observable<any[]> {
        return this.http.get<any[]>(`${this.baseUrl}/${id}`);
    }

    isAdmin() {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${sessionStorage.getItem('token')}`);
      return this.http.get<boolean>('/api/auth/ImAdmin', {headers})
    }
}

