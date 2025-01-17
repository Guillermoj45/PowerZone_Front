import { Component } from '@angular/core';
import {MenuComponent} from "./Screen/menu/menu.component";
import {IonicModule} from "@ionic/angular";
import {SuggestionsComponent} from "./Screen/suggestions/suggestions.component";


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
