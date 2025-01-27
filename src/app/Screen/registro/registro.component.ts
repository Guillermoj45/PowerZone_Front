import { Component, OnInit } from '@angular/core';
import {
    IonButton,
    IonCol,
    IonContent,
    IonGrid, IonHeader, IonImg,
    IonInput,
    IonInputPasswordToggle,
    IonItem,
    IonLabel, IonRouterLink,
    IonRow, IonText
} from "@ionic/angular/standalone";
import { NgOptimizedImage } from "@angular/common";
import { CarrouselComponent } from "../../Component/carrousel/carrousel.component";
import { RouterModule } from "@angular/router";
import { RegistroService } from "../../Service/profile.service";
import { Register } from "../../Models/Register";
import {FormsModule} from "@angular/forms";

@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.scss'],
    standalone: true,
    imports: [
        IonContent,
        IonGrid,
        IonCol,
        IonItem,
        IonInput,
        IonButton,
        IonRow,
        CarrouselComponent,
        IonInputPasswordToggle,
        IonText,
        RouterModule,
        IonImg,
        IonLabel,
        FormsModule
    ]
})
export class RegistroComponent implements OnInit {
    register: Register = {
        nickname: '',
        name: '',
        email: '',
        bornDate: '',
        password: '',
        avatar: undefined,
        activo: true
    };
    file: File | null = null;

    constructor(private registroService: RegistroService) { }

    ngOnInit() { }

    onSubmit() {
        if (this.register.nickname && this.register.name &&
            this.register.email && this.register.bornDate &&
            this.register.password) {

            if (this.file) {
                this.register.avatar = this.file.name;
            }

            this.registroService.registerUser(this.register).subscribe(
                response => {
                    console.log('User registered successfully', response);
                },
                error => {
                    console.error('Error registering user', error);
                }
            );
        } else {
            console.error('All fields are required');
        }
    }

    onFileSelected(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files.length > 0) {
            this.file = input.files[0];
        }
    }
}
