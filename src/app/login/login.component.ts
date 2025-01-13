import { Component, OnInit } from '@angular/core';
import {CarrouselComponent} from "../carrousel/carrousel.component";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {
    IonButton,
    IonCol,
    IonContent,
    IonGrid,
    IonImg,
    IonInput,
    IonInputPasswordToggle, IonItem, IonRow, IonText
} from "@ionic/angular/standalone";
import {RouterLink} from "@angular/router";

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
export class LoginComponent  implements OnInit {

  registroForm = new FormGroup({
    'correo': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor() { }

  ngOnInit() {}

  onSubmit() {

  }
}
