import { Component } from '@angular/core';
import {MenuComponent} from "./menu/menu.component";
import {IonicModule} from "@ionic/angular";
import {SuggestionsComponent} from "./suggestions/suggestions.component";


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    imports: [
        MenuComponent,
        IonicModule,
        SuggestionsComponent
    ],
    standalone: true
})
export class AppComponent {
  constructor() {}
}
