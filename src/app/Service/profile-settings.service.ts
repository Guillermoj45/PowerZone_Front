import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProfileSetting} from "../Models/ProfileSetting";

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
    followUser(token: string, userId: number, followUserId: number): Observable<string> {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.httpClient.post<string>(`/api/profile/${userId}/follow/${followUserId}`, {}, { headers });
    }

    unfollowUser(token: string, userId: number, unfollowUserId: number): Observable<string> {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.httpClient.post<string>(`/api/profile/${userId}/unfollow/${unfollowUserId}`, {}, { headers });
    }

    isFollowing(token: string, userId: number, followUserId: number): Observable<boolean> {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.httpClient.get<boolean>(`/api/profile/${userId}/isFollowing/${followUserId}`, { headers });
    }


}
