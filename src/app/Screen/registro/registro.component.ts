import {Component, OnInit} from '@angular/core';
import {RegistroService} from '../../Service/profile.service';
import {Register} from '../../Models/Register';
import {AlertController, IonicModule} from '@ionic/angular';
import {CarrouselComponent} from '../../Component/carrousel/carrousel.component';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
import {Router, RouterModule} from '@angular/router';
import {LoadingController} from "@ionic/angular/standalone";

@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    standalone: true,
    imports: [
        IonicModule,
        CarrouselComponent,
        RouterModule,
        NgIf,
        ReactiveFormsModule
    ],
    styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
    registerForm: FormGroup;
    // Objeto registro inicializado
    register: Register = new Register();
    // Variable para almacenar el string Base64 del archivo seleccionado
    avatarBase64: string = '';

    constructor(
        private fb: FormBuilder,
        private registroService: RegistroService,
        private router: Router,
        private alertController: AlertController,
        private loadingController: LoadingController
    ) {
        // Se crea el FormGroup con los validadores correspondientes
        this.registerForm = this.fb.group({
            nickname: [this.register.nickname, Validators.required],
            name: [this.register.name, [Validators.required, Validators.pattern(/^[^\d]+$/)]],
            email: [this.register.email, [Validators.required, Validators.email]],
            bornDate: [this.register.bornDate, Validators.required],
            password: [this.register.password, [Validators.required, Validators.minLength(8)]],
            // Nota: No se incluye avatar en el FormGroup, ya que se asignará desde la variable avatarBase64
        });
    }

    ngOnInit(): void {}

    async showAlert(message: string) {
        const alert = await this.alertController.create({
            header: 'Error',
            message,
            buttons: ['OK']
        });
        await alert.present();
    }

    async onSubmit() {
        if (this.registerForm.valid) {
            const loading = await this.loadingController.create({
                message: 'Registrando...',
            });
            await loading.present();

            this.register = { ...this.register, ...this.registerForm.value };
            this.register.avatar = this.avatarBase64;

            this.registroService.registerUser(this.register).subscribe({
                next: async () => {
                    console.info("Registro exitoso");
                    await loading.dismiss();
                    this.router.navigate(['/login']);
                },
                error: async (error) => {
                    console.error(error);
                    await loading.dismiss();
                    this.showAlert('Ha ocurrido un error al registrar el usuario.');
                }
            });
        } else {
            this.markFormTouched();
            this.showAlert('Hay campos vacíos o con información errónea.');
        }
    }

    // Función para marcar todos los controles del formulario como touched
    markFormTouched() {
        Object.values(this.registerForm.controls).forEach(control => {
            control.markAsTouched();
        });
    }

    // Función para convertir el archivo seleccionado a Base64 y asignarlo a la variable avatarBase64
    onFileSelected(event: any) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                this.avatarBase64 = reader.result as string;
                console.log('File converted to Base64:', this.avatarBase64);
            };
            reader.readAsDataURL(file);
        }
    }
}
