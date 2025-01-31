import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { IonicModule, ToastController } from '@ionic/angular';
import { ProfileSettingsService } from "../../Service/profile-settings.service";
import { ProfileSetting } from "../../Models/ProfileSetting";
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { colorWandOutline } from 'ionicons/icons';

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
    selectedAvatar: string | null = null; // Para almacenar la imagen seleccionada

    constructor(private profileSettings: ProfileSettingsService, private toastController: ToastController) { addIcons({colorWandOutline})}

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
    @ViewChild('fileInput') fileInput!: ElementRef;

    triggerFileInput() {
        this.fileInput.nativeElement.click();
    }


    async updateProfile() {
        const isModified =
            this.profile.nickName !== this.originalProfile.nickName ||
            this.profile.name !== this.originalProfile.name ||
            this.profile.email !== this.originalProfile.email ||
            this.profile.bornDate !== this.originalProfile.bornDate ||
            this.profile.avatar !== this.originalProfile.avatar;

        if (isModified) {
            const token = sessionStorage.getItem('token');
            if (token) {
                if (this.profile.name && this.profile.email && this.profile.nickName && this.profile.bornDate) {
                    if (this.selectedAvatar) {
                        this.profile.avatar = this.selectedAvatar; // Actualizar el avatar si se seleccionó uno nuevo
                    }
                    console.log('Sending profile data to backend:', this.profile);
                    this.profileSettings.updateProfile(token, this.profile).subscribe(response => {
                        console.log('Profile updated successfully', response);
                        this.presentToast('Cambios guardados');
                        this.originalProfile = { ...this.profile }; // Actualizar la referencia del perfil original
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

    onFileSelected(event: any) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                this.selectedAvatar = reader.result as string; // Guardar la imagen seleccionada temporalmente
                this.profile.avatar = this.selectedAvatar; // Mostrar la nueva imagen en la vista previa
                console.log('File converted to Base64:', this.selectedAvatar);
            };
            reader.readAsDataURL(file);
        }
    }

}
