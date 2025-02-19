import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {ProfileService} from "./profile.service";
import {environment} from "../../environments/environment.prod";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private currentUser: { username: string, nickname: string } | null = null;

    constructor(
        private http: HttpClient,
    ) {}

    // Iniciar sesión y manejar el almacenamiento
    login(loginData: { email: string, password: string }): Observable<any> {
        return this.http.post<any>(environment.apiUrl + '/auth/login', loginData).pipe(
            tap(response => {
                console.log('Respuesta del servidor:', response); // Verifica la respuesta

                // Guardar el token en sessionStorage
                const token = response.token;
                if (token) {
                    sessionStorage.setItem('token', token);
                }

                // Guardar username y nickname en localStorage
                const username = response.username;
                const nickname = response.nickname;
                if (username && nickname) {
                    localStorage.setItem('username', username);
                    localStorage.setItem('nickname', nickname);
                }

                // Actualizar la información actual del usuario
                this.currentUser = { username, nickname };
            })
        );
    }


    // Obtener el token desde sessionStorage
    getToken(): string | null {
        return sessionStorage.getItem('token');
    }

    // Cerrar sesión eliminando datos del almacenamiento
    logout(): void {
        sessionStorage.removeItem('token'); // Eliminar token de sessionStorage
        localStorage.removeItem('username'); // Eliminar username de localStorage
        localStorage.removeItem('nickname'); // Eliminar nickname de localStorage
        this.currentUser = null; // Restablecer la información actual
    }
}
