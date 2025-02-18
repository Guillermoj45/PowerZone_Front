import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {
    IonButton,
    IonCol,
    IonContent,
    IonGrid,
    IonImg,
    IonInput,
    IonInputPasswordToggle,
    IonItem,
    IonRow,
    IonText
} from '@ionic/angular/standalone';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {AlertController} from '@ionic/angular';
import {Login} from '../../Models/Login';
import {RegistroService} from '../../Service/profile.service';
import {CarrouselComponent} from '../../Component/carrousel/carrousel.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [
        CarrouselComponent,
        FormsModule,
        ReactiveFormsModule,
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
        RouterLink
    ]
})
export class LoginComponent implements OnInit {
    // Declaramos el FormGroup para el login
    loginForm: FormGroup;
    // Modelo de login que se actualizará con los datos del formulario
    login: Login = new Login();

    constructor(
        private fb: FormBuilder,
        private authService: RegistroService,
        private router: Router,
        private route: ActivatedRoute,
        private alertController: AlertController
    ) {
        // Se crea el formGroup con validadores:
        // - Email: requerido y debe tener formato de correo
        // - Password: requerido
        this.loginForm = this.fb.group({
            email: [this.login.email, [Validators.required, Validators.email]],
            password: [this.login.password, Validators.required]
        });
    }

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
        if (this.loginForm.invalid) {
            this.markFormTouched();
            this.showAlert('Para acceder se necesitan rellenar los campos correctamente.');
            return;
        }

        // Combina los datos actuales del modelo con los valores del formulario
        this.login = { ...this.login, ...this.loginForm.value };
        this.authService.login(this.login).subscribe(
            (response: any) => {
                const token = response.token;
                if (token) {
                    this.authService.isBanned(token).subscribe({
                        next: (response) => {
                            if (response == true) {
                                this.showAlert('Login fallido: Usuario baneado');
                            } else {
                                sessionStorage.setItem('token', token);
                                console.log('Navigating to /posts');
                                const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/posts';
                                this.router.navigateByUrl(returnUrl);
                            }
                        },
                        error: (error: any) => {
                            console.error('Error checking ban status', error);
                            this.showAlert('Error checking ban status');
                        }
                    });
                } else {
                    this.showAlert('Login fallido: Datos inválidos');
                }
            },
            (error: any) => {
                console.error('Login fallido', error);
                this.showAlert('Login fallido: Datos inválidos');
            }
        );
    }

    // Función para marcar todos los controles del formulario como "touched"
    markFormTouched() {
        Object.values(this.loginForm.controls).forEach(control => {
            control.markAsTouched();
        });
    }
}
