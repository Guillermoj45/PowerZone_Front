import { MenuComponent } from "./Screen/menu/menu.component";
import { IonicModule, ModalController, ModalOptions } from "@ionic/angular";
import { SuggestionsComponent } from "./Screen/suggestions/suggestions.component";
import { Component, HostListener, OnInit, OnDestroy } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { MenuSuggestionsService } from "./Service/menusuggestionsService.service";
import { NgClass, NgIf } from "@angular/common";
import { MenuoriginalComponent } from "./Screen/menuoriginal/menuoriginal.component";
import { FooterComponent } from "./Screen/footer/footer.component";
import { Menu } from "./Service/Menu.service";
import { addIcons } from "ionicons";
import { settingsSharp } from "ionicons/icons";
import { NewPostComponent } from "./Screen/new-post/new-post.component";
import { TutorialService } from "./Service/tutorial.service";

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
export class AppComponent implements OnInit, OnDestroy {
  menuVisible = true;
  suggestionsVisible = true;
  useAlternateMenu: boolean = false;
  headerVisible = true;
  footerVisible = true;
  isChatRoute = false; // Propiedad para verificar si estás en /chat
  private routerSubscription: any;

  constructor(
    private menuSuggestionsService: MenuSuggestionsService,
    private router: Router,
    private menuService: Menu,
    private modalController: ModalController,
    private tutorialService: TutorialService
  ) {
    addIcons({ settingsSharp });
  }

  @HostListener("window:resize", ["$event"])
  onResize(event: any) {
    this.updateViewBasedOnScreenSize();
  }

  ngOnInit() {
    // Suscripción a los cambios de ruta
    this.routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Verificar si la ruta es /chat
        this.isChatRoute = event.urlAfterRedirects === "/chat";

        // Actualizar visibilidad del footer y menús
        this.updateViewBasedOnScreenSize();
      }
    });
  }

  ngOnDestroy() {
    // Cancelar la suscripción cuando el componente se destruye
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  // Método para manejar la visibilidad según el tamaño de pantalla
  updateViewBasedOnScreenSize() {
    const screenWidth = window.innerWidth;
    const isAuthRoute = ["/login", "/registro", "/recu"].includes(this.router.url);
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

  // Método para abrir el modal para agregar un nuevo post
  async openAddPostModal() {
    const modal = await this.modalController.create({
      component: NewPostComponent,
    } as ModalOptions);
    await modal.present();
  }

  // Método para cerrar sesión
  logOut() {
    sessionStorage.clear();
    this.router.navigate(["/login"]);
  }
}
