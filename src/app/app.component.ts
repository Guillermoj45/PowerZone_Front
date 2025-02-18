import {MenuComponent} from "./Screen/menu/menu.component";
import {IonicModule, ModalController, ModalOptions, ToastButton} from "@ionic/angular";
import {SuggestionsComponent} from "./Screen/suggestions/suggestions.component";
import {Component, HostListener, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {MenuSuggestionsService} from "./Service/menusuggestionsService.service";
import {NgIf} from "@angular/common";
import {MenuoriginalComponent} from "./Screen/menuoriginal/menuoriginal.component";
import {FooterComponent} from "./Screen/footer/footer.component";
import {Menu} from "./Service/Menu.service";
import {addIcons} from "ionicons";
import {addCircle, chatbubbles, heart, logoIonitron, paperPlaneOutline, personAdd, settingsSharp} from "ionicons/icons";
import {NewPostComponent} from "./Screen/new-post/new-post.component";
import {WebsocketServiceNotification} from "./Service/WebSocketNotification";
import {ToastController} from '@ionic/angular/standalone';
import {MegaNotification} from "./Models/MegaNotification";

@Component({
    selector: "app-root",
    templateUrl: "app.component.html",
    imports: [
        MenuComponent,
        IonicModule,
        NgIf,
        MenuoriginalComponent,
        FooterComponent,
        SuggestionsComponent,
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
        private route: ActivatedRoute,
        private webSocketNotificationService: WebsocketServiceNotification,
        private toastController: ToastController
    ) {
        addIcons({settingsSharp, logoIonitron, personAdd, addCircle, chatbubbles, heart, paperPlaneOutline});
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

    webSocketNotification() {
        this.webSocketNotificationService.connectToNotification();
        this.webSocketNotificationService.getMessageObservable().subscribe({
            next: (megaNotification) => {
                this.notification(megaNotification[0]);
            },
            error: (error) => {
                console.error('Error al cargar el perfil:', error);
            },
            complete: () => {
                console.log('Profile loaded');
            }
        });
    }

    notification(meganotification: MegaNotification) {
        switch (meganotification.type) {
            case "MESSAGE":
                if (this.router.url === "/chat/" + meganotification.groupMessenger.grupouser.group.id) {
                    break;
                }
                const mensaje = 'Has recibido un mensaje de ' + meganotification.emitter.nickName;
                const buttons: ToastButton[] = [
                    {
                        side: 'end',
                        text: 'Ver',
                        handler: () => {
                            this.router.navigate(["/prueba/"+ meganotification.groupMessenger.grupouser.group.id]);
                        }
                    }
                ];
                this.presentToast('bottom', mensaje, buttons, 'chatbubbles').then(r => console.log("Toast presentado"));
                break;
            case "NEW_POST":
                const post = meganotification.emitter.nickName + ' ha publicado un nuevo post';
                const buttonsPost: ToastButton[] = [
                    {
                        side: 'end',
                        text: 'Ver',
                        handler: () => {
                            if (meganotification.postDto?.post) {
                                this.router.navigate([`/post-details/${meganotification.postDto?.post.id}`]);
                            }
                        }
                    }
                ];
                this.presentToast('bottom', post, buttonsPost, 'addCircle').then(r => console.log("Toast presentado"));
                break;
            case "NEW_LIKE":
                const like = meganotification.emitter.nickName + ' ha dado like a tu post';
                const buttonsLike: ToastButton[] = [
                    {
                        side: 'end',
                        text: 'Ver post',
                        handler: () => {
                            if (meganotification.postDto?.post) {
                                this.router.navigate([`/post-details/${meganotification.postDto?.post.id}`]);
                            }
                        }
                    },
                    {
                        side: 'end',
                        text: 'Ver perfil',
                        handler: () => {
                            this.router.navigate([`/profile/${meganotification.emitter.id}`]);
                        }
                    }
                ];
                this.presentToast('bottom', like, buttonsLike, 'heart').then(r => console.log("Toast presentado"));
                break;
            case "NEW_FOLLOWER":
                const follower = meganotification.emitter.nickName + ' te ha seguido';
                const buttonsFollower: ToastButton[] = [
                    {
                        side: 'end',
                        text: 'Ver perfil',
                        handler: () => {
                            this.router.navigate([`/profile/${meganotification.emitter.id}`]);
                        }
                    }
                ];
                this.presentToast('bottom', follower, buttonsFollower, 'personAdd').then(r => console.log("Toast presentado"));
                break;
            case "NEW_COMMENT":
                const comment = meganotification.emitter.nickName + ' ha comentado tu post';
                const buttonsComment: ToastButton[] = [
                    {
                        side: 'end',
                        text: 'Ver post',
                        handler: () => {
                            if (meganotification.postDto?.post) {
                                this.router.navigate([`/post-details/${meganotification.postDto?.post.id}`]);
                            }
                        }
                    },
                    {
                        side: 'end',
                        text: 'Ver perfil',
                        handler: () => {
                            this.router.navigate([`/profile/${meganotification.emitter.id}`]);
                        }
                    }
                ];
                this.presentToast('bottom', comment, buttonsComment, 'chatbubbles').then(r => console.log("Toast presentado"));
                break;
        }
        // this.presentToast('bottom', meganotification.emitter.nickName).then(r => console.log("Toast presentado"));
    }

    async presentToast(position: 'top' | 'middle' | 'bottom', message: string = 'Hello World!', buttons: ToastButton[] = [], Icon?: 'chatbubbles' | 'addCircle' | 'personAdd' | 'heart') {
        const toast = await this.toastController.create({
            message: message,
            duration: 1500,
            position: position,
            buttons: buttons,
            icon: Icon
        });

        await toast.present();
    }

    ngOnInit() {
        this.webSocketNotification();
        // Configuración inicial basada en el tamaño de pantalla
        this.updateViewBasedOnScreenSize();
        this.menuService.useAlternateMenu$.subscribe((useAlternateMenu) => {
            this.useAlternateMenu = useAlternateMenu;
        });
        // Escuchar eventos de navegación
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                const currentUrl = this.router.url;
                const queryParams = this.route.snapshot.queryParams;
                // Verificar si la ruta actual es /chat
                this.isChatRoute = currentUrl === "/chat";
                // Configurar visibilidad del footer según la ruta
                const hideFooter = ["/chat"].includes(currentUrl);
                this.footerVisible = !hideFooter;
                // Configurar visibilidad de menú y sugerencias según la ruta
                const hideMenus = ["/login", "/registro", "/recu"].includes(currentUrl) || queryParams['fromShare'] === "true";
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
        this.route.queryParams.subscribe(params => {
            console.log("Query Params:", params);
            if (params['fromShare'] === "true") {
                console.log("Ocultando menús por fromShare");
                setTimeout(() => {
                    this.menuSuggestionsService.setMenuVisible(false);
                    this.menuSuggestionsService.setSuggestionsVisible(false);
                }, 0);
            }
        });
    }

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

    async openAddPostModal() {
        const modal = await this.modalController.create({
            component: NewPostComponent,
        } as ModalOptions);
        await modal.present();
    }

    logOut() {
        sessionStorage.clear();
        this.router.navigate(["/login"]);
    }

    ngOnDestroy() {
        if (this.routerSubscription) {
            this.routerSubscription.unsubscribe();
        }
    }
}
