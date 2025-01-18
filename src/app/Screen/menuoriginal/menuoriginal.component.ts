import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import { addIcons } from "ionicons";
import { home, search, add, restaurant, notifications, closeCircle } from "ionicons/icons";
import {Router} from "@angular/router";

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

    constructor(private router: Router) {
        addIcons({ home, search, add, restaurant, notifications, closeCircle });
    }
    navigateTo(path: string) {
        this.router.navigate([path]);
        console.log("HOLA BUENAS TARDES")
    }

  ngOnInit() {}

}
