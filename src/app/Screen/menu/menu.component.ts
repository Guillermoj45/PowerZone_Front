import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import { addIcons } from "ionicons";
import { home, search, add, restaurant, notifications, closeCircle } from "ionicons/icons";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
    imports: [
        IonicModule
    ]
})
export class MenuComponent  implements OnInit {

  constructor() {
      addIcons({ home, search, add, restaurant, notifications, closeCircle });
  }

  ngOnInit() {}

}
