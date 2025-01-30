import { Component, OnInit } from '@angular/core';
import { IonicModule, ToastController } from '@ionic/angular';
import { ProfileSettingsService } from "../../Service/profile-settings.service";
import { ProfileSetting } from "../../Models/ProfileSetting";
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
    standalone: true,
    imports: [
        IonicModule,
        FormsModule,
        CommonModule
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
    originalProfile!: ProfileSetting; // Para comparar los valores iniciales con los actuales

    constructor(private profileSettings: ProfileSettingsService, private toastController: ToastController) { }

    ngOnInit() {
        const token = sessionStorage.getItem('token');
        if (token) {
            this.profileSettings.getData(token).subscribe((data: ProfileSetting) => {
                this.profile = data;
                this.originalProfile = { ...data }; // Guardamos una copia del perfil original
            });
        } else {
            console.error('Token is null');
        }
    }

    async updateProfile() {
        const isModified =
            this.profile.nickName !== this.originalProfile.nickName ||
            this.profile.name !== this.originalProfile.name ||
            this.profile.email !== this.originalProfile.email ||
            this.profile.bornDate !== this.originalProfile.bornDate;

        if (isModified) {
            const token = sessionStorage.getItem('token');
            if (token) {
                if (this.profile.name && this.profile.email && this.profile.nickName && this.profile.bornDate) {
                    console.log('Sending profile data to backend:', this.profile);
                    this.profileSettings.updateProfile(token, this.profile).subscribe(response => {
                        console.log('Profile updated successfully', response);
                        this.presentToast('Cambios guardados');
                    }, error => {
                        console.error('Error updating profile', error);
                        this.presentToast('Error al guardar los cambios');
                    });
                } else {
                    console.error('All profile fields must be filled');
                    this.presentToast('Todos los campos deben ser completados');
                }
            } else {
                console.error('Token is null');
                this.presentToast('Error de autenticación');
            }
        } else {
            this.presentToast('No se ha modificado ningún campo');
        }
    }

    // Mostrar el mensaje de toast
    async presentToast(message: string) {
        const toast = await this.toastController.create({
            message: message,
            duration: 2000
        });
        toast.present();
    }
}
