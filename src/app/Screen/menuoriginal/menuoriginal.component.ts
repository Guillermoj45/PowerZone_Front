import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import { addIcons } from "ionicons";
import { home, search, add, restaurant, notifications, closeCircle } from "ionicons/icons";

@Component({
    selector: 'app-menuoriginal',
    templateUrl: './menuoriginal.component.html',
    styleUrls: ['./menuoriginal.component.scss'],
    standalone: true,
    imports: [
        IonicModule
    ]
})
export class MenuoriginalComponent  implements OnInit {

    constructor() {
        addIcons({ home, search, add, restaurant, notifications, closeCircle });
    }

  ngOnInit() {}

}
