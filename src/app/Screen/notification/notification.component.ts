import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss'],
    standalone: true,
    imports: [
        IonicModule
    ]
})
export class NotificationComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
