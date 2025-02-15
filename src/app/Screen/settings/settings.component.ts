import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IonicModule, ToastController} from '@ionic/angular';
import {ProfileSettingsService} from "../../Service/profile-settings.service";
import {ProfileSetting} from "../../Models/ProfileSetting";
import {FormsModule} from "@angular/forms";
import {CommonModule, formatDate} from '@angular/common';
import {addIcons} from 'ionicons';
import {colorWandOutline} from 'ionicons/icons';
import {LoadingController} from "@ionic/angular/standalone";

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

    constructor(private profileSettings: ProfileSettingsService,private loadingController: LoadingController,private toastController: ToastController) { addIcons({colorWandOutline})}

    ngOnInit() {
        const token = sessionStorage.getItem('token');
        if (token) {
            this.profileSettings.getData(token).subscribe((data: ProfileSetting) => {
                this.originalProfile = { ...data }; // Guardar original sin formatear
                if (data.bornDate) {
                    data.bornDate = formatDate(data.bornDate, 'dd/MM/yyyy', 'en'); // Formatear para mostrar
                }
                this.profile = data;
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
        const token = sessionStorage.getItem('token');
        if (token) {
            if (this.profile.name && this.profile.email && this.profile.nickName && this.profile.bornDate) {
                const isModified = JSON.stringify(this.profile) !== JSON.stringify(this.originalProfile);

                if (isModified) {
                    const loading = await this.loadingController.create({
                        message: 'Guardando cambios...',
                    });
                    await loading.present();

                    // Regresar al formato original antes de enviar al backend
                    const dateParts = this.profile.bornDate.split('/');
                    this.profile.bornDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
                    this.profileSettings.updateProfile(token, this.profile).subscribe(async response => {
                        this.presentToast('Cambios guardados');
                        await loading.dismiss();
                        this.originalProfile = { ...this.profile };
                        this.profile.bornDate = formatDate(this.profile.bornDate!, 'dd/MM/yyyy', 'en');
                    }, async error => {
                        console.error('Error updating profile', error);
                        await loading.dismiss();
                        this.presentToast('Error al guardar los cambios');
                    });
                } else {
                    this.presentToast('No se ha modificado ningún campo');
                }
            } else {
                this.presentToast('Todos los campos deben ser completados');
            }
        } else {
            this.presentToast('Error de autenticación');
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
