import { Component } from '@angular/core';
import { RegistroService } from '../../Service/profile.service';
import { Register } from '../../Models/Register';
import {IonicModule} from "@ionic/angular";
import {CarrouselComponent} from "../../Component/carrousel/carrousel.component";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {Router, RouterModule} from "@angular/router";

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
    register: Register = {
        nickname: '',
        name: '',
        email: '',
        bornDate: '',
        password: '',
        avatar: ''
    };
    selectedFile: File | null = null;

    constructor(private registroService: RegistroService, private router: Router,) {}

    isNicknameValid = true;
    isNameValid = true;
    isEmailValid = true;
    isBornDateValid = true;
    isPasswordValid = true;

    validateNickname() {
        const nicknamePattern = /^[^\d]*$/;
        this.isNicknameValid = nicknamePattern.test(this.register.nickname);
    }

    validateName() {
        const namePattern = /^[^\d]*$/;
        this.isNameValid = namePattern.test(this.register.name);
    }

    validateEmail() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        this.isEmailValid = emailPattern.test(this.register.email);
    }

    validateBornDate() {
        this.isBornDateValid = !!this.register.bornDate;
    }

    validatePassword() {
        this.isPasswordValid = this.register.password.length >= 8;
    }

    onSubmit() {
        this.validateNickname();
        this.validateName();
        this.validateEmail();
        this.validateBornDate();
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
            console.log('Form not valid');
        }
    }

    isFormValid() {
        return this.isNicknameValid && this.isNameValid && this.isEmailValid && this.isBornDateValid && this.isPasswordValid;
    }

    onFileSelected(event: any) {
        this.selectedFile = event.target.files[0];
        console.log('File selected:', this.selectedFile);
    }
}
