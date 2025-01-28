import { Component } from '@angular/core';
import { RegistroService } from '../../Service/profile.service';
import { Register } from '../../Models/Register';
import { IonicModule, AlertController } from '@ionic/angular';
import { CarrouselComponent } from '../../Component/carrousel/carrousel.component';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    imports: [
        IonicModule,
        CarrouselComponent,
        FormsModule,
        NgIf, RouterModule
    ],
    styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
    selectedFile: File | null = null;
    register: Register = {
        nickname: '',
        name: '',
        email: '',
        bornDate: '',
        password: '',
        avatar: ' ',
    };

    constructor(
        private registroService: RegistroService,
        private router: Router,
        private alertController: AlertController
    ) {}

    isNicknameValid = true;
    isNameValid = true;
    isEmailValid = true;
    isPasswordValid = true;

    validateNickname() {
        this.isNicknameValid = this.register.nickname.trim() !== '';
    }

    validateName() {
        const namePattern = /^[^\d]*$/;
        this.isNameValid = namePattern.test(this.register.name) && this.register.name.trim() !== '';
    }

    validateEmail() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        this.isEmailValid = emailPattern.test(this.register.email) && this.register.email.trim() !== '';
    }

    validatePassword() {
        this.isPasswordValid = this.register.password.length >= 8 && this.register.password.trim() !== '';
    }

    async showAlert() {
        const alert = await this.alertController.create({
            header: 'Error',
            message: 'Hay campos vacíos o con información errónea.',
            buttons: ['OK']
        });
        await alert.present();
    }

    onSubmit() {
        this.validateNickname();
        this.validateName();
        this.validateEmail();
        this.validatePassword();

        if (this.isFormValid()) {
            this.registroService.registerUser(this.register).subscribe(
                () => {
                    console.log('User registered');
                    this.router.navigate(['/login']);
                },
                (error) => {
                    console.error('Error registering user:', error);
                }
            );
        } else {
            this.showAlert();
        }
    }

    isFormValid() {
        return this.isNicknameValid && this.isNameValid && this.isEmailValid
            && this.isPasswordValid;
    }

    onFileSelected(event: any) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                this.register.avatar = reader.result as string; // Guardar la imagen en base64 en el objeto register
                console.log('File converted to Base64:', this.register.avatar);
            };
            reader.readAsDataURL(file); // Convierte el archivo a Base64
        }
    }

}

