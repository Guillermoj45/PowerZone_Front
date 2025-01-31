import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../../Models/Post";
import {IonAvatar, IonButton, IonCol, IonGrid, IonIcon, IonImg, IonLabel, IonRow} from "@ionic/angular/standalone";
import {NgForOf} from "@angular/common";
import {PostDetails} from "../../../Models/PostDetails";

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss'],
  imports: [
    IonGrid,
    IonRow,
    IonCol,
    IonAvatar,
    IonImg,
    IonButton,
    IonIcon,
    IonLabel,
    NgForOf
  ],
  standalone: true
})
export class PublicationComponent implements OnInit {

  @Input() post!: PostDetails;

  constructor() {
  }

  ngOnInit() {
    console.log('Post', this.post);
  }

}
