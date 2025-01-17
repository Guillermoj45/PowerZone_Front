import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import { addIcons } from "ionicons";
import { closeCircle, personAddOutline } from "ionicons/icons";


@Component({
    selector: 'app-suggestions',
    templateUrl: './suggestions.component.html',
    styleUrls: ['./suggestions.component.scss'],
    standalone: true,
    imports: [
        IonicModule
    ]
})
export class SuggestionsComponent  implements OnInit {

    constructor() {
        addIcons({closeCircle, personAddOutline });
    }

  ngOnInit() {}

}
