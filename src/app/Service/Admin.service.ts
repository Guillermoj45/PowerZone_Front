import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private token: string = sessionStorage.getItem('token') || '';

  constructor(private http: HttpClient) { }

    getReports(offset: number) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
        return this.http.get(`/api/admin?offset=${offset}`, {headers});
    }
}
