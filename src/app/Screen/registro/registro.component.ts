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
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";
import {CarrouselComponent} from "../../Component/carrousel/carrousel.component";
import {RouterModule} from "@angular/router";

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
    ReactiveFormsModule,
    IonRow,
    CarrouselComponent,
    IonInputPasswordToggle,
    IonText,
    RouterModule,
    IonHeader,
    IonImg
  ]
})
export class RegistroComponent  implements OnInit {
  registroForm = new FormGroup({
    'name': new FormControl('', Validators.required),
    'correo': new FormControl('', [Validators.required, Validators.email]),
    'fechaNacimiento': new FormControl('', Validators.required),
    'password': new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {

  }
}
