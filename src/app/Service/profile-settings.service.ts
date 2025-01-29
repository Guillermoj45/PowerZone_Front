import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfileSetting } from "../Models/ProfileSetting";

@Injectable({
    providedIn: 'root'
})
export class ProfileSettingsService {

    constructor(private httpClient: HttpClient) { }

    getData(token: string): Observable<ProfileSetting> {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.httpClient.post<ProfileSetting>('/api/profile/getData', {}, { headers });
    }

    updateProfile(token: string, profile: ProfileSetting): Observable<any> {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.httpClient.post('/api/profile/updateData', profile, { headers });
    }

    getProfileById(id: string) {
        return this.httpClient.get<ProfileSetting>(`/api/profile/${id}`);
    }

}
