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

    constructor(private authService: RegistroService, private router: Router) { }

    ngOnInit() {}

    onSubmit() {
        if (this.login.email && this.login.password) {
            this.authService.login(this.login).subscribe(
                (response: any) => {
                    console.log('Login successful', response);
                    this.router.navigate(['/posts']);
                },
                (error: any) => {
                    console.error('Login failed', error);
                }
            );
        } else {
            console.error('Email and password are required');
        }
    }
}
