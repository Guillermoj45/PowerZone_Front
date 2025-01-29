import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Report } from 'src/app/Models/Report';
import {ProfileWarningBan} from "../Models/ProfileWarningBan";

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
        return this.http.get<ProfileWarningBan[]>(`/api/admin/userWarning?offset=${offset}`, {headers});
    }

    getUserBanned(offset: number) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
        return this.http.get<ProfileWarningBan[]>(`/api/admin/userBanned?offset=${offset}`, {headers});
    }
}
