import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {MenuComponent} from "../menu/menu.component";
import {FormsModule} from "@angular/forms";
import {Profile} from "../../Models/Profile";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    FormsModule
  ]
})
export class ProfileComponent  implements OnInit {

  profile: Profile = new Profile();

  constructor() { }

  ngOnInit() {

  }

  updateProfile() {

  }
}
