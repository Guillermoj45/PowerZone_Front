import {MenuComponent} from "./Screen/menu/menu.component";
import {IonicModule} from "@ionic/angular";
import {SuggestionsComponent} from "./Screen/suggestions/suggestions.component";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuSuggestionsService } from './Service/menusuggestionsService.service';
import { NgIf } from '@angular/common';
import {MenuoriginalComponent} from "./Screen/menuoriginal/menuoriginal.component";


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    imports: [
        MenuComponent,
        IonicModule,
        SuggestionsComponent,
        NgIf,
        MenuoriginalComponent
    ],
    standalone: true
})
export class AppComponent implements OnInit {
    menuVisible = true;
    suggestionsVisible = true;

    constructor(
        private menuSuggestionsService: MenuSuggestionsService,
        private router: Router
    ) {}

    ngOnInit() {
        // Suscribirse a los cambios de visibilidad
        this.menuSuggestionsService.menuVisible$.subscribe((visible) => {
            this.menuVisible = visible;
        });

        this.menuSuggestionsService.suggestionsVisible$.subscribe((visible) => {
            this.suggestionsVisible = visible;
        });

        // Escuchar cambios de ruta
        this.router.events.subscribe(() => {
            const currentRoute = this.router.url;

            /// Establecer visibilidad según la ruta
            if (['/login', '/registro'].includes(currentRoute)) {
                this.menuSuggestionsService.setMenuVisible(false);
                this.menuSuggestionsService.setSuggestionsVisible(false);
            } else if (['/profile'].includes(currentRoute)) {
                this.menuSuggestionsService.setMenuVisible(true);
                this.menuSuggestionsService.setSuggestionsVisible(false);
            } else {
                this.menuSuggestionsService.setMenuVisible(true);
                this.menuSuggestionsService.setSuggestionsVisible(true);
            }

        });
    }
}
