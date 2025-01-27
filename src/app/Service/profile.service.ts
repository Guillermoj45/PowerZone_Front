import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
