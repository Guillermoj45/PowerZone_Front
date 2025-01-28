import { Component, OnInit } from '@angular/core';
import { IonicModule } from "@ionic/angular";
import { ProfileSettingsService } from "../../Service/profile-settings.service";
import { ProfileSetting } from "../../Models/ProfileSetting";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
    standalone: true,
    imports: [
        IonicModule,
        FormsModule
    ]
})
export class SettingsComponent implements OnInit {
    profile: ProfileSetting = {
        nickName: '',
        name: '',
        email: '',
        bornDate: '',
        avatar: ''
    };

    constructor(private profileSettings: ProfileSettingsService) { }

    ngOnInit() {
        const token = sessionStorage.getItem('token');
        if (token) {
            this.profileSettings.getData(token).subscribe((data: ProfileSetting) => {
                this.profile = data;
            });
        } else {
            console.error('Token is null');
        }
    }

    updateProfile() {
        console.log(this.profile.nickName);
        console.log(
            this.profile.name,
            this.profile.email,
            this.profile.nickName,
            this.profile.bornDate
        );
        const token = sessionStorage.getItem('token');
        if (token) {
            if (this.profile.name && this.profile.email && this.profile.nickName && this.profile.bornDate) {
                console.log('Sending profile data to backend:', this.profile);
                this.profileSettings.updateProfile(token, this.profile).subscribe(response => {
                    console.log('Profile updated successfully', response);
                }, error => {
                    console.error('Error updating profile', error);
                });
            } else {
                console.error('All profile fields must be filled');
            }
        } else {
            console.error('Token is null');
        }
    }
}
