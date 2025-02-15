import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Report} from 'src/app/Models/Report';
import {ProfileWarningBan} from "../Models/ProfileWarningBan";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private token: string = sessionStorage.getItem('token') || '';

  constructor(private http: HttpClient) { }

  getReports(offset: number) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
      return this.http.get<Report[]>(`/api/admin?offset=${offset}`, {headers});
  }

  getUserWarnings(offset: number) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
      return this.http.get<ProfileWarningBan[]>(`/api/admin/userWarning?offser=${offset}`, {headers});
  }

  getUserBanned(offset: number) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
      return this.http.get<ProfileWarningBan[]>(`/api/admin/userBanned?offset=${offset}`, {headers});
  }

  putWarning(id: number, state: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    let message =  {
      id: id,
      state: state
    }
    console.log(message);
    return this.http.put(`/api/admin/report`, message, {headers});
  }

  verifyAdmin(): Observable<boolean> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get<boolean>(`/api/admin/isAdmin`, { headers });
  }
}
