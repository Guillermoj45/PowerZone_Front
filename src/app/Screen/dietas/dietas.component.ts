import { Component, OnInit } from '@angular/core';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle, IonCol,
  IonContent, IonHeader, IonInput,
  IonItem, IonLabel,
  IonList, IonRow, IonSelect, IonSelectOption, IonText
} from "@ionic/angular/standalone";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-dietas',
  templateUrl: './dietas.component.html',
  styleUrls: ['./dietas.component.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonSelect,
    IonSelectOption,
    IonButton,
    IonHeader,
    IonText,
    IonRow,
    IonCol,
    NgForOf
  ]
})
export class DietasComponent  implements OnInit {
  imagenes: string[] = [
    'https://picsum.photos/800/400?random=2',
    'https://picsum.photos/800/400?random=3',
    'https://picsum.photos/800/400?random=4',
    'https://picsum.photos/800/400?random=5'
  ];

  constructor() { }

  ngOnInit() {}

  guardar() {

  }
}
