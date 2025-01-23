import { Component, OnInit } from '@angular/core';
import {IonContent} from "@ionic/angular/standalone";
import {IonicModule} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
    selector: 'app-health',
    templateUrl: './health.component.html',
    styleUrls: ['./health.component.scss'],
    standalone: true,
    imports: [
        IonicModule
    ]
})
export class HealthComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

    navigateTo(path: string) {
        this.router.navigate([path]);
    }

}
