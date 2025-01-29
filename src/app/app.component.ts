import { MenuComponent } from "./Screen/menu/menu.component";
import {IonicModule, ModalController, ModalOptions} from "@ionic/angular";
import { SuggestionsComponent } from "./Screen/suggestions/suggestions.component";
import { AfterViewInit, Component, HostListener, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { MenuSuggestionsService } from "./Service/menusuggestionsService.service";
import { NgClass, NgIf } from "@angular/common";
import { MenuoriginalComponent } from "./Screen/menuoriginal/menuoriginal.component";
import { FooterComponent } from "./Screen/footer/footer.component";
import { Menu } from "./Service/Menu.service";
import { addIcons } from "ionicons";
import { settingsSharp } from "ionicons/icons";
import {NewPostComponent} from "./Screen/new-post/new-post.component";

@Component({
    selector: "app-root",
    templateUrl: "app.component.html",
    imports: [
        MenuComponent,
        IonicModule,
        SuggestionsComponent,
        NgIf,
        MenuoriginalComponent,
        FooterComponent,
    ],
    standalone: true,
})
export class AppComponent implements OnInit {
    menuVisible = true;
    suggestionsVisible = true;
    useAlternateMenu: boolean = false;
    headerVisible = true;
    footerVisible = true;
    isChatRoute = false; // Propiedad para verificar si estás en /chat

    constructor(
        private menuSuggestionsService: MenuSuggestionsService,
        private router: Router,
        private route: ActivatedRoute,
        private menuService: Menu,
        private modalController: ModalController
    ) {
      addIcons({settingsSharp})
    }

    @HostListener("window:resize", ["$event"])
    onResize(event: any) {
        this.updateViewBasedOnScreenSize();
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

        this.menuService.useAlternateMenu$.subscribe((useAlternateMenu) => {
            this.useAlternateMenu = useAlternateMenu;
        });

        // Escuchar eventos de navegación
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                const currentUrl = this.router.url;

                // Verificar si la ruta actual es /chat
                this.isChatRoute = currentUrl === "/chat";

                // Configurar visibilidad del footer según la ruta
                const hideFooter = ["/chat"].includes(currentUrl);
                this.footerVisible = !hideFooter;

                // Configurar visibilidad de menú y sugerencias según la ruta
                const hideMenus = ["/login", "/registro"].includes(currentUrl);
                this.menuSuggestionsService.setMenuVisible(!hideMenus);
                this.menuSuggestionsService.setSuggestionsVisible(!hideMenus);

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

    updateViewBasedOnScreenSize() {
        const screenWidth = window.innerWidth;
        const isAuthRoute = ["/login", "/registro"].includes(this.router.url);
        const isChatRoute = ["/chat"].includes(this.router.url);

        // Si es una ruta de autenticación, los menús no se muestran
        if (isAuthRoute) {
            this.menuVisible = false;
            this.suggestionsVisible = false;
        } else {
            this.menuVisible = screenWidth > 1000;
            this.suggestionsVisible = screenWidth > 1000;
        }

        // Configurar visibilidad del header y footer
        this.headerVisible = screenWidth < 1000 && !isAuthRoute;
        this.footerVisible = screenWidth < 1000 && !isAuthRoute && !isChatRoute;
    }

    async openAddPostModal() {
        const modal = await this.modalController.create({
            component: NewPostComponent
        } as ModalOptions);
        await modal.present();
    }

    logOut() {
        sessionStorage.clear();
        this.router.navigate(['/login']);
    }

}
