import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class RecuperacionServiceService {
    private baseUrl = '/api/api/auth'; // Proxy configurado
  constructor(private http: HttpClient) { }

    sendEmail(email: string): Observable<any> {
        return this.http.post<any>(environment.apiUrl + `/api/auth/forgot-password?email=${email}`, null);
    }

    sendNewPassword(code: string, newPassword:string): Observable<any> {
        return this.http.post<any>(environment.apiUrl + `/api/auth/reset-password?code=${code}&newPassword=${newPassword}`, null);
    }
}
