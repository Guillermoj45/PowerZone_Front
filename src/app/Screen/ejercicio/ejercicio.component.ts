import { Component, OnInit } from '@angular/core';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonLabel, IonList, IonRow, IonText
} from "@ionic/angular/standalone";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrls: ['./ejercicio.component.scss'],
  standalone: true,
  imports: [
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCol,
    IonContent,
    IonLabel,
    IonList,
    IonRow,
    IonText,
    NgForOf
  ]
})
export class EjercicioComponent  implements OnInit {
  imagenes: string[] = [
  ];
  constructor() { }

  ngOnInit() {}

}
