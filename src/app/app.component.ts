import { MenuComponent } from "./Screen/menu/menu.component";
import { IonicModule } from "@ionic/angular";
import { SuggestionsComponent } from "./Screen/suggestions/suggestions.component";
import { AfterViewInit, Component, HostListener, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { MenuSuggestionsService } from "./Service/menusuggestionsService.service";
import { NgIf } from "@angular/common";
import { MenuoriginalComponent } from "./Screen/menuoriginal/menuoriginal.component";

@Component({
    selector: "app-root",
    templateUrl: "app.component.html",
    imports: [
        MenuComponent,
        IonicModule,
        SuggestionsComponent,
        NgIf,
        MenuoriginalComponent,
    ],
    standalone: true,
})
export class AppComponent implements OnInit {
    menuVisible = true;
    suggestionsVisible = true;
    useAlternateMenu: boolean = false;
    headerVisible = true;

    constructor(
        private menuSuggestionsService: MenuSuggestionsService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    @HostListener("window:resize", ["$event"])
    onResize(event: any) {
        this.updateViewBasedOnScreenSize();
    }

    updateViewBasedOnScreenSize() {
        this.menuVisible = window.innerWidth > 1000;
        this.headerVisible = window.innerWidth < 1000;
    }

    closeHamburgerMenuIfNeeded() {
        // Ocultar el menú hamburguesa en pantallas pequeñas al navegar
        if (window.innerWidth < 1000) {
            this.menuVisible = false;
        }
    }

    ngOnInit() {
        // Configuración inicial basada en el tamaño de pantalla
        this.updateViewBasedOnScreenSize();

        // Escuchar eventos de navegación
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                const currentUrl = this.router.url;

                // Actualizar estado del menú alternativo según la ruta
                this.useAlternateMenu = currentUrl === "/notification";

                // Configurar visibilidad de menú y sugerencias según la ruta
                if (["/login", "/registro"].includes(currentUrl)) {
                    this.menuSuggestionsService.setMenuVisible(false);
                    this.menuSuggestionsService.setSuggestionsVisible(false);
                } else if (["/profile"].includes(currentUrl)) {
                    this.menuSuggestionsService.setMenuVisible(true);
                    this.menuSuggestionsService.setSuggestionsVisible(false);
                } else {
                    this.menuSuggestionsService.setMenuVisible(true);
                    this.menuSuggestionsService.setSuggestionsVisible(true);
                }

                // Ocultar menú hamburguesa si es necesario
                this.closeHamburgerMenuIfNeeded();

                // Actualizar estado basado en tamaño de pantalla
                this.updateViewBasedOnScreenSize();
            }
        });

        // Suscribirse a los cambios de visibilidad
        this.menuSuggestionsService.menuVisible$.subscribe((visible) => {
            this.menuVisible = visible;
        });

        this.menuSuggestionsService.suggestionsVisible$.subscribe((visible) => {
            this.suggestionsVisible = visible;
        });
    }
}
