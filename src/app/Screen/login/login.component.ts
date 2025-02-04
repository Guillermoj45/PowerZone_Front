import { Component, OnInit } from '@angular/core';
import { CarrouselComponent } from "../../Component/carrousel/carrousel.component";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import {
    IonButton,
    IonCol,
    IonContent,
    IonGrid,
    IonImg,
    IonInput,
    IonInputPasswordToggle, IonItem, IonRow, IonText
} from "@ionic/angular/standalone";
import { Router, RouterLink } from "@angular/router";
import { Login } from '../../Models/Login';
import { RegistroService } from '../../Service/profile.service';
import { AlertController } from '@ionic/angular';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [
        CarrouselComponent,
        FormsModule,
        IonButton,
        IonCol,
        IonContent,
        IonGrid,
        IonImg,
        IonInput,
        IonInputPasswordToggle,
        IonItem,
        IonRow,
        IonText,
        RouterLink,
        ReactiveFormsModule
    ]
})
export class LoginComponent implements OnInit {
    login: Login = {
        email: '',
        password: ''
    };

    constructor(
        private authService: RegistroService,
        private router: Router,
        private alertController: AlertController
    ) { }

    ngOnInit() {}

    async showAlert(message: string) {
        const alert = await this.alertController.create({
            header: 'Error',
            message: message,
            buttons: ['OK']
        });
        await alert.present();
    }

    onSubmit() {
        if (this.login.email?.trim() == "" || this.login.password?.trim() == "") {
            this.showAlert('Para acceder se necesitan rellenar los campos');
            return;
        }

        this.authService.login(this.login).subscribe(
            (response: any) => {
                const token = response.token;
                if (token) {
                    sessionStorage.setItem('token', token);

                    console.log('Navigating to /posts');
                    this.router.navigate(['/posts']);

                } else {
                    this.showAlert('Login fallido: Dato invalidos');
                }
            },
            (error: any) => {
                console.error('Login fallido', error);
                this.showAlert('Login fallido: Dato invalidos');
            }
        );
    }
}
