import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import { home, search, add, restaurant, notifications, closeCircle, personCircleOutline } from "ionicons/icons";
import {addIcons} from "ionicons";
import {Router} from "@angular/router";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: true,
    imports: [
        IonicModule
    ]
})
export class FooterComponent  implements OnInit {

    constructor(private router: Router) {
        addIcons({ home, search, add, restaurant, notifications, closeCircle, personCircleOutline });
    }

  ngOnInit() {}

    goToUrl(url:String) {
        this.router.navigate([url]);
    }

}
